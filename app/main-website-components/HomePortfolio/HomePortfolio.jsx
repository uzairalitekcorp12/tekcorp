"use client";

import "./HomePortfolio.css";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


/* ==========================================================================
   SUCCESS STORIES / PORTFOLIO DATA

   15 cards total.

   IMPORTANT
   ---------

   Images are temporary.

   Later you can replace every remote image with:

   /public/assets/main-website/Home/portfolio/project-01.webp

   and then use:

   image:
     "/assets/main-website/Home/portfolio/project-01.webp"

   No component changes will be required.
   ========================================================================== */

const projects = [
  {
    id: 1,

    client:
      "MOOSA KHAN",

    title:
      "Think like a proton always positive",

    category:
      "Education Platform",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=88",

    description:
      "A modern education-focused digital experience designed to make learning, communication, and online access simpler for students and educators.",

    href:
      "#contact-lp1",
  },

  {
    id: 2,

    client:
      "RAZA",

    title:
      "Empowering Communities with Lots of Love",

    category:
      "Community Platform",

    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=88",

    description:
      "A purpose-driven digital platform built around community engagement, accessibility, and a more meaningful online experience.",

    href:
      "#contact-lp1",
  },

  {
    id: 3,

    client:
      "TIRE FIXER",

    title:
      "Mobile tyre repair and replacement service in Dubai City",

    category:
      "Service Platform",

    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=88",

    description:
      "A streamlined service experience helping customers discover, request, and manage roadside tyre support with greater speed and convenience.",

    href:
      "#contact-lp1",
  },

  {
    id: 4,

    client:
      "TAARA",

    title:
      "Shop from our Long Dresses Collection",

    category:
      "Fashion & Commerce",

    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=88",

    description:
      "A premium commerce experience where timeless fashion, effortless product discovery, and a refined shopping journey come together.",

    href:
      "#contact-lp1",
  },

  {
    id: 5,

    client:
      "EXOMECHA",

    title:
      "The bank of the future — one euro at a time",

    category:
      "Fintech",

    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=88",

    description:
      "A modern financial product concept focused on clarity, trust, accessibility, and a future-ready digital customer experience.",

    href:
      "#contact-lp1",
  },

  {
    id: 6,

    client:
      "MARHABA PACKAGES",

    title:
      "Packaging products designed for modern businesses",

    category:
      "B2B Commerce",

    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=88",

    description:
      "A structured B2B commerce platform presenting product ranges clearly while helping customers discover the right packaging solutions.",

    href:
      "#contact-lp1",
  },

  {
    id: 7,

    client:
      "UMRE HAJJ",

    title:
      "Travel experiences made simpler and more accessible",

    category:
      "Travel Platform",

    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=88",

    description:
      "A travel-focused digital experience designed to present packages, information, and customer journeys in a clearer and more dependable way.",

    href:
      "#contact-lp1",
  },

  {
    id: 8,

    client:
      "NEXA HEALTH",

    title:
      "A smarter digital healthcare experience for modern patients",

    category:
      "Health Technology",

    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=88",

    description:
      "A patient-centered healthcare platform connecting information, services, and digital workflows through a clear and accessible experience.",

    href:
      "#contact-lp1",
  },

  {
    id: 9,

    client:
      "ARCHLINE",

    title:
      "Designing spaces through a modern digital experience",

    category:
      "Architecture",

    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=88",

    description:
      "A visually led architecture experience developed to present projects, capabilities, and design thinking through a confident digital identity.",

    href:
      "#contact-lp1",
  },

  {
    id: 10,

    client:
      "NOVA LOGISTICS",

    title:
      "Connecting operations with intelligent logistics technology",

    category:
      "Logistics",

    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=88",

    description:
      "A scalable logistics experience created around operational visibility, service discovery, customer communication, and business efficiency.",

    href:
      "#contact-lp1",
  },

  {
    id: 11,

    client:
      "URBAN NEST",

    title:
      "Discover property opportunities built around modern living",

    category:
      "Real Estate",

    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=88",

    description:
      "A property platform combining high-quality presentation with intuitive discovery tools to create a more engaging real-estate journey.",

    href:
      "#contact-lp1",
  },

  {
    id: 12,

    client:
      "GROWTHLY",

    title:
      "Helping ambitious brands turn attention into measurable growth",

    category:
      "Digital Marketing",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=88",

    description:
      "A performance-focused digital experience connecting strategy, campaigns, analytics, and conversion-focused communication for modern brands.",

    href:
      "#contact-lp1",
  },

  {
    id: 13,

    client:
      "CLOUDORA",

    title:
      "Cloud infrastructure designed for secure and scalable growth",

    category:
      "Cloud Technology",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=88",

    description:
      "A technology-led experience created to communicate cloud services, infrastructure capabilities, reliability, security, and future scalability.",

    href:
      "#contact-lp1",
  },

  {
    id: 14,

    client:
      "AUTOMATE X",

    title:
      "Automating business workflows for faster digital operations",

    category:
      "Automation",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=88",

    description:
      "An automation-focused product experience simplifying complex business processes through integrations, intelligent workflows, and digital tools.",

    href:
      "#contact-lp1",
  },

  {
    id: 15,

    client:
      "INTELLI AI",

    title:
      "Practical AI solutions designed around real business challenges",

    category:
      "Artificial Intelligence",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=88",

    description:
      "A future-ready AI experience presenting intelligent products, integrations, automation, and data-driven capabilities through a premium interface.",

    href:
      "#contact-lp1",
  },
];


/* ==========================================================================
   PROJECT CARD
   ========================================================================== */

function ProjectCard({
  project,
  index,
}) {
  return (
    <article className="lp1-success-card">

      {/* ================================================================
          VISUAL
          ================================================================ */}

      <a
        className="lp1-success-card__visual"
        href={project.href}
        aria-label={`View ${project.client} case study`}
      >

        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
        />


        {/* Teal treatment */}

        <span
          className="lp1-success-card__teal"
          aria-hidden="true"
        />


        {/* Dark readability layer */}

        <span
          className="lp1-success-card__shade"
          aria-hidden="true"
        />


        {/* Decorative sweep */}

        <span
          className="lp1-success-card__sweep"
          aria-hidden="true"
        />


        {/* Project number */}

        <span className="lp1-success-card__number">
          {String(
            index + 1,
          ).padStart(
            2,
            "0",
          )}
        </span>


        {/* Category */}

        <span className="lp1-success-card__category">
          {project.category}
        </span>


        {/* Title */}

        <h3 className="lp1-success-card__image-title">
          {project.title}
        </h3>


        {/* Floating action */}

        <span className="lp1-success-card__floating-arrow">
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </span>

      </a>


      {/* ================================================================
          CONTENT
          ================================================================ */}

      <div className="lp1-success-card__body">

        <div className="lp1-success-card__meta">

          <strong className="lp1-success-card__client">
            {project.client}
          </strong>


          <span className="lp1-success-card__meta-line" />

        </div>


        <p className="lp1-success-card__description">
          {project.description}
        </p>


        <a
          className="lp1-success-card__read"
          href={project.href}
        >
          <span>
            Read More
          </span>

          <ArrowRight
            size={13}
            strokeWidth={1.7}
          />
        </a>

      </div>

    </article>
  );
}


/* ==========================================================================
   PORTFOLIO
   ========================================================================== */

export default function HomePortfolio() {
  return (
    <section
      className="lp1-portfolio"
      id="portfolio-lp1"
    >

      {/* ================================================================
          HEADING STAYS WITHIN MAIN CONTENT WIDTH
          ================================================================ */}

      <div className="lp1-shell">

        <header
          className="lp1-portfolio__heading"
          data-reveal="up"
        >

          <p className="lp1-portfolio__eyebrow">
            SUCCESS STORIES OF
          </p>


          <h2 className="lp1-portfolio__title">

            <span>
              Digital
            </span>

            {" "}

            <em>
              Marketing
            </em>

          </h2>


          <p className="lp1-portfolio__subtitle">
            Technology, strategy and digital experiences
            created around real business challenges.
          </p>

        </header>

      </div>


      {/* ================================================================
          FULL-BLEED SLIDER

          IMPORTANT:
          This deliberately lives OUTSIDE .lp1-shell.

          That means:
          left card reaches viewport left edge
          right card reaches viewport right edge

          No blank outer gutter.
          ================================================================ */}

      <div
        className="lp1-portfolio__slider-stage"
        data-reveal="up"
      >

        <div
          className="lp1-portfolio__glow"
          aria-hidden="true"
        />


        <Swiper
          modules={[
            Autoplay,
            Pagination,
            A11y,
          ]}

          className="lp1-portfolio-swiper"


          /* ------------------------------------------------------------
             LOOP / MOTION
             ------------------------------------------------------------ */

          loop={true}

          speed={1000}

          grabCursor={true}

          watchSlidesProgress={true}

          slideToClickedSlide={true}

          roundLengths={true}


          /* ------------------------------------------------------------
             AUTOPLAY

             3700 = 3.7 seconds
             ------------------------------------------------------------ */

          autoplay={{
            delay: 3700,

            disableOnInteraction:
              false,

            pauseOnMouseEnter:
              true,
          }}


          /* ------------------------------------------------------------
             PAGINATION
             ------------------------------------------------------------ */

          pagination={{
            clickable: true,

            dynamicBullets: true,
          }}


          /* ------------------------------------------------------------
             RESPONSIVE

             No slidesOffsetBefore.
             No slidesOffsetAfter.

             Therefore cards begin directly from screen edges.
             ------------------------------------------------------------ */

          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 10,
            },

            420: {
              slidesPerView: 1.18,
              spaceBetween: 12,
            },

            560: {
              slidesPerView: 1.55,
              spaceBetween: 14,
            },

            700: {
              slidesPerView: 2.15,
              spaceBetween: 14,
            },

            900: {
              slidesPerView: 3.05,
              spaceBetween: 16,
            },

            1180: {
              slidesPerView: 3.65,
              spaceBetween: 18,
            },

            1500: {
              slidesPerView: 4.35,
              spaceBetween: 18,
            },
          }}
        >

          {projects.map(
            (
              project,
              index,
            ) => (
              <SwiperSlide
                key={project.id}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </SwiperSlide>
            ),
          )}

        </Swiper>

      </div>


      {/* ================================================================
          BOTTOM CTA
          ================================================================ */}

      <div className="lp1-shell">

        <div
          className="lp1-portfolio__footer"
          data-reveal="up"
        >

          <a
            className="lp1-portfolio__learn"
            href="#contact-lp1"
          >
            View All Work

            <span>
              <ArrowRight
                size={14}
                strokeWidth={1.7}
              />
            </span>
          </a>

        </div>

      </div>

    </section>
  );
}