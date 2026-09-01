"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LegalPolicyNavigation({
  sections,
  title,
  lastUpdated,
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    const content = document.querySelector("[data-legal-policy-content]");
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!content || sectionElements.length === 0) return undefined;

    let animationFrame;

    const updateNavigation = () => {
      const contentTop = content.getBoundingClientRect().top + window.scrollY;
      const readableHeight = Math.max(
        content.offsetHeight - window.innerHeight * 0.55,
        1,
      );
      const travelled = window.scrollY + window.innerHeight * 0.28 - contentTop;
      const nextProgress = Math.min(
        100,
        Math.max(0, Math.round((travelled / readableHeight) * 100)),
      );

      let nextActiveSection = sectionElements[0].id;
      const activationLine = Math.min(window.innerHeight * 0.3, 220);

      sectionElements.forEach((sectionElement) => {
        if (sectionElement.getBoundingClientRect().top <= activationLine) {
          nextActiveSection = sectionElement.id;
        }
      });

      setProgress((currentProgress) =>
        currentProgress === nextProgress ? currentProgress : nextProgress,
      );
      setActiveSection((currentSection) =>
        currentSection === nextActiveSection
          ? currentSection
          : nextActiveSection,
      );
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!navigationRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <aside
      ref={navigationRef}
      className="legal-policy__contents"
      aria-label={`${title} contents`}
    >
      <div className="legal-policy__progress-sticky">
        <div className="legal-policy__progress-head">
          <span>Reading progress</span>

          <div className="legal-policy__progress-actions">
            <strong>{progress}%</strong>
            <button
              type="button"
              className="legal-policy__contents-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="legal-policy-sections"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span>{isMenuOpen ? "Close" : "Sections"}</span>
              <ChevronDown size={15} strokeWidth={1.9} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="legal-policy__progress-track"
          role="progressbar"
          aria-label={`${title} reading progress`}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div
        id="legal-policy-sections"
        className={`legal-policy__dropdown${isMenuOpen ? " is-open" : ""}`}
      >
        <span className="legal-policy__contents-label">On this page</span>

        <nav>
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          ))}
        </nav>

        <div className="legal-policy__contents-date">
          <span>Last updated</span>
          <strong>{lastUpdated}</strong>
        </div>
      </div>
    </aside>
  );
}
