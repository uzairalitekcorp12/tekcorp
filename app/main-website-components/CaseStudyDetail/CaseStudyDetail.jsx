"use client";

import "./CaseStudyDetail.css";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import CmsImage from "../CmsImage/CmsImage";
import { contentImage } from "../CmsImage/contentImages";


/* ==========================================================================
   BASIC HELPERS
   ========================================================================== */

function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function paragraphs(value) {
  const source = textValue(value);

  if (!source) {
    return [];
  }

  return source
    .split(/\r?\n\s*\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}


/* ==========================================================================
   LEGACY SECTIONS
   ========================================================================== */

function normalizeSections(sections) {
  return Array.isArray(sections)
    ? sections
        .map((section) => ({
          heading: textValue(
            section?.heading,
          ),

          content: paragraphs(
            section?.content,
          ),
        }))
        .filter(
          (section) =>
            section.heading ||
            section.content.length,
        )
    : [];
}


/* ==========================================================================
   GALLERY
   ========================================================================== */

function normalizeGallery(gallery) {
  if (!Array.isArray(gallery)) {
    return [];
  }

  return Array.from(
    new Set(
      gallery
        .map((item) =>
          typeof item === "string"
            ? item.trim()
            : "",
        )
        .filter(Boolean),
    ),
  );
}


/* ==========================================================================
   STRUCTURED DATABASE SECTIONS
   ========================================================================== */

function normalizeStructuredSections(value) {
  const source =
    value &&
    typeof value === "object" &&
    !Array.isArray(value)
      ? value
      : {};


  function normalizeTextItems(items) {
    return Array.isArray(items)
      ? items
          .map((item) => ({
            title: textValue(
              item?.title,
            ),

            text: textValue(
              item?.text,
            ),

            icon: textValue(
              item?.icon,
            ),

            variant: textValue(
              item?.variant,
            ),

            highlighted: Boolean(
              item?.highlighted,
            ),
          }))
          .filter(
            (item) =>
              item.title ||
              item.text,
          )
      : [];
  }


  function normalizeMetrics(items) {
    return Array.isArray(items)
      ? items
          .map((item) => ({
            value: textValue(
              item?.value,
            ),

            label: textValue(
              item?.label,
            ),
          }))
          .filter(
            (item) =>
              item.value ||
              item.label,
          )
      : [];
  }


  const problemSource =
    source.problems || {};

  const impactSource =
    source.impact || {};

  const processSource =
    source.process || {};

  const resultSource =
    source.result || {};


  return {
    problems: {
      kicker: textValue(
        problemSource.kicker,
      ),

      heading: textValue(
        problemSource.heading,
      ),

      leftParas: Array.isArray(
        problemSource.leftParas,
      )
        ? problemSource.leftParas.flatMap(
            paragraphs,
          )
        : [],

      rightHeading: textValue(
        problemSource.rightHeading,
      ),

      items: normalizeTextItems(
        problemSource.problems,
      ),
    },


    impact: {
      metrics: normalizeMetrics(
        impactSource.metrics,
      ),

      blocks: normalizeTextItems(
        impactSource.blocks,
      ),

      collageImage: textValue(
        impactSource.collageImage,
      ),
    },


    process: {
      heading: textValue(
        processSource.heading,
      ),

      steps: normalizeTextItems(
        processSource.steps,
      ),
    },


    result: {
      heading: textValue(
        resultSource.heading,
      ),

      paras: Array.isArray(
        resultSource.paras,
      )
        ? resultSource.paras.flatMap(
            paragraphs,
          )
        : [],

      metrics: normalizeMetrics(
        resultSource.metrics,
      ),

      mediaImage: textValue(
        resultSource.mediaImage,
      ),

      mediaVideo: textValue(
        resultSource.mediaVideo,
      ),
    },
  };
}


/* ==========================================================================
   TECHNOLOGIES
   ========================================================================== */

function normalizeTechnologies(value) {
  return Array.isArray(value)
    ? value
        .map((technology) => ({
          name: textValue(
            technology?.name,
          ),

          icon: textValue(
            technology?.icon,
          ),
        }))
        .filter(
          (technology) =>
            technology.name,
        )
    : [];
}


/* ==========================================================================
   STRUCTURED CONTENT CHECK
   ========================================================================== */

function hasStructuredContent(sections) {
  return Boolean(
    sections.problems.heading ||
      sections.problems.leftParas.length ||
      sections.problems.items.length ||
      sections.impact.metrics.length ||
      sections.impact.blocks.length ||
      sections.impact.collageImage ||
      sections.process.heading ||
      sections.process.steps.length ||
      sections.result.heading ||
      sections.result.paras.length ||
      sections.result.metrics.length ||
      sections.result.mediaImage,
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
              title: alt,
            },
            "case-study",
          )
        }
        alt={alt}
        fallbackClassName="case-detail__image-fallback"
        fallbackLabel={alt}
        priority={priority}
        sizes={sizes}
      />
    </span>
  );
}


/* ==========================================================================
   YOUTUBE
   ========================================================================== */

function youtubeVideoData(value) {
  const source =
    textValue(value);

  if (!source) {
    return null;
  }

  try {
    const url =
      new URL(source);

    let id = "";


    if (
      url.hostname.includes(
        "youtu.be",
      )
    ) {
      id =
        url.pathname
          .replace(/^\/+/, "")
          .split("/")[0];
    }


    if (
      url.hostname.includes(
        "youtube.com",
      )
    ) {
      if (
        url.pathname.startsWith(
          "/shorts/",
        )
      ) {
        id =
          url.pathname.split("/")[2] ||
          "";
      } else if (
        url.pathname.startsWith(
          "/embed/",
        )
      ) {
        id =
          url.pathname.split("/")[2] ||
          "";
      } else {
        id =
          url.searchParams.get("v") ||
          "";
      }
    }


    if (!id) {
      return null;
    }


    return {
      id,

      /*
       * autoplay=1
       * mute=1
       * controls=1
       * playsinline=1
       * loop=1
       *
       * This means the video starts silently but the visitor
       * can use YouTube's controls to unmute, pause, seek,
       * fullscreen, change volume, etc.
       */
      embedUrl:
        `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          id,
        )}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=${encodeURIComponent(
          id,
        )}`,
    };
  } catch {
    return null;
  }
}


/* ==========================================================================
   HERO VIDEO

   BEHAVIOUR
   --------------------------------------------------------------------------
   - Automatically starts when possible
   - Starts muted
   - Native controls are visible
   - Visitor can manually unmute
   - Visitor can change volume
   - Visitor can pause/play
   - Visitor can seek
   - Visitor can fullscreen
   - Loops automatically
   - No poster image
   - Hidden while loading
   - Removed when media fails
   - Slow/broken URLs time out after 12 seconds

   IMPORTANT:
   --------------------------------------------------------------------------
   We intentionally DO NOT set `video.volume = 0`.

   Muting should be handled by:
     video.muted = true

   That preserves autoplay compatibility while allowing the visitor
   to unmute normally through the browser's native controls.
   ========================================================================== */

function CaseStudyHeroVideo({
  src,
  title,
  onFailure,
}) {
  const videoSource =
    textValue(src);

  const videoRef =
    useRef(null);

  const youtube =
    useMemo(
      () =>
        youtubeVideoData(
          videoSource,
        ),
      [videoSource],
    );


  const [
    status,
    setStatus,
  ] =
    useState(
      videoSource
        ? "loading"
        : "failed",
    );


  /* ==========================================================================
     RESET WHEN VIDEO URL CHANGES
     ========================================================================== */

  useEffect(
    () => {
      setStatus(
        videoSource
          ? "loading"
          : "failed",
      );
    },
    [videoSource],
  );


  /* ==========================================================================
     BROKEN / VERY SLOW MEDIA PROTECTION
     ========================================================================== */

  useEffect(
    () => {
      if (
        !videoSource ||
        status !== "loading"
      ) {
        return undefined;
      }


      const timeout =
        window.setTimeout(
          () => {
            setStatus(
              (current) => {
                if (
                  current !==
                  "loading"
                ) {
                  return current;
                }


                onFailure?.();


                return "failed";
              },
            );
          },
          12000,
        );


      return () => {
        window.clearTimeout(
          timeout,
        );
      };
    },
    [
      videoSource,
      status,
      onFailure,
    ],
  );


  /* ==========================================================================
     INITIAL DIRECT VIDEO MUTE STATE

     Muted is required for reliable browser autoplay.

     DO NOT set volume = 0 here.
     ========================================================================== */

  useEffect(
    () => {
      const video =
        videoRef.current;


      if (!video) {
        return;
      }


      video.muted =
        true;

      video.defaultMuted =
        true;
    },
    [
      videoSource,
    ],
  );


  /* ==========================================================================
     DON'T RENDER FAILED MEDIA
     ========================================================================== */

  if (
    !videoSource ||
    status === "failed"
  ) {
    return null;
  }


  function handleReady() {
    setStatus(
      "ready",
    );
  }


  /* ==========================================================================
     DIRECT MP4 / S3 VIDEO READY
     ========================================================================== */

  async function handleDirectVideoReady() {
    const video =
      videoRef.current;


    if (!video) {
      return;
    }


    /*
     * Start muted so autoplay works.
     *
     * The controls remain available so the visitor can unmute.
     */
    video.muted =
      true;

    video.defaultMuted =
      true;


    /*
     * Explicitly request playback once the media is ready.
     *
     * The autoPlay attribute normally performs this too, but this
     * provides an additional reliable attempt after the browser
     * reports the media as playable.
     */
    try {
      if (video.paused) {
        await video.play();
      }
    } catch {
      /*
       * Some browsers or user preferences can disable autoplay.
       *
       * That does NOT mean the media URL is broken, therefore the
       * video remains visible with native controls available.
       */
    }


    handleReady();
  }


  /* ==========================================================================
     MEDIA FAILURE
     ========================================================================== */

  function handleFailure() {
    setStatus(
      "failed",
    );


    onFailure?.();
  }


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <figure
      className={[
        "case-detail__hero-video",

        status === "ready"
          ? "is-ready"
          : "is-loading",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="case-detail__hero-video-frame">

        {youtube ? (
          <iframe
            src={
              youtube.embedUrl
            }
            title={`${title} project video`}
            loading="eager"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            onLoad={
              handleReady
            }
            onError={
              handleFailure
            }
          />
        ) : (
          <video
            ref={
              videoRef
            }

            /*
             * Automatically start.
             */
            autoPlay

            /*
             * Browser autoplay requires muted media in most cases.
             */
            muted

            /*
             * Restart automatically after finishing.
             */
            loop

            /*
             * Show native browser controls.
             *
             * User can:
             * - unmute
             * - adjust volume
             * - pause/play
             * - seek
             * - fullscreen
             * - use available browser media controls
             */
            controls

            /*
             * Prevent forced fullscreen playback on some mobile browsers.
             */
            playsInline

            /*
             * Avoid requesting the complete remote video before needed.
             */
            preload="metadata"

            aria-label={`${title} project video`}

            onLoadedData={
              handleDirectVideoReady
            }

            onCanPlay={
              handleDirectVideoReady
            }

            onError={
              handleFailure
            }
          >
            <source
              src={
                videoSource
              }
            />
          </video>
        )}

      </div>
    </figure>
  );
}


/* ==========================================================================
   HERO TECHNOLOGY BADGES
   ========================================================================== */

function HeroTechnologyBadges({
  technologies,
}) {
  if (!technologies.length) {
    return null;
  }


  return (
    <div className="case-detail__hero-technologies">

      <strong>
        Services
      </strong>


      <ul>

        {technologies.map(
          (
            technology,
            index,
          ) => (
            <li
              key={`${technology.name}-${index}`}
            >

              <span className="case-detail__hero-technology-icon">

                {technology.icon ? (
                  <CmsImage
                    src={
                      technology.icon
                    }
                    alt=""
                    fallbackText={
                      technology.name
                        .slice(0, 2)
                        .toUpperCase()
                    }
                    sizes="38px"
                  />
                ) : (
                  technology.name
                    .slice(0, 2)
                    .toUpperCase()
                )}

              </span>


              <span className="case-detail__hero-technology-name">
                {technology.name}
              </span>

            </li>
          ),
        )}

      </ul>

    </div>
  );
}


/* ==========================================================================
   METRIC HELPERS
   ========================================================================== */

function metricParts(value) {
  const source =
    textValue(value);


  const match =
    source.match(
      /^(.*?)(-?\d+(?:\.\d+)?)(.*)$/,
    );


  if (!match) {
    return null;
  }


  const target =
    Number(
      match[2],
    );


  return Number.isFinite(target)
    ? {
        prefix:
          match[1],

        target,

        suffix:
          match[3],

        decimals:
          (
            match[2]
              .split(".")[1] ||
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
      [value],
    );


  const [
    displayValue,
    setDisplayValue,
  ] =
    useState(
      value || "—",
    );


  const metricRef =
    useRef(null);


  const animationFrameRef =
    useRef(null);


  const animate =
    useCallback(
      () => {
        if (!metric) {
          return;
        }


        window.cancelAnimationFrame(
          animationFrameRef.current,
        );


        const startedAt =
          window.performance.now();


        const duration =
          950;


        function update(now) {
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
      [metric],
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
        setDisplayValue(
          value || "—",
        );

        return undefined;
      }


      const observer =
        new IntersectionObserver(
          ([entry]) => {
            if (
              entry.isIntersecting
            ) {
              animate();

              observer.disconnect();
            }
          },
          {
            threshold: 0.45,
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
      value,
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
  if (!items.length) {
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
  sections,
  title,
  bannerImage,
}) {
  const {
    problems,
    impact,
    process,
    result,
  } =
    sections;


  const primaryProjectImage =
    bannerImage ||
    impact.collageImage;


  return (
    <div className="case-detail__structured">


      {/* ====================================================================
          IMPACT
          ==================================================================== */}

      {impact.metrics.length ||
      impact.blocks.length ||
      primaryProjectImage ? (

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


          {primaryProjectImage ? (

            <figure className="case-detail__section-media case-detail__section-media--banner">

              <DetailImage
                src={
                  primaryProjectImage
                }
                alt={`${title} platform showcase`}
                priority
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
          CASE STUDY OVERVIEW
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
                      index + 1,
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
          IMPLEMENTED SOLUTIONS
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
                      index + 1,
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


          <Metrics
            items={
              result.metrics
            }
            className="case-detail__metrics--results"
          />

        </section>

      ) : null}


      {/* ====================================================================
          SECOND RESULT IMAGE
          ==================================================================== */}

      {result.mediaImage ? (

        <figure className="case-detail__section-media case-detail__section-media--result">

          <DetailImage
            src={
              result.mediaImage
            }
            alt={`${title} project result`}
            sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
          />

        </figure>

      ) : null}

    </div>
  );
}


/* ==========================================================================
   LEGACY CASE STUDY
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
                    index + 1,
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


  const [
    heroVideoFailed,
    setHeroVideoFailed,
  ] =
    useState(false);


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


  /* ==========================================================================
     DATABASE MAPPING
     ========================================================================== */

  const title =
    textValue(
      caseStudy.heroHeading,
    ) ||
    textValue(
      caseStudy.title,
    ) ||
    textValue(
      caseStudy.clientName,
    ) ||
    "TekCorp Case Study";


  const clientName =
    textValue(
      caseStudy.clientName,
    ) ||
    title;


  const industry =
    textValue(
      caseStudy.industry,
    ) ||
    textValue(
      caseStudy.category,
    ) ||
    "Digital Product";


  /*
   * HERO ONLY.
   *
   * It is not passed into StructuredCaseStudy,
   * so industryText does not get repeated inside
   * the main Case Study overview.
   */
  const industryText =
    textValue(
      caseStudy.industryText,
    );


  const description =
    textValue(
      caseStudy.shortDescription,
    );


  const bannerImage =
    textValue(
      caseStudy.bannerImage,
    ) ||
    textValue(
      caseStudy.heroImage,
    ) ||
    textValue(
      caseStudy.thumbnail,
    );


  const heroVideo =
    textValue(
      caseStudy.video,
    );


  useEffect(
    () => {
      setHeroVideoFailed(
        false,
      );
    },
    [
      heroVideo,
    ],
  );


  const structuredSource =
    caseStudy.sections &&
    typeof caseStudy.sections ===
      "object" &&
    !Array.isArray(
      caseStudy.sections,
    )
      ? caseStudy.sections
      : caseStudy.structuredSections;


  const structuredSections =
    normalizeStructuredSections(
      structuredSource,
    );


  const technologies =
    normalizeTechnologies(
      caseStudy.technologies,
    );


  const structured =
    hasStructuredContent(
      structuredSections,
    );


  const legacySections =
    normalizeSections(
      Array.isArray(
        caseStudy.sections,
      )
        ? caseStudy.sections
        : [],
    );


  const gallery =
    normalizeGallery(
      caseStudy.gallery,
    );


  /*
   * Reserve the video column while a valid database URL exists.
   *
   * If the video fails to load, the component collapses back to
   * the text-only hero layout.
   */
  const useVideoLayout =
    Boolean(
      heroVideo &&
      !heroVideoFailed,
    );


  return (
    <article className="case-detail tek-content-route">


      {/* ====================================================================
          HERO
          ==================================================================== */}

      <section
        className={[
          "case-detail__masthead",

          useVideoLayout
            ? "case-detail__masthead--with-video"
            : "case-detail__masthead--without-video",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-labelledby="case-detail-title"
      >

        <div className="tek-content-shell case-detail__masthead-inner">


          <div className="case-detail__masthead-copy">

            <p>
              Case Study Detail
            </p>


            <h1
              id="case-detail-title"
            >
              {title}
            </h1>


            <div className="case-detail__hero-industry">

              <strong>
                Industry:
              </strong>


              <span>
                {industry}
              </span>

            </div>


            {industryText ? (
              <p className="case-detail__hero-context">
                {industryText}
              </p>
            ) : null}


            <HeroTechnologyBadges
              technologies={
                technologies
              }
            />

          </div>


          {heroVideo &&
          !heroVideoFailed ? (
            <CaseStudyHeroVideo
              src={
                heroVideo
              }
              title={
                title
              }
              onFailure={() =>
                setHeroVideoFailed(
                  true,
                )
              }
            />
          ) : null}

        </div>

      </section>


      {/* ====================================================================
          CASE STUDY CONTENT
          ==================================================================== */}

      <main className="tek-content-shell case-detail__content">

        {structured ? (

          <StructuredCaseStudy
            sections={
              structuredSections
            }
            title={
              clientName
            }
            bannerImage={
              bannerImage
            }
          />

        ) : (

          <>
            {bannerImage ? (

              <figure className="case-detail__hero-image">

                <DetailImage
                  src={
                    bannerImage
                  }
                  alt={
                    title
                  }
                  priority
                  sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
                />


                <figcaption>
                  {industry}
                </figcaption>

              </figure>

            ) : null}


            <GenericCaseStudy
              description={
                description
              }
              sections={
                legacySections
              }
              title={
                title
              }
            />

          </>

        )}


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
                      index + 1,
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