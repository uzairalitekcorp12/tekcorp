"use client";

import "./CaseStudyDetail.css";

import Link from "next/link";
import Button from "@/app/_shared/Button/Button";

import {
  useEffect,
} from "react";

import {
  ArrowUpRight,
} from "lucide-react";

import CmsImage from "../CmsImage/CmsImage";
import {
  contentImage,
} from "../CmsImage/contentImages";


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function paragraphs(value) {
  const source =
    textValue(value);

  if (!source) {
    return [];
  }

  return source
    .split(/\r?\n\s*\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}


function normalizeSections(sections) {
  return Array.isArray(sections)
    ? sections
        .map((section) => ({
          heading:
            textValue(section?.heading),

          content:
            paragraphs(section?.content),
        }))
        .filter(
          (section) =>
            section.heading ||
            section.content.length,
        )
    : [];
}


function normalizeGallery(gallery) {
  if (!Array.isArray(gallery)) {
    return [];
  }

  return Array.from(
    new Set(
      gallery
        .map((item) =>
          typeof item === "string"
            ? item.trim()
            : "",
        )
        .filter(Boolean),
    ),
  );
}


function DetailImage({
  src,
  alt,
  priority = false,
  sizes,
}) {
  return (
    <span className="case-detail__image">
      <CmsImage
        src={
          src ||
          contentImage(
            {
              title:
                alt,
            },
            "case-study",
          )
        }
        alt={alt}
        fallbackClassName="case-detail__image-fallback"
        fallbackLabel={alt}
        priority={priority}
        sizes={sizes}
      />
    </span>
  );
}


export default function CaseStudyDetail({
  caseStudy = {},
}) {
  const slug =
    textValue(caseStudy.slug);

  useEffect(() => {
    window.scrollTo(
      0,
      0,
    );
  }, [slug]);

  const title =
    textValue(caseStudy.title) ||
    "TekCorp Case Study";

  const category =
    textValue(caseStudy.category) ||
    "Digital Product";

  const description =
    textValue(
      caseStudy.shortDescription,
    );

  const sections =
    normalizeSections(
      caseStudy.sections,
    );

  const gallery =
    normalizeGallery(
      caseStudy.gallery,
    );

  const primary =
    sections[0] || {
      heading:
        "Project overview",

      content:
        [],
    };

  const remaining =
    sections.slice(1);

  return (
    <article className="case-detail tek-content-route">
      <section
        className="case-detail__masthead"
        aria-labelledby="case-detail-title"
      >
        <div className="tek-content-shell case-detail__masthead-inner">
          <p>
            Leading the way in IT solutions
          </p>

          <h1 id="case-detail-title">
            {title}
          </h1>

          <nav
            className="case-detail__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link href="/home">
              TekCorp
            </Link>

            <span aria-hidden="true">
              &gt;
            </span>

            <Link href="/case-studies">
              Case Studies
            </Link>

            <span aria-hidden="true">
              &gt;
            </span>

            <strong>
              {title}
            </strong>

            <ArrowUpRight
              size={12}
              strokeWidth={1.8}
            />
          </nav>
        </div>
      </section>


      <main className="tek-content-shell case-detail__content">
        <figure className="case-detail__hero-image">
          <DetailImage
            src={
              caseStudy.heroImage ||
              caseStudy.thumbnail
            }
            alt={title}
            priority
            sizes="(max-width: 1240px) calc(100vw - 30px), 1180px"
          />

          <figcaption>
            {category}
          </figcaption>
        </figure>


        <div
          className={[
            "case-detail__story",
            remaining.length
              ? "has-sections"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <section className="case-detail__lead">
            <h2>
              {primary.heading || title}
            </h2>

            {description ? (
              <p>
                {description}
              </p>
            ) : null}

            {primary.content.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ),
            )}

            <Button
              className="case-detail__contact"
              appearance="box"
              href={`/contact?topic=case-study&project=${encodeURIComponent(title)}`}
            >
              <span>
                Contact Now
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </Button>
          </section>


          {remaining.length ? (
            <div className="case-detail__sections">
              {remaining.map(
                (section, index) => (
                  <section
                    className="case-detail__section"
                    key={`${section.heading}-${index}`}
                  >
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      {section.heading ? (
                        <h3>
                          {section.heading}
                        </h3>
                      ) : null}

                      {section.content.map(
                        (paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                  </section>
                ),
              )}
            </div>
          ) : null}
        </div>


        {gallery.length ? (
          <section
            className="case-detail__gallery"
            aria-label="Project gallery"
          >
            {gallery.map(
              (source, index) => (
                <figure
                  className="case-detail__gallery-item"
                  key={`${source}-${index}`}
                >
                  <DetailImage
                    src={source}
                    alt={`${title} project view ${index + 1}`}
                    sizes="(max-width: 700px) calc(100vw - 30px), 50vw"
                  />

                  <figcaption>
                    Project view {String(index + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              ),
            )}
          </section>
        ) : null}
      </main>
    </article>
  );
}
