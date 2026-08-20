import Navbar from
  "@/app/_shared/Navbar/Navbar";


import Footer2 from
  "@/app/_shared/Footer/Footer2";


import HomeHero from
  "@/app/main-website-components/HomeHero/HomeHero";


import HomeSolutions from
  "@/app/main-website-components/HomeSolutions/HomeSolutions";


import HomePartners from
  "@/app/main-website-components/HomePartners/HomePartners";


import HomePortfolio from
  "@/app/main-website-components/HomePortfolio/HomePortfolio";


import HomeArticles from
  "@/app/main-website-components/HomeArticles/HomeArticles";


import ContactSection from
  "@/app/_shared/ContactSection/ContactSection";


export default function Home() {

  return (

    <div
      className="Home"
      data-page="Home"
    >

      {/*
       * ============================================================
       * ADAPTIVE NAVBAR
       * ============================================================
       *
       * While the Navbar overlaps:
       *
       * #Home-hero
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
        transparentTargetId="Home-hero"
        initialActiveTab="Home"
        homeHref="/home"
        ctaHref="#contact-lp1"
      />


      <HomeHero />


      <HomeSolutions />


      <HomePartners />


      <HomePortfolio />


      <HomeArticles />


      <ContactSection />


      <Footer2 />

    </div>

  );

}