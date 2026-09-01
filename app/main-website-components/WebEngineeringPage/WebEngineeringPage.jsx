import "./WebEngineeringPage.css";

import Image from "next/image";
import Link from "next/link";
import ArrowUpRightIcon from "@/app/_shared/Icons/ArrowUpRightIcon";
import ServiceBreadcrumb from "@/app/_shared/ServiceBreadcrumb/ServiceBreadcrumb";
import SectionHeading from "@/app/_shared/SectionHeading/SectionHeading";

const SECONDARY_SERVICES = [
  {
    title: "Performance Optimization",
    description:
      "Improve loading speed, responsiveness and Core Web Vitals across devices.",
  },
  {
    title: "Responsive Engineering",
    description:
      "Build resilient layouts and interaction patterns for modern screens and inputs.",
  },
  {
    title: "Accessibility & WCAG",
    description:
      "Create inclusive interfaces with semantic structure, keyboard support and clear states.",
  },
  {
    title: "API & Platform Integration",
    description:
      "Connect customer experiences to internal systems, data services and third-party platforms.",
  },
  {
    title: "Security Hardening",
    description:
      "Apply practical security patterns for authentication, data handling and deployment.",
  },
  {
    title: "CMS & Headless Builds",
    description:
      "Give teams flexible content workflows with scalable publishing architecture.",
  },
  {
    title: "Conversion Engineering",
    description:
      "Reduce friction across important customer journeys and high-value interactions.",
  },
  {
    title: "Maintenance & Evolution",
    description:
      "Keep products healthy with upgrades, monitoring, refinements and continued delivery.",
  },
];

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Discovery & Technical Strategy",
    description:
      "We define the business goal, user journey, technical constraints and success criteria before architecture decisions are locked in. The result is a practical delivery plan with fewer assumptions and less avoidable rework.",
    bullets: [
      "Business and user requirements",
      "Architecture and integration planning",
      "Scope, priorities and delivery risks",
    ],
    image:
      "/assets/Service-assets/WebEngineering/process-01.jpg",
    imageAlt:
      "Product team collaborating during a web engineering discovery workshop",
  },
  {
    number: "02",
    title: "Experience & Interface Engineering",
    description:
      "Design and engineering move together. We shape responsive behavior, reusable components, content structure and interaction states so the experience remains consistent while the product grows.",
    bullets: [
      "Responsive UX and interface behavior",
      "Reusable component architecture",
      "Content, API and integration mapping",
    ],
    image:
      "/assets/Service-assets/WebEngineering/process-02.jpg",
    imageAlt:
      "Designer working on a digital interface and engineering workflow",
  },
  {
    number: "03",
    title: "Build, Validate & Launch",
    description:
      "The product is delivered in testable increments, reviewed for quality and refined for performance before release. Launch is treated as the beginning of a maintainable product lifecycle rather than the end of a project.",
    bullets: [
      "Iterative engineering and quality assurance",
      "Performance, accessibility and browser validation",
      "Production launch, monitoring and handover",
    ],
    image:
      "/assets/Service-assets/WebEngineering/process-03.jpg",
    imageAlt:
      "Technical planning documents used during web product delivery",
  },
];

function CapabilityIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

export default function WebEngineeringPage() {
  return (
    <div className="web-engineering-page">
      <section
        className="web-engineering-hero"
        aria-labelledby="web-engineering-title"
      >
        <div className="service-page-shell">
          <div
            className="web-engineering-hero__content"
            data-reveal="up"
          >
            <span className="web-engineering-hero__eyebrow">
              Leading the way in IT solutions
            </span>

            <h1 id="web-engineering-title">
              Innovative Web
              <br />
              Engineering Solutions
            </h1>

            <ServiceBreadcrumb
              className="web-engineering-breadcrumb"
              current="Web Engineering"
            />
          </div>
        </div>
      </section>

      <section
        className="web-engineering-capabilities"
        aria-labelledby="web-capabilities-title"
      >
        <div className="service-page-shell">
          <div
            className="web-engineering-capabilities__intro"
            data-reveal="up"
          >
            <span className="web-engineering-section-kicker">
              Secondary Services
            </span>

            <h2 id="web-capabilities-title">
              Transforming Visions into
              <br />
              pixel-perfect Reality
            </h2>
          </div>

          <div className="web-engineering-capabilities__grid">
            {SECONDARY_SERVICES.map((service, index) => (
              <article
                key={service.title}
                className="web-engineering-capability-card"
                data-reveal="up"
                style={{
                  "--capability-delay": `${index * 40}ms`,
                }}
              >
                <span className="web-engineering-capability-card__icon">
                  <CapabilityIcon />
                </span>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="web-engineering-process"
        aria-labelledby="web-process-title"
      >
        <div className="service-page-shell">
          <SectionHeading
            className="web-engineering-process__header"
            reveal="up"
            kicker="Simple Steps to Get Best Design"
            kickerClassName="web-engineering-section-kicker"
            title="Crucial Steps to Follow"
            titleId="web-process-title"
          />

          <div className="web-engineering-process__steps">
            {DELIVERY_STEPS.map((step, index) => (
              <article
                key={step.number}
                className={[
                  "web-engineering-step",
                  index % 2 === 1
                    ? "web-engineering-step--reverse"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div
                  className="web-engineering-step__media"
                  data-reveal={
                    index % 2 === 1
                      ? "right"
                      : "left"
                  }
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 900px) calc(100vw - 30px), 52vw"
                    priority={index === 0}
                  />

                  <span className="web-engineering-step__media-index">
                    {step.number}
                  </span>
                </div>

                <div
                  className="web-engineering-step__content"
                  data-reveal={
                    index % 2 === 1
                      ? "left"
                      : "right"
                  }
                >
                  <span className="web-engineering-step__number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  <ul>
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="web-engineering-step__link"
                  >
                    Discuss this stage
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
