import "./Landingpage1Articles.css";

import {
  ArrowUpRight,
} from "lucide-react";


/* ==========================================================================
   ARTICLES

   Dummy images are being used for now.
   Replace only the `image` values later with your final article images.
   ========================================================================== */

const articles = [
  {
    date:
      "May 23, 2023",

    readTime:
      "7 Min Read",

    title:
      "25 LinkedIn Connection Messages [Up To 78% Acceptance Rate]",

    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet.",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=88",
  },

  {
    date:
      "May 23, 2023",

    readTime:
      "7 Min Read",

    title:
      "How Digital Products Can Create Better Business Experiences",

    excerpt:
      "Discover how thoughtful digital solutions help businesses improve operations, customer experiences and long-term growth.",

    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=88",
  },

  {
    date:
      "May 23, 2023",

    readTime:
      "7 Min Read",

    title:
      "Building Scalable Technology for Modern Businesses",

    excerpt:
      "Scalable architecture, thoughtful engineering and a strong product strategy can help businesses move faster and grow confidently.",

    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=88",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function Landingpage1Articles() {
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

        <div className="lp1-articles__grid">

          {articles.map(
            (
              article,
              index,
            ) => (

              <article
                className="lp1-article"
                key={`${article.title}-${index}`}
                data-reveal="up"
                style={{
                  "--lp1-article-delay":
                    `${index * 90}ms`,
                }}
              >

                {/* ========================================================
                    ARTICLE IMAGE
                    ======================================================== */}

                <a
                  className="lp1-article__visual"
                  href="#contact-lp1"
                  aria-label={article.title}
                >

                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
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

                </a>


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

                  <a
                    className="lp1-article__read"
                    href="#contact-lp1"
                  >

                    <span>
                      Read more
                    </span>


                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.8}
                    />

                  </a>

                </div>

              </article>

            ),
          )}

        </div>

      </div>

    </section>
  );
}