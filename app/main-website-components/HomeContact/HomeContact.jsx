"use client";

import "./HomeContact.css";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import {
  useState,
} from "react";

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

export default function HomeContact() {
  const [
    submitted,
    setSubmitted,
  ] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section
      className="tek-home-contact"
      id="home-contact"
    >
      <div className="tek-home-shell">
        <div
          className="tek-home-contact__panel"
          data-reveal="up"
        >
          <div
            className="tek-home-contact__orb tek-home-contact__orb--one"
            aria-hidden="true"
          />

          <div
            className="tek-home-contact__orb tek-home-contact__orb--two"
            aria-hidden="true"
          />

          <div className="tek-home-contact__copy">
            <p className="tek-home-contact__kicker">
              <span />
              Contact Us
            </p>

            <h2>
              Do you have any questions or would
              you like to know more about our
              services?
            </h2>

            <p className="tek-home-contact__description">
              Then don&apos;t hesitate to contact us. We are
              here to help and answer all your questions
              about our digital services.
            </p>

            <p className="tek-home-contact__note">
              At <strong>TekCorp</strong>, your reliable
              partner for Information Technology from
              Pakistan, we are always ready to support you.
            </p>

            <div className="tek-home-contact__details">
              <a href="mailto:info@tekcorp.com">
                <Mail
                  size={16}
                  strokeWidth={1.7}
                />

                info@tekcorp.com
              </a>

              <a href="tel:+920000000000">
                <Phone
                  size={16}
                  strokeWidth={1.7}
                />

                +92 000 0000000
              </a>

              <span>
                <MapPin
                  size={16}
                  strokeWidth={1.7}
                />

                Karachi, Pakistan
              </span>
            </div>

            <div className="tek-home-contact__socials">
              <a
                href="#"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="mailto:info@tekcorp.com"
                aria-label="Email"
              >
                <Mail
                  size={13}
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>

          <form
            className="tek-home-contact__form"
            onSubmit={handleSubmit}
          >
            <div className="tek-home-contact__form-head">
              <div>
                <span>
                  Start a conversation
                </span>

                <h3>
                  Contact us
                </h3>
              </div>

              <Send
                size={18}
                strokeWidth={1.6}
              />
            </div>

            <label>
              <span>
                Full Name
              </span>

              <input
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label>
              <span>
                Email Address
              </span>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label>
              <span>
                Message
              </span>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              />
            </label>

            <button type="submit">
              {submitted
                ? "Message Received"
                : "Contact Us"}

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </button>

            {submitted && (
              <p className="tek-home-contact__success">
                Thank you. Connect this form to your
                backend/API when the submission workflow
                is ready.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
