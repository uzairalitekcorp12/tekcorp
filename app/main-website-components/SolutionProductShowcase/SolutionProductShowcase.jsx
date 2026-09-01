"use client";

import "./SolutionProductShowcase.css";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Action from "@/app/_shared/Action/Action";
import Button from "@/app/_shared/Button/Button";

function ShowcaseCard({
  item,
  index,
  cardLabel,
}) {
  return (
    <article className="tek-showcase-card">
      <Action
        className="tek-showcase-card__visual"
        href={item.href}
        aria-label={`Open ${item.title}`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt || item.title}
          fill
          sizes="(max-width: 620px) 92vw, (max-width: 1100px) 48vw, 32vw"
        />

        <span
          className="tek-showcase-card__teal"
          aria-hidden="true"
        />

        <span
          className="tek-showcase-card__shade"
          aria-hidden="true"
        />

        <span
          className="tek-showcase-card__sweep"
          aria-hidden="true"
        />

        <span className="tek-showcase-card__number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="tek-showcase-card__category">
          {item.category}
        </span>

        <h3>
          {item.title}
        </h3>

        <span className="tek-showcase-card__floating-arrow">
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </span>
      </Action>

      <div className="tek-showcase-card__body">
        <div className="tek-showcase-card__meta">
          <strong>
            {item.client || "TEKCORP"}
          </strong>

          <span />
        </div>

        <p>
          {item.description}
        </p>

        <Action
          className="tek-showcase-card__link"
          href={item.href}
        >
          {item.actionLabel || cardLabel}

          <ArrowRight
            size={13}
            strokeWidth={1.7}
          />
        </Action>
      </div>
    </article>
  );
}

export default function SolutionProductShowcase({
  items = [],
  eyebrow = "MORE PRODUCTS",
  title = "Check out our other products we've developed",
  subtitle = "Explore digital products designed around real operational and customer needs.",
  sectionId = "more-products",
  ctaHref = "/contact",
  ctaLabel = "Discuss a Product",
  cardLabel = "Explore Product",
}) {
  const cards = Array.isArray(items)
    ? items.filter(Boolean)
    : [];

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (!cards.length) {
    return null;
  }

  return (
    <section
      className="tek-showcase"
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="tek-showcase__shell">
        <header
          className="tek-showcase__heading"
          data-reveal="up"
        >
          <p className="tek-showcase__eyebrow">
            {eyebrow}
          </p>

          <h2 id={`${sectionId}-title`}>
            {title}
          </h2>

          <p className="tek-showcase__subtitle">
            {subtitle}
          </p>
        </header>
      </div>

      <div
        className="tek-showcase__stage"
        data-reveal="up"
      >
        <span
          className="tek-showcase__glow"
          aria-hidden="true"
        />

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            A11y,
          ]}
          className="tek-showcase-swiper"
          loop={cards.length > 2}
          rewind={cards.length <= 2}
          speed={reducedMotion ? 0 : 900}
          grabCursor
          watchSlidesProgress
          slideToClickedSlide
          autoplay={reducedMotion ? false : {
            delay: 3700,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 10,
            },
            430: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            620: {
              slidesPerView: 1.7,
              spaceBetween: 14,
            },
            820: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            1100: {
              slidesPerView: 2.75,
              spaceBetween: 18,
            },
            1500: {
              slidesPerView: 3.25,
              spaceBetween: 18,
            },
          }}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={item.id || item.href || item.title}>
              <ShowcaseCard
                item={item}
                index={index}
                cardLabel={cardLabel}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="tek-showcase__shell">
        <div className="tek-showcase__footer">
          <Button
            appearance="inherit"
            className="tek-showcase__cta"
            href={ctaHref}
            icon={(
              <ArrowRight
                size={14}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            )}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
