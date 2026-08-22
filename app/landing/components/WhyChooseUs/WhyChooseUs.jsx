"use client";

import "./WhyChooseUs.css";
import { useEffect, useRef } from "react";

const items = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9.5 4.5a3 3 0 0 0-5 2.2 3.1 3.1 0 0 0 .5 1.7A3.3 3.3 0 0 0 3.5 11a3.2 3.2 0 0 0 1.8 2.9 3 3 0 0 0 3 3.6 3 3 0 0 0 2.7-1.7V6.2a3 3 0 0 0-1.5-1.7Z" />
        <path d="M14.5 4.5a3 3 0 0 1 5 2.2 3.1 3.1 0 0 1-.5 1.7 3.3 3.3 0 0 1 1.5 2.6 3.2 3.2 0 0 1-1.8 2.9 3 3 0 0 1-3 3.6 3 3 0 0 1-2.7-1.7V6.2a3 3 0 0 1 1.5-1.7Z" />
        <path d="M8 8.5c1.4 0 2.4.8 3 1.8" />
        <path d="M16 8.5c-1.4 0-2.4.8-3 1.8" />
        <path d="M8.2 13.3c1.2 0 2.1-.5 2.8-1.3" />
        <path d="M15.8 13.3c-1.2 0-2.1-.5-2.8-1.3" />
      </svg>
    ),
    dark: "Strategic",
    light: "Thinking",
    desc:
      "Every project begins with understanding your business goals and identifying opportunities for improvement.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8.3 11.2 2.1 2.1a2 2 0 0 0 2.8 0l3.1-3.1" />
        <path d="m13.1 7.4 1.2-1.2a2.4 2.4 0 0 1 3.4 0l3.1 3.1" />
        <path d="m10.8 7.2-1-1a2.4 2.4 0 0 0-3.4 0L3.2 9.4" />
        <path d="m4.4 10.6 5.2 5.2a1.5 1.5 0 0 0 2.1 0" />
        <path d="m6.8 9.1 6.6 6.6a1.5 1.5 0 0 0 2.1-2.1" />
        <path d="m9.2 7.8 6.7 6.7a1.5 1.5 0 0 0 2.1-2.1l-4.2-4.2" />
      </svg>
    ),
    dark: "Tailored",
    light: "Solutions",
    desc:
      "Our digital solutions are designed specifically for each organization.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </svg>
    ),
    dark: "Modern",
    light: "Technologies",
    desc:
      "We build platforms using reliable technologies designed for performance and scalability.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20V13h4v7" />
        <path d="M10 20V9h4v11" />
        <path d="M16 20V4h4v16" />
        <path d="m4 9 5-4 4 2 7-5" />
        <path d="M17 2h3v3" />
      </svg>
    ),
    dark: "Long-Term",
    light: "Growth Focus",
    desc:
      "Our solutions are created to support sustainable growth.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        section.classList.add("why-section--visible");

        observer.unobserve(section);
      },
      {
        threshold: 0.14,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="why-section">
      <div className="why-container">
        <div className="why-heading-wrap">
          <h2 className="why-heading">
            Why Business Choose Tekcorp
          </h2>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <article
              key={`${item.dark}-${item.light}`}
              className="why-card"
            >
              <div className="why-card-inner">
                <div className="why-icon">
                  {item.icon}
                </div>

                <h3 className="why-title">
                  <span className="why-title-dark">
                    {item.dark}
                  </span>{" "}
                  <span className="why-title-light">
                    {item.light}
                  </span>
                </h3>

                <p className="why-desc">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}