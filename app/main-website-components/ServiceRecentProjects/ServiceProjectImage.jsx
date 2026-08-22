"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK_IMAGE =
  "/assets/Service-assets/Projects/project-01.png";

export default function ServiceProjectImage({
  src,
  alt,
}) {
  const [currentSrc, setCurrentSrc] =
    useState(src || FALLBACK_IMAGE);

  return (
    <Image
      src={currentSrc}
      alt={alt || "TekCorp service project"}
      fill
      sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 540px"
      className="service-project-card__image"
      onError={() => {
        if (currentSrc !== FALLBACK_IMAGE) {
          setCurrentSrc(FALLBACK_IMAGE);
        }
      }}
    />
  );
}
