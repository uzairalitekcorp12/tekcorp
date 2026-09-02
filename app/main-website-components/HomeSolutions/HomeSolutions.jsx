import "./HomeSolutions.css";

import {
  AppWindow,
  ArrowUpRight,
  Bot,
  Code2,
  Megaphone,
  Target,
  Workflow,
} from "lucide-react";
import Button from "@/app/_shared/Button/Button";


/* ==========================================================================
   DIGITAL SOLUTIONS DATA

   All cards intentionally share the same structure.

   There is NO permanently featured card.

   Every card:
   - starts white
   - becomes dark on hover
   - uses the same typography
   - uses the same spacing
   - uses the same CTA
   ========================================================================== */

const solutions = [
  {
    icon: Code2,

    title:
      "Custom Web Development",

    category:
      "Engineering",

    href:
      "/services/web-development",

    description:
      "High-performance websites and scalable web platforms built around your brand, users, and business goals.",
  },

  {
    icon: AppWindow,

    title:
      "Application Development",

    category:
      "Product Engineering",

    href:
      "/services/application-development",

    description:
      "Purpose-built web and mobile applications that simplify workflows, integrate systems, and scale with your operations.",
  },

  {
    icon: Bot,

    title:
      "AI Chatbots & Assistants",

    category:
      "Conversational AI",

    href:
      "/services/ai-chatbot-development",

    description:
      "Helpful conversational AI for customer support, lead qualification, internal assistance, and always-on engagement.",
  },

  {
    icon: Workflow,

    title:
      "AI Agents & Automation",

    category:
      "Intelligent Automation",

    href:
      "/services/ai-agent-development",

    description:
      "Autonomous AI workflows that connect tools, coordinate tasks, and automate repeatable work with human oversight.",
  },

  {
    icon: Megaphone,

    title:
      "Social Media Marketing",

    category:
      "Digital Growth",

    href:
      "/services/social-media-marketing",

    description:
      "Platform-ready content, community management, and campaigns designed to grow reach and meaningful engagement.",
  },

  {
    icon: Target,

    title:
      "Marketing Strategy",

    category:
      "Growth Strategy",

    href:
      "/services/marketing-strategy",

    description:
      "Research-led positioning, channel planning, and measurable roadmaps that turn marketing activity into business growth.",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeSolutions() {
  return (
    <section
      className="lp1-solutions"
      id="digital-solutions"
      aria-labelledby="lp1-solutions-title"
    >
      <div className="lp1-shell">

        {/* ==================================================================
            SECTION INTRO
            ================================================================== */}

        <header
          className="lp1-solutions__intro"
          data-reveal="up"
        >

          {/* LEFT HEADING */}

          <div className="lp1-solutions__heading-block">

            <p className="lp1-section-kicker">
              Core Services
            </p>


            <h2
              className="lp1-display-heading"
              id="lp1-solutions-title"
            >
              Digital Expertise,

              <br />

              Built Around You
            </h2>

          </div>


          {/* RIGHT INTRO COPY */}

          <p className="lp1-solutions__lead">
            From custom platforms and intelligent automation
            to growth-focused marketing, our six core services
            give you one experienced team from idea to impact.
          </p>

        </header>


        {/* ==================================================================
            SOLUTIONS GRID
            ================================================================== */}

        <div className="lp1-solutions__grid">

          {solutions.map(
            (
              solution,
              index,
            ) => {
              const Icon =
                solution.icon;


              return (
                <article
                  className="lp1-solution-card"
                  key={
                    solution.title
                  }
                  data-reveal="up"
                  style={{
                    "--lp1-card-delay":
                      `${index * 65}ms`,
                  }}
                >

                  {/* ========================================================
                      HOVER DECORATIONS
                      ======================================================== */}

                  <span
                    className="lp1-solution-card__glow"
                    aria-hidden="true"
                  />


                  <span
                    className="lp1-solution-card__accent"
                    aria-hidden="true"
                  />


                  {/* ========================================================
                      ICON
                      ======================================================== */}

                  <div className="lp1-solution-card__icon-wrap">

                    <span className="lp1-solution-card__icon">

                      <Icon
                        size={23}
                        strokeWidth={1.65}
                        aria-hidden="true"
                      />

                    </span>


                    <span className="lp1-solution-card__category">
                      {solution.category}
                    </span>

                  </div>


                  {/* ========================================================
                      CONTENT
                      ======================================================== */}

                  <div className="lp1-solution-card__content">

                    <h3>
                      {solution.title}
                    </h3>


                    <p>
                      {solution.description}
                    </p>

                  </div>


                  {/* ========================================================
                      CTA
                      ======================================================== */}

                  <Button
                    appearance="text"
                    className="lp1-solution-card__link"
                    href={solution.href}
                    aria-label={`Explore ${solution.title}`}
                  >

                    <span className="lp1-solution-card__link-label">
                      Explore Service
                    </span>


                    <span className="lp1-solution-card__link-icon">

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                      />

                    </span>

                  </Button>

                </article>
              );
            },
          )}

        </div>

      </div>
    </section>
  );
}
