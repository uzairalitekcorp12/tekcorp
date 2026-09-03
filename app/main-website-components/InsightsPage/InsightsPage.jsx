import "./InsightsPage.css";

import Link from "next/link";
import Button from "@/app/_shared/Button/Button";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import CmsImage from "../CmsImage/CmsImage";
import {
  contentImage,
} from "../CmsImage/contentImages";
import ContentPagination from "../ContentPagination/ContentPagination";
import InsightsSearch from "./InsightsSearch";


const DATE_FORMATTER =
  new Intl.DateTimeFormat(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function safeSlug(value) {
  let slug =
    textValue(value);

  try {
    slug = decodeURIComponent(slug);
  } catch {
    return "";
  }

  slug =
    slug
      .split(/[?#]/, 1)[0]
      .replace(/^https?:\/\/[^/]+/i, "")
      .toLowerCase()
      .replace(/^\/?insights\//i, "")
      .replace(/^\/+|\/+$/g, "");

  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
    ? slug
    : "";
}


function articleHref(slug) {
  const value = safeSlug(slug);

  return value
    ? `/insights/${value}`
    : "/insights";
}


function formatDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? ""
    : DATE_FORMATTER.format(date);
}


function ArticleImage({
  article,
  className,
  priority = false,
  sizes,
}) {
  return (
    <CmsImage
      src={
        article?.thumbnail ||
        article?.heroImage ||
        contentImage(
          article,
          "insight",
        )
      }
      alt={textValue(article?.title)}
      className={className}
      fallbackClassName="insights-page__image-fallback"
      fallbackLabel={
        textValue(article?.title) ||
        "Tekcorp Insight"
      }
      priority={priority}
      sizes={sizes}
    />
  );
}


function TrendingCard({
  article,
  index,
}) {
  const href =
    articleHref(article.slug);

  const dateValue =
    article.publishedAt ||
    article.createdAt;

  const dateLabel =
    formatDate(dateValue);

  return (
    <article
      className="insights-page__trend-card"
      data-reveal="up"
    >
      <Link
        href={href}
        className="insights-page__trend-link"
        aria-label={`Read ${article.title}`}
      >
        <ArticleImage
          article={article}
          className="insights-page__trend-image"
          priority={index < 2}
          sizes={
            index < 2
              ? "(max-width: 720px) calc(100vw - 30px), 590px"
              : "(max-width: 720px) calc(100vw - 30px), 380px"
          }
        />

        <span
          className="insights-page__trend-shade"
          aria-hidden="true"
        />

        <span
          className="insights-page__trend-arrow"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
          />
        </span>

        <span className="insights-page__trend-copy">
          <small>
            {textValue(article.category) || "Insights"}
          </small>

          <strong>
            {article.title}
          </strong>

          <span className="insights-page__trend-date">
            {dateLabel || "Tekcorp Journal"}
          </span>
        </span>
      </Link>
    </article>
  );
}


function ArticleCard({
  article,
  index,
}) {
  const href =
    articleHref(article.slug);

  const dateValue =
    article.publishedAt ||
    article.createdAt;

  const dateLabel =
    formatDate(dateValue);

  return (
    <article
      className="insights-page__article-card"
      data-reveal="up"
      style={{
        "--insights-delay":
          `${Math.min(index, 6) * 55}ms`,
      }}
    >
      <Link
        className="insights-page__article-visual"
        href={href}
        aria-label={`Read ${article.title}`}
      >
        <ArticleImage
          article={article}
          className="insights-page__article-image"
          sizes="(max-width: 650px) calc(100vw - 30px), (max-width: 1000px) 48vw, 380px"
        />

        <span
          className="insights-page__article-shade"
          aria-hidden="true"
        />

        <span
          className="insights-page__article-arrow"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
          />
        </span>

        {dateLabel ? (
          <time
            className="insights-page__date-pill"
            dateTime={String(dateValue)}
          >
            {dateLabel}
          </time>
        ) : null}
      </Link>

      <div className="insights-page__article-copy">
        <p>
          <span aria-hidden="true" />
          {textValue(article.category) || "Insights"}
        </p>

        <h3>
          <Link href={href}>
            {article.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}


export default function InsightsPage({
  articles = [],
  trendingArticles = [],
  currentPage = 1,
  totalPages = 1,
  total = 0,
  search = "",
}) {
  const safeArticles =
    Array.isArray(articles)
      ? articles
      : [];

  const safeTrending =
    Array.isArray(trendingArticles)
      ? trendingArticles.slice(0, 5)
      : [];

  const safeSearch =
    textValue(search);

  return (
    <div className="insights-page tek-content-route">
      <section
        className="insights-page__hero"
        aria-labelledby="insights-page-title"
      >
        <div className="tek-content-shell insights-page__hero-inner">
          <p className="insights-page__eyebrow">
            Trending Articles
          </p>

          <h1 id="insights-page-title">
            Discover Articles
          </h1>

          <InsightsSearch
            initialSearch={safeSearch}
            featuredArticles={
              safeTrending.length
                ? safeTrending
                : safeArticles
            }
          />
        </div>
      </section>


      <main className="tek-content-shell insights-page__content">
        {!safeSearch && safeTrending.length ? (
          <section
            className="insights-page__section"
            aria-labelledby="trending-blogs-title"
          >
            <header className="insights-page__section-title">
              <h2 id="trending-blogs-title">
                Trending Blogs
              </h2>
            </header>

            <div className="insights-page__trending-grid">
              {safeTrending.map(
                (article, index) => (
                  <TrendingCard
                    key={article._id || article.slug}
                    article={article}
                    index={index}
                  />
                ),
              )}
            </div>

            <div className="insights-page__view-more">
              <Button href="#more-blogs" appearance="text">
                <span>
                  View More
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.9}
                />
              </Button>
            </div>
          </section>
        ) : null}


        <section
          className="insights-page__section insights-page__section--more"
          id="more-blogs"
          aria-labelledby="more-blogs-title"
        >
          <header className="insights-page__more-head">
            <div>
              <h2 id="more-blogs-title">
                {safeSearch
                  ? "Search Results"
                  : "More Blogs"}
              </h2>

              {safeSearch ? (
                <p>
                  Results for{" "}
                  <strong>
                    “{safeSearch}”
                  </strong>
                </p>
              ) : null}
            </div>

            <span>
              {total}{" "}
              {total === 1
                ? "article"
                : "articles"}
            </span>
          </header>


          {safeArticles.length ? (
            <div className="insights-page__articles-grid">
              {safeArticles.map(
                (article, index) => (
                  <ArticleCard
                    key={article._id || article.slug}
                    article={article}
                    index={index}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="insights-page__empty">
              <span>
                NO MATCH
              </span>

              <h3>
                No articles matched your search.
              </h3>

              <p>
                Try another keyword or browse the complete Tekcorp journal.
              </p>

              <Button href="/insights" appearance="text">
                Browse all articles
              </Button>
            </div>
          )}


          <div className="insights-page__pagination">
            <ContentPagination
              pathname="/insights"
              currentPage={currentPage}
              totalPages={totalPages}
              query={{
                search:
                  safeSearch,
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
