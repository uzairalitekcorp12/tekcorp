import ContactSection from "../../_shared/ContactSection/ContactSection";
import SitePageLayout from "../../_shared/SitePageLayout/SitePageLayout";

import HomeHero from "../../main-website-components/HomeHero/HomeHero";
import HomeSolutions from "../../main-website-components/HomeSolutions/HomeSolutions";
import HomeCapabilityAtlas from "../../main-website-components/HomeCapabilityAtlas/HomeCapabilityAtlas";
import HomePortfolio from "../../main-website-components/HomePortfolio/HomePortfolio";
import HomePartners from "../../main-website-components/HomePartners/HomePartners";
import HomeArticles from "../../main-website-components/HomeArticles/HomeArticles";
import VideoTestimonials from "../../main-website-components/VideoTestimonials/VideoTestimonials";


/* ==========================================================================
   HOME

   Canonical TekCorp homepage composition.

   PAGE FLOW
   --------------------------------------------------------------------------

   01 — Hero
   02 — Services / Digital Expertise
   03 — Video Testimonials
   04 — Interactive Capability Atlas
   05 — Portfolio / Case Studies
   06 — Strategic Partners
   07 — Articles / Insights
   08 — Contact

   TESTIMONIAL ARCHITECTURE
   --------------------------------------------------------------------------

   Testimonial data lives ONLY inside:

   VideoTestimonials.jsx

   To add a future client:
   - add one object to TESTIMONIALS[]
   - do not edit this Home component

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
          02 — DIGITAL EXPERTISE / SERVICES
          ==================================================================== */}

      <HomeSolutions />


      {/* ====================================================================
          03 — VIDEO TESTIMONIALS

          Automatically renders every client defined in TESTIMONIALS[].

          Handles:
          - direct S3 / CDN media
          - lazy video loading
          - viewport preloading
          - muted previews
          - offscreen pause
          - complete uncropped videos
          - responsive grid
          - popup playback
          - native volume / unmute controls
          - video SEO metadata
          ==================================================================== */}

      <VideoTestimonials
        className="home-video-testimonials"
        eyebrow=""
        title="Watch What They’re Saying About Us"
        description="We are a 360 software solutions company aiming to ensure your firm's growth. Along with our cutting-edge, worldwide competence and affordable client service."
      />


      {/* ====================================================================
          04 — CAPABILITY ATLAS
          ==================================================================== */}

      <HomeCapabilityAtlas />


      {/* ====================================================================
          05 — PORTFOLIO / CASE STUDIES
          ==================================================================== */}

      <HomePortfolio
        projects={
          safeProjects
        }
      />


      {/* ====================================================================
          06 — STRATEGIC PARTNERS
          ==================================================================== */}

      <HomePartners />


      {/* ====================================================================
          07 — ARTICLES / INSIGHTS
          ==================================================================== */}

      <HomeArticles
        articles={
          safeArticles
        }
      />


      {/* ====================================================================
          08 — CONTACT
          ==================================================================== */}

      <ContactSection />

    </SitePageLayout>
  );
}