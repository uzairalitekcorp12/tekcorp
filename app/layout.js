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
 * IMPORTANT ARCHITECTURE:
 *
 * Navbar is NOT global anymore.
 *
 * Every main page decides which Navbar style it needs.
 *
 *
 * /
 *
 * LandingPage.jsx
 *
 *     <Navbar variant="default" />
 *
 *
 * /home
 *
 * Home.jsx
 *
 *     <Navbar variant="default" />
 *
 *
 * /landing1
 *
 * Landingpage1.jsx
 *
 *     <Navbar
 *       variant="adaptive"
 *       transparentTargetId="landingpage1-hero"
 *     />
 *
 *
 * This lets us reuse one Navbar while still supporting different
 * Hero designs.
 * ==========================================================================
 */


export default function RootLayout({
  children,
}) {

  return (

    <html lang="en">

      <body>

        {/* ================================================================
            MAIN PAGE CONTENT
            ================================================================ */}

        <main
          className="tekcorp-main"
        >

          {children}

        </main>


        {/* ================================================================
            GLOBAL SITE EFFECTS

            One instance only for the whole website.
            ================================================================ */}

        <SiteEffects />

      </body>

    </html>

  );

}