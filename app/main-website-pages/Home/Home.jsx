import ContactSection from "../../_shared/ContactSection/ContactSection";
import SitePageLayout from "../../_shared/SitePageLayout/SitePageLayout";

import HomeHero from "../../main-website-components/HomeHero/HomeHero";
import HomeSolutions from "../../main-website-components/HomeSolutions/HomeSolutions";
import HomeCapabilityAtlas from "../../main-website-components/HomeCapabilityAtlas/HomeCapabilityAtlas";
import HomeIndustries from "../../main-website-components/HomeIndustries/HomeIndustries";
import HomeProcess from "../../main-website-components/HomeProcess/HomeProcess";
import HomePortfolio from "../../main-website-components/HomePortfolio/HomePortfolio";
// import HomePartners from "../../main-website-components/HomePartners/HomePartners";
import HomeArticles from "../../main-website-components/HomeArticles/HomeArticles";
// import VideoTestimonials from "../../main-website-components/VideoTestimonials/VideoTestimonials";


/* ==========================================================================
   HOME

   Canonical TekCorp homepage composition.

   PAGE FLOW
   --------------------------------------------------------------------------

   01 — Hero

   02 — Explore TekCorp
        Capability-driven section highlighting TekCorp's wider services,
        products, AI, engineering and growth capabilities.

   03 — Industries We Serve

   04 — Core Services / Digital Expertise

   05 — Portfolio / Case Studies

   06 — Our Process
        [DESIGN TO BE UPDATED WHEN FINAL PROCESS REFERENCE IS PROVIDED]

   07 — Video Testimonials
        [CURRENTLY DISABLED — FINAL REVAMP DESIGN TO BE PROVIDED]

   08 — Articles / Insights
        [CURRENT COMPONENT — REVAMP DESIGN TO BE PROVIDED]

   09 — Contact

   10 — Footer
        Footer remains handled by SitePageLayout / existing page architecture.


   DISABLED SECTIONS
   --------------------------------------------------------------------------

   Video Testimonials:
   - currently commented out
   - component remains available for future use
   - its correct final position is AFTER Our Process
   - when restored, keep it in that position

   Strategic Partners:
   - currently commented out
   - intentionally not part of the current homepage flow
   - import and component block remain documented for future use


   INDUSTRIES ARCHITECTURE
   --------------------------------------------------------------------------

   Industry cards are managed inside:

   HomeIndustries.jsx

   Current industry card links temporarily point back to:

   #industries-we-serve

   When dedicated industry routes are created, update only the href values
   inside HomeIndustries.jsx.


   PROCESS ARCHITECTURE
   --------------------------------------------------------------------------

   Process steps are managed inside:

   HomeProcess.jsx

   Current sequence:

   01 — Discover
   02 — Plan
   03 — Build
   04 — Deliver

   IMPORTANT REMINDER:
   --------------------------------------------------------------------------

   The current HomeProcess design is temporary.

   When the final process design/reference is provided:
   - keep HomeProcess in this exact homepage position
   - redesign only HomeProcess.jsx / HomeProcess.css
   - do not move the section in the homepage sequence

   ========================================================================== */

export default function Home({
  articles = [],
  projects = [],
}) {
  const safeArticles =
    Array.isArray(
      articles,
    )
      ? articles
      : [];


  const safeProjects =
    Array.isArray(
      projects,
    )
      ? projects
      : [];


  return (
    <SitePageLayout
      className="Home"
      dataPage="home"
      navbarProps={{
        variant:
          "adaptive",

        transparentTargetId:
          "Home-hero",
      }}
    >

      {/* ====================================================================
          01 — HERO
          ==================================================================== */}

      <HomeHero />


      {/* ====================================================================
          02 — EXPLORE TEKCORP

          Main capability exploration section.

          Highlights TekCorp's connected capabilities across:

          - Design & Engineering
          - Growth & Marketing
          - AI & Automation
          - TekCorp Products

          This section comes directly after the Hero so visitors can quickly
          understand the wider TekCorp offering.
          ==================================================================== */}

      <HomeCapabilityAtlas />


      {/* ====================================================================
          03 — INDUSTRIES WE SERVE

          Current industry order:

          01 — Healthcare
          02 — Financial Services
          03 — Retail & eCommerce
          04 — Education
          05 — Travel & Hospitality
          06 — Transportation & Mobility
          07 — Manufacturing
          08 — Real Estate

          Industry content and future industry-page links are managed inside:

          HomeIndustries.jsx
          ==================================================================== */}

      <HomeIndustries />


      {/* ====================================================================
          04 — OUR CORE SERVICES / DIGITAL EXPERTISE

          Core service cards are intentionally placed after Industries.

          This creates the flow:

          What TekCorp can do
                    ↓
          Industries we understand
                    ↓
          Specific services customers can explore
          ==================================================================== */}

      <HomeSolutions />


      {/* ====================================================================
          05 — PORTFOLIO / CASE STUDIES

          Proof of TekCorp's delivered work comes immediately after the
          services section.

          The revamped Case Study design can be implemented later without
          changing this homepage position.
          ==================================================================== */}

      <HomePortfolio
        projects={
          safeProjects
        }
      />


      {/* ====================================================================
          06 — OUR PROCESS

          IMPORTANT REMINDER:
          ---------------------------------------------------------------

          Keep this section HERE.

          Final design/reference for Our Process is still to be provided.

          When the new design arrives:
          - update HomeProcess.jsx
          - update HomeProcess.css
          - DO NOT move this component from this position

          Current process:

          Discover
              ↓
          Plan
              ↓
          Build
              ↓
          Deliver
          ==================================================================== */}

      <HomeProcess />


      {/* ====================================================================
          07 — VIDEO TESTIMONIALS — CURRENTLY DISABLED

          IMPORTANT:
          ---------------------------------------------------------------

          This is the correct final homepage position for Testimonials:

          Case Studies
              ↓
          Our Process
              ↓
          Testimonials
              ↓
          Articles

          The component is currently disabled until the revamped testimonial
          design is provided.

          Automatically renders every client defined in TESTIMONIALS[].

          Handles:
          - direct S3 / CDN media
          - lazy video loading
          - viewport preloading
          - muted autoplay
          - volume controls
          - offscreen pause
          - complete uncropped videos
          - responsive layouts
          - video SEO metadata

          To restore:

          1. Uncomment:

             import VideoTestimonials from
             "../../main-website-components/VideoTestimonials/VideoTestimonials";

          2. Uncomment the component below.

          ====================================================================

      <VideoTestimonials
        className="home-video-testimonials"
        eyebrow=""
        title="Watch What They’re Saying About Us"
        description="We are a 360 software solutions company aiming to ensure your firm's growth. Along with our cutting-edge, worldwide competence and affordable client service."
      />

      ==================================================================== */}


      {/* ====================================================================
          STRATEGIC PARTNERS — CURRENTLY DISABLED

          Strategic Partners is intentionally NOT part of the current
          requested homepage sequence.

          The existing code is preserved here for future use.

          To restore later:

          1. Uncomment:

             import HomePartners from
             "../../main-website-components/HomePartners/HomePartners";

          2. Decide its new homepage position.

          3. Uncomment:

             <HomePartners />

          ====================================================================

      <HomePartners />

      ==================================================================== */}


      {/* ====================================================================
          08 — ARTICLES / INSIGHTS

          Existing HomeArticles component remains here.

          Its revamped design can be implemented later without changing
          this homepage position.
          ==================================================================== */}

      <HomeArticles
        articles={
          safeArticles
        }
      />


      {/* ====================================================================
          09 — CONTACT

          Existing contact component remains unchanged.
          ==================================================================== */}

      <ContactSection />


      {/* ====================================================================
          10 — FOOTER

          Footer remains handled by the existing SitePageLayout / page-level
          architecture. No footer changes are required here.
          ==================================================================== */}

    </SitePageLayout>
  );
}