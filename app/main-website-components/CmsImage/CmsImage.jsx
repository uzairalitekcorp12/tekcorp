"use client";

/* eslint-disable @next/next/no-img-element */

import "./CmsImage.css";

import {
  useState,
} from "react";


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function isSafeImageSource(value) {
  const source =
    textValue(value);

  if (!source) {
    return false;
  }

  if (
    source.startsWith("/") &&
    !source.startsWith("//")
  ) {
    return true;
  }

  try {
    return ["http:", "https:"].includes(
      new URL(source).protocol,
    );
  } catch {
    return false;
  }
}


export default function CmsImage({
  src,
  alt = "",
  className = "",
  fallbackClassName = "",
  fallbackLabel = "Tekcorp",
  fallbackText = "",
  priority = false,
  sizes,
}) {
  const [
    failed,
    setFailed,
  ] =
    useState(false);

  const source =
    isSafeImageSource(src)
      ? textValue(src)
      : "";

  if (
    !source ||
    failed
  ) {
    return (
      <span
        className={[
          "tek-cms-image-fallback",
          fallbackClassName,
        ]
          .filter(Boolean)
          .join(" ")}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
      >
        <span>
          {fallbackText || fallbackLabel}
        </span>
      </span>
    );
  }

  return (
    <img
      className={[
        "tek-cms-image",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      src={source}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
