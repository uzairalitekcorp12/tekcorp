import "../CapabilityFoundation/CapabilityFoundation.css";
import "./ContentMarketingPage.css";
import "./ContentMarketingPage.polish.css";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  FileText,
  Mail,
  MessageSquareText,
  RefreshCw,
  Search,
  Video,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";
import GrowthSignals from "../GrowthMarketingPages/GrowthSignals";

const pillars = [
  [Search, "Research", "Start with customer questions, search demand, sales friction and market conversations."],
  [BookOpen, "Editorial Direction", "Choose themes, points of view and formats that reinforce how you want the market to understand you."],
  [FileText, "Production", "Create useful articles, guides, case-led stories and campaign assets with a consistent standard."],
  [RefreshCw, "Distribution", "Adapt ideas for search, social, email, sales enablement and campaign moments rather than publishing once."],
];

const distributionFormats = [
  [Search, "Search article", "Capture active demand"],
  [BriefcaseBusiness, "LinkedIn post", "Start expert conversations"],
  [Video, "Short-form video", "Make the idea memorable"],
  [Mail, "Email sequence", "Nurture customer intent"],
  [MessageSquareText, "Sales talking point", "Support useful conversations"],
];

const authoritySignals = [
  "Topic clusters with clear internal relationships",
  "Evergreen content refresh cycles",
  "Case-led proof and customer education",
  "Search, social and sales distribution",
  "Measurement tied to meaningful actions",
];

export default function ContentMarketingPage() {
  return (
    <div className="cap-page growth-page content-page">
      <section className="content-hero">
        <div className="cap-shell">
          <div className="content-hero__grid">
            <div className="content-hero__copy" data-reveal="left">
              <span className="cap-kicker">Content with a commercial purpose</span>
              <h1 className="cap-heading">Build authority by publishing things worth finding and sharing.</h1>
              <p className="cap-copy">
                We create content systems that connect expertise, search demand,
                customer education and distribution — helping brands become more
                useful before a sales conversation even begins.
              </p>
              <Link href="/contact" className="cap-button">
                Plan your content system <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
              <GrowthSignals
                label="Content marketing engagement outcomes"
                items={["Editorial system", "Multi-channel distribution", "Performance insights"]}
              />
            </div>

            <div className="content-hero__visual" data-reveal="right">
              <CapabilityMedia
                alt="Tekcorp editorial content planning workspace"
                className="content-hero__media"
                label="Editorial operations"
                priority
                src="/assets/Service-assets/ContentMarketing/ui-workspace-v2.png"
              />
              <div className="content-hero__visual-note">
                <span>Connected publishing</span>
                <strong>One useful idea can support an entire customer journey.</strong>
              </div>
            </div>
          </div>

          <div className="content-hero__proof" role="list">
            <article role="listitem">
              <Search size={18} aria-hidden="true" />
              <div><span>Search-led guide</span><strong>Answer a high-intent customer question.</strong><p>Demand + education</p></div>
            </article>
            <article role="listitem">
              <BookOpen size={18} aria-hidden="true" />
              <div><span>Expert perspective</span><strong>Turn experience into a useful point of view.</strong><p>Authority + trust</p></div>
            </article>
            <article role="listitem">
              <RefreshCw size={18} aria-hidden="true" />
              <div><span>Proof and reuse</span><strong>Adapt strong ideas without repeating yourself.</strong><p>Distribution + conversion</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-pillars">
        <div className="cap-shell">
          <header><span className="cap-kicker">A content operating system</span><h2 className="cap-heading">Good content is a chain of connected decisions.</h2></header>
          <div className="content-pillars__grid" role="list">
            {pillars.map(([Icon, title, text]) => (
              <article key={title} role="listitem"><span className="content-pillars__icon" aria-hidden="true"><Icon size={17} /></span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-funnel">
        <div className="cap-shell content-funnel__grid">
          <div data-reveal="left"><span className="cap-kicker">Different content for different moments</span><h2 className="cap-heading">Match the idea to the customer’s level of intent.</h2><p className="cap-copy">Not every piece needs to sell. Some content earns attention, some creates understanding, and some reduces the uncertainty that blocks a decision.</p></div>
          <div className="content-funnel__table"><div><span>Discover</span><strong>Insights, educational posts, search-led articles</strong></div><div><span>Understand</span><strong>Guides, explainers, comparisons, frameworks</strong></div><div><span>Trust</span><strong>Case studies, proof, expertise-led content</strong></div><div><span>Act</span><strong>Service pages, offers, conversion content</strong></div></div>
        </div>
      </section>

      <section className="content-repurpose">
        <div className="cap-shell">
          <div className="content-repurpose__head"><div><span className="cap-kicker">Create once. Adapt intelligently.</span><h2 className="cap-heading">Turn strong ideas into a distribution system.</h2></div><p className="cap-copy">A useful long-form insight can become search content, campaign creative, social posts, email material and sales enablement without feeling copied and pasted.</p></div>
          <div className="content-repurpose__rail">
            <div className="source"><FileText size={18} aria-hidden="true" /><strong>Core insight</strong><span>Primary editorial asset</span></div>
            {distributionFormats.map(([Icon, item, outcome]) => (
              <article key={item}><Icon size={18} aria-hidden="true" /><strong>{item}</strong><span>{outcome}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-authority cap-dark">
        <div className="cap-shell content-authority__grid">
          <CapabilityMedia
            alt="Tekcorp connected editorial operations and content knowledge library"
            className="content-authority__media"
            label="Compounding knowledge"
            src="/assets/Service-assets/ContentMarketing/ui-workspace.png"
          />
          <div data-reveal="right"><span className="cap-kicker">Build a body of useful knowledge</span><h2 className="cap-heading cap-heading--white">Authority compounds when your ideas connect.</h2><p className="cap-copy">We help organize content so new pieces strengthen older ones, important topics become easier to discover and customers can move naturally from education to action.</p><ul>{authoritySignals.map((item) => <li key={item}><Check size={13} aria-hidden="true" />{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="content-cta">
        <div className="cap-shell content-cta__panel"><div><span className="cap-kicker">Publish with more purpose</span><h2 className="cap-heading">Build a content system that gets smarter every month.</h2></div><Link href="/contact" className="cap-button">Discuss content marketing <ArrowUpRight size={13} aria-hidden="true" /></Link></div>
      </section>
    </div>
  );
}
