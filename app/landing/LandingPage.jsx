import Navbar from
  "@/app/_shared/Navbar/Navbar";

import Footer from
  "@/app/_shared/Footer/Footer";


import Hero from
  "./components/Hero/Hero";

import VideoPreview from
  "./components/VideoPreview/VideoPreview";

import PainPoints from
  "./components/PainPoints/PainPoints";

import QuoteBanner from
  "./components/QuoteBanner/QuoteBanner";

import Services from
  "./components/Services/Services";

import Impact from
  "./components/Impact/Impact";

import Industries from
  "./components/Industries/Industries";

import WhyChooseUs from
  "./components/WhyChooseUs/WhyChooseUs";

import CaseStudies from
  "./components/CaseStudies/CaseStudies";

import Process from
  "./components/Process/Process";

import Testimonials from
  "./components/Testimonials/Testimonials";

import FAQ from
  "./components/FAQ/FAQ";


/*
 * ==========================================================================
 * ORIGINAL TEKCORP LANDING PAGE
 * ==========================================================================
 *
 * Route:
 *
 * /
 *
 *
 * NAVBAR:
 *
 * This page uses the regular white Navbar:
 *
 * <Navbar variant="default" />
 *
 *
 * FOOTER:
 *
 * This page continues using the original shared Footer.
 *
 *
 * Other pages can use different Navbar / Footer combinations.
 * ==========================================================================
 */


export default function LandingPage() {

  return (

    <div
      className="tekcorp-landing-page"
      data-page="landing"
    >

      {/* ================================================================
          DEFAULT / WHITE NAVBAR
          ================================================================ */}

      <Navbar
        variant="default"
        initialActiveTab="Home"
        homeHref="/"
        ctaHref="#contact"
      />


      {/* ================================================================
          PAGE SECTIONS
          ================================================================ */}

      <Hero />


      <VideoPreview />


      <PainPoints />


      <QuoteBanner />


      <Services />


      <Impact />


      <Industries />


      <WhyChooseUs />


      <CaseStudies />


      <Process />


      <Testimonials />


      <FAQ />


      {/* ================================================================
          ORIGINAL FOOTER
          ================================================================ */}

      <Footer />

    </div>

  );

}