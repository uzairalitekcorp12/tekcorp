import Navbar from "../../_shared/Navbar/Navbar";
import ContactSection from "../../_shared/ContactSection/ContactSection";
import Footer2 from "../../_shared/Footer/Footer2";

import HomeHero from "../../main-website-components/HomeHero/HomeHero";
import HomeSolutions from "../../main-website-components/HomeSolutions/HomeSolutions";
import HomePortfolio from "../../main-website-components/HomePortfolio/HomePortfolio";
import HomePartners from "../../main-website-components/HomePartners/HomePartners";
import HomeArticles from "../../main-website-components/HomeArticles/HomeArticles";


/*
 * HOME
 * ----
 * Canonical main website Home composition.
 */
export default function Home() {
  return (
    <div className="Home">
      <Navbar
        variant="adaptive"
        transparentTargetId="Home-hero"
      />

      <HomeHero />
      <HomeSolutions />
      <HomePortfolio />
      <HomePartners />
      <HomeArticles />
      <ContactSection />

      <Footer2 />
    </div>
  );
}
