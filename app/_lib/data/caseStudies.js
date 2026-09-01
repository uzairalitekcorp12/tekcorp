import "server-only";

import { cache } from "react";

import {
  getMongoCollection,
} from "../db/mongodb";

import {
  ensureUniqueSlugs,
  isPublishedRecord,
  newestFirst,
  normalizeMongoCaseStudy,
  textValue,
} from "./mongoContent";

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


function toPositiveInteger(value, fallback, maximum) {
  const parsed = Number.parseInt(value, 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback;
  }

  return Math.min(parsed, maximum);
}


function normalizeRouteSlug(value) {
  let slug = textValue(value);

  try {
    slug = decodeURIComponent(slug);
  } catch {
    return "";
  }

  slug = slug
    .split(/[?#]/, 1)[0]
    .replace(/^https?:\/\/[^/]+/i, "")
    .toLowerCase()
    .replace(/^\/?case-studies\//i, "")
    .replace(/^\/+|\/+$/g, "");

  return SLUG_PATTERN.test(slug)
    ? slug
    : "";
}


function categoryMatches(caseStudy, category) {
  const target = textValue(category).toLowerCase();

  if (!target || target === "all") {
    return true;
  }

  return [
    caseStudy.category,
    ...(Array.isArray(caseStudy.tags) ? caseStudy.tags : []),
  ].some(
    (candidate) => textValue(candidate).toLowerCase() === target,
  );
}


function sortCaseStudies(first, second) {
  if (Boolean(first.featured) !== Boolean(second.featured)) {
    return first.featured
      ? -1
      : 1;
  }

  return newestFirst(first, second);
}


function paginatedCaseStudies(records, { category, page, limit }) {
  const filtered = records
    .filter(
      (caseStudy) =>
        caseStudy.status === "published" &&
        categoryMatches(caseStudy, category),
    )
    .sort(sortCaseStudies);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * limit;

  return {
    caseStudies: filtered.slice(start, start + limit),
    currentPage,
    totalPages,
    total,
  };
}


async function getDatabaseCaseStudies() {
  const collection = await getMongoCollection("casestudies");
  const records = await collection.find({}).toArray();

  return ensureUniqueSlugs(
    records
      .filter(isPublishedRecord)
      .map(normalizeMongoCaseStudy)
      .filter(Boolean),
  );
}


function getLocalCaseStudies() {
  return cloneLocalData(LOCAL_CASE_STUDIES);
}


function sortCategories(values) {
  const preferred = new Map(
    PREFERRED_FILTER_ORDER.map((value, index) => [
      value,
      index,
    ]),
  );

  return [...values].sort((first, second) => {
    const firstKey = first.toLowerCase();
    const secondKey = second.toLowerCase();
    const firstIndex = preferred.get(firstKey) ?? 999;
    const secondIndex = preferred.get(secondKey) ?? 999;

    return firstIndex !== secondIndex
      ? firstIndex - secondIndex
      : first.localeCompare(second);
  });
}


function categoriesFor(records) {
  const categories = records
    .filter((caseStudy) => caseStudy.status === "published")
    .map((caseStudy) => textValue(caseStudy.category))
    .filter(Boolean);

  return sortCategories(
    Array.from(
      new Map(
        categories.map((category) => [
          category.toLowerCase(),
          category,
        ]),
      ).values(),
    ),
  );
}


export async function getCaseStudies({
  category = "all",
  page = 1,
  limit = 6,
} = {}) {
  const safeCategory = textValue(category).slice(0, 100) || "all";
  const safePage = toPositiveInteger(page, 1, 100000);
  const safeLimit = toPositiveInteger(limit, 6, 24);

  return runContentQuery({
    label: "case-studies:list",
    database: async () =>
      paginatedCaseStudies(await getDatabaseCaseStudies(), {
        category: safeCategory,
        page: safePage,
        limit: safeLimit,
      }),
    local: () =>
      paginatedCaseStudies(getLocalCaseStudies(), {
        category: safeCategory,
        page: safePage,
        limit: safeLimit,
      }),
  });
}


export async function getCaseStudyCategories() {
  return runContentQuery({
    label: "case-studies:categories",
    database: async () =>
      categoriesFor(await getDatabaseCaseStudies()),
    local: () => categoriesFor(getLocalCaseStudies()),
  });
}


async function findCaseStudyBySlug(slug) {
  const safeSlug = normalizeRouteSlug(slug);

  if (!safeSlug) {
    return null;
  }

  return runContentQuery({
    label: `case-studies:slug:${safeSlug}`,
    database: async () => {
      const caseStudies = await getDatabaseCaseStudies();

      return caseStudies.find(
        (caseStudy) => caseStudy.slug === safeSlug,
      ) || null;
    },
    local: () =>
      getLocalCaseStudies().find(
        (caseStudy) =>
          caseStudy.slug === safeSlug &&
          caseStudy.status === "published",
      ) || null,
  });
}


export const getCaseStudyBySlug = cache(findCaseStudyBySlug);
