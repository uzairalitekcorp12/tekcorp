"use client";

import "./HomeHero.css";

import {
  useState,
} from "react";

import {
  ArrowRight,
} from "lucide-react";

import Button from "@/app/_shared/Button/Button";


/* ==========================================================================
   HERO VIDEO
   ========================================================================== */

const HERO_VIDEO_URL =
  "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/video-skyline-2.mp4";


/* ==========================================================================
   HERO FALLBACK IMAGE

   Temporary web fallback:
   Free night-city image from Unsplash.

   IMPORTANT FOR PRODUCTION
   --------------------------------------------------------------------------
   For the best production performance, download/compress this image later
   as WebP/AVIF and place it inside /public, for example:

   /public/assets/Home-assets/hero-city-fallback.webp

   Then replace this URL with:

   "/assets/Home-assets/hero-city-fallback.webp"

   The component does not need any other change.
   ========================================================================== */

const HERO_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1767693333492-33fee3ea7fd1?auto=format&fit=crop&fm=jpg&q=78&w=2400";


/* ========================================================================== 
   TRUST LOGOS

   Keep these aligned with the approved brand marks used in AboutBrands.
   Simple Icons gives the small circular frames crisp, lightweight artwork.
   ========================================================================== */

const TRUSTED_BRANDS = [
  {
    name:
      "Yelp",

    logo:
      "https://cdn.simpleicons.org/yelp/181818",
  },

  {
    name:
      "Odoo",

    logo:
      "https://cdn.simpleicons.org/odoo/714B67",
  },

  {
    name:
      "Shopify",

    logo:
      "https://cdn.simpleicons.org/shopify/95BF47",
  },
];


/* ==========================================================================
   HOME HERO
   ========================================================================== */

export default function HomeHero() {
  const [
    videoFailed,
    setVideoFailed,
  ] =
    useState(false);


  return (
    <section
      className="lp1-hero"
      id="Home-hero"
      data-navbar-transparent-target="true"
      aria-labelledby="home-hero-title"
    >

      {/* ====================================================================
          BACKGROUND MEDIA

          Fallback image remains underneath the video at all times.

          This provides:
          - immediate visual paint
          - no empty background before MP4 is ready
          - graceful fallback if S3 video fails

          Video:
          - autoplay
          - muted
          - loop
          - plays inline
          ==================================================================== */}

      <div
        className="lp1-hero__media"
        aria-hidden="true"
      >

        <img
          className="lp1-hero__fallback"
          src={
            HERO_FALLBACK_IMAGE
          }
          alt=""
          fetchPriority="high"
          decoding="async"
        />


        {!videoFailed ? (
          <video
            className="lp1-hero__video"
            src={
              HERO_VIDEO_URL
            }
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={
              HERO_FALLBACK_IMAGE
            }
            disablePictureInPicture
            tabIndex={-1}
            onError={() =>
              setVideoFailed(
                true,
              )
            }
          />
        ) : null}

      </div>


      {/* ====================================================================
          VISUAL OVERLAYS
          ==================================================================== */}

      <div
        className="lp1-hero__overlay"
        aria-hidden="true"
      />


      <div
        className="lp1-hero__noise"
        aria-hidden="true"
      />


      <div
        className="lp1-hero__aura"
        aria-hidden="true"
      />


      {/* ====================================================================
          CONTENT
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
            Building Digital Excellence
          </p>


          {/* ================================================================
              TITLE
              ================================================================ */}

          <h1
            className="lp1-hero__title"
            id="home-hero-title"
          >

            <span>
              Innovative IT Solutions
            </span>


            <span>
              For Smarter Businesses
            </span>

          </h1>


          {/* ================================================================
              COPY
              ================================================================ */}

          <p className="lp1-hero__copy">
            We help businesses transform, scale and thrive in the digital era
            with custom software, AI solutions, and strategic IT consulting.
          </p>


          {/* ================================================================
              ACTIONS
              ================================================================ */}

          <div className="lp1-hero__actions">

            <Button
              className="lp1-hero__action lp1-hero__action--primary"
              appearance="primary"
              href="#digital-solutions"
            >
              <span>
                Explore Services
              </span>


              <ArrowRight
                size={15}
                strokeWidth={1.8}
              />
            </Button>


            <Button
              className="lp1-hero__action lp1-hero__action--secondary"
              appearance="box"
              href="#quick-contact"
            >
              <span>
                Contact Now
              </span>
            </Button>

          </div>


          {/* ================================================================
              TRUSTED-BRAND PROOF

              Hover intentionally DOES NOT:
              - add a box
              - add a background pill
              - add a shadow around the complete line

              Premium interaction instead:
              - logos gently fan apart
              - logos lift individually
              - teal underline grows below copy
              - 150+ highlights
              - + icon rotates
              ================================================================ */}

          <div
            className="lp1-hero__trust"
            aria-label="Trusted by more than 150 businesses worldwide"
          >

            <div className="lp1-hero__trust-logos">

              {TRUSTED_BRANDS.map(
                (
                  brand,
                  index,
                ) => (
                  <span
                    className="lp1-hero__trust-logo"
                    key={
                      brand.name
                    }
                    style={{
                      "--trust-logo-index":
                        index,
                    }}
                  >

                    <img
                      src={
                        brand.logo
                      }
                      alt=""
                      width="256"
                      height="256"
                      loading="eager"
                      decoding="async"
                    />

                  </span>
                ),
              )}


              <span
                className="lp1-hero__trust-more"
                aria-hidden="true"
              >
                +
              </span>

            </div>


            <div className="lp1-hero__trust-copy-wrap">

              <p className="lp1-hero__trust-copy">

                <span>
                  Trusted by
                </span>

                {" "}

                <strong>
                  150+
                </strong>

                {" "}

                <span>
                  businesses worldwide
                </span>

              </p>


              <span
                className="lp1-hero__trust-line"
                aria-hidden="true"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}