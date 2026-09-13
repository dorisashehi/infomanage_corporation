import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const capabilityIcons = [
  { icon: "bi-kanban", label: "IT Project Management" },
  { icon: "bi-hdd-network", label: "Network & Security Infrastructure" },
  { icon: "bi-diagram-3", label: "Cabling & Connectivity" },
  { icon: "bi-camera-video", label: "Audio Visual & Collaboration" },
  { icon: "bi-box-seam", label: "Equipment Installation" },
  { icon: "bi-clipboard-check", label: "Planning & Coordination" },
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

const preMoveItems = [
  "Inventory all floor equipment",
  "Meet and coordinate with movers to define roles and identify procedures",
  "Identify layout plan for the new location",
];

const disconnectItems = [
  "All computers should already be shut down",
  "Photograph each location; match to the pre-move inventory",
  "Disconnect and bag all equipment cables and peripheral devices (e.g., mouse, keyboard), label the containers",
  "Label equipment",
];

const reconnectItems = [
  "Check equipment against inventory",
  "Locate equipment according to plan",
  "Unbag equipment cables and peripheral devices and connect the power, network, and peripherals as necessary",
  "Power up to verify network connectivity if requested",
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
        <section style={{ padding: "40px 0", background: "#fff" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 24,
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
                      margin: "0 auto 12px",
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
          style={{ padding: "64px 0 80px", background: "#fff" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 56,
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
                    marginBottom: 16,
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
                    marginBottom: 30,
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 20,
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
                          marginBottom: 12,
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
                          marginBottom: 6,
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
          style={{ padding: "64px 0 80px", background: "var(--light-bg)" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 460px" }} data-aos="fade-up">
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    marginBottom: 26,
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
                        gap: 14,
                        alignItems: "flex-start",
                        padding: "10px 0",
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
          style={{ padding: "64px 0 80px", background: "#fff" }}
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
                    color: "var(--heading-color)",
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  Cabling and Related Activities
                </h2>
                <p
                  style={{
                    color: "#555",
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
                      background: "var(--light-bg)",
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
                        color: "var(--heading-color)",
                        marginBottom: 8,
                      }}
                    >
                      Cable Vendor Coordination
                    </h5>
                    <p
                      style={{
                        fontSize: 12.5,
                        color: "#666",
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
                      background: "var(--light-bg)",
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
                        color: "var(--heading-color)",
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
                            color: "#666",
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
                      background: "var(--light-bg)",
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
                        color: "var(--heading-color)",
                        marginBottom: 8,
                      }}
                    >
                      Testing & Mounting
                    </h5>
                    <p
                      style={{
                        fontSize: 12.5,
                        color: "#666",
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
                            color: "#666",
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
          style={{ padding: "56px 0", background: "var(--light-bg)" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                alignItems: "flex-start",
                marginBottom: 32,
              }}
            >
              <div style={{ flex: "1 1 320px" }} data-aos="fade-up">
                <SectionHeading eyebrow="Equipment & Relocation" />
                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.3,
                    marginBottom: 14,
                  }}
                >
                  Equipment Disconnect and Reconnect
                </h2>
                <div
                  style={{
                    width: 46,
                    height: 3,
                    background: "var(--accent)",
                    marginBottom: 18,
                  }}
                />
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: 14.5 }}>
                  We manage the safe and organized disconnect and reconnect of
                  your IT equipment to minimize downtime and keep your team
                  productive.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                alignItems: "stretch",
              }}
            >
              {/* Pre-Move */}
              <div
                style={{
                  flex: "1 1 300px",
                  background: "#fff",
                  border: "1px solid #e8edf4",
                  borderRadius: 14,
                  padding: "26px 28px",
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    1
                  </span>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--heading-color)",
                    }}
                  >
                    Pre-Move
                  </h4>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {preMoveItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        fontSize: 13.5,
                        color: "#555",
                        lineHeight: 1.6,
                        padding: "6px 0",
                      }}
                    >
                      <i
                        className="bi bi-check2"
                        style={{
                          color: "var(--accent)",
                          fontSize: 14,
                          marginTop: 3,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "0 0 auto",
                  color: "var(--accent)",
                  fontSize: 22,
                }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <i className="bi bi-arrow-right" />
              </div>

              {/* Move Day */}
              <div
                style={{
                  flex: "1 1 300px",
                  background: "#fff",
                  border: "1px solid #e8edf4",
                  borderRadius: 14,
                  padding: "26px 28px",
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    2
                  </span>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--heading-color)",
                    }}
                  >
                    Move Day
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "#888",
                    fontStyle: "italic",
                    marginBottom: 14,
                  }}
                >
                  Some of the events below will depend on mover and company
                  procedures.
                </p>

                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    marginBottom: 6,
                  }}
                >
                  Disconnect at old location
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 14px",
                  }}
                >
                  {disconnectItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        fontSize: 13.5,
                        color: "#555",
                        lineHeight: 1.6,
                        padding: "5px 0",
                      }}
                    >
                      <i
                        className="bi bi-check2"
                        style={{
                          color: "var(--accent)",
                          fontSize: 14,
                          marginTop: 3,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    marginBottom: 6,
                  }}
                >
                  Reconnect at new location
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {reconnectItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        fontSize: 13.5,
                        color: "#555",
                        lineHeight: 1.6,
                        padding: "5px 0",
                      }}
                    >
                      <i
                        className="bi bi-check2"
                        style={{
                          color: "var(--accent)",
                          fontSize: 14,
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
        </section>

        {/* ── Firewall/Network Switch Replacement ─────────────────── */}
        <section
          id="network-security"
          style={{ padding: "56px 0", background: "#fff" }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                alignItems: "flex-start",
                marginBottom: 32,
              }}
            >
              <div style={{ flex: "1 1 320px" }} data-aos="fade-up">
                <SectionHeading eyebrow="Network Security" />
                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.3,
                    marginBottom: 14,
                  }}
                >
                  Firewall/Network Switch Replacement
                </h2>
                <div
                  style={{
                    width: 46,
                    height: 3,
                    background: "var(--accent)",
                    marginBottom: 18,
                  }}
                />
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: 14.5 }}>
                  We upgrade and configure your network security and
                  infrastructure to keep your business protected and connected.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              <div
                style={{
                  background: "var(--light-bg)",
                  borderRadius: 14,
                  padding: "26px 28px",
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      background: "rgba(26, 108, 181, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="bi bi-shield-check"
                      style={{ color: "var(--accent)", fontSize: 22 }}
                    />
                  </div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--heading-color)",
                    }}
                  >
                    Overview
                  </h4>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {firewallOverview.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        fontSize: 13.5,
                        color: "#555",
                        lineHeight: 1.7,
                        padding: "6px 0",
                      }}
                    >
                      <i
                        className="bi bi-check2"
                        style={{
                          color: "var(--accent)",
                          fontSize: 14,
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
                  background: "var(--light-bg)",
                  borderRadius: 14,
                  padding: "26px 28px",
                }}
                data-aos="fade-up"
                data-aos-delay="160"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      background: "rgba(26, 108, 181, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="bi bi-hdd-network"
                      style={{ color: "var(--accent)", fontSize: 22 }}
                    />
                  </div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--heading-color)",
                    }}
                  >
                    Implementation
                  </h4>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {firewallImplementation.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        fontSize: 13.5,
                        color: "#555",
                        lineHeight: 1.7,
                        padding: "6px 0",
                      }}
                    >
                      <i
                        className="bi bi-check2"
                        style={{
                          color: "var(--accent)",
                          fontSize: 14,
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
        </section>

        {/* ── Final CTA — blue banner ────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <div className="container">
            <div
              style={{
                background: "var(--accent)",
                borderRadius: 16,
                padding: "36px 40px",
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
                    marginBottom: 8,
                  }}
                >
                  Need help with your next buildout?
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 15,
                    marginBottom: 20,
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
