import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pillars = [
  {
    num: "01",
    icon: "bi-map-fill",
    title: "Technology Planning",
    desc: "Defining how infrastructure and technology investments will evolve to support long-term business objectives.",
  },
  {
    num: "02",
    icon: "bi-diagram-3-fill",
    title: "Infrastructure Architecture",
    desc: "Designing environments that are scalable, secure, and capable of supporting future growth.",
  },
  {
    num: "03",
    icon: "bi-gear-wide-connected",
    title: "Operational Efficiency",
    desc: "Identifying opportunities to streamline technology operations and improve system reliability.",
  },
  {
    num: "04",
    icon: "bi-graph-up-arrow",
    title: "Long-Term Scalability",
    desc: "Planning ahead prevents reactive technology decisions and unexpected operational challenges.",
  },
];

const vCTOCards = [
  {
    num: "01",
    icon: "bi-map",
    title: "Roadmap Development",
    desc: "Building technology roadmaps that provide a clear view of infrastructure needs and planned investments.",
    bullets: [
      "System lifecycle planning",
      "Infrastructure upgrade scheduling",
      "Technology investment prioritization",
    ],
  },
  {
    num: "02",
    icon: "bi-building-gear",
    title: "Infrastructure Planning",
    desc: "Advising on infrastructure architecture, vendor selection, and system design to support business growth.",
    bullets: [
      "Architecture guidance",
      "Vendor evaluation and selection",
      "Strategic IT budgeting",
    ],
  },
  {
    num: "03",
    icon: "bi-shield-exclamation",
    title: "Technology Risk Planning",
    desc: "Identifying and addressing technology risks before they become operational problems.",
    bullets: [
      "Risk identification",
      "Mitigation planning",
      "Lifecycle risk management",
    ],
  },
];

const roadmapAreas = [
  { icon: "bi-arrow-repeat", label: "System lifecycle planning" },
  { icon: "bi-arrow-up-circle", label: "Infrastructure upgrades" },
  { icon: "bi-cloud-arrow-up", label: "Cloud adoption strategies" },
  { icon: "bi-shield-check", label: "Security improvements" },
  { icon: "bi-speedometer2", label: "Capacity planning" },
];

const archItems = [
  {
    icon: "bi-hdd-network",
    title: "Network Design & Architecture",
    desc: "Planning network infrastructure that is resilient, secure, and capable of supporting business operations at scale.",
  },
  {
    icon: "bi-cloud-check",
    title: "Cloud Infrastructure Planning",
    desc: "Evaluating and designing cloud environments that align with operational requirements and cost objectives.",
  },
  {
    icon: "bi-server",
    title: "Server & Application Architecture",
    desc: "Structuring server environments and application hosting to ensure reliability, performance, and long-term manageability.",
  },
  {
    icon: "bi-shield-lock",
    title: "Security Architecture Considerations",
    desc: "Incorporating security into infrastructure design to reduce risk and support compliance requirements.",
  },
];

const lifecycleSteps = [
  {
    num: "01",
    icon: "bi-hdd",
    title: "Hardware Replacement Planning",
    desc: "Scheduling hardware replacements before end-of-life to prevent unexpected failures and maintain system performance.",
  },
  {
    num: "02",
    icon: "bi-window",
    title: "Software Lifecycle Management",
    desc: "Tracking software versions and support timelines to ensure environments remain supported and secure.",
  },
  {
    num: "03",
    icon: "bi-arrow-clockwise",
    title: "Infrastructure Modernization",
    desc: "Identifying opportunities to modernize legacy systems to improve reliability, performance, and operational efficiency.",
  },
  {
    num: "04",
    icon: "bi-speedometer",
    title: "Capacity & Performance Planning",
    desc: "Monitoring growth trends and planning infrastructure capacity to support future operational demands.",
  },
];

const vendorItems = [
  {
    icon: "bi-clipboard2-check",
    label: "Vendor evaluation and selection",
    desc: "Assessing vendors against your operational needs and business requirements.",
  },
  {
    icon: "bi-people",
    label: "Service coordination",
    desc: "Coordinating services and vendor relationships to support day-to-day operations.",
  },
  {
    icon: "bi-bar-chart",
    label: "Technology platform assessments",
    desc: "Evaluating platforms to ensure they align with your technology strategy.",
  },
  {
    icon: "bi-file-earmark-text",
    label: "Contract and service planning",
    desc: "Planning contracts and service agreements that support long-term business needs.",
  },
];

const forOrgsItems = [
  {
    icon: "bi-pc-display",
    text: "Depend heavily on reliable technology infrastructure",
  },
  {
    icon: "bi-currency-dollar",
    text: "Want guidance when making technology investments",
  },
  {
    icon: "bi-calendar3",
    text: "Require long-term planning for infrastructure and systems",
  },
  {
    icon: "bi-arrow-repeat",
    text: "Prefer proactive technology management rather than reactive decisions",
  },
  { icon: "bi-headset", text: "Value experienced technology advisory" },
];

export default function ITStrategyPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="its-hero">
          <div className="its-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-diagram-3" />
              <span>IT Strategy &amp; Advisory</span>
            </div>
            <h1>
              A Clear Path From Today&apos;s Systems
              <br />
              to Tomorrow&apos;s Needs.
            </h1>
            <p className="mit-hero-body">
              From roadmaps and infrastructure architecture to vendor strategy,
              we help you make confident, proactive decisions about where your
              technology is headed.
            </p>
            {/* <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Schedule a Strategy Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Contact InfoManage</Link>
            </div> */}
          </div>
        </section>

        {/* ── Strategic Technology Guidance — Project Management layout ─ */}
        <section id="strategic-guidance" className="pm-section-light">
          <div className="container">
            <div
              className="pm-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 420px" }} data-aos="fade-up">
                <span
                  className="pm-eyebrow"
                  style={{
                    display: "block",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Strategic Guidance
                </span>
                <h2
                  className="pm-h2"
                  style={{
                    color: "var(--heading-color)",
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}
                >
                  Strategic Technology Guidance
                </h2>
                <p
                  className="pm-body-text"
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 20,
                    maxWidth: 460,
                  }}
                >
                  Technology decisions affect nearly every aspect of modern
                  business operations. InfoManage works with organizations to
                  ensure that infrastructure, systems, and technology
                  investments support long-term business needs.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    background: "var(--light-bg)",
                    borderRadius: 10,
                    padding: "16px 18px",
                    marginBottom: 22,
                    maxWidth: 460,
                  }}
                >
                  <i
                    className="bi bi-diagram-3-fill"
                    style={{
                      color: "var(--accent)",
                      fontSize: 18,
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      color: "#555",
                      fontSize: 13,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    <strong>Advisory-Led Technology Management:</strong> Through
                    ongoing planning and strategic guidance, we help
                    organizations maintain stable environments while preparing
                    for future growth and evolving requirements.
                  </p>
                </div>
                <div
                  style={{
                    width: 46,
                    height: 3,
                    background: "var(--accent)",
                    marginBottom: 22,
                  }}
                />

                <div
                  className="pm-features-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 16,
                  }}
                >
                  {pillars.map((p, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 80}
                    >
                      <div
                        className="pm-feature-icon"
                        style={{
                          borderRadius: "50%",
                          background: "rgba(26, 108, 181, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 14,
                        }}
                      >
                        <i
                          className={`bi ${p.icon}`}
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                      <h5
                        className="pm-feature-title"
                        style={{
                          fontWeight: 700,
                          color: "var(--heading-color)",
                          marginBottom: 8,
                        }}
                      >
                        {p.title}
                      </h5>
                      <p
                        className="pm-feature-desc"
                        style={{
                          color: "#666",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{ flex: "1 1 420px" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div style={{ position: "relative" }}>
                  <img
                    className="pm-image-tall"
                    src="/images/it-strategy/strategic-planning.jpg"
                    alt="Technology roadmap planning board with connected notes"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 16,
                      display: "block",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -22,
                      right: -14,
                      background: "#fff",
                      borderRadius: 12,
                      padding: "16px 26px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                      transform: "rotate(-3deg)",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Caveat', cursive",
                        fontSize: 26,
                        fontWeight: 700,
                        color: "var(--heading-color)",
                        lineHeight: 1.25,
                      }}
                    >
                      Today&apos;s Systems.
                      <br />
                      <span style={{ borderBottom: "2px solid var(--accent)" }}>
                        Tomorrow&apos;s Plan.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── vCTO Advisory — Services "What We Do" card layout ─── */}
        <section id="vcto" className="services-section-block">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
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
                vCTO Advisory
              </span>
              <h2
                className="services-heading"
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 10,
                }}
              >
                Virtual Chief Technology Officer (vCTO)
              </h2>
              <p className="services-intro" style={{ color: "#666" }}>
                Experienced technology leadership, without the cost of a
                full-time executive.
              </p>
            </div>

            <div
              className="services-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
              }}
            >
              {vCTOCards.map((card, i) => (
                <div
                  key={i}
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
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
                      <i className={`bi ${card.icon}`} />
                    </div>
                    <h4 style={{ margin: 0 }}>{card.title}</h4>
                  </div>
                  <p style={{ marginBottom: 12 }}>{card.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {card.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="service-item"
                        style={{
                          padding: "5px 0",
                          display: "flex",
                          gap: 6,
                          alignItems: "flex-start",
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
                        <span style={{ color: "#666" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-number">{card.num}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technology Roadmaps — "Is This You?" layout ───────── */}
        <section className="mit-isyou-section">
          <div className="container">
            <div
              className="mit-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {/* Left: header + callout */}
              <div style={{ flex: "1 1 320px" }} data-aos="fade-right">
                <span className="mit-eyebrow">Roadmap Planning</span>
                <h2
                  className="mit-h2 mit-h2-sm"
                  style={{
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 14,
                  }}
                >
                  Technology Roadmaps
                </h2>
                <p
                  className="mit-body-text"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  Long-term planning helps organizations avoid reactive
                  technology decisions and unexpected infrastructure challenges.
                  InfoManage works with organizations to develop technology
                  roadmaps that provide visibility into future infrastructure
                  needs.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    padding: "16px 20px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <i
                    className="bi bi-graph-up-arrow"
                    style={{
                      color: "var(--accent)",
                      fontSize: 26,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    These roadmaps allow organizations to plan investments more
                    effectively while reducing operational risk.
                  </p>
                </div>
              </div>

              {/* Right: checklist */}
              <div
                style={{ flex: "1 1 360px", minWidth: 0 }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Roadmaps typically address:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {roadmapAreas.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "10px 0",
                        borderBottom:
                          i < roadmapAreas.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 14.5,
                        lineHeight: 1.5,
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "var(--accent)",
                          fontSize: 15,
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Infrastructure Architecture — Services "What We Do" card layout ─── */}
        <section
          id="infrastructure-architecture"
          className="services-section-block"
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
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
                Infrastructure
              </span>
              <h2
                className="services-heading"
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 10,
                }}
              >
                Infrastructure Architecture
              </h2>
              <p className="services-intro" style={{ color: "#666" }}>
                As organizations grow, their technology environments often
                become more complex. Infrastructure architecture planning
                ensures that systems remain scalable, secure, and manageable.
              </p>
            </div>

            <div
              className="services-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 20,
              }}
            >
              {archItems.map((item, i) => (
                <div
                  key={i}
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
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
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <h4 style={{ margin: 0 }}>{item.title}</h4>
                  </div>
                  <p style={{ marginBottom: 0 }}>{item.desc}</p>
                  <div className="service-number">0{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lifecycle Planning — "Our Approach" layout ─────────── */}
        <section className="howwework-section cyber-approach-section">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 24px",
              }}
              data-aos="fade-up"
            >
              <span
                className="pm-eyebrow"
                style={{
                  display: "block",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                Lifecycle Management
              </span>
              <h2
                className="cyber-h2"
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 12,
                }}
              >
                Lifecycle Planning
              </h2>
              <p className="cyber-lead" style={{ color: "#666" }}>
                Technology infrastructure requires regular evaluation and
                replacement. Proper lifecycle planning helps organizations avoid
                unexpected failures and maintain reliable environments.
              </p>
            </div>

            <div
              className="cyber-row"
              style={{
                display: "flex",
                flexWrap: "wrap-reverse",
                alignItems: "center",
              }}
            >
              {/* Numbered timeline */}
              <div
                className="cyber-approach-timeline"
                style={{
                  flex: "1 1 460px",
                  position: "relative",
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="cyber-approach-line"
                  style={{
                    position: "absolute",
                    top: 26,
                    bottom: 26,
                    width: 2,
                    background:
                      "repeating-linear-gradient(180deg, #d0d7e2 0, #d0d7e2 6px, transparent 6px, transparent 12px)",
                  }}
                />

                {lifecycleSteps.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      marginBottom: i < lifecycleSteps.length - 1 ? 16 : 0,
                    }}
                  >
                    <div
                      className="cyber-approach-num"
                      style={{
                        position: "absolute",
                        top: 0,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <h4
                      className="cyber-approach-title"
                      style={{
                        margin: "6px 0 8px",
                        fontWeight: 700,
                        color: "var(--heading-color)",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#666",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Circular photo badge */}
              <div
                style={{ flex: "0 1 280px", textAlign: "center" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className="cyber-badge-circle"
                  style={{
                    position: "relative",
                    width: 260,
                    height: 260,
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: -10,
                      borderRadius: "50%",
                      border: "2px dashed rgba(26, 108, 181, 0.3)",
                    }}
                  />
                  <img
                    src="/images/it-strategy/lifecycle-hardware.jpg"
                    alt="Close-up of a computer circuit board"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      display: "block",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 6,
                      right: 6,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(26, 108, 181, 0.4)",
                    }}
                  >
                    <i
                      className="bi bi-arrow-repeat"
                      style={{ color: "#fff", fontSize: 24 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Vendor Strategy — Cabling & Connectivity layout ────── */}
        <section id="vendor-strategy" className="pm-section-dark">
          <div className="container">
            <div
              className="pm-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
              <div style={{ flex: "0 1 280px" }} data-aos="fade-right">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    minHeight: 320,
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/images/it-strategy/vendor-meeting.jpg"
                    alt="Signing a vendor services agreement"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(10,22,40,0.05) 30%, rgba(10,22,40,0.9) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 24,
                      right: 24,
                      bottom: 28,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: 1.35,
                      }}
                    >
                      The right vendors.
                      <br />
                      Coordinated for you.
                    </p>
                    <div
                      style={{
                        width: 40,
                        height: 3,
                        background: "var(--accent)",
                        marginTop: 14,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ flex: "1 1 460px" }} data-aos="fade-up">
                <span
                  className="pm-eyebrow"
                  style={{
                    display: "block",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vendor Strategy
                </span>
                <h2
                  className="pm-h2 pm-h2-sm"
                  style={{
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  Vendor Strategy and Coordination
                </h2>
                <p
                  className="pm-body-text"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    marginBottom: 24,
                  }}
                >
                  Organizations often depend on multiple technology vendors,
                  software providers, and service platforms. InfoManage assists
                  organizations by helping evaluate vendors, coordinate
                  services, and ensure that vendor relationships support
                  operational needs.
                </p>

                <div
                  className="pm-cabling-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 16,
                  }}
                >
                  {vendorItems.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 14,
                        padding: "20px 18px",
                      }}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 60}
                    >
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: "50%",
                          background: "rgba(26, 108, 181, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 14,
                        }}
                      >
                        <i
                          className={`bi ${item.icon}`}
                          style={{ color: "var(--accent)", fontSize: 22 }}
                        />
                      </div>
                      <h5
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#fff",
                          marginBottom: 6,
                        }}
                      >
                        {item.label}
                      </h5>
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who This Is For — FAQ layout ─────────────────────── */}
        <section className="faq-section">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 50px",
              }}
              data-aos="fade-up"
            >
              <span className="faq-badge">Who This Is For</span>
              <h2 className="faq-heading">Strategic Technology Partnership</h2>
              <p style={{ color: "#666", marginTop: 10 }}>
                IT strategy and advisory services are designed for organizations
                that:
              </p>
            </div>

            <div className="faq-row" style={{ alignItems: "flex-start" }}>
              <div
                className="faq-list-col"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {forOrgsItems.map((item, i) => (
                  <div key={i} className="faq-item">
                    <div className="faq-header" style={{ cursor: "default" }}>
                      <i
                        className={`bi ${item.icon} faq-toggle-icon`}
                        style={{ fontSize: 18 }}
                      />
                      <span className="faq-question">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="faq-cta-card"
                style={{
                  background: "var(--light-bg)",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i
                  className="bi bi-diagram-3-fill faq-cta-icon"
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
                <div>
                  <p
                    className="faq-cta-title"
                    style={{ color: "var(--heading-color)" }}
                  >
                    Not sure if this fits?
                  </p>
                  <p className="faq-cta-text" style={{ color: "#777" }}>
                    Let&apos;s talk through your environment.
                  </p>
                  <Link to="/contact" className="btn-pricing faq-cta-btn">
                    Contact Us
                  </Link>
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
