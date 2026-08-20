import "./HomePartners.css";

import {
  ArrowUpRight,
} from "lucide-react";


const PARTNER_IMAGE =
  "/assets/Home-assets/home-img-1.png";


export default function HomePartners() {
  return (
    <section
      className="lp1-partners"
      id="partners"
    >
      <div className="lp1-shell lp1-partners__container">

        {/* ============================================================
            LEFT CONTENT
            ============================================================ */}

        <div
          className="lp1-partners__content"
          data-reveal="left"
        >

          <h2 className="lp1-partners__heading">
            Our Strategic
            <br />
            Partners
          </h2>


          <p className="lp1-partners__text">
            Evaluate your performance with precision after each
            question using our intuitive Performance Evaluation Phase.
          </p>


          <p className="lp1-partners__text">
            Rate the difficulty level of the question on a scale of
            1 to 5 stars and choose the option that best represents
            your progress. From reviewing the question to acing all
            the test cases, we&apos;ve got you covered!
          </p>


          <a
            className="lp1-partners__button"
            href="#portfolio-lp1"
          >
            <span>
              Start Now
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
            />
          </a>

        </div>


        {/* ============================================================
            RIGHT VISUAL
            ============================================================ */}

        <div
          className="lp1-partners__visual"
          data-reveal="right"
        >

          {/* OUTER DECORATIVE ORBIT */}

          <div
            className="lp1-partners__orbit"
            aria-hidden="true"
          />


          {/* MINT CIRCLE */}

          <div
            className="lp1-partners__circle"
            aria-hidden="true"
          />


          {/* PERSON */}

          <div className="lp1-partners__photo">

            <img
              src={PARTNER_IMAGE}
              alt="TekCorp strategic technology partner"
            />

          </div>
        </div>

      </div>
    </section>
  );
}