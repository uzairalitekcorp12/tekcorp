import "./Footer2.css";

import {
  ArrowUpRight,
} from "lucide-react";


/* ==========================================================================
   PHONE IMAGE

   Replace only this URL when your final phone image is available.

   Recommended:
   transparent PNG / WebP
   ========================================================================== */

const PHONE_IMAGE =
  "/assets/shared/footer-phone.png";


/* ==========================================================================
   SOCIAL ICONS
   ========================================================================== */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.372 3.5A2.372 2.372 0 1 1 .628 3.5a2.372 2.372 0 0 1 4.744 0ZM.96 7.286h4.824V22H.96V7.286Zm7.83 0h4.626v2.012h.066c.644-1.22 2.22-2.506 4.57-2.506C22.94 6.792 24 10.008 24 14.19V22h-4.82v-6.922c0-1.65-.03-3.774-2.3-3.774-2.303 0-2.655 1.798-2.655 3.654V22H8.79V7.286Z" />
    </svg>
  );
}


function UpworkIcon() {
  return (
    <span
      className="footer2__brand-text footer2__brand-text--upwork"
      aria-hidden="true"
    >
      Up
    </span>
  );
}


function WordPressIcon() {
  return (
    <span
      className="footer2__brand-text footer2__brand-text--wordpress"
      aria-hidden="true"
    >
      W
    </span>
  );
}


/* ==========================================================================
   FOOTER
   ========================================================================== */

export default function Footer2() {
  return (
    <footer className="footer2">

      {/* ================================================================
          MAIN DARK FOOTER
          ================================================================ */}

      <div className="footer2__main">

        {/* SUBTLE BACKGROUND AMBIENCE */}

        <span
          className="footer2__ambient footer2__ambient--one"
          aria-hidden="true"
        />

        <span
          className="footer2__ambient footer2__ambient--two"
          aria-hidden="true"
        />


        <div className="footer2__container">

          {/* ==============================================================
              CTA AREA
              ============================================================== */}

          <div className="footer2__hero">

            <div
              className="footer2__hero-copy"
              data-reveal="left"
            >

              <p className="footer2__eyebrow">
                LET&apos;S BUILD OR IMPROVE YOUR DIGITAL PRODUCT —
              </p>


              <h2 className="footer2__title">
                No project is too big or
                <br />
                too small. Hit us up
                <br />
                and let&apos;s build.
              </h2>


              <a
                className="footer2__call-button"
                href="#contact-lp1"
              >

                <span className="footer2__call-text">
                  Schedule a Call
                </span>


                <span className="footer2__call-icon">

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                  />

                </span>

              </a>

            </div>


            {/* ============================================================
                PHONE IMAGE
                ============================================================ */}

            <div
              className="footer2__phone-area"
              data-reveal="right"
              aria-hidden="true"
            >

              <span className="footer2__phone-glow" />


              <span className="footer2__phone-ring footer2__phone-ring--one" />

              <span className="footer2__phone-ring footer2__phone-ring--two" />


              <div className="footer2__phone-image-wrap">

                <img
                  className="footer2__phone-image"
                  src={PHONE_IMAGE}
                  alt=""
                />

              </div>

            </div>

          </div>


          {/* ==============================================================
              FIRST DIVIDER
              ============================================================== */}

          <div
            className="footer2__divider"
            aria-hidden="true"
          >
            <span />
          </div>


          {/* ==============================================================
              LINKS
              ============================================================== */}

          <div className="footer2__grid">

            {/* CONNECT */}

            <div
              className="footer2__column"
              data-reveal="up"
            >

              <h3>
                Connect
              </h3>


              <a
                href="mailto:tekcorp@gmail.com"
                className="footer2__link"
              >
                <span>
                  tekcorp@gmail.com
                </span>
              </a>


              <a
                href="tel:+573006702491"
                className="footer2__link"
              >
                <span>
                  +57 300 670 2491
                </span>
              </a>

            </div>


            {/* QUICK LINKS */}

            <div
              className="footer2__column"
              data-reveal="up"
            >

              <h3>
                Quick links
              </h3>


              <a
                href="#home"
                className="footer2__link"
              >
                <span>
                  About us
                </span>
              </a>


              <a
                href="#digital-solutions"
                className="footer2__link"
              >
                <span>
                  Services
                </span>
              </a>


              <a
                href="#contact-lp1"
                className="footer2__link"
              >
                <span>
                  Contact Me
                </span>
              </a>

            </div>


            {/* LEGAL */}

            <div
              className="footer2__column"
              data-reveal="up"
            >

              <h3>
                Legal
              </h3>


              <a
                href="#"
                className="footer2__link"
              >
                <span>
                  Privacy policy
                </span>
              </a>


              <a
                href="#"
                className="footer2__link"
              >
                <span>
                  Terms &amp; conditions
                </span>
              </a>


              <a
                href="#"
                className="footer2__link"
              >
                <span>
                  Sitemap
                </span>
              </a>

            </div>


            {/* FOLLOW */}

            <div
              className="footer2__column footer2__column--social"
              data-reveal="up"
            >

              <h3>
                Follow
              </h3>


              <div className="footer2__socials">

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>


                <a
                  href="#"
                  aria-label="Upwork"
                >
                  <UpworkIcon />
                </a>


                <a
                  href="#"
                  aria-label="WordPress"
                >
                  <WordPressIcon />
                </a>

              </div>

            </div>

          </div>


          {/* ==============================================================
              BOTTOM DIVIDER
              ============================================================== */}

          <div
            className="footer2__bottom-line"
            aria-hidden="true"
          />

        </div>

      </div>


      {/* ================================================================
          COPYRIGHT
          ================================================================ */}

      <div className="footer2__copyright">

        <p>
          Copyrights 2023. All rights reserved
        </p>

      </div>

    </footer>
  );
}