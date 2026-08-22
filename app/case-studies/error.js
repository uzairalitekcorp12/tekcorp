"use client";

import ContentRouteState from "../main-website-components/ContentRouteState/ContentRouteState";


export default function Error({
  reset,
}) {
  return (
    <ContentRouteState
      eyebrow="Case Studies"
      title="We couldn’t load the portfolio."
      description="The content source is temporarily unavailable. Try again or return to the TekCorp home page."
      backHref="/Home"
      backLabel="Back to Home"
      reset={reset}
    />
  );
}
