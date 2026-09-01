import "./CaseStudies.css";

import Link from "next/link";

import CmsImage from
  "@/app/main-website-components/CmsImage/CmsImage";


const delayClasses = [
  "d1",
  "d2",
  "d3",
];


export default function CaseStudies({
  caseStudies = [],
}) {
  const visibleCaseStudies =
    Array.isArray(
      caseStudies,
    )
      ? caseStudies.filter(
          (caseStudy) =>
            caseStudy?.slug &&
            caseStudy?.title,
        )
      : [];

  return (
    <section className="case-studies">
      <div className="case-studies__container">
        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="case-studies__header sr">
          <div className="case-studies__header-left">
            <h2 className="case-studies__heading">
              <span className="case-studies__heading-gradient">
                Our Work
              </span>
            </h2>

            <p className="case-studies__intro">
              Our portfolio includes{" "}
              <strong>
                websites, digital platforms, automation systems
              </strong>
              , and branding projects developed for growth-driven
              businesses across multiple industries.
            </p>
          </div>

          <div className="case-studies__header-right">
            <h3 className="case-studies__focus-heading">
              <span className="case-studies__focus-line">
                Each Project Reflects Our Focus On{" "}
              </span>

              <span className="case-studies__focus-line case-studies__focus-line--second">
                Usability, Performance, And Measurable Results
              </span>
            </h3>
          </div>
        </div>

        {/* ==================================================
            CASE STUDY CARDS
        ================================================== */}
        {visibleCaseStudies.length > 0 ? (
          <div className="case-studies__grid">
          {visibleCaseStudies.map((item, index) => (
            <article
              key={item._id || item.slug}
              className={`case-studies__card sr ${
                delayClasses[index] ||
                ""
              }`}
            >
              <Link
                href={`/case-studies/${encodeURIComponent(
                  item.slug,
                )}`}
                className="case-studies__link"
                aria-label={`View case study: ${item.title}`}
              >
                <CmsImage
                  src={
                    item.thumbnail ||
                    item.heroImage ||
                    item.gallery?.[0] ||
                    ""
                  }
                  alt={`${item.client || item.title} case study preview`}
                  className="case-studies__image"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />

                <div
                  className="case-studies__dot-overlay"
                  aria-hidden="true"
                />

                <div
                  className="case-studies__vignette"
                  aria-hidden="true"
                />

                <div className="case-studies__content">
                  <span className="case-studies__category">
                    {item.category || "Case Study"}
                  </span>

                  <h4 className="case-studies__title">
                    {item.title}
                  </h4>

                  <span className="case-studies__action">
                    <span>View Case Study</span>

                    <svg
                      className="case-studies__arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
          </div>
        ) : (
          <div className="case-studies__empty sr">
            <p>
              New case studies are being prepared. Explore the
              case-study library for all published work.
            </p>

            <Link
              className="case-studies__empty-link"
              href="/case-studies"
            >
              <span>
                Explore Case Studies
              </span>

              <svg
                className="case-studies__arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
