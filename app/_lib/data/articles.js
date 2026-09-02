import "server-only";

import { cache } from "react";

import {
  getMongoCollection,
} from "../db/mongodb";

import {
  ensureUniqueSlugs,
  isPublishedRecord,
  newestFirst,
  normalizeMongoBlog,
  textValue,
} from "./mongoContent";

const SLUG_PATTERN =
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/;


function toPositiveInteger(value, fallback, maximum) {
  const parsed = Number.parseInt(value, 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback;
  }

  return Math.min(parsed, maximum);
}


function searchTerms(value) {
  return Array.from(
    new Set(
      String(value ?? "")
        .normalize("NFKC")
        .toLowerCase()
        .match(/[\p{L}\p{N}]+/gu) || [],
    ),
  )
    .filter((term) => term.length > 1)
    .slice(0, 12);
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
    .replace(/^\/?insights\//i, "")
    .replace(/^\/+|\/+$/g, "");

  return SLUG_PATTERN.test(slug)
    ? slug
    : "";
}


function articleSearchText(article) {
  return [
    article.title,
    article.excerpt,
    article.category,
    article.author?.name,
    ...(Array.isArray(article.tags) ? article.tags : []),
    ...(Array.isArray(article.content)
      ? article.content.flatMap((block) => [
          block?.text,
          block?.alt,
        ])
      : []),
  ]
    .map(textValue)
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}


function articleMatchesSearch(article, search) {
  const terms = searchTerms(search);

  if (!terms.length) {
    return true;
  }

  const tokens = new Set(
    articleSearchText(article).match(/[\p{L}\p{N}]+/gu) || [],
  );

  return terms.every((term) =>
    Array.from(tokens).some(
      (token) => token === term || token.startsWith(term),
    ),
  );
}


function articleRelevance(article, terms) {
  const title = textValue(article.title).toLowerCase();
  const category = textValue(article.category).toLowerCase();
  const tags = (Array.isArray(article.tags) ? article.tags : [])
    .map(textValue)
    .join(" ")
    .toLowerCase();
  const searchable = articleSearchText(article);

  return terms.reduce(
    (score, term) =>
      score +
      (title.includes(term) ? 12 : 0) +
      (category.includes(term) ? 8 : 0) +
      (tags.includes(term) ? 6 : 0) +
      (searchable.includes(term) ? 1 : 0),
    0,
  );
}


function sortArticles(first, second) {
  if (Boolean(first.featured) !== Boolean(second.featured)) {
    return first.featured
      ? -1
      : 1;
  }

  return newestFirst(first, second);
}


function paginatedArticles(records, { page, limit, search }) {
  const filtered = records
    .filter((article) =>
      article.status === "published" &&
      articleMatchesSearch(article, search),
    )
    .sort(sortArticles);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * limit;

  return {
    articles: filtered.slice(start, start + limit),
    currentPage,
    totalPages,
    total,
  };
}


async function getDatabaseArticles() {
  const collection = await getMongoCollection("blogs");
  const records = await collection.find({}).toArray();

  return ensureUniqueSlugs(
    records
      .filter(isPublishedRecord)
      .map(normalizeMongoBlog)
      .filter(Boolean),
  );
}


export async function getArticles({
  page = 1,
  limit = 6,
  search = "",
} = {}) {
  const safePage = toPositiveInteger(page, 1, 100000);
  const safeLimit = toPositiveInteger(limit, 6, 24);
  const safeSearch = textValue(search).slice(0, 100);

  return paginatedArticles(await getDatabaseArticles(), {
    page: safePage,
    limit: safeLimit,
    search: safeSearch,
  });
}


export async function getArticleSuggestions({
  search = "",
  limit = 6,
} = {}) {
  const terms = searchTerms(search);

  if (!terms.length) {
    return [];
  }

  const result = await getArticles({
    search,
    page: 1,
    limit: 24,
  });

  return result.articles
    .map((article, index) => ({
      article,
      index,
      score: articleRelevance(article, terms),
    }))
    .sort(
      (left, right) =>
        right.score - left.score ||
        left.index - right.index,
    )
    .slice(0, toPositiveInteger(limit, 6, 12))
    .map(({ article }) => ({
      _id: article._id,
      title: article.title,
      slug: article.slug,
      category: article.category,
      excerpt: article.excerpt,
      thumbnail: article.thumbnail || article.heroImage || "",
      publishedAt: article.publishedAt || article.createdAt || "",
    }));
}


function trendingArticles(records, limit) {
  const ordered = [...records]
    .filter((article) => article.status === "published")
    .sort(sortArticles);
  const markedTrending = ordered.filter((article) => article.trending);
  const remaining = ordered.filter((article) => !article.trending);

  return [
    ...markedTrending,
    ...remaining,
  ].slice(0, limit);
}


export async function getTrendingArticles({
  limit = 5,
} = {}) {
  const safeLimit = toPositiveInteger(limit, 5, 12);

  return trendingArticles(
    await getDatabaseArticles(),
    safeLimit,
  );
}


export async function getLatestArticles({
  limit = 6,
  excludeSlug = "",
} = {}) {
  const safeLimit = toPositiveInteger(limit, 6, 12);
  const safeExcludeSlug = normalizeRouteSlug(excludeSlug);

  const selectLatest = (records) =>
    records
      .filter(
        (article) =>
          article.status === "published" &&
          article.slug !== safeExcludeSlug,
      )
      .sort(newestFirst)
      .slice(0, safeLimit);

  return selectLatest(await getDatabaseArticles());
}


async function findArticleBySlug(slug) {
  const safeSlug = normalizeRouteSlug(slug);

  if (!safeSlug) {
    return null;
  }

  const articles = await getDatabaseArticles();

  return articles.find((article) => article.slug === safeSlug) || null;
}


export const getArticleBySlug = cache(findArticleBySlug);
