import "server-only";

import mongoose from "mongoose";


function nullableString(maxlength, options = {}) {
  return {
    type: String,
    default: null,
    trim: true,
    maxlength,
    ...options,
  };
}


const ContactSubmissionSchema =
  new mongoose.Schema(
    {
      schemaVersion: {
        type: Number,
        default: 2,
      },

      formType:
        nullableString(80),

      source:
        nullableString(120),

      topic:
        nullableString(160),

      pageSlug:
        nullableString(200),

      name:
        nullableString(100),

      email:
        nullableString(254, {
          lowercase: true,
        }),

      phone:
        nullableString(40),

      businessName:
        nullableString(160),

      service:
        nullableString(120),

      estimatedBudget:
        nullableString(80),

      interestedIn: {
        type: [String],
        default: null,
      },

      timeline:
        nullableString(80),

      country:
        nullableString(100),

      countryCode:
        nullableString(20),

      message:
        nullableString(500000),

      submittedFields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        default: () => ({}),
      },

      status: {
        type: String,
        enum: [
          "new",
          "contacted",
          "closed",
        ],
        default: "new",
      },
    },
    {
      minimize: false,
      strict: "throw",
      timestamps: true,
    },
  );


ContactSubmissionSchema.index({
  status: 1,
  createdAt: -1,
});


ContactSubmissionSchema.index({
  formType: 1,
  createdAt: -1,
});


const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model(
    "ContactSubmission",
    ContactSubmissionSchema,
  );


export default ContactSubmission;
