"use client";

import "./HomeCapabilityAtlas.css";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  Boxes,
  Code2,
  Compass,
  Database,
  FileText,
  GraduationCap,
  Megaphone,
  Mic,
  MousePointer2,
  Palette,
  PenTool,
  Plug,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";


/* ==========================================================================
   IMAGE CONTROL GUIDE
   ==========================================================================

   DARK CATEGORY CARDS
   --------------------------------------------------------------------------

   categoryX
   ----------
   50% = center
   60% = move focus right
   40% = move focus left

   categoryY
   ----------
   50% = center
   35% = move image up
   65% = move image down

   categoryScale
   -------------
   1.00 = normal
   1.10 = zoom in
   0.95 = zoom out

   categoryOpacity
   ----------------
   Normal image visibility.

   categoryActiveOpacity
   -----------------------
   Hover / active visibility.


   DARK STORY PANEL
   --------------------------------------------------------------------------

   storyX / storyY
   storyScale
   storyOpacity

   Work exactly the same way.


   WHITE SERVICE / PRODUCT CARDS
   --------------------------------------------------------------------------

   artX
   ----
   100% = image sits against right edge
   105% = move slightly right
   95% = move slightly left

   artY
   ----
   50% = vertical center
   40% = move up
   60% = move down

   artSize
   -------
   65% = smaller
   75% = larger

   artOpacity
   ----------
   Normal visibility.

   artHoverOpacity
   ----------------
   Visibility when hovered.

   IMPORTANT
   --------------------------------------------------------------------------

   These values are intentionally stored here instead of CSS so every
   individual artwork can be adjusted without touching layout styles.

   ========================================================================== */


const CAPABILITY_GROUPS = [
  /* =========================================================================
     01 — DESIGN & ENGINEERING
     ========================================================================= */

  {
    key:
      "designEngineering",

    number:
      "01",

    label:
      "Build",

    title:
      "Design & Engineering",

    subtitle:
      "Build and launch digital experiences.",

    heading:
      "Ideas become stronger when design and engineering move together.",

    description:
      "We combine product thinking, user experience and modern engineering to create digital systems that look considered, work beautifully and remain ready for what comes next.",

    icon:
      Code2,


    /* =======================================================================
       DARK CATEGORY IMAGE
       ======================================================================= */

    categoryImage:
      "/assets/Home-assets/CapabilityMosaic/categories/design-engineering.webp",

    categoryX:
      "54%",

    categoryY:
      "50%",

    categoryScale:
      "1.05",

    categoryOpacity:
      "0.56",

    categoryActiveOpacity:
      "0.80",


    /* =======================================================================
       DARK STORY IMAGE
       ======================================================================= */

    storyImage:
      "/assets/Home-assets/CapabilityMosaic/stories/design-engineering-story.webp",

    storyX:
      "68%",

    storyY:
      "50%",

    storyScale:
      "1.12",

    storyOpacity:
      "0.90",


    services: [
      {
        name:
          "Custom Web Development",

        meta:
          "Web platforms",

        href:
          "/services/web-development",

        icon:
          Code2,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/custom-web-development.png",

        /*
         * Pulled inward so the complete composition is more visible.
         */
        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Application Development",

        meta:
          "Digital applications",

        href:
          "/services/application-development",

        icon:
          Smartphone,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/application-development.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "CMS Development",

        meta:
          "Content systems",

        href:
          "/services/cms-development",

        icon:
          FileText,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/cms-development.png",

       artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Ecommerce Development",

        meta:
          "Digital commerce",

        href:
          "/services/ecommerce-development",

        icon:
          ShoppingCart,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/ecommerce-development.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "UI/UX Design",

        meta:
          "Digital experiences",

        href:
          "/services/ui-ux-design",

        icon:
          PenTool,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/ui-ux-design.png",

       artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Logo & Branding",

        meta:
          "Brand systems",

        href:
          "/services/logo-branding",

        icon:
          Palette,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/logo-branding.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },
    ],
  },


  /* =========================================================================
     02 — GROWTH & MARKETING
     ========================================================================= */

  {
    key:
      "growthMarketing",

    number:
      "02",

    label:
      "Grow",

    title:
      "Growth & Marketing",

    subtitle:
      "Turn visibility into measurable growth.",

    heading:
      "Turn attention into a growth system your business can actually measure.",

    description:
      "Search, social, paid acquisition, content and strategy work together around one goal: bringing the right audience closer to your business and creating measurable demand.",

    icon:
      BarChart3,


    categoryImage:
      "/assets/Home-assets/CapabilityMosaic/categories/growth-marketing.webp",

    categoryX:
      "53%",

    categoryY:
      "49%",

    categoryScale:
      "1.05",

    categoryOpacity:
      "0.54",

    categoryActiveOpacity:
      "0.78",


    storyImage:
      "/assets/Home-assets/CapabilityMosaic/stories/growth-marketing-story.webp",

    storyX:
      "67%",

    storyY:
      "48%",

    storyScale:
      "1.12",

    storyOpacity:
      "0.90",


    services: [
      {
        name:
          "Search Engine Optimization",

        meta:
          "Organic visibility",

        href:
          "/services/search-engine-optimization",

        icon:
          Search,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/search-engine-optimization.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Social Media Marketing",

        meta:
          "Audience growth",

        href:
          "/services/social-media-marketing",

        icon:
          Share2,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/social-media-marketing.png",

       artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Marketing Strategy",

        meta:
          "Growth direction",

        href:
          "/services/marketing-strategy",

        icon:
          Compass,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/marketing-strategy.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Google Ads",

        meta:
          "Paid acquisition",

        href:
          "/services/google-ads",

        icon:
          BarChart3,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/google-ads.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Content Marketing",

        meta:
          "Authority & demand",

        href:
          "/services/content-marketing",

        icon:
          Megaphone,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/content-marketing.png",

       artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },
    ],
  },


  /* =========================================================================
     03 — AI & AUTOMATION
     ========================================================================= */

  {
    key:
      "aiAutomation",

    number:
      "03",

    label:
      "Automate",

    title:
      "AI & Automation",

    subtitle:
      "Smarter systems powered by AI.",

    heading:
      "Bring intelligence into the workflows your teams already depend on.",

    description:
      "We connect AI with business knowledge, tools and operational workflows to create useful assistants and automation without turning everything into an experiment.",

    icon:
      Bot,


    categoryImage:
      "/assets/Home-assets/CapabilityMosaic/categories/ai-automation.webp",

    categoryX:
      "54%",

    categoryY:
      "50%",

    categoryScale:
      "1.05",

    categoryOpacity:
      "0.52",

    categoryActiveOpacity:
      "0.78",


    storyImage:
      "/assets/Home-assets/CapabilityMosaic/stories/ai-automation-story.webp",

    storyX:
      "69%",

    storyY:
      "49%",

    storyScale:
      "1.13",

    storyOpacity:
      "0.90",


    services: [
      {
        name:
          "AI Chatbots & Assistants",

        meta:
          "Conversational AI",

        href:
          "/services/ai-chatbot-development",

        icon:
          Bot,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/ai-chatbots.png",

        artX:
          "80%",

        artY:
          "38%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "AI Agents & Automation",

        meta:
          "Intelligent workflows",

        href:
          "/services/ai-agent-development",

        icon:
          Workflow,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/ai-agents-automation.png",

        artX:
          "112%",

        artY:
          "30%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "Voice AI & Conversational Agents",

        meta:
          "Voice experiences",

        href:
          "/services/voice-ai-agents",

        icon:
          Mic,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/voice-ai.png",

       artX:
          "112%",

        artY:
          "30%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "RAG & Knowledge Base Solutions",

        meta:
          "Grounded knowledge",

        href:
          "/services/rag-solutions",

        icon:
          Database,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/rag-knowledge-base.png",

        artX:
          "116%",

        artY:
          "32%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "MCP Server Development & Integrations",

        meta:
          "AI integrations",

        href:
          "/services/mcp-server-development",

        icon:
          Plug,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/mcp-integrations.png",

       artX:
          "116%",

        artY:
          "32%",

        artSize:
          "70%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },
    ],
  },


  /* =========================================================================
     04 — PRODUCTS
     ========================================================================= */

  {
    key:
      "products",

    number:
      "04",

    label:
      "Operate",

    title:
      "Products",

    subtitle:
      "Ready-to-use platforms for modern businesses.",

    heading:
      "Focused products built around work businesses need to manage every day.",

    description:
      "Alongside custom solutions, Tekcorp develops purpose-built software that simplifies important operational workflows while leaving room for businesses to grow.",

    icon:
      Boxes,


    categoryImage:
      "/assets/Home-assets/CapabilityMosaic/categories/products.webp",

    categoryX:
      "57%",

    categoryY:
      "50%",

    categoryScale:
      "1.03",

    categoryOpacity:
      "0.54",

    categoryActiveOpacity:
      "0.80",


    storyImage:
      "/assets/Home-assets/CapabilityMosaic/stories/products-story.webp",

    storyX:
      "69%",

    storyY:
      "49%",

    storyScale:
      "1.10",

    storyOpacity:
      "0.90",


    services: [
      {
        name:
          "TekBooks — Bookkeeping Software for SMEs",

        meta:
          "Business finance",

        description:
          "A practical bookkeeping workspace bringing customers, suppliers, transactions and reporting together in one connected system.",

        href:
          "/products/tekbooks",

        icon:
          BookOpen,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/tekbooks.png",

        artX:
          "98%",

        artY:
          "38%",

        artSize:
          "32%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },


      {
        name:
          "TekLMS — Learning Management System",

        meta:
          "Learning operations",

        description:
          "A focused learning platform designed for institutes, academies, educators and the students they serve.",

        href:
          "/products/teklms",

        icon:
          GraduationCap,

        image:
          "/assets/Home-assets/CapabilityMosaic/services/teklms.png",

        artX:
          "98%",

        artY:
          "38%",

        artSize:
          "32%",

        artOpacity:
          "0.10",

        artHoverOpacity:
          "0.80",
      },
    ],
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeCapabilityAtlas() {
  const sectionRef =
    useRef(null);


  const [
    activeKey,
    setActiveKey,
  ] =
    useState(
      CAPABILITY_GROUPS[0].key,
    );


  const [
    visitorSelected,
    setVisitorSelected,
  ] =
    useState(false);


  const [
    pauseRotation,
    setPauseRotation,
  ] =
    useState(false);


  const activeGroup =
    useMemo(
      () =>
        CAPABILITY_GROUPS.find(
          (group) =>
            group.key === activeKey,
        ) ||
        CAPABILITY_GROUPS[0],
      [
        activeKey,
      ],
    );


  const ActiveIcon =
    activeGroup.icon;


  const sparseServices =
    activeGroup.services.length <= 2;


  /* ==========================================================================
     POINTER LIGHT / PARALLAX
     ========================================================================== */

  useEffect(
    () => {
      const section =
        sectionRef.current;


      if (!section) {
        return undefined;
      }


      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;


      if (reducedMotion) {
        return undefined;
      }


      function handlePointerMove(
        event,
      ) {
        const rect =
          section.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const percentageX =
          x /
          rect.width;


        const percentageY =
          y /
          rect.height;


        section.style.setProperty(
          "--cm-pointer-x",
          `${x}px`,
        );


        section.style.setProperty(
          "--cm-pointer-y",
          `${y}px`,
        );


        section.style.setProperty(
          "--cm-parallax-x",
          `${(percentageX - 0.5) * 8}px`,
        );


        section.style.setProperty(
          "--cm-parallax-y",
          `${(percentageY - 0.5) * 6}px`,
        );
      }


      section.addEventListener(
        "pointermove",
        handlePointerMove,
      );


      return () => {
        section.removeEventListener(
          "pointermove",
          handlePointerMove,
        );
      };
    },
    [],
  );


  /* ==========================================================================
     AUTOMATIC CAPABILITY ROTATION
     ========================================================================== */

  useEffect(
    () => {
      if (
        visitorSelected ||
        pauseRotation
      ) {
        return undefined;
      }


      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;


      if (reducedMotion) {
        return undefined;
      }


      const timer =
        window.setInterval(
          () => {
            setActiveKey(
              (currentKey) => {
                const currentIndex =
                  CAPABILITY_GROUPS.findIndex(
                    (group) =>
                      group.key === currentKey,
                  );


                const nextIndex =
                  (
                    currentIndex +
                    1
                  ) %
                  CAPABILITY_GROUPS.length;


                return CAPABILITY_GROUPS[
                  nextIndex
                ].key;
              },
            );
          },
          6800,
        );


      return () => {
        window.clearInterval(
          timer,
        );
      };
    },
    [
      visitorSelected,
      pauseRotation,
    ],
  );


  function selectCapability(
    key,
  ) {
    setVisitorSelected(
      true,
    );

    setActiveKey(
      key,
    );
  }


  return (
    <section
      ref={sectionRef}
      className="cap-mosaic"
      aria-labelledby="cap-mosaic-title"
      onMouseEnter={() =>
        setPauseRotation(
          true,
        )
      }
      onMouseLeave={() =>
        setPauseRotation(
          false,
        )
      }
      onFocusCapture={() =>
        setPauseRotation(
          true,
        )
      }
      onBlurCapture={() =>
        setPauseRotation(
          false,
        )
      }
    >

      {/* ====================================================================
          AMBIENT BACKGROUND
          ==================================================================== */}

      <div
        className="cap-mosaic__ambient"
        aria-hidden="true"
      >
        <span className="cap-mosaic__pointer-light" />
        <span className="cap-mosaic__dot-field" />
        <span className="cap-mosaic__glow cap-mosaic__glow--one" />
        <span className="cap-mosaic__glow cap-mosaic__glow--two" />
      </div>


      <div className="cap-mosaic__shell">

        {/* ==================================================================
            HEADER
            ================================================================== */}

        <header className="cap-mosaic__header">

          <div
            className="cap-mosaic__heading"
            data-reveal="left"
          >

            <span className="cap-mosaic__eyebrow">
              <i />

              Explore Tekcorp
            </span>


            <h2 id="cap-mosaic-title">
              The capabilities behind

              <span>
                {" "}better digital businesses.
              </span>
            </h2>

          </div>


          <div
            className="cap-mosaic__intro"
            data-reveal="right"
          >

            <p>
              Discover how design, engineering, growth, AI and
              Tekcorp products connect to solve different parts
              of the same business journey.
            </p>


            <Link
              href="/contact"
              className="cap-mosaic__intro-link"
            >
              Discuss your goals

              <span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
            </Link>

          </div>

        </header>


        {/* ==================================================================
            INTERACTION ROW
            ================================================================== */}

        <div className="cap-mosaic__interaction-row">

          <span>
            <MousePointer2
              size={12}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            Select a capability to explore
          </span>


          <div>
            {CAPABILITY_GROUPS.map(
              (group) => (
                <i
                  key={group.key}
                  className={
                    activeKey === group.key
                      ? "is-active"
                      : ""
                  }
                />
              ),
            )}
          </div>

        </div>


        {/* ==================================================================
            DARK CAPABILITY MOSAIC
            ================================================================== */}

        <div
          className="cap-mosaic__categories"
          role="tablist"
          aria-label="Tekcorp capability categories"
        >

          {CAPABILITY_GROUPS.map(
            (
              group,
              index,
            ) => {
              const Icon =
                group.icon;


              const active =
                group.key === activeKey;


              return (
                <button
                  key={group.key}
                  id={`cap-mosaic-tab-${group.key}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="cap-mosaic-panel"
                  className={[
                    "cap-mosaic-category",
                    `cap-mosaic-category--${index + 1}`,
                    active
                      ? "is-active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    "--category-image":
                      `url("${group.categoryImage}")`,

                    "--category-image-x":
                      group.categoryX,

                    "--category-image-y":
                      group.categoryY,

                    "--category-image-scale":
                      group.categoryScale,

                    "--category-image-opacity":
                      group.categoryOpacity,

                    "--category-image-active-opacity":
                      group.categoryActiveOpacity,
                  }}
                  onClick={() =>
                    selectCapability(
                      group.key,
                    )
                  }
                >

                  <span
                    className="cap-mosaic-category__image"
                    aria-hidden="true"
                  />


                  <span
                    className="cap-mosaic-category__shade"
                    aria-hidden="true"
                  />


                  <span
                    className="cap-mosaic-category__sweep"
                    aria-hidden="true"
                  />


                  <span className="cap-mosaic-category__top">

                    <span className="cap-mosaic-category__icon">

                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />

                    </span>


                    <span className="cap-mosaic-category__number">
                      {group.number}
                    </span>

                  </span>


                  <span className="cap-mosaic-category__copy">

                    <small>
                      {group.label}
                    </small>


                    <strong>
                      {group.title}
                    </strong>


                    <span>
                      {group.subtitle}
                    </span>

                  </span>


                  <span className="cap-mosaic-category__arrow">

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                  </span>


                  <span className="cap-mosaic-category__active-pill">
                    <span>
                      Exploring
                    </span>
                  </span>


                  <i
                    className="cap-mosaic-category__active-line"
                    aria-hidden="true"
                  />

                </button>
              );
            },
          )}

        </div>


        {/* ==================================================================
            ACTIVE DETAIL
            ================================================================== */}

        <div
          id="cap-mosaic-panel"
          role="tabpanel"
          aria-labelledby={`cap-mosaic-tab-${activeGroup.key}`}
          key={activeGroup.key}
          className="cap-mosaic__detail"
        >

          {/* ================================================================
              DARK STORY CARD
              ================================================================ */}

          <article
            className="cap-mosaic__story"
            style={{
              "--story-image":
                `url("${activeGroup.storyImage}")`,

              "--story-image-x":
                activeGroup.storyX,

              "--story-image-y":
                activeGroup.storyY,

              "--story-image-scale":
                activeGroup.storyScale,

              "--story-image-opacity":
                activeGroup.storyOpacity,
            }}
          >

            <span
              className="cap-mosaic__story-image"
              aria-hidden="true"
            />


            <span
              className="cap-mosaic__story-shade"
              aria-hidden="true"
            />


            <div
              className="cap-mosaic__story-noise"
              aria-hidden="true"
            />


            <div className="cap-mosaic__story-top">

              <span className="cap-mosaic__story-icon">

                <ActiveIcon
                  size={21}
                  strokeWidth={1.55}
                  aria-hidden="true"
                />

              </span>


              <span className="cap-mosaic__story-number">
                {activeGroup.number}

                <i>
                  /04
                </i>
              </span>

            </div>


            <div className="cap-mosaic__story-copy">

              <span className="cap-mosaic__story-label">
                {activeGroup.label}
              </span>


              <h3>
                {activeGroup.heading}
              </h3>


              <p>
                {activeGroup.description}
              </p>

            </div>


            <div className="cap-mosaic__story-bottom">

              <span>
                {activeGroup.title}
              </span>


              <i />


              <span>
                {String(
                  activeGroup.services.length,
                ).padStart(
                  2,
                  "0",
                )}{" "}
                pathways
              </span>

            </div>


            <span
              className="cap-mosaic__story-light"
              aria-hidden="true"
            />

          </article>


          {/* ================================================================
              WHITE SERVICE / PRODUCT CARDS
              ================================================================ */}

          <div
            className={[
              "cap-mosaic__services",
              sparseServices
                ? "cap-mosaic__services--sparse"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >

            {activeGroup.services.map(
              (
                service,
                index,
              ) => {
                const ServiceIcon =
                  service.icon;


                return (
                  <Link
                    href={service.href}
                    key={service.href}
                    className="cap-mosaic-service"
                    style={{
                      "--service-index":
                        index,

                      "--service-art-image":
                        `url("${service.image}")`,

                      "--service-art-x":
                        service.artX,

                      "--service-art-y":
                        service.artY,

                      "--service-art-size":
                        service.artSize,

                      "--service-art-opacity":
                        service.artOpacity,

                      "--service-art-hover-opacity":
                        service.artHoverOpacity,
                    }}
                  >

                    <span
                      className="cap-mosaic-service__art"
                      aria-hidden="true"
                    />


                    <span
                      className="cap-mosaic-service__art-fade"
                      aria-hidden="true"
                    />


                    <span
                      className="cap-mosaic-service__hover-light"
                      aria-hidden="true"
                    />


                    <div className="cap-mosaic-service__top">

                      <span className="cap-mosaic-service__icon">

                        <ServiceIcon
                          size={18}
                          strokeWidth={1.55}
                          aria-hidden="true"
                        />

                      </span>


                      <span className="cap-mosaic-service__number">
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>

                    </div>


                    <div className="cap-mosaic-service__copy">

                      <span>
                        {service.meta}
                      </span>


                      <strong>
                        {service.name}
                      </strong>


                      {service.description ? (
                        <p>
                          {service.description}
                        </p>
                      ) : null}

                    </div>


                    <span className="cap-mosaic-service__arrow">

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                    </span>


                    <i
                      className="cap-mosaic-service__line"
                      aria-hidden="true"
                    />

                  </Link>
                );
              },
            )}

          </div>

        </div>


        {/* ==================================================================
            CONNECTOR
            ================================================================== */}

        <div className="cap-mosaic__connector">

          <span className="cap-mosaic__connector-label">
            One connected partner
          </span>


          <div className="cap-mosaic__connector-flow">

            <span>
              Build
            </span>

            <i />

            <span>
              Grow
            </span>

            <i />

            <span>
              Automate
            </span>

            <i />

            <span>
              Operate
            </span>

          </div>


          <span className="cap-mosaic__connector-copy">
            Combine capabilities around the problem, not around departments.
          </span>

        </div>


        {/* ==================================================================
            FOOTER
            ================================================================== */}

        <footer className="cap-mosaic__footer">

          <div className="cap-mosaic__footer-icon">

            <Sparkles
              size={17}
              strokeWidth={1.6}
              aria-hidden="true"
            />

          </div>


          <div className="cap-mosaic__footer-copy">

            <span>
              Your project may cross more than one capability.
            </span>


            <strong>
              Bring us the challenge. We&apos;ll help shape the right digital
              solution around it.
            </strong>

          </div>


          <Link
            href="/contact"
            className="cap-mosaic__footer-action"
          >
            Start a project

            <span>
              <ArrowRight
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
          </Link>

        </footer>

      </div>

    </section>
  );
}