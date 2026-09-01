import "../CapabilityFoundation/CapabilityFoundation.css";
import "./MarketingStrategyPage.css";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Compass, Route, Users } from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";
import GrowthSignals from "../GrowthMarketingPages/GrowthSignals";

const quadrants = [
  {title:"Market Position",text:"Define the category, problem and competitive context your brand should own.",icon:Compass},
  {title:"Priority Audiences",text:"Identify who matters most, what they need and which signals indicate real buying intent.",icon:Users},
  {title:"Channel Role",text:"Decide where awareness, trust, demand capture and conversion should happen.",icon:Route},
  {title:"Measurement",text:"Create a measurement model that connects activity to opportunity and revenue.",icon:BarChart3},
];

export default function MarketingStrategyPage(){
  return <div className="cap-page growth-page strategy-page">
    <section className="strategy-hero"><div className="cap-shell strategy-hero__grid"><div data-reveal="left"><span className="cap-kicker">Direction before activity</span><h1 className="cap-heading">A marketing strategy should make the next decision easier.</h1><p className="cap-copy">We turn business priorities, customer insight and channel economics into a practical growth roadmap your team can execute, measure and improve.</p><Link href="/contact" className="cap-button">Build your growth roadmap <ArrowUpRight size={13} aria-hidden="true"/></Link><GrowthSignals label="Marketing strategy engagement outcomes" items={["90-day priorities", "Clear channel roles", "Measurement model"]}/></div><CapabilityMedia alt="Tekcorp marketing strategy planning workspace" className="strategy-canvas" data-reveal="right" priority src="/assets/Service-assets/MarketingStrategy/ui-workspace-v2.png" /></div></section>

    <section className="strategy-foundation"><div className="cap-shell"><header><span className="cap-kicker">The strategy foundation</span><h2 className="cap-heading">Align the business, customer and channel before launching campaigns.</h2></header><div className="strategy-foundation__grid" role="list">{quadrants.map(({title,text,icon:Icon},index)=><article key={title} role="listitem"><span aria-hidden="true"><Icon size={18}/></span><em aria-hidden="true">0{index+1}</em><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="strategy-roadmap"><div className="cap-shell"><div className="strategy-roadmap__head"><div><span className="cap-kicker">From ambiguity to execution</span><h2 className="cap-heading">A roadmap your team can actually operate.</h2></div><p className="cap-copy">We move from diagnosis to priorities, then translate those priorities into a channel plan, campaign rhythm and learning loop.</p></div><ol>{[
      ["Diagnose","Understand current performance, market context and operational constraints."],
      ["Prioritize","Choose the audiences, offers and opportunities with the strongest business case."],
      ["Architect","Define channel roles, journeys, campaigns and measurement logic."],
      ["Activate","Launch the highest-priority initiatives with clear ownership and cadence."],
      ["Learn","Review results, identify signals and update the strategy as the market responds."],
    ].map(([title,text],index)=><li key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

    <section className="strategy-decisions cap-dark"><div className="cap-shell strategy-decisions__grid"><div><span className="cap-kicker">A strategy is a filter</span><h2 className="cap-heading cap-heading--white">Know what to do — and what not to do.</h2><p className="cap-copy">Strong strategy protects the team from scattered activity. Every channel, campaign and content decision should have a reason to exist.</p></div><div className="strategy-decisions__cards" role="list"><article role="listitem"><span>Invest</span><strong>Where customer demand and business economics align.</strong></article><article role="listitem"><span>Test</span><strong>Where uncertainty is meaningful but learnable.</strong></article><article role="listitem"><span>Stop</span><strong>Where activity creates noise without business value.</strong></article></div></div></section>

    <section className="strategy-cta"><div className="cap-shell strategy-cta__panel"><div><span className="cap-kicker">Need clearer growth direction?</span><h2 className="cap-heading">Turn marketing activity into a focused operating plan.</h2></div><Link href="/contact" className="cap-button">Plan your strategy <ArrowUpRight size={13} aria-hidden="true"/></Link></div></section>
  </div>
}
