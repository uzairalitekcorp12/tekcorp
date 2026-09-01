import Navbar from "@/app/_shared/Navbar/Navbar";
import Footer2 from "@/app/_shared/Footer/Footer2";

export default function SitePageLayout({
  children,
  className,
  dataPage,
  navbarProps = {},
  navbar,
  footerProps = {},
  mainClassName,
  useMain = true,
  afterContent,
}) {
  return (
    <div className={className} data-page={dataPage}>
      {navbar || <Navbar {...navbarProps} />}

      {useMain ? <main className={mainClassName}>{children}</main> : children}

      {afterContent}

      <Footer2 {...footerProps} />
    </div>
  );
}
