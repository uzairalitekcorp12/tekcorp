import Link from "next/link";

function isInternalHref(href) {
  return typeof href === "string" && (href.startsWith("/") || href.startsWith("#"));
}

/**
 * Shared action primitive.
 *
 * It renders a Next.js Link for internal navigation, a normal anchor for
 * external URLs, and a button when no href is supplied. Existing class names
 * are intentionally passed through so page-specific layouts remain unchanged.
 */
export default function Action({
  href,
  children,
  className,
  type = "button",
  ...props
}) {
  if (href && isInternalHref(href)) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}
