"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./SiteEffects.css";

export default function SiteEffects() {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* Global scroll reveal */
  useEffect(() => {
    let observer;

    const timer = window.setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("in");
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      const targets = document.querySelectorAll(".sr, .sr-l, .sr-r");

      targets.forEach((element) => {
        if (!element.classList.contains("in")) {
          observer.observe(element);
        }
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  /* Scroll-to-top visibility */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`site-scroll-top ${
        showScrollTop ? "site-scroll-top--visible" : ""
      }`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
