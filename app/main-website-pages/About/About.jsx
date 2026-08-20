import Navbar from
  "@/app/_shared/Navbar/Navbar";


import Footer2 from
  "@/app/_shared/Footer/Footer2";


import AboutHero from
  "@/app/main-website-components/AboutHero/AboutHero";


import AboutAbout from
  "@/app/main-website-components/AboutOverview/AboutOverview";


import AboutBrands from
  "@/app/main-website-components/AboutBrands/AboutBrands";


import AboutCaseStudy from
  "@/app/main-website-components/AboutCaseStudy/AboutCaseStudy";


import AboutTestimonials from
  "@/app/main-website-components/AboutTestimonials/AboutTestimonials";


import AboutTeam from
  "@/app/main-website-components/AboutTeam/AboutTeam";


import ContactSection from
  "@/app/_shared/ContactSection/ContactSection";


export default function About() {

  return (

    <div
      className="tek-About-page"
      data-page="About"
    >

      {/* ============================================================
          NORMAL WHITE NAVBAR
          ============================================================ */}

      <Navbar
        variant="default"
        initialActiveTab="About"
      />


      <AboutHero />


      <AboutAbout />


      <AboutBrands />


      <AboutCaseStudy />


      <AboutTestimonials />


      <AboutTeam />


      <ContactSection />


      <Footer2 />

    </div>

  );

}