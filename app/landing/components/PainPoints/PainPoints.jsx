"use client";
import "./PainPoints.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const items = [
  {
    n: "01",
    t: "Outdated Websites That Fail To Convert",
    desc:
      "Legacy web designs lose potential leads due to poor mobile optimization, slow load times, and confusing UI/UX. TekCorp rebuilds high-converting digital storefronts tailored to turn traffic into revenue.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    alt: "Analytics dashboard showing web conversion rates",
  },
  {
    n: "02",
    t: "Manual Processes That Reduce Efficiency",
    desc:
      "Repetitive daily workflows drain employee capacity and introduce costly human errors. We automate back-office operations and integrate intelligent CRM and ERP software.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    alt: "Team optimizing operational workflows",
  },
  {
    n: "03",
    t: "Limited Visibility In Search Engines",
    desc:
      "If your target audience cannot find you on page one, your competitors gain the advantage. Our technical SEO and content architectures improve organic visibility.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=85",
    alt: "Search engine optimization research and analytics",
  },
  {
    n: "04",
    t: "Inconsistent Brand Presentation",
    desc:
      "Fragmented design language across digital touchpoints weakens customer trust. We create cohesive brand systems and digital asset guidelines that strengthen recognition.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    alt: "Brand identity design system workspace",
  },
  {
    n: "05",
    t: "Digital Platforms That Cannot Scale",
    desc:
      "Architectural debt and monolithic web setups struggle under rapid growth. We build resilient cloud-native infrastructures designed to support increasing traffic and users.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    alt: "Scalable cloud infrastructure",
  },
];

export default function PainPoints() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef(null);

  /* ==========================================================
     AUTO ROTATION
     Only rotates while this section is visible.
     ========================================================== */
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, isInView]);

  /* ==========================================================
     SCROLL OBSERVER
     ========================================================== */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          section
            .querySelectorAll(".sr, .sr-l, .sr-r")
            .forEach((element) => {
              element.classList.add("in");
            });
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSelect = (index) => {
    setActive(index);
  };

  return (
    <section ref={sectionRef} className="pain-reference">
      <div className="pain-reference__container">
        {/* =====================================================
            TOP INTRO
        ===================================================== */}
        <div className="pain-reference__intro">
          {/* LEFT HEADING */}
          <div className="pain-reference__intro-left sr-l">
            <h2 className="pain-reference__heading">
              <span className="pain-reference__heading-line">
                Many Businesses Struggle
              </span>

              <span className="pain-reference__heading-line">
                with Digital Growth
              </span>
            </h2>
          </div>

          {/* RIGHT INTRO COPY */}
          <div className="pain-reference__intro-right sr-r">
            <p className="pain-reference__intro-description">
              Companies often face challenges that slow down
              <br className="pain-reference__desktop-break" />
              progress and limit opportunities.
            </p>

            <p className="pain-reference__intro-strong">
              These problems are common — but they are solvable.
            </p>
          </div>
        </div>

        {/* =====================================================
            INTERACTIVE CONTENT
        ===================================================== */}
        <div className="pain-reference__content">
          {/* ===================================================
              LEFT — PAIN POINT LIST
          =================================================== */}
          <div className="pain-reference__list-column sr-l">
            <div
              className="pain-reference__list"
              role="tablist"
              aria-label="Business pain points"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {items.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.n}
                    id={`painpoint-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`painpoint-panel-${index}`}
                    onClick={() => handleSelect(index)}
                    className={`pain-reference__item ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    <span className="pain-reference__number">
                      {item.n}
                    </span>

                    <span className="pain-reference__item-title">
                      {item.t}
                    </span>

                    <span className="pain-reference__arrow">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              RIGHT — ACTIVE CARD
          =================================================== */}
          <div
            className="pain-reference__visual-column sr-r"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              key={active}
              id={`painpoint-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`painpoint-tab-${active}`}
              className="pain-reference__card"
            >
              {/* IMAGE */}
              <div className="pain-reference__image-wrap">
                <Image
                  src={items[active].image}
                  alt={items[active].alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  priority={active === 0}
                  className="pain-reference__image"
                />

                <div className="pain-reference__image-overlay" />

                <div className="pain-reference__issue-badge">
                  Issue {items[active].n}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="pain-reference__card-body">
                <span className="pain-reference__card-number">
                  {items[active].n}
                </span>

                <h3 className="pain-reference__card-title">
                  {items[active].t}
                </h3>

                <p className="pain-reference__card-description">
                  {items[active].desc}
                </p>
              </div>
            </div>

            {/* =================================================
                INDICATORS
            ================================================= */}
            <div
              className="pain-reference__indicators"
              role="tablist"
              aria-label="Pain point indicators"
            >
              {items.map((item, index) => (
                <button
                  key={item.n}
                  type="button"
                  role="tab"
                  aria-label={`Show pain point ${index + 1}`}
                  aria-selected={active === index}
                  onClick={() => handleSelect(index)}
                  className={`pain-reference__indicator ${
                    active === index ? "is-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
