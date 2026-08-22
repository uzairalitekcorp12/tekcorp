import { cache } from "react";

import { connectDB } from "../db/mongodb";
import Article from "../models/Article";

import {
  withContentDataSource,
} from "./dataSource";

import {
  localArticles,
} from "./localContent";


const DEFAULT_PAGE_SIZE =
  6;

const MAX_PAGE_SIZE =
  24;

const MAX_PAGE_NUMBER =
  10000;

const MAX_SEARCH_LENGTH =
  120;

const MAX_SLUG_LENGTH =
  200;


function toPositiveInteger(
  value,
  fallback,
  maximum,
) {
  const numberValue =
    typeof value ===
    "number"
      ? value
      : Number(
          String(
            value ?? "",
          ).trim(),
        );

  if (
    !Number.isSafeInteger(
      numberValue,
    ) ||
    numberValue < 1
  ) {
    return fallback;
  }

  return Math.min(
    numberValue,
    maximum,
  );
}


function getPaginationState(
  total,
  requestedPage,
  limit,
) {
  const totalPages =
    Math.ceil(
      total / limit,
    );

  return {
    totalPages,

    currentPage:
      totalPages > 0
        ? Math.min(
            requestedPage,
            totalPages,
          )
        : 1,
  };
}


function normalizeQueryText(
  value,
  maximumLength,
) {
  if (
    typeof value !==
    "string"
  ) {
    return "";
  }

  return value
    .normalize(
      "NFKC",
    )
    .replace(
      /[\u0000-\u001f\u007f]/g,
      " ",
    )
    .replace(
      /\s+/g,
      " ",
    )
    .trim()
    .slice(
      0,
      maximumLength,
    );
}


function escapeRegex(
  value,
) {
  return value.replace(
    /[.*+?^\${}()|[\]\\]/g,
    "\\$&",
  );
}


/*
 * Stored article slugs are canonicalized by the model.
 * Route lookup validates the stored value instead of creating a new slug.
 */
export function normalizeArticleSlug(
  value,
) {
  const slug =
    normalizeQueryText(
      value,
      MAX_SLUG_LENGTH,
    ).toLowerCase();

  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
    slug,
  )
    ? slug
    : "";
}


function serialize(
  value,
) {
  return JSON.parse(
    JSON.stringify(
      value,
    ),
  );
}


function publishedTime(
  article,
) {
  const value =
    article?.publishedAt ||
    article?.createdAt;

  const time =
    Date.parse(
      value || "",
    );

  return Number.isNaN(
    time,
  )
    ? 0
    : time;
}


function getLocalArticleResults({
  category,
  excludeSlug,
  search,
  trending,
  featured,
} = {}) {
  const normalizedCategory =
    normalizeQueryText(
      category,
      100,
    ).toLowerCase();

  const normalizedSearch =
    normalizeQueryText(
      search,
      MAX_SEARCH_LENGTH,
    ).toLowerCase();

  const normalizedExcludedSlug =
    normalizeArticleSlug(
      excludeSlug,
    );

  return localArticles
    .filter((article) => {
      if (
        article?.status !==
        "published"
      ) {
        return false;
      }

      if (
        normalizedCategory &&
        normalizedCategory !==
          "all" &&
        normalizeQueryText(
          article.category,
          100,
        ).toLowerCase() !==
          normalizedCategory
      ) {
        return false;
      }

      if (
        normalizedExcludedSlug &&
        normalizeArticleSlug(
          article.slug,
        ) ===
          normalizedExcludedSlug
      ) {
        return false;
      }

      if (
        typeof trending ===
          "boolean" &&
        article.trending !==
          trending
      ) {
        return false;
      }

      if (
        typeof featured ===
          "boolean" &&
        article.featured !==
          featured
      ) {
        return false;
      }

      if (
        normalizedSearch
      ) {
        const searchableText = [
          article.title,
          article.excerpt,
          article.category,
          article.author?.name,

          ...(Array.isArray(
            article.tags,
          )
            ? article.tags
            : []),

          ...(Array.isArray(
            article.content,
          )
            ? article.content
                .flatMap(
                  (block) => [
                    block?.text,
                    block?.alt,
                  ],
                )
            : []),
        ]
          .map((value) =>
            normalizeQueryText(
              value,
              30000,
            ).toLowerCase(),
          )
          .join(
            " ",
          );

        if (
          !searchableText.includes(
            normalizedSearch,
          )
        ) {
          return false;
        }
      }

      return true;
    })
    .sort(
      (
        left,
        right,
      ) =>
        publishedTime(
          right,
        ) -
        publishedTime(
          left,
        ),
    );
}


function buildArticleQuery({
  category,
  excludeSlug,
  search,
  trending,
  featured,
} = {}) {
  const query = {
    status:
      "published",
  };

  const normalizedCategory =
    normalizeQueryText(
      category,
      100,
    );

  if (
    normalizedCategory &&
    normalizedCategory.toLowerCase() !==
      "all"
  ) {
    query.category = {
      $regex:
        "^" +
        escapeRegex(
          normalizedCategory,
        ) +
        "$",

      $options:
        "i",
    };
  }

  const normalizedSearch =
    normalizeQueryText(
      search,
      MAX_SEARCH_LENGTH,
    );

  if (
    normalizedSearch
  ) {
    const safeSearch =
      escapeRegex(
        normalizedSearch,
      );

    query.$or = [
      {
        title: {
          $regex:
            safeSearch,

          $options:
            "i",
        },
      },

      {
        excerpt: {
          $regex:
            safeSearch,

          $options:
            "i",
        },
      },

      {
        category: {
          $regex:
            safeSearch,

          $options:
            "i",
        },
      },

      {
        tags: {
          $regex:
            safeSearch,

          $options:
            "i",
        },
      },

      {
        "author.name": {
          $regex:
            safeSearch,

          $options:
            "i",
        },
      },

      {
        "content.text": {
          $regex:
            safeSearch,

          $options:
            "i",
        },
      },
    ];
  }

  const normalizedExcludedSlug =
    normalizeArticleSlug(
      excludeSlug,
    );

  if (
    normalizedExcludedSlug
  ) {
    query.slug = {
      $ne:
        normalizedExcludedSlug,
    };
  }

  if (
    typeof trending ===
    "boolean"
  ) {
    query.trending =
      trending;
  }

  if (
    typeof featured ===
    "boolean"
  ) {
    query.featured =
      featured;
  }

  return query;
}


function normalizeListOptions(
  limitOrOptions,
  defaultLimit,
  additionalOptions = {},
) {
  const options =
    limitOrOptions &&
    typeof limitOrOptions ===
      "object" &&
    !Array.isArray(
      limitOrOptions,
    )
      ? limitOrOptions
      : {
          ...additionalOptions,

          limit:
            limitOrOptions,
        };

  return {
    ...options,

    limit:
      toPositiveInteger(
        options.limit,
        defaultLimit,
        MAX_PAGE_SIZE,
      ),
  };
}


function getLocalPaginatedArticles({
  category,
  excludeSlug,
  page,
  limit,
  search,
}) {
  const matchingArticles =
    getLocalArticleResults({
      category,
      excludeSlug,
      search,
    });

  const total =
    matchingArticles.length;

  const {
    totalPages,
    currentPage,
  } =
    getPaginationState(
      total,
      page,
      limit,
    );

  const start =
    (
      currentPage -
      1
    ) *
    limit;

  return {
    articles:
      serialize(
        matchingArticles.slice(
          start,
          start +
            limit,
        ),
      ),

    total,

    totalPages,

    currentPage,
  };
}


export async function getArticles({
  category =
    "all",

  excludeSlug =
    "",

  page =
    1,

  limit =
    DEFAULT_PAGE_SIZE,

  search =
    "",
} = {}) {
  const safePage =
    toPositiveInteger(
      page,
      1,
      MAX_PAGE_NUMBER,
    );

  const safeLimit =
    toPositiveInteger(
      limit,
      DEFAULT_PAGE_SIZE,
      MAX_PAGE_SIZE,
    );

  return withContentDataSource({
    label:
      "getArticles",

    local() {
      return getLocalPaginatedArticles({
        category,
        excludeSlug,
        page:
          safePage,
        limit:
          safeLimit,
        search,
      });
    },

    async database() {
      await connectDB();

      const query =
        buildArticleQuery({
          category,
          excludeSlug,
          search,
        });

      const total =
        await Article.countDocuments(
          query,
        );

      const {
        totalPages,
        currentPage,
      } =
        getPaginationState(
          total,
          safePage,
          safeLimit,
        );

      const articles =
        await Article.find(
          query,
        )
          .sort({
            publishedAt:
              -1,

            createdAt:
              -1,
          })
          .skip(
            (
              currentPage -
              1
            ) *
              safeLimit,
          )
          .limit(
            safeLimit,
          )
          .lean();

      return {
        articles:
          serialize(
            articles,
          ),

        total,

        totalPages,

        currentPage,
      };
    },
  });
}


export const getArticleBySlug =
  cache(
    async function getArticleBySlug(
      slug,
    ) {
      const normalizedSlug =
        normalizeArticleSlug(
          slug,
        );

      if (
        !normalizedSlug
      ) {
        return null;
      }

      return withContentDataSource({
        label:
          `getArticleBySlug:${normalizedSlug}`,

        local() {
          const article =
            localArticles.find(
              (item) =>
                item?.status ===
                  "published" &&
                normalizeArticleSlug(
                  item.slug,
                ) ===
                  normalizedSlug,
            );

          return article
            ? serialize(
                article,
              )
            : null;
        },

        async database() {
          await connectDB();

          const article =
            await Article.findOne({
              slug:
                normalizedSlug,

              status:
                "published",
            }).lean();

          return article
            ? serialize(
                article,
              )
            : null;
        },
      });
    },
  );


export async function getTrendingArticles(
  limitOrOptions =
    5,

  additionalOptions = {},
) {
  const options =
    normalizeListOptions(
      limitOrOptions,
      5,
      additionalOptions,
    );

  return withContentDataSource({
    label:
      "getTrendingArticles",

    local() {
      return serialize(
        getLocalArticleResults({
          ...options,

          trending:
            true,
        }).slice(
          0,
          options.limit,
        ),
      );
    },

    async database() {
      await connectDB();

      const articles =
        await Article.find(
          buildArticleQuery({
            ...options,

            trending:
              true,
          }),
        )
          .sort({
            publishedAt:
              -1,

            createdAt:
              -1,
          })
          .limit(
            options.limit,
          )
          .lean();

      return serialize(
        articles,
      );
    },
  });
}


export async function getLatestArticles(
  limitOrOptions =
    3,

  additionalOptions = {},
) {
  const options =
    normalizeListOptions(
      limitOrOptions,
      3,
      additionalOptions,
    );

  return withContentDataSource({
    label:
      "getLatestArticles",

    local() {
      return serialize(
        getLocalArticleResults(
          options,
        ).slice(
          0,
          options.limit,
        ),
      );
    },

    async database() {
      await connectDB();

      const articles =
        await Article.find(
          buildArticleQuery(
            options,
          ),
        )
          .sort({
            publishedAt:
              -1,

            createdAt:
              -1,
          })
          .limit(
            options.limit,
          )
          .lean();

      return serialize(
        articles,
      );
    },
  });
}


export async function getRelatedArticles({
  category,
  excludeSlug,
  limit =
    3,
} = {}) {
  return getLatestArticles({
    category,
    excludeSlug,
    limit,
  });
}


export async function getArticleCategories() {
  return withContentDataSource({
    label:
      "getArticleCategories",

    local() {
      return Array.from(
        new Set(
          getLocalArticleResults()
            .map((article) =>
              normalizeQueryText(
                article.category,
                100,
              ),
            )
            .filter(
              Boolean,
            ),
        ),
      ).sort(
        (
          left,
          right,
        ) =>
          left.localeCompare(
            right,
            undefined,
            {
              sensitivity:
                "base",
            },
          ),
      );
    },

    async database() {
      await connectDB();

      const categories =
        await Article.distinct(
          "category",
          {
            status:
              "published",

            category: {
              $type:
                "string",

              $ne:
                "",
            },
          },
        );

      return Array.from(
        new Set(
          categories
            .map((category) =>
              normalizeQueryText(
                category,
                100,
              ),
            )
            .filter(
              Boolean,
            ),
        ),
      ).sort(
        (
          left,
          right,
        ) =>
          left.localeCompare(
            right,
            undefined,
            {
              sensitivity:
                "base",
            },
          ),
      );
    },
  });
}
