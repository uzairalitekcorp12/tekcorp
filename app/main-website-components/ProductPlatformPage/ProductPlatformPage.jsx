import "./ProductPlatformPage.css";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  ReceiptText,
  Users,
  WalletCards,
  Sparkles,
} from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const ICONS = {
  book: BookOpen,
  calendar: CalendarDays,
  chart: BarChart3,
  check: CheckCircle2,
  file: FileText,
  receipt: ReceiptText,
  users: Users,
  wallet: WalletCards,
};

function Icon({ name }) {
  const Component = ICONS[name] || Sparkles;
  return <Component size={19} strokeWidth={1.7} aria-hidden="true" />;
}

export default function ProductPlatformPage({ config }) {
  if (!config) return null;

  return (
    <main className="product-platform">
      <section className="product-platform__hero" aria-labelledby={`product-${config.title}-title`}>
        <div className="product-platform__shell product-platform__hero-inner">
          <span className="product-platform__eyebrow">{config.eyebrow}</span>
          <h1 id={`product-${config.title}-title`}>{config.title}</h1>
          <h2>{config.subtitle}</h2>
          <p>{config.summary}</p>
          <div className="product-platform__hero-actions">
            <Link href="/contact" className="product-platform__primary-cta">Request a Demo <ArrowUpRight size={13} strokeWidth={1.8} /></Link>
            <span>Product by Tekcorp</span>
          </div>
        </div>
        <div className="product-platform__hero-visual">
          <CapabilityMedia
            src={config.heroImage}
            alt={`${config.title} product interface`}
            priority
            sizes="100vw"
            label={`${config.title} hero image`}
          />
        </div>
      </section>

      <section className="product-platform__intro">
        <div className="product-platform__shell product-platform__intro-grid">
          <div className="product-platform__intro-copy" data-reveal="left">
            <span className="product-platform__section-label">Built for day-to-day operations</span>
            <h2>{config.introTitle}</h2>
            {config.introBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link href="/contact" className="product-platform__small-cta">Talk to our team <ArrowUpRight size={12} strokeWidth={1.8} /></Link>
          </div>
          <div className="product-platform__feature-grid" data-reveal="right">
            {config.features.map((feature, index) => (
              <article key={feature.title}>
                <span className="product-platform__feature-icon"><Icon name={feature.icon} /></span>
                <span className="product-platform__feature-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-platform__dashboard">
        <div className="product-platform__shell product-platform__dashboard-grid">
          <div className="product-platform__dashboard-media" data-reveal="left">
            <CapabilityMedia
              src={config.dashboardImage}
              alt={`${config.title} dashboard`}
              sizes="(max-width: 900px) calc(100vw - 30px), 50vw"
              label={`${config.title} dashboard image`}
            />
          </div>
          <div className="product-platform__module-copy" data-reveal="right">
            <span className="product-platform__section-label">Platform modules</span>
            <h2>Everything important, organized around the work.</h2>
            <div className="product-platform__module-grid">
              {config.modules.map((module, index) => (
                <article key={module.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-platform__workflow">
        <div className="product-platform__shell">
          <header className="product-platform__section-head" data-reveal="up">
            <span className="product-platform__section-label">Simple operating flow</span>
            <h2>Designed to make the next step obvious.</h2>
            <p>The interface and workflow are structured to reduce unnecessary clicks, scattered information and avoidable administrative friction.</p>
          </header>
          <div className="product-platform__workflow-grid">
            {config.workflow.map((step, index) => (
              <article key={step.title} data-reveal="up" style={{ "--product-delay": `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="product-platform__workflow-media" data-reveal="up">
            <CapabilityMedia
              src={config.workflowImage}
              alt={`${config.title} workflow`}
              sizes="(max-width: 1180px) calc(100vw - 30px), 1180px"
              label={`${config.title} workflow image`}
            />
          </div>
        </div>
      </section>

      <section className="product-platform__proof">
        <div className="product-platform__shell product-platform__proof-grid">
          <div>
            <span className="product-platform__section-label">Product principles</span>
            <h2>Useful software should feel clear before it feels impressive.</h2>
          </div>
          <div className="product-platform__metric-grid">
            {config.metrics.map((metric, index) => (
              <article key={`${metric.value}-${metric.label}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-platform__cta">
        <div className="product-platform__shell product-platform__cta-panel">
          <div className="product-platform__cta-media">
            <CapabilityMedia
              src={config.ctaImage}
              alt={`${config.title} business use`}
              sizes="(max-width: 900px) calc(100vw - 30px), 46vw"
              label={`${config.title} CTA image`}
            />
          </div>
          <div className="product-platform__cta-copy">
            <span className="product-platform__section-label">Ready to explore it?</span>
            <h2>{config.ctaTitle}</h2>
            <p>{config.ctaText}</p>
            <Link href="/contact" className="product-platform__cta-button">Request a Demo <span><ArrowUpRight size={14} strokeWidth={1.8} /></span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
