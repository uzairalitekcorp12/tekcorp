"use server";

import connectMongoDB from "../_lib/db/mongodb";
import ContactSubmission from "../_lib/models/ContactSubmission";
import { saveLocalContactSubmission } from "../_lib/data/localContactSubmissions";
import { runContentQuery } from "../_lib/data/dataSource";
import { checkContactRateLimit } from "../_lib/security/contactRateLimit";


function readField(formData, name, maxLength) {
  return String(formData.get(name) || "")
    .trim()
    .slice(0, maxLength);
}


function readFirstField(formData, names, maxLength) {
  for (const name of names) {
    const value = readField(formData, name, maxLength);

    if (value) {
      return value;
    }
  }

  return "";
}


export async function submitContact(_previousState, formData) {
  const website = readField(formData, "website", 200);
  if (website) {
    return { ok: true, success: true, message: "Thank you. Your enquiry has been received." };
  }

  const name = readFirstField(formData, ["name", "fullName"], 100);
  const email = readField(formData, "email", 254).toLowerCase();
  const message = readFirstField(formData, ["message", "projectDetails"], 10000);
  const source = readField(formData, "source", 30) || "website";

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 2
  ) {
    return {
      ok: false,
      success: false,
      message: "Please enter your full name, a valid email address and a brief message so we can assist you properly.",
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

  const submission = {
    name,
    email,
    message,
    source: [
      "contact-page",
      "contact-section",
      "landing-hero",
      "website",
    ].includes(source)
      ? source
      : "website",
    phone: readFirstField(formData, ["fullPhone", "phone"], 21),
    businessName: readFirstField(formData, ["company", "businessName"], 160),
    estimatedBudget: readFirstField(formData, ["budget", "estimatedBudget"], 80),
    interestedIn: [readFirstField(formData, ["service", "interestedIn"], 100)].filter(Boolean),
    timeline: readField(formData, "timeline", 80),
    country: readField(formData, "country", 100),
    countryCode: readField(formData, "countryCode", 12),
  };

  try {
    await runContentQuery({
      label: "submitContact",
      database: async () => {
        await connectMongoDB();
        return ContactSubmission.create(submission);
      },
      local: () => {
        if (process.env.NODE_ENV === "production") {
          throw new Error(
            "Contact submissions require MongoDB in production.",
          );
        }

        return saveLocalContactSubmission(submission);
      },
    });
  } catch (error) {
    console.error("[contact] Unable to save submission", error);

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

