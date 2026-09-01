"use client";

import "./HomeArticles.css";
import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/app/_shared/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";

import {
  ArrowUpRight,
} from "lucide-react";

import CmsImage from
  "@/app/main-website-components/CmsImage/CmsImage";


const articleDateFormatter =
  new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );


function formatArticleDate(
  value,
) {
  if (!value) {
    return "Recently published";
  }

  const date =
    new Date(
      value,
    );

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return "Recently published";
  }

  return articleDateFormatter.format(
    date,
  );
}


function getReadTime(
  article,
) {
  const contentText =
    Array.isArray(
      article.content,
    )
      ? article.content
          .map(
            (block) =>
              block?.text ||
              "",
          )
          .join(
            " ",
          )
      : "";

  const wordCount = [
    article.excerpt,
    contentText,
  ]
    .filter(
      Boolean,
    )
    .join(
      " ",
    )
    .trim()
    .split(
      /\s+/,
    )
    .filter(
      Boolean,
    ).length;

  return `${Math.max(
    1,
    Math.ceil(
      wordCount / 200,
    ),
  )} Min Read`;
}


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeArticles({
  articles = [],
  eyebrow = "Latest Blogs",
  titleLines = [
    "Our Excited Articles you",
    "maybe Interested in",
  ],
  sectionId = "insights-lp1",
  className = "",
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  const articleCards =
    Array.isArray(
      articles,
    )
      ? articles
          .filter(
            (article) =>
              article?.slug &&
              article?.title,
          )
          .map(
            (article) => ({
              ...article,

              date:
                formatArticleDate(
                  article.publishedAt ||
                    article.createdAt,
                ),

              readTime:
                getReadTime(
                  article,
                ),

              image:
                article.thumbnail ||
                article.heroImage ||
                "",

              href:
                `/insights/${encodeURIComponent(
                  article.slug,
                )}`,
            }),
          )
      : [];

  const shouldLoopArticles = articleCards.length > 3;
  const shouldRewindArticles =
    articleCards.length > 1 && !shouldLoopArticles;

  return (
    <section
      className={["lp1-articles", className].filter(Boolean).join(" ")}
      id={sectionId}
    >

      <div className="lp1-shell">

        {/* ================================================================
            SECTION HEADING
            ================================================================ */}

        <header
          className="lp1-articles__heading"
          data-reveal="up"
        >

          <p className="lp1-articles__kicker">

            {eyebrow}

            <span />

          </p>


          <h2 className="lp1-articles__title">
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>

        </header>


        {/* ================================================================
            ARTICLE GRID
            ================================================================ */}

        {articleCards.length > 0 ? (
          <Swiper
            className="lp1-articles__carousel"
            modules={[A11y, Autoplay, Pagination]}
            loop={shouldLoopArticles}
            rewind={shouldRewindArticles}
            speed={900}
            grabCursor
            roundLengths
            watchSlidesProgress
            autoplay={reducedMotion ? false : {
              delay: 1700,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1.04, spaceBetween: 12 },
              620: { slidesPerView: 2, spaceBetween: 16 },
              980: { slidesPerView: 3, spaceBetween: 18 },
            }}
          >

          {articleCards.map(
            (
              article,
              index,
            ) => (

              <SwiperSlide
                key={
                  article._id ||
                  article.slug
                }
              >
              <article
                className="lp1-article"
                data-reveal="up"
                style={{
                  "--lp1-article-delay":
                    `${index * 90}ms`,
                }}
              >

                {/* ========================================================
                    ARTICLE IMAGE
                    ======================================================== */}

                <Link
                  className="lp1-article__visual"
                  href={article.href}
                  aria-label={article.title}
                >

                  <CmsImage
                    src={article.image}
                    alt=""
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />


                  {/* IMAGE DARKENING */}

                  <span
                    className="lp1-article__image-overlay"
                    aria-hidden="true"
                  />


                  {/* HOVER ARROW */}

                  <span className="lp1-article__visual-arrow">

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                    />

                  </span>

                </Link>


                {/* ========================================================
                    ARTICLE CONTENT
                    ======================================================== */}

                <div className="lp1-article__content">

                  {/* META */}

                  <div className="lp1-article__meta">

                    <span>
                      {article.date}
                    </span>


                    <i />


                    <span>
                      {article.readTime}
                    </span>

                  </div>


                  {/* TITLE */}

                  <h3>
                    {article.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="lp1-article__excerpt">
                    {article.excerpt}
                  </p>


                  {/* READ MORE */}

                  <Link
                    className="lp1-article__read"
                    href={article.href}
                  >

                    <span>
                      Read more
                    </span>


                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.8}
                    />

                  </Link>

                </div>

              </article>
              </SwiperSlide>

            ),
          )}

          </Swiper>
        ) : (
          <div
            className="lp1-articles__empty"
            data-reveal="up"
          >
            <p>
              New insights are being prepared. Explore the insights
              library for every published TekCorp article.
            </p>

            <Button
              appearance="text"
              className="lp1-article__read"
              href="/insights"
            >
              <span>
                Browse all insights
              </span>

              <ArrowUpRight
                size={12}
                strokeWidth={1.8}
              />
            </Button>
          </div>
        )}

      </div>

    </section>
  );
}
