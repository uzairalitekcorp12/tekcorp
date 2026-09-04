import "./HomeProcess.css";

import {
  ArrowRight,
  Box,
  CircleCheckBig,
  NotebookPen,
  Search,
} from "lucide-react";


/* ==========================================================================
   TEKCORP — PROCESS DATA

   Add/edit process steps only in this array.

   The layout, numbering and connectors are generated automatically.
   ========================================================================== */

const PROCESS_STEPS = [
  {
    number:
      "01",

    title:
      "Discover",

    description:
      "We understand your business, users, challenges, goals, and the opportunities that matter most.",

    meta:
      "Understand",

    icon:
      Search,
  },


  {
    number:
      "02",

    title:
      "Plan",

    description:
      "We shape the right strategy, technical approach, priorities, and delivery roadmap around your goals.",

    meta:
      "Strategize",

    icon:
      NotebookPen,
  },


  {
    number:
      "03",

    title:
      "Build",

    description:
      "We design, engineer, integrate, test, and refine the solution with quality and scalability in mind.",

    meta:
      "Execute",

    icon:
      Box,
  },


  {
    number:
      "04",

    title:
      "Deliver",

    description:
      "We launch with confidence, validate the result, and make sure the solution is ready for real-world impact.",

    meta:
      "Create Impact",

    icon:
      CircleCheckBig,
  },
];


/* ==========================================================================
   PROCESS STEP
   ========================================================================== */

function ProcessStep({
  step,
  index,
  isLast,
}) {
  const Icon =
    step.icon;


  return (
    <article
      className="tek-process__step"
      data-reveal="up"
      style={{
        "--process-index":
          index,
      }}
    >

      {/* ====================================================================
          TOP TIMELINE
          ==================================================================== */}

      <div className="tek-process__timeline">

        <span className="tek-process__number">
          {step.number}
        </span>


        {!isLast ? (
          <div
            className="tek-process__connector"
            aria-hidden="true"
          >

            <span className="tek-process__connector-line" />


            <span className="tek-process__connector-arrow">

              <ArrowRight
                size={18}
                strokeWidth={1.8}
              />

            </span>

          </div>
        ) : null}

      </div>


      {/* ====================================================================
          CARD
          ==================================================================== */}

      <div className="tek-process__card">

        {/* Decorative layers */}

        <span
          className="tek-process__card-grid"
          aria-hidden="true"
        />


        <span
          className="tek-process__card-glow"
          aria-hidden="true"
        />


        <span
          className="tek-process__card-line"
          aria-hidden="true"
        />


        {/* Icon */}

        <div className="tek-process__icon">

          <Icon
            size={27}
            strokeWidth={1.55}
            aria-hidden="true"
          />

        </div>


        {/* Meta */}

        <span className="tek-process__meta">
          {step.meta}
        </span>


        {/* Content */}

        <div className="tek-process__copy">

          <h3>
            {step.title}
          </h3>


          <p>
            {step.description}
          </p>

        </div>


        {/* Small progression mark */}

        <div
          className="tek-process__progress"
          aria-hidden="true"
        >

          <span>
            {step.number}
          </span>


          <i />

        </div>

      </div>

    </article>
  );
}


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeProcess() {
  return (
    <section
      className="tek-process"
      id="our-process"
      aria-labelledby="tek-process-title"
    >

      {/* ====================================================================
          AMBIENT BACKGROUND
          ==================================================================== */}

      <div
        className="tek-process__ambient"
        aria-hidden="true"
      >

        <span className="tek-process__ambient-grid" />

        <span className="tek-process__ambient-glow tek-process__ambient-glow--one" />

        <span className="tek-process__ambient-glow tek-process__ambient-glow--two" />

      </div>


      <div className="lp1-shell tek-process__shell">

        {/* ==================================================================
            HEADER
            ================================================================== */}

        <header className="tek-process__header">

          <div
            className="tek-process__heading"
            data-reveal="left"
          >

            <span className="tek-process__eyebrow">

              <i />

              Our Process

            </span>


            <h2 id="tek-process-title">

              A Proven Approach

              <br />

              To{" "}

              <span>
                Success.
              </span>

            </h2>

          </div>


          <div
            className="tek-process__intro"
            data-reveal="right"
          >

            <p>
              A structured and transparent process that keeps every stage
              focused on clarity, collaboration, quality, and measurable
              business results.
            </p>

          </div>

        </header>


        {/* ==================================================================
            PROCESS FLOW
            ================================================================== */}

        <div className="tek-process__steps">

          {PROCESS_STEPS.map(
            (
              step,
              index,
            ) => (
              <ProcessStep
                key={
                  step.number
                }
                step={
                  step
                }
                index={
                  index
                }
                isLast={
                  index ===
                  PROCESS_STEPS.length - 1
                }
              />
            ),
          )}

        </div>


        {/* ==================================================================
            FOOTER MESSAGE
            ================================================================== */}

        <div className="tek-process__footer">

          <span className="tek-process__footer-dot" />

          <p>
            One clear process.

            <strong>
              {" "}Built around your business.
            </strong>
          </p>


          <span className="tek-process__footer-line" />

        </div>

      </div>

    </section>
  );
}