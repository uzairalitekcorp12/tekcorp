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
   VIDEO TESTIMONIAL FALLBACKS

   Environment variables remain the primary source.

   These URLs are only used when a configured testimonial URL/poster
   is unavailable.
   ========================================================================== */

const PLACEHOLDER_VIDEO_URLS = [
  "https://www.youtube.com/shorts/ImsFH9bjtCI",

  "https://youtube.com/shorts/FQagzMsmJfo?si=_dv2jxEufndTxdaS",
];


const PLACEHOLDER_POSTER_URLS = [
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",

  "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200",
];


/* ==========================================================================
   HOME
   ==========================================================================

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

   ========================================================================== */

export default function Home({
  articles = [],
  projects = [],
}) {

  /* ==========================================================================
     VIDEO TESTIMONIAL 01
     ========================================================================== */

  const firstVideoUrl =
    process.env.VIDEO_TESTIMONIAL_1_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_1_S3_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_S3_URL?.trim() ||
    PLACEHOLDER_VIDEO_URLS[0];


  const firstPosterUrl =
    process.env.VIDEO_TESTIMONIAL_1_POSTER_S3_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_POSTER_S3_URL?.trim() ||
    PLACEHOLDER_POSTER_URLS[0];


  /* ==========================================================================
     VIDEO TESTIMONIAL 02
     ========================================================================== */

  const secondVideoUrl =
    process.env.VIDEO_TESTIMONIAL_2_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_2_S3_URL?.trim() ||
    PLACEHOLDER_VIDEO_URLS[1];


  const secondPosterUrl =
    process.env.VIDEO_TESTIMONIAL_2_POSTER_S3_URL?.trim() ||
    PLACEHOLDER_POSTER_URLS[1];


  /* ==========================================================================
     RENDER
     ========================================================================== */

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

          Two centered client-story videos.

          VideoTestimonials handles:
          - muted card previews
          - YouTube/direct video support
          - popup playback
          - reset on close
          - mobile responsiveness
          ==================================================================== */}

      <VideoTestimonials
        className="home-video-testimonials"
        eyebrow=""
        title="Watch What They’re Saying About Us"
        description="We are a 360 software solutions company aiming to ensure your firm's growth. Along with our cutting-edge, worldwide competence and affordable client service."
        testimonials={[
          {
            id:
              "john-smith",

            name:
              "John Smith",

            role:
              "Founder",

            company:
              "",

            video:
              firstVideoUrl,

            poster:
              firstPosterUrl,

            previewStart:
              0,

            previewDuration:
              5,
          },


          {
            id:
              "michelle-jawing",

            name:
              "Michelle Jawing",

            role:
              "Marketing Manager",

            company:
              "GFO",

            video:
              secondVideoUrl,

            poster:
              secondPosterUrl,

            previewStart:
              0,

            previewDuration:
              5,
          },
        ]}
      />


      {/* ====================================================================
          04 — TEKCORP CAPABILITY ATLAS

          Interactive gateway into the rest of the website.

          Covers:
          - Design & Engineering
          - Growth & Marketing
          - AI & Automation
          - TekCorp Products

          Each capability exposes direct links to deeper service/product pages.
          ==================================================================== */}

      <HomeCapabilityAtlas />


      {/* ====================================================================
          05 — DIGITAL SYSTEMS / PORTFOLIO
          ==================================================================== */}

      <HomePortfolio
        projects={
          projects
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
          articles
        }
      />


      {/* ====================================================================
          08 — CONTACT
          ==================================================================== */}

      <ContactSection />

    </SitePageLayout>
  );
}