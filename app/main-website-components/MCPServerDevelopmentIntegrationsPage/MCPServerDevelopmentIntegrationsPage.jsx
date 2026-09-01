import "../CapabilityFoundation/CapabilityFoundation.css";
import "./MCPServerDevelopmentIntegrationsPage.css";
import "../AICapabilityRefinements/AICapabilityRefinements.css";

import Link from "next/link";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowUpRight,
  Check,
  Database,
  LockKeyhole,
  Server,
  Wrench,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const protocolLayers = [
  ["Client Layer", "The AI application requests capabilities and context through a standard protocol."],
  ["MCP Server", "The server describes available tools, resources, and constraints through a controlled interface."],
  ["Business Systems", "Databases, APIs, services, and workflows stay behind defined permissions and adapters."],
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

const systems = ["CRM", "ERP", "Knowledge Base", "Internal APIs", "Databases", "Workflow Tools"];

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

          <CapabilityMedia
            alt="Tekcorp MCP server integration workspace with controlled tools, resources, and policies"
            className="mcp-architecture"
            data-reveal="right"
            priority
            src="/assets/Service-assets/MCPServerDevelopmentIntegrations/ui-workspace-v2.png"
          />
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
          <div className="mcp-model__zones">
            {protocolLayers.map(([title, text], index) => (
              <article key={title} className={index === 1 ? "zone-server" : undefined}>
                <span>0{index + 1}</span><strong>{title}</strong><p>{text}</p>
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
          <div className="mcp-capabilities__cards">
            {capabilities.map(([Icon, label, title, text]) => (
              <article key={label}>
                <Icon size={19} aria-hidden="true" /><span>{label}</span><strong>{title}</strong><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mcp-security cap-dark" aria-labelledby="mcp-security-title">
        <div className="cap-shell mcp-security__grid">
          <div
            className="mcp-security__boundary"
            role="img"
            aria-label="MCP server protected by authentication, policy, and validation controls"
          >
            <div className="inner"><Server size={22} /><strong>MCP Server</strong><span>Policy boundary</span></div>
            <span className="lock l1"><LockKeyhole size={15} /></span>
            <span className="lock l2"><LockKeyhole size={15} /></span>
            <span className="lock l3"><LockKeyhole size={15} /></span>
          </div>
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

      <section className="mcp-integration" aria-labelledby="mcp-integration-title">
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
          <div className="mcp-integration__map" role="list" aria-label="Systems available through an MCP capability layer">
            {systems.map((system, index) => (
              <span key={system} role="listitem" style={{ "--mcp-delay": `${index * 80}ms` }}>{system}</span>
            ))}
            <strong>MCP Capability Layer</strong>
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
