import Navbar from
  "@/app/_shared/Navbar/Navbar";


import Footer2 from
  "@/app/_shared/Footer/Footer2";


import Landingpage1Hero from
  "@/app/main-website-components/Landingpage1Hero/Landingpage1Hero";


import Landingpage1Solutions from
  "@/app/main-website-components/Landingpage1Solutions/Landingpage1Solutions";


import Landingpage1Partners from
  "@/app/main-website-components/Landingpage1Partners/Landingpage1Partners";


import Landingpage1Portfolio from
  "@/app/main-website-components/Landingpage1Portfolio/Landingpage1Portfolio";


import Landingpage1Articles from
  "@/app/main-website-components/Landingpage1Articles/Landingpage1Articles";


import Landingpage1Contact from
  "@/app/main-website-components/Landingpage1Contact/Landingpage1Contact";


export default function Landingpage1() {

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


      <Landingpage1Contact />


      <Footer2 />

    </div>

  );

}