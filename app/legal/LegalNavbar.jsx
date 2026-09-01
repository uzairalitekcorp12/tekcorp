"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/app/_shared/Navbar/Navbar";

const TERMS_PATH = "/legal/terms-and-conditions";
const TERMS_HERO_ID = "legal-terms-hero";

export default function LegalNavbar(props) {
  const pathname = usePathname();
  const normalizedPathname = pathname?.replace(/\/+$/, "") || "/";
  const isTermsPage = normalizedPathname === TERMS_PATH;

  return (
    <Navbar
      {...props}
      variant={isTermsPage ? "adaptive" : "default"}
      transparentTargetId={isTermsPage ? TERMS_HERO_ID : ""}
    />
  );
}
