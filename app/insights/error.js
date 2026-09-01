"use client";

import ContentRouteState from "../main-website-components/ContentRouteState/ContentRouteState";


export default function Error({
  reset,
}) {
  return (
    <ContentRouteState
      eyebrow="Insights"
      title="We couldn’t load the journal."
      description="The content source is temporarily unavailable. Try again or return to the TekCorp home page."
      backHref="/home"
      backLabel="Back to Home"
      reset={reset}
    />
  );
}
