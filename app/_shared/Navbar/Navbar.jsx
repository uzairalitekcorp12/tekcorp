"use client";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const dropdownRef = useRef(null);

  /* ============================================================
     SCROLL EFFECT
     ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     CLOSE DROPDOWN / MOBILE MENU
     ============================================================ */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ============================================================
     NAVIGATION LINKS
     ============================================================ */

  const navLinks = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Our Solutions",
      hasDropdown: true,
    },
    {
      name: "Case Studies",
      href: "#",
    },
    {
      name: "Insights",
      href: "#",
    },
    {
      name: "Company",
      href: "#",
    },
  ];

  /* ============================================================
     SOLUTIONS
     ============================================================ */

  const solutionsItems = [
    {
      title: "AI Solutions",
      description: "Intelligent automation & generative ML systems",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      ),
    },
    {
      title: "Website & Software Development",
      description: "Custom web applications & scalable backend systems",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 9h18" />
          <path d="M8 14l-2 2 2 2" />
          <path d="M11 18h4" />
        </svg>
      ),
    },
    {
      title: "Search Engine Optimization",
      description: "Organic search growth & technical domain optimization",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l5 5" />
          <path d="M8 11h6M11 8v6" />
        </svg>
      ),
    },
    {
      title: "Branding & Design",
      description: "UI/UX interfaces & modern brand identities",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M12 3a9 9 0 1 0 9 9c0-1.1-.9-2-2-2h-2.5a2 2 0 0 1-2-2V6a3 3 0 0 0-2.5-3Z" />
          <circle cx="7.5" cy="12" r="1" />
          <circle cx="10" cy="7.5" r="1" />
          <circle cx="15.5" cy="7" r="1" />
        </svg>
      ),
    },
    {
      title: "EdTech Platform Development",
      description: "Interactive learning portals & education software",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M3 8.5L12 4l9 4.5-9 4.5L3 8.5Z" />
          <path d="M6 10.5V16c2.5 2 9.5 2 12 0v-5.5" />
          <path d="M21 9v6" />
        </svg>
      ),
    },
  ];

  /* ============================================================
     HELPERS
     ============================================================ */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  const handleNavigation = (name) => {
    setActiveTab(name);
    setSolutionsOpen(false);
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((previous) => !previous);
    setSolutionsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* ======================================================
              LOGO
              ====================================================== */}

          <a
            href="#"
            className="navbar-logo-link"
            aria-label="TekCorp Home"
            onClick={() => handleNavigation("Home")}
          >
            <div className="navbar-logo-image">
              <Image
                src="/assets/shared/blacklogo.png"
                alt="TekCorp - Empowering Innovation"
                fill
                priority
                sizes="(max-width: 480px) 125px, (max-width: 767px) 138px, 155px"
                className="navbar-logo-img"
              />
            </div>
          </a>

          {/* ======================================================
              DESKTOP NAVIGATION
              ====================================================== */}

          <nav className="navbar-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="navbar-dropdown"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      type="button"
                      className={`navbar-nav-link navbar-solutions-trigger ${
                        activeTab === link.name ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveTab(link.name);
                        setSolutionsOpen((previous) => !previous);
                      }}
                      aria-expanded={solutionsOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>

                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`navbar-chevron ${
                          solutionsOpen ? "open" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </button>

                    {/* Desktop Dropdown */}

                    {solutionsOpen && (
                      <div
                        className="navbar-dropdown-menu"
                        role="menu"
                        aria-label="Our Solutions"
                      >
                        <div className="navbar-dropdown-inner">
                          {solutionsItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="navbar-solution-item"
                              role="menuitem"
                              onClick={() => {
                                setSolutionsOpen(false);
                                setActiveTab("Our Solutions");
                              }}
                            >
                              <div className="navbar-solution-icon">
                                {item.icon}
                              </div>

                              <div className="navbar-solution-content">
                                <span className="navbar-solution-title">
                                  {item.title}
                                </span>

                                <span className="navbar-solution-description">
                                  {item.description}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavigation(link.name)}
                  className={`navbar-nav-link ${
                    activeTab === link.name ? "active" : ""
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* ======================================================
              RIGHT SIDE ACTIONS
              ====================================================== */}

          <div className="navbar-actions">
            {/* Desktop CTA */}

            <a
              href="#contact"
              className="navbar-cta"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>

            {/* Mobile Toggle */}

            <button
              type="button"
              className={`nav-toggle ${mobileOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* ============================================================
            MOBILE NAVIGATION
            ============================================================ */}

        <div
          id="mobile-navigation"
          className={`mobile-menu ${mobileOpen ? "open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className="mobile-menu-inner">
            {/* HOME */}

            <a
              href="#"
              onClick={() => handleNavigation("Home")}
              className={`mobile-nav-link ${
                activeTab === "Home" ? "active" : ""
              }`}
            >
              <span>Home</span>
            </a>

            {/* SOLUTIONS */}

            <div className="mobile-solutions">
              <button
                type="button"
                className={`mobile-nav-link mobile-solutions-trigger ${
                  activeTab === "Our Solutions" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("Our Solutions");
                  setSolutionsOpen((previous) => !previous);
                }}
                aria-expanded={solutionsOpen}
                aria-controls="mobile-solutions-list"
              >
                <span>Our Solutions</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`navbar-chevron ${
                    solutionsOpen ? "open" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {solutionsOpen && (
                <div
                  id="mobile-solutions-list"
                  className="mobile-solutions-list"
                >
                  {solutionsItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="mobile-solution-item"
                      onClick={closeMobileMenu}
                    >
                      <div className="mobile-solution-icon">
                        {item.icon}
                      </div>

                      <div className="mobile-solution-content">
                        <span className="mobile-solution-title">
                          {item.title}
                        </span>

                        <span className="mobile-solution-description">
                          {item.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CASE STUDIES */}

            <a
              href="#"
              onClick={() => handleNavigation("Case Studies")}
              className={`mobile-nav-link ${
                activeTab === "Case Studies" ? "active" : ""
              }`}
            >
              <span>Case Studies</span>
            </a>

            {/* INSIGHTS */}

            <a
              href="#"
              onClick={() => handleNavigation("Insights")}
              className={`mobile-nav-link ${
                activeTab === "Insights" ? "active" : ""
              }`}
            >
              <span>Insights</span>
            </a>

            {/* COMPANY */}

            <a
              href="#"
              onClick={() => handleNavigation("Company")}
              className={`mobile-nav-link ${
                activeTab === "Company" ? "active" : ""
              }`}
            >
              <span>Company</span>
            </a>

            {/* MOBILE CTA */}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mobile-cta"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}