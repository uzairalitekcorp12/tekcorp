"use client";

import "./HomePortfolio.css";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  A11y,
  Autoplay,
  Pagination,
} from "swiper/modules";

import CmsImage from
  "@/app/main-website-components/CmsImage/CmsImage";

import "swiper/css";
import "swiper/css/pagination";


const swiperModules = [
  Autoplay,
  Pagination,
  A11y,
];


const emptyCaseStudies = [];


function ProjectCard({
  project,
  index,
}) {
  return (
    <article className="lp1-success-card">
      <Link
        className="lp1-success-card__visual"
        href={project.href}
        aria-label={`View ${project.title} case study`}
      >
        <CmsImage
          src={project.image}
          alt=""
          sizes="(max-width: 560px) 92vw, (max-width: 900px) 47vw, 28vw"
        />

        <span
          className="lp1-success-card__teal"
          aria-hidden="true"
        />

        <span
          className="lp1-success-card__shade"
          aria-hidden="true"
        />

        <span
          className="lp1-success-card__sweep"
          aria-hidden="true"
        />

        <span className="lp1-success-card__number">
          {String(
            index + 1,
          ).padStart(
            2,
            "0",
          )}
        </span>

        <span className="lp1-success-card__category">
          {project.category}
        </span>

        <h3 className="lp1-success-card__image-title">
          {project.title}
        </h3>

        <span className="lp1-success-card__floating-arrow">
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </span>
      </Link>

      <div className="lp1-success-card__body">
        <div className="lp1-success-card__meta">
          <strong className="lp1-success-card__client">
            {project.client}
          </strong>

          <span className="lp1-success-card__meta-line" />
        </div>

        <p className="lp1-success-card__description">
          {project.description}
        </p>

        <Link
          className="lp1-success-card__read"
          href={project.href}
        >
          <span>
            Read More
          </span>

          <ArrowRight
            size={13}
            strokeWidth={1.7}
          />
        </Link>
      </div>
    </article>
  );
}


export default function HomePortfolio({
  caseStudies = emptyCaseStudies,
}) {
  const projects =
    Array.isArray(
      caseStudies,
    )
      ? caseStudies
          .filter(
            (caseStudy) =>
              caseStudy?.slug &&
              caseStudy?.title,
          )
          .map(
            (caseStudy) => ({
              id:
                caseStudy.id ||
                caseStudy._id ||
                caseStudy.slug,

              title:
                caseStudy.title,

              category:
                caseStudy.category ||
                "Case Study",

              client:
                caseStudy.client ||
                caseStudy.category ||
                "TekCorp",

              description:
                caseStudy.description ||
                caseStudy.shortDescription ||
                "Explore how TekCorp delivered a focused digital solution.",

              image:
                caseStudy.image ||
                caseStudy.thumbnail ||
                caseStudy.heroImage ||
                "",

              href:
                `/case-studies/${encodeURIComponent(
                  caseStudy.slug,
                )}`,
            }),
          )
      : [];

  const hasMultipleProjects =
    projects.length > 1;

  return (
    <section
      className="lp1-portfolio"
      id="portfolio-lp1"
    >
      <div className="lp1-shell">
        <header
          className="lp1-portfolio__heading"
          data-reveal="up"
        >
          <p className="lp1-portfolio__eyebrow">
            SUCCESS STORIES OF
          </p>

          <h2 className="lp1-portfolio__title">
            <span>
              Digital
            </span>

            {" "}

            <em>
              Marketing
            </em>
          </h2>

          <p className="lp1-portfolio__subtitle">
            Technology, strategy and digital experiences
            created around real business challenges.
          </p>
        </header>
      </div>

      {projects.length > 0 ? (
        <div
          className="lp1-portfolio__slider-stage"
          data-reveal="up"
        >
          <div
            className="lp1-portfolio__glow"
            aria-hidden="true"
          />

          <Swiper
            modules={swiperModules}
            className="lp1-portfolio-swiper"
            loop={projects.length > 4}
            speed={1000}
            grabCursor={hasMultipleProjects}
            watchSlidesProgress={true}
            slideToClickedSlide={hasMultipleProjects}
            roundLengths={true}
            autoplay={
              hasMultipleProjects
                ? {
                    delay: 3700,
                    disableOnInteraction:
                      false,
                    pauseOnMouseEnter:
                      true,
                  }
                : false
            }
            pagination={{
              clickable:
                hasMultipleProjects,
              dynamicBullets:
                hasMultipleProjects,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.08,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 1.18,
                spaceBetween: 12,
              },
              560: {
                slidesPerView: 1.55,
                spaceBetween: 14,
              },
              700: {
                slidesPerView: 2.15,
                spaceBetween: 14,
              },
              900: {
                slidesPerView: 3.05,
                spaceBetween: 16,
              },
              1180: {
                slidesPerView: 3.65,
                spaceBetween: 18,
              },
              1500: {
                slidesPerView: 4.35,
                spaceBetween: 18,
              },
            }}
          >
            {projects.map(
              (
                project,
                index,
              ) => (
                <SwiperSlide
                  key={project.id}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      ) : (
        <div className="lp1-shell">
          <div
            className="lp1-portfolio__empty"
            data-reveal="up"
          >
            <p>
              New success stories are being prepared. Browse the
              complete case-study library for published work.
            </p>

            <Link
              className="lp1-portfolio__learn"
              href="/case-studies"
            >
              Explore Case Studies

              <span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.7}
                />
              </span>
            </Link>
          </div>
        </div>
      )}

      {projects.length > 0 ? (
        <div className="lp1-shell">
          <div
            className="lp1-portfolio__footer"
            data-reveal="up"
          >
            <Link
              className="lp1-portfolio__learn"
              href="/case-studies"
            >
              View All Work

              <span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.7}
                />
              </span>
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}
