import "./globals.css";

import SiteEffects from
  "./_shared/SiteEffects/SiteEffects";


/*
 * ==========================================================================
 * GLOBAL METADATA
 * ==========================================================================
 */

export const metadata = {
  title: {
    default:
      "TekCorp - Empowering Innovation",

    template:
      "%s | TekCorp",
  },

  description:
    "Digital Systems That Power Business Growth",
};


/*
 * ==========================================================================
 * VIEWPORT
 * ==========================================================================
 */

export const viewport = {
  width:
    "device-width",

  initialScale:
    1,
};


/*
 * ==========================================================================
 * ROOT LAYOUT
 * ==========================================================================
 *
 * Navbar and Footer remain page-owned.
 *
 *
 * /
 *
 * Existing/current website page
 *
 *
 * /Home
 *
 * Home.jsx
 *
 *     -> Adaptive Navbar
 *     -> Home sections
 *     -> Contact
 *     -> Footer
 *
 *
 * /About
 *
 * About.jsx
 *
 *     -> Standard Navbar
 *     -> About sections
 *     -> Contact
 *     -> Footer
 *
 *
 * SiteEffects stays global because only one instance
 * is required across the application.
 * ==========================================================================
 */

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body>

        <main
          className="tekcorp-main"
        >
          {children}
        </main>


        <SiteEffects />

      </body>

    </html>
  );
}