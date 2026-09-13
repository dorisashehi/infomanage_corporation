import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const capabilityIcons = [
  { icon: "bi-kanban", label: "Project Management" },
  { icon: "bi-clipboard-check", label: "Planning & Coordination" },
  { icon: "bi-diagram-3", label: "Cabling & Connectivity" },
  { icon: "bi-box-seam", label: "Equipment & Relocation" },
  { icon: "bi-hdd-network", label: "Network Security" },
];

const buildoutFeatures = [
  {
    icon: "bi-bullseye",
    title: "On-Time Delivery",
    desc: "Keep your project on schedule and within budget.",
  },
  {
    icon: "bi-shield-check",
    title: "Minimized Downtime",
    desc: "Plan and execute with minimal disruption.",
  },
  {
    icon: "bi-people",
    title: "Dedicated Support",
    desc: "A team that's with you from start to finish.",
  },
];

const coordinationActivities = [
  "Coordinate all IT related activities with relevant parties, including but not limited to the architects, building management, designers, electricians, furniture vendors, general contractors, HVAC, internet service providers (ISPs), cabling and security vendors, and your company's personnel, to ensure successful delivery of IT services",
  "Coordinate installation, configuration, cabling, and any other activities surrounding installation of ISP circuits",
  "Coordinate design, configuration, and installation for on-premises cabling",
  "Coordinate design, configuration, and implementation of audio visual (AV), network infrastructure (firewall, switches, and access points) and security components",
  "Coordinate equipment sourcing",
  "Coordinate all purchased IT equipment and services with vendor(s)",
  "Coordinate equipment mounting and installation of AV (sound masking, TVs, video conferencing), IT Room, network, and security components",
  "Coordinate design and implementation for all facets in the Data Center / IT Room",
  "Prepare project plan",
];

const stationCableRuns = [
  "Workstations",
  "Conference room audio visual (AV)",
  "Conference room tables",
  "Wireless access points",
  "Phones",
];

const mountedEquipment = ["WAPs", "Patch panels", "Network rack", "TVs"];

const equipmentSteps = [
  {
    icon: "bi-hand-index-thumb",
    title: "Pre-Move",
    color: "var(--accent)",
    items: [
      "Inventory all floor equipment.",
      "Mark and coordinate with your team to define release and security procedures.",
      "Identify relocation plan for the new location.",
    ],
  },
  {
    icon: "bi-truck",
    title: "Move Day",
    color: "var(--heading-color)",
    intro:
      "Carefully disconnect, transport and reconnect and configure procedures.",
    items: [
      "All computers should already be shut down.",
      "Photocopiers, each location, match to the new inventory.",
      "Disconnect and tag all equipment cables and peripheral devices (e.g., mouse, keyboard, tablet PCs, containers).",
      "Label equipment.",
    ],
  },
  {
    icon: "bi-plug",
    title: "Reconnect",
    color: "var(--accent-dark)",
    items: [
      "Check equipment against inventory.",
      "Locate equipment according to plan.",
      "Unbag equipment cables and peripheral devices and connect the power, network, and peripherals as necessary.",
      "Power up to verify network connectivity.",
    ],
  },
];

const firewallOverview = [
  "First line of defense against network infiltration",
  "Evaluate the existing infrastructure to determine appropriate design for the new space for firewall, switches, and access points",
];

const firewallImplementation = [
  "Configure new unit(s) designed to block unauthorized access to your network while permitting outward communication, monitoring and filtering incoming and outgoing traffic based on your organization's established security policies",
  "Configure firewalls for advanced security services",
  "Install and configure network switches, Uninterruptible Power Supply (UPS), and Power Distribution Units (PDU)",
  "Implement wireless infrastructure",
  "Test infrastructure",
  "Physical implementation and installation",
  "Set up for monitoring (network monitoring and management package)",
  "Complete documentation",
];

function SectionHeading({ eyebrow }) {
  return (
    <span
      style={{
        display: "block",
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 2,
        color: "var(--accent)",
        marginBottom: 10,
      }}
    >
      {eyebrow}
    </span>
  );
}

export default function ProjectManagementPage() {
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
        <section className="pm-hero">
          <div className="pm-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-kanban" />
              <span>ONE BUILDOUT PARTNER</span>
            </div>
            <h1>
              You Plan the Space.
              <br />
              We Manage the Technology.
            </h1>
            <p className="mit-hero-sub">
              Cabling, network security, AV, equipment moves, and vendor
              coordination — all managed together.
            </p>

            {/* <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Plan Your Buildout</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Contact InfoManage</Link>
            </div> */}
          </div>
        </section>

        {/* ── Capability icon row ────────────────────────────────── */}
        <section style={{ padding: "48px 0", background: "#fff" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 16,
              }}
              data-aos="fade-up"
            >
              {capabilityIcons.map((item, i) => (
                <div
                  key={i}
                  style={{ textAlign: "center", padding: "0 8px" }}
                  data-aos="fade-up"
                  data-aos-delay={80 + i * 60}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(26, 108, 181, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{ fontSize: 26, color: "var(--accent)" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--heading-color)",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project Management for Buildouts ───────────────────── */}
        <section
          id="project-management"
          style={{ padding: "48px 0", background: "#fff" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 420px" }} data-aos="fade-up">
                <SectionHeading eyebrow="Project Management" />
                <h2
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}
                >
                  Project Management for Buildouts
                </h2>
                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    fontSize: 14.5,
                    marginBottom: 24,
                    maxWidth: 460,
                  }}
                >
                  We coordinate every aspect of your office buildout, working
                  with your team and trusted vendors to ensure your IT
                  infrastructure is designed, installed, and delivered on time
                  and within scope.
                </p>
                <div
                  style={{
                    width: 46,
                    height: 3,
                    background: "var(--accent)",
                    marginBottom: 22,
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 16,
                  }}
                >
                  {buildoutFeatures.map((f, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 80}
                    >
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: "rgba(26, 108, 181, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 14,
                        }}
                      >
                        <i
                          className={`bi ${f.icon}`}
                          style={{ color: "var(--accent)", fontSize: 26 }}
                        />
                      </div>
                      <h5
                        style={{
                          fontSize: 14.5,
                          fontWeight: 700,
                          color: "var(--heading-color)",
                          marginBottom: 8,
                        }}
                      >
                        {f.title}
                      </h5>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#666",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {f.desc}
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
                    src="/images/project-management/conference-room.jpg"
                    alt="Modern glass-walled conference room ready for a technology buildout"
                    style={{
                      width: "100%",
                      height: 400,
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
                      Your Vision.
                      <br />
                      <span style={{ borderBottom: "2px solid var(--accent)" }}>
                        Our Plan.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Coordination Activities ─────────────────────────── */}
        <section
          id="key-coordination"
          style={{ padding: "48px 0", background: "var(--light-bg)" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 460px" }} data-aos="fade-up">
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    marginBottom: 24,
                  }}
                >
                  Key Coordination Activities
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {coordinationActivities.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 6,
                        alignItems: "flex-start",
                        padding: "3px 0",
                      }}
                    >
                      <span
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          background: "var(--accent)",
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {i + 1}
                      </span>
                      <p
                        style={{
                          margin: 0,
                          color: "#444",
                          fontSize: 14,
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{ flex: "1 1 380px" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div style={{ position: "relative" }}>
                  <img
                    src="/images/project-management/open-workspace.jpg"
                    alt="Modern open office workspace with connected workstations"
                    style={{
                      width: "100%",
                      height: 420,
                      objectFit: "cover",
                      borderRadius: 16,
                      display: "block",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.14)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -28,
                      left: -16,
                      maxWidth: 290,
                      background: "var(--heading-color)",
                      borderRadius: 14,
                      padding: "24px 26px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 14,
                      }}
                    >
                      <i
                        className="bi bi-building"
                        style={{ color: "#fff", fontSize: 22 }}
                      />
                    </div>
                    <h5
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 8,
                      }}
                    >
                      Tailored to Your Business Needs
                    </h5>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.7,
                        marginBottom: 16,
                      }}
                    >
                      We work with your team to ensure your space is ready,
                      secure, and fully connected — so you can focus on what
                      matters most.
                    </p>
                    <Link
                      to="/contact"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="bi bi-arrow-right"
                        style={{ color: "#fff", fontSize: 14 }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Premise Cabling and Related Activities ─────────────── */}
        <section
          id="premise-cabling"
          style={{ padding: "48px 0", background: "#0d1e2e" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                alignItems: "stretch",
              }}
            >
              <div
                style={{ flex: "0 1 280px" }}
                data-aos="fade-right"
              >
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
                    src="/images/project-management/cabling-card.jpg"
                    alt="Close-up of a network patch panel with cabling"
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
                      Reliable connections.
                      <br />
                      Built for performance.
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
                <SectionHeading eyebrow="Cabling & Connectivity" />
                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  Cabling and Related Activities
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    fontSize: 14.5,
                    marginBottom: 24,
                  }}
                >
                  We handle your on-premises cabling and related tasks to
                  ensure a reliable, high-performance network from day one.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 14,
                      padding: "20px 18px",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
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
                        className="bi bi-people"
                        style={{ color: "var(--accent)", fontSize: 22 }}
                      />
                    </div>
                    <h5
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 8,
                      }}
                    >
                      Cable Vendor Coordination
                    </h5>
                    <p
                      style={{
                        fontSize: 12.5,
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      Prepare quote for on-premises cabling based on draft
                      floor plan.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 14,
                      padding: "20px 18px",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="160"
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
                        className="bi bi-diagram-3"
                        style={{ color: "var(--accent)", fontSize: 22 }}
                      />
                    </div>
                    <h5
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 8,
                      }}
                    >
                      Station Cable Runs
                    </h5>
                    <ul
                      style={{ listStyle: "none", padding: 0, margin: 0 }}
                    >
                      {stationCableRuns.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 6,
                            alignItems: "flex-start",
                            fontSize: 12.5,
                            color: "rgba(255,255,255,0.65)",
                            padding: "3px 0",
                          }}
                        >
                          <i
                            className="bi bi-chevron-right"
                            style={{
                              color: "var(--accent)",
                              fontSize: 10,
                              marginTop: 3,
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 14,
                      padding: "20px 18px",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="220"
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
                        className="bi bi-wrench"
                        style={{ color: "var(--accent)", fontSize: 22 }}
                      />
                    </div>
                    <h5
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 8,
                      }}
                    >
                      Testing & Mounting
                    </h5>
                    <p
                      style={{
                        fontSize: 12.5,
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.6,
                        marginBottom: 8,
                      }}
                    >
                      Test cables end to end, then mount:
                    </p>
                    <ul
                      style={{ listStyle: "none", padding: 0, margin: 0 }}
                    >
                      {mountedEquipment.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 6,
                            alignItems: "flex-start",
                            fontSize: 12.5,
                            color: "rgba(255,255,255,0.65)",
                            padding: "3px 0",
                          }}
                        >
                          <i
                            className="bi bi-chevron-right"
                            style={{
                              color: "var(--accent)",
                              fontSize: 10,
                              marginTop: 3,
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Equipment Disconnect and Reconnect ──────────────────── */}
        <section
          id="equipment-relocation"
          style={{ padding: "48px 0", background: "var(--light-bg)" }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 24px",
              }}
              data-aos="fade-up"
            >
              <SectionHeading eyebrow="Equipment & Relocation" />
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 10,
                }}
              >
                Equipment Disconnect and Reconnect
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                We manage the safe and organized disconnect and reconnect of
                your IT equipment to minimize downtime, and keep your team
                productive.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                gap: 8,
                background: "#fff",
                border: "1px solid #e5eaf1",
                borderRadius: 16,
                padding: "26px 30px",
                boxShadow: "0 8px 28px rgba(13, 30, 46, 0.06)",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {equipmentSteps.map((step, i) => (
                <Fragment key={i}>
                  <div
                    style={{ flex: "1 1 220px", minWidth: 220 }}
                    data-aos="fade-up"
                    data-aos-delay={150 + i * 100}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        marginBottom: 14,
                      }}
                    >
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: "50%",
                          border: `2px solid ${step.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className={`bi ${step.icon}`}
                          style={{ color: step.color, fontSize: 20 }}
                        />
                      </div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: 14,
                          fontWeight: 900,
                          color: step.color,
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                        }}
                      >
                        {step.title}.
                      </h4>
                    </div>
                    {step.intro && (
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "#666",
                          lineHeight: 1.6,
                          marginBottom: 8,
                        }}
                      >
                        {step.intro}
                      </p>
                    )}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {step.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: 6,
                            alignItems: "flex-start",
                            fontSize: 12.5,
                            color: "#666",
                            lineHeight: 1.6,
                            padding: "3px 0",
                          }}
                        >
                          <i
                            className="bi bi-check2"
                            style={{
                              color: step.color,
                              fontSize: 12,
                              marginTop: 3,
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {i < equipmentSteps.length - 1 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: "0 1 40px",
                        minWidth: 20,
                        alignSelf: "flex-start",
                        marginTop: 26,
                      }}
                    >
                      <div
                        style={{ flex: 1, borderTop: "2px dotted #d0d7e2" }}
                      />
                      <i
                        className="bi bi-chevron-right"
                        style={{
                          color: "#c3ccd9",
                          fontSize: 14,
                          margin: "0 4px",
                        }}
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── Firewall/Network Switch Replacement ─────────────────── */}
        <section
          id="network-security"
          style={{ padding: "48px 0", background: "#fff" }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 28px",
              }}
              data-aos="fade-up"
            >
              <SectionHeading eyebrow="Network Security" />
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 10,
                }}
              >
                Firewall/Network Switch Replacement
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                We upgrade and configure your network security and
                infrastructure to keep your business protected and connected.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap-reverse",
                gap: 32,
                alignItems: "center",
              }}
            >
              {/* Numbered timeline */}
              <div
                style={{
                  flex: "1 1 460px",
                  position: "relative",
                  paddingLeft: 68,
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  style={{
                    position: "absolute",
                    left: 23,
                    top: 26,
                    bottom: 26,
                    width: 2,
                    background:
                      "repeating-linear-gradient(180deg, #d0d7e2 0, #d0d7e2 6px, transparent 6px, transparent 12px)",
                  }}
                />

                {[
                  {
                    step: "1",
                    color: "var(--accent)",
                    title: "Overview",
                    items: firewallOverview,
                  },
                  {
                    step: "2",
                    color: "var(--heading-color)",
                    title: "Implementation",
                    items: firewallImplementation,
                  },
                ].map((stage, si) => (
                  <div
                    key={si}
                    style={{
                      position: "relative",
                      marginBottom: si === 0 ? 24 : 0,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: -68,
                        top: 0,
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: stage.color,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {stage.step}
                    </div>
                    <h4
                      style={{
                        margin: "8px 0 8px",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--heading-color)",
                      }}
                    >
                      {stage.title}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {stage.items.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 6,
                            alignItems: "flex-start",
                            fontSize: 14,
                            color: "#666",
                            lineHeight: 1.6,
                            padding: "3px 0",
                          }}
                        >
                          <i
                            className="bi bi-check2"
                            style={{
                              color: stage.color,
                              fontSize: 12,
                              marginTop: 3,
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
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
                    src="/images/project-management/office-desk.jpg"
                    alt="Modern office desk setup overlooking the city"
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
                      className="bi bi-shield-lock"
                      style={{ color: "#fff", fontSize: 24 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA — blue banner ────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <div className="container">
            <div
              style={{
                background: "var(--accent)",
                borderRadius: 16,
                padding: "30px 36px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                overflow: "hidden",
              }}
              data-aos="fade-up"
            >
              <div style={{ flex: "1 1 320px" }}>
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 12,
                  }}
                >
                  Need help with your next buildout?
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 15,
                    marginBottom: 24,
                  }}
                >
                  Our team is ready to help you plan, coordinate, and deliver a
                  seamless IT infrastructure for your new space.
                </p>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    color: "var(--accent)",
                    padding: "12px 28px",
                    borderRadius: 50,
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Get in Touch
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
              <img
                src="/images/about/support-team.jpg"
                alt="InfoManage team ready to help"
                style={{
                  width: 220,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
