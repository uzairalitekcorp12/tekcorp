import "../CapabilityFoundation/CapabilityFoundation.css";
import "./SearchEngineOptimizationPage.css";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Check, Gauge, Search, Target } from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";
import GrowthSignals from "../GrowthMarketingPages/GrowthSignals";

const diagnostics = [
  { title: "Technical SEO", text: "Crawlability, performance, structured data, indexation and architecture that search engines can understand.", icon: Gauge },
  { title: "Search Intent", text: "Map real demand to the pages, topics and journeys that should exist across your site.", icon: Search },
  { title: "Content Authority", text: "Build useful topic depth and internal relationships instead of publishing isolated articles.", icon: Target },
  { title: "Measurement", text: "Connect rankings, clicks, leads and revenue so organic growth is judged by business outcomes.", icon: BarChart3 },
];

const flywheel = ["Research demand", "Fix technical friction", "Build useful pages", "Earn authority", "Measure and refine"];

export default function SearchEngineOptimizationPage() {
  return (
    <div className="cap-page growth-page seo-page">
      <section className="seo-hero">
        <div className="cap-shell seo-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Search visibility with business context</span>
            <h1 className="cap-heading">SEO that connects rankings to real growth.</h1>
            <p className="cap-copy">We combine technical SEO, search-intent research, content architecture and measurement to help the right customers find your business — and understand what happens after they arrive.</p>
            <div className="seo-hero__actions"><Link href="/contact" className="cap-button">Plan your SEO growth <ArrowUpRight size={13} aria-hidden="true"/></Link><Link href="/case-studies" className="cap-button cap-button--ghost">View growth work</Link></div>
            <GrowthSignals
              label="SEO engagement outcomes"
              items={["Technical health", "Content roadmap", "Revenue attribution"]}
            />
          </div>
          <CapabilityMedia alt="Tekcorp organic search reporting and optimization workspace" className="seo-rankboard" data-reveal="right" priority src="/assets/Service-assets/SearchEngineOptimization/ui-workspace-v2.png" />
        </div>
      </section>

      <section className="seo-diagnostic">
        <div className="cap-shell">
          <header data-reveal="up"><span className="cap-kicker">Start with the system, not random keywords</span><h2 className="cap-heading">Four areas we diagnose before scaling organic growth.</h2></header>
          <div className="seo-diagnostic__grid" role="list">
            {diagnostics.map(({title,text,icon:Icon}, index)=><article key={title} role="listitem"><span className="seo-diagnostic__num" aria-hidden="true">0{index+1}</span><span className="seo-diagnostic__icon" aria-hidden="true"><Icon size={18} strokeWidth={1.6}/></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="seo-flywheel cap-dark">
        <div className="cap-shell seo-flywheel__grid">
          <div data-reveal="left"><span className="cap-kicker">Organic growth compounds</span><h2 className="cap-heading cap-heading--white">SEO works best as a connected flywheel.</h2><p className="cap-copy">Technical quality makes pages discoverable. Useful content answers demand. Authority strengthens trust. Measurement tells us where to invest next.</p></div>
          <div className="seo-flywheel__wheel" data-reveal="right" role="img" aria-label="Organic growth flywheel: research demand, fix technical friction, build useful pages, earn authority, then measure and refine">
            <span className="seo-flywheel__core">Organic<br/>Growth</span>
            {flywheel.map((item,index)=><div key={item} className={`seo-flywheel__node node-${index+1}`}><span>0{index+1}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="seo-opportunity">
        <div className="cap-shell seo-opportunity__grid">
          <CapabilityMedia alt="Tekcorp search opportunity and content planning workspace" className="seo-opportunity__media" label="Search opportunity map" src="/assets/Service-assets/SearchEngineOptimization/ui-workspace-v2.png" />
          <div data-reveal="right"><span className="cap-kicker">Build the pages search demand deserves</span><h2 className="cap-heading">Structure content around how people actually search.</h2><p className="cap-copy">We identify where search demand overlaps with your commercial priorities, then turn that into a deliberate site architecture rather than a disconnected publishing calendar.</p><ul>{["Commercial landing-page opportunities","Topic clusters and internal linking","Local and regional search visibility","Content refresh and consolidation","Conversion-aware organic landing pages"].map(item=><li key={item}><Check size={13} aria-hidden="true"/>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="seo-measure" aria-label="SEO measurement framework"><div className="cap-shell seo-measure__panel" role="list"><div role="listitem"><span aria-hidden="true">01</span><strong>Visibility</strong><p>Are qualified customers finding you?</p></div><div role="listitem"><span aria-hidden="true">02</span><strong>Engagement</strong><p>Are the right pages answering their intent?</p></div><div role="listitem"><span aria-hidden="true">03</span><strong>Conversion</strong><p>Does organic traffic become opportunity?</p></div><div role="listitem"><span aria-hidden="true">04</span><strong>Revenue</strong><p>Which organic investments create value?</p></div></div></section>

      <section className="seo-cta"><div className="cap-shell seo-cta__inner"><div><span className="cap-kicker">Make search a measurable growth channel</span><h2 className="cap-heading">Build organic visibility on a stronger technical and strategic foundation.</h2></div><Link href="/contact" className="cap-button">Discuss your SEO roadmap <ArrowUpRight size={13} aria-hidden="true"/></Link></div></section>
    </div>
  );
}
