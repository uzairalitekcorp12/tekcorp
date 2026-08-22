import "server-only";

import connectMongoDB from "../db/mongodb";
import CaseStudy from "../models/CaseStudy";

import {
  runContentQuery,
} from "./dataSource";

import {
  LOCAL_CASE_STUDIES,
  cloneLocalData,
} from "./localContent";


const SLUG_PATTERN =
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/;


const PREFERRED_FILTER_ORDER = [
  "websites",
  "products",
  "mobile applications",
  "ui/ux design",
  "php",
  "javascript",
];


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
  const clean =
    textValue(
      value,
    )
      .toLowerCase()
      .replace(
        /^\/?case-studies\//i,
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


function buildCategoryCondition(category) {
  const value =
    textValue(
      category,
    );

  if (
    !value ||
    value.toLowerCase() ===
      "all"
  ) {
    return {};
  }

  const exact =
    new RegExp(
      `^${escapeRegex(
        value,
      )}$`,
      "i",
    );

  /*
   * Filter by either the main category or one of the project tags.
   *
   * Example:
   *
   * category: "Products"
   * tags: ["UI/UX Design", "JavaScript"]
   *
   * The same project can correctly appear under all three filters.
   */
  return {
    $or: [
      {
        category:
          exact,
      },

      {
        tags:
          exact,
      },
    ],
  };
}


function localCategoryMatches(
  caseStudy,
  category,
) {
  const value =
    textValue(
      category,
    ).toLowerCase();

  if (
    !value ||
    value ===
      "all"
  ) {
    return true;
  }

  return [
    caseStudy.category,
    ...(Array.isArray(
      caseStudy.tags,
    )
      ? caseStudy.tags
      : []),
  ]
    .map(
      textValue,
    )
    .some(
      (item) =>
        item.toLowerCase() ===
        value,
    );
}


function newestFirst(
  a,
  b,
) {
  if (
    Boolean(
      a.featured,
    ) !==
    Boolean(
      b.featured,
    )
  ) {
    return a.featured
      ? -1
      : 1;
  }

  return (
    new Date(
      b.createdAt ||
      0,
    ).getTime() -
    new Date(
      a.createdAt ||
      0,
    ).getTime()
  );
}


function sortCategories(values) {
  const preferred =
    new Map(
      PREFERRED_FILTER_ORDER.map(
        (
          value,
          index,
        ) => [
          value,
          index,
        ],
      ),
    );

  return [
    ...values,
  ].sort(
    (
      first,
      second,
    ) => {
      const firstKey =
        first.toLowerCase();

      const secondKey =
        second.toLowerCase();

      const firstIndex =
        preferred.has(
          firstKey,
        )
          ? preferred.get(
              firstKey,
            )
          : 999;

      const secondIndex =
        preferred.has(
          secondKey,
        )
          ? preferred.get(
              secondKey,
            )
          : 999;

      if (
        firstIndex !==
        secondIndex
      ) {
        return (
          firstIndex -
          secondIndex
        );
      }

      return first.localeCompare(
        second,
      );
    },
  );
}


export async function getCaseStudies({
  category = "all",
  page = 1,
  limit = 6,
} = {}) {
  const safeCategory =
    textValue(
      category,
    ) ||
    "all";

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


  return runContentQuery({
    label:
      "case-studies:list",

    database:
      async () => {
        await connectMongoDB();

        const query = {
          status:
            "published",

          ...buildCategoryCondition(
            safeCategory,
          ),
        };

        const total =
          await CaseStudy.countDocuments(
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

          currentPage,

          totalPages,

          total,
        };
      },

    local:
      () => {
        const filtered =
          LOCAL_CASE_STUDIES
            .filter(
              (caseStudy) =>
                caseStudy.status ===
                  "published" &&
                localCategoryMatches(
                  caseStudy,
                  safeCategory,
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
          caseStudies:
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


export async function getCaseStudyCategories() {
  return runContentQuery({
    label:
      "case-studies:categories",

    database:
      async () => {
        await connectMongoDB();

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
              },
            ),

            CaseStudy.distinct(
              "tags",
              {
                status:
                  "published",
              },
            ),
          ]);


        const unique =
          Array.from(
            new Map(
              [
                ...categories,
                ...tags,
              ]
                .map(
                  textValue,
                )
                .filter(
                  Boolean,
                )
                .map(
                  (value) => [
                    value.toLowerCase(),
                    value,
                  ],
                ),
            ).values(),
          );


        return sortCategories(
          unique,
        );
      },

    local:
      () => {
        const unique =
          Array.from(
            new Map(
              LOCAL_CASE_STUDIES
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
                .map(
                  textValue,
                )
                .filter(
                  Boolean,
                )
                .map(
                  (value) => [
                    value.toLowerCase(),
                    value,
                  ],
                ),
            ).values(),
          );

        return sortCategories(
          unique,
        );
      },
  });
}


export async function getCaseStudyBySlug(
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
      `case-studies:slug:${safeSlug}`,

    database:
      async () => {
        await connectMongoDB();

        const caseStudy =
          await CaseStudy.findOne({
            slug:
              safeSlug,

            status:
              "published",
          }).lean();

        return caseStudy
          ? serialize(
              caseStudy,
            )
          : null;
      },

    local:
      () => {
        const caseStudy =
          LOCAL_CASE_STUDIES.find(
            (item) =>
              item.slug ===
                safeSlug &&
              item.status ===
                "published",
          );

        return caseStudy
          ? cloneLocalData(
              caseStudy,
            )
          : null;
      },
  });
}
