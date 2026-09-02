import "../CapabilityFoundation/CapabilityFoundation.css";
import "./VoiceAIConversationalAgentsPage.css";
import "../AICapabilityRefinements/AICapabilityRefinements.css";
import "./VoiceAIConversationalAgentsPage.polish.css";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Headphones,
  Mic,
  PhoneCall,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const lifecycle = [
  ["Listen", "Capture the caller clearly and detect natural turn-taking."],
  ["Understand", "Interpret intent, key details, and conversation context."],
  ["Respond", "Generate a concise, brand-appropriate spoken response."],
  ["Act", "Use approved tools for scheduling, lookup, or workflow actions."],
  ["Handoff", "Transfer to a human with context when the situation requires it."],
];

const controls = [
  "Approved action lists",
  "Role-aware data access",
  "Call recording and audit options",
  "Escalation thresholds",
  "Conversation evaluation",
];

export default function VoiceAIConversationalAgentsPage() {
  return (
    <div className="cap-page ai-capability-page voice-page">
      <section
        id="voice-ai-hero"
        className="voice-hero cap-dark"
        aria-labelledby="voice-ai-title"
      >
        <div className="cap-shell voice-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Conversational AI beyond the screen</span>
            <h1 id="voice-ai-title" className="cap-heading cap-heading--white">
              Build voice AI that sounds useful, not robotic.
            </h1>
            <p className="cap-copy">
              We design voice agents around natural turn-taking, trusted business
              knowledge, approved actions, and clear human handoff for support,
              qualification, and operational workflows.
            </p>
            <div className="ai-hero-actions">
              <Link href="#voice-ai-contact" className="cap-button">
                Design a voice workflow <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="#voice-lifecycle" className="cap-button cap-button--ghost">
                See the call flow <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </div>
            <ul className="ai-hero-signals" aria-label="Voice AI delivery priorities">
              <li>Low-latency turns</li>
              <li>Graceful recovery</li>
              <li>Contextual handoff</li>
            </ul>
          </div>

          <CapabilityMedia
            alt="Tekcorp voice AI conversation workspace with live transcript and handoff controls"
            className="voice-call"
            data-reveal="right"
            priority
            src="/assets/Service-assets/VoiceAIConversationalAgents/ui-workspace-v2.png"
          />
        </div>
      </section>

      <section
        id="voice-lifecycle"
        className="voice-lifecycle"
        aria-labelledby="voice-lifecycle-title"
      >
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">The conversation lifecycle</span>
            <h2 id="voice-lifecycle-title" className="cap-heading">
              A voice experience is a sequence of decisions measured in seconds.
            </h2>
          </header>
          <ol className="ai-process-list">
            {lifecycle.map(([title, text], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="voice-cases" aria-labelledby="voice-cases-title">
        <div className="cap-shell voice-cases__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Where voice AI can help</span>
            <h2 id="voice-cases-title" className="cap-heading">
              Use voice where conversation is already part of the workflow.
            </h2>
            <p className="cap-copy">
              The best use cases have repeatable intent, accessible information,
              and clear rules for what the agent may do or when it must transfer.
            </p>
          </div>
          <div className="voice-cases__stack">
            <article>
              <PhoneCall size={19} aria-hidden="true" />
              <div><strong>Inbound Qualification</strong><p>Capture requirements, answer approved questions, and route qualified opportunities.</p></div>
            </article>
            <article>
              <Headphones size={19} aria-hidden="true" />
              <div><strong>Support Triage</strong><p>Handle common questions, identify the issue, and transfer with context when necessary.</p></div>
            </article>
            <article>
              <Mic size={19} aria-hidden="true" />
              <div><strong>Appointment Workflows</strong><p>Support scheduling, confirmations, reminders, and basic changes through natural conversation.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="voice-quality cap-dark" aria-labelledby="voice-quality-title">
        <div className="cap-shell">
          <div className="voice-quality__head">
            <div>
              <span className="cap-kicker">Quality is more than a natural voice</span>
              <h2 id="voice-quality-title" className="cap-heading cap-heading--white">
                The experience depends on speed, accuracy, and recovery.
              </h2>
            </div>
            <p className="cap-copy">
              A voice agent must respond quickly, handle interruptions, recognize
              uncertainty, and recover gracefully when a call moves outside scope.
            </p>
          </div>
          <div className="voice-quality__grid">
            <article><span>Latency</span><strong>Keep the conversation feeling responsive.</strong></article>
            <article><span>Recognition</span><strong>Understand intent across real-world speech.</strong></article>
            <article><span>Recovery</span><strong>Clarify ambiguity instead of pretending certainty.</strong></article>
            <article><span>Handoff</span><strong>Transfer the conversation with useful context.</strong></article>
          </div>
        </div>
      </section>

      <section className="voice-control" aria-labelledby="voice-control-title">
        <div className="cap-shell voice-control__grid">
          <div
            className="voice-control__diagram"
            role="img"
            aria-label="Caller connected through voice AI to trusted knowledge, approved tools, and a human team"
          >
            <span className="v-user">Caller</span>
            <ArrowRight className="voice-control__arrow" size={17} aria-hidden="true" />
            <span className="v-agent">Voice AI</span>
            <ArrowRight className="voice-control__arrow" size={17} aria-hidden="true" />
            <span>Knowledge</span>
            <b aria-hidden="true">+</b>
            <span>Tools</span>
            <ArrowRight className="voice-control__arrow" size={17} aria-hidden="true" />
            <span className="v-human">Human</span>
          </div>
          <div>
            <span className="cap-kicker">Controlled conversational actions</span>
            <h2 id="voice-control-title" className="cap-heading">
              Connect voice to the business without giving it unlimited access.
            </h2>
            <p className="cap-copy">
              We scope tools and permissions around the workflow, with explicit
              handling for sensitive actions, uncertainty, and exceptions.
            </p>
            <ul className="ai-check-list">
              {controls.map((item) => (
                <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="voice-cta" aria-labelledby="voice-cta-title">
        <div className="cap-shell voice-cta__panel">
          <div>
            <span className="cap-kicker">Thinking about voice AI?</span>
            <h2 id="voice-cta-title" className="cap-heading">
              Start with a conversation your team already handles repeatedly.
            </h2>
          </div>
          <Link href="#voice-ai-contact" className="cap-button">
            Explore voice automation <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
