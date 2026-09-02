"use client";

import "./ContentSocialBar.css";

import {
  Check,
  Link2,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  TEKCORP_SOCIAL_LINKS,
} from "@/app/_shared/socialLinks";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/app/_shared/SocialIcons/SocialIcons";


/* ==========================================================================
   TEKCORP — REUSABLE CONTENT SOCIAL BAR
   ==========================================================================

   PURPOSE
   --------------------------------------------------------------------------

   Used on:

   - Insight / article detail pages
   - Case-study detail pages
   - Any future content/detail page

   Social buttons open Tekcorp's configured social profiles.

   Copy button copies the CURRENT browser URL.

   This means we do not duplicate social URLs inside every component.

   ========================================================================== */


export default function ContentSocialBar({
  title = "",
  ariaLabel = "Tekcorp social links",
  align = "start",
  className = "",
}) {

  const [
    copied,
    setCopied,
  ] =
    useState(false);


  const resetTimerRef =
    useRef(null);


  /* ==========================================================================
     CLEANUP
     ========================================================================== */

  useEffect(() => {

    return () => {

      if (
        resetTimerRef.current
      ) {
        window.clearTimeout(
          resetTimerRef.current,
        );
      }

    };

  }, []);


  /* ==========================================================================
     COPY CURRENT PAGE
     ========================================================================== */

  async function copyCurrentLink() {

    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }


    const url =
      window.location.href;


    try {

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        await navigator.clipboard.writeText(
          url,
        );

      } else {

        /*
         * Fallback for local environments / older browsers.
         */

        const textarea =
          document.createElement(
            "textarea",
          );


        textarea.value =
          url;


        textarea.setAttribute(
          "readonly",
          "",
        );


        textarea.style.position =
          "fixed";

        textarea.style.opacity =
          "0";

        textarea.style.pointerEvents =
          "none";


        document.body.appendChild(
          textarea,
        );


        textarea.select();


        document.execCommand(
          "copy",
        );


        textarea.remove();

      }


      setCopied(
        true,
      );


      if (
        resetTimerRef.current
      ) {
        window.clearTimeout(
          resetTimerRef.current,
        );
      }


      resetTimerRef.current =
        window.setTimeout(
          () => {

            setCopied(
              false,
            );

          },
          1700,
        );

    } catch {

      setCopied(
        false,
      );

    }

  }


  /* ==========================================================================
     CLASSES
     ========================================================================== */

  const classes = [
    "tek-content-social-bar",

    `tek-content-social-bar--${align}`,

    copied
      ? "is-copied"
      : "",

    className,
  ]
    .filter(Boolean)
    .join(" ");


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <nav
      className={classes}
      aria-label={ariaLabel}
    >

      {/* ====================================================================
          FACEBOOK
          ==================================================================== */}

      <a
        href={
          TEKCORP_SOCIAL_LINKS.facebook
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Tekcorp on Facebook"
        title="Facebook"
      >

        <FacebookIcon />

        <span className="tek-sr-only">
          Facebook
        </span>

      </a>


      {/* ====================================================================
          LINKEDIN
          ==================================================================== */}

      <a
        href={
          TEKCORP_SOCIAL_LINKS.linkedin
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Tekcorp on LinkedIn"
        title="LinkedIn"
      >

        <LinkedInIcon />

        <span className="tek-sr-only">
          LinkedIn
        </span>

      </a>


      {/* ====================================================================
          INSTAGRAM
          ==================================================================== */}

      <a
        href={
          TEKCORP_SOCIAL_LINKS.instagram
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Tekcorp on Instagram"
        title="Instagram"
      >

        <InstagramIcon />

        <span className="tek-sr-only">
          Instagram
        </span>

      </a>


      {/* ====================================================================
          DIVIDER
          ==================================================================== */}

      <span
        className="tek-content-social-bar__divider"
        aria-hidden="true"
      />


      {/* ====================================================================
          COPY CURRENT PAGE
          ==================================================================== */}

      <button
        type="button"
        onClick={
          copyCurrentLink
        }
        className={
          copied
            ? "is-copied"
            : ""
        }
        aria-label={
          copied
            ? "Page link copied"
            : title
              ? `Copy link to ${title}`
              : "Copy page link"
        }
        title={
          copied
            ? "Copied"
            : "Copy link"
        }
      >

        {copied ? (

          <Check
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />

        ) : (

          <Link2
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
          />

        )}


        <span className="tek-sr-only">

          {copied
            ? "Copied"
            : "Copy link"}

        </span>

      </button>


      {/* ====================================================================
          COPIED FEEDBACK
          ==================================================================== */}

      <span
        className="tek-content-social-bar__feedback"
        aria-live="polite"
      >

        {copied
          ? "Copied"
          : ""}

      </span>

    </nav>
  );
}