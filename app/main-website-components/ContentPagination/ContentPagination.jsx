import "./ContentPagination.css";

import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


function positiveInteger(
  value,
  fallback = 1,
) {
  const parsed =
    Number.parseInt(value, 10);

  return (
    Number.isFinite(parsed) &&
    parsed > 0
  )
    ? parsed
    : fallback;
}


function pageHref({
  pathname,
  page,
  query,
}) {
  const params =
    new URLSearchParams();

  Object.entries(
    query || {},
  ).forEach(
    ([key, value]) => {
      const cleanValue =
        typeof value === "string"
          ? value.trim()
          : String(
              value ?? "",
            ).trim();

      if (cleanValue) {
        params.set(
          key,
          cleanValue,
        );
      }
    },
  );

  if (page > 1) {
    params.set(
      "page",
      String(page),
    );
  }

  const search =
    params.toString();

  return search
    ? `${pathname}?${search}`
    : pathname;
}


function getVisiblePages(
  currentPage,
  totalPages,
) {
  if (totalPages <= 7) {
    return Array.from(
      {
        length:
          totalPages,
      },
      (_, index) =>
        index + 1,
    );
  }

  const values =
    new Set([
      1,
      totalPages,
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ]);

  const pages =
    [...values]
      .filter(
        (page) =>
          page >= 1 &&
          page <= totalPages,
      )
      .sort(
        (a, b) =>
          a - b,
      );

  const output = [];

  pages.forEach(
    (page, index) => {
      const previous =
        pages[index - 1];

      if (
        previous &&
        page - previous > 1
      ) {
        output.push(
          `ellipsis-${previous}`,
        );
      }

      output.push(page);
    },
  );

  return output;
}


export default function ContentPagination({
  pathname,
  currentPage = 1,
  totalPages = 1,
  query = {},
}) {
  const safeTotalPages =
    positiveInteger(
      totalPages,
      1,
    );

  const safeCurrentPage =
    Math.min(
      positiveInteger(
        currentPage,
        1,
      ),
      safeTotalPages,
    );

  if (safeTotalPages <= 1) {
    return null;
  }

  const visiblePages =
    getVisiblePages(
      safeCurrentPage,
      safeTotalPages,
    );


  return (
    <nav
      className="tek-content-pagination"
      aria-label="Pagination"
    >
      {safeCurrentPage > 1 ? (
        <Link
          className="tek-content-pagination__arrow"
          href={pageHref({
            pathname,
            page:
              safeCurrentPage - 1,
            query,
          })}
          aria-label="Previous page"
        >
          <ChevronLeft
            size={15}
            strokeWidth={1.8}
          />
        </Link>
      ) : (
        <span
          className="tek-content-pagination__arrow is-disabled"
          aria-hidden="true"
        >
          <ChevronLeft
            size={15}
            strokeWidth={1.8}
          />
        </span>
      )}


      {visiblePages.map(
        (value) => {
          if (
            typeof value === "string"
          ) {
            return (
              <span
                key={value}
                className="tek-content-pagination__ellipsis"
                aria-hidden="true"
              >
                …
              </span>
            );
          }

          const active =
            value === safeCurrentPage;

          return (
            <Link
              key={value}
              className={[
                "tek-content-pagination__page",
                active ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              href={pageHref({
                pathname,
                page: value,
                query,
              })}
              aria-current={active ? "page" : undefined}
            >
              {value}
            </Link>
          );
        },
      )}


      {safeCurrentPage < safeTotalPages ? (
        <Link
          className="tek-content-pagination__arrow"
          href={pageHref({
            pathname,
            page:
              safeCurrentPage + 1,
            query,
          })}
          aria-label="Next page"
        >
          <ChevronRight
            size={15}
            strokeWidth={1.8}
          />
        </Link>
      ) : (
        <span
          className="tek-content-pagination__arrow is-disabled"
          aria-hidden="true"
        >
          <ChevronRight
            size={15}
            strokeWidth={1.8}
          />
        </span>
      )}
    </nav>
  );
}
