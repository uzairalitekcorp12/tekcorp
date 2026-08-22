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
      message: "Please provide your name, a valid email and a message.",
    };
  }

  const rateLimit = checkContactRateLimit({
    key: email,
  });

  if (!rateLimit.allowed) {
    return {
      ok: false,
      success: false,
      message: "Too many requests. Please try again shortly.",
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
  };

  try {
    await runContentQuery({
      label: "submitContact",
      database: async () => {
        await connectMongoDB();
        return ContactSubmission.create(submission);
      },
      local: () => saveLocalContactSubmission(submission),
    });
  } catch (error) {
    console.error("[contact] Unable to save submission", error);

    return {
      ok: false,
      success: false,
      message: "We could not receive your message. Please try again.",
    };
  }

  return {
    ok: true,
    success: true,
    message: "Thanks. We received your message and will be in touch.",
  };
}


export async function submitContactSubmission(previousState, formData) {
  return submitContact(previousState, formData);
}