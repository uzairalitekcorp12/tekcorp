"use client";

import "./ContactSection.css";

import {
  useActionState,
} from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  UserRound,
} from "lucide-react";

import {
  submitContact,
} from "../../_actions/contact";


const INITIAL_STATE = {
  ok: false,
  message: "",
};


export default function ContactSection() {
  const [
    state,
    formAction,
    pending,
  ] =
    useActionState(
      submitContact,
      INITIAL_STATE,
    );

  return (
    <section
      className="tek-contact-section"
      id="quick-contact"
      aria-labelledby="tek-contact-section-title"
    >
      <div className="tek-shell">
        <div className="tek-contact-section__panel">
          <div className="tek-contact-section__copy">
            <p>
              <span aria-hidden="true" />
              Contact Us
            </p>

            <h2 id="tek-contact-section-title">
              Do you have any questions or would
              you like to know more about our
              services?
            </h2>

            <span>
              Then don&apos;t hesitate to contact us. We are here to help
              and answer your questions about our digital services.
            </span>

            <div className="tek-contact-section__bottom-copy">
              <p>
                At <strong>TekCorp</strong>, we focus on useful technology,
                clear communication and practical next steps.
              </p>
            </div>
          </div>


          <form
            className="tek-contact-section__form"
            action={formAction}
          >
            <input
              type="hidden"
              name="source"
              value="contact-section"
            />

            <h3>
              Contact us
            </h3>

            <label>
              <span>
                Full Name
              </span>

              <div>
                <UserRound
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
            </label>

            <label>
              <span>
                Email Address
              </span>

              <div>
                <Mail
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
            </label>

            <label>
              <span>
                Message
              </span>

              <textarea
                name="message"
                rows="5"
                required
              />
            </label>

            <button
              type="submit"
              disabled={pending}
            >
              <span>
                {pending
                  ? "Sending..."
                  : state.ok
                    ? "Brief Received"
                    : "Contact Us"}
              </span>

              {state.ok ? (
                <CheckCircle2
                  size={15}
                  strokeWidth={1.8}
                />
              ) : (
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                />
              )}
            </button>

            {state.message ? (
              <p
                className={[
                  "tek-contact-section__status",
                  state.ok
                    ? "is-success"
                    : "is-error",
                ].join(" ")}
                role="status"
              >
                {state.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
