import "./PrototypingDesignPage.css";

import Image from "next/image";
import Button from "@/app/_shared/Button/Button";
import ServiceBreadcrumb from "@/app/_shared/ServiceBreadcrumb/ServiceBreadcrumb";
import SplitContent from "@/app/_shared/SplitContent/SplitContent";
import SectionHeading from "@/app/_shared/SectionHeading/SectionHeading";


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
  {
    title: "User research and product discovery",
    description:
      "Clarify the people, problems and evidence that should guide the product.",
  },
  {
    title: "Information architecture and user flows",
    description:
      "Organize content and decisions into journeys people can understand and complete.",
  },
  {
    title: "Low and high-fidelity prototyping",
    description:
      "Test structure early, then refine the interactions that matter before engineering begins.",
  },
  {
    title: "Interface and interaction design",
    description:
      "Create clear screens, responsive behavior and purposeful feedback across key states.",
  },
  {
    title: "Usability review and iteration",
    description:
      "Find friction through structured review and turn observations into focused improvements.",
  },
  {
    title: "Design systems and developer handoff",
    description:
      "Package reusable components, states and guidance so implementation stays consistent.",
  },
];

export default function PrototypingDesignPage() {
  return (
    <div className="prototyping-design-page">
      <section
        className="prototyping-design-hero"
        aria-labelledby="prototyping-design-title"
      >
        <div className="service-page-shell prototyping-design-hero__content">
          <span className="prototyping-design-eyebrow">
            Leading the way in IT solutions
          </span>

          <h1 id="prototyping-design-title">
            Cutting-Edge Prototyping
            <br />
            and UI/UX Design Services
          </h1>

          <ServiceBreadcrumb
            className="prototyping-design-breadcrumb"
            current="Prototyping & UI/UX Design"
          />
        </div>
      </section>

      <section
        className="prototyping-design-overview"
        aria-labelledby="prototyping-overview-title"
      >
        <div className="service-page-shell">
          <SplitContent
            className="prototyping-design-overview__grid"
            copyClassName="prototyping-design-overview__copy"
            mediaClassName="prototyping-design-overview__media"
            copy={
              <>
              <span className="prototyping-design-kicker">
                Align user, business and delivery needs
              </span>

              <h2 id="prototyping-overview-title">
                Find the product sweet spot before you build.
              </h2>

              <p>
                Strong digital products sit at the intersection of user needs, business goals and implementation reality. Our prototyping process helps teams test that intersection early, before expensive development decisions are locked in.
              </p>

              <p>
                We use rapid feedback loops to move from ambiguity to clarity, creating a design direction that is useful, intuitive and ready for engineering.
              </p>

              <Button href="/contact" appearance="outlineAction" icon className="service-inline-cta">
                Start a discovery workshop
              </Button>
              </>
            }
            media={
              <Image
                src="/assets/Service-assets/PrototypingDesign/sweet-spot-venn.png"
                alt="Diagram showing the sweet spot between user interface and user experience"
                fill
                sizes="(max-width: 760px) 90vw, 42vw"
                className="prototyping-design-overview__image"
                priority
              />
            }
          />

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

      <section
        className="prototyping-design-process"
        aria-label="Prototype planning and research"
      >
        <div className="service-page-shell prototyping-design-process__list">
          <SplitContent
            as="article"
            className="prototyping-design-process-row"
            mediaFirst
            mediaClassName="prototyping-design-process-row__media"
            mediaReveal="left"
            copyClassName="prototyping-design-process-row__copy"
            copyReveal="right"
            media={
              <Image
                src="/assets/Service-assets/PrototypingDesign/process-flow.png"
                alt="Product design process flow from research to interface decisions"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            }
            copy={
              <>
              <span className="prototyping-design-kicker">Map the experience</span>
              <h2>Turn complex journeys into testable product flows.</h2>
              <p>
                We turn research into a practical product structure by mapping user journeys, priority actions, content relationships and important decision points. This gives stakeholders something concrete to review before high-fidelity design begins.
              </p>
              <p>
                The result is a clearer product direction, fewer assumptions and a smoother transition from design into development.
              </p>
              <Button href="/contact" appearance="outlineAction" icon className="service-inline-cta">
                Plan a prototype
              </Button>
              </>
            }
          />

          <SplitContent
            as="article"
            className="prototyping-design-process-row prototyping-design-process-row--reverse"
            mediaFirst
            mediaClassName="prototyping-design-process-row__media"
            mediaReveal="right"
            copyClassName="prototyping-design-process-row__copy"
            copyReveal="left"
            media={
              <Image
                src="/assets/Service-assets/PrototypingDesign/research-sticky-notes.png"
                alt="Research notes and affinity mapping used during UI UX discovery"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            }
            copy={
              <>
              <span className="prototyping-design-kicker">From insight to interface</span>
              <h2>Research that turns into better product decisions.</h2>
              <p>
                Insights are organized into themes, opportunities and product priorities so design choices are grounded in evidence rather than preference. We keep the process lightweight, visual and easy for teams to participate in.
              </p>
              <p>
                This creates stronger alignment between users, business stakeholders, designers and engineers before delivery moves forward.
              </p>
              <Button href="/contact" appearance="outlineAction" icon className="service-inline-cta">
                Discuss user research
              </Button>
              </>
            }
          />
        </div>
      </section>

      <section className="prototyping-design-capabilities" aria-labelledby="prototyping-capabilities-title">
        <div className="service-page-shell">
          <SectionHeading
            className="prototyping-design-capabilities__header"
            reveal="up"
            kicker="What modern products need"
            title="Practical design capabilities from discovery through handoff"
            titleId="prototyping-capabilities-title"
          />

          <div className="prototyping-design-capabilities__grid">
            {designCapabilities.map(({ title, description }, index) => (
              <article
                key={title}
                data-reveal="up"
                style={{ "--capability-delay": `${index * 55}ms` }}
              >
                <span className="prototyping-design-capability-icon">
                  <ProcessIcon />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
