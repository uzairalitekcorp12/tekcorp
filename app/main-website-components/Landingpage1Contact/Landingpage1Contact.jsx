"use client";

import "./Landingpage1Contact.css";

import {
  ArrowUpRight,
  Mail,
  UserRound,
} from "lucide-react";

import { useState } from "react";


/* ==========================================================================
   SOCIAL ICONS

   Local SVGs are used for brand icons so the component does not depend
   on lucide-react exposing Facebook / Twitter / LinkedIn exports.
   ========================================================================== */

function FacebookIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.74-1.7H17.1V2.43A25.1 25.1 0 0 0 14.39 2C11.7 2 9.85 3.64 9.85 6.65V9.5H6.8V13h3.05v9h3.65Z" />
    </svg>
  );
}


function TwitterIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.58 6.19c-.69.31-1.43.51-2.21.6a3.86 3.86 0 0 0 1.69-2.13 7.75 7.75 0 0 1-2.44.93A3.84 3.84 0 0 0 12 8.22c0 .3.03.6.1.87a10.9 10.9 0 0 1-7.92-4.02 3.84 3.84 0 0 0 1.19 5.13 3.8 3.8 0 0 1-1.74-.48v.05a3.84 3.84 0 0 0 3.08 3.76 3.88 3.88 0 0 1-1.73.07 3.85 3.85 0 0 0 3.59 2.67 7.71 7.71 0 0 1-4.77 1.64c-.31 0-.61-.02-.92-.05a10.86 10.86 0 0 0 5.89 1.73c7.07 0 10.94-5.86 10.94-10.94 0-.17 0-.33-.01-.5a7.8 7.8 0 0 0 1.92-1.99Z" />
    </svg>
  );
}


function LinkedInIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.37 3.5A2.37 2.37 0 1 1 .63 3.5a2.37 2.37 0 0 1 4.74 0ZM.96 7.29h4.82V22H.96V7.29Zm7.83 0h4.63V9.3h.06c.65-1.22 2.22-2.51 4.57-2.51C22.94 6.79 24 10.01 24 14.19V22h-4.82v-6.92c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V22H8.79V7.29Z" />
    </svg>
  );
}


/* ==========================================================================
   CONTACT COMPONENT
   ========================================================================== */

export default function Landingpage1Contact() {
  const [submitted, setSubmitted] =
    useState(false);


  /* =========================================================================
     FORM SUBMIT

     UI-only for now.

     Later this can be connected to:
     - Next.js API route
     - CRM
     - Email service
     - Database
     ========================================================================= */

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }


  return (
    <section
      className="lp1-contact"
      id="contact-lp1"
      aria-labelledby="lp1-contact-title"
    >
      <div className="lp1-shell">

        <div
          className="lp1-contact__panel"
          data-reveal="up"
        >

          {/* ================================================================
              LEFT CONTENT
              ================================================================ */}

          <div className="lp1-contact__copy">

            {/* TOP CONTENT */}

            <div className="lp1-contact__copy-top">

              <p className="lp1-contact__kicker">
                <span
                  className="lp1-contact__kicker-line"
                  aria-hidden="true"
                />

                <span>
                  Contact Us
                </span>
              </p>


              <h2 id="lp1-contact-title">
                Do you have any questions or would
                you like to know more about our
                services?
              </h2>


              <p className="lp1-contact__description">
                Then don&apos;t hesitate to contact us.
                We are here to help and answer all your
                questions about our services.
              </p>

            </div>


            {/* ==============================================================
                LEFT BOTTOM
                ============================================================== */}

            <div className="lp1-contact__copy-bottom">

              <p className="lp1-contact__company-copy">
                At{" "}

                <strong>
                  TekCorp
                </strong>

                , your reliable partner for Information
                Technology from Pakistan, we are always
                ready to support you.
              </p>


              {/* SOCIAL PILL */}

              <div
                className="lp1-contact__socials"
                aria-label="Tekcorp social links"
              >

                <a
                  href="#"
                  aria-label="Tekcorp Facebook"
                >
                  <FacebookIcon />
                </a>


                <a
                  href="#"
                  aria-label="Tekcorp Twitter"
                >
                  <TwitterIcon />
                </a>


                <a
                  href="#"
                  aria-label="Tekcorp LinkedIn"
                >
                  <LinkedInIcon />
                </a>

              </div>

            </div>

          </div>


          {/* ================================================================
              CONTACT FORM CARD
              ================================================================ */}

          <form
            className="lp1-contact__form"
            onSubmit={handleSubmit}
          >

            {/* FORM TITLE */}

            <h3>
              Contact us
            </h3>


            {/* ==============================================================
                FULL NAME
                ============================================================== */}

            <label className="lp1-contact__field">

              <span className="lp1-contact__label">
                Full Name
              </span>


              <span className="lp1-contact__control">

                <UserRound
                  className="lp1-contact__control-icon"
                  size={17}
                  strokeWidth={1.45}
                  aria-hidden="true"
                />


                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  aria-label="Full Name"
                  required
                />

              </span>

            </label>


            {/* ==============================================================
                EMAIL
                ============================================================== */}

            <label className="lp1-contact__field">

              <span className="lp1-contact__label">
                Email Address
              </span>


              <span className="lp1-contact__control">

                <Mail
                  className="lp1-contact__control-icon"
                  size={17}
                  strokeWidth={1.45}
                  aria-hidden="true"
                />


                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-label="Email Address"
                  required
                />

              </span>

            </label>


            {/* ==============================================================
                MESSAGE
                ============================================================== */}

            <label className="lp1-contact__field">

              <span className="lp1-contact__label">
                Message
              </span>


              <span className="lp1-contact__control lp1-contact__control--textarea">

                <textarea
                  name="message"
                  rows="5"
                  aria-label="Message"
                  required
                />

              </span>

            </label>


            {/* ==============================================================
                SUBMIT
                ============================================================== */}

            <button
              className={[
                "lp1-contact__submit",
                submitted
                  ? "is-submitted"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              type="submit"
            >

              <span>
                {submitted
                  ? "Message Received"
                  : "Contact Us"}
              </span>


              <ArrowUpRight
                size={14}
                strokeWidth={1.9}
              />

            </button>


            {/* ==============================================================
                SUCCESS
                ============================================================== */}

            {submitted && (
              <p
                className="lp1-contact__success"
                role="status"
              >
                Thank you. Your message has been received.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}