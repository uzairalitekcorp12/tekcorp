import "./ApplicationEngineeringPage.css";

import Image from "next/image";
import Button from "@/app/_shared/Button/Button";
import ServiceBreadcrumb from "@/app/_shared/ServiceBreadcrumb/ServiceBreadcrumb";

const PLATFORM_CAPABILITIES = [
  {
    value: "iOS & Android",
    label: "Native and cross-platform mobile applications",
  },
  {
    value: "Windows & macOS",
    label: "Desktop software for modern business workflows",
  },
  {
    value: "Cross-platform",
    label: "Shared product logic with platform-specific quality",
  },
  {
    value: "Cloud-backed",
    label: "Secure APIs, integrations and scalable infrastructure",
  },
];

const PHASES = [
  {
    number: "1",
    title: "Introduction Phase",
    lead:
      "We begin by understanding the product, its users, operating environment and the business outcome the application needs to support.",
    body:
      "Platform priorities, existing systems, product requirements and technical constraints are documented before architecture decisions are made. This gives the team a shared definition of the problem and a practical route into design and development.",
    note:
      "Product brief, requirements map and recommended application approach.",
  },
  {
    number: "2",
    title: "Design Phase",
    lead:
      "Interaction design and technical architecture are shaped together so the application feels considered on every target device.",
    body:
      "We define user flows, interface states, reusable components, navigation behavior and the data structures required behind them. Early prototypes help validate important workflows before implementation becomes expensive to change.",
    note:
      "Validated UX, interface system and application architecture.",
  },
  {
    number: "3",
    title: "Development Phase",
    lead:
      "Engineering is delivered in reviewable increments with quality, maintainability and platform behavior treated as part of every feature.",
    body:
      "Frontend, backend and integrations are developed alongside automated checks, manual quality assurance and performance reviews. Stakeholders can follow progress continuously instead of waiting until the end of the build.",
    note:
      "Production-ready application, integrations and quality-assurance evidence.",
  },
  {
    number: "4",
    title: "Going Live",
    lead:
      "Release is handled as an operational phase with deployment, distribution requirements, monitoring and post-launch support prepared in advance.",
    body:
      "Once live, telemetry and user feedback provide a structured basis for improvement. The architecture is designed so new features, integrations and product experiments can be introduced without rebuilding the application from scratch.",
    note:
      "Controlled launch, monitoring setup and a practical product-evolution plan.",
  },
];

export default function ApplicationEngineeringPage() {
  return (
    <div className="application-engineering-page">
      <section
        className="application-engineering-hero"
        aria-labelledby="application-engineering-title"
      >
        <div className="service-page-shell">
          <div
            className="application-engineering-hero__content"
            data-reveal="up"
          >
            <span className="application-engineering-hero__eyebrow">
              Leading the way in IT solutions
            </span>

            <h1 id="application-engineering-title">
              Expert Engineering for
              <br />
              Mobile &amp; Desktop Apps
            </h1>

            <ServiceBreadcrumb
              className="application-engineering-breadcrumb"
              current="Application Engineering"
            />
          </div>
        </div>
      </section>

      <section
        className="application-engineering-overview"
        aria-labelledby="application-overview-title"
      >
        <div className="service-page-shell application-engineering-overview__grid">
          <div
            className="application-engineering-overview__copy"
            data-reveal="left"
          >
            <span className="application-engineering-kicker">
              Application Engineering
            </span>

            <h2 id="application-overview-title">
              Product-focused applications for every screen.
            </h2>

            <p>
              From customer-facing mobile products to desktop systems used inside complex organizations, we combine product design, application architecture and dependable engineering into one delivery process.
            </p>

            <div className="application-engineering-platforms">
              {PLATFORM_CAPABILITIES.map((capability) => (
                <article key={capability.value}>
                  <strong>{capability.value}</strong>
                  <span>{capability.label}</span>
                </article>
              ))}
            </div>

            <Button
              href="/contact"
              appearance="outlineAction"
              icon
              className="service-inline-cta"
            >
              Discuss an application
            </Button>
          </div>

          <div
            className="application-engineering-overview__visual"
            data-reveal="right"
          >
            <div className="application-engineering-showcase">
              <span className="application-engineering-showcase__wave application-engineering-showcase__wave--one" />
              <span className="application-engineering-showcase__wave application-engineering-showcase__wave--two" />

              <span className="application-engineering-showcase__glow" />

              <Image
                src="/assets/Service-assets/ApplicationEngineering/application-showcase.png"
                alt="Mobile application interface engineered by Tekcorp"
                fill
                sizes="(max-width: 900px) min(100vw - 30px, 520px), 500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="application-engineering-phases"
        aria-labelledby="application-phases-title"
      >
        <div className="service-page-shell">
          <h2
            id="application-phases-title"
            className="application-engineering-phases__sr-title"
          >
            Application engineering delivery phases
          </h2>

          <div className="application-engineering-phases__list">
            {PHASES.map((phase) => (
              <article
                key={phase.number}
                className="application-engineering-phase"
              >
                <div className="application-engineering-phase__identity">
                  <span className="application-engineering-phase__number">
                    {phase.number}
                  </span>

                  <h3>{phase.title}</h3>
                </div>

                <div className="application-engineering-phase__content">
                  <p className="application-engineering-phase__lead">
                    {phase.lead}
                  </p>

                  <p>{phase.body}</p>

                  <p className="application-engineering-phase__note">
                    <strong>Note:</strong> {phase.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
