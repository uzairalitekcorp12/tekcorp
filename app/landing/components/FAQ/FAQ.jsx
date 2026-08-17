"use client";

import "./FAQ.css";
import { useState } from "react";

const faqs = [
  {
    q: "What services do TekCorp provide?",
    a: "We provide end-to-end digital engineering including AI automation systems, custom web platform development, high-converting SEO architectures, cohesive brand design systems, and specialized EdTech solutions.",
  },
  {
    q: "Do you develop custom solutions?",
    a: "Yes, every system we build is custom-architected to align with your exact business processes and growth objectives. We avoid rigid templates and one-size-fits-all software.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope and feature complexity. A high-converting corporate website typically takes 4–8 weeks, while complex web applications or SaaS platforms require 2–6 months. We deliver a milestone-based timeline during discovery.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer structured post-launch support and maintenance SLAs to continuously optimize platform performance, manage security updates, and scale system capacity as your business grows.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const toggleFAQ = (index) => {
    setOpen((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* =====================================================
            HEADING
        ===================================================== */}
        <div className="faq-header sr">
          <h2 className="faq-heading">
            <span className="faq-heading-gradient">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        {/* =====================================================
            FAQ LIST
        ===================================================== */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              /*
                IMPORTANT:
                .sr is on this stable wrapper.

                React changes the className of the article below
                when the accordion opens/closes, but this wrapper
                keeps the "in" class added by SiteEffects.
              */
              <div
                key={faq.q}
                className={`faq-reveal sr d${index + 1}`}
              >
                <article
                  className={`faq-item ${
                    isOpen ? "faq-item--active" : ""
                  }`}
                >
                  {/* ===========================================
                      QUESTION BUTTON
                  =========================================== */}
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="faq-question">
                      {faq.q}
                    </span>

                    <span
                      className="faq-icon"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {/* ===========================================
                      ANSWER
                  =========================================== */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className="faq-answer"
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}