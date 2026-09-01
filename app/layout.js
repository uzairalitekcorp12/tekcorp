import "./globals.css";

import SiteEffects from "./_shared/SiteEffects/SiteEffects";


function getMetadataBase() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim();

  try {
    const url = new URL(
      configuredUrl ||
      "https://www.tekcorp.ae",
    );

    return [
      "http:",
      "https:",
    ].includes(url.protocol)
      ? url
      : new URL("https://www.tekcorp.ae");
  } catch {
    return new URL(
      "https://www.tekcorp.ae",
    );
  }
}


export const metadata = {
  metadataBase:
    getMetadataBase(),

  title: {
    default: "TekCorp - Empowering Innovation",
    template: "%s | TekCorp",
  },

  description:
    "Digital systems, product engineering and software solutions that power business growth.",
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <div className="tekcorp-main">
          {children}
        </div>

        <SiteEffects />
      </body>
    </html>
  );
}
