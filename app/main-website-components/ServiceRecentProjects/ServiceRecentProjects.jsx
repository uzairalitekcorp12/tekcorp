import "./ServiceRecentProjects.css";

import ServiceProjectImage from
  "./ServiceProjectImage";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default function ServiceRecentProjects({
  eyebrow = "Selected Work",
  title = "Our Recent Projects",
  description =
    "Showcasing our commitment to thoughtful digital products, strong engineering and polished user experiences.",
  projects = [],
  ctaHref = "/Contact",
  ctaLabel = "Show all projects",
}) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <section
      className="service-projects"
      aria-labelledby="service-projects-title"
    >
      <div className="service-page-shell">
        <header
          className="service-projects__header"
          data-reveal="up"
        >
          <span className="service-projects__spark service-projects__spark--left">
            ✦
          </span>

          <span className="service-projects__eyebrow">
            {eyebrow}
          </span>

          <h2 id="service-projects-title">
            {title}
          </h2>

          <p>{description}</p>

          <span className="service-projects__spark service-projects__spark--right">
            ✦
          </span>
        </header>

        <div className="service-projects__grid">
          {projects.map((project, index) => (
            <a
              key={project.id || project.slug || `${project.title}-${index}`}
              href={project.href || ctaHref}
              className="service-project-card"
              data-reveal="up"
              style={{
                "--project-delay": `${index * 65}ms`,
              }}
              aria-label={`${project.title}. Open project.`}
            >
              <div className="service-project-card__copy">
                <h3>{project.title}</h3>
                <p>{project.category || "Digital Product"}</p>
              </div>

              <div className="service-project-card__media">
                <ServiceProjectImage
                  src={project.image?.src}
                  alt={project.image?.alt || project.title}
                />

                <span className="service-project-card__action">
                  View project
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="service-projects__footer">
          <a
            href={ctaHref}
            className="service-projects__button"
          >
            {ctaLabel}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
