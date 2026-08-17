import "./CaseStudies.css";

const cases = [
  {
    title:
      "Empowering Brands Through Mobile-First Digital Transformation",
    category: "Mobile & Web App",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=82",
    alt:
      "Development team collaborating around screens in a modern tech office",
    delayClass: "d1",
    href: "#",
  },
  {
    title:
      "Enterprise Workflow Automation & Scalable Cloud Migration",
    category: "SaaS & Automation",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=82",
    alt:
      "Software engineers discussing system architecture in front of monitors",
    delayClass: "d2",
    href: "#",
  },
  {
    title:
      "High-Scale E-Commerce & Omnichannel Digital Platform",
    category: "UI/UX & Platform",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
    alt:
      "Digital agency strategy team analyzing dashboard analytics on screen",
    delayClass: "d3",
    href: "#",
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-studies__container">
        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="case-studies__header sr">
          <div className="case-studies__header-left">
            <h2 className="case-studies__heading">
              <span className="case-studies__heading-gradient">
                Our Work
              </span>
            </h2>

            <p className="case-studies__intro">
              Our portfolio includes{" "}
              <strong>
                websites, digital platforms, automation systems
              </strong>
              , and branding projects developed for growth-driven
              businesses across multiple industries.
            </p>
          </div>

          <div className="case-studies__header-right">
            <h3 className="case-studies__focus-heading">
              <span className="case-studies__focus-line">
                Each Project Reflects Our Focus On
              </span>

              <span className="case-studies__focus-line case-studies__focus-line--second">
                Usability, Performance, And Measurable Results
              </span>
            </h3>
          </div>
        </div>

        {/* ==================================================
            CASE STUDY CARDS
        ================================================== */}
        <div className="case-studies__grid">
          {cases.map((item) => (
            <article
              key={item.title}
              className={`case-studies__card sr ${item.delayClass}`}
            >
              <a
                href={item.href}
                className="case-studies__link"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="case-studies__image"
                  loading="lazy"
                />

                <div
                  className="case-studies__dot-overlay"
                  aria-hidden="true"
                />

                <div
                  className="case-studies__vignette"
                  aria-hidden="true"
                />

                <div className="case-studies__content">
                  <span className="case-studies__category">
                    {item.category}
                  </span>

                  <h4 className="case-studies__title">
                    {item.title}
                  </h4>

                  <span className="case-studies__action">
                    <span>View Case Study</span>

                    <svg
                      className="case-studies__arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}