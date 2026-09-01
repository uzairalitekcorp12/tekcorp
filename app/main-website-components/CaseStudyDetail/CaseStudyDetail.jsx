"use client";

import "./CaseStudyDetail.css";

import Link from "next/link";

import Button from
  "@/app/_shared/Button/Button";

import ContentSocialBar from
  "@/app/_shared/ContentSocialBar/ContentSocialBar";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
} from "lucide-react";

import CmsImage from
  "../CmsImage/CmsImage";

import {
  contentImage,
} from "../CmsImage/contentImages";


/* ==========================================================================
   BASIC HELPERS
   ========================================================================== */

function textValue(
  value,
) {
  return typeof value ===
    "string"
      ? value.trim()
      : "";
}


function paragraphs(
  value,
) {

  const source =
    textValue(
      value,
    );


  if (
    !source
  ) {
    return [];
  }


  return source
    .split(
      /\r?\n\s*\r?\n/,
    )
    .map(
      (item) =>
        item.trim(),
    )
    .filter(
      Boolean,
    );
}


/* ==========================================================================
   NORMALIZERS
   ========================================================================== */

function normalizeSections(
  sections,
) {

  return Array.isArray(
    sections,
  )
    ? sections
        .map(
          (section) => ({
            heading:
              textValue(
                section?.heading,
              ),

            content:
              paragraphs(
                section?.content,
              ),
          }),
        )
        .filter(
          (section) =>
            section.heading ||
            section.content.length,
        )
    : [];
}


function normalizeGallery(
  gallery,
) {

  if (
    !Array.isArray(
      gallery,
    )
  ) {
    return [];
  }


  return Array.from(
    new Set(
      gallery
        .map(
          (item) =>
            typeof item ===
              "string"
              ? item.trim()
              : "",
        )
        .filter(
          Boolean,
        ),
    ),
  );
}


function normalizeStructuredSections(
  value,
) {

  const source =
    value &&
    typeof value ===
      "object"
      ? value
      : {};


  const normalizeTextItems =
    (items) =>
      Array.isArray(
        items,
      )
        ? items
            .map(
              (item) => ({
                title:
                  textValue(
                    item?.title,
                  ),

                text:
                  textValue(
                    item?.text,
                  ),

                icon:
                  textValue(
                    item?.icon,
                  ),

                variant:
                  textValue(
                    item?.variant,
                  ),

                highlighted:
                  Boolean(
                    item?.highlighted,
                  ),
              }),
            )
            .filter(
              (item) =>
                item.title ||
                item.text,
            )
        : [];


  const normalizeMetrics =
    (items) =>
      Array.isArray(
        items,
      )
        ? items
            .map(
              (item) => ({
                value:
                  textValue(
                    item?.value,
                  ),

                label:
                  textValue(
                    item?.label,
                  ),
              }),
            )
            .filter(
              (item) =>
                item.value ||
                item.label,
            )
        : [];


  const problemSource =
    source.problems ||
    {};


  const impactSource =
    source.impact ||
    {};


  const processSource =
    source.process ||
    {};


  const resultSource =
    source.result ||
    {};


  return {

    problems: {

      kicker:
        textValue(
          problemSource.kicker,
        ),

      heading:
        textValue(
          problemSource.heading,
        ),

      leftParas:
        Array.isArray(
          problemSource.leftParas,
        )
          ? problemSource.leftParas.flatMap(
              paragraphs,
            )
          : [],

      rightHeading:
        textValue(
          problemSource.rightHeading,
        ),

      items:
        normalizeTextItems(
          problemSource.problems,
        ),
    },


    impact: {

      metrics:
        normalizeMetrics(
          impactSource.metrics,
        ),

      blocks:
        normalizeTextItems(
          impactSource.blocks,
        ),

      collageImage:
        textValue(
          impactSource.collageImage,
        ),
    },


    process: {

      heading:
        textValue(
          processSource.heading,
        ),

      steps:
        normalizeTextItems(
          processSource.steps,
        ),
    },


    result: {

      heading:
        textValue(
          resultSource.heading,
        ),

      paras:
        Array.isArray(
          resultSource.paras,
        )
          ? resultSource.paras.flatMap(
              paragraphs,
            )
          : [],

      metrics:
        normalizeMetrics(
          resultSource.metrics,
        ),

      mediaImage:
        textValue(
          resultSource.mediaImage,
        ),
    },
  };
}


function normalizeTechnologies(
  value,
) {

  return Array.isArray(
    value,
  )
    ? value
        .map(
          (technology) => ({
            name:
              textValue(
                technology?.name,
              ),

            icon:
              textValue(
                technology?.icon,
              ),
          }),
        )
        .filter(
          (technology) =>
            technology.name,
        )
    : [];
}


function hasStructuredContent(
  sections,
  technologies,
) {

  return Boolean(
    sections.problems.heading ||
      sections.problems.leftParas.length ||
      sections.problems.items.length ||
      sections.impact.metrics.length ||
      sections.impact.blocks.length ||
      sections.process.steps.length ||
      sections.result.paras.length ||
      sections.result.metrics.length ||
      technologies.length,
  );
}


/* ==========================================================================
   IMAGE
   ========================================================================== */

function DetailImage({
  src,
  alt,
  priority = false,
  sizes,
}) {

  return (
    <span className="case-detail__image">

      <CmsImage
        src={
          src ||
          contentImage(
            {
              title:
                alt,
            },
            "case-study",
          )
        }
        alt={
          alt
        }
        fallbackClassName="case-detail__image-fallback"
        fallbackLabel={
          alt
        }
        priority={
          priority
        }
        sizes={
          sizes
        }
      />

    </span>
  );
}


/* ==========================================================================
   METRIC HELPERS
   ========================================================================== */

function metricParts(
  value,
) {

  const source =
    textValue(
      value,
    );


  const match =
    source.match(
      /^(.*?)(-?\d+(?:\.\d+)?)(.*)$/,
    );


  if (
    !match
  ) {
    return null;
  }


  const target =
    Number(
      match[2],
    );


  return Number.isFinite(
    target,
  )
    ? {
        prefix:
          match[1],

        target,

        suffix:
          match[3],

        decimals:
          (
            match[2]
              .split(
                ".",
              )[1] ||
            ""
          ).length,
      }
    : null;
}


/* ==========================================================================
   ANIMATED METRIC
   ========================================================================== */

function AnimatedMetric({
  label,
  value,
}) {

  const metric =
    useMemo(
      () =>
        metricParts(
          value,
        ),
      [
        value,
      ],
    );


  const [
    displayValue,
    setDisplayValue,
  ] =
    useState(
      value ||
      "—",
    );


  const metricRef =
    useRef(
      null,
    );


  const animationFrameRef =
    useRef(
      null,
    );


  const animate =
    useCallback(
      () => {

        if (
          !metric
        ) {
          return;
        }


        window.cancelAnimationFrame(
          animationFrameRef.current,
        );


        const startedAt =
          window.performance.now();


        const duration =
          950;


        function update(
          now,
        ) {

          const progress =
            Math.min(
              1,
              (
                now -
                startedAt
              ) /
                duration,
            );


          const eased =
            1 -
            Math.pow(
              1 -
                progress,
              3,
            );


          const current =
            metric.target *
            eased;


          setDisplayValue(
            `${
              metric.prefix
            }${
              current.toFixed(
                metric.decimals,
              )
            }${
              metric.suffix
            }`,
          );


          if (
            progress <
            1
          ) {

            animationFrameRef.current =
              window.requestAnimationFrame(
                update,
              );

          }

        }


        setDisplayValue(
          `${
            metric.prefix
          }${
            (0).toFixed(
              metric.decimals,
            )
          }${
            metric.suffix
          }`,
        );


        animationFrameRef.current =
          window.requestAnimationFrame(
            update,
          );

      },
      [
        metric,
      ],
    );


  useEffect(
    () => {

      const element =
        metricRef.current;


      if (
        !element ||
        !metric
      ) {
        return undefined;
      }


      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches
      ) {
        return undefined;
      }


      const observer =
        new IntersectionObserver(
          (
            [
              entry,
            ],
          ) => {

            if (
              entry.isIntersecting
            ) {

              animate();

              observer.disconnect();

            }

          },
          {
            threshold:
              .45,
          },
        );


      observer.observe(
        element,
      );


      return () => {

        observer.disconnect();


        window.cancelAnimationFrame(
          animationFrameRef.current,
        );

      };

    },
    [
      animate,
      metric,
    ],
  );


  return (
    <div
      ref={
        metricRef
      }
      className="case-detail__metric"
      tabIndex={0}
      onMouseEnter={
        animate
      }
      onFocus={
        animate
      }
      aria-label={`${
        label ||
        "Result"
      }: ${
        value ||
        "not available"
      }`}
    >

      <dt>
        {label ||
          "Result"}
      </dt>


      <dd>
        {displayValue}
      </dd>

    </div>
  );
}


/* ==========================================================================
   METRICS
   ========================================================================== */

function Metrics({
  items,
  className = "",
}) {

  if (
    !items.length
  ) {
    return null;
  }


  return (
    <dl
      className={[
        "case-detail__metrics",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >

      {items.map(
        (
          item,
          index,
        ) => (

          <AnimatedMetric
            key={`${item.value}-${item.label}-${index}`}
            label={
              item.label
            }
            value={
              item.value
            }
          />

        ),
      )}

    </dl>
  );
}


/* ==========================================================================
   STRUCTURED CASE STUDY
   ========================================================================== */

function StructuredCaseStudy({
  description,
  sections,
  technologies,
  title,
}) {

  const {
    problems,
    impact,
    process,
    result,
  } =
    sections;


  return (
    <div className="case-detail__structured">


      {/* ====================================================================
          OVERVIEW
          ==================================================================== */}

      {problems.heading ||
      problems.leftParas.length ? (

        <section className="case-detail__overview">

          <header>

            {problems.kicker ? (

              <p>
                {problems.kicker}
              </p>

            ) : null}


            <h2>
              {problems.heading ||
                title}
            </h2>

          </header>


          <div className="case-detail__overview-copy">

            {description ? (

              <p>
                {description}
              </p>

            ) : null}


            {problems.leftParas.map(
              (
                paragraph,
                index,
              ) => (

                <p
                  key={
                    index
                  }
                >
                  {paragraph}
                </p>

              ),
            )}

          </div>

        </section>

      ) : null}


      {/* ====================================================================
          CHALLENGES
          ==================================================================== */}

      {problems.items.length ? (

        <section className="case-detail__challenges">

          <header className="case-detail__structured-heading">

            <p>
              Challenges
            </p>


            <h2>
              {problems.rightHeading ||
                "Business challenges"}
            </h2>

          </header>


          <div className="case-detail__challenge-grid">

            {problems.items.map(
              (
                problem,
                index,
              ) => (

                <article
                  className={[
                    "case-detail__challenge-card",

                    problem.highlighted
                      ? "is-highlighted"
                      : "",

                    problem.variant ===
                      "large"
                      ? "is-large"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={`${problem.title}-${index}`}
                >

                  <span>
                    {String(
                      index +
                      1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>


                  <h3>
                    {problem.title ||
                      "Challenge"}
                  </h3>


                  {paragraphs(
                    problem.text,
                  ).map(
                    (
                      paragraph,
                      paragraphIndex,
                    ) => (

                      <p
                        key={
                          paragraphIndex
                        }
                      >
                        {paragraph}
                      </p>

                    ),
                  )}

                </article>

              ),
            )}

          </div>

        </section>

      ) : null}


      {/* ====================================================================
          IMPACT
          ==================================================================== */}

      {impact.metrics.length ||
      impact.blocks.length ? (

        <section className="case-detail__impact">

          <header className="case-detail__structured-heading">

            <p>
              Impact
            </p>


            <h2>
              Built for measurable growth
            </h2>

          </header>


          <Metrics
            items={
              impact.metrics
            }
          />


          {impact.collageImage ? (

            <figure className="case-detail__section-media">

              <DetailImage
                src={
                  impact.collageImage
                }
                alt={`${title} platform impact`}
                sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
              />

            </figure>

          ) : null}


          {impact.blocks.length ? (

            <div className="case-detail__impact-grid">

              {impact.blocks.map(
                (
                  block,
                  index,
                ) => (

                  <article
                    key={`${block.title}-${index}`}
                  >

                    {block.icon ? (

                      <span className="case-detail__block-icon">

                        <CmsImage
                          src={
                            block.icon
                          }
                          alt=""
                          fallbackLabel=""
                          sizes="42px"
                        />

                      </span>

                    ) : null}


                    <h3>
                      {block.title ||
                        "Platform capability"}
                    </h3>


                    {paragraphs(
                      block.text,
                    ).map(
                      (
                        paragraph,
                        paragraphIndex,
                      ) => (

                        <p
                          key={
                            paragraphIndex
                          }
                        >
                          {paragraph}
                        </p>

                      ),
                    )}

                  </article>

                ),
              )}

            </div>

          ) : null}

        </section>

      ) : null}


      {/* ====================================================================
          SOLUTIONS
          ==================================================================== */}

      {process.steps.length ? (

        <section className="case-detail__solutions">

          <header className="case-detail__structured-heading">

            <p>
              Solutions
            </p>


            <h2>
              {process.heading ||
                "Implemented solutions"}
            </h2>

          </header>


          <ol className="case-detail__solutions-list">

            {process.steps.map(
              (
                step,
                index,
              ) => (

                <li
                  key={`${step.title}-${index}`}
                >

                  <span>
                    {String(
                      index +
                      1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>


                  <div>

                    <h3>
                      {step.title ||
                        "Solution"}
                    </h3>


                    {paragraphs(
                      step.text,
                    ).map(
                      (
                        paragraph,
                        paragraphIndex,
                      ) => (

                        <p
                          key={
                            paragraphIndex
                          }
                        >
                          {paragraph}
                        </p>

                      ),
                    )}

                  </div>

                </li>

              ),
            )}

          </ol>

        </section>

      ) : null}


      {/* ====================================================================
          RESULTS
          ==================================================================== */}

      {result.heading ||
      result.paras.length ||
      result.metrics.length ? (

        <section className="case-detail__results">

          <header className="case-detail__structured-heading">

            <p>
              Results
            </p>


            <h2>
              {result.heading ||
                "Business results"}
            </h2>

          </header>


          <div className="case-detail__results-copy">

            {result.paras.map(
              (
                paragraph,
                index,
              ) => (

                <p
                  key={
                    index
                  }
                >
                  {paragraph}
                </p>

              ),
            )}

          </div>


          {result.mediaImage ? (

            <figure className="case-detail__section-media">

              <DetailImage
                src={
                  result.mediaImage
                }
                alt={`${title} project result`}
                sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
              />

            </figure>

          ) : null}


          <Metrics
            items={
              result.metrics
            }
            className="case-detail__metrics--results"
          />

        </section>

      ) : null}


      {/* ====================================================================
          TECHNOLOGIES
          ==================================================================== */}

      {technologies.length ? (

        <section className="case-detail__technologies">

          <header className="case-detail__structured-heading">

            <p>
              Technology
            </p>


            <h2>
              Technology &amp; integrations
            </h2>

          </header>


          <ul>

            {technologies.map(
              (
                technology,
                index,
              ) => (

                <li
                  key={`${technology.name}-${index}`}
                >

                  <span className="case-detail__technology-icon">

                    {technology.icon ? (

                      <CmsImage
                        src={
                          technology.icon
                        }
                        alt=""
                        fallbackText={
                          technology.name
                            .slice(
                              0,
                              2,
                            )
                            .toUpperCase()
                        }
                        sizes="42px"
                      />

                    ) : (

                      technology.name
                        .slice(
                          0,
                          2,
                        )
                        .toUpperCase()

                    )}

                  </span>


                  <span>
                    {technology.name}
                  </span>

                </li>

              ),
            )}

          </ul>

        </section>

      ) : null}

    </div>
  );
}


/* ==========================================================================
   CONTACT BUTTON
   ========================================================================== */

function ContactButton({
  title,
}) {

  return (
    <Button
      className="case-detail__contact"
      appearance="box"
      href={`/contact?topic=case-study&project=${encodeURIComponent(
        title,
      )}`}
    >

      <span>
        Contact Now
      </span>


      <ArrowUpRight
        size={15}
        strokeWidth={1.8}
      />

    </Button>
  );
}


/* ==========================================================================
   GENERIC CASE STUDY
   ========================================================================== */

function GenericCaseStudy({
  description,
  sections,
  title,
}) {

  const primary =
    sections[0] ||
    {
      heading:
        "Project overview",

      content:
        [],
    };


  const remaining =
    sections.slice(
      1,
    );


  return (
    <div
      className={[
        "case-detail__story",

        remaining.length
          ? "has-sections"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >

      <section className="case-detail__lead">

        <h2>
          {primary.heading ||
            title}
        </h2>


        {description ? (

          <p>
            {description}
          </p>

        ) : null}


        {primary.content.map(
          (
            paragraph,
            index,
          ) => (

            <p
              key={
                index
              }
            >
              {paragraph}
            </p>

          ),
        )}


        <ContactButton
          title={
            title
          }
        />

      </section>


      {remaining.length ? (

        <div className="case-detail__sections">

          {remaining.map(
            (
              section,
              index,
            ) => (

              <section
                className="case-detail__section"
                key={`${section.heading}-${index}`}
              >

                <span
                  aria-hidden="true"
                >
                  {String(
                    index +
                    1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </span>


                <div>

                  {section.heading ? (

                    <h3>
                      {section.heading}
                    </h3>

                  ) : null}


                  {section.content.map(
                    (
                      paragraph,
                      paragraphIndex,
                    ) => (

                      <p
                        key={
                          paragraphIndex
                        }
                      >
                        {paragraph}
                      </p>

                    ),
                  )}

                </div>

              </section>

            ),
          )}

        </div>

      ) : null}

    </div>
  );
}


/* ==========================================================================
   CASE STUDY DETAIL
   ========================================================================== */

export default function CaseStudyDetail({
  caseStudy = {},
}) {

  const slug =
    textValue(
      caseStudy.slug,
    );


  useEffect(
    () => {

      window.scrollTo(
        0,
        0,
      );

    },
    [
      slug,
    ],
  );


  const title =
    textValue(
      caseStudy.title,
    ) ||
    "TekCorp Case Study";


  const category =
    textValue(
      caseStudy.category,
    ) ||
    "Digital Product";


  const description =
    textValue(
      caseStudy.shortDescription,
    );


  const sections =
    normalizeSections(
      caseStudy.sections,
    );


  const structuredSections =
    normalizeStructuredSections(
      caseStudy.structuredSections,
    );


  const technologies =
    normalizeTechnologies(
      caseStudy.technologies,
    );


  const structured =
    hasStructuredContent(
      structuredSections,
      technologies,
    );


  const gallery =
    normalizeGallery(
      caseStudy.gallery,
    );


  return (
    <article className="case-detail tek-content-route">


      {/* ====================================================================
          MASTHEAD
          ==================================================================== */}

      <section
        className="case-detail__masthead"
        aria-labelledby="case-detail-title"
      >

        <div className="tek-content-shell case-detail__masthead-inner">

          <p>
            Leading the way in IT solutions
          </p>


          <h1 id="case-detail-title">
            {title}
          </h1>


          <nav
            className="case-detail__breadcrumb"
            aria-label="Breadcrumb"
          >

            <Link href="/home">
              TekCorp
            </Link>


            <span aria-hidden="true">
              &gt;
            </span>


            <Link href="/case-studies">
              Case Studies
            </Link>


            <span aria-hidden="true">
              &gt;
            </span>


            <strong>
              {title}
            </strong>


            <ArrowUpRight
              size={12}
              strokeWidth={1.8}
            />

          </nav>


          {/* ================================================================
              SHARED SOCIAL LINKS
              ================================================================ */}

          <ContentSocialBar
            title={title}
            align="center"
            ariaLabel="TekCorp social links and copy case study link"
          />

        </div>

      </section>


      {/* ====================================================================
          CONTENT
          ==================================================================== */}

      <main className="tek-content-shell case-detail__content">


        {/* HERO */}

        <figure className="case-detail__hero-image">

          <DetailImage
            src={
              caseStudy.heroImage ||
              caseStudy.thumbnail
            }
            alt={
              title
            }
            priority
            sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
          />


          <figcaption>
            {category}
          </figcaption>

        </figure>


        {/* CONTENT */}

        {structured ? (

          <StructuredCaseStudy
            description={
              description
            }
            sections={
              structuredSections
            }
            technologies={
              technologies
            }
            title={
              title
            }
          />

        ) : (

          <GenericCaseStudy
            description={
              description
            }
            sections={
              sections
            }
            title={
              title
            }
          />

        )}


        {structured ? (

          <ContactButton
            title={
              title
            }
          />

        ) : null}


        {/* ==================================================================
            GALLERY
            ================================================================== */}

        {gallery.length ? (

          <section
            className="case-detail__gallery"
            aria-label="Project gallery"
          >

            {gallery.map(
              (
                source,
                index,
              ) => (

                <figure
                  className="case-detail__gallery-item"
                  key={`${source}-${index}`}
                >

                  <DetailImage
                    src={
                      source
                    }
                    alt={`${title} project view ${index + 1}`}
                    sizes="(max-width: 700px) calc(100vw - 30px), 50vw"
                  />


                  <figcaption>

                    Project view{" "}

                    {String(
                      index +
                      1,
                    ).padStart(
                      2,
                      "0",
                    )}

                  </figcaption>

                </figure>

              ),
            )}

          </section>

        ) : null}

      </main>

    </article>
  );
}