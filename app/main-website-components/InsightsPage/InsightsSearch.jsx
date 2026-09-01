"use client";

import Link from "next/link";
import Button from "@/app/_shared/Button/Button";

import {
  ArrowRight,
  LoaderCircle,
  Search,
  X,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import CmsImage from "../CmsImage/CmsImage";
import {
  contentImage,
} from "../CmsImage/contentImages";


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function safeSlug(value) {
  const slug =
    textValue(value)
      .toLowerCase()
      .replace(/^\/?insights\//i, "")
      .replace(/^\/+|\/+$/g, "");

  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
    ? slug
    : "";
}


function articleHref(slug) {
  const value = safeSlug(slug);

  return value
    ? `/insights/${value}`
    : "/insights";
}


export default function InsightsSearch({
  initialSearch = "",
  featuredArticles = [],
}) {
  const [value, setValue] =
    useState(initialSearch);
  const [articles, setArticles] =
    useState([]);
  const [loading, setLoading] =
    useState(false);
  const [open, setOpen] =
    useState(false);
  const [activeIndex, setActiveIndex] =
    useState(-1);
  const requestVersion =
    useRef(0);
  const searchWrapRef =
    useRef(null);

  const safeFeaturedArticles =
    Array.isArray(featuredArticles)
      ? featuredArticles.slice(0, 6)
      : [];

  const visibleArticles =
    value.trim()
      ? articles
      : safeFeaturedArticles;

  useEffect(() => {
    const currentVersion =
      requestVersion.current + 1;

    requestVersion.current =
      currentVersion;

    const query = value.trim();

    if (!query) {
      return undefined;
    }

    const controller =
      new AbortController();

    const timer =
      window.setTimeout(
        async () => {
          setLoading(true);
          setOpen(true);
          setActiveIndex(-1);

          try {
            const response =
              await fetch(
                `/api/insights/search?q=${encodeURIComponent(query)}`,
                {
                  signal:
                    controller.signal,
                  },
              );

            if (!response.ok) {
              throw new Error(
                "Search request failed",
              );
            }

            const result =
              await response.json();

            if (
              currentVersion ===
              requestVersion.current
            ) {
              setArticles(
                Array.isArray(result.articles)
                  ? result.articles
                  : [],
              );
            }
          } catch (error) {
            if (
              error?.name !== "AbortError" &&
              currentVersion ===
                requestVersion.current
            ) {
              setArticles([]);
            }
          } finally {
            if (
              !controller.signal.aborted &&
              currentVersion ===
                requestVersion.current
            ) {
              setLoading(false);
            }
          }
        },
        180,
      );

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [value]);

  useEffect(() => {
    if (activeIndex < 0) {
      return;
    }

    document
      .getElementById(
        `insight-result-${activeIndex}`,
      )
      ?.scrollIntoView({
        block: "nearest",
      });
  }, [activeIndex]);

  useEffect(() => {
    function closeOnOutsidePointer(event) {
      if (
        !searchWrapRef.current?.contains(
          event.target,
        )
      ) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }

    document.addEventListener(
      "pointerdown",
      closeOnOutsidePointer,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        closeOnOutsidePointer,
      );
    };
  }, []);

  function handleChange(event) {
    const nextValue =
      event.target.value;

    setValue(nextValue);

    if (!nextValue.trim()) {
      setArticles([]);
      setLoading(false);
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(
        (current) =>
          visibleArticles.length
            ? (current + 1) % visibleArticles.length
            : -1,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (current) =>
          visibleArticles.length
            ? (current - 1 + visibleArticles.length) % visibleArticles.length
            : -1,
      );
    }

    if (
      event.key === "Enter" &&
      activeIndex >= 0 &&
      visibleArticles[activeIndex]
    ) {
      event.preventDefault();
      window.location.href =
        articleHref(
          visibleArticles[activeIndex].slug,
        );
    }
  }

  function clearSearch() {
    setValue("");
    setOpen(false);
    setActiveIndex(-1);
  }

  return (
    <div
      className="insights-page__search-wrap"
      ref={searchWrapRef}
    >
      <form
        className="insights-page__search"
        action="/insights"
        method="get"
        role="search"
        onSubmit={() => setOpen(false)}
      >
        <Search
          size={18}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <label
          className="tek-sr-only"
          htmlFor="insights-search"
        >
          Search articles
        </label>

        <input
          id="insights-search"
          type="search"
          name="search"
          value={value}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search here..."
          maxLength={100}
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls="insights-search-results"
          aria-activedescendant={
            activeIndex >= 0
              ? `insight-result-${activeIndex}`
              : undefined
          }
        />

        {loading ? (
          <LoaderCircle
            className="insights-page__search-loading"
            size={16}
            aria-label="Searching"
          />
        ) : null}

        {value ? (
          <button
            type="button"
            className="insights-page__search-clear"
            onClick={clearSearch}
            aria-label="Clear article search"
          >
            <X size={15} strokeWidth={1.9} />
          </button>
        ) : null}

        <Button
          type="submit"
          appearance="primary"
          size="small"
          className="insights-page__search-submit"
        >
          <span>Search</span>
          <ArrowRight size={14} strokeWidth={1.9} />
        </Button>
      </form>

      {open ? (
        <div
          className="insights-page__search-results"
          id="insights-search-results"
          role="listbox"
          aria-label="Article suggestions"
        >
          {!value.trim() ? (
            <div className="insights-page__search-featured-head">
              <span>Featured Blogs</span>
              <small>Worth a closer look</small>
            </div>
          ) : null}

          {loading ? (
            <p className="insights-page__search-status">
              Finding related articles...
            </p>
          ) : visibleArticles.length ? (
            visibleArticles.map((article, index) => (
              <Link
                className={[
                  "insights-page__search-result",
                  activeIndex === index ? "is-active" : "",
                ].filter(Boolean).join(" ")}
                href={articleHref(article.slug)}
                id={`insight-result-${index}`}
                key={article._id || article.slug}
                role="option"
                aria-selected={activeIndex === index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setOpen(false)}
              >
                <CmsImage
                  src={
                    article.thumbnail ||
                    contentImage(
                      article,
                      "insight",
                    )
                  }
                  alt=""
                  className="insights-page__search-result-image"
                  fallbackClassName="insights-page__search-result-fallback"
                  fallbackLabel="Insight"
                  sizes="42px"
                />

                <span className="insights-page__search-result-copy">
                  <small>{textValue(article.category) || "Insights"}</small>
                  <strong>{article.title}</strong>
                </span>

                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ))
          ) : (
            <p className="insights-page__search-status">
              No closely related articles found.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
