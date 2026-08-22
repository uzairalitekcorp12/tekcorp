import "./globals.css";

import SiteEffects from "./_shared/SiteEffects/SiteEffects";


export const metadata = {
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
