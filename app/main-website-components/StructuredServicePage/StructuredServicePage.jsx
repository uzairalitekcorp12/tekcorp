import "./StructuredServicePage.css";

import Image from "next/image";
import Link from "next/link";
import ArrowUpRightIcon from "@/app/_shared/Icons/ArrowUpRightIcon";
import ServiceBreadcrumb from "@/app/_shared/ServiceBreadcrumb/ServiceBreadcrumb";
import SectionHeading from "@/app/_shared/SectionHeading/SectionHeading";

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
      <path d="M4 7h16" />
      <path d="M7 12h10" />
      <path d="M9 17h6" />
      <circle cx="4" cy="7" r="1.4" />
      <circle cx="17" cy="12" r="1.4" />
      <circle cx="9" cy="17" r="1.4" />
    </svg>
  );
}

export default function StructuredServicePage({
  pageClass,
  titleId,
  eyebrow = "Leading the way in IT solutions",
  titleLines,
  breadcrumb,
  overview,
  capabilities,
  process,
}) {
  return (
    <div className={["structured-service-page", pageClass].filter(Boolean).join(" ")}>
      <section className="structured-service-hero" aria-labelledby={titleId}>
        <div className="service-page-shell structured-service-hero__content" data-reveal="up">
          <span className="structured-service-eyebrow">{eyebrow}</span>
          <h1 id={titleId}>
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <ServiceBreadcrumb
            className="structured-service-breadcrumb"
            current={breadcrumb}
          />
        </div>
      </section>

      <section className="structured-service-overview" aria-labelledby={`${titleId}-overview`}>
        <div className="service-page-shell structured-service-overview__grid">
          <div className="structured-service-overview__copy" data-reveal="left">
            <span className="structured-service-kicker">{overview.kicker}</span>
            <h2 id={`${titleId}-overview`}>{overview.title}</h2>
            {overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="structured-service-facts">
              {overview.facts.map(({ value, label }) => (
                <article key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
            <Link href="/contact" className="structured-service-link">
              {overview.cta}
              <ArrowUpRightIcon />
            </Link>
          </div>

          <div className="structured-service-overview__visual" data-reveal="right">
            <div className="structured-service-showcase">
              <Image
                src={overview.image}
                alt={overview.imageAlt}
                fill
                sizes="(max-width: 900px) calc(100vw - 30px), 500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="structured-service-capabilities" aria-labelledby={`${titleId}-capabilities`}>
        <div className="service-page-shell">
          <div className="structured-service-capabilities__intro" data-reveal="up">
            <span className="structured-service-kicker">Core capabilities</span>
            <h2 id={`${titleId}-capabilities`}>{capabilities.title}</h2>
          </div>
          <div className="structured-service-capabilities__grid">
            {capabilities.items.map(({ title, description }, index) => (
              <article key={title} data-reveal="up" style={{ "--capability-delay": `${index * 40}ms` }}>
                <span className="structured-service-capability__icon"><CapabilityIcon /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="structured-service-process" aria-labelledby={`${titleId}-process`}>
        <div className="service-page-shell">
          <SectionHeading
            className="structured-service-process__header"
            reveal="up"
            kicker="A clear route from idea to impact"
            kickerClassName="structured-service-kicker"
            title={process.title}
            titleId={`${titleId}-process`}
          />

          <div className="structured-service-process__steps">
            {process.steps.map((step, index) => (
              <article
                key={step.number}
                className={["structured-service-step", index % 2 === 1 ? "structured-service-step--reverse" : ""].filter(Boolean).join(" ")}
              >
                <div className="structured-service-step__media" data-reveal={index % 2 === 1 ? "right" : "left"}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 900px) calc(100vw - 30px), 52vw"
                  />
                  <span className="structured-service-step__media-index">{step.number}</span>
                </div>
                <div className="structured-service-step__content" data-reveal={index % 2 === 1 ? "left" : "right"}>
                  <span className="structured-service-step__number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ul>
                    {step.bullets.map((bullet) => <li key={bullet}><span />{bullet}</li>)}
                  </ul>
                  <Link href="/contact" className="structured-service-step__link">
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
