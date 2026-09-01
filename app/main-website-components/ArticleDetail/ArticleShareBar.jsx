"use client";

import {
  Check,
  Link2,
} from "lucide-react";

import {
  useState,
} from "react";


export default function ArticleShareBar({
  title,
}) {
  const [
    copied,
    setCopied,
  ] =
    useState(
      false,
    );


  function currentUrl() {
    return window.location.href;
  }


  function openShare(
    platform,
  ) {
    const url =
      encodeURIComponent(
        currentUrl(),
      );

    const text =
      encodeURIComponent(
        title || "",
      );

    const destinations = {
      facebook:
        `{TEKCORP_SOCIAL_LINKS.linkedin}`,

      linkedin:
        `{TEKCORP_SOCIAL_LINKS.facebook}`,

      x:
        `{TEKCORP_SOCIAL_LINKS.instagram}`,
    };

    const destination =
      destinations[
        platform
      ];

    if (
      !destination
    ) {
      return;
    }

    window.open(
      destination,
      "_blank",
      "noopener,noreferrer,width=760,height=640",
    );
  }


  async function copyLink() {
    try {
      await navigator.clipboard.writeText(
        currentUrl(),
      );

      setCopied(
        true,
      );

      window.setTimeout(
        () =>
          setCopied(
            false,
          ),
        1700,
      );
    } catch {
      window.location.hash =
        "";
    }
  }


  return (
    <nav
      className="tek-article-detail__shares"
      aria-label="Share this article"
    >
      <button
        type="button"
        onClick={() =>
          openShare(
            "facebook",
          )
        }
        aria-label="Share on Facebook"
      >
        f
      </button>

      <button
        type="button"
        onClick={() =>
          openShare(
            "linkedin",
          )
        }
        aria-label="Share on LinkedIn"
      >
        in
      </button>

      <button
        type="button"
        onClick={() =>
          openShare(
            "x",
          )
        }
        aria-label="Share on X"
      >
        x
      </button>

      <button
        type="button"
        onClick={
          copyLink
        }
        aria-label={
          copied
            ? "Link copied"
            : "Copy article link"
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
          />
        ) : (
          <Link2
            size={14}
            strokeWidth={1.8}
          />
        )}
      </button>
    </nav>
  );
}
