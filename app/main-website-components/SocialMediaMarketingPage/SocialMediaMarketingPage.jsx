import "../CapabilityFoundation/CapabilityFoundation.css";
import "./SocialMediaMarketingPage.css";
import "./SocialMediaMarketingPage.polish.css";

import Link from "next/link";
import { ArrowUpRight, BarChart3, CalendarDays, LayoutGrid, Lightbulb, MessageCircle, Share2, Target } from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";
import GrowthSignals from "../GrowthMarketingPages/GrowthSignals";

const engine = [
  { title: "Strategy", text: "Define audiences, channel roles, campaign priorities and the purpose each content stream should serve.", icon: Target },
  { title: "Content System", text: "Create repeatable formats that make publishing consistent without making the brand feel repetitive.", icon: CalendarDays },
  { title: "Community", text: "Respond, listen and learn from the conversations that reveal customer needs and brand perception.", icon: MessageCircle },
  { title: "Performance", text: "Track reach, engagement, traffic and conversion signals to refine creative and media decisions.", icon: BarChart3 },
];

const campaignSteps = [
  [Lightbulb, "Campaign idea"],
  [LayoutGrid, "Content formats"],
  [Share2, "Channel adaptation"],
  [MessageCircle, "Community signals"],
  [BarChart3, "Performance learnings"],
];

export default function SocialMediaMarketingPage() {
  return (
    <div className="cap-page growth-page social-page">
      <section id="social-media-hero" className="social-hero cap-dark">
        <div className="cap-shell social-hero__grid">
          <div data-reveal="left"><span className="cap-kicker">Social built around relevance</span><h1 className="cap-heading cap-heading--white">Turn social presence into a consistent growth system.</h1><p className="cap-copy">We connect strategy, creative production, community management and performance reporting so social media supports the wider customer journey instead of becoming a stream of disconnected posts.</p><Link className="cap-button" href="/contact">Plan your social growth <ArrowUpRight size={13} aria-hidden="true"/></Link><GrowthSignals label="Social media engagement outcomes" items={["Channel strategy", "Creative cadence", "Monthly learning loop"]}/></div>
          <div className="social-hero__stage" data-reveal="right">
            <CapabilityMedia alt="Tekcorp social media content planning workspace" className="social-hero__media" label="Content operations" priority src="/assets/Service-assets/SocialMediaMarketing/ui-workspace-v2.png" />
          </div>
        </div>
      </section>

      <section className="social-engine"><div className="cap-shell"><header><span className="cap-kicker">The content engine</span><h2 className="cap-heading">Social growth works when creative and operations move together.</h2></header><div className="social-engine__grid" role="list">{engine.map(({title,text,icon:Icon})=><article key={title} role="listitem"><span className="social-engine__icon" aria-hidden="true"><Icon size={17}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="social-channels"><div className="cap-shell social-channels__grid"><div data-reveal="left"><span className="cap-kicker">Every channel has a job</span><h2 className="cap-heading">Use different platforms for different customer moments.</h2><p className="cap-copy">Rather than reposting identical content everywhere, we define how each channel contributes to awareness, trust, education, conversation or conversion.</p></div><div className="social-channels__matrix" role="list" aria-label="Channel roles"><div role="listitem"><strong>Awareness</strong><span>Short-form creative</span><span>Campaign launches</span></div><div role="listitem"><strong>Trust</strong><span>Expert content</span><span>Customer proof</span></div><div role="listitem"><strong>Conversation</strong><span>Community response</span><span>Direct interaction</span></div><div role="listitem"><strong>Conversion</strong><span>Offer content</span><span>Retargeting signals</span></div></div></div></section>

      <section className="social-campaign"><div className="cap-shell social-campaign__grid"><CapabilityMedia alt="Tekcorp social campaign production workflow" className="social-campaign__media" label="Creative campaign system" src="/assets/Service-assets/SocialMediaMarketing/ui-workspace-v2.png" /><div data-reveal="right"><span className="cap-kicker">Creative with an operating rhythm</span><h2 className="cap-heading">Campaign ideas should survive beyond a single post.</h2><p className="cap-copy">We turn campaign themes into adaptable content systems — giving your team formats, angles and distribution logic that can continue learning across the month.</p><div className="social-campaign__steps">{campaignSteps.map(([Icon,item])=><div key={item}><span aria-hidden="true"><Icon size={15}/></span><strong>{item}</strong></div>)}</div></div></div></section>

      <section className="social-report cap-dark"><div className="cap-shell social-report__inner"><div><span className="cap-kicker">Reporting that answers useful questions</span><h2 className="cap-heading cap-heading--white">What worked, why it worked and what we change next.</h2></div><div className="social-report__cards" role="list"><article role="listitem"><span>Reach</span><strong>Are more relevant people seeing the brand?</strong></article><article role="listitem"><span>Response</span><strong>Which ideas earn interaction and attention?</strong></article><article role="listitem"><span>Action</span><strong>Which content creates visits, leads or sales?</strong></article></div></div></section>

      <section className="social-cta"><div className="cap-shell social-cta__panel"><div><span className="cap-kicker">Build a stronger social operating system</span><h2 className="cap-heading">Create a presence that feels active, useful and unmistakably yours.</h2></div><Link href="/contact" className="cap-button">Talk to our team <ArrowUpRight size={13} aria-hidden="true"/></Link></div></section>
    </div>
  );
}
