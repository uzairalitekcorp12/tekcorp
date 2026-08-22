import Action from "@/app/_shared/Action/Action";

export default function ServiceBreadcrumb({
  current,
  className,
  separator = "/",
  showArrow = false,
  arrow,
}) {
  return (
    <nav className={className} aria-label="Breadcrumb">
      <Action href="/home">TekCorp</Action>
      <span aria-hidden="true">{separator}</span>
      <Action href="/home#digital-solutions">Our Solutions</Action>
      <span aria-hidden="true">{separator}</span>
      <strong aria-current="page">{current}</strong>
      {showArrow ? arrow : null}
    </nav>
  );
}
