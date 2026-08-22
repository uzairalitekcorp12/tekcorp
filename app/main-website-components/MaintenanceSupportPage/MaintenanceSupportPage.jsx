"use client";

import "./MaintenanceSupportPage.css";

import Image from "next/image";
import { useRef } from "react";


/* ==========================================================================
   ICONS
   ========================================================================== */

function ArrowUpRightIcon({
  size = 12,
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
      <path d="M7 17 17 7" />

      <path d="M7 7h10v10" />
    </svg>
  );
}


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
      "SENECA",

    name:
      "Elisha A.",

    role:
      "Technology Team Member",

    quote:
      "We have doubled our conversion and improved operational visibility without compromising the stability of our success.",
  },

  {
    company:
      "NEXORA",

    name:
      "Daniel R.",

    role:
      "Operations Director",

    quote:
      "TekCorp gives our team clear ownership, dependable communication and confidence that important technical issues will be handled properly.",
  },

  {
    company:
      "VERTEX",

    name:
      "Sophia M.",

    role:
      "Product Lead",

    quote:
      "The support team understands both the technology and the business context behind it, which makes every conversation far more productive.",
  },

  {
    company:
      "ALTURA",

    name:
      "Michael K.",

    role:
      "Digital Transformation Manager",

    quote:
      "Their proactive approach has helped us reduce interruptions while steadily improving the reliability of our digital products.",
  },

  {
    company:
      "ORBITAL",

    name:
      "Sarah T.",

    role:
      "Head of Technology",

    quote:
      "We value the consistency most. We always know who owns an issue, what is being done and when we can expect the next update.",
  },
];


/* ==========================================================================
   PAGE
   ========================================================================== */

export default function MaintenanceSupportPage() {
  const testimonialTrackRef =
    useRef(null);


  /* ==========================================================================
     TESTIMONIAL SCROLL
     ========================================================================== */

  function scrollTestimonials(
    direction,
  ) {
    const track =
      testimonialTrackRef.current;


    if (!track) {
      return;
    }


    const amount =
      Math.max(
        260,
        track.clientWidth * 0.72,
      );


    track.scrollBy({
      left:
        direction === "next"
          ? amount
          : -amount,

      behavior:
        "smooth",
    });
  }


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


          <div
            className="maintenance-support-breadcrumb"
            aria-label="Breadcrumb"
          >

            <a href="/Home">
              TekCorp
            </a>


            <span>
              ›
            </span>


            <a href="/Home#services">
              Our Solutions
            </a>


            <span>
              ›
            </span>


            <strong>
              Maintenance &amp; Support
            </strong>


            <ArrowUpRightIcon
              size={9}
            />

          </div>

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

          <div
            className="maintenance-support-managers__copy"
            data-reveal="left"
          >

            <span className="maintenance-support-section-kicker">
              Dedicated service ownership
            </span>


            <h2>
              Dedicated Account Managers
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


            <a
              href="/Contact"
              className="maintenance-support-link"
            >

              Start Now

              <ArrowUpRightIcon />

            </a>

          </div>


          <div
            className="maintenance-support-managers__media"
            data-reveal="right"
          >

            <div
              className="maintenance-support-managers__media-ring"
              aria-hidden="true"
            />


            <div
              className="maintenance-support-managers__orbit maintenance-support-managers__orbit--one"
              aria-hidden="true"
            />


            <div
              className="maintenance-support-managers__orbit maintenance-support-managers__orbit--two"
              aria-hidden="true"
            />


            <Image
              src="/assets/Service-assets/MaintenanceSupport/dedicated-account-manager.png"
              alt="Dedicated technology support account manager"
              fill
              priority
              unoptimized
              sizes="(max-width: 700px) 330px, (max-width: 900px) 360px, 430px"
              className="maintenance-support-managers__image"
            />

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

              <Image
                src="/assets/Service-assets/MaintenanceSupport/support-channels.png"
                alt="Mobile support channels and service portal interfaces"
                fill
                unoptimized
                sizes="(max-width: 700px) calc(100vw - 74px), (max-width: 900px) 45vw, 540px"
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

          {/* ==============================================================
              LEFT
              ============================================================== */}

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

                  <strong>
                    15+
                  </strong>


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

                  <strong>
                    1000+
                  </strong>


                  <span>
                    Optimized
                    <br />
                    Digital Products
                  </span>

                </div>

              </article>

            </div>

          </div>


          {/* ==============================================================
              RIGHT — TESTIMONIAL CAROUSEL
              ============================================================== */}

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
                  aria-label="View previous testimonials"
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
                  aria-label="View next testimonials"
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