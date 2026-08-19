import Navbar from
  "@/app/_shared/Navbar/Navbar";


import Footer2 from
  "@/app/_shared/Footer/Footer2";


import Landingpage1Hero from
  "@/app/main-website-components/HomeHero/HomeHero";


import Landingpage1Solutions from
  "@/app/main-website-components/HomeSolutions/HomeSolutions";


import Landingpage1Partners from
  "@/app/main-website-components/HomePartners/HomePartners";


import Landingpage1Portfolio from
  "@/app/main-website-components/HomePortfolio/HomePortfolio";


import Landingpage1Articles from
  "@/app/main-website-components/HomeArticles/HomeArticles";


import ContactSection from
  "@/app/_shared/ContactSection/ContactSection";


export default function Home() {

  return (

    <div
      className="landingpage1"
      data-page="landingpage1"
    >

      {/*
       * ============================================================
       * ADAPTIVE NAVBAR
       * ============================================================
       *
       * While the Navbar overlaps:
       *
       * #landingpage1-hero
       *
       * it is transparent.
       *
       * When the Hero passes above the Navbar,
       * it automatically returns to its normal white appearance.
       *
       * Scrolling back into the Hero reverses the transition.
       */}

      <Navbar
        variant="adaptive"
        transparentTargetId="landingpage1-hero"
        initialActiveTab="Home"
        homeHref="/home"
        ctaHref="#contact-lp1"
      />


      <Landingpage1Hero />


      <Landingpage1Solutions />


      <Landingpage1Partners />


      <Landingpage1Portfolio />


      <Landingpage1Articles />


      <ContactSection />


      <Footer2 />

    </div>

  );

}