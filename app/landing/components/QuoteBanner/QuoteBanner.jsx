import "./QuoteBanner.css";

export default function QuoteBanner() {
  return (
    <section className="quote-banner">
      {/* Decorative dotted background */}
      <div className="quote-banner__dots" aria-hidden="true" />

      <div className="quote-banner__container">
        <blockquote className="quote-banner__content sr">
          {/* Opening Quote */}
          <div
            className="quote-banner__mark quote-banner__mark--left"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 58 44"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* First quotation mark */}
              <path
                d="
        M17 3
        H10
        C6.1 3 3 6.1 3 10
        V19
        C3 29.8 10.2 38 21.8 40.5
        L23.8 34.1
        C17.3 32.5 13.2 28.5 12 23.5
        H17
        C20.9 23.5 24 20.4 24 16.5
        V10
        C24 6.1 20.9 3 17 3
        Z
      "
              />

              {/* Second quotation mark */}
              <path
                d="
        M47 3
        H40
        C36.1 3 33 6.1 33 10
        V19
        C33 29.8 40.2 38 51.8 40.5
        L53.8 34.1
        C47.3 32.5 43.2 28.5 42 23.5
        H47
        C50.9 23.5 54 20.4 54 16.5
        V10
        C54 6.1 50.9 3 47 3
        Z
      "
              />
            </svg>
          </div>

          {/* Quote Text */}
          <p className="quote-banner__text">
            Tekcorp helps businesses replace outdated systems with modern
            <br className="quote-banner__desktop-break" />
            digital solutions designed for performance and growth.
          </p>

          {/* Closing Quote */}
          <div
            className="quote-banner__mark quote-banner__mark--right"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 58 44"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* First quotation mark */}
              <path
                d="
        M17 3
        H10
        C6.1 3 3 6.1 3 10
        V19
        C3 29.8 10.2 38 21.8 40.5
        L23.8 34.1
        C17.3 32.5 13.2 28.5 12 23.5
        H17
        C20.9 23.5 24 20.4 24 16.5
        V10
        C24 6.1 20.9 3 17 3
        Z
      "
              />

              {/* Second quotation mark */}
              <path
                d="
        M47 3
        H40
        C36.1 3 33 6.1 33 10
        V19
        C33 29.8 40.2 38 51.8 40.5
        L53.8 34.1
        C47.3 32.5 43.2 28.5 42 23.5
        H47
        C50.9 23.5 54 20.4 54 16.5
        V10
        C54 6.1 50.9 3 47 3
        Z
      "
              />
            </svg>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
