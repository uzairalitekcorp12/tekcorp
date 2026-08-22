import ContentRouteState from "../main-website-components/ContentRouteState/ContentRouteState";


export default function NotFound() {
  return (
    <ContentRouteState
      eyebrow="Insights"
      title="That article isn’t here."
      description="It may have been unpublished, renamed or removed."
      backHref="/insights"
      backLabel="Browse Insights"
    />
  );
}
