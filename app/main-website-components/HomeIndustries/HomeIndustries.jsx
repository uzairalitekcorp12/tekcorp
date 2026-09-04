import "./HomeIndustries.css";

import Link from "next/link";

import {
  ArrowUpRight,
  Building2,
  BusFront,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
} from "lucide-react";


/* ==========================================================================
   TEKCORP — INDUSTRIES WE SERVE

   DATA ARCHITECTURE
   --------------------------------------------------------------------------

   The cards are generated from this single array.

   CURRENT LINK BEHAVIOR
   --------------------------------------------------------------------------

   Every card currently redirects back to:

   #industries-we-serve

   Later, when dedicated industry pages exist, only change `href`.

   Example:

   href:
     "/industries/healthcare"

   No JSX or CSS changes will be required.

   CARD ORDER
   --------------------------------------------------------------------------

   DESKTOP:

   ROW 01
   01 Healthcare
   02 Financial Services
   03 Retail & eCommerce
   04 Education

   ROW 02
   05 Travel & Hospitality
   06 Transportation & Mobility
   07 Manufacturing
   08 Real Estate

   ========================================================================== */

const INDUSTRIES = [
  {
    number:
      "01",

    title:
      "Healthcare",

    category:
      "Digital Health",

    description:
      "Secure digital platforms, intelligent automation, and connected systems designed around modern healthcare operations.",

    icon:
      HeartPulse,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "02",

    title:
      "Financial Services",

    category:
      "Fintech",

    description:
      "Scalable financial platforms, intelligent workflows, and data-driven digital experiences built for modern finance.",

    icon:
      Landmark,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "03",

    title:
      "Retail & eCommerce",

    category:
      "Commerce",

    description:
      "Digital commerce experiences that connect products, customers, payments, operations, and business growth.",

    icon:
      ShoppingBag,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "04",

    title:
      "Education",

    category:
      "Learning",

    description:
      "Learning platforms, education technology, and intelligent digital tools that improve teaching and student experiences.",

    icon:
      GraduationCap,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "05",

    title:
      "Travel & Hospitality",

    category:
      "Experience",

    description:
      "Digital experiences and connected systems that improve reservations, service delivery, engagement, and guest journeys.",

    icon:
      Hotel,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "06",

    title:
      "Transportation & Mobility",

    category:
      "Mobility",

    description:
      "Smart platforms and operational systems built to improve transportation, mobility workflows, tracking, and efficiency.",

    icon:
      BusFront,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "07",

    title:
      "Manufacturing",

    category:
      "Industry 4.0",

    description:
      "Connected software, automation, and intelligent workflows that strengthen operations, visibility, and productivity.",

    icon:
      Factory,

    href:
      "#industries-we-serve",
  },


  {
    number:
      "08",

    title:
      "Real Estate",

    category:
      "PropTech",

    description:
      "Digital platforms for property operations, customer journeys, portfolio management, investment, and modern real estate.",

    icon:
      Building2,

    href:
      "#industries-we-serve",
  },
];


/* ==========================================================================
   INDUSTRY CARD
   ========================================================================== */

function IndustryCard({
  industry,
  index,
}) {
  const Icon =
    industry.icon;


  return (
    <article
      className="tek-industries__card"
      data-reveal="up"
      style={{
        "--industry-index":
          index,
      }}
    >

      {/* ====================================================================
          AMBIENT CARD DECORATION
          ==================================================================== */}

      <span
        className="tek-industries__card-grid"
        aria-hidden="true"
      />


      <span
        className="tek-industries__card-glow"
        aria-hidden="true"
      />


      <span
        className="tek-industries__card-orbit"
        aria-hidden="true"
      />


      <span
        className="tek-industries__card-line"
        aria-hidden="true"
      />


      {/* ====================================================================
          TOP
          ==================================================================== */}

      <div className="tek-industries__card-top">

        <span className="tek-industries__icon">

          <Icon
            size={27}
            strokeWidth={1.55}
            aria-hidden="true"
          />

        </span>


        <span className="tek-industries__number">
          {industry.number}
        </span>

      </div>


      {/* ====================================================================
          CONTENT
          ==================================================================== */}

      <div className="tek-industries__card-content">

        <span className="tek-industries__category">
          {industry.category}
        </span>


        <h3>
          {industry.title}
        </h3>


        <p>
          {industry.description}
        </p>

      </div>


      {/* ====================================================================
          CTA

          Every card currently points back to this section.

          Change `href` in INDUSTRIES[] later when individual industry
          routes/pages become available.
          ==================================================================== */}

      <Link
        href={
          industry.href
        }
        className="tek-industries__card-action"
        aria-label={`Explore ${industry.title} solutions`}
      >

        <span className="tek-industries__card-action-copy">
          Explore Industry
        </span>


        <span className="tek-industries__card-action-icon">

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
          />

        </span>

      </Link>

    </article>
  );
}


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeIndustries() {
  return (
    <section
      className="tek-industries"
      id="industries-we-serve"
      aria-labelledby="industries-we-serve-title"
    >

      {/* ====================================================================
          BACKGROUND
          ==================================================================== */}

      <div
        className="tek-industries__background"
        aria-hidden="true"
      >

        <span className="tek-industries__background-grid" />

        <span className="tek-industries__background-orbit tek-industries__background-orbit--one" />

        <span className="tek-industries__background-orbit tek-industries__background-orbit--two" />

        <span className="tek-industries__background-glow tek-industries__background-glow--one" />

        <span className="tek-industries__background-glow tek-industries__background-glow--two" />

      </div>


      <div className="lp1-shell tek-industries__shell">

        {/* ==================================================================
            HEADER
            ================================================================== */}

        <header className="tek-industries__header">

          <div
            className="tek-industries__heading"
            data-reveal="left"
          >

            <span className="tek-industries__eyebrow">

              <i />

              Industries We Serve

            </span>


            <h2 id="industries-we-serve-title">

              Built for the{" "}

              <span>
                industries
              </span>

              <br />

              shaping tomorrow.

            </h2>

          </div>


          <div
            className="tek-industries__intro"
            data-reveal="right"
          >

            <p>
              We combine engineering, AI, automation, digital experience,
              and growth expertise to build technology around the realities
              of the industries our clients operate in.
            </p>


            <Link
              href="#industries-grid"
              className="tek-industries__intro-action"
            >
              Explore Industries

              <span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
            </Link>

          </div>

        </header>


        {/* ==================================================================
            SMALL CONNECTOR / SECTION STATUS
            ================================================================== */}

        <div
          className="tek-industries__status"
          aria-hidden="true"
        >

          <span>
            08 Industries
          </span>


          <i />


          <span>
            One Technology Partner
          </span>

        </div>


        {/* ==================================================================
            INDUSTRY GRID

            DESKTOP:
            4 × 2

            TABLET:
            2 × 4

            MOBILE:
            1 × 8
            ================================================================== */}

        <div
          className="tek-industries__grid"
          id="industries-grid"
        >

          {INDUSTRIES.map(
            (
              industry,
              index,
            ) => (
              <IndustryCard
                industry={
                  industry
                }
                index={
                  index
                }
                key={
                  industry.title
                }
              />
            ),
          )}

        </div>


        {/* ==================================================================
            BOTTOM MESSAGE
            ================================================================== */}

        <div className="tek-industries__footer">

          <div className="tek-industries__footer-marker">
            <span />

            <span />

            <span />
          </div>


          <p>
            Different industries. Different challenges.{" "}

            <strong>
              One connected approach to digital growth.
            </strong>
          </p>

        </div>

      </div>

    </section>
  );
}