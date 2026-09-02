"use client";

import "./Navbar.css";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Action from "@/app/_shared/Action/Action";

import {
  useEffect,
  useRef,
  useState,
} from "react";


/* ==========================================================================
   TEKCORP — NAVIGATION DATA
   ==========================================================================

   MAIN ROUTES
   --------------------------------------------------------------------------

   /home
   /about
   /contact
   /case-studies
   /insights


   DIGITAL CAPABILITIES
   --------------------------------------------------------------------------

   01 — Design & Engineering
   02 — Growth & Marketing
   03 — AI & Automation
   04 — Products


   DESIGN & ENGINEERING
   --------------------------------------------------------------------------

   /services/web-development
   /services/application-development
   /services/cms-development
   /services/ecommerce-development
   /services/ui-ux-design
   /services/logo-branding


   GROWTH & MARKETING
   --------------------------------------------------------------------------

   /services/search-engine-optimization
   /services/social-media-marketing
   /services/marketing-strategy
   /services/google-ads
   /services/content-marketing


   AI & AUTOMATION
   --------------------------------------------------------------------------

   /services/ai-chatbot-development
   /services/ai-agent-development
   /services/voice-ai-agents
   /services/rag-solutions
   /services/mcp-server-development


   PRODUCTS
   --------------------------------------------------------------------------

   /products/tekbooks
   /products/teklms

   ========================================================================== */


const OFFERING_GROUPS = [

  /* ==========================================================================
     01 — DESIGN & ENGINEERING
     ========================================================================== */

  {
    key:
      "designEngineering",

    number:
      "01",

    title:
      "Design & Engineering",

    subtitle:
      "Build and launch digital experiences.",

    items: [
      {
        title:
          "Custom Web Development",

        href:
          "/services/web-development",

        implemented:
          true,
      },

      {
        title:
          "Application Development",

        href:
          "/services/application-development",

        implemented:
          true,
      },

      {
        title:
          "CMS Development",

        href:
          "/services/cms-development",

        implemented:
          true,
      },

      {
        title:
          "Ecommerce Development",

        href:
          "/services/ecommerce-development",

        implemented:
          true,
      },

      {
        title:
          "UI/UX Design",

        href:
          "/services/ui-ux-design",

        implemented:
          true,
      },

      {
        title:
          "Logo & Branding",

        href:
          "/services/logo-branding",

        implemented:
          true,
      },
    ],
  },


  /* ==========================================================================
     02 — GROWTH & MARKETING
     ========================================================================== */

  {
    key:
      "growthMarketing",

    number:
      "02",

    title:
      "Growth & Marketing",

    subtitle:
      "Turn visibility into measurable growth.",

    items: [
      {
        title:
          "Search Engine Optimization",

        href:
          "/services/search-engine-optimization",

        implemented:
          true,
      },

      {
        title:
          "Social Media Marketing",

        href:
          "/services/social-media-marketing",

        implemented:
          true,
      },

      {
        title:
          "Marketing Strategy",

        href:
          "/services/marketing-strategy",

        implemented:
          true,
      },

      {
        title:
          "Google Ads",

        href:
          "/services/google-ads",

        implemented:
          true,
      },

      {
        title:
          "Content Marketing",

        href:
          "/services/content-marketing",

        implemented:
          true,
      },
    ],
  },


  /* ==========================================================================
     03 — AI & AUTOMATION
     ========================================================================== */

  {
    key:
      "aiAutomation",

    number:
      "03",

    title:
      "AI & Automation",

    subtitle:
      "Smarter systems powered by AI.",

    items: [
      {
        title:
          "AI Chatbots & Assistants",

        href:
          "/services/ai-chatbot-development",

        implemented:
          true,
      },

      {
        title:
          "AI Agents & Automation",

        href:
          "/services/ai-agent-development",

        implemented:
          true,
      },

      {
        title:
          "Voice AI & Conversational Agents",

        href:
          "/services/voice-ai-agents",

        implemented:
          true,
      },

      {
        title:
          "RAG & Knowledge Base Solutions",

        href:
          "/services/rag-solutions",

        implemented:
          true,
      },

      {
        title:
          "MCP Server Development & Integrations",

        href:
          "/services/mcp-server-development",

        implemented:
          true,
      },
    ],
  },


  /* ==========================================================================
     04 — PRODUCTS
     ========================================================================== */

  {
    key:
      "products",

    number:
      "04",

    title:
      "Products",

    subtitle:
      "Ready-to-use platforms for modern businesses.",

    items: [
      {
        title:
          "TekBooks — Bookkeeping Software for SMEs",

        href:
          "/products/tekbooks",

        implemented:
          true,
      },

      {
        title:
          "TekLMS — Learning Management System",

        href:
          "/products/teklms",

        implemented:
          true,
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

    /* ----------------------------------------------------------------------
       DESIGN & ENGINEERING
       ---------------------------------------------------------------------- */

    designEngineering: (
      <>
        <path d="m8 9-4 3 4 3" />

        <path d="m16 9 4 3-4 3" />

        <path d="m14 5-4 14" />
      </>
    ),


    /* ----------------------------------------------------------------------
       GROWTH & MARKETING
       ---------------------------------------------------------------------- */

    growthMarketing: (
      <>
        <path d="M4 18V8" />

        <path d="M4 18h16" />

        <path d="m7 14 4-4 3 2 5-6" />

        <path d="M16 6h3v3" />
      </>
    ),


    /* ----------------------------------------------------------------------
       AI & AUTOMATION
       ---------------------------------------------------------------------- */

    aiAutomation: (
      <>
        <circle
          cx="12"
          cy="12"
          r="3.5"
        />

        <path d="M12 2.8v3" />

        <path d="M12 18.2v3" />

        <path d="M2.8 12h3" />

        <path d="M18.2 12h3" />

        <path d="m5.5 5.5 2.2 2.2" />

        <path d="m16.3 16.3 2.2 2.2" />

        <path d="m18.5 5.5-2.2 2.2" />

        <path d="m7.7 16.3-2.2 2.2" />
      </>
    ),


    /* ----------------------------------------------------------------------
       PRODUCTS
       ---------------------------------------------------------------------- */

    products: (
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
   ROUTE HELPERS
   ========================================================================== */


function normalizeRoute(
  value,
) {
  if (
    typeof value !==
    "string"
  ) {
    return "";
  }


  const normalized =
    value
      .trim()
      .toLowerCase();


  if (
    normalized.length > 1 &&
    normalized.endsWith("/")
  ) {
    return normalized.slice(
      0,
      -1,
    );
  }


  return normalized;
}


function isCurrentRoute(
  pathname,
  route,
) {
  const currentPath =
    normalizeRoute(
      pathname,
    );


  const targetRoute =
    normalizeRoute(
      route,
    );


  if (
    !currentPath ||
    !targetRoute
  ) {
    return false;
  }


  return (
    currentPath ===
      targetRoute ||
    currentPath.startsWith(
      `${targetRoute}/`,
    )
  );
}


/* ==========================================================================
   OFFERING ACTIVE STATE
   ========================================================================== */

function isOfferingItemActive(
  pathname,
  item,
) {
  if (
    !item ||
    item.implemented ===
      false
  ) {
    return false;
  }


  return isCurrentRoute(
    pathname,
    item.href,
  );
}


/* ==========================================================================
   MAIN ACTIVE TAB
   ========================================================================== */

function getActiveTab(
  pathname,
  fallback,
) {
  const normalizedPathname =
    normalizeRoute(
      pathname,
    );


  /* ------------------------------------------------------------------------
     HOME
     ------------------------------------------------------------------------ */

  if (
    normalizedPathname ===
      "/" ||
    isCurrentRoute(
      normalizedPathname,
      "/home",
    )
  ) {
    return "Home";
  }


  /* ------------------------------------------------------------------------
     CASE STUDIES
     ------------------------------------------------------------------------ */

  if (
    isCurrentRoute(
      normalizedPathname,
      "/case-studies",
    )
  ) {
    return "Case Studies";
  }


  /* ------------------------------------------------------------------------
     INSIGHTS
     ------------------------------------------------------------------------ */

  if (
    isCurrentRoute(
      normalizedPathname,
      "/insights",
    )
  ) {
    return "Insights";
  }


  /* ------------------------------------------------------------------------
     COMPANY
     ------------------------------------------------------------------------ */

  if (
    isCurrentRoute(
      normalizedPathname,
      "/about",
    )
  ) {
    return "Company";
  }


  /* ------------------------------------------------------------------------
     SERVICES / SOLUTIONS / PRODUCTS

     Important:

     We support BOTH:

     /services/...
     /products/...

     Legacy namespaces remain recognized while redirects move visitors to the
     canonical /services/... and /products/... URLs.
     ------------------------------------------------------------------------ */

  if (
    [
      "/service",
      "/services",
      "/solutions",
      "/product",
      "/products",
    ].some(
      (route) =>
        isCurrentRoute(
          normalizedPathname,
          route,
        ),
    )
  ) {
    return "Solutions";
  }


  /* ------------------------------------------------------------------------
     CONTACT
     ------------------------------------------------------------------------ */

  if (
    isCurrentRoute(
      normalizedPathname,
      "/contact",
    )
  ) {
    return "Contact";
  }


  return fallback;
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

  simplified = false,

  reserveSpace,
}) {

  const pathname =
    usePathname();


  const normalizedPathname =
    normalizeRoute(
      pathname,
    );


  const activeTab =
    getActiveTab(
      normalizedPathname,
      initialActiveTab,
    );


  /* ==========================================================================
     RESOLVED ROUTES
     ========================================================================== */

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
   * Each capability group has its own independent state on mobile.
   *
   * This allows visitors to open whichever category they need without
   * breaking the other groups.
   */

  const [
    mobileGroups,
    setMobileGroups,
  ] =
    useState({
      designEngineering:
        false,

      growthMarketing:
        false,

      aiAutomation:
        false,

      products:
        false,
    });


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
    ].includes(
      variant,
    )
      ? variant
      : "default";


  const shouldReserveSpace =
    reserveSpace ??
    navbarVariant ===
      "default";


  /* ==========================================================================
     VISUAL MODE
     ========================================================================== */

  const isOverlayMode =
    navbarVariant ===
      "transparent" ||
    (
      navbarVariant ===
        "adaptive" &&
      Boolean(
        transparentTargetId,
      ) &&
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
        "Company",

      href:
        aboutHref,
    },

    {
      name:
        "Solutions",

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
  ];


  /* ==========================================================================
     SCROLL STATE
     ========================================================================== */

  useEffect(
    () => {

      const handleScroll =
        () => {

          setScrolled(
            window.scrollY >
              8,
          );

        };


      handleScroll();


      window.addEventListener(
        "scroll",
        handleScroll,
        {
          passive:
            true,
        },
      );


      return () => {

        window.removeEventListener(
          "scroll",
          handleScroll,
        );

      };

    },
    [],
  );


  /* ==========================================================================
     ADAPTIVE HERO DETECTION
     ========================================================================== */

  useEffect(
    () => {

      if (
        navbarVariant !==
          "adaptive" ||
        !transparentTargetId
      ) {
        return undefined;
      }


      const target =
        document.getElementById(
          transparentTargetId,
        );


      if (
        !target
      ) {
        return undefined;
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
          passive:
            true,
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

    },
    [
      navbarVariant,
      transparentTargetId,
    ],
  );


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


  useEffect(
    () => {

      return () => {

        cancelScheduledClose();

      };

    },
    [],
  );


  /* ==========================================================================
     CLOSE MENU AFTER ROUTE CHANGE
     ========================================================================== */

  useEffect(
    () => {

      const closeAfterNavigation =
        window.setTimeout(
          () => {

            setSolutionsOpen(
              false,
            );


            setMobileOpen(
              false,
            );

          },
          0,
        );


      return () => {

        window.clearTimeout(
          closeAfterNavigation,
        );

      };

    },
    [
      normalizedPathname,
    ],
  );


  /* ==========================================================================
     OUTSIDE CLICK / ESCAPE / RESIZE
     ========================================================================== */

  useEffect(
    () => {

      const handlePointerDown =
        (
          event,
        ) => {

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
        (
          event,
        ) => {

          if (
            event.key ===
            "Escape"
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
            window.innerWidth >
            1023
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

    },
    [],
  );


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


  function handleNavigation() {

    closeNavigation();

  }


  function handleServiceNavigation() {

    closeNavigation();

  }


  function toggleMobileMenu() {

    setMobileOpen(
      (
        previous,
      ) =>
        !previous,
    );


    setSolutionsOpen(
      false,
    );

  }


  function toggleSolutionsMobile() {

    setSolutionsOpen(
      (
        previous,
      ) =>
        !previous,
    );

  }


  function toggleMobileGroup(
    key,
  ) {

    setMobileGroups(
      (
        previous,
      ) => ({
        ...previous,

        [key]:
          !previous[
            key
          ],
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

    simplified
      ? "navbar--simplified"
      : "",
  ]
    .filter(
      Boolean,
    )
    .join(
      " ",
    );


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <>
      <header
        ref={
          navbarRef
        }
        className={
          navbarClasses
        }
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

            <Action
              href={
                homeHref
              }
              className="navbar-logo-link"
              aria-label="Tekcorp Home"
              onClick={
                handleNavigation
              }
            >

              <div className="navbar-logo-image">

                <Image
                  src="/assets/shared/blacklogo.png"
                  alt="Tekcorp - Empowering Innovation"
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

            </Action>


            {/* ==============================================================
                DESKTOP NAVIGATION
                ============================================================== */}

            {!simplified && (

              <nav
                className="navbar-nav"
                aria-label="Primary navigation"
              >

                {navLinks.map(
                  (
                    link,
                  ) => {

                    /* ========================================================
                       MEGA MENU TRIGGER
                       ======================================================== */

                    if (
                      link.mega
                    ) {

                      return (
                        <div
                          key={
                            link.name
                          }
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
                              .filter(
                                Boolean,
                              )
                              .join(
                                " ",
                              )}
                            onClick={() => {

                              setSolutionsOpen(
                                (
                                  previous,
                                ) =>
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
                            aria-current={
                              activeTab ===
                              link.name
                                ? "page"
                                : undefined
                            }
                          >

                            <span>
                              Solutions
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


                    /* ========================================================
                       STANDARD NAVIGATION LINK
                       ======================================================== */

                    return (
                      <Action
                        key={
                          link.name
                        }
                        href={
                          link.href
                        }
                        className={[
                          "navbar-nav-link",

                          activeTab ===
                            link.name
                            ? "active"
                            : "",
                        ]
                          .filter(
                            Boolean,
                          )
                          .join(
                            " ",
                          )}
                        aria-current={
                          activeTab ===
                          link.name
                            ? "page"
                            : undefined
                        }
                        onClick={
                          handleNavigation
                        }
                      >
                        {link.name}
                      </Action>
                    );

                  },
                )}

              </nav>

            )}


            {/* ==============================================================
                CTA / MOBILE TOGGLE
                ============================================================== */}

            <div className="navbar-actions">

              <Action
                href={
                  resolvedCtaHref
                }
                className={[
                  "navbar-cta",

                  activeTab ===
                    "Contact"
                    ? "active"
                    : "",
                ]
                  .filter(
                    Boolean,
                  )
                  .join(
                    " ",
                  )}
                aria-current={
                  activeTab ===
                  "Contact"
                    ? "page"
                    : undefined
                }
                onClick={
                  handleNavigation
                }
              >
                {ctaLabel}
              </Action>


              {!simplified && (

                <button
                  type="button"
                  className={[
                    "nav-toggle",

                    mobileOpen
                      ? "open"
                      : "",
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
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

              )}

            </div>

          </div>


          {/* ================================================================
              DESKTOP MEGA MENU
              ================================================================ */}

          {!simplified &&
            solutionsOpen && (

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


                  {/* ========================================================
                      MEGA HEADER
                      ======================================================== */}

                  <div className="navbar-mega-head">

                    <div className="navbar-mega-intro">

                      <span className="navbar-mega-eyebrow">
                        Digital Capabilities
                      </span>


                      <h2>
                        Technology solutions built around your business.
                      </h2>


                      <p>
                        Strategy, design, engineering, growth and intelligent
                        automation expertise to help ambitious businesses
                        launch, modernize and scale.
                      </p>

                    </div>


                    <Action
                      href={
                        contactHref
                      }
                      className="navbar-mega-head-cta"
                      onClick={
                        handleServiceNavigation
                      }
                    >

                      Discuss Your Project

                      <ArrowUpRightIcon />

                    </Action>

                  </div>


                  {/* ========================================================
                      FOUR-WAY CAPABILITY GRID
                      ======================================================== */}

                  <div className="navbar-mega-grid">

                    {OFFERING_GROUPS.map(
                      (
                        group,
                      ) => {

                        const groupIsActive =
                          group.items.some(
                            (
                              item,
                            ) =>
                              isOfferingItemActive(
                                normalizedPathname,
                                item,
                              ),
                          );


                        return (
                          <section
                            key={
                              group.key
                            }
                            className={[
                              "navbar-mega-column",

                              groupIsActive
                                ? "active"
                                : "",
                            ]
                              .filter(
                                Boolean,
                              )
                              .join(
                                " ",
                              )}
                          >

                            {/* =================================================
                                COLUMN HEADER
                                ================================================= */}

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


                            {/* =================================================
                                LINKS
                                ================================================= */}

                            <div className="navbar-mega-links">

                              {group.items.map(
                                (
                                  item,
                                ) => {

                                  const itemIsActive =
                                    isOfferingItemActive(
                                      normalizedPathname,
                                      item,
                                    );


                                  return (
                                    <Action
                                      key={
                                        item.title
                                      }
                                      href={
                                        item.href
                                      }
                                      className={[
                                        "navbar-mega-link",

                                        itemIsActive
                                          ? "active"
                                          : "",
                                      ]
                                        .filter(
                                          Boolean,
                                        )
                                        .join(
                                          " ",
                                        )}
                                      aria-current={
                                        itemIsActive
                                          ? "page"
                                          : undefined
                                      }
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
                                          size={
                                            10
                                          }
                                        />

                                      </span>

                                    </Action>
                                  );

                                },
                              )}

                            </div>

                          </section>
                        );

                      },
                    )}

                  </div>


                  {/* ========================================================
                      BOTTOM STRIP
                      ======================================================== */}

                  <div className="navbar-mega-bottom">

                    <div className="navbar-mega-bottom-copy">

                      <span>
                        Not sure where to start?
                      </span>


                      <strong>
                        Tell us what you&apos;re building and we&apos;ll help
                        define the right technology approach.
                      </strong>

                    </div>


                    <Action
                      href={
                        contactHref
                      }
                      className="navbar-mega-bottom-link"
                      onClick={
                        handleNavigation
                      }
                    >

                      Schedule a Free Consultation


                      <span>
                        <ArrowUpRightIcon />
                      </span>

                    </Action>

                  </div>

                </div>

              </div>

            )}


          {/* ================================================================
              MOBILE NAVIGATION
              ================================================================ */}

          {!simplified && (

            <div
              id="mobile-navigation"
              className={[
                "mobile-menu",

                mobileOpen
                  ? "open"
                  : "",
              ]
                .filter(
                  Boolean,
                )
                .join(
                  " ",
                )}
              aria-hidden={
                !mobileOpen
              }
            >

              <div className="mobile-menu-inner">


                {/* ==========================================================
                    HOME
                    ========================================================== */}

                <Action
                  href={
                    homeHref
                  }
                  className={[
                    "mobile-nav-link",

                    activeTab ===
                      "Home"
                      ? "active"
                      : "",
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
                  aria-current={
                    activeTab ===
                    "Home"
                      ? "page"
                      : undefined
                  }
                  onClick={
                    handleNavigation
                  }
                >
                  Home
                </Action>


                {/* ==========================================================
                    COMPANY
                    ========================================================== */}

                <Action
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
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
                  aria-current={
                    activeTab ===
                    "Company"
                      ? "page"
                      : undefined
                  }
                  onClick={
                    handleNavigation
                  }
                >
                  Company
                </Action>


                {/* ==========================================================
                    DIGITAL CAPABILITIES
                    ========================================================== */}

                <div className="mobile-solutions">

                  <button
                    type="button"
                    className={[
                      "mobile-nav-link",

                      "mobile-solutions-trigger",

                      activeTab ===
                        "Solutions"
                        ? "active"
                        : "",
                    ]
                      .filter(
                        Boolean,
                      )
                      .join(
                        " ",
                      )}
                    onClick={
                      toggleSolutionsMobile
                    }
                    aria-expanded={
                      solutionsOpen
                    }
                    aria-controls="mobile-solutions"
                    aria-current={
                      activeTab ===
                      "Solutions"
                        ? "page"
                        : undefined
                    }
                  >

                    <span>
                      Solutions
                    </span>


                    <ChevronIcon
                      open={
                        solutionsOpen
                      }
                      size={
                        14
                      }
                    />

                  </button>


                  {solutionsOpen && (

                    <div
                      id="mobile-solutions"
                      className="mobile-solutions-panel"
                    >

                      {/* ====================================================
                          MOBILE CAPABILITY INTRO
                          ==================================================== */}

                      <div className="mobile-solutions-intro">

                        <div>

                          <span>
                            Digital Capabilities
                          </span>


                          <strong>
                            Explore our expertise
                          </strong>

                        </div>


                        <Action
                          href={
                            contactHref
                          }
                          onClick={
                            handleServiceNavigation
                          }
                        >

                          Contact Us

                          <ArrowUpRightIcon />

                        </Action>

                      </div>


                      {/* ====================================================
                          MOBILE GROUPS
                          ==================================================== */}

                      <div className="mobile-solution-groups">

                        {OFFERING_GROUPS.map(
                          (
                            group,
                          ) => {

                            const groupIsActive =
                              group.items.some(
                                (
                                  item,
                                ) =>
                                  isOfferingItemActive(
                                    normalizedPathname,
                                    item,
                                  ),
                              );


                            const groupOpen =
                              mobileGroups[
                                group.key
                              ] ||
                              groupIsActive;


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

                                  groupIsActive
                                    ? "active"
                                    : "",
                                ]
                                  .filter(
                                    Boolean,
                                  )
                                  .join(
                                    " ",
                                  )}
                              >

                                {/* ==========================================
                                    GROUP TRIGGER
                                    ========================================== */}

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
                                    size={
                                      13
                                    }
                                  />

                                </button>


                                {/* ==========================================
                                    GROUP LINKS
                                    ========================================== */}

                                {groupOpen && (

                                  <div className="mobile-solution-links">

                                    {group.items.map(
                                      (
                                        item,
                                      ) => {

                                        const itemIsActive =
                                          isOfferingItemActive(
                                            normalizedPathname,
                                            item,
                                          );


                                        return (
                                          <Action
                                            key={
                                              item.title
                                            }
                                            href={
                                              item.href
                                            }
                                            className={
                                              itemIsActive
                                                ? "active"
                                                : undefined
                                            }
                                            aria-current={
                                              itemIsActive
                                                ? "page"
                                                : undefined
                                            }
                                            onClick={
                                              handleServiceNavigation
                                            }
                                          >

                                            <span>
                                              {item.title}
                                            </span>


                                            <ArrowUpRightIcon
                                              size={
                                                9
                                              }
                                            />

                                          </Action>
                                        );

                                      },
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


                {/* ==========================================================
                    CASE STUDIES
                    ========================================================== */}

                <Action
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
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
                  aria-current={
                    activeTab ===
                    "Case Studies"
                      ? "page"
                      : undefined
                  }
                  onClick={
                    handleNavigation
                  }
                >
                  Case Studies
                </Action>


                {/* ==========================================================
                    INSIGHTS
                    ========================================================== */}

                <Action
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
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
                  aria-current={
                    activeTab ===
                    "Insights"
                      ? "page"
                      : undefined
                  }
                  onClick={
                    handleNavigation
                  }
                >
                  Insights
                </Action>


                {/* ==========================================================
                    CTA
                    ========================================================== */}

                <Action
                  href={
                    resolvedCtaHref
                  }
                  className={[
                    "mobile-cta",

                    activeTab ===
                      "Contact"
                      ? "active"
                      : "",
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
                  aria-current={
                    activeTab ===
                    "Contact"
                      ? "page"
                      : undefined
                  }
                  onClick={
                    handleNavigation
                  }
                >

                  <span>
                    {ctaLabel}
                  </span>


                  <ArrowUpRightIcon />

                </Action>

              </div>

            </div>

          )}

        </div>

      </header>


      {/* ====================================================================
          NORMAL NAVBAR SPACE RESERVATION

          Transparent/adaptive hero pages can opt out.
          ==================================================================== */}

      {shouldReserveSpace ? (

        <div
          className="navbar-spacer"
          aria-hidden="true"
        />

      ) : null}

    </>
  );
}
