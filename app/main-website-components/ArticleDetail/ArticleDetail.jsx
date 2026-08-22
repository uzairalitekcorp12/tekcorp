"use client";

import "./ArticleDetail.css";

import Link from "next/link";
import Button from "@/app/_shared/Button/Button";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Link2,
  Mail,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import CmsImage from "../CmsImage/CmsImage";
import {
  contentImage,
} from "../CmsImage/contentImages";


const DATE_FORMATTER =
  new Intl.DateTimeFormat(
    "en-US",
    {
      day: "numeric",
      month: "long",
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


function initials(name) {
  return (
    textValue(name)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() ||
    "TC"
  );
}


function normalizeContent(content) {
  return Array.isArray(content)
    ? content.filter(
        (block) =>
          block &&
          typeof block === "object",
      )
    : [];
}


function estimateReadTime(article) {
  const words =
    [
      article.excerpt,
      ...normalizeContent(
        article.content,
      ).map(
        (block) => block.text,
      ),
    ]
      .map(textValue)
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;

  return words
    ? `${Math.max(
        1,
        Math.ceil(words / 220),
      )} min read`
    : "";
}


function ArticleVisual({
  src,
  alt,
  priority = false,
  sizes,
}) {
  return (
    <span className="article-detail__image">
      <CmsImage
        src={
          src ||
          contentImage(
            {
              title:
                alt,
            },
            "insight",
          )
        }
        alt={alt}
        fallbackClassName="article-detail__image-fallback"
        fallbackLabel={alt || "TekCorp Insight"}
        priority={priority}
        sizes={sizes}
      />
    </span>
  );
}


function RelatedArticleCard({
  article,
  compact = false,
}) {
  const href =
    articleHref(article.slug);

  const dateValue =
    article.publishedAt ||
    article.createdAt;

  const date =
    formatDate(dateValue);

  return (
    <article
      className={[
        "article-related",
        compact ? "is-compact" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        className="article-related__visual"
        href={href}
        aria-label={`Read ${article.title}`}
      >
        <ArticleVisual
          src={
            article.thumbnail ||
            article.heroImage
          }
          alt={article.title}
          sizes={
            compact
              ? "(max-width: 900px) calc(100vw - 30px), 330px"
              : "(max-width: 650px) calc(100vw - 30px), 380px"
          }
        />

        <span
          className="article-related__shade"
          aria-hidden="true"
        />

        <span
          className="article-related__arrow"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </span>

        {date ? (
          <time
            className="article-related__date"
            dateTime={String(dateValue)}
          >
            {date}
          </time>
        ) : null}
      </Link>

      <div className="article-related__copy">
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


function ArticleBody({
  article,
}) {
  const blocks =
    normalizeContent(
      article.content,
    );

  const excerpt =
    textValue(
      article.excerpt,
    );

  return (
    <div className="article-detail__prose">
      {excerpt ? (
        <p className="article-detail__lede">
          {excerpt}
        </p>
      ) : null}

      {blocks.map(
        (block, index) => {
          const type =
            textValue(block.type)
              .toLowerCase();

          const text =
            textValue(block.text);

          const key =
            `${type || "block"}-${block._id || index}`;

          if (
            type === "heading" &&
            text
          ) {
            return (
              <h2 key={key}>
                {text}
              </h2>
            );
          }

          if (
            type === "paragraph" &&
            text
          ) {
            return (
              <p key={key}>
                {text}
              </p>
            );
          }

          if (
            type === "image" &&
            block.image
          ) {
            return (
              <figure
                className="article-detail__content-image"
                key={key}
              >
                <ArticleVisual
                  src={block.image}
                  alt={
                    textValue(block.alt) ||
                    article.title
                  }
                  sizes="(max-width: 900px) calc(100vw - 30px), 760px"
                />

                {text ? (
                  <figcaption>
                    {text}
                  </figcaption>
                ) : null}
              </figure>
            );
          }

          return null;
        },
      )}
    </div>
  );
}


function ShareBar({
  title,
  slug,
}) {
  const [copied, setCopied] =
    useState(false);

  const relativeUrl =
    articleHref(slug);

  const siteOrigin =
    (
      process.env.NEXT_PUBLIC_SITE_URL ||
      ""
    ).replace(/\/$/, "");

  const shareUrl =
    siteOrigin
      ? `${siteOrigin}${relativeUrl}`
      : relativeUrl;

  const encodedUrl =
    encodeURIComponent(shareUrl);

  const encodedTitle =
    encodeURIComponent(title);


  async function copyLink() {
    const value =
      typeof window !== "undefined"
        ? window.location.href
        : shareUrl;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1700,
      );
    } catch {
      setCopied(false);
    }
  }


  return (
    <nav
      className="article-detail__shares"
      aria-label="Share article"
    >
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Facebook"
      >
        f
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on LinkedIn"
      >
        in
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on X"
      >
        x
      </a>

      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Article link copied" : "Copy article link"}
      >
        {copied ? (
          <Check
            size={13}
            strokeWidth={2}
          />
        ) : (
          <Link2
            size={13}
            strokeWidth={1.8}
          />
        )}
      </button>
    </nav>
  );
}


function UpdatesForm({
  slug,
}) {
  return (
    <section className="article-detail__updates">
      <h2>
        Sign up to latest Updates
      </h2>

      <form
        action="/contact"
        method="get"
      >
        <Mail
          size={14}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <input
          type="hidden"
          name="topic"
          value="insights-updates"
        />

        <input
          type="hidden"
          name="source"
          value={safeSlug(slug)}
        />

        <label
          className="tek-sr-only"
          htmlFor="article-updates-email"
        >
          Email address
        </label>

        <input
          id="article-updates-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <Button type="submit" appearance="primary" size="small">
          Subscribe
        </Button>
      </form>
    </section>
  );
}


export default function ArticleDetail({
  article = {},
  latestArticles = [],
  trendingArticles = [],
}) {
  const title =
    textValue(article.title) ||
    "TekCorp Insight";

  const slug =
    safeSlug(article.slug);

  useEffect(() => {
    window.scrollTo(
      0,
      0,
    );
  }, [slug]);

  const category =
    textValue(article.category) ||
    "Insights";

  const authorName =
    textValue(article.author?.name) ||
    "TekCorp Editorial";

  const authorImage =
    textValue(article.author?.image) ||
    "/assets/About-assets/1.png";

  const authorRole =
    textValue(article.author?.role) ||
    category;

  const dateValue =
    article.publishedAt ||
    article.createdAt;

  const date =
    formatDate(dateValue);

  const readTime =
    estimateReadTime(article);

  const relatedTrending =
    useMemo(
      () =>
        (Array.isArray(trendingArticles)
          ? trendingArticles
          : [])
          .filter(
            (item) =>
              safeSlug(item.slug) !== slug,
          )
          .slice(0, 3),
      [
        trendingArticles,
        slug,
      ],
    );

  const latest =
    useMemo(
      () =>
        (Array.isArray(latestArticles)
          ? latestArticles
          : [])
          .filter(
            (item) =>
              safeSlug(item.slug) !== slug,
          )
          .slice(0, 6),
      [
        latestArticles,
        slug,
      ],
    );


  return (
    <article className="article-detail tek-content-route">
      <header className="article-detail__masthead">
        <div className="tek-content-shell article-detail__masthead-grid">
          <div>
            <h1>
              {title}
            </h1>

            <nav
              className="article-detail__breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link href="/home">
                TekCorp
              </Link>

              <span aria-hidden="true">
                &gt;
              </span>

              <Link href="/insights">
                Insights
              </Link>

              <span aria-hidden="true">
                &gt;
              </span>

              <span aria-current="page">
                {title}
              </span>

              <ArrowUpRight
                size={12}
                strokeWidth={1.8}
              />
            </nav>
          </div>


          <div className="article-detail__author-panel">
            <div className="article-detail__author">
              <span className="article-detail__avatar">
                <CmsImage
                  src={authorImage}
                  alt={authorName}
                  fallbackText={initials(authorName)}
                  sizes="48px"
                />
              </span>

              <span>
                <strong>
                  {authorName}
                </strong>

                <small>
                  {authorRole}

                  {date ? (
                    <>
                      <i aria-hidden="true">
                        •
                      </i>

                      <time dateTime={String(dateValue)}>
                        {date}
                      </time>
                    </>
                  ) : null}
                </small>
              </span>
            </div>

            <ShareBar
              title={title}
              slug={slug}
            />
          </div>
        </div>
      </header>


      <main className="tek-content-shell article-detail__content">
        <figure className="article-detail__hero">
          <ArticleVisual
            src={
              article.heroImage ||
              article.thumbnail
            }
            alt={title}
            priority
            sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
          />

          <figcaption>
            <span>
              {category}
            </span>

            {readTime ? (
              <span>
                {readTime}
              </span>
            ) : null}
          </figcaption>
        </figure>


        <div className="article-detail__layout">
          <div className="article-detail__main">
            <ArticleBody
              article={article}
            />

            <Link
              className="article-detail__comment"
              href={`/contact?topic=article-feedback&article=${encodeURIComponent(slug)}`}
            >
              Leave a Comment
            </Link>
          </div>


          <aside className="article-detail__sidebar">
            {relatedTrending.length ? (
              <section className="article-detail__trending">
                <h2>
                  Trending blogs
                </h2>

                <div>
                  {relatedTrending.map(
                    (item) => (
                      <RelatedArticleCard
                        key={item.slug}
                        article={item}
                        compact
                      />
                    ),
                  )}
                </div>
              </section>
            ) : null}

            <UpdatesForm slug={slug} />
          </aside>
        </div>


        {latest.length ? (
          <section
            className="article-detail__more"
            aria-labelledby="article-more-title"
          >
            <header>
              <h2 id="article-more-title">
                More Blogs
              </h2>

              <Button href="/insights" appearance="text">
                View all
                <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                />
              </Button>
            </header>

            <div className="article-detail__more-grid">
              {latest.map(
                (item) => (
                  <RelatedArticleCard
                    key={item.slug}
                    article={item}
                  />
                ),
              )}
            </div>
          </section>
        ) : null}
      </main>
    </article>
  );
}
