import Action from "@/app/_shared/Action/Action";

export default function Breadcrumb({
  items = [],
  className,
  separator = "/",
  homeHref = "/home",
  sectionHref,
  trailing,
}) {
  const normalizedItems = items
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          label: item,
          href: index === 0 ? homeHref : index === 1 ? sectionHref : undefined,
        };
      }

      return item;
    })
    .filter((item) => item?.label);

  return (
    <nav className={className} aria-label="Breadcrumb">
      {normalizedItems.map((item, index) => {
        const isCurrent = index === normalizedItems.length - 1;

        return (
          <span key={`${item.label}-${index}`}>
            {index > 0 ? <span aria-hidden="true">{separator}</span> : null}

            {isCurrent || !item.href ? (
              <strong aria-current={isCurrent ? "page" : undefined}>
                {item.label}
              </strong>
            ) : (
              <Action href={item.href}>{item.label}</Action>
            )}
          </span>
        );
      })}

      {trailing}
    </nav>
  );
}
