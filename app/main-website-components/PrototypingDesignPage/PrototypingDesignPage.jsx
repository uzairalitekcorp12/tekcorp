import "./PrototypingDesignPage.css";

import Image from "next/image";

import ServiceRecentProjects from
  "@/app/main-website-components/ServiceRecentProjects/ServiceRecentProjects";

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

function ProcessIcon() {
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
      <path d="M7 5h10" />
      <path d="M5 12h14" />
      <path d="M8 19h8" />
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
      <circle cx="8" cy="19" r="1.5" />
    </svg>
  );
}

const phases = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We clarify business goals, user needs, constraints and the outcomes the product must achieve.",
  },
  {
    number: "2",
    title: "Wireframe",
    description:
      "Core journeys and layouts are mapped before visual polish, reducing risk and making feedback faster.",
  },
  {
    number: "3",
    title: "Mood Board",
    description:
      "We define the visual direction, interaction language and design references that shape the experience.",
  },
  {
    number: "4",
    title: "Design",
    description:
      "High-fidelity screens, components and interaction states are refined into an implementation-ready system.",
  },
];

const designCapabilities = [
  "User research and product discovery",
  "Information architecture and user flows",
  "Low and high-fidelity prototyping",
  "Interface and interaction design",
  "Usability review and iteration",
  "Design systems and developer handoff",
];

export default function PrototypingDesignPage({ projects = [] }) {
  return (
    <div className="prototyping-design-page">
      <section className="prototyping-design-hero">
        <div className="service-page-shell prototyping-design-hero__content">
          <span className="prototyping-design-eyebrow">
            Leading the way in IT solutions
          </span>

          <h1>
            Cutting-Edge Prototyping
            <br />
            and UI/UX Design Services
          </h1>

          <div className="prototyping-design-breadcrumb" aria-label="Breadcrumb">
            <a href="/Home">TekCorp</a>
            <span>›</span>
            <a href="/Home#services">Our Solutions</a>
            <span>›</span>
            <strong>Prototyping &amp; UI/UX Design</strong>
            <ArrowUpRightIcon size={9} />
          </div>
        </div>
      </section>

      <section className="prototyping-design-overview">
        <div className="service-page-shell">
          <div className="prototyping-design-overview__grid">
            <div className="prototyping-design-overview__copy" data-reveal="left">
              <span className="prototyping-design-kicker">What&apos;s the process?</span>

              <h2>The Sweet-Spot &amp; Four Step Process</h2>

              <p>
                Strong digital products sit at the intersection of user needs, business goals and implementation reality. Our prototyping process helps teams test that intersection early, before expensive development decisions are locked in.
              </p>

              <p>
                We use rapid feedback loops to move from ambiguity to clarity, creating a design direction that is useful, intuitive and ready for engineering.
              </p>

              <a href="/Contact" className="prototyping-design-outline-link">
                Learn more
                <span><ArrowUpRightIcon /></span>
              </a>
            </div>

            <div className="prototyping-design-overview__media" data-reveal="right">
              <Image
                src="/assets/Service-assets/PrototypingDesign/sweet-spot-venn.png"
                alt="Diagram showing the sweet spot between user interface and user experience"
                fill
                sizes="(max-width: 760px) 90vw, 42vw"
                className="prototyping-design-overview__image"
              />
            </div>
          </div>

          <div className="prototyping-design-phase-grid">
            {phases.map((phase, index) => (
              <article
                key={phase.number}
                className="prototyping-design-phase-card"
                data-reveal="up"
                style={{ "--phase-delay": `${index * 70}ms` }}
              >
                <span className="prototyping-design-phase-card__icon">
                  <ProcessIcon />
                </span>

                <h3>{phase.number}. {phase.title}</h3>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prototyping-design-process">
        <div className="service-page-shell prototyping-design-process__list">
          <article className="prototyping-design-process-row">
            <div className="prototyping-design-process-row__media" data-reveal="left">
              <Image
                src="/assets/Service-assets/PrototypingDesign/process-flow.png"
                alt="Product design process flow from research to interface decisions"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </div>

            <div className="prototyping-design-process-row__copy" data-reveal="right">
              <span className="prototyping-design-kicker">What&apos;s the process?</span>
              <h2>The Sweet-Spot &amp; Four Step Process</h2>
              <p>
                We turn research into a practical product structure by mapping user journeys, priority actions, content relationships and important decision points. This gives stakeholders something concrete to review before high-fidelity design begins.
              </p>
              <p>
                The result is a clearer product direction, fewer assumptions and a smoother transition from design into development.
              </p>
              <a href="/Contact" className="prototyping-design-outline-link">
                Learn more
                <span><ArrowUpRightIcon /></span>
              </a>
            </div>
          </article>

          <article className="prototyping-design-process-row prototyping-design-process-row--reverse">
            <div className="prototyping-design-process-row__media" data-reveal="right">
              <Image
                src="/assets/Service-assets/PrototypingDesign/research-sticky-notes.png"
                alt="Research notes and affinity mapping used during UI UX discovery"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </div>

            <div className="prototyping-design-process-row__copy" data-reveal="left">
              <span className="prototyping-design-kicker">From insight to interface</span>
              <h2>Research That Turns Into Better Product Decisions</h2>
              <p>
                Insights are organized into themes, opportunities and product priorities so design choices are grounded in evidence rather than preference. We keep the process lightweight, visual and easy for teams to participate in.
              </p>
              <p>
                This creates stronger alignment between users, business stakeholders, designers and engineers before delivery moves forward.
              </p>
              <a href="/Contact" className="prototyping-design-outline-link">
                Learn more
                <span><ArrowUpRightIcon /></span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="prototyping-design-capabilities" aria-labelledby="prototyping-capabilities-title">
        <div className="service-page-shell">
          <header className="prototyping-design-capabilities__header" data-reveal="up">
            <span>What modern products need</span>
            <h2 id="prototyping-capabilities-title">
              Practical design capabilities from discovery through handoff
            </h2>
          </header>

          <div className="prototyping-design-capabilities__grid">
            {designCapabilities.map((item, index) => (
              <article
                key={item}
                data-reveal="up"
                style={{ "--capability-delay": `${index * 55}ms` }}
              >
                <span className="prototyping-design-capability-icon">
                  <ProcessIcon />
                </span>
                <h3>{item}</h3>
                <p>
                  Structured collaboration, clear documentation and implementation-aware design choices keep the work useful beyond the design file.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceRecentProjects
        projects={projects}
        eyebrow="Selected Product Work"
        title="Our Recent Projects"
        description="A selection of digital products shaped through strategy, prototyping, interface design and close engineering collaboration."
        ctaHref="/Contact"
        ctaLabel="Show all projects"
      />
    </div>
  );
}
