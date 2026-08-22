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


function imageField() {
  return {
    type:
      String,

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


const ArticleSchema =
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
       * Stored database slug is the canonical route value.
       *
       * Frontend components should link using article.slug directly.
       * They should NOT generate a new slug from the title.
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
          "Article slugs may contain lowercase letters, numbers and hyphens only.",
        ],
      },

      category: {
        type:
          String,

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

      excerpt: {
        type:
          String,

        trim:
          true,

        maxlength:
          1000,
      },

      thumbnail:
        imageField(),

      heroImage:
        imageField(),

      author: {
        name: {
          type:
            String,

          trim:
            true,

          maxlength:
            120,
        },

        image:
          imageField(),
      },

      content: [
        {
          type: {
            type:
              String,

            enum: [
              "heading",
              "paragraph",
              "image",
            ],

            required:
              true,
          },

          text: {
            type:
              String,

            maxlength:
              30000,
          },

          image:
            imageField(),

          alt: {
            type:
              String,

            trim:
              true,

            maxlength:
              300,
          },
        },
      ],

      trending: {
        type:
          Boolean,

        default:
          false,

        index:
          true,
      },

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

      publishedAt: {
        type:
          Date,

        index:
          true,
      },
    },
    {
      timestamps:
        true,
    },
  );


ArticleSchema.index(
  {
    status:
      1,

    publishedAt:
      -1,
  },
);


ArticleSchema.index(
  {
    status:
      1,

    trending:
      1,

    publishedAt:
      -1,
  },
);


ArticleSchema.pre(
  "validate",
  function prepareArticle() {
    /*
     * Preserve an existing slug.
     *
     * Only create one when the record has no slug yet. This avoids changing
     * old CMS URLs after a title is edited.
     */
    if (
      !this.slug
    ) {
      const baseSlug =
        createSlug(
          this.title,
        ) ||
        "article";

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
      this.status ===
        "published" &&
      !this.publishedAt
    ) {
      this.publishedAt =
        this.createdAt ||
        new Date();
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


const Article =
  mongoose.models.Article ||
  mongoose.model(
    "Article",
    ArticleSchema,
  );


export default Article;
