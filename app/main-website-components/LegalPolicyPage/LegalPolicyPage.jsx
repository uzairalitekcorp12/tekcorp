import "./LegalPolicyPage.css";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  RotateCcw,
  Scale,
  ShieldCheck,
} from "lucide-react";
import LegalPolicyNavigation from "./LegalPolicyNavigation";

const POLICY_VARIANTS = {
  privacy: ShieldCheck,
  refund: RotateCcw,
  terms: Scale,
};

const LEGAL_PAGES = [
  {
    href: "/legal/privacy-policy",
    label: "Privacy Policy",
    description: "How personal information is collected, used, and protected.",
  },
  {
    href: "/legal/refund-policy",
    label: "Refund Policy",
    description: "How cancellations, completed work, and refund requests are handled.",
  },
  {
    href: "/legal/terms-and-conditions",
    label: "Terms & Conditions",
    description: "The rules that apply when using our website and services.",
  },
];

export default function LegalPolicyPage({ policy }) {
  const {
    variant = "privacy",
    eyebrow = "Legal",
    title,
    summary,
    lastUpdated,
    heroNote,
    overviewItems = [],
    sections = [],
    contactText,
    contactEmail = "support@tekcorpllc.com",
  } = policy;
  const Icon = POLICY_VARIANTS[variant] || ShieldCheck;
  const currentHref = `/legal/${policy.slug}`;
  const relatedPolicies = LEGAL_PAGES.filter(
    (legalPage) => legalPage.href !== currentHref,
  );

  return (
    <article className={`legal-policy legal-policy--${variant}`}>
      <header
        id={variant === "terms" ? "legal-terms-hero" : undefined}
        className="legal-policy__hero"
      >
        <span className="legal-policy__hero-orbit" aria-hidden="true" />

        <div className="legal-policy__shell legal-policy__hero-grid">
          <div className="legal-policy__hero-copy" data-reveal="left">
            <p className="legal-policy__eyebrow">
              <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
              <span>{eyebrow}</span>
            </p>

            <h1>{title}</h1>
            <p className="legal-policy__summary">{summary}</p>

            <div className="legal-policy__updated">
              <span>Last updated</span>
              <strong>{lastUpdated}</strong>
            </div>
          </div>

          <aside className="legal-policy__hero-card" data-reveal="right">
            <span className="legal-policy__hero-card-label">At a glance</span>
            <p>{heroNote}</p>

            {overviewItems.length > 0 ? (
              <ul>
                {overviewItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </aside>
        </div>
      </header>

      <div className="legal-policy__shell legal-policy__body">
        <LegalPolicyNavigation
          sections={sections}
          title={title}
          lastUpdated={lastUpdated}
        />

        <div className="legal-policy__content" data-legal-policy-content>
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="legal-policy__section">
              <div className="legal-policy__section-heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
              </div>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.items?.length > 0 ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="legal-policy__contact" aria-labelledby="legal-contact-title">
            <div>
              <span>Questions about this policy?</span>
              <h2 id="legal-contact-title">Contact TekCorp</h2>
              <p>{contactText}</p>
            </div>

            <a href={`mailto:${contactEmail}`}>
              <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
              <span>{contactEmail}</span>
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </section>

          <section className="legal-policy__related" aria-labelledby="related-policies-title">
            <div className="legal-policy__related-heading">
              <span>Legal centre</span>
              <h2 id="related-policies-title">Related policies</h2>
            </div>

            <div className="legal-policy__related-grid">
              {relatedPolicies.map((legalPage) => (
                <Link key={legalPage.href} href={legalPage.href}>
                  <span>{legalPage.label}</span>
                  <p>{legalPage.description}</p>
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
