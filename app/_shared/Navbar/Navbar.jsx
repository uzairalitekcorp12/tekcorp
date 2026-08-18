"use client";

import "./Navbar.css";

import Image from "next/image";

import {
  useEffect,
  useRef,
  useState,
} from "react";


/*
 * ==========================================================================
 * TEKCORP — REUSABLE / ADAPTIVE NAVBAR
 * ==========================================================================
 *
 * AVAILABLE MODES
 *
 * 1. DEFAULT
 *
 * <Navbar variant="default" />
 *
 * Always renders the regular white navbar.
 *
 *
 * 2. TRANSPARENT
 *
 * <Navbar variant="transparent" />
 *
 * Always renders the transparent / dark-media navbar.
 *
 *
 * 3. ADAPTIVE
 *
 * <Navbar
 *   variant="adaptive"
 *   transparentTargetId="landingpage1-hero"
 * />
 *
 * Transparent while the navbar overlaps the supplied section.
 * Automatically changes to the regular white navbar when that
 * section moves above the navbar.
 *
 * This is the preferred mode for video/image heroes.
 * ==========================================================================
 */


export default function Navbar({
  variant = "default",
  transparentTargetId = "",
  initialActiveTab = "Home",
  homeHref = "/home",
  ctaHref = "#home-contact",
}) {

  /* ==========================================================================
     STATE
     ========================================================================== */

  const [
    scrolled,
    setScrolled,
  ] = useState(false);


  const [
    overTransparentTarget,
    setOverTransparentTarget,
  ] = useState(
    variant === "transparent" ||
    variant === "adaptive"
  );


  const [
    solutionsOpen,
    setSolutionsOpen,
  ] = useState(false);


  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);


  const [
    activeTab,
    setActiveTab,
  ] = useState(initialActiveTab);


  /* ==========================================================================
     REFS
     ========================================================================== */

  const navbarRef =
    useRef(null);


  const dropdownRef =
    useRef(null);


  /* ==========================================================================
     VALIDATE VARIANT
     ========================================================================== */

  const navbarVariant =
    [
      "default",
      "transparent",
      "adaptive",
    ].includes(variant)
      ? variant
      : "default";


  /* ==========================================================================
     DETERMINE CURRENT VISUAL MODE
     ========================================================================== */

  const isOverlayMode =
    navbarVariant === "transparent" ||
    (
      navbarVariant === "adaptive" &&
      overTransparentTarget
    );


  const visualMode =
    isOverlayMode
      ? "overlay"
      : "light";


  /* ==========================================================================
     GENERAL SCROLL STATE
     ========================================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 8
      );

    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* ==========================================================================
     ADAPTIVE TRANSPARENT TARGET
     ==========================================================================

     Instead of checking:

     window.scrollY > 500

     we check the ACTUAL position of the requested section.

     This means it works correctly if the hero is:

     650px desktop
     820px laptop
     730px tablet
     680px mobile

     No breakpoint-specific JavaScript is needed.
     ========================================================================== */

  useEffect(() => {

    /*
     * DEFAULT
     */

    if (
      navbarVariant ===
      "default"
    ) {

      setOverTransparentTarget(
        false
      );

      return;

    }


    /*
     * ALWAYS TRANSPARENT
     */

    if (
      navbarVariant ===
      "transparent"
    ) {

      setOverTransparentTarget(
        true
      );

      return;

    }


    /*
     * ADAPTIVE REQUIRES TARGET ID
     */

    if (
      !transparentTargetId
    ) {

      setOverTransparentTarget(
        false
      );

      return;

    }


    const target =
      document.getElementById(
        transparentTargetId
      );


    if (!target) {

      setOverTransparentTarget(
        false
      );

      return;

    }


    let animationFrameId =
      null;


    const updateVisualMode =
      () => {

        if (
          animationFrameId
        ) {

          cancelAnimationFrame(
            animationFrameId
          );

        }


        animationFrameId =
          requestAnimationFrame(
            () => {

              const targetRect =
                target.getBoundingClientRect();


              const navbarHeight =
                navbarRef.current
                  ?.getBoundingClientRect()
                  .height || 76;


              /*
               * We use the bottom of the navbar as our
               * measurement line.
               *
               * As long as that line is inside the Hero,
               * the navbar stays transparent.
               */

              const navbarBoundary =
                navbarHeight;


              const navbarIsOverTarget =
                targetRect.top <
                  navbarBoundary &&
                targetRect.bottom >
                  navbarBoundary;


              setOverTransparentTarget(
                navbarIsOverTarget
              );

            }
          );

      };


    updateVisualMode();


    window.addEventListener(
      "scroll",
      updateVisualMode,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      updateVisualMode
    );


    /*
     * ResizeObserver helps when:
     *
     * - fonts finish loading
     * - video dimensions change
     * - responsive Hero height changes
     * - content changes dynamically
     */

    let resizeObserver =
      null;


    if (
      typeof ResizeObserver !==
      "undefined"
    ) {

      resizeObserver =
        new ResizeObserver(
          updateVisualMode
        );


      resizeObserver.observe(
        target
      );


      if (
        navbarRef.current
      ) {

        resizeObserver.observe(
          navbarRef.current
        );

      }

    }


    return () => {

      if (
        animationFrameId
      ) {

        cancelAnimationFrame(
          animationFrameId
        );

      }


      window.removeEventListener(
        "scroll",
        updateVisualMode
      );


      window.removeEventListener(
        "resize",
        updateVisualMode
      );


      resizeObserver?.disconnect();

    };

  }, [
    navbarVariant,
    transparentTargetId,
  ]);


  /* ==========================================================================
     ACTIVE ITEM SYNC
     ========================================================================== */

  useEffect(() => {

    setActiveTab(
      initialActiveTab
    );

  }, [
    initialActiveTab,
  ]);


  /* ==========================================================================
     CLICK OUTSIDE / ESCAPE / RESIZE
     ========================================================================== */

  useEffect(() => {

    const handleClickOutside =
      (event) => {

        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(
            event.target
          )
        ) {

          setSolutionsOpen(
            false
          );

        }

      };


    const handleKeyDown =
      (event) => {

        if (
          event.key ===
          "Escape"
        ) {

          setSolutionsOpen(
            false
          );


          setMobileOpen(
            false
          );

        }

      };


    const handleResize =
      () => {

        if (
          window.innerWidth >
          1023
        ) {

          setMobileOpen(
            false
          );

        }

      };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );


      document.removeEventListener(
        "keydown",
        handleKeyDown
      );


      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  /* ==========================================================================
     NAVIGATION LINKS
     ========================================================================== */

  const navLinks = [

    {
      name:
        "Home",

      href:
        homeHref,
    },


    {
      name:
        "Our Solutions",

      hasDropdown:
        true,
    },


    {
      name:
        "Case Studies",

      href:
        "#case-studies",
    },


    {
      name:
        "Insights",

      href:
        "#insights",
    },


    {
      name:
        "Company",

      href:
        "#company",
    },

  ];


  /* ==========================================================================
     SOLUTIONS DATA
     ========================================================================== */

  const solutionsItems = [

    {
      title:
        "AI Solutions",

      description:
        "Intelligent automation & generative ML systems",

      href:
        "#",

      icon: (

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >

          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            rx="3"
          />

          <path d="M9 9h6v6H9z" />

          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />

        </svg>

      ),
    },


    {
      title:
        "Website & Software Development",

      description:
        "Custom web applications & scalable backend systems",

      href:
        "#",

      icon: (

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >

          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2.5"
          />

          <path d="M3 9h18" />

          <path d="M8 14l-2 2 2 2" />

          <path d="M11 18h4" />

        </svg>

      ),
    },


    {
      title:
        "Search Engine Optimization",

      description:
        "Organic search growth & technical domain optimization",

      href:
        "#",

      icon: (

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >

          <circle
            cx="11"
            cy="11"
            r="6.5"
          />

          <path d="M16 16l5 5" />

          <path d="M8 11h6M11 8v6" />

        </svg>

      ),
    },


    {
      title:
        "Branding & Design",

      description:
        "UI/UX interfaces & modern brand identities",

      href:
        "#",

      icon: (

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >

          <path d="M12 3a9 9 0 1 0 9 9c0-1.1-.9-2-2-2h-2.5a2 2 0 0 1-2-2V6a3 3 0 0 0-2.5-3Z" />

          <circle
            cx="7.5"
            cy="12"
            r="1"
          />

          <circle
            cx="10"
            cy="7.5"
            r="1"
          />

          <circle
            cx="15.5"
            cy="7"
            r="1"
          />

        </svg>

      ),
    },


    {
      title:
        "EdTech Platform Development",

      description:
        "Interactive learning portals & education software",

      href:
        "#",

      icon: (

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >

          <path d="M3 8.5L12 4l9 4.5-9 4.5L3 8.5Z" />

          <path d="M6 10.5V16c2.5 2 9.5 2 12 0v-5.5" />

          <path d="M21 9v6" />

        </svg>

      ),
    },

  ];


  /* ==========================================================================
     HELPERS
     ========================================================================== */

  const closeMobileMenu =
    () => {

      setMobileOpen(
        false
      );


      setSolutionsOpen(
        false
      );

    };


  const handleNavigation =
    (name) => {

      setActiveTab(
        name
      );


      setSolutionsOpen(
        false
      );


      setMobileOpen(
        false
      );

    };


  const toggleMobileMenu =
    () => {

      setMobileOpen(
        (previous) =>
          !previous
      );


      setSolutionsOpen(
        false
      );

    };


  /* ==========================================================================
     CLASSES
     ========================================================================== */

  const navbarClasses = [

    "navbar",

    `navbar--${visualMode}`,

    `navbar-variant--${navbarVariant}`,

    scrolled
      ? "scrolled"
      : "",

    mobileOpen
      ? "mobile-open"
      : "",

  ]
    .filter(Boolean)
    .join(" ");


  return (

    <header
      ref={navbarRef}
      className={navbarClasses}
      data-navbar-variant={navbarVariant}
      data-navbar-mode={visualMode}
    >

      <div className="navbar-container">

        <div className="navbar-inner">

          {/* ==============================================================
              LOGO
              ============================================================== */}

          <a
            href={homeHref}
            className="navbar-logo-link"
            aria-label="TekCorp Home"
            onClick={() =>
              handleNavigation(
                "Home"
              )
            }
          >

            <div className="navbar-logo-image">

              {/* DARK LOGO */}

              <Image
                src="/assets/shared/blacklogo.png"
                alt="TekCorp - Empowering Innovation"
                fill
                priority
                sizes="(max-width: 480px) 125px, (max-width: 767px) 138px, 155px"
                className="navbar-logo-img navbar-logo-img--dark"
              />


              {/* WHITE LOGO */}

              <Image
                src="/assets/shared/whitelogo.png"
                alt=""
                fill
                priority
                aria-hidden="true"
                sizes="(max-width: 480px) 125px, (max-width: 767px) 138px, 155px"
                className="navbar-logo-img navbar-logo-img--light"
              />

            </div>

          </a>


          {/* ==============================================================
              DESKTOP NAVIGATION
              ============================================================== */}

          <nav
            className="navbar-nav"
            aria-label="Main Navigation"
          >

            {navLinks.map(
              (link) => {

                if (
                  link.hasDropdown
                ) {

                  return (

                    <div
                      key={link.name}
                      ref={dropdownRef}
                      className="navbar-dropdown"
                      onMouseEnter={() =>
                        setSolutionsOpen(
                          true
                        )
                      }
                      onMouseLeave={() =>
                        setSolutionsOpen(
                          false
                        )
                      }
                    >

                      <button
                        type="button"
                        className={[
                          "navbar-nav-link",
                          "navbar-solutions-trigger",
                          activeTab ===
                          link.name
                            ? "active"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => {

                          setActiveTab(
                            link.name
                          );


                          setSolutionsOpen(
                            (previous) =>
                              !previous
                          );

                        }}
                        aria-expanded={
                          solutionsOpen
                        }
                        aria-haspopup="true"
                      >

                        <span>
                          {link.name}
                        </span>


                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={[
                            "navbar-chevron",
                            solutionsOpen
                              ? "open"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          aria-hidden="true"
                        >

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                          />

                        </svg>

                      </button>


                      {solutionsOpen && (

                        <div
                          className="navbar-dropdown-menu"
                          role="menu"
                          aria-label="Our Solutions"
                        >

                          <div className="navbar-dropdown-inner">

                            {solutionsItems.map(
                              (item) => (

                                <a
                                  key={item.title}
                                  href={item.href}
                                  className="navbar-solution-item"
                                  role="menuitem"
                                  onClick={() => {

                                    setSolutionsOpen(
                                      false
                                    );


                                    setActiveTab(
                                      "Our Solutions"
                                    );

                                  }}
                                >

                                  <div className="navbar-solution-icon">

                                    {item.icon}

                                  </div>


                                  <div className="navbar-solution-content">

                                    <span className="navbar-solution-title">

                                      {item.title}

                                    </span>


                                    <span className="navbar-solution-description">

                                      {item.description}

                                    </span>

                                  </div>

                                </a>

                              )
                            )}

                          </div>

                        </div>

                      )}

                    </div>

                  );

                }


                return (

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      handleNavigation(
                        link.name
                      )
                    }
                    className={[
                      "navbar-nav-link",
                      activeTab ===
                      link.name
                        ? "active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >

                    {link.name}

                  </a>

                );

              }
            )}

          </nav>


          {/* ==============================================================
              ACTIONS
              ============================================================== */}

          <div className="navbar-actions">

            <a
              href={ctaHref}
              className="navbar-cta"
              onClick={() =>
                setMobileOpen(
                  false
                )
              }
            >

              Get Started

            </a>


            <button
              type="button"
              className={[
                "nav-toggle",
                mobileOpen
                  ? "open"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={
                toggleMobileMenu
              }
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={
                mobileOpen
              }
              aria-controls="mobile-navigation"
            >

              <span />

              <span />

              <span />

            </button>

          </div>

        </div>


        {/* ================================================================
            MOBILE MENU
            ================================================================ */}

        <div
          id="mobile-navigation"
          className={[
            "mobile-menu",
            mobileOpen
              ? "open"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden={
            !mobileOpen
          }
        >

          <div className="mobile-menu-inner">

            <a
              href={homeHref}
              onClick={() =>
                handleNavigation(
                  "Home"
                )
              }
              className={[
                "mobile-nav-link",
                activeTab ===
                "Home"
                  ? "active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >

              Home

            </a>


            <div className="mobile-solutions">

              <button
                type="button"
                className={[
                  "mobile-nav-link",
                  "mobile-solutions-trigger",
                  activeTab ===
                  "Our Solutions"
                    ? "active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {

                  setActiveTab(
                    "Our Solutions"
                  );


                  setSolutionsOpen(
                    (previous) =>
                      !previous
                  );

                }}
                aria-expanded={
                  solutionsOpen
                }
              >

                <span>
                  Our Solutions
                </span>


                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={[
                    "navbar-chevron",
                    solutionsOpen
                      ? "open"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-hidden="true"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />

                </svg>

              </button>


              {solutionsOpen && (

                <div className="mobile-solutions-list">

                  {solutionsItems.map(
                    (item) => (

                      <a
                        key={item.title}
                        href={item.href}
                        className="mobile-solution-item"
                        onClick={
                          closeMobileMenu
                        }
                      >

                        <div className="mobile-solution-icon">

                          {item.icon}

                        </div>


                        <div className="mobile-solution-content">

                          <span className="mobile-solution-title">

                            {item.title}

                          </span>


                          <span className="mobile-solution-description">

                            {item.description}

                          </span>

                        </div>

                      </a>

                    )
                  )}

                </div>

              )}

            </div>


            {[
              "Case Studies",
              "Insights",
              "Company",
            ].map(
              (name) => (

                <a
                  key={name}
                  href="#"
                  onClick={() =>
                    handleNavigation(
                      name
                    )
                  }
                  className={[
                    "mobile-nav-link",
                    activeTab ===
                    name
                      ? "active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >

                  {name}

                </a>

              )
            )}


            <a
              href={ctaHref}
              onClick={
                closeMobileMenu
              }
              className="mobile-cta"
            >

              Get Started

            </a>

          </div>

        </div>

      </div>

    </header>

  );

}