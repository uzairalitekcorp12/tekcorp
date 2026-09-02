import "../CapabilityFoundation/CapabilityFoundation.css";
import "./AIAgentsAutomationPage.css";
import "../AICapabilityRefinements/AICapabilityRefinements.css";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Check,
  Database,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const anatomy = [
  ["Context", "Business state, user intent, and task history."],
  ["Reasoning", "Plan the next safe and useful step."],
  ["Tools", "Use only approved systems and actions."],
  ["Control", "Respect permissions, thresholds, and approvals."],
];

const workflow = [
  ["Trigger", "A request, event, or scheduled task begins the workflow."],
  ["Understand", "The agent reads relevant context and constraints."],
  ["Plan", "It selects the approved steps required to complete the task."],
  ["Act", "Connected tools perform controlled business actions."],
  ["Verify", "Results are checked before the workflow continues."],
  ["Escalate", "A human joins when policy, risk, or confidence requires it."],
];

const useCases = [
  "Lead qualification and routing",
  "Document and data processing",
  "Support triage and escalation",
  "Internal operational workflows",
  "Research and structured reporting",
  "Multi-system task coordination",
];

const safeguards = [
  "Tool-level permission boundaries",
  "Human approval for sensitive actions",
  "Execution logs and traceability",
  "Confidence and exception handling",
  "Evaluation before wider autonomy",
];

export default function AIAgentsAutomationPage() {
  return (
    <div className="cap-page ai-capability-page agents-page">
      <section
        id="ai-agents-hero"
        className="agents-hero cap-dark"
        aria-labelledby="ai-agents-title"
      >
        <div className="cap-shell agents-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">AI that can coordinate work</span>
            <h1 id="ai-agents-title" className="cap-heading cap-heading--white">
              Build AI agents around real workflows, not demos.
            </h1>
            <p className="cap-copy">
              We design agentic systems that reason over business context, use
              approved tools, follow operating rules, and coordinate multi-step
              work with clear human oversight.
            </p>
            <div className="ai-hero-actions">
              <Link href="/contact" className="cap-button">
                Explore an agent workflow <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="#agents-anatomy" className="cap-button cap-button--ghost">
                See the architecture <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </div>
            <ul className="ai-hero-signals" aria-label="Agent delivery priorities">
              <li>Scoped tools</li>
              <li>Visible decisions</li>
              <li>Human approvals</li>
            </ul>
          </div>

          <CapabilityMedia
            alt="Tekcorp AI agent orchestration workspace with business data, actions, and approvals"
            className="agents-orbit"
            data-reveal="right"
            priority
            src="/assets/Service-assets/AIAgentsAutomation/ui-workspace-v2.png"
          />
        </div>
      </section>

      <section
        id="agents-anatomy"
        className="agents-anatomy"
        aria-labelledby="agents-anatomy-title"
      >
        <div className="cap-shell agents-anatomy__grid">
          <div>
            <span className="cap-kicker">The anatomy of a dependable agent</span>
            <h2 id="agents-anatomy-title" className="cap-heading">
              Context, reasoning, tools, and controls working as one system.
            </h2>
            <p className="cap-copy">
              An agent is useful only when it understands the task, can reach the
              right context, chooses from approved actions, and knows when to stop.
            </p>
          </div>
          <div className="agents-anatomy__layers ai-process-list" role="list">
            {anatomy.map(([title, text], index) => (
              <div key={title} role="listitem">
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-pipeline" aria-labelledby="agents-pipeline-title">
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">Orchestrated automation</span>
            <h2 id="agents-pipeline-title" className="cap-heading">
              A multi-step workflow with visible decision points.
            </h2>
          </header>
          <div className="agents-pipeline__rail">
            {workflow.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-cases cap-dark" aria-labelledby="agents-cases-title">
        <div className="cap-shell">
          <div className="agents-cases__head">
            <div>
              <span className="cap-kicker">Where agentic automation fits</span>
              <h2 id="agents-cases-title" className="cap-heading cap-heading--white">
                Use agents where work crosses systems and decisions.
              </h2>
            </div>
            <p className="cap-copy">
              We target workflows where agents can reduce repetitive coordination
              while keeping business logic, risk, and human ownership clear.
            </p>
          </div>
          <div className="agents-cases__grid">
            {useCases.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-governance" aria-labelledby="agents-governance-title">
        <div className="cap-shell agents-governance__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Human control stays in the architecture</span>
            <h2 id="agents-governance-title" className="cap-heading">
              Autonomy should increase only where risk is understood.
            </h2>
            <p className="cap-copy">
              We define permissions, approval gates, fallback behavior, and
              observability so the system can create value without becoming opaque.
            </p>
            <ul className="ai-check-list">
              {safeguards.map((item) => (
                <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="agents-governance__score" role="list" aria-label="Recommended autonomy by risk level">
            <div role="listitem"><span>Low risk</span><strong>Automate</strong></div>
            <div role="listitem"><span>Medium risk</span><strong>Verify</strong></div>
            <div role="listitem"><span>High risk</span><strong>Human approval</strong></div>
          </div>
        </div>
      </section>

      <section className="agents-cta" aria-labelledby="agents-cta-title">
        <div className="cap-shell agents-cta__panel">
          <div>
            <span className="cap-kicker">Too much manual coordination?</span>
            <h2 id="agents-cta-title" className="cap-heading">
              Map the work first. Then decide where an AI agent should help.
            </h2>
          </div>
          <Link href="/contact" className="cap-button">
            Map an agent workflow <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
