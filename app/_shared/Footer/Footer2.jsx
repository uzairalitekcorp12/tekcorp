import "./Footer2.css";

import {
  TEKCORP_SOCIAL_LINKS,
} from "@/app/_shared/socialLinks";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/app/_shared/SocialIcons/SocialIcons";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


/* ==========================================================================
   ASSETS
   ========================================================================== */

const PHONE_IMAGE =
  "/assets/shared/footer-phone.png";


/* ==========================================================================
   CONTACT DETAILS
   ========================================================================== */

const CONTACT_DETAILS = {
  email: {
    label:
      "support@tekcorpllc.com",

    href:
      "mailto:support@tekcorpllc.com",
  },


  usa: {
    title:
      "USA Office",

    phone:
      "+1 (289) 670-0095",

    phoneHref:
      "tel:+12896700095",

    address:
      "8 The Green STE B, KENT COUNTY - Dover, United States",

    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=8%20The%20Green%20STE%20B%2C%20Dover%2C%20Delaware%2C%20United%20States",
  },


  pakistan: {
    title:
      "Pakistan Office (Global Delivery Center)",

    phone:
      "+92 335-7221733",

    phoneHref:
      "tel:+923357221733",

    address:
      "Gulistan-e-Jauhar, Block 3, A-147, Karachi, Pakistan",

    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=A-147%20Block%203%20Gulistan-e-Jauhar%20Karachi%20Pakistan",
  },
};


/* ==========================================================================
   FOOTER
   ========================================================================== */

export default function Footer2({
  ctaHref = "/contact",
}) {
  return (
    <footer className="footer2">

      {/* ====================================================================
          DARK FOOTER
          ==================================================================== */}

      <div className="footer2__main">

        {/* ------------------------------------------------------------------
            BACKGROUND AMBIENCE
            ------------------------------------------------------------------ */}

        <span
          className="footer2__ambient footer2__ambient--one"
          aria-hidden="true"
        />

        <span
          className="footer2__ambient footer2__ambient--two"
          aria-hidden="true"
        />


        <div className="footer2__container">

          {/* ================================================================
              HERO / CTA
              ================================================================ */}

          <div className="footer2__hero">

            <div
              className="footer2__hero-copy"
              data-reveal="left"
            >

              <p className="footer2__eyebrow">
                LET&apos;S BUILD OR IMPROVE YOUR DIGITAL PRODUCT
              </p>


              <h2 className="footer2__title">
                No project is too big or
                <br />
                too small. Hit us up
                <br />
                and let&apos;s build.
              </h2>


              <Link
                href={ctaHref}
                className="footer2__call-button"
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


            {/* ==============================================================
                PHONE VISUAL
                ============================================================== */}

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
                  src={PHONE_IMAGE}
                  alt=""
                  width={225}
                  height={205}
                  sizes="(max-width: 620px) 130px, (max-width: 900px) 170px, 225px"
                  className="footer2__phone-image"
                />

              </div>

            </div>

          </div>


          {/* ================================================================
              DIVIDER
              ================================================================ */}

          <div
            className="footer2__divider"
            aria-hidden="true"
          >
            <span />
          </div>


          {/* ================================================================
              FOOTER NAVIGATION / DETAILS
              ================================================================ */}

          <div className="footer2__grid">

            {/* ==============================================================
                CONNECT
                ============================================================== */}

            <div
              className="footer2__column footer2__column--connect"
              data-reveal="up"
            >

              <h3>
                Connect
              </h3>


              <div className="footer2__contact-group">

                {/* EMAIL */}

                <a
                  href={CONTACT_DETAILS.email.href}
                  className="footer2__contact-link footer2__contact-link--email"
                >

                  <Mail
                    size={13}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />


                  <span>
                    {CONTACT_DETAILS.email.label}
                  </span>

                </a>


                {/* USA OFFICE */}

                <div className="footer2__office">

                  <strong className="footer2__office-title">
                    {CONTACT_DETAILS.usa.title}
                  </strong>


                  <a
                    href={CONTACT_DETAILS.usa.phoneHref}
                    className="footer2__contact-link"
                  >

                    <Phone
                      size={12}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />


                    <span>
                      {CONTACT_DETAILS.usa.phone}
                    </span>

                  </a>


                  <a
                    href={CONTACT_DETAILS.usa.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer2__contact-link footer2__contact-link--address"
                  >

                    <MapPin
                      size={13}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />


                    <span>
                      {CONTACT_DETAILS.usa.address}
                    </span>

                  </a>

                </div>


                {/* PAKISTAN OFFICE */}

                <div className="footer2__office">

                  <strong className="footer2__office-title">
                    {CONTACT_DETAILS.pakistan.title}
                  </strong>


                  <a
                    href={CONTACT_DETAILS.pakistan.phoneHref}
                    className="footer2__contact-link"
                  >

                    <Phone
                      size={12}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />


                    <span>
                      {CONTACT_DETAILS.pakistan.phone}
                    </span>

                  </a>


                  <a
                    href={CONTACT_DETAILS.pakistan.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer2__contact-link footer2__contact-link--address"
                  >

                    <MapPin
                      size={13}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />


                    <span>
                      {CONTACT_DETAILS.pakistan.address}
                    </span>

                  </a>

                </div>

              </div>

            </div>


            {/* ==============================================================
                QUICK LINKS
                ============================================================== */}

            <div
              className="footer2__column"
              data-reveal="up"
            >

              <h3>
                Quick Links
              </h3>


              <Link
                href="/about"
                className="footer2__link"
              >
                <span>
                  Company
                </span>
              </Link>


              <Link
                href="/case-studies"
                className="footer2__link"
              >
                <span>
                  Case Studies
                </span>
              </Link>


              <Link
                href="/insights"
                className="footer2__link"
              >
                <span>
                  Insights
                </span>
              </Link>


              <Link
                href="/contact"
                className="footer2__link"
              >
                <span>
                  Contact
                </span>
              </Link>

            </div>


            {/* ==============================================================
                SOLUTIONS
                ============================================================== */}

            <div
              className="footer2__column"
              data-reveal="up"
            >

              <h3>
                Solutions
              </h3>


              <Link
                href="/service/web-engineering"
                className="footer2__link"
              >
                <span>
                  Custom Web Development
                </span>
              </Link>


              <Link
                href="/service/application-engineering"
                className="footer2__link"
              >
                <span>
                  Application Development
                </span>
              </Link>


              <Link
                href="/service/ai-chatbots-assistants"
                className="footer2__link"
              >
                <span>
                  AI Chatbots & Assistants
                </span>
              </Link>


              {/*
               * These two currently point to Contact because dedicated
               * pages have not been registered yet.
               *
               * Change only href later when those pages are available.
               */}

              <Link
                href="/service/ai-agents-automation"
                className="footer2__link"
              >
                <span>
                  AI Agents & Automation
                </span>
              </Link>


              <Link
                href="/service/social-media-marketing"
                className="footer2__link"
              >
                <span>
                  Social Media Marketing
                </span>
              </Link>

              <Link
                href="/service/marketing-strategy"
                className="footer2__link"
              >
                <span>
                  Marketing Strategy
                </span>
              </Link>

            </div>


            {/* ==============================================================
                LEGAL
                ============================================================== */}

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
                  Refund Policy
                </span>
              </a>


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
                  Terms & Conditions
                </span>
              </a>


            </div>


            {/* ==============================================================
                SOCIALS
                ============================================================== */}

            <div
              className="footer2__column footer2__column--social"
              data-reveal="up"
            >

              <h3>
                Follow
              </h3>


              <div className="footer2__socials">

                <a
                  href={TEKCORP_SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TekCorp LinkedIn"
                >
                  <LinkedInIcon />
                </a>


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

              </div>

            </div>

          </div>


          {/* ================================================================
              BOTTOM LINE
              ================================================================ */}

          <div
            className="footer2__bottom-line"
            aria-hidden="true"
          />

        </div>

      </div>


      {/* ====================================================================
          COPYRIGHT
          ==================================================================== */}

      <div className="footer2__copyright">

        <p>
          © Copyright 2026 Tekcorp LLC - All Rights Reserved
        </p>

      </div>

    </footer>
  );
}
