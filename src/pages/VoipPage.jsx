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
    color: "#123a63",
    bullets: [
      "Documents signed and approved",
      "Account is assigned a Project Manager",
    ],
  },
  {
    num: 2,
    title: "Meet Your Project Manager",
    color: "#134f83",
    bullets: [
      "Confirm implementation details — number porting, LAN/WAN infrastructure, and requirements",
      "Complete project checklist",
    ],
  },
  {
    num: 3,
    title: "Scheduling",
    color: "#1a6cb5",
    bullets: [
      "Choose and finalize install date and time",
      "Affirm expectations",
      "Confirm porting date",
    ],
  },
  {
    num: 4,
    title: "Installation",
    color: "#3684c4",
    bullets: [
      "Install equipment and train employees",
      "Validate everything works before technicians depart",
    ],
  },
  {
    num: 5,
    title: "Account Completion",
    color: "#6ba8d9",
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
              <span>VoIP Phone Systems</span>
            </div>
            <h1>You Manage Your Business. We&apos;ll Manage the Phones.</h1>
            <p className="mit-hero-sub">
              Cloud calling that&apos;s more flexible, and more affordable, than
              a traditional office phone system.
            </p>
            <p className="mit-hero-body">
              Voice, video, messaging, and conferencing in one platform, so your
              team stays connected from anywhere, on any device.
            </p>
            <p className="mit-hero-note">
              No phone closet, no maintenance contract, no waiting on hold with
              an overseas call center.
            </p>
          </div>
        </section>

        {/* ── Unified Communications — feature-card grid ────────── */}
        <section className="mit-section voip-section-light">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
              data-aos="fade-up"
            >
              <span className="voip-eyebrow">One Platform</span>
              <h2 className="voip-h2" style={{ color: "var(--heading-color)" }}>
                Every Way You Communicate, Unified
              </h2>
              <p className="voip-lead" style={{ color: "#666" }}>
                Calls, video, messaging, and conferencing, working together
                instead of living in separate apps and separate bills.
              </p>
            </div>

            <div
              className="mit-gov-grid"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {capabilitiesItems.map((item, i) => (
                <div
                  key={i}
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 50}
                >
                  <div className="icon-wrapper">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
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

            <div className="hww-grid">
              {benefitsItems.map((card, i) => (
                <div
                  key={i}
                  className="hww-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 100}
                >
                  <div className="hww-num">{card.num}</div>
                  <div
                    className="hww-icon-wrap"
                    style={{ borderRadius: "50%", background: "var(--accent)" }}
                  >
                    <i
                      className={`bi ${card.icon}`}
                      style={{ color: "#fff" }}
                    />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <ul className="hww-points">
                    {card.bullets.map((b, j) => (
                      <li key={j}>
                        <i className="bi bi-check2-circle" />
                        {b}
                      </li>
                    ))}
                  </ul>
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

        {/* ── Our Process — vertical numbered timeline ──────────── */}
        <section className="mit-section voip-section-light">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 40px",
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

            <div className="voip-process">
              {processSteps.map((step, i) => {
                const side = step.num % 2 === 1 ? "left" : "right";
                return (
                  <div
                    key={step.num}
                    className="voip-process-row"
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 80}
                  >
                    {side === "left" && (
                      <div className="voip-process-text left">
                        <span className="voip-process-step-label">
                          Step {step.num}
                          <span className="dots" />
                        </span>
                        <div className="voip-process-title">{step.title}</div>
                        <ul className="voip-process-bullets">
                          {step.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div
                      className="voip-process-node"
                      style={{ background: step.color }}
                    >
                      <span>{step.num}</span>
                    </div>
                    {side === "right" && (
                      <div className="voip-process-text right">
                        <span className="voip-process-step-label">
                          <span className="dots" />
                          Step {step.num}
                        </span>
                        <div className="voip-process-title">{step.title}</div>
                        <ul className="voip-process-bullets">
                          {step.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
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
