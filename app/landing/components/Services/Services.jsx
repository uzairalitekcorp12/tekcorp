"use client";
import "./Services.css";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "AI Solutions",
    sub: "Smart systems are designed to automate operations and improve efficiency",
    body: [
      "Businesses rely on intelligent tools to streamline workflows and enhance customer interactions.",
      "Our AI solutions help companies simplify processes and operate more effectively.",
    ],
    italic: "Technology designed for smarter business operations.",
    tags: [
      "AI Automation",
      "AI Agents",
      "AI Chatbots",
      "CRM Automation",
      "Custom AI Development",
    ],
  },
  {
    title: "Website & Software Development",
    sub: "Reliable platforms are built for performance and scalability.",
    body: [
      "A modern website or software platform is essential for building a strong digital presence.",
      "Our development team builds secure and scalable systems designed to support business growth.",
    ],
    italic: "Digital platforms are built for reliability and performance.",
    tags: [
      "WordPress Development",
      "Shopify Development",
      "Custom Website Development",
      "Software Development",
    ],
  },
  {
    title: "Search Engine Optimization",
    sub: "Helping businesses appear where customers are searching.",
    body: [
      "Search visibility plays a major role in digital success. Our SEO strategies focus on improving rankings, increasing traffic, and strengthening online presence.",
    ],
    italic: "More visibility leads to stronger opportunities.",
    tags: [
      "Technical SEO",
      "On-Page Optimization",
      "Local SEO",
      "Content Optimization",
      "SEO Strategy",
    ],
  },
  {
    title: "Logo & Branding",
    sub: "A strong brand builds recognition and trust.",
    body: [
      "Our design team creates visual identities that help businesses communicate clearly and stand out in competitive markets.",
    ],
    italic: "A brand that reflects the strength of your business.",
    tags: [
      "Logo Design",
      "UI / UX Design",
      "Brand Identity Development",
      "Design Systems",
    ],
  },
  {
    title: "EdTech Platform Development",
    sub: "Digital learning platforms designed for modern education.",
    body: [
      "Education organizations require reliable systems to deliver engaging online learning experiences.",
      "We develop scalable platforms designed for accessibility and performance.",
    ],
    italic: "Technology built to support digital learning.",
    tags: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Education Mobile Apps",
      "Custom EdTech Solutions",
    ],
    half: true,
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        section.classList.add("services-reference--visible");

        observer.unobserve(section);
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-reference"
    >
      <div className="services-reference__container">

        {/* ================================================
            SECTION HEADER
        ================================================ */}
        <div className="services-reference__header">
          <h2 className="services-reference__heading">
            <span className="services-reference__heading-line">
              Digital Services Designed
            </span>

            <span className="services-reference__heading-line">
              for Modern Businesses
            </span>
          </h2>

          <p className="services-reference__intro">
            We combine technology, strategy, and design to build
            <br className="services-reference__desktop-break" />
            digital systems that deliver measurable results.
          </p>
        </div>

        {/* ================================================
            SERVICES GRID
        ================================================ */}
        <div className="services-reference__grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`services-reference__card ${
                service.half
                  ? "services-reference__card--half"
                  : ""
              }`}
              style={{
                "--service-delay": `${index * 90}ms`,
              }}
            >
              {/* TITLE */}
              <h3 className="services-reference__card-title">
                {service.title}
              </h3>

              {/* SHORT INTRO */}
              <p className="services-reference__card-subtitle">
                {service.sub}
              </p>

              {/* BODY */}
              <div className="services-reference__body">
                {service.body.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* ITALIC LINE */}
              {service.italic && (
                <p className="services-reference__italic">
                  {service.italic}
                </p>
              )}

              {/* TAGS */}
              <div className="services-reference__tags">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="services-reference__tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
