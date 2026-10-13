import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const capabilitiesItems = [
  {
    icon: "bi-telephone",
    title: "Voice Calling",
    desc: "Crystal-clear business calling that keeps your team reachable, in the office or anywhere else.",
  },
  {
    icon: "bi-camera-video",
    title: "Video Conferencing",
    desc: "Face-to-face meetings without booking a conference room or driving across town.",
  },
  {
    icon: "bi-chat-dots",
    title: "Messaging & Chat",
    desc: "Instant messaging alongside your calls, all inside one connected platform.",
  },
  {
    icon: "bi-chat-square-text",
    title: "Business SMS",
    desc: "Text clients and teammates from your business number, not a personal cell phone.",
  },
  {
    icon: "bi-people",
    title: "Conferencing",
    desc: "Bring a whole team, or a whole client call, together on one line.",
  },
  {
    icon: "bi-display",
    title: "Screen Sharing",
    desc: "Walk a client or colleague through anything on your screen in real time.",
  },
];

const benefitsItems = [
  {
    num: "01",
    icon: "bi-lightning-charge",
    title: "Productivity",
    desc: "A workforce that never misses a call, no matter where they're working from.",
    bullets: [
      "Every call rings all your devices at once, and unanswered calls route wherever you choose",
      "Work from anywhere, on any device, without losing functionality",
      "Voicemail transcribed to text and email for faster follow-up",
    ],
  },
  {
    num: "02",
    icon: "bi-cash-coin",
    title: "Reduced Costs",
    desc: "No phone system hardware to buy, install, manage, or replace.",
    bullets: [
      "No proprietary equipment to purchase or maintain",
      "Lower infrastructure and maintenance costs",
      "Voice and data consolidated onto a single network",
    ],
  },
  {
    num: "03",
    icon: "bi-hdd-network",
    title: "Highly Reliable",
    desc: "Built for reliability, from the ground up.",
    bullets: [
      "Five geo-redundant datacenters virtually eliminate outages",
      "Infrastructure scales as your business grows",
      "Always current with the latest features and functionality",
    ],
  },
];

const hardwareItems = [
  { brand: "Polycom", photo: "/images/voip/polycom-phone.png" },
  { brand: "Cisco", photo: "/images/voip/cisco-phone.png" },
  { brand: "Yealink", photo: "/images/voip/yealink-phone.png" },
];

const whyDifferentItems = [
  "A named, local support team — not a nameless overseas call center",
  "White-glove onboarding and implementation from day one",
  "Multi-layer auto attendants, hot desking, and dial-by-name directory",
  "Find me / follow me routes calls the way you actually want",
  "A full admin portal with detailed call activity and history",
  "Paperless invoicing and account management",
];

const processSteps = [
  {
    num: 1,
    title: "Account Set-up",
    bullets: [
      "Documents signed and approved",
      "Account is assigned a Project Manager",
    ],
  },
  {
    num: 2,
    title: "Meet Your Project Manager",
    bullets: [
      "Confirm implementation details — number porting, LAN/WAN infrastructure, and requirements",
      "Complete project checklist",
    ],
  },
  {
    num: 3,
    title: "Scheduling",
    bullets: [
      "Choose and finalize install date and time",
      "Affirm expectations",
      "Confirm porting date",
    ],
  },
  {
    num: 4,
    title: "Installation",
    bullets: [
      "Install equipment and train employees",
      "Validate everything works before technicians depart",
    ],
  },
  {
    num: 5,
    title: "Account Completion",
    bullets: [
      "Finalize paperwork and any service modifications",
      "Billing dates established",
    ],
  },
];

const whoForItems = [
  "Have a remote, hybrid, or multi-location workforce",
  "Want to cut the cost of buying and maintaining phone hardware",
  "Need calling, video, and messaging in a single connected platform",
  "Depend on reliable calling to serve clients and close business",
  "Want local, responsive support instead of an overseas call center",
  "Are ready to replace an aging or overpriced legacy phone system",
];

export default function VoipPage() {
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
        <section className="voip-hero">
          <div className="voip-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-telephone" />
              <span>Cloud Phones &amp; Communications</span>
            </div>
            <h1>You Manage Your Business. We&apos;ll Manage the Phones.</h1>
            <p className="mit-hero-sub">
              Cloud calling that&apos;s more flexible, and more affordable, than
              a traditional office phone system.
            </p>
            {/* <p className="mit-hero-body">
              Voice, video, messaging, and conferencing in one platform, so your
              team stays connected from anywhere, on any device.
            </p>
            <p className="mit-hero-note">
              No phone closet, no maintenance contract, no waiting on hold with
              an overseas call center.
            </p> */}
          </div>
        </section>

        {/* ── Unified Communications — text + features, image ────── */}
        <section className="mit-section voip-section-light">
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
                <span className="voip-eyebrow">One Platform</span>
                <h2
                  className="voip-h2"
                  style={{
                    color: "var(--heading-color)",
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}
                >
                  Every Way You Communicate, Unified
                </h2>
                <p
                  className="voip-lead"
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    maxWidth: 460,
                  }}
                >
                  Calls, video, messaging, and conferencing, working together
                  instead of living in separate apps and separate bills.
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
                  className="pm-features-grid"
                  style={{
                    display: "grid",
                    gap: 16,
                  }}
                >
                  {capabilitiesItems.map((item, i) => (
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
                          className={`bi ${item.icon}`}
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
                        {item.title}
                      </h5>
                      <p
                        className="pm-feature-desc"
                        style={{
                          color: "#666",
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

              <div
                style={{ flex: "1 1 420px" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div style={{ position: "relative" }}>
                  <img
                    className="pm-image-tall"
                    src="/images/home/services.jpg"
                    alt="Team member messaging on a phone while working on a laptop"
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
                      One Number.
                      <br />
                      <span style={{ borderBottom: "2px solid var(--accent)" }}>
                        Every Device.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits to Your Business — Productivity/Cost/Reliability ── */}
        <section className="howwework-section voip-benefits-section">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
              data-aos="fade-up"
            >
              <span className="voip-eyebrow">What You Gain</span>
              <h2 className="voip-h2" style={{ color: "var(--heading-color)" }}>
                Benefits to Your Business
              </h2>
              <p className="voip-lead" style={{ color: "#666" }}>
                What switching to cloud communications actually changes for your
                team and your budget.
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
              {benefitsItems.map((card, i) => (
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
                          color: "#666",
                          fontWeight: 400,
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
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="service-number">{card.num}</div>
                </div>
              ))}
            </div>

            {/* Hardware compatibility strip */}
            <div
              style={{
                marginTop: 48,
                paddingTop: 40,
                borderTop: "1px solid #eef0f4",
              }}
            >
              <div
                style={{ textAlign: "center", marginBottom: 24 }}
                data-aos="fade-up"
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Works With the Hardware You Already Trust
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 24,
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {hardwareItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1px solid #e8edf4",
                      borderRadius: 14,
                      padding: "28px 32px 20px",
                      width: 220,
                      textAlign: "center",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                    data-aos="fade-up"
                    data-aos-delay={150 + i * 80}
                  >
                    <img
                      src={item.photo}
                      alt={`${item.brand} desk phone`}
                      style={{
                        width: "100%",
                        height: 160,
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto 14px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--heading-color)",
                      }}
                    >
                      {item.brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Businesses Are Switching — dark section ───────── */}
        <section className="voip-section-dark">
          <div className="container">
            <div
              className="voip-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {/* Left: header + support callout */}
              <div style={{ flex: "1 1 320px" }} data-aos="fade-right">
                <span className="voip-eyebrow">Why It&apos;s Different</span>
                <h2
                  className="voip-h2 voip-h2-sm"
                  style={{
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 14,
                  }}
                >
                  Real Support, From Real People
                </h2>
                <p
                  className="voip-body-text"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  When something goes wrong with your phones, you talk to a
                  local, state-side technician who picks up the phone, not a
                  script-reading call center on the other side of the world.
                  It&apos;s the same white-glove treatment we bring to
                  everything else we manage.
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
                    className="bi bi-headset"
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
                    Local, state-side support, not an overseas help desk reading
                    from a script.
                  </p>
                </div>
              </div>

              {/* Right: checklist */}
              <div
                style={{ flex: "1 1 360px", minWidth: 0 }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {whyDifferentItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "10px 0",
                        borderBottom:
                          i < whyDifferentItems.length - 1
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Is This You? — criteria grid ──────────────────────── */}
        <section className="mit-section voip-section-tint">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
              data-aos="fade-up"
            >
              <span className="voip-eyebrow">Is This You?</span>
              <h2 className="voip-h2" style={{ color: "var(--heading-color)" }}>
                Built for Teams That Can&apos;t Afford Dropped Calls
              </h2>
              <p className="voip-lead" style={{ color: "#666" }}>
                VoIP from InfoManage fits organizations that:
              </p>
            </div>

            <div
              className="voip-criteria-grid"
              style={{
                display: "grid",
                gap: 16,
                maxWidth: 900,
                margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {whoForItems.map((item, i) => (
                <div
                  key={i}
                  className="mit-criteria-item"
                  style={{ padding: "16px 20px", background: "#fff" }}
                  data-aos="fade-up"
                  data-aos-delay={80 + i * 70}
                >
                  <div
                    className="mit-criteria-icon"
                    style={{ width: 42, height: 42 }}
                  >
                    <i
                      className={
                        [
                          "bi-geo-alt",
                          "bi-piggy-bank",
                          "bi-diagram-3",
                          "bi-graph-up",
                          "bi-headset",
                          "bi-arrow-repeat",
                        ][i]
                      }
                      style={{ fontSize: 18 }}
                    />
                  </div>
                  <p style={{ fontSize: 14.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Process — numbered timeline + phone badge ────── */}
        <section className="mit-section voip-section-light">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 24px",
              }}
              data-aos="fade-up"
            >
              <span className="voip-eyebrow">Getting Started</span>
              <h2 className="voip-h2" style={{ color: "var(--heading-color)" }}>
                Our Process
              </h2>
              <p className="voip-lead" style={{ color: "#666" }}>
                A clear, five-step path from signed agreement to a fully working
                phone system, no surprises along the way.
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

                {processSteps.map((step, i) => (
                  <div
                    key={step.num}
                    style={{
                      position: "relative",
                      marginBottom: i < processSteps.length - 1 ? 16 : 0,
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
                      {step.num}
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
                    {step.bullets.map((b, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 6,
                          padding: "3px 0",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            color: "#666",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Circular phone badge */}
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
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#fff",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: 178 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 14,
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: "#e8f1fa",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i
                            className="bi bi-telephone-fill"
                            style={{ color: "var(--accent)", fontSize: 15 }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "var(--heading-color)",
                          }}
                        >
                          Go-Live Checklist
                        </span>
                      </div>
                      {[
                        {
                          title: "Numbers Ported",
                          status: "Main line is live",
                        },
                        { title: "Desk Phones", status: "Installed & tested" },
                        {
                          title: "Team Training",
                          status: "All users onboarded",
                        },
                      ].map((row, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 7,
                            padding: "7px 0",
                            borderBottom: i < 2 ? "1px solid #f0f1f4" : "none",
                          }}
                        >
                          <i
                            className="bi bi-check-circle-fill"
                            style={{
                              color: "var(--accent)",
                              fontSize: 11,
                              marginTop: 1,
                              flexShrink: 0,
                            }}
                          />
                          <div style={{ textAlign: "left", minWidth: 0 }}>
                            <div
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                color: "#333",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {row.title}
                            </div>
                            <div
                              style={{
                                fontSize: 10,
                                color: "#999",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {row.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
                      className="bi bi-telephone-outbound"
                      style={{ color: "#fff", fontSize: 24 }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 4,
                      left: -14,
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                    }}
                  >
                    <i
                      className="bi bi-headset"
                      style={{ color: "var(--accent)", fontSize: 22 }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 96,
                      right: -18,
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                    }}
                  >
                    <i
                      className="bi bi-camera-video-fill"
                      style={{ color: "var(--accent)", fontSize: 20 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA — blue banner ────────────────────────────── */}
        <section className="voip-cta-section">
          <div className="container">
            <div
              className="voip-cta-banner"
              style={{
                background: "var(--accent)",
                borderRadius: 16,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
              data-aos="fade-up"
            >
              <div style={{ flex: "1 1 320px" }}>
                <h2
                  className="voip-cta-heading"
                  style={{
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  Ready to move your phones to the cloud?
                </h2>
                <p
                  className="voip-cta-text"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: 20,
                  }}
                >
                  Let&apos;s find the right VoIP setup for how your team
                  actually works.
                </p>
                <Link
                  to="/contact"
                  className="voip-cta-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    color: "var(--accent)",
                    borderRadius: 50,
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
              <img
                className="voip-cta-image"
                src="/images/about/support-team.jpg"
                alt="InfoManage team ready to help"
                style={{
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
