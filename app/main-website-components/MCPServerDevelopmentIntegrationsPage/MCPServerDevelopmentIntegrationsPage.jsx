import "../CapabilityFoundation/CapabilityFoundation.css";
import "./MCPServerDevelopmentIntegrationsPage.css";
import "../AICapabilityRefinements/AICapabilityRefinements.css";
import "./MCPServerDevelopmentIntegrationsPage.polish.css";

import Link from "next/link";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Boxes,
  Braces,
  Check,
  Database,
  GitBranch,
  Server,
  ShieldCheck,
  UsersRound,
  Wrench,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const protocolLayers = [
  [Bot, "Client Layer", "The AI application requests capabilities and context through a standard protocol."],
  [Server, "MCP Server", "The server describes available tools, resources, and constraints through a controlled interface."],
  [Database, "Business Systems", "Databases, APIs, services, and workflows stay behind defined permissions and adapters."],
];

const capabilities = [
  [Wrench, "Tools", "Approved actions", "Operations the client may request, such as lookup, create, update, or trigger."],
  [Database, "Resources", "Contextual data", "Documents, records, or structured information exposed for controlled reading."],
  [Server, "Prompts", "Reusable patterns", "Guided prompt structures for common, repeatable workflows."],
];

const safeguards = [
  "Authentication and client trust",
  "Explicit tool and resource scopes",
  "Input validation and safe adapters",
  "Audit and observability",
  "Environment and secret management",
];

const systems = [
  [UsersRound, "CRM", "Customer context"],
  [Boxes, "ERP", "Operational records"],
  [BookOpen, "Knowledge Base", "Approved knowledge"],
  [Braces, "Internal APIs", "Business services"],
  [Database, "Databases", "Scoped records"],
  [GitBranch, "Workflow Tools", "Approved actions"],
];

function McpLiveMap() {
  return (
    <div
      className="mcp-live-map"
      data-reveal="right"
      role="img"
      aria-label="Animated MCP capability map connecting an AI client to approved business systems through scoped policies"
    >
      <div className="mcp-live-map__top">
        <span><i aria-hidden="true" />Live capability map</span>
        <strong><ShieldCheck size={14} aria-hidden="true" />Scoped access</strong>
      </div>
      <div className="mcp-live-map__canvas">
        <div className="mcp-live-node mcp-live-node--client">
          <Bot size={25} aria-hidden="true" />
          <span>AI client</span>
          <strong>Requests context or an action</strong>
          <small>Compatible assistant or agent</small>
        </div>
        <span className="mcp-live-connector" aria-hidden="true"><i /><ArrowLeftRight size={17} /></span>
        <div className="mcp-live-node mcp-live-node--core">
          <span className="mcp-live-node__pulse" aria-hidden="true" />
          <Server size={27} aria-hidden="true" />
          <span>MCP server</span>
          <strong>Policy + capability layer</strong>
          <small>Auth · schemas · audit</small>
        </div>
        <span className="mcp-live-connector" aria-hidden="true"><i /><ArrowLeftRight size={17} /></span>
        <div className="mcp-live-node mcp-live-node--systems">
          <Database size={25} aria-hidden="true" />
          <span>Business systems</span>
          <strong>Only approved resources</strong>
          <div><small>CRM</small><small>APIs</small><small>Workflows</small></div>
        </div>
      </div>
      <div className="mcp-live-map__footer" aria-hidden="true">
        <span><Wrench size={13} />Tools</span>
        <span><Database size={13} />Resources</span>
        <span><Braces size={13} />Prompts</span>
      </div>
    </div>
  );
}

export default function MCPServerDevelopmentIntegrationsPage() {
  return (
    <div className="cap-page ai-capability-page mcp-page">
      <section
        id="mcp-hero"
        className="mcp-hero cap-dark"
        aria-labelledby="mcp-title"
      >
        <div className="cap-shell mcp-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Structured context for AI applications</span>
            <h1 id="mcp-title" className="cap-heading cap-heading--white">
              Build MCP servers that expose the right tools and context safely.
            </h1>
            <p className="cap-copy">
              We design Model Context Protocol servers that give compatible AI
              applications controlled access to business tools, resources, and
              contextual data through an explicit capability layer.
            </p>
            <div className="ai-hero-actions">
              <Link href="#mcp-contact" className="cap-button">
                Discuss an MCP integration <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="#mcp-model" className="cap-button cap-button--ghost">
                See the protocol model <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </div>
            <ul className="ai-hero-signals" aria-label="MCP delivery priorities">
              <li>Explicit schemas</li>
              <li>Scoped capabilities</li>
              <li>Auditable access</li>
            </ul>
          </div>

          <McpLiveMap />
        </div>
      </section>

      <section id="mcp-model" className="mcp-model" aria-labelledby="mcp-model-title">
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">Protocol architecture</span>
            <h2 id="mcp-model-title" className="cap-heading">
              Separate the AI experience from the systems it needs to use.
            </h2>
          </header>
          <div className="mcp-model__zones" role="list">
            {protocolLayers.map(([Icon, title, text], index) => (
              <article key={title} className={index === 1 ? "zone-server" : undefined} role="listitem">
                <span className="mcp-model__icon" aria-hidden="true"><Icon size={19} /></span>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mcp-capabilities" aria-labelledby="mcp-capabilities-title">
        <div className="cap-shell mcp-capabilities__grid">
          <div>
            <span className="cap-kicker">Expose capabilities deliberately</span>
            <h2 id="mcp-capabilities-title" className="cap-heading">
              Tools, resources, and prompts each have a different job.
            </h2>
            <p className="cap-copy">
              We make the server discoverable and predictable with explicit
              schemas, useful descriptions, and only the capabilities each client needs.
            </p>
          </div>
          <div className="mcp-capabilities__cards" role="list">
            {capabilities.map(([Icon, label, title, text]) => (
              <article key={label} role="listitem">
                <div className="mcp-capability__label">
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </div>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mcp-security" className="mcp-security cap-dark" aria-labelledby="mcp-security-title">
        <div className="cap-shell mcp-security__grid">
          <CapabilityMedia
            alt="Tekcorp secured MCP capability layer connecting AI clients to approved resources, tools, and policy controls"
            className="mcp-security__media"
            label="Secured MCP capability layer"
            src="/assets/Service-assets/MCPServerDevelopmentIntegrations/ui-workspace-v2.png"
          />
          <div>
            <span className="cap-kicker">Security belongs in the design</span>
            <h2 id="mcp-security-title" className="cap-heading cap-heading--white">
              A protocol connection should not become unlimited system access.
            </h2>
            <p className="cap-copy">
              Authentication, tool scoping, validation, data boundaries, and audit
              trails are designed alongside the capabilities, not added afterward.
            </p>
            <ul className="ai-check-list">
              {safeguards.map((item) => (
                <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="mcp-integration" className="mcp-integration" aria-labelledby="mcp-integration-title">
        <div className="cap-shell">
          <div className="mcp-integration__head">
            <div>
              <span className="cap-kicker">Integration without hardwiring the AI layer</span>
              <h2 id="mcp-integration-title" className="cap-heading">
                Create a cleaner boundary between AI clients and business systems.
              </h2>
            </div>
            <p className="cap-copy">
              MCP standardizes how compatible clients discover capabilities while
              each business system continues to enforce its own operating rules.
            </p>
          </div>
          <div className="mcp-integration__map" aria-label="Systems available through an MCP capability layer">
            <div className="mcp-integration__systems" role="list">
              {systems.map(([Icon, system, description], index) => (
                <article key={system} role="listitem" style={{ "--mcp-delay": `${index * 80}ms` }}>
                  <Icon size={18} aria-hidden="true" />
                  <span><strong>{system}</strong><small>{description}</small></span>
                  <i aria-hidden="true" />
                </article>
              ))}
            </div>
            <div className="mcp-integration__bridge" aria-hidden="true">
              <span>Scoped schemas</span><ArrowLeftRight size={20} /><i />
            </div>
            <div className="mcp-integration__layer">
              <ShieldCheck size={25} aria-hidden="true" />
              <span>Unified, controlled access</span>
              <strong>MCP Capability Layer</strong>
              <small>Authentication · permissions · validation · observability</small>
            </div>
          </div>
        </div>
      </section>

      <section className="mcp-cta" aria-labelledby="mcp-cta-title">
        <div className="cap-shell mcp-cta__panel">
          <div>
            <span className="cap-kicker">Planning an AI integration layer?</span>
            <h2 id="mcp-cta-title" className="cap-heading">
              Define the capabilities, boundaries, and adapters before exposing tools.
            </h2>
          </div>
          <Link href="#mcp-contact" className="cap-button">
            Plan an MCP server <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
