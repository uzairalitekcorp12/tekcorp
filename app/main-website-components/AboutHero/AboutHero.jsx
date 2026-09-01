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

   <AboutHero
     eyebrow="OUR DIGITAL CAPABILITIES"
     titleLines={[
       "Engineering Digital",
       "Experiences That Scale",
     ]}
     breadcrumb="TekCorp > Solutions"
     breadcrumbHref="/solutions"
   />


   <AboutHero
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
  id = "About",

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
        "tek-About-hero",

        compact
          ? "tek-About-hero--compact"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="tek-About-shell tek-About-hero__inner">

        <div
          className="tek-About-hero__content"
          data-reveal="up"
        >

          {/* ================================================================
              EYEBROW
              ================================================================ */}

          {eyebrow ? (
            <p className="tek-About-hero__eyebrow">
              {eyebrow}
            </p>
          ) : null}


          {/* ================================================================
              MAIN TITLE
              ================================================================ */}

          <h1
            className="tek-About-hero__title"
            id={`${id}-title`}
          >
            {normalizedTitleLines.map(
              (
                line,
                index,
              ) => (
                <span
                  className="tek-About-hero__title-line"
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
              className="tek-About-hero__breadcrumb"
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