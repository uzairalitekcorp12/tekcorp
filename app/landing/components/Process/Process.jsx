import "./Process.css";

const steps = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Discovery",
    desc: "Understanding business needs and project goals.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    title: "Strategy",
    desc: "Creating a roadmap for development.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Development",
    desc: "Building digital platforms using modern technologies.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Launch & Optimization",
    desc: "Improving performance after launch.",
  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="process-container">
        {/* ==================================================
            HEADING
        ================================================== */}
        <div className="process-header sr">
          <h2 className="process-heading">
            <span className="process-heading-gradient">
              How We Deliver Projects
            </span>
          </h2>
        </div>

        {/* ==================================================
            PROCESS GRID
        ================================================== */}
        <div className="process-grid">
          <div
            className="process-connector"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`process-card sr d${index + 1}`}
            >
              <span className="process-number">
                0{index + 1}
              </span>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3 className="process-title">
                {step.title}
              </h3>

              <p className="process-description">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}