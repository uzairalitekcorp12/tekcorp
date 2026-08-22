import "./Footer2.css";
import { TEKCORP_SOCIAL_LINKS } from "@/app/_shared/socialLinks";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/app/_shared/SocialIcons/SocialIcons";

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
   FOOTER
   ========================================================================== */

export default function Footer2({
  ctaHref = "/contact",
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
                href="/about"
                className="footer2__link"
              >
                <span>
                  About us
                </span>
              </Link>


              <Link
                href="/home#digital-solutions"
                className="footer2__link"
              >
                <span>
                  Services
                </span>
              </Link>


              <Link
                href="/contact"
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
                  href={TEKCORP_SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TekCorp Facebook"
                >
                  <FacebookIcon />
                </a>

                <a
                  href={TEKCORP_SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TekCorp Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href={TEKCORP_SOCIAL_LINKS.linkedin}
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
