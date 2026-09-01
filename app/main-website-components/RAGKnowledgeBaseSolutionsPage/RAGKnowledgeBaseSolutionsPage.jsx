import "../CapabilityFoundation/CapabilityFoundation.css";
import "./RAGKnowledgeBaseSolutionsPage.css";
import "../AICapabilityRefinements/AICapabilityRefinements.css";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const pipeline = ["Ingest", "Structure", "Index", "Retrieve", "Ground", "Answer"];

const sources = [
  [FileText, "Source Quality", "Define which repositories are trusted and how stale content is handled."],
  [ShieldCheck, "Access Boundaries", "Retrieve only the knowledge a user or workflow is authorized to access."],
  [Database, "Metadata & Structure", "Use source, department, product, and region metadata to improve retrieval precision."],
  [Search, "Evaluation", "Measure retrieval relevance, groundedness, and answer usefulness over time."],
];

const useCases = [
  ["Internal Knowledge Assistant", "Policies, procedures, guides, and internal reference material."],
  ["Customer Support Knowledge", "Product information, FAQs, troubleshooting, and service documentation."],
  ["Sales & Proposal Support", "Approved product, technical, and commercial knowledge for faster research."],
  ["Specialist Knowledge Systems", "Domain-specific information where source traceability matters."],
  ["Document Intelligence", "Search and synthesize across large, structured document collections."],
  ["Product Copilots", "Contextual guidance inside software using approved product knowledge."],
];

export default function RAGKnowledgeBaseSolutionsPage() {
  return (
    <div className="cap-page ai-capability-page rag-page">
      <section
        id="rag-hero"
        className="rag-hero cap-dark"
        aria-labelledby="rag-title"
      >
        <div className="cap-shell rag-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">AI connected to trusted knowledge</span>
            <h1 id="rag-title" className="cap-heading cap-heading--white">
              Build RAG systems that answer from the knowledge you approve.
            </h1>
            <p className="cap-copy">
              We connect AI experiences to documents, databases, and internal
              knowledge while preserving source context, access controls, citations,
              and continuous evaluation.
            </p>
            <div className="ai-hero-actions">
              <Link href="#rag-contact" className="cap-button">
                Plan a RAG system <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link href="#rag-pipeline" className="cap-button cap-button--ghost">
                Explore the pipeline <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </div>
            <ul className="ai-hero-signals" aria-label="RAG delivery priorities">
              <li>Permission-aware</li>
              <li>Source-cited</li>
              <li>Continuously evaluated</li>
            </ul>
          </div>

          <CapabilityMedia
            alt="Tekcorp RAG knowledge workspace connecting governed sources to cited answers"
            className="rag-graph"
            data-reveal="right"
            priority
            src="/assets/Service-assets/RAGKnowledgeBaseSolutions/ui-workspace-v2.png"
          />
        </div>
      </section>

      <section
        id="rag-pipeline"
        className="rag-pipeline"
        aria-labelledby="rag-pipeline-title"
      >
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">The retrieval pipeline</span>
            <h2 id="rag-pipeline-title" className="cap-heading">
              Reliable answers start before the prompt reaches the model.
            </h2>
          </header>
          <div className="rag-pipeline__rail" role="list">
            {pipeline.map((item, index) => (
              <div key={item} role="listitem"><span>0{index + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="rag-sources" aria-labelledby="rag-sources-title">
        <div className="cap-shell rag-sources__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Knowledge governance</span>
            <h2 id="rag-sources-title" className="cap-heading">
              Not every document should be equally visible to every user.
            </h2>
            <p className="cap-copy">
              We design retrieval around source quality, metadata, permissions,
              and update behavior instead of flattening everything into one pool.
            </p>
          </div>
          <div className="rag-sources__cards">
            {sources.map(([Icon, title, text]) => (
              <article key={title}>
                <Icon size={19} aria-hidden="true" />
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rag-quality cap-dark" aria-labelledby="rag-quality-title">
        <div className="cap-shell rag-quality__grid">
          <CapabilityMedia
            alt="Grounded answer with verified citations from approved sources"
            className="rag-quality__media"
            label="Grounded answer quality"
            src="/assets/Service-assets/RAGKnowledgeBaseSolutions/ui-workspace-v2.png"
          />
          <div>
            <span className="cap-kicker">Answer quality you can inspect</span>
            <h2 id="rag-quality-title" className="cap-heading cap-heading--white">
              The system should show where its answer came from.
            </h2>
            <p className="cap-copy">
              Retrieval quality, citations, and explicit fallback behavior make
              knowledge assistants easier to trust, test, and improve.
            </p>
            <div className="rag-quality__compare">
              <article><span>Without grounding</span><strong>Confident answer with an unclear source.</strong></article>
              <article className="good"><span>With controlled RAG</span><strong>Answer linked to approved, retrievable evidence.</strong></article>
            </div>
          </div>
        </div>
      </section>

      <section className="rag-usecases" aria-labelledby="rag-usecases-title">
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">Enterprise knowledge use cases</span>
            <h2 id="rag-usecases-title" className="cap-heading">
              Turn scattered information into a searchable operating layer.
            </h2>
          </header>
          <div className="rag-usecases__grid">
            {useCases.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rag-cta" aria-labelledby="rag-cta-title">
        <div className="cap-shell rag-cta__panel">
          <div>
            <span className="cap-kicker">Knowledge trapped across systems?</span>
            <h2 id="rag-cta-title" className="cap-heading">
              Design the retrieval layer before adding another generic chatbot.
            </h2>
          </div>
          <Link href="#rag-contact" className="cap-button">
            Discuss RAG architecture <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
