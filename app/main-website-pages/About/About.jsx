import Navbar from "../../_shared/Navbar/Navbar";
import ContactSection from "../../_shared/ContactSection/ContactSection";
import Footer2 from "../../_shared/Footer/Footer2";

import AboutHero from "../../main-website-components/AboutHero/AboutHero";
import AboutOverview from "../../main-website-components/AboutOverview/AboutOverview";
import AboutBrands from "../../main-website-components/AboutBrands/AboutBrands";
import AboutCaseStudy from "../../main-website-components/AboutCaseStudy/AboutCaseStudy";
import AboutTeam from "../../main-website-components/AboutTeam/AboutTeam";
import AboutTestimonials from "../../main-website-components/AboutTestimonials/AboutTestimonials";


/*
 * ABOUT
 * -----
 * This is the page that replaced the older page previously called Home.
 */
export default function About() {
  return (
    <div className="About">
      <Navbar />

      <AboutHero />
      <AboutOverview />
      <AboutBrands />
      <AboutCaseStudy />
      <AboutTeam />
      <AboutTestimonials />
      <ContactSection />

      <Footer2 />
    </div>
  );
}
