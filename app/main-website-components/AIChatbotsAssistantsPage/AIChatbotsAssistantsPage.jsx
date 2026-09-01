import "../CapabilityFoundation/CapabilityFoundation.css";
import "./AIChatbotsAssistantsPage.css";
import "../AICapabilityRefinements/AICapabilityRefinements.css";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Database,
  MessageCircle,
  Plug,
  ShieldCheck,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const useCases = [
  {
    title: "Customer Support",
    text: "Answer recurring questions, guide users, and escalate conversations with useful context.",
  },
  {
    title: "Sales Assistance",
    text: "Qualify inquiries, capture requirements, and route high-intent conversations to your team.",
  },
  {
    title: "Internal Knowledge",
    text: "Help employees retrieve approved policies, procedures, and operational information faster.",
  },
  {
    title: "Product Guidance",
    text: "Give users contextual help and task guidance inside software and digital platforms.",
  },
];

const guardrails = [
  "Knowledge-source controls",
  "Role-aware information access",
  "Human handoff with conversation context",
  "Tool permission boundaries",
  "Logging and evaluation workflows",
];

const integrationSteps = [
  "Website or app",
  "AI assistant",
  "Trusted knowledge",
  "Approved tools",
  "Human or system outcome",
];

export default function AIChatbotsAssistantsPage() {
  return (
    <div className="cap-page ai-capability-page chatbot-page">
      <section
        id="ai-chatbots-hero"
        className="chatbot-hero cap-dark"
        aria-labelledby="ai-chatbots-title"
      >
        <div className="cap-shell chatbot-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">AI conversations with business context</span>
            <h1 id="ai-chatbots-title" className="cap-heading cap-heading--white">
              Build AI assistants that know what to say and when to hand off.
            </h1>
            <p className="cap-copy">
              We design conversational AI around trusted knowledge, business rules,
              approved actions, and clear escalation paths so every interaction is
              useful, accountable, and on brand.
            </p>
            <div className="ai-hero-actions">
              <Link href="#ai-chatbots-contact" className="cap-button">
                Design your AI assistant <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="#chatbot-layers" className="cap-button cap-button--ghost">
                See how it works <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </div>
            <ul className="ai-hero-signals" aria-label="Assistant delivery priorities">
              <li>Grounded answers</li>
              <li>Controlled actions</li>
              <li>Human handoff</li>
            </ul>
          </div>

          <CapabilityMedia
            alt="Tekcorp AI assistant workspace with grounded answers and human handoff controls"
            className="chatbot-window"
            data-reveal="right"
            priority
            src="/assets/Service-assets/AIChatbotsAssistants/ui-workspace-v2.png"
          />
        </div>
      </section>

      <section
        id="chatbot-layers"
        className="chatbot-layers"
        aria-labelledby="chatbot-layers-title"
      >
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">More than a chat box</span>
            <h2 id="chatbot-layers-title" className="cap-heading">
              A dependable assistant needs multiple layers working together.
            </h2>
          </header>
          <div className="chatbot-layers__stack">
            <article>
              <span aria-hidden="true"><MessageCircle size={18} /></span>
              <div>
                <h3>Conversation Experience</h3>
                <p>Clear prompts, helpful responses, memory boundaries, and natural escalation.</p>
              </div>
            </article>
            <article>
              <span aria-hidden="true"><Database size={18} /></span>
              <div>
                <h3>Trusted Knowledge</h3>
                <p>Approved documents, product data, policies, and internal sources connected through controlled retrieval.</p>
              </div>
            </article>
            <article>
              <span aria-hidden="true"><Plug size={18} /></span>
              <div>
                <h3>Business Actions</h3>
                <p>Optional tools for creating tickets, updating records, checking status, or triggering approved workflows.</p>
              </div>
            </article>
            <article>
              <span aria-hidden="true"><ShieldCheck size={18} /></span>
              <div>
                <h3>Guardrails</h3>
                <p>Permissions, refusal behavior, auditability, and handoff rules matched to workflow risk.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="chatbot-cases" aria-labelledby="chatbot-cases-title">
        <div className="cap-shell chatbot-cases__layout">
          <div>
            <span className="cap-kicker">Useful where conversations repeat</span>
            <h2 id="chatbot-cases-title" className="cap-heading">
              Different teams need different assistant behavior.
            </h2>
            <p className="cap-copy">
              We shape each assistant around the job it needs to perform, the
              knowledge it can trust, and the actions it is permitted to take.
            </p>
          </div>
          <div className="chatbot-cases__grid">
            {useCases.map(({ title, text }, index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chatbot-guardrails cap-dark" aria-labelledby="chatbot-guardrails-title">
        <div className="cap-shell chatbot-guardrails__grid">
          <CapabilityMedia
            alt="AI assistant response review showing source checks, policy checks, and a human handoff rule"
            className="chatbot-guardrails__media"
            label="Governed AI assistant"
            src="/assets/Service-assets/AIChatbotsAssistants/ui-workspace-v2.png"
          />
          <div>
            <span className="cap-kicker">Designed for controlled answers</span>
            <h2 id="chatbot-guardrails-title" className="cap-heading cap-heading--white">
              Confidence comes from knowing the boundaries.
            </h2>
            <p className="cap-copy">
              We define what the assistant can answer, where knowledge comes
              from, which actions are allowed, and when a human must take over.
            </p>
            <ul className="ai-check-list">
              {guardrails.map((item) => (
                <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="chatbot-integrations" aria-labelledby="chatbot-integrations-title">
        <div className="cap-shell">
          <div className="chatbot-integrations__head">
            <div>
              <span className="cap-kicker">Connect conversations to the business</span>
              <h2 id="chatbot-integrations-title" className="cap-heading">
                Make the assistant useful beyond answering questions.
              </h2>
            </div>
            <p className="cap-copy">
              Connect approved CRM, helpdesk, database, scheduling, and workflow
              tools so conversations can become structured business actions.
            </p>
          </div>
          <div className="chatbot-integrations__rail" role="list" aria-label="Assistant integration flow">
            {integrationSteps.flatMap((step, index) => [
              <span key={step} role="listitem">{step}</span>,
              index < integrationSteps.length - 1
                ? <ArrowRight key={`${step}-arrow`} size={15} aria-hidden="true" />
                : null,
            ])}
          </div>
        </div>
      </section>

      <section className="chatbot-cta" aria-labelledby="chatbot-cta-title">
        <div className="cap-shell chatbot-cta__panel">
          <div>
            <span className="cap-kicker">Ready to build a useful assistant?</span>
            <h2 id="chatbot-cta-title" className="cap-heading">
              Start with the workflow, knowledge, and guardrails, not the model name.
            </h2>
          </div>
          <Link href="#ai-chatbots-contact" className="cap-button">
            Discuss your AI assistant <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
