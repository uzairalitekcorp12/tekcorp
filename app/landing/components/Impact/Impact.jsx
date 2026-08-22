import "./Impact.css";

const impacts = [
  "More efficient digital operations",
  "Improved search visibility",
  "Better customer engagement",
  "Scalable platforms for future growth",
  "Streamlined workflows and automation",
];

export default function Impact() {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-grid">
          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="impact-content sr-l">
            <h2 className="impact-heading">
              <span className="impact-heading-first">
                <span className="impact-heading-gradient-top">
                  What the
                </span>

                <span className="impact-highlight">
                  Right Digital
                </span>
              </span>

              <span className="impact-heading-second">
                Systems Can Achieve
              </span>
            </h2>

            <p className="impact-intro">
              Organizations working with TekCorp often
              <br className="impact-intro-break" />
              experience:
            </p>

            <ol className="impact-list">
              {impacts.map((item, index) => (
                <li
                  key={item}
                  className={`impact-item sr d${index + 1}`}
                >
                  <span className="impact-number">
                    {index + 1}.
                  </span>

                  <span className="impact-text">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* ==================================================
              RIGHT IMAGE
          ================================================== */}
          <div className="impact-media sr-r d2">
            <div className="impact-image-card">
              <img
                src="/assets/landing/impactjpg.png"
                alt="Business team collaborating around a laptop"
                className="impact-image"
              />

              <div
                className="impact-image-overlay"
                aria-hidden="true"
              />

              <div className="impact-quote">
                <p>
                  Our focus is simple — build digital
                  <br className="impact-quote-break" />
                  solutions that create measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}