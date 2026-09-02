import "./ServiceCapabilityPage.css";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Blocks,
  BookOpen,
  CalendarDays,
  Check,
  Compass,
  CreditCard,
  Database,
  FileText,
  Filter,
  Gauge,
  Grid3X3,
  Layers3,
  Link2,
  Megaphone,
  MessageCircle,
  Mic2,
  Network,
  Palette,
  PhoneCall,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TerminalSquare,
  UploadCloud,
  Users,
  WalletCards,
  Workflow,
  Wrench,
  FlaskConical,
} from "lucide-react";

import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const ICONS = {
  activity: Activity,
  blocks: Blocks,
  book: BookOpen,
  calendar: CalendarDays,
  card: CreditCard,
  chart: BarChart3,
  check: Check,
  compass: Compass,
  database: Database,
  file: FileText,
  filter: Filter,
  flask: FlaskConical,
  gauge: Gauge,
  grid: Grid3X3,
  layers: Layers3,
  layout: Grid3X3,
  link: Link2,
  megaphone: Megaphone,
  message: MessageCircle,
  mic: Mic2,
  network: Network,
  palette: Palette,
  phone: PhoneCall,
  plug: Plug,
  refresh: RefreshCw,
  rocket: Rocket,
  search: Search,
  server: ServerCog,
  shield: ShieldCheck,
  shopping: ShoppingBag,
  sitemap: Network,
  sparkles: Sparkles,
  target: Target,
  terminal: TerminalSquare,
  upload: UploadCloud,
  users: Users,
  wallet: WalletCards,
  workflow: Workflow,
  wrench: Wrench,
  code: TerminalSquare,
};

function Icon({ name, size = 18 }) {
  const Component = ICONS[name] || Sparkles;
  return <Component size={size} strokeWidth={1.7} aria-hidden="true" />;
}

export default function ServiceCapabilityPage({ config }) {
  if (!config) return null;

  const {
    family,
    eyebrow,
    title,
    shortTitle,
    summary,
    introTitle,
    introBody = [],
    heroImage,
    overviewImage,
    spotlightImage,
    benefits = [],
    services = [],
    process = [],
    spotlightTitle,
    spotlightText,
    outcomes = [],
    ctaTitle,
    ctaText,
  } = config;

  return (
    <main className={`service-capability service-capability--${family}`}>
      <section className="service-capability__hero" aria-labelledby={`service-${config.slug}-title`}>
        <span className="service-capability__hero-orb service-capability__hero-orb--one" aria-hidden="true" />
        <span className="service-capability__hero-orb service-capability__hero-orb--two" aria-hidden="true" />
        <div className="service-capability__shell service-capability__hero-inner">
          <span className="service-capability__eyebrow">{eyebrow}</span>
          <h1 id={`service-${config.slug}-title`}>{title}</h1>
          <p>{summary}</p>
          <nav className="service-capability__breadcrumb" aria-label="Breadcrumb">
            <Link href="/home">Tekcorp</Link>
            <span>›</span>
            <Link href="/home#digital-solutions">Solutions</Link>
            <span>›</span>
            <strong>{shortTitle || title}</strong>
            <ArrowUpRight size={10} strokeWidth={1.8} aria-hidden="true" />
          </nav>
        </div>
      </section>

      <section className="service-capability__overview">
        <div className="service-capability__shell service-capability__overview-grid">
          <div className="service-capability__overview-copy" data-reveal="left">
            <span className="service-capability__section-label">What we solve</span>
            <h2>{introTitle}</h2>
            {introBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link href="/contact" className="service-capability__text-cta">
              Discuss your project <ArrowUpRight size={13} strokeWidth={1.8} />
            </Link>
          </div>
          <div className="service-capability__overview-media" data-reveal="right">
            <CapabilityMedia
              src={overviewImage || heroImage}
              alt={`${title} service overview`}
              priority
              sizes="(max-width: 900px) calc(100vw - 30px), 46vw"
              label={`${title} overview image`}
            />
            <span className="service-capability__media-badge">
              <strong>{family === "ai" ? "AI-ready" : family === "growth" ? "Growth-led" : "Built to scale"}</strong>
              <small>{family === "ai" ? "Grounded · Controlled · Observable" : family === "growth" ? "Strategy · Execution · Learning" : "Design · Engineering · Delivery"}</small>
            </span>
          </div>
        </div>
      </section>

      <section className="service-capability__benefits" aria-labelledby={`benefits-${config.slug}`}>
        <div className="service-capability__shell">
          <header className="service-capability__section-head" data-reveal="up">
            <span className="service-capability__section-label">Business value</span>
            <h2 id={`benefits-${config.slug}`}>What this service unlocks</h2>
            <p>Focused outcomes supported by practical delivery, measurable quality and systems that can evolve with your business.</p>
          </header>
          <div className="service-capability__benefit-grid">
            {benefits.map((item, index) => (
              <article key={item.title} className="service-capability__benefit-card" data-reveal="up" style={{ "--cap-delay": `${index * 55}ms` }}>
                <span className="service-capability__card-icon"><Icon name={item.icon} /></span>
                <span className="service-capability__card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-capability__scope" aria-labelledby={`scope-${config.slug}`}>
        <div className="service-capability__shell service-capability__scope-layout">
          <header className="service-capability__scope-head" data-reveal="left">
            <span className="service-capability__section-label">Service scope</span>
            <h2 id={`scope-${config.slug}`}>{title} capabilities</h2>
            <p>We combine the right strategy, implementation and operational detail for the specific problem — without adding complexity that does not create value.</p>
          </header>
          <div className="service-capability__scope-grid">
            {services.map((item, index) => (
              <article key={item.title} className="service-capability__scope-card" data-reveal="up" style={{ "--cap-delay": `${index * 45}ms` }}>
                <span><Icon name={item.icon} size={17} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight className="service-capability__scope-arrow" size={13} strokeWidth={1.7} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-capability__process" aria-labelledby={`process-${config.slug}`}>
        <div className="service-capability__shell">
          <header className="service-capability__section-head service-capability__section-head--center" data-reveal="up">
            <span className="service-capability__section-label">How we work</span>
            <h2 id={`process-${config.slug}`}>A clear path from problem to production</h2>
            <p>Each engagement is adapted to the work, but the operating principles stay consistent: clarity, validation, controlled delivery and measurable improvement.</p>
          </header>
          <ol className="service-capability__process-grid">
            {process.map((item, index) => (
              <li key={item.title} data-reveal="up" style={{ "--cap-delay": `${index * 65}ms` }}>
                <span className="service-capability__process-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-capability__process-line" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-capability__spotlight">
        <div className="service-capability__shell service-capability__spotlight-grid">
          <div className="service-capability__spotlight-copy" data-reveal="left">
            <span className="service-capability__section-label">Designed for the real operating environment</span>
            <h2>{spotlightTitle}</h2>
            <p>{spotlightText}</p>
            <Link href="/contact" className="service-capability__inverse-cta">
              Talk to our team <ArrowUpRight size={13} strokeWidth={1.8} />
            </Link>
          </div>
          <div className="service-capability__spotlight-media" data-reveal="right">
            <CapabilityMedia
              src={spotlightImage || heroImage}
              alt={`${title} implementation`}
              sizes="(max-width: 900px) calc(100vw - 30px), 46vw"
              label={`${title} implementation image`}
            />
          </div>
        </div>
      </section>

      {outcomes.length ? (
        <section className="service-capability__outcomes">
          <div className="service-capability__shell service-capability__outcome-grid">
            <div className="service-capability__outcome-intro">
              <span className="service-capability__section-label">What good looks like</span>
              <h2>Practical outcomes, not technology for technology’s sake.</h2>
            </div>
            <div className="service-capability__outcome-list">
              {outcomes.map((item, index) => (
                <article key={`${item.value}-${item.label}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="service-capability__cta">
        <div className="service-capability__shell">
          <div className="service-capability__cta-panel" data-reveal="up">
            <span className="service-capability__cta-grid" aria-hidden="true" />
            <div>
              <span className="service-capability__section-label">Start a focused conversation</span>
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>
            </div>
            <Link href="/contact" className="service-capability__cta-button">
              Schedule a Call <span><ArrowUpRight size={14} strokeWidth={1.8} /></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
