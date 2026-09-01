"use server";

import connectMongoDB from "../_lib/db/mongodb";
import ContactSubmission from "../_lib/models/ContactSubmission";
import { checkContactRateLimit } from "../_lib/security/contactRateLimit";


const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const MAX_FIELDS = 80;
const MAX_VALUES_PER_FIELD = 20;
const DEFAULT_VALUE_LENGTH = 100000;
const MAX_TOTAL_TEXT_LENGTH = 1000000;


const FIELD_LENGTHS =
  new Map(
    Object.entries({
      formType: 80,
      source: 120,
      topic: 160,
      pageSlug: 200,
      name: 100,
      fullName: 100,
      email: 254,
      phone: 40,
      fullPhone: 40,
      company: 160,
      businessName: 160,
      service: 120,
      interestedIn: 120,
      budget: 80,
      estimatedBudget: 80,
      timeline: 80,
      country: 100,
      countryCode: 20,
      message: 500000,
      projectDetails: 500000,
    }),
  );


const SENSITIVE_FIELD_PATTERN =
  /(?:password|passwd|passcode|secret|token|authorization|cookie|session|cardnumber|cvv|cvc)/i;


const RESERVED_FIELD_NAMES =
  new Set([
    "__proto__",
    "constructor",
    "prototype",
  ]);


function isSafeFieldName(name) {
  return (
    /^[A-Za-z][A-Za-z0-9_-]{0,77}(?:\[\])?$/.test(name) &&
    !RESERVED_FIELD_NAMES.has(name) &&
    !SENSITIVE_FIELD_PATTERN.test(name)
  );
}


function normalizeFile(value) {
  if (
    !value ||
    typeof value !== "object"
  ) {
    return null;
  }

  return {
    kind: "file",
    name:
      typeof value.name === "string"
        ? value.name.trim().slice(0, 255) || null
        : null,
    contentType:
      typeof value.type === "string"
        ? value.type.trim().slice(0, 120) || null
        : null,
    size:
      Number.isSafeInteger(value.size) &&
      value.size >= 0
        ? value.size
        : null,
  };
}


function collectSubmittedFields(formData) {
  const fields =
    Object.create(null);
  let entryCount = 0;
  let inspectedEntryCount = 0;
  let totalTextLength = 0;
  let limitExceeded = false;

  for (const [rawName, rawValue] of formData.entries()) {
    inspectedEntryCount += 1;

    if (
      entryCount >= MAX_FIELDS ||
      inspectedEntryCount > MAX_FIELDS * 2
    ) {
      break;
    }

    const name =
      String(rawName).trim();

    if (
      name === "website" ||
      name.startsWith("$ACTION_") ||
      !isSafeFieldName(name)
    ) {
      continue;
    }

    const existingValue =
      fields[name];
    const existingCount =
      Array.isArray(existingValue)
        ? existingValue.length
        : existingValue === undefined
          ? 0
          : 1;

    if (
      existingCount >=
      MAX_VALUES_PER_FIELD
    ) {
      continue;
    }

    let value;

    if (typeof rawValue === "string") {
      const configuredLimit =
        FIELD_LENGTHS.get(name) ||
        DEFAULT_VALUE_LENGTH;
      const remainingLength =
        Math.max(
          0,
          MAX_TOTAL_TEXT_LENGTH -
            totalTextLength,
        );
      const valueLimit =
        Math.min(
          configuredLimit,
          remainingLength,
        );
      const text =
        rawValue.trim();

      if (
        text.length >
        valueLimit
      ) {
        limitExceeded = true;
        continue;
      }

      totalTextLength +=
        text.length;
      value = text || null;
    } else {
      value =
        normalizeFile(rawValue);
    }

    if (existingValue === undefined) {
      fields[name] = value;
    } else if (Array.isArray(existingValue)) {
      existingValue.push(value);
    } else {
      fields[name] = [
        existingValue,
        value,
      ];
    }

    entryCount += 1;
  }

  return {
    fields: {
      ...fields,
    },
    limitExceeded,
  };
}


function readFirstText(fields, names) {
  for (const name of names) {
    const fieldValue =
      fields[name];
    const values =
      Array.isArray(fieldValue)
        ? fieldValue
        : [fieldValue];

    for (const value of values) {
      if (
        typeof value === "string" &&
        value
      ) {
        return value;
      }
    }
  }

  return null;
}


function readAllText(fields, names) {
  const values = [];

  for (const name of names) {
    const fieldValue =
      fields[name];
    const candidates =
      Array.isArray(fieldValue)
        ? fieldValue
        : [fieldValue];

    for (const value of candidates) {
      if (
        typeof value === "string" &&
        value &&
        !values.includes(value)
      ) {
        values.push(value);
      }
    }
  }

  return values.length
    ? values
    : null;
}


export async function submitContact(_previousState, formData) {
  if (
    !formData ||
    typeof formData.entries !== "function"
  ) {
    return {
      ok: false,
      success: false,
      message:
        "The submitted form could not be read. Please try again.",
    };
  }

  const honeypot =
    formData.get("website");

  if (
    typeof honeypot === "string" &&
    honeypot.trim()
  ) {
    return {
      ok: true,
      success: true,
      message:
        "Thank you. Your enquiry has been received.",
    };
  }

  const {
    fields: submittedFields,
    limitExceeded,
  } =
    collectSubmittedFields(formData);

  if (
    limitExceeded
  ) {
    return {
      ok: false,
      success: false,
      message: "Your submission is too long to store safely. Please keep the total form content under 1,000,000 characters.",
    };
  }
  const name =
    readFirstText(
      submittedFields,
      ["name", "fullName"],
    );
  const email =
    readFirstText(
      submittedFields,
      ["email"],
    )?.toLowerCase() ||
    null;
  const message =
    readFirstText(
      submittedFields,
      ["message", "projectDetails"],
    );

  if (
    !email ||
    !EMAIL_PATTERN.test(email)
  ) {
    return {
      ok: false,
      success: false,
      message:
        "Please enter a valid email address so we can respond to your submission.",
    };
  }

  const rateLimit = checkContactRateLimit({
    key: email,
  });

  if (!rateLimit.allowed) {
    return {
      ok: false,
      success: false,
      message: "We have received several requests from this email address. Please wait a moment before submitting again.",
    };
  }

  const service =
    readFirstText(
      submittedFields,
      ["service", "interestedIn"],
    );
  const submission = {
    schemaVersion: 2,
    formType:
      readFirstText(
        submittedFields,
        ["formType"],
      ),
    source:
      readFirstText(
        submittedFields,
        ["source"],
      ),
    topic:
      readFirstText(
        submittedFields,
        ["topic"],
      ),
    pageSlug:
      readFirstText(
        submittedFields,
        ["pageSlug"],
      ),
    name,
    email,
    message,
    phone:
      readFirstText(
        submittedFields,
        ["fullPhone", "phone"],
      ),
    businessName:
      readFirstText(
        submittedFields,
        ["company", "businessName"],
      ),
    service,
    estimatedBudget:
      readFirstText(
        submittedFields,
        ["budget", "estimatedBudget"],
      ),
    interestedIn:
      readAllText(
        submittedFields,
        ["service", "interestedIn"],
      ),
    timeline:
      readFirstText(
        submittedFields,
        ["timeline"],
      ),
    country:
      readFirstText(
        submittedFields,
        ["country"],
      ),
    countryCode:
      readFirstText(
        submittedFields,
        ["countryCode"],
      ),
    submittedFields,
  };

  try {
    await connectMongoDB();
    await ContactSubmission.create(
      submission,
    );
  } catch (error) {
    console.error(
      "[contact] Unable to save submission",
      {
        name:
          error instanceof Error
            ? error.name
            : "UnknownError",
        code:
          error &&
          typeof error === "object" &&
          "code" in error
            ? error.code
            : null,
      },
    );

    return {
      ok: false,
      success: false,
      message: "We were unable to submit your enquiry at this time. Please try again shortly or contact us directly by email.",
    };
  }

  return {
    ok: true,
    success: true,
    message: "Thank you. Your enquiry has been received successfully. Our team will review the details and contact you shortly.",
  };
}
