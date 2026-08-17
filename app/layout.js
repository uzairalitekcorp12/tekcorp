import "./globals.css";

import Navbar from "./_shared/Navbar/Navbar";
import Footer from "./_shared/Footer/Footer";
import SiteEffects from "./_shared/SiteEffects/SiteEffects";

export const metadata = {
  title: {
    default: "TekCorp - Empowering Innovation",
    template: "%s | TekCorp",
  },
  description: "Digital Systems That Power Business Growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main
          style={{
            width: "100%",
            overflowX: "hidden",
          }}
        >
          {children}
        </main>

        <Footer />

        <SiteEffects />
      </body>
    </html>
  );
}