import Navbar from "../../_shared/Navbar/Navbar";
import Footer2 from "../../_shared/Footer/Footer2";
import ContactSection from "../../_shared/ContactSection/ContactSection";

import HomeArticles from "../../main-website-components/HomeArticles/HomeArticles";
import CaseStudyDetailView from "../../main-website-components/CaseStudyDetail/CaseStudyDetail";


/* ==========================================================================
   CASE STUDY DETAIL PAGE COMPOSITION

   FLOW
   --------------------------------------------------------------------------
   01 — Navbar
   02 — Case study
   03 — Latest TekCorp articles
   04 — Contact
   05 — Footer

   HomeArticles and ContactSection are the exact same reusable components
   already used on the homepage.
   ========================================================================== */

export default function CaseStudyDetail({
  articles = [],
  ...caseStudyProps
}) {
  const safeArticles =
    Array.isArray(articles)
      ? articles
      : [];


  return (
    <>
      <Navbar />


      {/* ====================================================================
          CASE STUDY
          ==================================================================== */}

      <CaseStudyDetailView
        {...caseStudyProps}
      />


      {/* ====================================================================
          LATEST ARTICLES

          Avoid rendering an empty section if the article query returns
          nothing or temporarily fails.
          ==================================================================== */}

      {safeArticles.length > 0 ? (
        <HomeArticles
          articles={
            safeArticles
          }
        />
      ) : null}


      {/* ====================================================================
          CONTACT
          ==================================================================== */}

      <ContactSection />


      {/* ====================================================================
          FOOTER
          ==================================================================== */}

      <Footer2 />
    </>
  );
}