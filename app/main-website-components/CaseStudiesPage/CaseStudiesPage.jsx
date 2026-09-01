"use client";

import "./CaseStudiesPage.css";

import Link from "next/link";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/_shared/Button/Button";

import {
  ArrowUpRight,
} from "lucide-react";

import CmsImage from "../CmsImage/CmsImage";
import {
  contentImage,
} from "../CmsImage/contentImages";
import ContentPagination from "../ContentPagination/ContentPagination";
import ContentFilter from "../ContentFilter/ContentFilter";


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
      .replace(
        /^\/?case-studies\//i,
        "",
      )
      .replace(
        /^\/+|\/+$/g,
        "",
      );

  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
    ? slug
    : "";
}


function caseStudyHref(slug) {
  const value = safeSlug(slug);

  return value
    ? `/case-studies/${value}`
    : "/case-studies";
}


function filterHref(category) {
  const value =
    textValue(category);

  if (
    !value ||
    value.toLowerCase() === "all"
  ) {
    return "/case-studies";
  }

  const params =
    new URLSearchParams({
      category:
        value,
    });

  return `/case-studies?${params.toString()}`;
}


function cardTags(caseStudy) {
  const values = [
    textValue(caseStudy.category),
    ...(Array.isArray(caseStudy.tags)
      ? caseStudy.tags.map(textValue)
      : []),
  ].filter(Boolean);

  return Array.from(
    new Set(values),
  ).slice(0, 4);
}


function CaseStudyCard({
  caseStudy,
  index,
}) {
  const href =
    caseStudyHref(
      caseStudy.slug,
    );

  const tags =
    cardTags(caseStudy);

  return (
    <article
      className="case-studies-page__card"
      data-reveal="up"
      style={{
        "--case-delay":
          `${Math.min(index, 6) * 55}ms`,
      }}
    >
      <Link
        className="case-studies-page__visual"
        href={href}
        aria-label={`View ${caseStudy.title} case study`}
      >
        <CmsImage
          src={
            caseStudy.thumbnail ||
            caseStudy.heroImage ||
            contentImage(
              caseStudy,
              "case-study",
            )
          }
          alt={caseStudy.title}
          className="case-studies-page__image"
          fallbackClassName="case-studies-page__image-fallback"
          fallbackLabel={caseStudy.title}
          sizes="(max-width: 700px) calc(100vw - 30px), 50vw"
          priority={index < 2}
        />

        <span
          className="case-studies-page__visual-shade"
          aria-hidden="true"
        />

        <span
          className="case-studies-page__visual-arrow"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
          />
        </span>
      </Link>


      <div className="case-studies-page__card-body">
        {tags.length ? (
          <div className="case-studies-page__meta">
            {tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <h2>
          <Link href={href}>
            {caseStudy.title}
          </Link>
        </h2>

        <Link
          className="case-studies-page__details"
          href={href}
        >
          <span>
            View Details
          </span>

          <span aria-hidden="true">
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
            />
          </span>
        </Link>
      </div>
    </article>
  );
}


export default function CaseStudiesPage({
  caseStudies = [],
  categories = [],
  currentPage = 1,
  totalPages = 1,
  total = 0,
  category = "all",
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const safeCaseStudies =
    Array.isArray(caseStudies)
      ? caseStudies
      : [];

  const safeCategories =
    Array.isArray(categories)
      ? categories
          .map(textValue)
          .filter(Boolean)
      : [];

  const activeCategory =
    textValue(category) || "all";

  const filters = [
    "All",
    ...safeCategories,
  ];

  const selectedCategory =
    filters.find(
      (filter) =>
        filter.toLowerCase() ===
        activeCategory.toLowerCase(),
    ) || "All";

  function changeCategory(nextCategory) {
    if (
      nextCategory.toLowerCase() ===
      selectedCategory.toLowerCase()
    ) {
      return;
    }

    startTransition(() => {
      router.push(
        filterHref(nextCategory),
      );
    });
  }

  return (
    <div className="case-studies-page tek-content-route">
      <section
        className="case-studies-page__hero"
        aria-labelledby="case-studies-title"
      >
        <div className="tek-content-shell case-studies-page__hero-inner">
          <p>
            Leading the way in IT solutions
          </p>

          <h1 id="case-studies-title">
            Discover How TekCorp
            <span>
              Innovates Solutions
            </span>
          </h1>

          <nav
            className="case-studies-page__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link href="/home">
              TekCorp
            </Link>

            <span aria-hidden="true">
              &gt;
            </span>

            <strong>
              Case Studies
            </strong>

            <ArrowUpRight
              size={12}
              strokeWidth={1.8}
            />
          </nav>
        </div>
      </section>


      <main
        className="tek-content-shell case-studies-page__content"
        aria-busy={isPending}
      >
        {isPending ? (
          <div className="case-studies-page__fetching" role="status">
            <span aria-hidden="true" />
            Updating projects…
          </div>
        ) : null}
        <div className="case-studies-page__filters-row">
          <div
            className="case-studies-page__filters"
          >
            <ContentFilter
              label="Filter by industry"
              options={filters}
              value={selectedCategory}
              allOptionLabel="All projects"
              isPending={isPending}
              onChange={changeCategory}
            />
          </div>

          <span
            className="case-studies-page__count"
            aria-live="polite"
          >
            {total} projects
          </span>
        </div>


        {safeCaseStudies.length ? (
          <div className="case-studies-page__grid">
            {safeCaseStudies.map(
              (caseStudy, index) => (
                <CaseStudyCard
                  key={
                    caseStudy._id ||
                    caseStudy.slug
                  }
                  caseStudy={caseStudy}
                  index={index}
                />
              ),
            )}
          </div>
        ) : (
          <div className="case-studies-page__empty">
            <span>
              {activeCategory.toLowerCase() === "all"
                ? "NO CASE STUDIES"
                : "NO CATEGORY MATCH"}
            </span>

            <h2>
              {activeCategory.toLowerCase() === "all"
                ? "No case studies are available right now."
                : `No case studies found in ${activeCategory}.`}
            </h2>

            <p>
              {activeCategory.toLowerCase() === "all"
                ? "Published projects will appear here when they are ready."
                : "Choose another category or return to the complete portfolio."}
            </p>

            <Button href="/case-studies" appearance="primary">
              {activeCategory.toLowerCase() === "all"
                ? "Refresh projects"
                : "View all projects"}
            </Button>
          </div>
        )}


        <div className="case-studies-page__pagination">
          <ContentPagination
            pathname="/case-studies"
            currentPage={currentPage}
            totalPages={totalPages}
            query={{
              category:
                activeCategory.toLowerCase() === "all"
                  ? ""
                  : activeCategory,
            }}
          />
        </div>
      </main>
    </div>
  );
}
