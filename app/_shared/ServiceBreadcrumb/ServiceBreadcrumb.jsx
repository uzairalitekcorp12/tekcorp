import Breadcrumb from "@/app/_shared/Breadcrumb/Breadcrumb";

export default function ServiceBreadcrumb({
  current,
  className,
  separator = "/",
  showArrow = false,
  arrow,
}) {
  return (
    <Breadcrumb
      className={className}
      items={["Tekcorp", "Solutions", current]}
      separator={separator}
      sectionHref="/home#digital-solutions"
      trailing={showArrow ? arrow : null}
    />
  );
}
