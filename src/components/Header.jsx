import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", internal: true },
  {
    label: "Services",
    children: [
      {
        label: "Managed & Secure",
        children: [
          { label: "Managed IT & Help Desk", href: "/managed-it-help-desk" },
          { label: "Cybersecurity", href: "/cybersecurity-services" },
          { label: "Backup & Business Continuity", href: "#" },
          { label: "Technology Strategy", href: "/technology-strategy" },
        ],
      },
      {
        label: "Connect & Collaborate",
        children: [
          { label: "Microsoft 365 & Google Workspace", href: "#" },
          { label: "Networks, Wi-Fi & Internet", href: "#" },
          {
            label: "Cloud Phones & Communications",
            href: "/cloud-phones-communications",
          },
        ],
      },
      {
        label: "Move, Build & Grow",
        children: [
          {
            label: "New Offices & Buildouts",
            href: "/project-management-buildouts",
          },
          { label: "Moves & Expansions", href: "#" },
          { label: "IT Projects", href: "#" },
        ],
      },
    ],
  },
  { label: "Industries", href: "/industries", internal: true },
  { label: "About", href: "/about", internal: true },
  { label: "Insights", href: "/insights", internal: true },
  { label: "Contact", href: "/contact", internal: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOpenCategory, setMobileOpenCategory] = useState(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileOpenCategory(null);
  };

  const servicesLink = navLinks.find((l) => l.label === "Services");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a href="/" className="logo">
            <img
              src="/logo.jpg"
              alt="InfoManage"
              style={{
                height: 56,
                width: "auto",
                display: "block",
              }}
            />
          </a>

          <nav className="navmenu">
            <ul>
              {navLinks.map((link, i) =>
                link.children ? (
                  <li
                    key={i}
                    className="dropdown"
                    style={{ padding: "10px 14px" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => {
                      setServicesOpen(false);
                      setOpenCategory(null);
                    }}
                  >
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>{link.label}</span>
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul
                      className={`dropdown-menu${servicesOpen ? " show" : ""}`}
                    >
                      {link.children.map((child, j) =>
                        child.children ? (
                          <li
                            key={j}
                            className="dropdown"
                            onMouseEnter={() => setOpenCategory(j)}
                            onMouseLeave={() => setOpenCategory(null)}
                          >
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              <span>{child.label}</span>
                              <i className="bi bi-chevron-right toggle-dropdown" />
                            </a>
                            <ul
                              className={`dropdown-menu${openCategory === j ? " show" : ""}`}
                            >
                              {child.children.map((grandchild, k) => (
                                <li key={k}>
                                  <Link to={grandchild.href}>
                                    {grandchild.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={j}>
                            <Link to={child.href}>{child.label}</Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </li>
                ) : (
                  <li key={i} style={{ padding: "10px 14px" }}>
                    {link.internal ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a
                        href={link.href}
                        className={
                          activeSection === link.href.replace("#", "")
                            ? "active"
                            : ""
                        }
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Link to="/contact" className="cta-btn">
            Contact InfoManage
          </Link>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav open" onClick={closeMobileMenu}>
          <div
            className="mobile-nav-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px 0",
              }}
            >
              <img
                src="/logo.jpg"
                alt="InfoManage"
                style={{
                  height: 60,
                  width: "auto",
                  display: "block",
                }}
              />
              <i
                className="bi bi-x"
                style={{ fontSize: 26, cursor: "pointer", color: "#333" }}
                onClick={closeMobileMenu}
              />
            </div>

            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>

            <div
              onClick={() => setMobileServicesOpen((v) => !v)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0",
                fontSize: 15,
                color: "#444",
              }}
            >
              Services
              <i
                className="bi bi-chevron-down"
                style={{
                  fontSize: 12,
                  transition: "transform 0.2s",
                  transform: mobileServicesOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </div>

            {mobileServicesOpen &&
              servicesLink.children.map((category, j) => (
                <div key={j}>
                  <div
                    onClick={() =>
                      setMobileOpenCategory((v) => (v === j ? null : j))
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px 10px 30px",
                      cursor: "pointer",
                      background: "#fafafa",
                      borderBottom: "1px solid #f0f0f0",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--heading-color)",
                    }}
                  >
                    {category.label}
                    <i
                      className="bi bi-chevron-down"
                      style={{
                        fontSize: 11,
                        transition: "transform 0.2s",
                        transform:
                          mobileOpenCategory === j
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </div>
                  {mobileOpenCategory === j &&
                    category.children.map((item, k) => (
                      <Link
                        key={k}
                        to={item.href}
                        onClick={closeMobileMenu}
                        style={{
                          paddingLeft: 44,
                          fontSize: 14,
                          color: "#666",
                          borderBottom: "1px solid #f5f5f5",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="bi bi-chevron-right"
                          style={{
                            fontSize: 10,
                            marginRight: 6,
                            color: "var(--accent)",
                          }}
                        />
                        {item.label}
                      </Link>
                    ))}
                </div>
              ))}

            <Link to="/industries" onClick={closeMobileMenu}>
              Industries
            </Link>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>

            <div style={{ padding: "16px 20px" }}>
              <Link
                to="/contact#contact"
                onClick={closeMobileMenu}
                style={{
                  display: "inline-block",
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
