"use client";
import "./Industries.css";
import { useEffect, useRef } from "react";

const panels = [
  {
    label: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Health Care",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Professional Services",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
];

const checks = [
  "Technology",
  "Health Care",
  "Professional Services",
  "Real Estate",
  "E-Commerce",
  "Education",
];

export default function Industries() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        section
          .querySelectorAll(".sr, .sr-l, .sr-r")
          .forEach((element) => {
            element.classList.add("in");
          });

        observer.unobserve(section);
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="industries-reference">
      <div className="industries-reference__container">
        <div className="industries-reference__grid">
          {/* ==================================================
              LEFT — INDUSTRY IMAGE MOSAIC
          ================================================== */}

          <div className="industries-reference__media sr-l">
            <div className="industries-reference__mosaic">
              {panels.map((panel) => (
                <div
                  key={panel.label}
                  className="industries-reference__panel"
                >
                  <img
                    src={panel.image}
                    alt={panel.label}
                    className="industries-reference__image"
                    loading="lazy"
                  />

                  <div className="industries-reference__image-overlay" />

                  <div className="industries-reference__panel-footer">
                    <span className="industries-reference__panel-check">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="industries-reference__panel-label">
                      {panel.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="industries-reference__content sr-r">
            <h2 className="industries-reference__heading">
              <span className="industries-reference__heading-first">
                Technology Solutions
              </span>

              <span className="industries-reference__heading-second">
                Across Multiple Industries
              </span>
            </h2>

            <p className="industries-reference__description">
              We work with organizations across different industries,
              helping them build stronger digital platforms and modern
              online experiences.
            </p>

            <p className="industries-reference__description industries-reference__description--last">
              Every project begins with understanding the unique needs
              of each industry.
            </p>

            {/* ==================================================
                INDUSTRY CHECKS
            ================================================== */}

            <div className="industries-reference__checks">
              {checks.map((item) => (
                <div
                  key={item}
                  className="industries-reference__check-item"
                >
                  <span className="industries-reference__check-icon">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="industries-reference__check-label">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}