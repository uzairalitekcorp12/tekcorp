"use client";
import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    projectDetails: "",
  });

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const animatedElements = hero.querySelectorAll(
      ".sr, .sr-l, .sr-r"
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Quote Request:", formData);
  };

  return (
    <section ref={heroRef} className="hero-reference">
      <div className="hero-reference__inner">
        {/* =====================================================
            LEFT COLUMN
        ===================================================== */}
        <div className="hero-reference__left">
          {/* ===================================================
              MAIN HEADING
          =================================================== */}
          <div className="sr d1">
            <h1 className="hero-reference__heading">
              {/* FIRST LINE */}
              <span className="hero-reference__first-line">
                <span className="hero-reference__gradient-build">
                  Build
                </span>

                <span className="hero-reference__highlight">
                  Digital Systems
                </span>

                <span className="hero-reference__gradient-that">
                  That
                </span>
              </span>

              {/* SECOND LINE */}
              {/* SECOND LINE */}
            <span className="hero-reference__second-line hero-reference__gradient-main">
             Power Business Growth
            </span>
            </h1>
          </div>

          {/* ===================================================
              SUPPORTING TEXT
          =================================================== */}
          <div className="sr d2">
            <p className="hero-reference__lead">
              Technology should move your
              <br className="hero-reference__desktop-break" />
              business forward — not slow it down.
            </p>

            <p className="hero-reference__description">
              At TekCorp, we design and develop digital platforms that help
              businesses automate operations, strengthen their online
              presence, and scale confidently.
            </p>
          </div>

          {/* ===================================================
              PARTNERS
          =================================================== */}
          <div className="sr d3">
            <div className="hero-reference__partners">
              <p className="hero-reference__partner-title">
                More than{" "}
                <span className="hero-reference__partner-number">
                  100+
                </span>{" "}
                Companies partner
              </p>

              <div className="hero-reference__logos">
                {/* GOOGLE */}
                <div className="hero-reference__logo hero-reference__logo--google">
                  <Image
                    src="/assets/landing/goo.png" 
                    alt="Google Rating"
                    width={100}
                    height={40}
                    className="hero-reference__logo-image"
                  />
                </div>

                {/* CLUTCH */}
                <div className="hero-reference__logo hero-reference__logo--clutch">
                  <Image
                    src="/assets/landing/clutchnew.png"
                    alt="Clutch"
                    width={120}
                    height={40}
                    className="hero-reference__logo-image"
                  />
                </div>

                {/* CERTIFICATION */}
                <div className="hero-reference__logo hero-reference__logo--certification">
                  <Image
                    src="/assets/landing/tsdc.png"
                    alt="Certification"
                    width={52}
                    height={44}
                    className="hero-reference__logo-image"
                  />
                </div>

                {/* META */}
                <div className="hero-reference__logo hero-reference__logo--meta">
                  <Image
                    src="/assets/landing/metahero.png"
                    alt="Meta Verified"
                    width={112}
                    height={42}
                    className="hero-reference__logo-image"
                  />
                </div>

                {/* GDPR */}
                <div className="hero-reference__logo hero-reference__logo--gdpr">
                  <Image
                    src="/assets/landing/gdpr.png"
                    alt="GDPR"
                    width={46}
                    height={46}
                    className="hero-reference__logo-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN
        ===================================================== */}
        <div className="hero-reference__right sr-r d2">
          <div className="hero-reference__form-card">
            <h2 className="hero-reference__form-heading">
              Helping businesses build smarter digital ecosystems.
            </h2>

            <form
              onSubmit={handleSubmit}
              className="hero-reference__form"
            >
              {/* ROW 1 */}
              <div className="hero-reference__form-row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="hero-reference__field"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="+01 3254 547 780"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="hero-reference__field"
                />
              </div>

              {/* ROW 2 */}
              <div className="hero-reference__form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="hero-reference__field"
                />

                <input
                  type="text"
                  name="service"
                  placeholder="Services"
                  value={formData.service}
                  onChange={handleChange}
                  className="hero-reference__field"
                />
              </div>

              {/* PROJECT DETAILS */}
              <textarea
                name="projectDetails"
                placeholder="Project Details"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={5}
                className="hero-reference__textarea"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="hero-reference__button"
              >
                Get Custom Development Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}