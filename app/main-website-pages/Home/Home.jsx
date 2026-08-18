import Navbar from
  "@/app/_shared/Navbar/Navbar";


import Footer2 from
  "@/app/_shared/Footer/Footer2";


import HomeHero from
  "@/app/main-website-components/HomeHero/HomeHero";


import HomeAbout from
  "@/app/main-website-components/HomeAbout/HomeAbout";


import HomeBrands from
  "@/app/main-website-components/HomeBrands/HomeBrands";


import HomeCaseStudy from
  "@/app/main-website-components/HomeCaseStudy/HomeCaseStudy";


import HomeTestimonials from
  "@/app/main-website-components/HomeTestimonials/HomeTestimonials";


import HomeTeam from
  "@/app/main-website-components/HomeTeam/HomeTeam";


import Landingpage1Contact from
  "@/app/main-website-components/Landingpage1Contact/Landingpage1Contact";


export default function Home() {

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


      <HomeHero />


      <HomeAbout />


      <HomeBrands />


      <HomeCaseStudy />


      <HomeTestimonials />


      <HomeTeam />


      <Landingpage1Contact />


      <Footer2 />

    </div>

  );

}