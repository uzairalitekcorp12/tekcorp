import "./globals.css";

import SiteEffects from
  "./_shared/SiteEffects/SiteEffects";


/*
 * ==========================================================================
 * TEKCORP — GLOBAL METADATA
 * ==========================================================================
 */

export const metadata = {
  applicationName:
    "TekCorp",

  title: {
    default:
      "TekCorp - Empowering Innovation",

    template:
      "%s | TekCorp",
  },

  description:
    "Digital Systems That Power Business Growth",

  keywords: [
    "TekCorp",
    "Software Development",
    "Website Development",
    "Custom Software",
    "AI Automation",
    "Mobile App Development",
    "UI UX Design",
    "Digital Transformation",
    "E-Commerce Development",
    "Pakistan Software Company",
  ],

  robots: {
    index:
      true,

    follow:
      true,
  },

  category:
    "technology",
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

  viewportFit:
    "cover",
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
 * Existing/current LandingPage
 *
 *
 * /Home
 *
 * Home.jsx
 *
 *     -> Navbar
 *     -> Home sections
 *     -> Footer
 *
 *
 * /About
 *
 * About.jsx
 *
 *     -> Navbar
 *     -> About sections
 *     -> Footer
 *
 *
 * /Contact
 *
 * Contact.jsx
 *
 *     -> Navbar
 *     -> ContactPage
 *     -> Footer2
 *
 *
 * SiteEffects stays GLOBAL.
 *
 * There must be only one SiteEffects instance in the application.
 *
 * IMPORTANT:
 * Contact.jsx should therefore NOT import/render SiteEffects separately.
 *
 * The wrapper below is deliberately a <div>, not <main>.
 *
 * Individual website pages are responsible for their own semantic <main>
 * element. This prevents Navbar/Footer from accidentally being placed
 * inside a global <main>.
 * ==========================================================================
 */

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>

        <div
          className="tekcorp-main"
        >
          {children}
        </div>


        <SiteEffects />

      </body>
    </html>
  );
}
