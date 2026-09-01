import "./Footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="footer-main">
          {/* ===================================================
              COLUMN 1 — LOGO + CTA
          =================================================== */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <Image
                src="/assets/shared/whitelogo.png"
                alt="TekCorp - Empowering Innovation"
                fill
                className="footer-image-contain"
                priority
              />
            </div>

            <a
              href="tel:+923357221733"
              className="footer-call-button"
            >
              <span>Schedule a Call</span>

              <span className="footer-call-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* ===================================================
              COLUMN 2 — CONTACT
          =================================================== */}
          <div className="footer-contact">
            <h3 className="footer-heading">
              Contact Us
            </h3>

            <div className="footer-contact-list">
              <a
                href="tel:+923357221733"
                className="footer-contact-link"
              >
                <svg
                  className="footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>

                <span>+923357221733</span>
              </a>

              <a
                href="mailto:info@tekcorp.ae"
                className="footer-contact-link"
              >
                <svg
                  className="footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>

                <span>info@tekcorp.ae</span>
              </a>
            </div>
          </div>

          {/* ===================================================
              COLUMN 3 — BADGES
          =================================================== */}
          <div className="footer-badges">
            <h3 className="footer-heading">
              Badges
            </h3>

            <div className="footer-badge-groups">
              {/* ===============================================
                  ROW 1 — ALWAYS 3 LOGOS
              =============================================== */}
              <div className="footer-badge-row footer-badge-row--top">
                {/* GOOGLE */}
                <div className="footer-badge footer-badge--google">
                  <Image
                    src="/assets/shared/googlefooter.png"
                    alt="Google 5.0 Rating Badge"
                    fill
                    className="footer-image-contain"
                  />
                </div>

                {/* CLUTCH */}
                <div className="footer-badge footer-badge--clutch">
                  <Image
                    src="/assets/shared/clutchfooter.png"
                    alt="Clutch Logo Badge"
                    fill
                    className="footer-image-contain"
                  />
                </div>

                {/* TSDC */}
                <div className="footer-badge footer-badge--tsdc">
                  <Image
                    src="/assets/shared/tsdc.png"
                    alt="Top Software Development Company Badge"
                    fill
                    className="footer-image-contain"
                  />
                </div>
              </div>

              {/* ===============================================
                  ROW 2 — ALWAYS 2 LOGOS
              =============================================== */}
              <div className="footer-badge-row footer-badge-row--bottom">
                {/* GDPR */}
                <div className="footer-badge footer-badge--gdpr">
                  <Image
                    src="/assets/shared/gdprfoot.png"
                    alt="GDPR General Data Protection Regulation Seal"
                    fill
                    className="footer-image-contain"
                  />
                </div>

                {/* META */}
                <div className="footer-badge footer-badge--meta">
                  <Image
                    src="/assets/shared/metawhite.png" 
                    alt="Meta Verified Badge"
                    fill
                    className="footer-image-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM LEGAL BAR
        ===================================================== */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 TekCorp LLC. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
