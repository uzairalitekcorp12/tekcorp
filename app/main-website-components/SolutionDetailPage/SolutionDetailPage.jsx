import "./SolutionDetailPage.css";

import Image from "next/image";
import {
  ArrowUpRight,
  Database,
  Gauge,
  Layers3,
  Link2,
  Workflow,
} from "lucide-react";

import Breadcrumb from "@/app/_shared/Breadcrumb/Breadcrumb";
import Button from "@/app/_shared/Button/Button";
import SitePageLayout from "@/app/_shared/SitePageLayout/SitePageLayout";

const BENEFIT_ICONS = [Gauge, Database, Workflow, Layers3];

function SolutionHero({ page }) {
  return (
    <section className="solution-detail__hero">
      <div className="solution-detail__shell solution-detail__hero-inner">
        <span className="solution-detail__eyebrow">{page.eyebrow}</span>
        <h1>{page.title}</h1>

        <Breadcrumb
          className="solution-detail__breadcrumb"
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
  );
}

function Overview({ page }) {
  const { overview } = page;
  const image = page.assets.hero || overview.image;
  const imageAlt = page.assets.hero?.alt || overview.imageAlt;

  return (
    <section className="solution-detail__overview-section">
      <div className={`solution-detail__overview ${overview.reverse ? "is-reversed" : ""}`}>
        <div
          className="solution-detail__overview-media"
          data-reveal={overview.reverse ? "right" : "left"}
        >
          {page.theme === "api" ? (
            <span className="solution-detail__image-accent" aria-hidden="true" />
          ) : null}
          <Image
            src={image.src || image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div
          className="solution-detail__overview-copy"
          data-reveal={overview.reverse ? "left" : "right"}
        >
          {overview.eyebrow ? (
            <span className="solution-detail__small-label">{overview.eyebrow}</span>
          ) : null}

          <h2>{overview.title}</h2>
          <p>{overview.description}</p>

          <Button
            appearance="inherit"
            className="solution-detail__outline-button"
            href={overview.ctaHref || "/contact"}
            icon={(
              <ArrowUpRight
                size={12}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            )}
          >
            {overview.ctaLabel || "Learn More"}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Benefits({ page }) {
  if (!page.benefits?.length) {
    return null;
  }

  const benefitsImage = page.assets.footerUp;

  if (benefitsImage) {
    return (
      <section className={`solution-detail__benefits-section ${page.benefitsDark ? "is-dark" : ""}`}>
        <div className="solution-detail__shell solution-detail__benefits-split">
          <div className="solution-detail__benefits-copy" data-reveal="left">
            <span className="solution-detail__small-label">Benefits</span>
            <h2>{page.benefitsTitle}</h2>

            <div className="solution-detail__benefit-list">
              {page.benefits.map((benefit) => (
                <article key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="solution-detail__benefits-image" data-reveal="right">
            <Image
              src={benefitsImage.src}
              alt={benefitsImage.alt || page.benefitsTitle}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`solution-detail__benefits-section ${page.benefitsDark ? "is-dark" : ""}`}>
      <div className="solution-detail__shell">
        <header className="solution-detail__section-heading" data-reveal="up">
          <span>Benefits</span>
          <h2>{page.benefitsTitle}</h2>
        </header>

        <div className="solution-detail__benefit-grid">
          {page.benefits.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
            const numberedTitle = page.theme === "erp" || page.theme === "api";

            return (
              <article
                key={benefit.title}
                className="solution-detail__benefit-card"
                data-reveal="up"
                style={{ "--solution-delay": `${index * 65}ms` }}
              >
                <span className="solution-detail__benefit-icon">
                  {page.theme === "crm" ? (
                    <strong>{index + 1}.</strong>
                  ) : (
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  )}
                </span>

                <h3>{numberedTitle ? `${index + 1}. ${benefit.title}` : benefit.title}</h3>
                {benefit.description ? <p>{benefit.description}</p> : null}

                {benefit.bullets?.length ? (
                  <ul>
                    {benefit.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerStrip({ page }) {
  if (!page.partners?.length) {
    return null;
  }

  return (
    <section className="solution-detail__partners" aria-label="Integration platforms">
      <div className="solution-detail__partners-track">
        <strong>{page.partnersLabel}</strong>
        <div>
          {[...page.partners, ...page.partners].map((partner, index) => (
            <span key={`${partner}-${index}`}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesHeading({ page, centered = false }) {
  return (
    <header className={`solution-detail__services-heading ${centered ? "is-centered" : ""}`} data-reveal="up">
      <span className="solution-detail__small-label">Services</span>
      <h2>{page.servicesTitle}</h2>
    </header>
  );
}

function ServiceCards({ page }) {
  return (
    <div className="solution-detail__services-grid">
      {page.services.map((service, index) => {
        const Icon = index % 2 === 0 ? Link2 : Database;

        return (
          <article
            key={service.title}
            className="solution-detail__service-card"
            data-reveal="up"
            style={{ "--solution-delay": `${index * 60}ms` }}
          >
            <span><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}

function ServiceLines({ page }) {
  return (
    <div className="solution-detail__service-lines">
      {page.services.map((service) => (
        <article key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}

function Services({ page }) {
  if (!page.services?.length) {
    return null;
  }

  const serviceImage = page.assets.side;
  const usesLines = page.servicesLayout === "lines";
  const imageOnLeft = page.servicesImagePosition === "left";
  const headingPosition = serviceImage
    ? (page.theme === "cloud" ? "center" : usesLines ? "content" : imageOnLeft ? "image" : "top")
    : "top";
  const heading = <ServicesHeading page={page} centered={headingPosition === "center"} />;
  const serviceContent = (
    <div className={`solution-detail__services-content ${usesLines ? "is-lines" : ""}`}>
      {headingPosition === "content" ? heading : null}
      {usesLines ? <ServiceLines page={page} /> : <ServiceCards page={page} />}
    </div>
  );
  const media = serviceImage ? (
    <div className="solution-detail__services-image" data-reveal="right">
      {headingPosition === "image" ? heading : null}
      <div className="solution-detail__services-image-frame">
        <Image
          src={serviceImage.src}
          alt={serviceImage.alt || page.servicesTitle}
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
        />
      </div>
    </div>
  ) : null;

  return (
    <section className={`solution-detail__services-section ${page.darkServices ? "is-dark" : ""}`}>
      <div className="solution-detail__shell">
        {headingPosition === "top" || headingPosition === "center" ? heading : null}

        {media ? (
          <div className={`solution-detail__services-layout ${imageOnLeft ? "is-image-left" : ""} ${usesLines ? "is-lines" : ""}`}>
            {imageOnLeft ? media : serviceContent}
            {imageOnLeft ? serviceContent : media}
          </div>
        ) : serviceContent}
      </div>
    </section>
  );
}

function SolutionCta({ cta, assets }) {
  if (!cta) {
    return null;
  }

  const backgroundImage = assets.footer?.src || cta.image;
  const backgroundImageAlt = assets.footer?.alt || cta.imageAlt || "";
  const ctaPerson = assets.ctaPerson;

  return (
    <section className={`solution-detail__cta-section solution-detail__cta-section--${cta.variant || "graphic"}`}>
      {backgroundImage ? (
        <Image
          className="solution-detail__cta-background"
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          sizes="100vw"
        />
      ) : null}

      <span className="solution-detail__cta-overlay" aria-hidden="true" />

      {ctaPerson ? (
        <Image
          className="solution-detail__cta-person"
          src={ctaPerson.src}
          alt=""
          width={493}
          height={676}
          sizes="(max-width: 700px) 42vw, 460px"
        />
      ) : null}

      <div className="solution-detail__cta-content" data-reveal="up">
        <h2>{cta.title}</h2>
        <p>{cta.description}</p>

        <Button
          appearance="inherit"
          href={cta.buttonHref || "/contact"}
          icon={(
            <ArrowUpRight
              size={13}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          )}
        >
          {cta.buttonLabel || "Schedule a Call"}
        </Button>
      </div>
    </section>
  );
}

export default function SolutionDetailPage({ page }) {
  if (!page) {
    return null;
  }

  const servicesFirst = page.theme === "cloud" || page.theme === "reports";

  return (
    <SitePageLayout
      className={`solution-detail solution-detail--${page.theme || "default"}`}
      dataPage={`solution-${page.slug}`}
      navbarProps={{
        initialActiveTab: "Our Solutions",
        ctaHref: "/contact",
      }}
      footerProps={{ ctaHref: "/contact" }}
    >
      <SolutionHero page={page} />

      <Overview page={page} />

      {servicesFirst ? (
        <>
          <Services page={page} />
          <Benefits page={page} />
        </>
      ) : (
        <>
          <Benefits page={page} />
          <PartnerStrip page={page} />
          <Services page={page} />
        </>
      )}

      <SolutionCta
        cta={page.cta}
        assets={page.assets}
      />
    </SitePageLayout>
  );
}
