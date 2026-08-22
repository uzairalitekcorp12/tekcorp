import mongoose from "mongoose";

const { Schema } = mongoose;

const ServiceProjectImageSchema = new Schema(
  {
    src: {
      type: String,
      required: true,
      trim: true,
    },

    alt: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const ServiceProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 180,
    },

    category: {
      type: String,
      default: "Digital Product",
      trim: true,
      maxlength: 120,
    },

    summary: {
      type: String,
      default: "",
      trim: true,
      maxlength: 320,
    },

    services: {
      type: [String],
      default: [],
      set(values) {
        if (!Array.isArray(values)) {
          return [];
        }

        return [
          ...new Set(
            values
              .filter(Boolean)
              .map((value) => String(value).trim().toLowerCase()),
          ),
        ];
      },
    },

    image: {
      type: ServiceProjectImageSchema,
      required: true,
    },

    href: {
      type: String,
      default: "/Contact",
      trim: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
      min: 0,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },

    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    collection: "service_projects",
  },
);

ServiceProjectSchema.index({
  services: 1,
  status: 1,
  order: 1,
  publishedAt: -1,
});

ServiceProjectSchema.index({
  featured: 1,
  status: 1,
  order: 1,
});

const ServiceProject =
  mongoose.models.ServiceProject ||
  mongoose.model("ServiceProject", ServiceProjectSchema);

export default ServiceProject;
