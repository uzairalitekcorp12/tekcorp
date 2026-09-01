import "./AboutOverview.css";

import {
  ArrowUpRight,
} from "lucide-react";
import Button from "@/app/_shared/Button/Button";


/* ==========================================================================
   ABOUT IMAGE

   Replace later with your final local asset if needed.

   Example:
   /assets/About-assets/about-team.jpg
   ========================================================================== */

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90";


/* ==========================================================================
   ABOUT CARDS
   ========================================================================== */

const highlights = [
  {
    title:
      "Our Ambition",

    text:
      "To be recognized as a global leader in IT solutions, continuously pushing the boundaries of technology to create innovative, sustainable, and transformative digital experiences. We aim to set new standards in the IT industry, fostering a culture of excellence and creativity that inspires progress and growth.",
  },

  {
    title:
      "Our Mission",

    text:
      "Our mission at TekCorp is to empower businesses through transformative IT solutions. We are committed to developing state-of-the-art technology services that enhance operational efficiency, ensure security, and drive growth.",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function AboutAbout() {
  return (
    <section
      className="tek-About-about"
      id="about-company"
    >

      <div className="tek-About-shell tek-About-about__layout">

        {/* ================================================================
            LEFT SIDE
            ================================================================ */}

        <div
          className="tek-About-about__primary"
          data-reveal="left"
        >

          {/* SECTION KICKER */}

          <p className="tek-About-about__kicker">

            <span
              aria-hidden="true"
            />

            About TekCorp

          </p>


          {/* MAIN HEADING */}

          <h2 className="tek-About-about__headline">
            TekCorp delivers comprehensive, efficient,
            <br className="tek-About-about__headline-break" />
            and scalable technology solutions tailored to
            <br className="tek-About-about__headline-break" />
            meet the unique needs your businesses.
          </h2>


          {/* ==============================================================
              INTRO ROW
              ============================================================== */}

          <div className="tek-About-about__intro">

            <p>
              At TekCorp, we specialize in cutting-edge IT solutions
              that drive digital transformation. Our expertise spans
              across various domains. we empower organizations to
              achieve greater efficiency, security, and growth
            </p>


            <Button
              appearance="box"
              className="tek-About-about__cta"
              href="/contact"
            >

              <span>
                Contact Us
              </span>


              <ArrowUpRight
                size={13}
                strokeWidth={1.8}
              />

            </Button>

          </div>


          {/* ==============================================================
              IMAGE
              ============================================================== */}

          <figure className="tek-About-about__media">

            <img
              src={ABOUT_IMAGE}
              alt="Team members collaborating around a table"
              loading="lazy"
            />


            <span
              className="tek-About-about__media-overlay"
              aria-hidden="true"
            />

          </figure>

        </div>


        {/* ================================================================
            RIGHT CARDS
            ================================================================ */}

        <div className="tek-About-about__cards">

          {highlights.map(
            (
              item,
              index,
            ) => (

              <article
                className="tek-About-about-card"
                key={item.title}
                data-reveal="right"
                style={{
                  "--tek-About-card-delay":
                    `${index * 90}ms`,
                }}
              >

                <div className="tek-About-about-card__content">

                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.text}
                  </p>

                </div>


                <a
                  className="tek-About-about-card__link"
                  href="/contact"
                >

                  <span>
                    Learn More
                  </span>


                  <span className="tek-About-about-card__link-icon">

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                    />

                  </span>

                </a>

              </article>

            ),
          )}

        </div>

      </div>

    </section>
  );
}
