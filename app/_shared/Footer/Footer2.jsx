import "./Footer2.css";

import Image from "next/image";
import Link from "next/link";

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

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.01.28-1.7 1.75-1.7H17.1V2.42c-.32-.04-1.42-.14-2.7-.14-2.67 0-4.5 1.63-4.5 4.63V9.5H7V13h2.9v9h3.6Z" />
    </svg>
  );
}


function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.9"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.9"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}


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


/* ==========================================================================
   FOOTER
   ========================================================================== */

export default function Footer2({
  ctaHref = "/Contact",
}) {
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


              <Link
                className="footer2__call-button"
                href={ctaHref}
              >

                <span className="footer2__call-text">
                  Schedule a Call
                </span>


                <span className="footer2__call-icon">

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </span>

              </Link>

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

                <Image
                  className="footer2__phone-image"
                  src={PHONE_IMAGE}
                  alt=""
                  width={178}
                  height={160}
                  sizes="(max-width: 720px) 125px, (max-width: 1100px) 150px, 178px"
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


              <Link
                href="/About"
                className="footer2__link"
              >
                <span>
                  About us
                </span>
              </Link>


              <Link
                href="/Home#digital-solutions"
                className="footer2__link"
              >
                <span>
                  Services
                </span>
              </Link>


              <Link
                href="/Contact"
                className="footer2__link"
              >
                <span>
                  Contact Me
                </span>
              </Link>

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
                  href="https://web.facebook.com/profile.php?id=61563448207086"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TekCorp Facebook"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/tekcorpllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TekCorp Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.linkedin.com/company/tekcorpllc/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TekCorp LinkedIn"
                >
                  <LinkedInIcon />
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
