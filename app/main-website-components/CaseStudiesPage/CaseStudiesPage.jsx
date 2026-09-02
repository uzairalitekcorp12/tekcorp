"use client";

import "./CaseStudiesPage.css";

import Link from "next/link";

import {
  useTransition,
} from "react";

import {
  useRouter,
} from "next/navigation";

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
import ContentFilter from "../ContentFilter/ContentFilter";


/* ==========================================================================
   HELPERS
   ========================================================================== */

function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


/* ==========================================================================
   TITLE MAPPING

   New database:
   heroHeading

   Legacy:
   title

   Fallback:
   clientName
   ========================================================================== */

function getCaseStudyTitle(caseStudy) {
  return (
    textValue(
      caseStudy?.heroHeading,
    ) ||
    textValue(
      caseStudy?.title,
    ) ||
    textValue(
      caseStudy?.clientName,
    ) ||
    "TekCorp Case Study"
  );
}


/* ==========================================================================
   CLIENT MAPPING
   ========================================================================== */

function getCaseStudyClient(caseStudy) {
  return (
    textValue(
      caseStudy?.clientName,
    ) ||
    ""
  );
}


/* ==========================================================================
   INDUSTRY MAPPING

   New database:
   industry

   Legacy:
   category
   ========================================================================== */

function getCaseStudyIndustry(caseStudy) {
  return (
    textValue(
      caseStudy?.industry,
    ) ||
    textValue(
      caseStudy?.category,
    ) ||
    textValue(
      caseStudy?.category1,
    ) ||
    ""
  );
}


/* ==========================================================================
   IMAGE MAPPING

   Listing-specific thumbnail remains first preference when available.

   New case-study database:
   bannerImage

   Legacy:
   heroImage
   ========================================================================== */

function getCaseStudyImage(caseStudy) {
  return (
    textValue(
      caseStudy?.thumbnail,
    ) ||
    textValue(
      caseStudy?.bannerImage,
    ) ||
    textValue(
      caseStudy?.heroImage,
    ) ||
    ""
  );
}


/* ==========================================================================
   SAFE SLUG
   ========================================================================== */

function safeSlug(value) {
  let slug =
    textValue(value);


  if (!slug) {
    return "";
  }


  try {
    slug =
      decodeURIComponent(
        slug,
      );
  } catch {
    return "";
  }


  slug =
    slug
      .split(
        /[?#]/,
        1,
      )[0]
      .replace(
        /^https?:\/\/[^/]+/i,
        "",
      )
      .toLowerCase()
      .replace(
        /^\/?case-studies\/?/i,
        "",
      )
      .replace(
        /^\/+|\/+$/g,
        "",
      );


  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
    slug,
  )
    ? slug
    : "";
}


/* ==========================================================================
   CASE STUDY URL
   ========================================================================== */

function caseStudyHref(slug) {
  const value =
    safeSlug(
      slug,
    );


  return value
    ? `/case-studies/${value}`
    : "/case-studies";
}


/* ==========================================================================
   FILTER URL
   ========================================================================== */

function filterHref(category) {
  const value =
    textValue(
      category,
    );


  if (
    !value ||
    value.toLowerCase() ===
      "all"
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


/* ==========================================================================
   CARD TAGS

   Supports:
   - industry
   - category
   - tags
   - category1
   - category2
   - category3
   - category4

   Duplicate values are removed.
   ========================================================================== */

function cardTags(caseStudy) {
  const values = [
    getCaseStudyIndustry(
      caseStudy,
    ),

    textValue(
      caseStudy?.category,
    ),

    ...(Array.isArray(
      caseStudy?.tags,
    )
      ? caseStudy.tags.map(
          textValue,
        )
      : []),

    textValue(
      caseStudy?.category1,
    ),

    textValue(
      caseStudy?.category2,
    ),

    textValue(
      caseStudy?.category3,
    ),

    textValue(
      caseStudy?.category4,
    ),
  ].filter(Boolean);


  return Array.from(
    new Set(values),
  ).slice(
    0,
    3,
  );
}


/* ==========================================================================
   CASE STUDY CARD
   ========================================================================== */

function CaseStudyCard({
  caseStudy,
  index,
}) {
  const title =
    getCaseStudyTitle(
      caseStudy,
    );


  const client =
    getCaseStudyClient(
      caseStudy,
    );


  const industry =
    getCaseStudyIndustry(
      caseStudy,
    );


  const image =
    getCaseStudyImage(
      caseStudy,
    );


  const href =
    caseStudyHref(
      caseStudy?.slug,
    );


  const tags =
    cardTags(
      caseStudy,
    );


  const number =
    String(
      index + 1,
    ).padStart(
      2,
      "0",
    );


  return (
    <article
      className="case-studies-page__card"
      data-reveal="up"
      style={{
        "--case-delay":
          `${Math.min(
            index,
            8,
          ) * 45}ms`,
      }}
    >

      {/* ====================================================================
          VISUAL
          ==================================================================== */}

      <Link
        className="case-studies-page__visual"
        href={href}
        aria-label={`View ${title} case study`}
      >

        <CmsImage
          src={
            image ||
            contentImage(
              caseStudy,
              "case-study",
            )
          }
          alt={title}
          className="case-studies-page__image"
          fallbackClassName="case-studies-page__image-fallback"
          fallbackLabel={title}

          /*
           * Optimized for:
           *
           * Desktop   -> 3 columns
           * Tablet    -> 2 columns
           * Mobile    -> 1 column
           */
          sizes="
            (max-width: 700px) calc(100vw - 30px),
            (max-width: 1050px) calc(50vw - 34px),
            380px
          "

          /*
           * Only one image receives priority.
           *
           * Remaining cards can lazy-load normally.
           */
          priority={
            index === 0
          }
        />


        <span
          className="case-studies-page__visual-shade"
          aria-hidden="true"
        />


        <span
          className="case-studies-page__number"
          aria-hidden="true"
        >
          {number}
        </span>


        <span
          className="case-studies-page__visual-arrow"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </span>

      </Link>


      {/* ====================================================================
          CONTENT
          ==================================================================== */}

      <div className="case-studies-page__card-body">

        <div className="case-studies-page__card-kicker">

          <span>
            {client ||
              "TekCorp Project"}
          </span>


          {industry ? (
            <span>
              {industry}
            </span>
          ) : null}

        </div>


        <h2>
          <Link
            href={href}
          >
            {title}
          </Link>
        </h2>


        {tags.length ? (
          <div className="case-studies-page__meta">

            {tags.map(
              (tag) => (
                <span
                  key={tag}
                >
                  {tag}
                </span>
              ),
            )}

          </div>
        ) : null}


        <Link
          className="case-studies-page__details"
          href={href}
        >
          <span>
            View Case Study
          </span>


          <span
            aria-hidden="true"
          >
            <ArrowRight
              size={14}
              strokeWidth={1.8}
            />
          </span>
        </Link>

      </div>

    </article>
  );
}


/* ==========================================================================
   CASE STUDIES PAGE
   ========================================================================== */

export default function CaseStudiesPage({
  caseStudies = [],
  categories = [],
  currentPage = 1,
  totalPages = 1,
  total = 0,
  category = "all",
}) {
  const router =
    useRouter();


  const [
    isPending,
    startTransition,
  ] =
    useTransition();


  const safeCaseStudies =
    Array.isArray(
      caseStudies,
    )
      ? caseStudies
      : [];


  const safeCategories =
    Array.isArray(
      categories,
    )
      ? Array.from(
          new Set(
            categories
              .map(
                textValue,
              )
              .filter(
                (item) =>
                  item &&
                  item.toLowerCase() !==
                    "all",
              ),
          ),
        )
      : [];


  const activeCategory =
    textValue(
      category,
    ) ||
    "all";


  const filters = [
    "All",
    ...safeCategories,
  ];


  const selectedCategory =
    filters.find(
      (filter) =>
        filter.toLowerCase() ===
        activeCategory.toLowerCase(),
    ) ||
    "All";


  const numericTotal =
    Number(
      total,
    );


  const visibleTotal =
    Number.isFinite(
      numericTotal,
    ) &&
    numericTotal > 0
      ? numericTotal
      : safeCaseStudies.length;


  /* ==========================================================================
     FILTER CHANGE
     ========================================================================== */

  function changeCategory(
    nextCategory,
  ) {
    const next =
      textValue(
        nextCategory,
      ) ||
      "All";


    if (
      next.toLowerCase() ===
      selectedCategory.toLowerCase()
    ) {
      return;
    }


    startTransition(
      () => {
        router.push(
          filterHref(
            next,
          ),
        );
      },
    );
  }


  return (
    <div className="case-studies-page tek-content-route">


      {/* ====================================================================
          HERO
          ==================================================================== */}

      <section
        className="case-studies-page__hero"
        aria-labelledby="case-studies-title"
      >

        <div className="tek-content-shell case-studies-page__hero-inner">


          {/* LEFT */}

          <div className="case-studies-page__hero-copy">

            <p>
              Selected Digital Work
            </p>


            <h1
              id="case-studies-title"
            >
              Real challenges.
              <span>
                Thoughtful digital solutions.
              </span>
            </h1>

          </div>


          {/* RIGHT */}

          <div className="case-studies-page__hero-aside">

            <p>
              Explore how TekCorp combines design, engineering,
              strategy and technology to build digital products
              that solve real business problems and create
              measurable value.
            </p>

          </div>

        </div>

      </section>


      {/* ====================================================================
          CONTENT
          ==================================================================== */}

      <main
        className="tek-content-shell case-studies-page__content"
        aria-busy={
          isPending
        }
      >

        {/* ==================================================================
            LOADING
            ================================================================== */}

        {isPending ? (
          <div
            className="case-studies-page__fetching"
            role="status"
            aria-live="polite"
          >
            <span
              aria-hidden="true"
            />

            Updating projects…
          </div>
        ) : null}


        {/* ==================================================================
            FILTER BAR
            ================================================================== */}

        <div className="case-studies-page__filters-row">

          <div className="case-studies-page__filters-intro">

            <span>
              Portfolio
            </span>


            <strong>
              Browse our work
            </strong>

          </div>


          <div className="case-studies-page__filters">

            <ContentFilter
              label="Filter by industry"
              options={
                filters
              }
              value={
                selectedCategory
              }
              allOptionLabel="All projects"
              isPending={
                isPending
              }
              onChange={
                changeCategory
              }
            />

          </div>


          <span
            className="case-studies-page__count"
            aria-live="polite"
          >
            {visibleTotal}{" "}
            {visibleTotal === 1
              ? "project"
              : "projects"}
          </span>

        </div>


        {/* ==================================================================
            CASE STUDIES
            ================================================================== */}

        {safeCaseStudies.length ? (

          <div className="case-studies-page__grid">

            {safeCaseStudies.map(
              (
                caseStudy,
                index,
              ) => (
                <CaseStudyCard
                  key={
                    caseStudy?._id ||
                    caseStudy?.slug ||
                    `${getCaseStudyTitle(
                      caseStudy,
                    )}-${index}`
                  }
                  caseStudy={
                    caseStudy
                  }
                  index={
                    index
                  }
                />
              ),
            )}

          </div>

        ) : (

          /* ================================================================
             EMPTY STATE
             ================================================================ */

          <div className="case-studies-page__empty">

            <span>
              {activeCategory.toLowerCase() ===
              "all"
                ? "NO CASE STUDIES"
                : "NO CATEGORY MATCH"}
            </span>


            <h2>
              {activeCategory.toLowerCase() ===
              "all"
                ? "No case studies are available right now."
                : `No case studies found in ${activeCategory}.`}
            </h2>


            <p>
              {activeCategory.toLowerCase() ===
              "all"
                ? "Published projects will appear here when they are ready."
                : "Choose another industry or return to the complete portfolio."}
            </p>


            <Button
              href="/case-studies"
              appearance="primary"
            >
              {activeCategory.toLowerCase() ===
              "all"
                ? "Refresh projects"
                : "View all projects"}
            </Button>

          </div>

        )}


        {/* ==================================================================
            PAGINATION
            ================================================================== */}

        {totalPages > 1 ? (
          <div className="case-studies-page__pagination">

            <ContentPagination
              pathname="/case-studies"
              currentPage={
                currentPage
              }
              totalPages={
                totalPages
              }
              query={{
                category:
                  activeCategory.toLowerCase() ===
                  "all"
                    ? ""
                    : activeCategory,
              }}
            />

          </div>
        ) : null}

      </main>

    </div>
  );
}