import Navbar from
  "@/app/_shared/Navbar/Navbar";


import Footer2 from
  "@/app/_shared/Footer/Footer2";


import AboutHero from
  "@/app/main-website-components/AboutHero/AboutHero";


import HomeAbout from
  "@/app/main-website-components/AboutOverview/AboutOverview";


import HomeBrands from
  "@/app/main-website-components/AboutBrands/AboutBrands";


import HomeCaseStudy from
  "@/app/main-website-components/AboutCaseStudy/AboutCaseStudy";


import HomeTestimonials from
  "@/app/main-website-components/AboutTestimonials/AboutTestimonials";


import HomeTeam from
  "@/app/main-website-components/AboutTeam/AboutTeam";


import ContactSection from
  "@/app/_shared/ContactSection/ContactSection";


export default function About() {

  return (

    <div
      className="tek-home-page"
      data-page="home"
    >

      {/* ============================================================
          NORMAL WHITE NAVBAR
          ============================================================ */}

      <Navbar
        variant="default"
        initialActiveTab="Home"
      />


      <AboutHero />


      <HomeAbout />


      <HomeBrands />


      <HomeCaseStudy />


      <HomeTestimonials />


      <HomeTeam />


      <ContactSection />


      <Footer2 />

    </div>

  );

}