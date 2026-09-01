import "server-only";

import mongoose from "mongoose";


function createSlug(value) {
  return String(
    value ?? "",
  )
    .normalize(
      "NFKD",
    )
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .toLowerCase()
    .replace(
      /[^a-z0-9]+/g,
      "-",
    )
    .replace(
      /^-+|-+$/g,
      "",
    )
    .slice(
      0,
      200,
    )
    .replace(
      /-+$/g,
      "",
    );
}


function isSupportedImageSource(value) {
  if (!value) {
    return true;
  }

  const source =
    String(
      value,
    ).trim();

  if (
    source.startsWith(
      "/",
    ) &&
    !source.startsWith(
      "//",
    )
  ) {
    return true;
  }

  try {
    return [
      "http:",
      "https:",
    ].includes(
      new URL(
        source,
      ).protocol,
    );
  } catch {
    return false;
  }
}


function imageField({
  required = false,
} = {}) {
  return {
    type:
      String,

    required,

    trim:
      true,

    maxlength:
      4096,

    validate: {
      validator:
        isSupportedImageSource,

      message:
        "Image sources must be root-relative paths or HTTP(S) URLs.",
    },
  };
}


const CaseStudySchema =
  new mongoose.Schema(
    {
      title: {
        type:
          String,

        required:
          true,

        trim:
          true,

        maxlength:
          200,
      },

      /*
       * Stored database slug is the canonical case-study route.
       *
       * Existing slugs are preserved even if the project title changes.
       */
      slug: {
        type:
          String,

        required:
          true,

        unique:
          true,

        index:
          true,

        trim:
          true,

        lowercase:
          true,

        maxlength:
          200,

        match: [
          /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          "Case-study slugs may contain lowercase letters, numbers and hyphens only.",
        ],
      },

      category: {
        type:
          String,

        required:
          true,

        index:
          true,

        trim:
          true,

        maxlength:
          100,
      },

      tags: [
        {
          type:
            String,

          trim:
            true,

          maxlength:
            100,
        },
      ],

      shortDescription: {
        type:
          String,

        trim:
          true,

        maxlength:
          1500,
      },

      thumbnail:
        imageField({
          required:
            true,
        }),

      heroImage:
        imageField(),

      sections: [
        {
          heading: {
            type:
              String,

            trim:
              true,

            maxlength:
              240,
          },

          content: {
            type:
              String,

            maxlength:
              30000,
          },
        },
      ],

      gallery: [
        imageField(),
      ],

      featured: {
        type:
          Boolean,

        default:
          false,

        index:
          true,
      },

      status: {
        type:
          String,

        enum: [
          "draft",
          "published",
        ],

        default:
          "draft",

        index:
          true,
      },
    },
    {
      timestamps:
        true,
    },
  );


CaseStudySchema.index(
  {
    status:
      1,

    featured:
      -1,

    createdAt:
      -1,
  },
);


CaseStudySchema.pre(
  "validate",
  function prepareCaseStudy() {
    /*
     * Preserve an existing slug.
     *
     * Only create a slug when a new record does not already have one.
     */
    if (
      !this.slug
    ) {
      const baseSlug =
        createSlug(
          this.title,
        ) ||
        "case-study";

      const suffix =
        String(
          this._id,
        ).slice(
          -8,
        );

      this.slug =
        `${baseSlug.slice(
          0,
          190,
        )}-${suffix}`;
    }


    if (
      Array.isArray(
        this.tags,
      )
    ) {
      const seen =
        new Set();

      this.tags =
        this.tags.filter(
          (tag) => {
            const value =
              String(
                tag || "",
              ).trim();

            const key =
              value.toLowerCase();

            if (
              !value ||
              seen.has(
                key,
              )
            ) {
              return false;
            }

            seen.add(
              key,
            );

            return true;
          },
        );
    }
  },
);


const CaseStudy =
  mongoose.models.CaseStudy ||
  mongoose.model(
    "CaseStudy",
    CaseStudySchema,
  );


export default CaseStudy;
