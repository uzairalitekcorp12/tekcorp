import "./MaintenanceSupportPage.css";

import Image from "next/image";

function ArrowUpRightIcon({ size = 12 }) {
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

function SupportIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <rect x="5" y="7" width="14" height="12" rx="2" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  );
}

const supportLevels = [
  {
    title: "Level 1",
    description:
      "Fast first-line support for routine questions, access issues and common service requests.",
  },
  {
    title: "Level 2",
    description:
      "Experienced engineers investigate application, integration and infrastructure issues in greater depth.",
  },
  {
    title: "Level 3",
    description:
      "Senior specialists handle complex, high-impact or unresolved technical problems and root-cause analysis.",
  },
];

const channels = [
  "Helpdesk and support portal for centralized request tracking.",
  "Email and phone support for direct communication with our team.",
  "Live chat and messaging channels for time-sensitive assistance.",
  "Knowledge resources, FAQs and service documentation for self-service support.",
];

const testimonials = [
  {
    name: "Operations Team",
    role: "Managed Technology Client",
    quote:
      "Clear communication, predictable follow-up and a team that understands how important continuity is to day-to-day operations.",
  },
  {
    name: "Digital Product Team",
    role: "Long-Term Support Client",
    quote:
      "TekCorp helps us resolve issues quickly while keeping the wider product roadmap and business priorities in view.",
  },
];

export default function MaintenanceSupportPage() {
  return (
    <div className="maintenance-support-page">
      <section className="maintenance-support-hero">
        <div className="service-page-shell maintenance-support-hero__content">
          <span className="maintenance-support-eyebrow">
            Leading the way in IT solutions
          </span>

          <h1>
            Reliable Maintenance for
            <br />
            Continuous Excellence
          </h1>

          <div className="maintenance-support-breadcrumb" aria-label="Breadcrumb">
            <a href="/Home">TekCorp</a>
            <span>›</span>
            <a href="/Home#services">Our Solutions</a>
            <span>›</span>
            <strong>Maintenance &amp; Support</strong>
            <ArrowUpRightIcon size={9} />
          </div>
        </div>
      </section>

      <section className="maintenance-support-levels" aria-labelledby="support-levels-title">
        <div className="service-page-shell">
          <header className="maintenance-support-levels__header" data-reveal="up">
            <span>Secondary Services</span>
            <h2 id="support-levels-title">Tiered Support Levels</h2>
          </header>

          <div className="maintenance-support-levels__grid">
            {supportLevels.map((level, index) => (
              <article
                key={level.title}
                className="maintenance-support-level-card"
                data-reveal="up"
                style={{ "--maintenance-delay": `${index * 70}ms` }}
              >
                <span className="maintenance-support-level-card__icon">
                  <SupportIcon />
                </span>

                <h3>{level.title}:</h3>
                <p>{level.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="maintenance-support-managers">
        <div className="service-page-shell maintenance-support-managers__grid">
          <div className="maintenance-support-managers__copy" data-reveal="left">
            <span className="maintenance-support-section-kicker">
              Dedicated service ownership
            </span>

            <h2>Dedicated Account Managers</h2>

            <p>
              Every support engagement benefits from clear ownership and a consistent point of contact. Your dedicated account manager helps coordinate requests, priorities, communication and follow-up across the service lifecycle.
            </p>

            <p>
              We combine structured support processes with practical technical context, so your team always knows what is happening, what comes next and who is accountable for progress.
            </p>

            <a href="/Contact" className="maintenance-support-link">
              Start a conversation
              <ArrowUpRightIcon />
            </a>
          </div>

          <div className="maintenance-support-managers__media" data-reveal="right">
            <div className="maintenance-support-managers__media-ring" aria-hidden="true" />

            <Image
              src="/assets/Service-assets/MaintenanceSupport/dedicated-account-manager.png"
              alt="Dedicated technology support account manager"
              fill
              sizes="(max-width: 760px) 88vw, 42vw"
              className="maintenance-support-managers__image"
            />
          </div>
        </div>
      </section>

      <section className="maintenance-support-channels">
        <div className="service-page-shell">
          <div className="maintenance-support-channels__panel" data-reveal="up">
            <div className="maintenance-support-channels__copy">
              <span className="maintenance-support-section-kicker">
                Support access
              </span>

              <h2>Support Channels</h2>

              <ul>
                {channels.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </div>

            <div className="maintenance-support-channels__media">
              <Image
                src="/assets/Service-assets/MaintenanceSupport/support-channels.png"
                alt="Mobile support channels and service portal interfaces"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
                className="maintenance-support-channels__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="maintenance-support-proof" aria-labelledby="maintenance-proof-title">
        <div className="service-page-shell maintenance-support-proof__grid">
          <div className="maintenance-support-proof__metrics" data-reveal="left">
            <span className="maintenance-support-section-kicker">
              Consistent delivery
            </span>

            <h2 id="maintenance-proof-title">
              Support designed around continuity, accountability and measurable improvement.
            </h2>

            <div className="maintenance-support-metrics">
              <article>
                <strong>15+</strong>
                <span>Years of combined delivery experience</span>
              </article>

              <article>
                <strong>24/7</strong>
                <span>Monitoring-ready support architecture</span>
              </article>
            </div>
          </div>

          <div className="maintenance-support-proof__testimonials" data-reveal="right">
            <div className="maintenance-support-proof__heading">
              <div>
                <span>Client feedback</span>
                <h3>Teams value clarity and dependable follow-through.</h3>
              </div>

              <div className="maintenance-support-proof__controls" aria-hidden="true">
                <span>←</span>
                <span>→</span>
              </div>
            </div>

            <div className="maintenance-support-testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name}>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
