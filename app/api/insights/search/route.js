import {
  NextResponse,
} from "next/server";

import {
  getArticleSuggestions,
} from "../../../_lib/data/articles";


export const dynamic =
  "force-dynamic";


export async function GET(request) {
  const search =
    request.nextUrl.searchParams.get(
      "q",
    ) || "";

  if (!search.trim()) {
    return NextResponse.json({
      articles: [],
    });
  }

  const articles =
    await getArticleSuggestions({
      search: search.slice(0, 100),
      limit: 6,
    });

  return NextResponse.json(
    {
      articles,
    },
    {
      headers: {
        "Cache-Control":
          "private, max-age=15, stale-while-revalidate=45",
      },
    },
  );
}