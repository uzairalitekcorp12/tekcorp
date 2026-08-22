import ContentRouteState from "../main-website-components/ContentRouteState/ContentRouteState";


export default function NotFound() {
  return (
    <ContentRouteState
      eyebrow="Case Studies"
      title="That project isn’t here."
      description="It may have been unpublished, renamed or removed."
      backHref="/case-studies"
      backLabel="Browse Case Studies"
    />
  );
}
