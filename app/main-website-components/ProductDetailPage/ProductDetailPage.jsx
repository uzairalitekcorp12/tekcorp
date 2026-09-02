import "./ProductDetailPage.css";

import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import Breadcrumb from "@/app/_shared/Breadcrumb/Breadcrumb";
import Button from "@/app/_shared/Button/Button";
import ContactSection from "@/app/_shared/ContactSection/ContactSection";
import SitePageLayout from "@/app/_shared/SitePageLayout/SitePageLayout";
import SolutionProductShowcase from "@/app/main-website-components/SolutionProductShowcase/SolutionProductShowcase";

const WHY_ICONS = [ShieldCheck, Sparkles, UsersRound];

export default function ProductDetailPage({
  page,
  showcaseItems = [],
}) {
  if (!page) {
    return null;
  }

  const { hero, side } = page.assets;

  return (
    <SitePageLayout
      className="product-detail"
      dataPage={`product-${page.slug}`}
      navbarProps={{
        initialActiveTab: "Our Solutions",
        ctaHref: "/contact",
      }}
      footerProps={{ ctaHref: "/contact" }}
    >
      <section className="product-detail__hero">
        <div className="product-detail__shell product-detail__hero-inner">
          <span className="product-detail__eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>

          <Breadcrumb
            className="product-detail__breadcrumb"
            items={page.breadcrumb}
            separator="›"
            trailing={(
              <ArrowUpRight
                size={9}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            )}
          />
        </div>
      </section>

      <section className="product-detail__hero-media" data-reveal="up">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
        />

        <span className="product-detail__hero-media-shade" aria-hidden="true" />
        <span className="product-detail__hero-media-dot product-detail__hero-media-dot--one" aria-hidden="true" />
        <span className="product-detail__hero-media-dot product-detail__hero-media-dot--two" aria-hidden="true" />
        <span className="product-detail__hero-media-dot product-detail__hero-media-dot--three" aria-hidden="true" />
      </section>

      <section className="product-detail__intro">
        <div className="product-detail__shell product-detail__intro-grid">
          <div className="product-detail__intro-primary" data-reveal="left">
            <h2>{page.introTitle}</h2>

            <Button
              appearance="inherit"
              className="product-detail__primary-button"
              href={page.ctaHref || "/contact"}
              icon={(
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              )}
            >
              {page.ctaLabel || "Get It Now"}
            </Button>

            <div className="product-detail__collage">
              <span className="product-detail__collage-orbit" aria-hidden="true" />

              <Image
                src={side.src}
                alt={side.alt}
                width={1100}
                height={900}
                sizes="(max-width: 720px) 100vw, 430px"
              />
            </div>
          </div>

          <div className="product-detail__intro-details" data-reveal="right">
            <p className="product-detail__lead">{page.introDescription}</p>

            <ol className="product-detail__feature-list">
              {page.features.map((feature, index) => (
                <li key={feature.title}>
                  <span className="product-detail__feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="product-detail__why">
        <div className="product-detail__shell">
          <header className="product-detail__why-heading" data-reveal="up">
            <span>Why</span>
            <h2>{page.whyTitle}</h2>
          </header>

          <div className="product-detail__why-grid">
            {page.whyItems.map((item, index) => {
              const Icon = WHY_ICONS[index % WHY_ICONS.length];

              return (
                <article
                  key={item.title}
                  className={`product-detail__why-card ${index === 0 ? "is-featured" : ""}`}
                  data-reveal="up"
                  style={{ "--product-delay": `${index * 70}ms` }}
                >
                  <span className="product-detail__why-icon">
                    <Icon size={34} strokeWidth={1.35} aria-hidden="true" />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="product-detail__why-arrow" aria-hidden="true">
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SolutionProductShowcase
        items={showcaseItems}
        eyebrow="MORE PRODUCTS"
        title="Check out our other products we've developed"
        subtitle="Explore Tekcorp products built to improve operations, collaboration and digital customer experiences."
        sectionId={`more-products-${page.slug}`}
        ctaHref="/contact"
        ctaLabel="Discuss a Product"
      />

      <ContactSection id={`contact-${page.slug}`} />
    </SitePageLayout>
  );
}
