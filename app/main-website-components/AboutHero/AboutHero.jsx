import "./AboutHero.css";

import {
  ArrowUpRight,
} from "lucide-react";


/* ==========================================================================
   REUSABLE TEKCORP PAGE HERO

   DEFAULT OUTPUT
   --------------

   LEADING THE WAY IN IT SOLUTIONS

   Empowering Innovation
   with TekCorp

   TekCorp > Company ↗


   REUSABLE EXAMPLES
   -----------------

   <HomeHero
     eyebrow="OUR DIGITAL CAPABILITIES"
     titleLines={[
       "Engineering Digital",
       "Experiences That Scale",
     ]}
     breadcrumb="TekCorp > Solutions"
     breadcrumbHref="/solutions"
   />


   <HomeHero
     eyebrow="REAL WORK. REAL IMPACT."
     titleLines={[
       "Digital Products",
       "Built for Growth",
     ]}
     breadcrumb="TekCorp > Case Studies"
     breadcrumbHref="/case-studies"
   />


   PROPS
   -----

   id
     Section id.

   eyebrow
     Small teal text above title.

   titleLines
     Array of title lines.
     Recommended: 1–3 lines.

   breadcrumb
     Small bottom navigation label.

   breadcrumbHref
     Destination of breadcrumb.

   showArrow
     Show/hide external-style arrow.

   className
     Additional section class if another page needs
     a modifier.

   compact
     Makes the hero slightly shorter.
   ========================================================================== */

export default function AboutHero({
  id = "home",

  eyebrow =
    "LEADING THE WAY IN IT SOLUTIONS",

  titleLines = [
    "Empowering Innovation",
    "with TekCorp",
  ],

  breadcrumb =
    "TekCorp > Company",

  breadcrumbHref =
    "#about-company",

  showArrow = true,

  className = "",

  compact = false,
}) {
  const normalizedTitleLines =
    Array.isArray(titleLines)
      ? titleLines
      : [titleLines];


  return (
    <section
      className={[
        "tek-home-hero",

        compact
          ? "tek-home-hero--compact"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="tek-home-shell tek-home-hero__inner">

        <div
          className="tek-home-hero__content"
          data-reveal="up"
        >

          {/* ================================================================
              EYEBROW
              ================================================================ */}

          {eyebrow ? (
            <p className="tek-home-hero__eyebrow">
              {eyebrow}
            </p>
          ) : null}


          {/* ================================================================
              MAIN TITLE
              ================================================================ */}

          <h1
            className="tek-home-hero__title"
            id={`${id}-title`}
          >
            {normalizedTitleLines.map(
              (
                line,
                index,
              ) => (
                <span
                  className="tek-home-hero__title-line"
                  key={`${line}-${index}`}
                >
                  {line}
                </span>
              ),
            )}
          </h1>


          {/* ================================================================
              BREADCRUMB / PAGE LINK
              ================================================================ */}

          {breadcrumb ? (
            <a
              className="tek-home-hero__breadcrumb"
              href={breadcrumbHref}
            >
              <span>
                {breadcrumb}
              </span>


              {showArrow ? (
                <ArrowUpRight
                  size={11}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              ) : null}
            </a>
          ) : null}

        </div>

      </div>
    </section>
  );
}