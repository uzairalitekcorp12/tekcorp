import "./OfferingsPage.css";

import { ArrowUpRight } from "lucide-react";

import Breadcrumb from "@/app/_shared/Breadcrumb/Breadcrumb";
import ContactSection from "@/app/_shared/ContactSection/ContactSection";
import SitePageLayout from "@/app/_shared/SitePageLayout/SitePageLayout";
import SolutionProductShowcase from "@/app/main-website-components/SolutionProductShowcase/SolutionProductShowcase";

export default function OfferingsPage({
  type,
  eyebrow,
  title,
  description,
  items,
  showcaseTitle,
  showcaseDescription,
  cardLabel,
}) {
  const sectionName = type === "products" ? "Products" : "Solutions";

  return (
    <SitePageLayout
      className="offerings-page"
      dataPage={type}
      navbarProps={{ initialActiveTab: "Our Solutions" }}
    >
      <section className="offerings-page__hero" aria-labelledby="offerings-page-title">
        <span className="offerings-page__orb offerings-page__orb--one" aria-hidden="true" />
        <span className="offerings-page__orb offerings-page__orb--two" aria-hidden="true" />

        <div className="offerings-page__shell">
          <span className="offerings-page__eyebrow">{eyebrow}</span>
          <h1 id="offerings-page-title">{title}</h1>
          <p>{description}</p>

          <Breadcrumb
            className="offerings-page__breadcrumb"
            items={["TekCorp", sectionName]}
            separator="›"
            trailing={(
              <ArrowUpRight
                size={10}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            )}
          />
        </div>
      </section>

      <SolutionProductShowcase
        items={items}
        eyebrow={`OUR ${sectionName.toUpperCase()}`}
        title={showcaseTitle}
        subtitle={showcaseDescription}
        sectionId={`${type}-catalog`}
        ctaHref="/contact"
        ctaLabel="Discuss Your Project"
        cardLabel={cardLabel}
      />

      <ContactSection id={`${type}-contact`} />
    </SitePageLayout>
  );
}
