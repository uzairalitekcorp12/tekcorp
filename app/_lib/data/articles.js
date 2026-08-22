import "server-only";

import connectMongoDB from "../db/mongodb";
import Article from "../models/Article";

import {
  runContentQuery,
} from "./dataSource";

import {
  LOCAL_ARTICLES,
  cloneLocalData,
} from "./localContent";


const SLUG_PATTERN =
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/;


function textValue(value) {
  return typeof value ===
    "string"
    ? value.trim()
    : "";
}


function toPositiveInteger(
  value,
  fallback,
  maximum,
) {
  const parsed =
    Number.parseInt(
      value,
      10,
    );

  if (
    !Number.isFinite(
      parsed,
    ) ||
    parsed < 1
  ) {
    return fallback;
  }

  return Math.min(
    parsed,
    maximum,
  );
}


function escapeRegex(value) {
  return String(
    value ?? "",
  ).replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}


function normalizeRouteSlug(value) {
  let clean =
    textValue(value);

  try {
    clean = decodeURIComponent(clean);
  } catch {
    return "";
  }

  clean =
    clean
      .split(/[?#]/, 1)[0]
      .replace(/^https?:\/\/[^/]+/i, "")
      .toLowerCase()
      .replace(
        /^\/?insights\//i,
        "",
      )
      .replace(
        /^\/+|\/+$/g,
        "",
      );

  return SLUG_PATTERN.test(
    clean,
  )
    ? clean
    : "";
}


function serialize(value) {
  return JSON.parse(
    JSON.stringify(
      value,
    ),
  );
}


function buildSearchCondition(search) {
  const value =
    textValue(
      search,
    );

  if (!value) {
    return {};
  }

  const regex =
    new RegExp(
      escapeRegex(
        value,
      ),
      "i",
    );

  return {
    $or: [
      {
        title:
          regex,
      },

      {
        excerpt:
          regex,
      },

      {
        category:
          regex,
      },

      {
        tags:
          regex,
      },

      {
        "author.name":
          regex,
      },

      {
        "content.text":
          regex,
      },
        {
          "content.alt":
            regex,
        },
    ],
  };
}


function localSearchMatches(
  article,
  search,
) {
  const value =
    textValue(
      search,
    ).toLowerCase();

  if (!value) {
    return true;
  }

  const searchable =
    [
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
        ? article.content.map(
            (block) => [
              block?.text,
              block?.alt,
              block?.image,
            ],
          )
        : []),
    ]
      .flat()
      .map(
        textValue,
      )
      .filter(
        Boolean,
      )
      .join(
        " ",
      )
      .toLowerCase();

  return searchable.includes(
    value,
  );
}


function articleDate(
  article,
) {
  return new Date(
    article.publishedAt ||
    article.createdAt ||
    0,
  ).getTime();
}


function newestFirst(
  a,
  b,
) {
  return (
    articleDate(
      b,
    ) -
    articleDate(
      a,
    )
  );
}


export async function getArticles({
  page = 1,
  limit = 6,
  search = "",
} = {}) {
  const safePage =
    toPositiveInteger(
      page,
      1,
      100000,
    );

  const safeLimit =
    toPositiveInteger(
      limit,
      6,
      24,
    );

  const safeSearch =
    textValue(
      search,
    ).slice(
      0,
      100,
    );


  return runContentQuery({
    label:
      "articles:list",

    database:
      async () => {
        await connectMongoDB();

        const query = {
          status:
            "published",

          ...buildSearchCondition(
            safeSearch,
          ),
        };

        const total =
          await Article.countDocuments(
            query,
          );

        const totalPages =
          Math.max(
            1,
            Math.ceil(
              total /
              safeLimit,
            ),
          );

        const currentPage =
          Math.min(
            safePage,
            totalPages,
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

          currentPage,

          totalPages,

          total,
        };
      },

    local:
      () => {
        const filtered =
          LOCAL_ARTICLES
            .filter(
              (article) =>
                article.status ===
                  "published" &&
                localSearchMatches(
                  article,
                  safeSearch,
                ),
            )
            .sort(
              newestFirst,
            );

        const total =
          filtered.length;

        const totalPages =
          Math.max(
            1,
            Math.ceil(
              total /
              safeLimit,
            ),
          );

        const currentPage =
          Math.min(
            safePage,
            totalPages,
          );

        const start =
          (
            currentPage -
            1
          ) *
          safeLimit;

        return {
          articles:
            cloneLocalData(
              filtered.slice(
                start,
                start +
                  safeLimit,
              ),
            ),

          currentPage,

          totalPages,

          total,
        };
      },
  });
}


export async function getTrendingArticles({
  limit = 5,
} = {}) {
  const safeLimit =
    toPositiveInteger(
      limit,
      5,
      12,
    );


  return runContentQuery({
    label:
      "articles:trending",

    database:
      async () => {
        await connectMongoDB();

        const trending =
          await Article.find({
            status:
              "published",

            trending:
              true,
          })
            .sort({
              featured:
                -1,

              publishedAt:
                -1,
            })
            .limit(
              safeLimit,
            )
            .lean();


        if (
          trending.length >=
          safeLimit
        ) {
          return serialize(
            trending,
          );
        }


        const remaining =
          await Article.find({
            status:
              "published",

            _id: {
              $nin:
                trending.map(
                  (article) =>
                    article._id,
                ),
            },
          })
            .sort({
              featured:
                -1,

              publishedAt:
                -1,
            })
            .limit(
              safeLimit -
              trending.length,
            )
            .lean();


        return serialize([
          ...trending,
          ...remaining,
        ]);
      },

    local:
      () => {
        const trending =
          LOCAL_ARTICLES
            .filter(
              (article) =>
                article.status ===
                  "published" &&
                article.trending,
            )
            .sort(
              newestFirst,
            );

        const other =
          LOCAL_ARTICLES
            .filter(
              (article) =>
                article.status ===
                  "published" &&
                !trending.some(
                  (item) =>
                    item.slug ===
                    article.slug,
                ),
            )
            .sort(
              newestFirst,
            );

        return cloneLocalData(
          [
            ...trending,
            ...other,
          ].slice(
            0,
            safeLimit,
          ),
        );
      },
  });
}


export async function getLatestArticles({
  limit = 6,
  excludeSlug = "",
} = {}) {
  const safeLimit =
    toPositiveInteger(
      limit,
      6,
      12,
    );

  const safeExcludeSlug =
    normalizeRouteSlug(
      excludeSlug,
    );


  return runContentQuery({
    label:
      "articles:latest",

    database:
      async () => {
        await connectMongoDB();

        const query = {
          status:
            "published",
        };

        if (
          safeExcludeSlug
        ) {
          query.slug = {
            $ne:
              safeExcludeSlug,
          };
        }

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
            .limit(
              safeLimit,
            )
            .lean();

        return serialize(
          articles,
        );
      },

    local:
      () =>
        cloneLocalData(
          LOCAL_ARTICLES
            .filter(
              (article) =>
                article.status ===
                  "published" &&
                article.slug !==
                  safeExcludeSlug,
            )
            .sort(
              newestFirst,
            )
            .slice(
              0,
              safeLimit,
            ),
        ),
  });
}


export async function getArticleBySlug(
  slug,
) {
  const safeSlug =
    normalizeRouteSlug(
      slug,
    );

  if (!safeSlug) {
    return null;
  }


  return runContentQuery({
    label:
      `articles:slug:${safeSlug}`,

    database:
      async () => {
        await connectMongoDB();

        const article =
          await Article.findOne({
            slug:
              safeSlug,

            status:
              "published",
          }).lean();

        return article
          ? serialize(
              article,
            )
          : null;
      },

    local:
      () => {
        const article =
          LOCAL_ARTICLES.find(
            (item) =>
              item.slug ===
                safeSlug &&
              item.status ===
                "published",
          );

        return article
          ? cloneLocalData(
              article,
            )
          : null;
      },
  });
}
