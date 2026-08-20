"use client";

import "./HomeHero.css";

import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";


/* ==========================================================================
   HERO MEDIA

   Keep your existing video.
   ========================================================================== */

const HERO_VIDEO_URL =
  "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/video-skyline-2.mp4";


const HERO_FALLBACK_IMAGE =
  "/assets/landing/metahero.png";


/* ==========================================================================
   YOUTUBE HELPER

   Allows the same component to support:
   - Direct MP4 video
   - YouTube URL
   - Fallback image
   ========================================================================== */

function getYouTubeEmbedUrl(url) {
  if (!url) {
    return "";
  }


  try {
    const parsed =
      new URL(url);

    let videoId =
      "";


    if (
      parsed.hostname.includes(
        "youtu.be",
      )
    ) {
      videoId =
        parsed.pathname.replace(
          "/",
          "",
        );
    }


    if (
      parsed.hostname.includes(
        "youtube.com",
      )
    ) {
      videoId =
        parsed.searchParams.get(
          "v",
        ) ||
        parsed.pathname
          .split("/")
          .filter(Boolean)
          .pop();
    }


    if (!videoId) {
      return "";
    }


    return (
      `https://www.youtube.com/embed/${videoId}` +
      `?autoplay=1` +
      `&mute=1` +
      `&loop=1` +
      `&playlist=${videoId}` +
      `&controls=0` +
      `&modestbranding=1` +
      `&rel=0` +
      `&playsinline=1`
    );
  } catch {
    return "";
  }
}


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeHero() {
  const youtubeEmbed =
    getYouTubeEmbedUrl(
      HERO_VIDEO_URL,
    );


  const hasDirectVideo =
    Boolean(
      HERO_VIDEO_URL &&
      !youtubeEmbed,
    );


  return (
    <section
      className="lp1-hero"
      id="Home-hero"
      data-navbar-transparent-target="true"
    >

      {/* ====================================================================
          BACKGROUND MEDIA
          ==================================================================== */}

      <div
        className="lp1-hero__media"
        aria-hidden="true"
      >

        {youtubeEmbed ? (
          <iframe
            className="lp1-hero__video lp1-hero__video--embed"
            src={youtubeEmbed}
            title=""
            tabIndex="-1"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ) : hasDirectVideo ? (
          <video
            className="lp1-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={
              HERO_FALLBACK_IMAGE
            }
          >
            <source
              src={
                HERO_VIDEO_URL
              }
            />
          </video>
        ) : (
          <img
            className="lp1-hero__fallback"
            src={
              HERO_FALLBACK_IMAGE
            }
            alt=""
          />
        )}

      </div>


      {/* ====================================================================
          DARK VIDEO OVERLAY
          ==================================================================== */}

      <div
        className="lp1-hero__overlay"
        aria-hidden="true"
      />


      {/* ====================================================================
          SUBTLE TEXTURE
          ==================================================================== */}

      <div
        className="lp1-hero__noise"
        aria-hidden="true"
      />


      {/* ====================================================================
          VERY LIGHT BRAND AURA
          ==================================================================== */}

      <div
        className="lp1-hero__aura"
        aria-hidden="true"
      />


      {/* ====================================================================
          MAIN HERO CONTENT
          ==================================================================== */}

      <div className="lp1-shell lp1-hero__inner">

        <div
          className="lp1-hero__content"
          data-reveal="left"
        >

          {/* ================================================================
              EYEBROW
              ================================================================ */}

          <p className="lp1-hero__eyebrow">
            CRAFTING SOLUTIONS, FUELLING COLLABORATIONS.
          </p>


          {/* ================================================================
              MAIN TITLE

              Wording and line structure closely follows
              the supplied design reference.
              ================================================================ */}

          <h1 className="lp1-hero__title">

            <span>
              Tekcorp - Your
            </span>

            <span>
              Partner in Digital
            </span>

            <span>
              Transformation
            </span>

          </h1>


          {/* ================================================================
              SUPPORTING COPY
              ================================================================ */}

          <p className="lp1-hero__copy">

            Explore Services, Products, and Integrations
            for a Future-Ready Business Ecosystem.
            Tailored Services, Proven Products, Seamless
            Integrations – Elevating Your Business,
            Empowering Your Growth.

          </p>


          {/* ================================================================
              SINGLE CTA

              No extra buttons.
              No proof statistics.
              No video-control button.
              ================================================================ */}

          <a
            className="lp1-hero__contact"
            href="#contact"
          >
            <span>
              Contact Now
            </span>

            <ArrowUpRight
              size={12}
              strokeWidth={2}
            />
          </a>

        </div>

      </div>


      {/* ====================================================================
          SCROLL DOWN

          Matches the small bottom-left text treatment
          in the supplied reference.
          ==================================================================== */}

      <a
        className="lp1-hero__scroll"
        href="#digital-solutions"
        aria-label="Scroll to next section"
      >
        <span>
          Scroll Down
        </span>

        <ChevronDown
          size={13}
          strokeWidth={1.7}
        />
      </a>

    </section>
  );
}