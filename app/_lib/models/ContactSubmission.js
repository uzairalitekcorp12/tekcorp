import "server-only";

import mongoose from "mongoose";


const ContactSubmissionSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 254,
        match: [
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "A valid email address is required.",
        ],
      },

      phone: {
        type: String,
        trim: true,
        maxlength: 21,
      },

      businessName: {
        type: String,
        trim: true,
        maxlength: 160,
      },

      estimatedBudget: {
        type: String,
        trim: true,
        maxlength: 80,
      },

      interestedIn: [
        {
          type: String,
          trim: true,
          maxlength: 100,
        },
      ],

      timeline: {
        type: String,
        trim: true,
        maxlength: 80,
      },

      country: {
        type: String,
        trim: true,
        maxlength: 100,
      },

      countryCode: {
        type: String,
        trim: true,
        maxlength: 12,
      },

      source: {
        type: String,
        enum: [
          "contact-page",
          "contact-section",
          "landing-hero",
          "website",
        ],
        default: "website",
      },

      message: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 10000,
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
      timestamps: true,
    },
  );


ContactSubmissionSchema.index({
  status: 1,
  createdAt: -1,
});


const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model(
    "ContactSubmission",
    ContactSubmissionSchema,
  );


export default ContactSubmission;
