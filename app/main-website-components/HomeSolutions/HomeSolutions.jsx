import "./HomeSolutions.css";

import {
  ArrowUpRight,
  Braces,
  Boxes,
  MessagesSquare,
  ShieldCheck,
  Wrench,
  Workflow,
} from "lucide-react";


/* ==========================================================================
   DIGITAL SOLUTIONS DATA

   All cards intentionally share the same structure.

   There is NO permanently featured card.

   Every card:
   - starts white
   - becomes dark on hover
   - uses the same typography
   - uses the same spacing
   - uses the same CTA
   ========================================================================== */

const solutions = [
  {
    icon: Braces,

    title:
      "Web Engineering",

    description:
      "Modern websites and digital platforms engineered for performance, usability, scalability, and long-term business growth.",
  },

  {
    icon: MessagesSquare,

    title:
      "Application Engineering",

    description:
      "Purpose-built web and mobile applications designed around real workflows, complex integrations, and measurable outcomes.",
  },

  {
    icon: Workflow,

    title:
      "Prototyping & Software Designing's (UX/UI)",

    description:
      "From product validation to thoughtful UX and polished interfaces, we shape digital products people enjoy using.",
  },

  {
    icon: ShieldCheck,

    title:
      "Quality Assurance & Testing",

    description:
      "Structured quality engineering, regression testing, and release validation to keep every digital experience production ready.",
  },

  {
    icon: Wrench,

    title:
      "Maintenance & Support",

    description:
      "Continuous monitoring, optimization, enhancements, maintenance, and dependable technical support after launch.",
  },

  {
    icon: Boxes,

    title:
      "Among Others",

    description:
      "Cloud architecture, integrations, automation, AI enablement, consulting, and flexible engineering support for evolving roadmaps.",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeSolutions() {
  return (
    <section
      className="lp1-solutions"
      id="digital-solutions"
      aria-labelledby="lp1-solutions-title"
    >
      <div className="lp1-shell">

        {/* ==================================================================
            SECTION INTRO
            ================================================================== */}

        <header
          className="lp1-solutions__intro"
          data-reveal="up"
        >

          {/* LEFT HEADING */}

          <div className="lp1-solutions__heading-block">

            <p className="lp1-section-kicker">
              Specialization...
            </p>


            <h2
              className="lp1-display-heading"
              id="lp1-solutions-title"
            >
              Your All In One

              <br />

              Digital Solutions
            </h2>

          </div>


          {/* RIGHT INTRO COPY */}

          <p className="lp1-solutions__lead">
            We combine strategy, experience design,
            engineering, quality assurance, deployment,
            and long-term support to deliver reliable
            digital solutions from one experienced team.
          </p>

        </header>


        {/* ==================================================================
            SOLUTIONS GRID
            ================================================================== */}

        <div className="lp1-solutions__grid">

          {solutions.map(
            (
              solution,
              index,
            ) => {
              const Icon =
                solution.icon;


              return (
                <article
                  className="lp1-solution-card"
                  key={
                    solution.title
                  }
                  data-reveal="up"
                  style={{
                    "--lp1-card-delay":
                      `${index * 65}ms`,
                  }}
                >

                  {/* ========================================================
                      HOVER DECORATIONS
                      ======================================================== */}

                  <span
                    className="lp1-solution-card__glow"
                    aria-hidden="true"
                  />


                  <span
                    className="lp1-solution-card__accent"
                    aria-hidden="true"
                  />


                  {/* ========================================================
                      ICON
                      ======================================================== */}

                  <div className="lp1-solution-card__icon-wrap">

                    <span className="lp1-solution-card__icon">

                      <Icon
                        size={23}
                        strokeWidth={1.65}
                      />

                    </span>

                  </div>


                  {/* ========================================================
                      CONTENT
                      ======================================================== */}

                  <div className="lp1-solution-card__content">

                    <h3>
                      {solution.title}
                    </h3>


                    <p>
                      {solution.description}
                    </p>

                  </div>


                  {/* ========================================================
                      CTA
                      ======================================================== */}

                  <a
                    className="lp1-solution-card__link"
                    href="#contact-lp1"
                    aria-label={`Get started with ${solution.title}`}
                  >

                    <span className="lp1-solution-card__link-label">
                      Get Started
                    </span>


                    <span className="lp1-solution-card__link-icon">

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                      />

                    </span>

                  </a>

                </article>
              );
            },
          )}

        </div>

      </div>
    </section>
  );
}