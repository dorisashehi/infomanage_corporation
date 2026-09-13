import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const exposureItems = [
  {
    icon: "bi-envelope-exclamation",
    risk: "Phishing & human error",
    detail:
      "Most breaches trace back to a person clicking, not a sophisticated attack.",
  },
  {
    icon: "bi-key",
    risk: "Weak access controls",
    detail: "Admin and finance accounts without proper restrictions.",
  },
  {
    icon: "bi-bug",
    risk: "Unpatched systems",
    detail:
      "Known vulnerabilities sitting unaddressed on devices and network hardware.",
  },
  {
    icon: "bi-cloud-slash",
    risk: "Backups that have never been tested",
    detail:
      "Assumed to work, but never actually restored under real conditions.",
  },
  {
    icon: "bi-laptop",
    risk: "Remote work exposure",
    detail:
      "Distributed work has widened the attack surface for many businesses.",
  },
];

const riskLookItems = [
  {
    icon: "bi-key-fill",
    title: "Exposed Credentials",
    desc: "Compromised passwords and business email addresses can surface in data breaches and give attackers a head start—often before your team knows they're exposed.",
  },
  {
    icon: "bi-shield-exclamation",
    title: "Security Gaps",
    desc: "Missing MFA, outdated devices, excessive admin access, and incomplete offboarding create openings attackers can exploit.",
  },
  {
    icon: "bi-arrow-counterclockwise",
    title: "Recovery Uncertainty",
    desc: "Having backups isn't enough. Without verified, tested recovery, you may only discover what wasn't protected when you need to restore it most.",
  },
];

const phishingEmails = [
  {
    sender: "helpdesk@informanage-support.net",
    subject: "⚠ Action Required: Verify Your Mailbox",
    preview:
      "Your mailbox will be suspended unless you confirm your credentials within 24 hours...",
  },
  {
    sender: "accounts@secure-billing-alert.com",
    subject: "Invoice Overdue — Immediate Payment Needed",
    preview:
      "Please review the attached invoice and submit payment to avoid service interruption...",
  },
];

const layersItems = [
  {
    num: "01",
    icon: "bi-envelope-check",
    title: "Email & Phishing Protection",
    desc: "Block malicious emails, spoofing attempts, and social engineering threats while helping employees recognize attacks before they become a problem.",
  },
  {
    num: "02",
    icon: "bi-key-fill",
    title: "Identity & Access Security",
    desc: "Protect every account with MFA, controlled privileges, and secure processes for onboarding and offboarding users.",
  },
  {
    num: "03",
    icon: "bi-laptop",
    title: "Endpoint & Vulnerability Protection",
    desc: "Secure every device with endpoint detection, hardening, patch management, and proactive vulnerability remediation.",
  },
  {
    num: "04",
    icon: "bi-cloud-arrow-up-fill",
    title: "Backup & Disaster Recovery",
    desc: "Maintain protected, immutable backups and regularly test recovery so your business can restore operations when it matters most.",
  },
  {
    num: "05",
    icon: "bi-activity",
    title: "24/7 Security Monitoring",
    desc: "Continuously detect, investigate, and respond to threats with AI-assisted monitoring and security experts working around the clock.",
  },
];

const checklistItems = [
  "A written security policy exists, and someone is actually responsible for it",
  "Staff can recognize a phishing attempt before they click it",
  "Multi-factor authentication is required on email and admin accounts",
  "Backups run automatically, and a restore has actually been tested",
  "Every device has current antivirus and endpoint protection",
  "Guest and personal-device access is kept separate from company systems",
  "Departing employees lose access immediately, not eventually",
  "Security gets reviewed on a schedule, not just after something goes wrong",
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

export default function CybersecurityPage() {
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
        <section className="cyber-hero">
          <div className="cyber-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-shield-lock" />
              <span>Cybersecurity</span>
            </div>
            <h1>
              Attackers Don&apos;t Need a Big Mistake.
              <br />A Small One Will Do.
            </h1>
            <p className="mit-hero-sub">
              A missed patch, a reused password, a backup that&apos;s never been
              tested — we find these gaps before they turn into downtime.
            </p>

            {/* <div className="mit-hero-btns">
              <Link to="/contact" className="btn-get-started">Request a Security Assessment</Link>
              <Link to="/contact#contact" className="mit-hero-outline-btn">Discuss Your Risk</Link>
            </div> */}
          </div>
        </section>

        {/* ── Common Points of Exposure — About-style layout ────── */}
        <section style={{ padding: "48px 0", background: "#fff" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                alignItems: "center",
              }}
            >
              {/* Left: image collage */}
              <div style={{ flex: "1 1 460px" }} data-aos="fade-right">
                <div
                  style={{
                    position: "relative",
                    maxWidth: 620,
                    height: 480,
                    margin: "0 auto",
                  }}
                >
                  {/* dashed frame */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "92%",
                      height: "92%",
                      border: "2px dashed var(--accent)",
                      borderRadius: 12,
                    }}
                  />
                  {/* main photo */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      width: "92%",
                      height: "84%",
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                    }}
                  >
                    <img
                      src="/images/cybersecurity/threat-monitoring.jpg"
                      alt="Security analyst reviewing system logs for threats"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  {/* badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      minWidth: 100,
                      background: "var(--accent)",
                      color: "#fff",
                      padding: "16px 18px",
                      borderRadius: 12,
                      textAlign: "center",
                      boxShadow: "0 8px 24px rgba(26, 108, 181, 0.4)",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div
                      style={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}
                    >
                      95%
                    </div>
                    <div
                      style={{ fontSize: 11, marginTop: 4, lineHeight: 1.3 }}
                    >
                      Of Breaches Start
                      <br />
                      With Human Error
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div
                style={{ flex: "1 1 380px" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <SectionHeading eyebrow="The Real Risk" />
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  Common Points of Exposure
                </h2>
                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    fontSize: 15,
                  }}
                >
                  Where the actual risk tends to sit inside a growing business.
                  A single weak point is often enough, and most organizations
                  are carrying more than one.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    columnGap: 20,
                    rowGap: 4,
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {exposureItems.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "8px 0",
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(26, 108, 181, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <i
                          className={`bi ${item.icon}`}
                          style={{ color: "var(--accent)", fontSize: 15 }}
                        />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {item.risk}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#888",
                            lineHeight: 1.4,
                          }}
                        >
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How These Gaps Show Up in Practice ────────────────── */}
        <section style={{ padding: "48px 0 76px", background: "#0d1e2e" }}>
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 460px" }} data-aos="fade-right">
                <SectionHeading eyebrow="In Practice" />
                <h2
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 10,
                  }}
                >
                  How These Gaps Show Up in Practice
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 15,
                    marginBottom: 24,
                  }}
                >
                  Rarely one big failure. Usually a handful of small ones,
                  stacked together.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {riskLookItems.map((item, i) => (
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
                          color: "rgba(255,255,255,0.7)",
                          fontSize: 14,
                          lineHeight: 1.7,
                        }}
                      >
                        <strong style={{ color: "#fff" }}>
                          {item.title}:
                        </strong>{" "}
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{ flex: "1 1 380px", position: "relative" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
              <div
                style={{
                  position: "relative",
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
                }}
              >
                {/* mail app header bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 14px",
                    background: "#f1f3f6",
                    borderBottom: "1px solid #e5e8ee",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#ff5f57",
                    }}
                  />
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#febc2e",
                    }}
                  />
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#28c840",
                    }}
                  />
                  <span
                    style={{
                      marginLeft: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#667",
                    }}
                  >
                    Inbox
                  </span>
                </div>

                {phishingEmails.map((mail, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "14px 16px",
                      borderBottom:
                        i < phishingEmails.length - 1
                          ? "1px solid #eef0f4"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 12,
                          color: "#888",
                        }}
                      >
                        <i
                          className="bi bi-envelope"
                          style={{ color: "var(--accent)" }}
                        />
                        {mail.sender}
                      </div>
                      <span
                        style={{
                          background: "#fdecea",
                          color: "#dc3545",
                          fontSize: 10,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 20,
                          textTransform: "uppercase",
                          flexShrink: 0,
                        }}
                      >
                        Suspicious
                      </span>
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 13.5,
                        color: "var(--heading-color)",
                        marginBottom: 4,
                      }}
                    >
                      {mail.subject}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}
                    >
                      {mail.preview}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginTop: -12,
                  maxWidth: 270,
                  background: "var(--accent)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <i
                    className="bi bi-shield-exclamation"
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
                  Built From Real Attack Patterns
                </h5>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  These are the kinds of messages we actively hunt for —
                  before someone on your team clicks.
                </p>
                <Link
                  to="/contact"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.5)",
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
        </section>

        {/* ── The Way We Defend Your Systems — five layers ──────── */}
        <section className="howwework-section" style={{ padding: "48px 0" }}>
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 24px",
              }}
              data-aos="fade-up"
            >
              <SectionHeading eyebrow="Our Approach" />
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 12,
                }}
              >
                The Way We Defend Your Systems
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                No single safeguard covers everything. Each layer is built to
                catch what the one before it might miss.
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

                {layersItems.map((item, i) => {
                  const color = "var(--accent)";
                  return (
                    <div
                      key={item.num}
                      style={{
                        position: "relative",
                        marginBottom: i < layersItems.length - 1 ? 16 : 0,
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
                          background: color,
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: 18,
                          flexShrink: 0,
                        }}
                      >
                        {item.num.replace(/^0/, "")}
                      </div>
                      <h4
                        style={{
                          margin: "6px 0 8px",
                          fontSize: 16.5,
                          fontWeight: 700,
                          color: "var(--heading-color)",
                        }}
                      >
                        {item.title}
                      </h4>
                      <div
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
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
                            background: "#fdecea",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i
                            className="bi bi-envelope-fill"
                            style={{ color: "#EA4335", fontSize: 15 }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "var(--heading-color)",
                          }}
                        >
                          Gmail
                        </span>
                      </div>
                      {[
                        { from: "IT Security Team", subject: "MFA enabled on your account" },
                        { from: "Accounting", subject: "Q3 invoices approved" },
                        { from: "No-Reply", subject: "Weekly threat summary" },
                      ].map((row, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 7,
                            padding: "7px 0",
                            borderBottom:
                              i < 2 ? "1px solid #f0f1f4" : "none",
                          }}
                        >
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "var(--accent)",
                              marginTop: 4,
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
                              {row.from}
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
                              {row.subject}
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
                      className="bi bi-shield-lock"
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
                      className="bi bi-google"
                      style={{ color: "#4285F4", fontSize: 22 }}
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
                      className="bi bi-microsoft"
                      style={{ color: "#00A4EF", fontSize: 20 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where Do You Actually Stand — self-check ──────────── */}
        <section
          className="mit-section"
          style={{ padding: "48px 0", background: "#fff" }}
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
              <SectionHeading eyebrow="Quick Self-Check" />
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  marginBottom: 10,
                }}
              >
                Where Do You Actually Stand?
              </h2>
              <p style={{ color: "#666", fontSize: 15 }}>
                A short version of what we walk through with every new client.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                background: "var(--accent)",
                borderRadius: 14,
                padding: "18px 22px",
                maxWidth: 800,
                margin: "0 auto 22px",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: '"Nunito", sans-serif',
                  flexShrink: 0,
                }}
              >
                60%
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                of small businesses that suffer a cyberattack shut down within
                six months. The fundamentals are what decide which side of that
                number you&apos;re on.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: 20,
                maxWidth: 800,
                margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: "1px solid #eef0f4",
                    color: "#444",
                    fontSize: 14,
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
