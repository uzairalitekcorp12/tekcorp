import "./QualityAssuranceTestingPage.css";

import Image from "next/image";

function ArrowUpRightIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function QualityIcon({ type }) {
  const paths = {
    analysis: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="m9.5 12 1.7 1.8 3.6-4" />
      </>
    ),
    plan: (
      <>
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
      </>
    ),
    execute: (
      <>
        <path d="M5 17V9" />
        <path d="M10 17V5" />
        <path d="M15 17v-4" />
        <path d="M20 17V7" />
      </>
    ),
    report: (
      <>
        <rect x="6" y="5" width="12" height="15" rx="2" />
        <path d="M9 3h6v4H9z" />
        <path d="M9 11h6" />
        <path d="M9 15h4" />
      </>
    ),
  };

  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

const qualitySteps = [
  {
    key: "analysis",
    title: "Requirement Analysis",
    description:
      "We review requirements, documentation, user journeys and acceptance criteria to understand the expected product behavior before testing begins.",
  },
  {
    key: "plan",
    title: "Test Planning and Design",
    description:
      "The QA strategy defines test scope, environments, scenarios, coverage priorities, responsibilities and quality gates for delivery.",
  },
  {
    key: "execute",
    title: "Test Execution",
    description:
      "Structured functional, regression, integration and exploratory testing identifies defects and verifies that critical flows behave as intended.",
  },
  {
    key: "report",
    title: "Reporting and Feedback",
    description:
      "Findings are prioritized, documented and communicated clearly so teams can act quickly and improve product quality over time.",
  },
];

const benefits = [
  "Improves product quality and release confidence",
  "Reduces defects, rework and production risk",
  "Supports stronger customer experiences",
  "Validates performance across critical journeys",
  "Improves compliance with quality standards",
  "Creates repeatable feedback for continuous improvement",
];

export default function QualityAssuranceTestingPage() {
  return (
    <div className="quality-assurance-page">
      <section className="quality-assurance-hero">
        <div className="service-page-shell quality-assurance-hero__content">
          <span className="quality-assurance-eyebrow">
            Leading the way in IT solutions
          </span>

          <h1>
            Comprehensive Quality
            <br />
            Assurance and Testing
          </h1>

          <div className="quality-assurance-breadcrumb" aria-label="Breadcrumb">
            <a href="/Home">TekCorp</a>
            <span>›</span>
            <a href="/Home#services">Our Solutions</a>
            <span>›</span>
            <strong>Quality Assurance &amp; Testing</strong>
            <ArrowUpRightIcon size={9} />
          </div>
        </div>
      </section>

      <section className="quality-assurance-process" aria-labelledby="quality-process-title">
        <div className="service-page-shell">
          <header className="quality-assurance-process__header" data-reveal="up">
            <span>How we work</span>
            <h2 id="quality-process-title">The 4 keys to ensure quality assurance</h2>
          </header>

          <div className="quality-assurance-process__layout">
            <article className="quality-assurance-card quality-assurance-card--analysis" data-reveal="left">
              <span><QualityIcon type="analysis" /></span>
              <h3>{qualitySteps[0].title}</h3>
              <p>{qualitySteps[0].description}</p>
            </article>

            <article className="quality-assurance-card quality-assurance-card--plan" data-reveal="right">
              <span><QualityIcon type="plan" /></span>
              <h3>{qualitySteps[1].title}</h3>
              <p>{qualitySteps[1].description}</p>
            </article>

            <div className="quality-assurance-process__visual" data-reveal="up">
              <div className="quality-assurance-process__orbit" aria-hidden="true" />
              <Image
                src="/assets/Service-assets/QualityAssurance/qa-process-illustration.png"
                alt="Quality assurance process illustration"
                fill
                sizes="(max-width: 760px) 86vw, 38vw"
                className="quality-assurance-process__image"
              />
            </div>

            <article className="quality-assurance-card quality-assurance-card--execute" data-reveal="left">
              <span><QualityIcon type="execute" /></span>
              <h3>{qualitySteps[2].title}</h3>
              <p>{qualitySteps[2].description}</p>
            </article>

            <article className="quality-assurance-card quality-assurance-card--report" data-reveal="right">
              <span><QualityIcon type="report" /></span>
              <h3>{qualitySteps[3].title}</h3>
              <p>{qualitySteps[3].description}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="quality-assurance-benefits">
        <div className="service-page-shell quality-assurance-benefits__grid">
          <div className="quality-assurance-benefits__copy" data-reveal="left">
            <span className="quality-assurance-kicker">Why quality matters</span>
            <h2>Why you need Quality Assurance</h2>

            <p>
              Quality assurance is an essential part of reliable digital delivery. It helps teams identify problems earlier, protect critical user journeys and ship changes with greater confidence.
            </p>

            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <a href="/Contact" className="quality-assurance-button">
              Learn more
              <ArrowUpRightIcon />
            </a>
          </div>

          <div className="quality-assurance-benefits__media" data-reveal="right">
            <span className="quality-assurance-benefits__circle" aria-hidden="true" />
            <span className="quality-assurance-benefits__orbit quality-assurance-benefits__orbit--one" aria-hidden="true" />
            <span className="quality-assurance-benefits__orbit quality-assurance-benefits__orbit--two" aria-hidden="true" />

            <Image
              src="/assets/Service-assets/QualityAssurance/qa-specialist.png"
              alt="Quality assurance specialist reviewing a digital product"
              fill
              sizes="(max-width: 760px) 88vw, 42vw"
              className="quality-assurance-benefits__image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
