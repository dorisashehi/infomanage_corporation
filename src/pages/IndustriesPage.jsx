import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const industries = [
  {
    slug: "financial-services",
    icon: "bi-bank",
    title: "Financial Services",
    desc: "Secure, reliable systems that protect sensitive client data.",
    listLabel:
      "Technology support for financial services firms often includes:",
    items: [
      "Secure infrastructure management",
      "Reliable backup and recovery systems",
      "Monitoring of business-critical systems",
      "Vendor coordination with financial platforms",
    ],
    note: "InfoManage helps financial services firms maintain stable infrastructure while supporting regulatory and operational requirements.",
  },
  {
    slug: "legal",
    icon: "bi-briefcase-fill",
    title: "Legal",
    desc: "Secure documents, reliable email, and stable daily operations.",
    listLabel: "Technology environments for legal practices typically require:",
    items: [
      "Secure document access",
      "Reliable backup and data protection",
      "Infrastructure stability for case management systems",
      "Responsive user support",
    ],
    note: "InfoManage helps legal organizations maintain reliable systems that support attorneys and staff in their daily work.",
  },
  {
    slug: "healthcare",
    icon: "bi-heart-pulse-fill",
    title: "Healthcare",
    desc: "Reliable operations, protected data, and secure system access.",
    listLabel: "Technology management often includes:",
    items: [
      "Secure system configurations",
      "Reliable infrastructure management",
      "Backup and disaster recovery planning",
      "Monitoring of critical systems",
    ],
    note: "InfoManage supports healthcare environments by maintaining stable infrastructure and helping organizations manage complex technology environments.",
  },
  {
    slug: "advertising-media",
    icon: "bi-megaphone-fill",
    title: "Advertising and Media",
    desc: "High-performance systems for large files and creative workflows.",
    listLabel: "Technology support for media firms often includes:",
    items: [
      "Infrastructure capable of supporting large file environments",
      "Reliable network performance",
      "Workstation management",
      "Collaboration system support",
    ],
    note: "InfoManage helps creative organizations maintain reliable technology environments that support production workflows.",
  },
  {
    slug: "real-estate",
    icon: "bi-building-fill",
    title: "Real Estate",
    desc: "Connected communication and documents across every office.",
    listLabel: "Typical technology needs include:",
    items: [
      "Secure document access",
      "Reliable email and communication platforms",
      "Mobile workforce support",
      "Infrastructure monitoring",
    ],
    note: "InfoManage helps real estate firms maintain reliable systems that support both office and remote operations.",
  },
  {
    slug: "manufacturing",
    icon: "bi-gear-fill",
    title: "Manufacturing",
    desc: "Reliable infrastructure for operations across every facility.",
    listLabel: "Technology environments may include:",
    items: [
      "Infrastructure supporting operational systems",
      "Secure network management",
      "Reliable system monitoring",
      "Coordination with specialized industry software",
    ],
    note: "InfoManage helps manufacturing organizations maintain stable infrastructure environments that support production operations.",
  },
  {
    slug: "non-profit",
    icon: "bi-people-fill",
    title: "Non-Profit Organizations",
    desc: "Dependable technology for your mission, within your budget.",
    listLabel: "Technology support typically focuses on:",
    items: [
      "Reliable infrastructure management",
      "Secure systems for sensitive data",
      "Cost-efficient technology planning",
      "Operational support for staff and volunteers",
    ],
    note: "InfoManage helps nonprofit organizations maintain reliable systems while planning technology investments carefully.",
  },
];

const supportingPoints = [
  {
    icon: "bi-shield-check",
    title: "Stable & Secure",
    desc: "We build and maintain secure environments you can count on.",
  },
  {
    icon: "bi-headset",
    title: "Responsive Support",
    desc: "Real people. Fast response. Minimized downtime.",
  },
  {
    icon: "bi-bar-chart-line",
    title: "Future-Ready",
    desc: "Scalable technology that evolves with your business.",
  },
];

export default function IndustriesPage() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const slug = new URLSearchParams(location.search).get("industry");
    const card = slug && document.getElementById(`industry-${slug}`);

    if (!card) {
      window.scrollTo(0, 0);
      return;
    }

    const timer = setTimeout(() => {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
    return () => clearTimeout(timer);
  }, [location.search]);

  return (
    <>
      <Header />
      <main className="main">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="industries-hero">
          <div className="industries-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-buildings" />
              <span>Industries We Serve</span>
            </div>
            <h1>Technology Across Industries</h1>
            <p className="mit-hero-sub">
              One IT partner for every business need — secure, reliable, and
              scalable technology designed around how your organization works.
            </p>
            {/* <p className="mit-hero-body">
              Secure, reliable, and scalable technology solutions designed
              around your organization.
            </p>
            <p className="mit-hero-note">
              Professional Services · Manufacturing · Nonprofits · And More
            </p> */}
            {/* <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Contact InfoManage</Link>
            </div> */}
          </div>
        </section>

        {/* ── Industries We Work With — "What We Do"-style cards ──── */}
        <section id="industries-list" className="services-section-block">
          <div className="container">
            <div
              style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}
              data-aos="fade-up"
            >
              <span
                className="services-badge"
                style={{
                  display: "block",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                Sector-Specific IT Management
              </span>
              <h2
                className="services-heading"
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 10,
                }}
              >
                IT Built Around Your Industry
              </h2>
              <p className="services-intro" style={{ color: "#666" }}>
                Every organization has different technology demands. We
                provide IT management and infrastructure support tailored to
                the systems, workflows, and requirements of your industry.
              </p>
            </div>

            <div className="industries-grid">
              {industries.map((ind, i) => (
                <div
                  key={ind.slug}
                  id={`industry-${ind.slug}`}
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-delay={100 + (i % 3) * 80}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      className="icon-box"
                      style={{ marginBottom: 0, flexShrink: 0 }}
                    >
                      <i className={`bi ${ind.icon}`} />
                    </div>
                    <h4 style={{ margin: 0 }}>{ind.title}</h4>
                  </div>
                  <p style={{ marginBottom: 12 }}>{ind.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {ind.items.map((item, j) => (
                      <li
                        key={j}
                        className="service-item"
                        style={{
                          padding: "5px 0",
                          display: "flex",
                          gap: 6,
                          alignItems: "flex-start",
                          color: "#666",
                        }}
                      >
                        <i
                          className="bi bi-arrow-right"
                          style={{
                            color: "var(--accent)",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="service-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Supporting Technology-Driven Organizations ────────── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "56px 0",
            background: "#0d1e2e",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: -140,
              transform: "translateY(-50%)",
              width: 420,
              height: 420,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: -40,
              transform: "translateY(-50%)",
              width: 240,
              height: 240,
              borderRadius: "50%",
              border: "1px solid rgba(26, 108, 181, 0.35)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 320px" }} data-aos="fade-right">
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.25,
                    marginBottom: 14,
                  }}
                >
                  Supporting Technology-Driven Organizations
                </h2>
                <div style={{ width: 46, height: 3, background: "var(--accent)" }} />
              </div>

              <div
                style={{
                  flex: "2 1 560px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 28,
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {supportingPoints.map((item, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={150 + i * 80}>
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "rgba(26, 108, 181, 0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <i className={`bi ${item.icon}`} style={{ color: "#fff", fontSize: 24 }} />
                    </div>
                    <h4 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section
          className="mit-section"
          style={{ background: "#fff", borderTop: "1px solid #eef0f4" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 48,
                alignItems: "center",
              }}
            >
              {/* Left: text */}
              <div style={{ flex: "1 1 380px" }} data-aos="fade-right">
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "var(--accent)",
                    marginBottom: 12,
                  }}
                >
                  Your Industry, Our Experience
                </span>
                <h2
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.25,
                    marginBottom: 16,
                  }}
                >
                  Looking for a Technology Partner Who Understands Your
                  Industry?
                </h2>
                <p style={{ color: "#666", lineHeight: 1.8, fontSize: 15.5 }}>
                  Schedule a consultation to discuss your organization&apos;s
                  technology environment and learn how InfoManage can support
                  your infrastructure and operational needs.
                </p>
              </div>

              {/* Right: photo + overlapping card + rating */}
              <div style={{ flex: "1 1 420px" }} data-aos="fade-left" data-aos-delay="100">
                <div style={{ position: "relative" }}>
                  <img
                    src="/images/industries/technology-partner.jpg"
                    alt="InfoManage team discussing a client's technology roadmap"
                    style={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                      borderRadius: 14,
                      display: "block",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -30,
                      right: -16,
                      maxWidth: 300,
                      background: "#fff",
                      borderRadius: 14,
                      padding: "20px 22px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(26, 108, 181, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <i className="bi bi-calendar-check" style={{ color: "var(--accent)", fontSize: 17 }} />
                      </div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--heading-color)", lineHeight: 1.5, margin: 0 }}>
                        Let&apos;s build a better technology foundation for
                        your business.
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "var(--accent)",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: 50,
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      Contact InfoManage
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 46,
                  }}
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i
                      key={s}
                      className="bi bi-star-fill"
                      style={{ color: "#ffc107", fontSize: 14 }}
                    />
                  ))}
                  <span style={{ color: "#999", fontSize: 13, marginLeft: 6 }}>
                    Established 1995 · 30+ years of service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
