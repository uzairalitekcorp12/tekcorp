import { NextResponse } from "next/server";

const LEGACY_HOSTS = new Set([
  "tekcorpltd.com",
  "www.tekcorpltd.com",
  "tekcorpllc.com",
  "www.tekcorpllc.com",
]);

export function proxy(request) {
  const host = (request.headers.get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "");

  // The config redirects handle these hosts too. Keeping this check here makes
  // the canonical redirect work on Node hosts that execute Proxy at runtime.
  if (LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.tekcorp.ae";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  // Vercel and Heroku terminate TLS before forwarding to the Next.js process.
  // Only trust an explicitly supplied proxy protocol: redirecting when the
  // header is absent would cause a loop for some direct Node deployments.
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();

  if (
    process.env.NODE_ENV === "production" &&
    forwardedProtocol &&
    forwardedProtocol !== "https"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.tekcorp.ae";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
