import ContactSection from "../../_shared/ContactSection/ContactSection";
import SitePageLayout from "../../_shared/SitePageLayout/SitePageLayout";

import HomeHero from "../../main-website-components/HomeHero/HomeHero";
import HomeSolutions from "../../main-website-components/HomeSolutions/HomeSolutions";
import HomePortfolio from "../../main-website-components/HomePortfolio/HomePortfolio";
import HomePartners from "../../main-website-components/HomePartners/HomePartners";
import HomeArticles from "../../main-website-components/HomeArticles/HomeArticles";
import VideoTestimonials from "../../main-website-components/VideoTestimonials/VideoTestimonials";


const PLACEHOLDER_VIDEO_URLS = [
  "https://www.youtube.com/shorts/ImsFH9bjtCI",
  "https://youtube.com/shorts/FQagzMsmJfo?si=_dv2jxEufndTxdaS",
  "https://www.youtube.com/shorts/txWzWgjN7pE",
];


const PLACEHOLDER_POSTER_URLS = [
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1200",
];


/*
 * HOME
 * ----
 * Canonical main website Home composition.
 */
export default function Home({
  articles = [],
  projects = [],
}) {
  const firstVideoUrl =
    process.env.VIDEO_TESTIMONIAL_1_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_1_S3_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_S3_URL?.trim() ||
    PLACEHOLDER_VIDEO_URLS[0];
  const secondVideoUrl =
    process.env.VIDEO_TESTIMONIAL_2_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_2_S3_URL?.trim() ||
    PLACEHOLDER_VIDEO_URLS[1];
  const thirdVideoUrl =
    process.env.VIDEO_TESTIMONIAL_3_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_3_S3_URL?.trim() ||
    PLACEHOLDER_VIDEO_URLS[2];
  const firstPosterUrl =
    process.env.VIDEO_TESTIMONIAL_1_POSTER_S3_URL?.trim() ||
    process.env.VIDEO_TESTIMONIAL_POSTER_S3_URL?.trim() ||
    PLACEHOLDER_POSTER_URLS[0];
  const secondPosterUrl =
    process.env.VIDEO_TESTIMONIAL_2_POSTER_S3_URL?.trim() ||
    PLACEHOLDER_POSTER_URLS[1];
  const thirdPosterUrl =
    process.env.VIDEO_TESTIMONIAL_3_POSTER_S3_URL?.trim() ||
    PLACEHOLDER_POSTER_URLS[2];

  return (
    <SitePageLayout
      className="Home"
      dataPage="home"
      navbarProps={{
        variant: "adaptive",
        transparentTargetId: "Home-hero",
      }}
    >
      <HomeHero />
      <HomeSolutions />
      <VideoTestimonials
        className="home-video-testimonials"
        eyebrow=""
        title="Watch What They’re Saying About Us"
        description="We are a 360 software solutions company aiming to ensure your firm's growth. Along with our cutting-edge, worldwide competence and affordable client service."
        testimonials={[
          {
            id: "john-smith",
            name: "John Smith",
            role: "Founder",
            company: "",
            video: firstVideoUrl,
            poster: firstPosterUrl,
            previewStart: 0,
            previewDuration: 5,
          },
          {
            id: "michelle-jawing",
            name: "Michelle Jawing",
            role: "Marketing Manager",
            company: "GFO",
            video: secondVideoUrl,
            poster: secondPosterUrl,
            previewStart: 0,
            previewDuration: 5,
          },
          {
            id: "sarah-khan",
            name: "Sarah Khan",
            role: "Marketing Manager",
            company: "GFO",
            video: thirdVideoUrl,
            poster: thirdPosterUrl,
            previewStart: 0,
            previewDuration: 5,
          },
        ]}
      />
      <HomePortfolio projects={projects} />
      <HomePartners />
      <HomeArticles articles={articles} />
      <ContactSection />
    </SitePageLayout>
  );
}
