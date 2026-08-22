import "./HomeArticles.css";

import Link from "next/link";

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
}) {
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

  return (
    <section
      className="lp1-articles"
      id="insights-lp1"
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

            Latest Blogs

            <span />

          </p>


          <h2 className="lp1-articles__title">
            Our Excited Articles you
            <br />
            maybe Interested in
          </h2>

        </header>


        {/* ================================================================
            ARTICLE GRID
            ================================================================ */}

        {articleCards.length > 0 ? (
          <div className="lp1-articles__grid">

          {articleCards.map(
            (
              article,
              index,
            ) => (

              <article
                className="lp1-article"
                key={
                  article._id ||
                  article.slug
                }
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

            ),
          )}

          </div>
        ) : (
          <div
            className="lp1-articles__empty"
            data-reveal="up"
          >
            <p>
              New insights are being prepared. Explore the insights
              library for every published TekCorp article.
            </p>

            <Link
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
            </Link>
          </div>
        )}

      </div>

    </section>
  );
}
