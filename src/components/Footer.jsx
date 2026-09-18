import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Managed IT & Help Desk", href: "/managed-it-help-desk" },
  { label: "Cybersecurity", href: "/cybersecurity-services" },
  { label: "Cloud Phones & Communications", href: "/cloud-phones-communications" },
];
const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about#our-story" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];
const resourceLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Support Center", href: "/contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFooterLinkClick = (href) => (e) => {
    const [path, hash] = href.split("#");
    if (location.pathname !== path) return;

    e.preventDefault();
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer id="footer" className="site-footer">
        <div className="container">
          <div
            className="footer-cta-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="footer-cta-text-col">
              <h2 className="footer-cta-heading">
                Let's Talk About What You Need From IT.
              </h2>
              <p className="footer-cta-text">
                Ongoing IT management, a technology problem, a major project, or
                a new office start with InfoManage.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link
                to="/contact"
                className="cta-btn footer-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Contact InfoManage
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>

          <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <div style={{ marginBottom: 16, lineHeight: 1 }}>
                <div
                  className="footer-brand-title"
                  style={{
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: '"Nunito", sans-serif',
                    letterSpacing: -0.3,
                  }}
                >
                  InfoManage Corporation
                </div>
              </div>
              <p>
                InfoManage manages day-to-day IT operations while helping
                organizations plan, secure, and scale their technology
                environments. Serving organizations since 1995.
              </p>
            </div>

            {/* Services */}
            <div className="footer-links-col">
              <h4>Services</h4>
              <ul>
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} onClick={handleFooterLinkClick(l.href)}>
                      <i className="bi bi-chevron-right" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-links-col">
              <h4>Company</h4>
              <ul>
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} onClick={handleFooterLinkClick(l.href)}>
                      <i className="bi bi-chevron-right" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-links-col">
              <h4>Resources</h4>
              <ul>
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} onClick={handleFooterLinkClick(l.href)}>
                      <i className="bi bi-chevron-right" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-contact-col">
              <h4>Connect</h4>
              <div className="contact-entry">
                <i className="bi bi-telephone" />
                <p>212-931-0705</p>
              </div>
              <div className="contact-entry">
                <i className="bi bi-envelope" />
                <p>
                  <a href="mailto:sales@infomanage.net">sales@infomanage.net</a>
                </p>
              </div>
              <div className="footer-socials">
                {[
                  {
                    icon: "bi-linkedin",
                    href: "https://www.linkedin.com/company/infomanage-corporation/",
                  },
                  {
                    icon: "bi-twitter-x",
                    href: "https://x.com/infomanagecorp",
                  },
                  {
                    icon: "bi-facebook",
                    href: "https://www.facebook.com/profile.php?id=100078690196056",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <i className={`bi ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="container">
            <div className="footer-bottom-inner">
              <div className="copyright">
                <p>© {new Date().getFullYear()} InfoManage Corporation. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#hero"
        className={`scroll-top-btn${showTop ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
