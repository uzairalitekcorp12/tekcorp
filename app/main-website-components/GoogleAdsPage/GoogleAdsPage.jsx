import "../CapabilityFoundation/CapabilityFoundation.css";
import "./GoogleAdsPage.css";

import Link from "next/link";
import { ArrowUpRight, BarChart3, DollarSign, MousePointerClick, RefreshCw, Target } from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";
import GrowthSignals from "../GrowthMarketingPages/GrowthSignals";

const loop = [
  {title:"Intent",text:"Map campaigns to the searches and customer needs most likely to create business value.",icon:Target},
  {title:"Message",text:"Align ads with landing-page promises so users arrive with the right expectation.",icon:MousePointerClick},
  {title:"Economics",text:"Track cost, conversion and downstream value instead of optimizing for clicks alone.",icon:DollarSign},
  {title:"Iteration",text:"Use search terms, audience signals and conversion data to continuously improve the account.",icon:RefreshCw},
];

export default function GoogleAdsPage(){
  return <div className="cap-page growth-page ads-page">
    <section id="google-ads-hero" className="ads-hero cap-dark"><div className="cap-shell ads-hero__grid"><div data-reveal="left"><span className="cap-kicker">Paid search with commercial discipline</span><h1 className="cap-heading cap-heading--white">Google Ads built around intent, economics and conversion.</h1><p className="cap-copy">We structure paid search around the customer journey — connecting keyword intent, campaign architecture, landing pages and measurement so budgets are managed against meaningful outcomes.</p><Link href="/contact" className="cap-button">Plan your paid search <ArrowUpRight size={13} aria-hidden="true"/></Link><GrowthSignals label="Google Ads engagement outcomes" items={["Intent-led structure", "Conversion tracking", "Budget controls"]}/></div><CapabilityMedia alt="Tekcorp Google Ads campaign performance workspace" className="ads-console" data-reveal="right" priority src="/assets/Service-assets/GoogleAds/ui-workspace-v2.png" /></div></section>

    <section className="ads-architecture"><div className="cap-shell"><header><span className="cap-kicker">Account architecture matters</span><h2 className="cap-heading">Give every campaign a clear role.</h2></header><div className="ads-architecture__flow" role="list" aria-label="Paid search account architecture"><div className="ads-root" role="listitem"><BarChart3 size={18} aria-hidden="true"/><strong>Business Goal</strong></div>{["Demand capture","High-intent services","Brand protection","Remarketing","Experimentation"].map((item,index)=><article key={item} role="listitem"><span aria-hidden="true">0{index+1}</span><strong>{item}</strong></article>)}</div></div></section>

    <section className="ads-loop"><div className="cap-shell"><div className="ads-loop__head"><div><span className="cap-kicker">Optimization loop</span><h2 className="cap-heading">Clicks are a signal. Revenue is the context.</h2></div><p className="cap-copy">We look beyond surface metrics to understand where paid search is helping the wider commercial journey — and where money is being wasted.</p></div><div className="ads-loop__grid" role="list">{loop.map(({title,text,icon:Icon},index)=><article key={title} role="listitem"><span className="ads-loop__icon" aria-hidden="true"><Icon size={18}/></span><em aria-hidden="true">0{index+1}</em><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="ads-landing"><div className="cap-shell ads-landing__grid"><div data-reveal="left"><span className="cap-kicker">Ad promise → landing experience</span><h2 className="cap-heading">The campaign does not end when someone clicks.</h2><p className="cap-copy">We align search intent, ad messaging and landing-page content so the visitor sees a clear continuation of the promise that earned the click.</p><div className="ads-landing__path"><span>Search</span><i>→</i><span>Ad</span><i>→</i><span>Landing page</span><i>→</i><span>Lead / Sale</span></div></div><CapabilityMedia alt="Tekcorp Google Ads intent-to-conversion workspace" className="ads-landing__media" label="Conversion journey" src="/assets/Service-assets/GoogleAds/ui-workspace-v2.png" /></div></section>

    <section className="ads-economics" aria-label="Paid search economics framework"><div className="cap-shell ads-economics__grid" role="list"><div role="listitem"><span aria-hidden="true">01</span><strong>Cost per qualified action</strong><p>What does useful demand cost?</p></div><div role="listitem"><span aria-hidden="true">02</span><strong>Conversion quality</strong><p>Are leads commercially relevant?</p></div><div role="listitem"><span aria-hidden="true">03</span><strong>Revenue feedback</strong><p>Which campaigns produce actual value?</p></div><div role="listitem"><span aria-hidden="true">04</span><strong>Budget reallocation</strong><p>Where should the next dollar go?</p></div></div></section>

    <section className="ads-cta"><div className="cap-shell ads-cta__inner"><div><span className="cap-kicker">Spend with better visibility</span><h2 className="cap-heading">Build a paid search system your team can understand and improve.</h2></div><Link href="/contact" className="cap-button">Discuss Google Ads <ArrowUpRight size={13} aria-hidden="true"/></Link></div></section>
  </div>
}
