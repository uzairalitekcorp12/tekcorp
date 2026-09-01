"use client";

import "./MaintenanceSupportPage.css";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "@/app/_shared/Button/Button";
import ArrowUpRightIcon from "@/app/_shared/Icons/ArrowUpRightIcon";
import ServiceBreadcrumb from "@/app/_shared/ServiceBreadcrumb/ServiceBreadcrumb";


/* ==========================================================================
   ICONS
   ========================================================================== */

function ArrowLeftIcon({
  size = 13,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}


function ArrowRightIcon({
  size = 13,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}


function SupportIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />

      <rect
        x="5"
        y="7"
        width="14"
        height="12"
        rx="2"
      />

      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  );
}


function ExperienceIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2L7.8 16l.8-4.7L5.2 8l4.7-.7L12 3Z" />
      <path d="M8 20h8" />
    </svg>
  );
}


function OptimizationIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V3" />
    </svg>
  );
}


function StarRating() {
  return (
    <span
      className="maintenance-support-rating"
      aria-label="5 out of 5 stars"
    >
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </span>
  );
}


/* ==========================================================================
   CONTENT
   ========================================================================== */

const supportLevels = [
  {
    title:
      "Level 1",

    description:
      "Fast first-line support for routine questions, access issues and common service requests.",
  },

  {
    title:
      "Level 2",

    description:
      "Experienced engineers investigate application, integration and infrastructure issues in greater depth.",
  },

  {
    title:
      "Level 3",

    description:
      "Senior specialists handle complex, high-impact or unresolved technical problems and root-cause analysis.",
  },
];


const channels = [
  "Helpdesk and support portal for centralized request tracking.",

  "Email and phone support for direct communication with our team.",

  "Live chat and messaging channels for time-sensitive assistance.",

  "Knowledge resources, FAQs and service documentation for self-service support.",
];


const testimonials = [
  {
    company:
      "GOOGLE REVIEW",

    name:
      "Taara bysamiya",

    role:
      "SEO Client",

    quote:
      "We partnered with TekCorp for our website's SEO, and their clear communication, professional reporting and consistent work significantly improved our online presence.",
  },

  {
    company:
      "GOOGLE REVIEW",

    name:
      "Moosa Khan",

    role:
      "LMS Platform Client",

    quote:
      "TekCorp delivered our website and LMS portal professionally, met every requirement and completed the project within the agreed timeline.",
  },

  {
    company:
      "GOOGLE REVIEW",

    name:
      "Farooq Khan",

    role:
      "Web Development Client",

    quote:
      "The team understood my requirements, delivered a high-quality website on time and offered valuable insight on both the technical and business sides.",
  },

  {
    company:
      "GOOGLE REVIEW",

    name:
      "Mohammad Mohsin",

    role:
      "Raza Foundation",

    quote:
      "TekCorp met our expectations perfectly and remained available throughout the process while building our global welfare website.",
  },

  {
    company:
      "GOOGLE REVIEW",

    name:
      "Muhammad Jamshaid",

    role:
      "ERP Software Client",

    quote:
      "The team was highly professional, responsive and helpful throughout our ERP software project, with strong technical expertise at every step.",
  },
];


/* ========================================================================== 
   PAGE
   ========================================================================== */

function AnimatedMetric({ value, suffix = "+" }) {
  const [displayValue, setDisplayValue] = useState(value);
  const frameRef = useRef(null);
  const metricRef = useRef(null);

  const animate = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    const startedAt = performance.now();
    const duration = 700;

    function update(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(update);
    }

    setDisplayValue(0);
    frameRef.current = requestAnimationFrame(update);
  }, [value]);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <strong ref={metricRef} onMouseEnter={animate} onFocus={animate} tabIndex={0}>
      {displayValue}{suffix}
    </strong>
  );
}

export default function MaintenanceSupportPage() {
  const testimonialTrackRef =
    useRef(null);


  /* ==========================================================================
     TESTIMONIAL CAROUSEL
     ========================================================================== */

  function scrollTestimonials(
    direction,
  ) {
    const track =
      testimonialTrackRef.current;


    if (!track) {
      return;
    }


    const firstCard =
      track.querySelector(
        ".maintenance-support-testimonial-card",
      );


    const cardWidth =
      firstCard
        ?.getBoundingClientRect()
        .width ||
      280;


    track.scrollBy({
      left:
        direction === "next"
          ? cardWidth + 14
          : -(cardWidth + 14),

      behavior:
        "smooth",
    });
  }

  useEffect(() => {
    const track = testimonialTrackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    const timer = window.setInterval(() => {
      if (paused) return;
      const firstCard = track.querySelector(".maintenance-support-testimonial-card");
      const distance = (firstCard?.getBoundingClientRect().width || 280) + 14;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + distance, behavior: "smooth" });
    }, 2700);

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    return () => {
      window.clearInterval(timer);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
    };
  }, []);


  return (
    <div className="maintenance-support-page">

      {/* ====================================================================
          HERO
          ==================================================================== */}

      <section className="maintenance-support-hero">

        <div className="service-page-shell maintenance-support-hero__content">

          <span className="maintenance-support-eyebrow">
            Leading the way in IT solutions
          </span>


          <h1>
            Reliable Maintenance for

            <br />

            Continuous Excellence
          </h1>


          <ServiceBreadcrumb
            className="maintenance-support-breadcrumb"
            current="Maintenance & Support"
            separator="›"
            showArrow
            arrow={<ArrowUpRightIcon size={9} />}
          />

        </div>

      </section>


      {/* ====================================================================
          SUPPORT LEVELS
          ==================================================================== */}

      <section
        className="maintenance-support-levels"
        aria-labelledby="support-levels-title"
      >

        <div className="service-page-shell">

          <header
            className="maintenance-support-levels__header"
            data-reveal="up"
          >

            <span>
              Secondary Services
            </span>


            <h2 id="support-levels-title">
              Tiered Support Levels
            </h2>

          </header>


          <div className="maintenance-support-levels__grid">

            {supportLevels.map(
              (
                level,
                index,
              ) => (

                <article
                  key={level.title}
                  className="maintenance-support-level-card"
                  data-reveal="up"
                  style={{
                    "--maintenance-delay":
                      `${index * 70}ms`,
                  }}
                >

                  <span className="maintenance-support-level-card__icon">

                    <SupportIcon />

                  </span>


                  <h3>
                    {level.title}:
                  </h3>


                  <p>
                    {level.description}
                  </p>

                </article>

              ),
            )}

          </div>

        </div>

      </section>


      {/* ====================================================================
          DEDICATED ACCOUNT MANAGERS
          ==================================================================== */}

      <section className="maintenance-support-managers">

        <div className="service-page-shell maintenance-support-managers__grid">

          {/* COPY */}

          <div
            className="maintenance-support-managers__copy"
            data-reveal="left"
          >

            <h2>
              Dedicated Account
              <br />
              Managers
            </h2>


            <p>
              Every support engagement benefits from clear ownership and a
              consistent point of contact. Your dedicated account manager helps
              coordinate requests, priorities, communication and follow-up
              across the service lifecycle.
            </p>


            <p>
              We combine structured support processes with practical technical
              context, so your team always knows what is happening, what comes
              next and who is accountable for progress.
            </p>


            <Button
              href="/contact"
              appearance="box"
              className="maintenance-support-link"
            >

              <span>
                Start Now
              </span>


              <ArrowUpRightIcon />

            </Button>

          </div>


          {/* VISUAL */}

          <div
            className="maintenance-support-managers__media"
            data-reveal="right"
          >

            <div className="maintenance-support-manager-visual">

              {/* subtle glow */}

              <span
                className="maintenance-support-manager-visual__glow"
                aria-hidden="true"
              />


              {/* outer orbital circles */}

              <span
                className="maintenance-support-manager-visual__orbit maintenance-support-manager-visual__orbit--outer"
                aria-hidden="true"
              />


              <span
                className="maintenance-support-manager-visual__orbit maintenance-support-manager-visual__orbit--inner"
                aria-hidden="true"
              />


              {/* teal circle */}

              <div
                className="maintenance-support-manager-visual__disc"
                aria-hidden="true"
              >

                <span className="maintenance-support-manager-visual__curve maintenance-support-manager-visual__curve--one" />

                <span className="maintenance-support-manager-visual__curve maintenance-support-manager-visual__curve--two" />

                <span className="maintenance-support-manager-visual__curve maintenance-support-manager-visual__curve--three" />

              </div>


              {/* small ambient dots */}

              <span
                className="maintenance-support-manager-visual__dot maintenance-support-manager-visual__dot--one"
                aria-hidden="true"
              />


              <span
                className="maintenance-support-manager-visual__dot maintenance-support-manager-visual__dot--two"
                aria-hidden="true"
              />


              <span
                className="maintenance-support-manager-visual__dot maintenance-support-manager-visual__dot--three"
                aria-hidden="true"
              />


              {/* actual transparent PNG */}

              <div className="maintenance-support-manager-visual__image-stage">

                <Image
                  src="/assets/Service-assets/MaintenanceSupport/dedicated-account-manager.png"
                  alt="Dedicated technology support account manager"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 520px) 88vw, (max-width: 800px) 390px, 460px"
                  className="maintenance-support-managers__image"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================================
          SUPPORT CHANNELS
          ==================================================================== */}

      <section className="maintenance-support-channels">

        <div className="service-page-shell">

          <div
            className="maintenance-support-channels__panel"
            data-reveal="up"
          >

            <div className="maintenance-support-channels__copy">

              <span className="maintenance-support-section-kicker">
                Support access
              </span>


              <h2>
                Support Channels:
              </h2>


              <ul>

                {channels.map(
                  (channel) => (

                    <li key={channel}>
                      {channel}
                    </li>

                  ),
                )}

              </ul>

            </div>


            <div className="maintenance-support-channels__media">

              <span
                className="maintenance-support-channels__ambient"
                aria-hidden="true"
              />


              <Image
                src="/assets/Service-assets/MaintenanceSupport/support-channels.png"
                alt="Mobile support channels and service portal interfaces"
                fill
                unoptimized
                sizes="(max-width: 700px) calc(100vw - 74px), (max-width: 900px) 45vw, 520px"
                className="maintenance-support-channels__image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================================
          EXPERIENCE + TESTIMONIALS
          ==================================================================== */}

      <section
        className="maintenance-support-proof"
        aria-labelledby="maintenance-proof-title"
      >

        <div className="service-page-shell maintenance-support-proof__grid">

          {/* METRICS */}

          <div
            className="maintenance-support-proof__metrics"
            data-reveal="left"
          >

            <span className="maintenance-support-proof__eyebrow">
              Top Rated Technology Partner
            </span>


            <h2 id="maintenance-proof-title">
              Transforming Visions into
              <br />
              pixel-perfect Reality
            </h2>


            <div className="maintenance-support-metrics">

              <article className="maintenance-support-metric-card">

                <span className="maintenance-support-metric-card__icon">
                  <ExperienceIcon />
                </span>


                <div>

                  <AnimatedMetric value={15} />


                  <span>
                    Years of
                    <br />
                    Experience
                  </span>

                </div>

              </article>


              <article className="maintenance-support-metric-card">

                <span className="maintenance-support-metric-card__icon">
                  <OptimizationIcon />
                </span>


                <div>

                  <AnimatedMetric value={1000} />


                  <span>
                    Optimized
                    <br />
                    Digital Products
                  </span>

                </div>

              </article>

            </div>

          </div>


          {/* TESTIMONIALS */}

          <div
            className="maintenance-support-proof__testimonials"
            data-reveal="right"
          >

            <div className="maintenance-support-proof__heading">

              <div>

                <span>
                  Testimonials
                </span>


                <h3>
                  Our Clients Love
                  <br />
                  Working with Us!
                </h3>

              </div>


              <div className="maintenance-support-proof__controls">

                <button
                  type="button"
                  onClick={() =>
                    scrollTestimonials(
                      "previous",
                    )
                  }
                  aria-label="View previous testimonial"
                >
                  <ArrowLeftIcon />
                </button>


                <button
                  type="button"
                  onClick={() =>
                    scrollTestimonials(
                      "next",
                    )
                  }
                  aria-label="View next testimonial"
                >
                  <ArrowRightIcon />
                </button>

              </div>

            </div>


            <div
              ref={testimonialTrackRef}
              className="maintenance-support-testimonial-track"
              aria-label="Client testimonials"
            >

              {testimonials.map(
                (testimonial) => (

                  <blockquote
                    key={`${testimonial.company}-${testimonial.name}`}
                    className="maintenance-support-testimonial-card"
                  >

                    <span className="maintenance-support-testimonial-card__company">
                      {testimonial.company}
                    </span>


                    <p>
                      {testimonial.quote}
                    </p>


                    <StarRating />


                    <footer>

                      <strong>
                        {testimonial.name}
                      </strong>


                      <span>
                        {testimonial.role}
                      </span>

                    </footer>

                  </blockquote>

                ),
              )}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
