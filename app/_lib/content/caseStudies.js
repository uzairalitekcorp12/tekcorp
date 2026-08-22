import { cache } from "react";

import { connectDB } from "../db/mongodb";
import CaseStudy from "../models/CaseStudy";

import {
  withContentDataSource,
} from "./dataSource";

import {
  localCaseStudies,
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
 * Stored slugs are already canonicalized by the model.
 * The data layer validates them; it does not invent or rename them.
 */
export function normalizeCaseStudySlug(
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


function createdTime(
  caseStudy,
) {
  const time =
    Date.parse(
      caseStudy?.createdAt ||
      "",
    );

  return Number.isNaN(
    time,
  )
    ? 0
    : time;
}


function matchesLocalCategory(
  caseStudy,
  normalizedCategory,
) {
  if (
    !normalizedCategory ||
    normalizedCategory ===
      "all"
  ) {
    return true;
  }

  const candidates = [
    caseStudy?.category,

    ...(Array.isArray(
      caseStudy?.tags,
    )
      ? caseStudy.tags
      : []),
  ]
    .map((value) =>
      normalizeQueryText(
        value,
        100,
      ).toLowerCase(),
    )
    .filter(Boolean);

  return candidates.includes(
    normalizedCategory,
  );
}


function getLocalCaseStudyResults({
  category,
  excludeSlug,
  featured,
  search,
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
    normalizeCaseStudySlug(
      excludeSlug,
    );

  return localCaseStudies
    .filter((caseStudy) => {
      if (
        caseStudy?.status !==
        "published"
      ) {
        return false;
      }

      if (
        !matchesLocalCategory(
          caseStudy,
          normalizedCategory,
        )
      ) {
        return false;
      }

      if (
        normalizedExcludedSlug &&
        normalizeCaseStudySlug(
          caseStudy.slug,
        ) ===
          normalizedExcludedSlug
      ) {
        return false;
      }

      if (
        typeof featured ===
          "boolean" &&
        caseStudy.featured !==
          featured
      ) {
        return false;
      }

      if (
        normalizedSearch
      ) {
        const searchableText = [
          caseStudy.title,
          caseStudy.shortDescription,
          caseStudy.category,

          ...(Array.isArray(
            caseStudy.tags,
          )
            ? caseStudy.tags
            : []),

          ...(Array.isArray(
            caseStudy.sections,
          )
            ? caseStudy.sections
                .flatMap(
                  (section) => [
                    section?.heading,
                    section?.content,
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
        createdTime(
          right,
        ) -
        createdTime(
          left,
        ),
    );
}


function buildCaseStudyQuery({
  category,
  excludeSlug,
  featured,
  search,
} = {}) {
  const query = {
    status:
      "published",
  };

  const andClauses =
    [];

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
    const exactCategory =
      new RegExp(
        "^" +
          escapeRegex(
            normalizedCategory,
          ) +
          "$",
        "i",
      );

    /*
     * Category filters intentionally match both:
     * - primary category
     * - tags
     *
     * This is what allows filters such as "UI/UX Design", "PHP" or
     * "JavaScript" to keep working even when a project has a broader
     * primary category such as "Products" or "Websites".
     */
    andClauses.push({
      $or: [
        {
          category:
            exactCategory,
        },

        {
          tags:
            exactCategory,
        },
      ],
    });
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
      new RegExp(
        escapeRegex(
          normalizedSearch,
        ),
        "i",
      );

    andClauses.push({
      $or: [
        {
          title:
            safeSearch,
        },

        {
          shortDescription:
            safeSearch,
        },

        {
          category:
            safeSearch,
        },

        {
          tags:
            safeSearch,
        },

        {
          "sections.heading":
            safeSearch,
        },

        {
          "sections.content":
            safeSearch,
        },
      ],
    });
  }

  const normalizedExcludedSlug =
    normalizeCaseStudySlug(
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
    typeof featured ===
    "boolean"
  ) {
    query.featured =
      featured;
  }

  if (
    andClauses.length
  ) {
    query.$and =
      andClauses;
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


function getLocalPaginatedCaseStudies({
  category,
  excludeSlug,
  page,
  limit,
  search,
}) {
  const matchingCaseStudies =
    getLocalCaseStudyResults({
      category,
      excludeSlug,
      search,
    });

  const total =
    matchingCaseStudies.length;

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
    caseStudies:
      serialize(
        matchingCaseStudies.slice(
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


export async function getCaseStudies({
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
      "getCaseStudies",

    local() {
      return getLocalPaginatedCaseStudies({
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
        buildCaseStudyQuery({
          category,
          excludeSlug,
          search,
        });

      let {
        totalPages,
        currentPage,
      } = {
        totalPages:
          0,

        currentPage:
          safePage,
      };

      const total =
        await CaseStudy.countDocuments(
          query,
        );

      ({
        totalPages,
        currentPage,
      } =
        getPaginationState(
          total,
          safePage,
          safeLimit,
        ));

      const caseStudies =
        await CaseStudy.find(
          query,
        )
          .sort({
            featured:
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
        caseStudies:
          serialize(
            caseStudies,
          ),

        total,

        totalPages,

        currentPage,
      };
    },
  });
}


export const getCaseStudyBySlug =
  cache(
    async function getCaseStudyBySlug(
      slug,
    ) {
      const normalizedSlug =
        normalizeCaseStudySlug(
          slug,
        );

      if (
        !normalizedSlug
      ) {
        return null;
      }

      return withContentDataSource({
        label:
          `getCaseStudyBySlug:${normalizedSlug}`,

        local() {
          const caseStudy =
            localCaseStudies.find(
              (item) =>
                item?.status ===
                  "published" &&
                normalizeCaseStudySlug(
                  item.slug,
                ) ===
                  normalizedSlug,
            );

          return caseStudy
            ? serialize(
                caseStudy,
              )
            : null;
        },

        async database() {
          await connectDB();

          const caseStudy =
            await CaseStudy.findOne({
              slug:
                normalizedSlug,

              status:
                "published",
            }).lean();

          return caseStudy
            ? serialize(
                caseStudy,
              )
            : null;
        },
      });
    },
  );


export async function getFeaturedCaseStudies(
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
      "getFeaturedCaseStudies",

    local() {
      return serialize(
        getLocalCaseStudyResults({
          ...options,

          featured:
            true,
        }).slice(
          0,
          options.limit,
        ),
      );
    },

    async database() {
      await connectDB();

      const caseStudies =
        await CaseStudy.find(
          buildCaseStudyQuery({
            ...options,

            featured:
              true,
          }),
        )
          .sort({
            createdAt:
              -1,
          })
          .limit(
            options.limit,
          )
          .lean();

      return serialize(
        caseStudies,
      );
    },
  });
}


export async function getRelatedCaseStudies({
  category,
  excludeSlug,
  limit =
    2,
} = {}) {
  const options =
    normalizeListOptions(
      {
        category,
        excludeSlug,
        limit,
      },
      2,
    );

  return withContentDataSource({
    label:
      "getRelatedCaseStudies",

    local() {
      return serialize(
        getLocalCaseStudyResults(
          options,
        ).slice(
          0,
          options.limit,
        ),
      );
    },

    async database() {
      await connectDB();

      const caseStudies =
        await CaseStudy.find(
          buildCaseStudyQuery(
            options,
          ),
        )
          .sort({
            featured:
              -1,

            createdAt:
              -1,
          })
          .limit(
            options.limit,
          )
          .lean();

      return serialize(
        caseStudies,
      );
    },
  });
}


export async function getCaseStudyCategories() {
  return withContentDataSource({
    label:
      "getCaseStudyCategories",

    local() {
      const labels =
        getLocalCaseStudyResults()
          .flatMap(
            (caseStudy) => [
              caseStudy.category,

              ...(Array.isArray(
                caseStudy.tags,
              )
                ? caseStudy.tags
                : []),
            ],
          )
          .map((label) =>
            normalizeQueryText(
              label,
              100,
            ),
          )
          .filter(
            Boolean,
          );

      return Array.from(
        new Set(
          labels,
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

      const [
        categories,
        tags,
      ] =
        await Promise.all([
          CaseStudy.distinct(
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
          ),

          CaseStudy.distinct(
            "tags",
            {
              status:
                "published",

              "tags.0": {
                $exists:
                  true,
              },
            },
          ),
        ]);

      return Array.from(
        new Set(
          [
            ...categories,
            ...tags,
          ]
            .map((label) =>
              normalizeQueryText(
                label,
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
