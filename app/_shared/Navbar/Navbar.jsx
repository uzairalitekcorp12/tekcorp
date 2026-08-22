"use client";

import "./Navbar.css";

import Image from "next/image";

import {
  useEffect,
  useRef,
  useState,
} from "react";


/* ==========================================================================
   TEKCORP — NAVIGATION DATA
   ==========================================================================

   CURRENT REAL ROUTES
   -------------------

   /Home
   /About
   /contact
   /case-studies
   /insights


   SERVICE DESTINATIONS
   --------------------

   Individual service pages can define their own href.

   Example:

   {
     title: "Web Application Development",
     href: "/services/web-engineering",
   }

   If a service item does not yet have its own page,
   it safely falls back to:

   /contact

   This means unfinished services never produce broken links.
   ========================================================================== */


const SOLUTION_GROUPS = [
  {
    key: "engineering",

    number: "01",

    title: "Engineering",

    subtitle:
      "Digital products built for scale",

    items: [
      {
        title:
          "Web Application Development",

        href:
          "/services/web-engineering",
      },

      {
        title:
          "Custom Software Development",
      },

      {
        title:
          "SaaS Product Development",
      },

      {
        title:
          "Mobile App Development",

        href:
          "/services/application-engineering",
      },

      {
        title:
          "API & System Integration",
      },

      {
        title:
          "Cloud Engineering",
      },

      {
        title:
          "DevOps & Reliability",
      },
    ],
  },


  {
    key: "ai",

    number: "02",

    title: "AI & Automation",

    subtitle:
      "Intelligence that creates efficiency",

    items: [
      {
        title:
          "AI Strategy & Consulting",
      },

      {
        title:
          "Generative AI Solutions",
      },

      {
        title:
          "AI Agents & Copilots",
      },

      {
        title:
          "RAG & Knowledge Assistants",
      },

      {
        title:
          "Business Process Automation",
      },

      {
        title:
          "Machine Learning Solutions",
      },

      {
        title:
          "Data & AI Integration",
      },
    ],
  },


  {
    key: "product",

    number: "03",

    title: "Product & Design",

    subtitle:
      "Experiences people want to use",

    items: [
      {
        title:
          "Digital Product Strategy",
      },

      {
        title:
          "UX Research",
      },

      {
        title:
          "UI / UX Design",

        href:
          "/services/prototyping-ui-ux-design",
      },

      {
        title:
          "Design Systems",
      },

      {
        title:
          "Product Prototyping",
      },

      {
        title:
          "MVP Development",
      },

      {
        title:
          "Brand Experience Design",
      },
    ],
  },


  {
    key: "growth",

    number: "04",

    title: "Growth & Platforms",

    subtitle:
      "Technology that supports growth",

    items: [
      {
        title:
          "Technical SEO",
      },

      {
        title:
          "Digital Growth Strategy",
      },

      {
        title:
          "E-commerce Development",
      },

      {
        title:
          "Conversion Optimization",
      },

      {
        title:
          "Marketing Automation",
      },

      {
        title:
          "Analytics & Business Intelligence",
      },

      {
        title:
          "CRM & ERP Integration",
      },
    ],
  },
];


/* ==========================================================================
   ICONS
   ========================================================================== */


function ChevronIcon({
  open = false,
  size = 12,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        "navbar-chevron",

        open
          ? "open"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}


function ArrowUpRightIcon({
  size = 12,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />

      <path d="M7 7h10v10" />
    </svg>
  );
}


function GroupIcon({
  type,
}) {
  const icons = {
    engineering: (
      <>
        <path d="m8 9-4 3 4 3" />

        <path d="m16 9 4 3-4 3" />

        <path d="m14 5-4 14" />
      </>
    ),


    ai: (
      <>
        <circle
          cx="12"
          cy="12"
          r="3.7"
        />

        <path d="M12 3v3" />

        <path d="M12 18v3" />

        <path d="M3 12h3" />

        <path d="M18 12h3" />

        <path d="m5.7 5.7 2.1 2.1" />

        <path d="m16.2 16.2 2.1 2.1" />

        <path d="m18.3 5.7-2.1 2.1" />

        <path d="m7.8 16.2-2.1 2.1" />
      </>
    ),


    product: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
        />

        <path d="M8 9h8" />

        <path d="M8 13h5" />

        <path d="M8 17h3" />
      </>
    ),


    growth: (
      <>
        <path d="M4 18V6" />

        <path d="M4 18h16" />

        <path d="m7 14 4-4 3 2 5-6" />
      </>
    ),
  };


  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}


/* ==========================================================================
   NAVBAR
   ========================================================================== */


export default function Navbar({
  variant = "default",

  transparentTargetId = "",

  initialActiveTab = "Home",

  homeHref = "/home",

  aboutHref = "/about",

  contactHref = "/contact",

  caseStudiesHref = "/case-studies",

  insightsHref = "/insights",

  ctaHref,

  ctaLabel = "Get Started",
}) {

  /* ==========================================================================
     RESOLVED ROUTES
     ========================================================================== */

  const unresolvedServiceHref =
    contactHref;


  const resolvedCtaHref =
    ctaHref ||
    contactHref;


  /* ==========================================================================
     STATE
     ========================================================================== */

  const [
    scrolled,
    setScrolled,
  ] =
    useState(false);


  const [
    overTransparentTarget,
    setOverTransparentTarget,
  ] =
    useState(
      variant === "transparent" ||
      variant === "adaptive",
    );


  const [
    solutionsOpen,
    setSolutionsOpen,
  ] =
    useState(false);


  const [
    mobileOpen,
    setMobileOpen,
  ] =
    useState(false);


  /*
   * Every mobile solution group has independent state.
   *
   * This allows users to open any group without blocking
   * another category from working.
   */

  const [
    mobileGroups,
    setMobileGroups,
  ] =
    useState({
      engineering: false,
      ai: false,
      product: false,
      growth: false,
    });


  const [
    activeTab,
    setActiveTab,
  ] =
    useState(
      initialActiveTab,
    );


  /* ==========================================================================
     REFS
     ========================================================================== */

  const navbarRef =
    useRef(null);


  const closeTimerRef =
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
     VISUAL MODE
     ========================================================================== */

  const isOverlayMode =
    navbarVariant === "transparent" ||
    (
      navbarVariant === "adaptive" &&
      Boolean(transparentTargetId) &&
      overTransparentTarget
    );


  const visualMode =
    isOverlayMode
      ? "overlay"
      : "light";


  /* ==========================================================================
     PRIMARY NAVIGATION
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

      mega:
        true,
    },

    {
      name:
        "Case Studies",

      href:
        caseStudiesHref,
    },

    {
      name:
        "Insights",

      href:
        insightsHref,
    },

    {
      name:
        "Company",

      href:
        aboutHref,
    },
  ];


  /* ==========================================================================
     SCROLL STATE
     ========================================================================== */

  useEffect(() => {
    const handleScroll =
      () => {
        setScrolled(
          window.scrollY > 8,
        );
      };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);


  /* ==========================================================================
     ADAPTIVE HERO DETECTION
     ========================================================================== */

  useEffect(() => {
    if (
      navbarVariant !== "adaptive" ||
      !transparentTargetId
    ) {
      return;
    }


    const target =
      document.getElementById(
        transparentTargetId,
      );


    if (!target) {
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
            animationFrameId,
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
                  .height ||
                76;


              const overTarget =
                targetRect.top <
                  navbarHeight &&
                targetRect.bottom >
                  navbarHeight;


              setOverTransparentTarget(
                overTarget,
              );
            },
          );
      };


    updateVisualMode();


    window.addEventListener(
      "scroll",
      updateVisualMode,
      {
        passive: true,
      },
    );


    window.addEventListener(
      "resize",
      updateVisualMode,
    );


    let resizeObserver =
      null;


    if (
      typeof ResizeObserver !==
      "undefined"
    ) {
      resizeObserver =
        new ResizeObserver(
          updateVisualMode,
        );


      resizeObserver.observe(
        target,
      );


      if (
        navbarRef.current
      ) {
        resizeObserver.observe(
          navbarRef.current,
        );
      }
    }


    return () => {
      if (
        animationFrameId
      ) {
        cancelAnimationFrame(
          animationFrameId,
        );
      }


      window.removeEventListener(
        "scroll",
        updateVisualMode,
      );


      window.removeEventListener(
        "resize",
        updateVisualMode,
      );


      resizeObserver?.disconnect();
    };
  }, [
    navbarVariant,
    transparentTargetId,
  ]);


  /* ==========================================================================
     DESKTOP HOVER INTENT
     ========================================================================== */

  function cancelScheduledClose() {
    if (
      closeTimerRef.current
    ) {
      clearTimeout(
        closeTimerRef.current,
      );


      closeTimerRef.current =
        null;
    }
  }


  function openSolutions() {
    cancelScheduledClose();


    setSolutionsOpen(
      true,
    );
  }


  function scheduleSolutionsClose() {
    cancelScheduledClose();


    closeTimerRef.current =
      setTimeout(
        () => {
          setSolutionsOpen(
            false,
          );
        },
        170,
      );
  }


  useEffect(() => {
    return () => {
      cancelScheduledClose();
    };
  }, []);


  /* ==========================================================================
     OUTSIDE CLICK / ESCAPE / RESIZE
     ========================================================================== */

  useEffect(() => {
    const handlePointerDown =
      (event) => {
        if (
          navbarRef.current &&
          !navbarRef.current.contains(
            event.target,
          )
        ) {
          setSolutionsOpen(
            false,
          );


          setMobileOpen(
            false,
          );
        }
      };


    const handleKeyDown =
      (event) => {
        if (
          event.key === "Escape"
        ) {
          setSolutionsOpen(
            false,
          );


          setMobileOpen(
            false,
          );
        }
      };


    const handleResize =
      () => {
        if (
          window.innerWidth > 1023
        ) {
          setMobileOpen(
            false,
          );
        }


        setSolutionsOpen(
          false,
        );
      };


    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );


    document.addEventListener(
      "keydown",
      handleKeyDown,
    );


    window.addEventListener(
      "resize",
      handleResize,
    );


    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );


      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );


      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);


  /* ==========================================================================
     HELPERS
     ========================================================================== */

  function closeNavigation() {
    cancelScheduledClose();


    setSolutionsOpen(
      false,
    );


    setMobileOpen(
      false,
    );
  }


  function handleNavigation(
    name,
  ) {
    setActiveTab(
      name,
    );


    closeNavigation();
  }


  function handleServiceNavigation() {
    setActiveTab(
      "Our Solutions",
    );


    closeNavigation();
  }


  function toggleMobileMenu() {
    setMobileOpen(
      (previous) =>
        !previous,
    );


    setSolutionsOpen(
      false,
    );
  }


  function toggleSolutionsMobile() {
    setSolutionsOpen(
      (previous) =>
        !previous,
    );
  }


  function toggleMobileGroup(
    key,
  ) {
    setMobileGroups(
      (previous) => ({
        ...previous,

        [key]:
          !previous[key],
      }),
    );
  }


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

    solutionsOpen
      ? "mega-open"
      : "",
  ]
    .filter(Boolean)
    .join(" ");


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <header
      ref={navbarRef}
      className={navbarClasses}
      data-navbar-variant={
        navbarVariant
      }
      data-navbar-mode={
        visualMode
      }
    >

      <div className="navbar-container">


        {/* ================================================================
            MAIN NAVBAR
            ================================================================ */}

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
                "Home",
              )
            }
          >

            <div className="navbar-logo-image">

              <Image
                src="/assets/shared/blacklogo.png"
                alt="TekCorp - Empowering Innovation"
                fill
                priority
                sizes="(max-width: 480px) 125px, (max-width: 767px) 138px, 155px"
                className="navbar-logo-img navbar-logo-img--dark"
              />


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
            aria-label="Primary navigation"
          >

            {navLinks.map(
              (link) => {

                if (
                  link.mega
                ) {
                  return (
                    <div
                      key={link.name}
                      className="navbar-dropdown"
                      onMouseEnter={
                        openSolutions
                      }
                      onMouseLeave={
                        scheduleSolutionsClose
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

                          solutionsOpen
                            ? "is-open"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => {
                          setActiveTab(
                            "Our Solutions",
                          );


                          setSolutionsOpen(
                            (previous) =>
                              !previous,
                          );
                        }}
                        onFocus={
                          openSolutions
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          solutionsOpen
                        }
                        aria-controls="tekcorp-mega-menu"
                      >

                        <span>
                          Our Solutions
                        </span>


                        <ChevronIcon
                          open={
                            solutionsOpen
                          }
                        />

                      </button>

                    </div>
                  );
                }


                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={[
                      "navbar-nav-link",

                      activeTab ===
                        link.name
                        ? "active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() =>
                      handleNavigation(
                        link.name,
                      )
                    }
                  >
                    {link.name}
                  </a>
                );
              },
            )}

          </nav>


          {/* ==============================================================
              CTA / MOBILE TOGGLE
              ============================================================== */}

          <div className="navbar-actions">

            <a
              href={
                resolvedCtaHref
              }
              className="navbar-cta"
              onClick={() =>
                handleNavigation(
                  "Contact",
                )
              }
            >
              {ctaLabel}
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
              aria-expanded={
                mobileOpen
              }
              aria-controls="mobile-navigation"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >

              <span />

              <span />

              <span />

            </button>

          </div>

        </div>


        {/* ================================================================
            DESKTOP MEGA MENU
            ================================================================ */}

        {solutionsOpen && (
          <div
            id="tekcorp-mega-menu"
            className="navbar-mega-menu"
            onMouseEnter={
              openSolutions
            }
            onMouseLeave={
              scheduleSolutionsClose
            }
          >

            <div className="navbar-mega-panel">


              {/* ==========================================================
                  TOP
                  ========================================================== */}

              <div className="navbar-mega-head">

                <div className="navbar-mega-intro">

                  <span className="navbar-mega-eyebrow">
                    Digital Capabilities
                  </span>


                  <h2>
                    Technology solutions built around your business.
                  </h2>


                  <p>
                    Strategy, design and engineering expertise to help ambitious
                    businesses launch, modernize and scale.
                  </p>

                </div>


                <a
                  href={contactHref}
                  className="navbar-mega-head-cta"
                  onClick={
                    handleServiceNavigation
                  }
                >
                  Discuss Your Project

                  <ArrowUpRightIcon />
                </a>

              </div>


              {/* ==========================================================
                  SERVICES
                  ========================================================== */}

              <div className="navbar-mega-grid">

                {SOLUTION_GROUPS.map(
                  (group) => (
                    <section
                      key={
                        group.key
                      }
                      className="navbar-mega-column"
                    >

                      <div className="navbar-mega-column-head">

                        <span className="navbar-mega-column-icon">

                          <GroupIcon
                            type={
                              group.key
                            }
                          />

                        </span>


                        <div className="navbar-mega-column-copy">

                          <div className="navbar-mega-column-title-row">

                            <h3>
                              {group.title}
                            </h3>


                            <span className="navbar-mega-number">
                              {group.number}
                            </span>

                          </div>


                          <p>
                            {group.subtitle}
                          </p>

                        </div>

                      </div>


                      <div className="navbar-mega-links">

                        {group.items.map(
                          (item) => (
                            <a
                              key={
                                item.title
                              }
                              href={
                                item.href ||
                                unresolvedServiceHref
                              }
                              className="navbar-mega-link"
                              onClick={
                                handleServiceNavigation
                              }
                            >

                              <span className="navbar-mega-link-dot" />


                              <span className="navbar-mega-link-label">
                                {item.title}
                              </span>


                              <span className="navbar-mega-link-arrow">

                                <ArrowUpRightIcon
                                  size={10}
                                />

                              </span>

                            </a>
                          ),
                        )}

                      </div>

                    </section>
                  ),
                )}

              </div>


              {/* ==========================================================
                  BOTTOM STRIP
                  ========================================================== */}

              <div className="navbar-mega-bottom">

                <div className="navbar-mega-bottom-copy">

                  <span>
                    Not sure where to start?
                  </span>


                  <strong>
                    Tell us what you&apos;re building and we&apos;ll help define
                    the right technology approach.
                  </strong>

                </div>


                <a
                  href={contactHref}
                  className="navbar-mega-bottom-link"
                  onClick={() =>
                    handleNavigation(
                      "Contact",
                    )
                  }
                >
                  Talk to TekCorp

                  <span>
                    <ArrowUpRightIcon />
                  </span>

                </a>

              </div>

            </div>

          </div>
        )}


        {/* ================================================================
            MOBILE NAVIGATION
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


            {/* ============================================================
                HOME
                ============================================================ */}

            <a
              href={homeHref}
              className={[
                "mobile-nav-link",

                activeTab === "Home"
                  ? "active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                handleNavigation(
                  "Home",
                )
              }
            >
              Home
            </a>


            {/* ============================================================
                SOLUTIONS
                ============================================================ */}

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
                onClick={
                  toggleSolutionsMobile
                }
                aria-expanded={
                  solutionsOpen
                }
                aria-controls="mobile-solutions"
              >

                <span>
                  Our Solutions
                </span>


                <ChevronIcon
                  open={
                    solutionsOpen
                  }
                  size={14}
                />

              </button>


              {solutionsOpen && (
                <div
                  id="mobile-solutions"
                  className="mobile-solutions-panel"
                >

                  <div className="mobile-solutions-intro">

                    <div>

                      <span>
                        Digital capabilities
                      </span>


                      <strong>
                        Explore our expertise
                      </strong>

                    </div>


                    <a
                      href={contactHref}
                      onClick={
                        handleServiceNavigation
                      }
                    >
                      Contact Us

                      <ArrowUpRightIcon />
                    </a>

                  </div>


                  <div className="mobile-solution-groups">

                    {SOLUTION_GROUPS.map(
                      (group) => {
                        const groupOpen =
                          mobileGroups[
                            group.key
                          ];


                        return (
                          <section
                            key={
                              group.key
                            }
                            className={[
                              "mobile-solution-group",

                              groupOpen
                                ? "open"
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >

                            <button
                              type="button"
                              className="mobile-solution-group-trigger"
                              onClick={() =>
                                toggleMobileGroup(
                                  group.key,
                                )
                              }
                              aria-expanded={
                                groupOpen
                              }
                            >

                              <span className="mobile-solution-group-left">

                                <span className="mobile-solution-group-icon">

                                  <GroupIcon
                                    type={
                                      group.key
                                    }
                                  />

                                </span>


                                <span className="mobile-solution-group-copy">

                                  <strong>
                                    {group.title}
                                  </strong>


                                  <small>
                                    {group.subtitle}
                                  </small>

                                </span>

                              </span>


                              <ChevronIcon
                                open={
                                  groupOpen
                                }
                                size={13}
                              />

                            </button>


                            {groupOpen && (
                              <div className="mobile-solution-links">

                                {group.items.map(
                                  (item) => (
                                    <a
                                      key={
                                        item.title
                                      }
                                      href={
                                        item.href ||
                                        unresolvedServiceHref
                                      }
                                      onClick={
                                        handleServiceNavigation
                                      }
                                    >

                                      <span>
                                        {item.title}
                                      </span>


                                      <ArrowUpRightIcon
                                        size={9}
                                      />

                                    </a>
                                  ),
                                )}

                              </div>
                            )}

                          </section>
                        );
                      },
                    )}

                  </div>

                </div>
              )}

            </div>


            {/* ============================================================
                CASE STUDIES

                Real route:
                /case-studies
                ============================================================ */}

            <a
              href={
                caseStudiesHref
              }
              className={[
                "mobile-nav-link",

                activeTab ===
                  "Case Studies"
                  ? "active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                handleNavigation(
                  "Case Studies",
                )
              }
            >
              Case Studies
            </a>


            {/* ============================================================
                INSIGHTS

                Real route:
                /insights
                ============================================================ */}

            <a
              href={
                insightsHref
              }
              className={[
                "mobile-nav-link",

                activeTab ===
                  "Insights"
                  ? "active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                handleNavigation(
                  "Insights",
                )
              }
            >
              Insights
            </a>


            {/* ============================================================
                COMPANY
                ============================================================ */}

            <a
              href={
                aboutHref
              }
              className={[
                "mobile-nav-link",

                activeTab ===
                  "Company"
                  ? "active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                handleNavigation(
                  "Company",
                )
              }
            >
              Company
            </a>


            {/* ============================================================
                CTA
                ============================================================ */}

            <a
              href={
                resolvedCtaHref
              }
              className="mobile-cta"
              onClick={() =>
                handleNavigation(
                  "Contact",
                )
              }
            >

              <span>
                {ctaLabel}
              </span>


              <ArrowUpRightIcon />

            </a>

          </div>

        </div>

      </div>

    </header>
  );
}
