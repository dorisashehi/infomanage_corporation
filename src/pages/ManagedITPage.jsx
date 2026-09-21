import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const coverageItems = [
  "24/7 system monitoring and alert response",
  "Automated patch management and routine maintenance",
  "Endpoint and workstation protection",
  "Remote, on-site, or hybrid helpdesk support",
  "Backup monitoring and disaster recovery planning",
  "Monthly incident reporting",
  "Vendor coordination and escalation",
  "Server, network, and infrastructure administration",
  "VoIP and cloud services coordination",
];

const resultsItems = [
  {
    icon: "bi-graph-down",
    title: "Reduced Downtime",
    desc: "Proactive monitoring and maintenance catch issues before they interrupt your team.",
  },
  {
    icon: "bi-cash-coin",
    title: "Predictable Costs",
    desc: "Flat, near-fixed monthly pricing means no surprise invoices. Budget for IT with confidence.",
  },
  {
    icon: "bi-shield-lock",
    title: "Improved Security",
    desc: "Ongoing patch management and endpoint protection keep your exposure to threats low.",
  },
  {
    icon: "bi-people",
    title: "A Dedicated Team",
    desc: "A Relationship Manager plus a mix of senior, mid-level, and junior technicians, not a rotating ticket queue.",
  },
  {
    icon: "bi-signpost-2",
    title: "Strategic Guidance",
    desc: "Ongoing technology roadmap and lifecycle planning help you make investment decisions ahead of time, not after something breaks.",
  },
  {
    icon: "bi-file-earmark-bar-graph",
    title: "Documented Visibility",
    desc: "Monthly incident reports show you what was fixed, what's trending, and what needs attention.",
  },
];

const frameworkCards = [
  {
    icon: "bi-wrench-adjustable",
    title: "Fix",
    desc: "Rapid issue resolution keeps users productive and minimizes disruptions.",
  },
  {
    icon: "bi-gear",
    title: "Maintain",
    desc: "Proactive operations reduce risk and prevent problems before they occur.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Enhance",
    desc: "Strategic guidance helps organizations improve and evolve their technology environments.",
  },
];

const maintenanceCycle = [
  {
    key: "tl",
    label: "Monitoring",
    corner: "topLeft",
    bullets: [
      "Desktops, servers, network devices — switches, firewalls, access points",
      "Firmware updates",
      "Tickets automatically created",
      "Log, performance, and disk space checks",
      "Reboots and missed updates",
      "Becomes part of the book of work",
    ],
  },
  {
    key: "tr",
    label: "Review of All Tickets",
    corner: "topRight",
    bullets: [
      "Automated, user, and insourced initiated",
      "Book of work review",
      "Review and prioritize",
    ],
  },
  {
    key: "br",
    label: "Patch Management",
    corner: "bottomRight",
    bullets: [
      "Desktops, servers, switches, firewalls, access points",
      "Review process",
      "Email reminders",
    ],
  },
  {
    key: "bl",
    label: "Endpoint Protection",
    corner: "bottomLeft",
    bullets: ["Review process", "Automatic updates"],
  },
];

const idealForItems = [
  "Depend heavily on technology to operate",
  "Prefer proactive infrastructure management rather than reactive support",
  "Want predictable IT management costs",
  "Require reliable monitoring and system maintenance",
  "Value long-term technology planning and guidance",
  "Don't have a full internal IT department and want one they can rely on",
];

export default function ManagedITPage() {
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
        <section className="mit-hero">
          <div className="mit-hero-overlay" />
          <div
            className="container mit-hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mit-hero-badge">
              <i className="bi bi-cpu" />
              <span>Managed IT Services</span>
            </div>
            <h1>
              Stop Reacting to Problems.
              <br />
              Start Preventing Them.
            </h1>
            <p className="mit-hero-sub">
              InfoManage takes operational responsibility for the technology
              your business depends on, so your team can focus on growth instead
              of troubleshooting.
            </p>

            {/* <div className="mit-hero-btns">
              <Link to="/contact#contact" className="btn-get-started">Schedule a Consultation</Link>
              <Link to="/contact" className="mit-hero-outline-btn">Request an IT Assessment</Link>
            </div> */}
          </div>
        </section>

        {/* ── What We Handle — light section, 3-column ──────────── */}
        <section id="overview" className="mit-overview-section">
          <div className="container">
            <div
              className="mit-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              {/* Text */}
              <div style={{ flex: "1 1 280px" }} data-aos="fade-up">
                <span className="mit-eyebrow">What We Handle</span>
                <h2
                  className="mit-h2 mit-h2-sm"
                  style={{
                    color: "var(--heading-color)",
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  Your Technology, Fully Covered
                </h2>
                <div
                  style={{
                    width: 46,
                    height: 3,
                    background: "var(--accent)",
                    marginBottom: 22,
                  }}
                />
                <p
                  className="mit-body-text"
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 14,
                  }}
                >
                  Desktops to servers: the systems your business runs on,
                  managed end to end.
                </p>
                <p
                  className="mit-body-text"
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  Our team manages the core infrastructure that businesses
                  depend on every day, ensuring that systems remain reliable,
                  secure, and productive.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    background: "var(--light-bg)",
                    borderRadius: 10,
                    padding: "16px 18px",
                  }}
                >
                  <i
                    className="bi bi-shield-check"
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
                    By continuously managing these responsibilities, InfoManage
                    helps organizations maintain stable and secure technology
                    environments.
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <div
                style={{ flex: "1 1 320px" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <ul
                  className="mit-coverage-list"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                  }}
                >
                  {coverageItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "9px 0",
                        borderBottom: "1px solid #eef0f4",
                        color: "#444",
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "var(--accent)",
                          fontSize: 15,
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

        {/* ── Fix / Maintain / Enhance — HowWeWork style cards ─── */}
        <section className="howwework-section mit-fme-section">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
              data-aos="fade-up"
            >
              <span className="mit-eyebrow">How We Work</span>
              <h2 className="mit-h2" style={{ color: "var(--heading-color)" }}>
                Fix It. Maintain It. Make It Better.
              </h2>
              <p className="mit-lead" style={{ color: "#666" }}>
                A simple operating rhythm that keeps systems running and gets
                better over time.
              </p>
            </div>

            <div
              className="mit-fme-row"
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #e5eaf1",
                borderRadius: 16,
                boxShadow: "0 8px 28px rgba(13, 30, 46, 0.06)",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {frameworkCards.map((card, i) => {
                const color = [
                  "var(--accent)",
                  "var(--heading-color)",
                  "var(--accent-dark)",
                ][i % 3];
                return (
                  <Fragment key={i}>
                    <div
                      className="mit-fme-card"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                      }}
                      data-aos="fade-up"
                      data-aos-delay={150 + i * 100}
                    >
                      <div
                        className="mit-fme-icon"
                        style={{
                          borderRadius: "50%",
                          border: `2px solid ${color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <i className={`bi ${card.icon}`} style={{ color }} />
                      </div>
                      <div>
                        <h6
                          className="mit-fme-title"
                          style={{
                            color,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            margin: "0 0 4px",
                          }}
                        >
                          {card.title}.
                        </h6>
                        <p
                          className="mit-fme-desc"
                          style={{
                            color: "rgb(85, 85, 85)",
                            margin: 0,
                            lineHeight: 1.4,
                          }}
                        >
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    {i < frameworkCards.length - 1 && (
                      <div
                        className="mit-fme-connector"
                        style={{
                          alignItems: "center",
                          flex: "0 1 40px",
                          minWidth: 20,
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
                );
              })}
            </div>
          </div>
        </section>

        {/* ── The Maintain Cycle — circular diagram ─────────────── */}
        <section
          className="mit-section"
          style={{ padding: "48px 0", background: "#fff" }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 40px",
              }}
              data-aos="fade-up"
            >
              <span className="mit-eyebrow">Behind the Scenes</span>
              <h2 className="mit-h2" style={{ color: "var(--heading-color)" }}>
                How We Keep Systems Running
              </h2>
              <p className="mit-lead" style={{ color: "#666" }}>
                A closer look at the Maintain cycle: the proactive work that
                happens before you ever notice a problem.
              </p>
            </div>

            <div
              className="mit-maintain-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 260px 1fr",
                gridTemplateRows: "auto auto",
                gap: 20,
                alignItems: "center",
                maxWidth: 1000,
                margin: "0 auto",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Callout boxes */}
              {maintenanceCycle.map((item) => (
                <div
                  key={item.key}
                  className="mit-maintain-item"
                  style={{
                    gridColumn:
                      item.corner === "topLeft" || item.corner === "bottomLeft"
                        ? 1
                        : 3,
                    gridRow:
                      item.corner === "topLeft" || item.corner === "topRight"
                        ? 1
                        : 2,
                    border: "1px solid rgba(26, 108, 181, 0.3)",
                    borderRadius: 12,
                    padding: "16px 18px",
                  }}
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {item.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: 13,
                          color: "#555",
                          lineHeight: 1.6,
                          marginBottom: j < item.bullets.length - 1 ? 6 : 0,
                          paddingLeft: 14,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "var(--accent)",
                          }}
                        >
                          •
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Circle */}
              <div
                className="mit-maintain-circle"
                style={{
                  gridColumn: 2,
                  gridRow: "1 / 3",
                  position: "relative",
                  width: 260,
                  height: 260,
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "50%",
                    background: "var(--accent)",
                    borderTopLeftRadius: "100%",
                    border: "2px solid #fff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "50%",
                    background: "var(--accent)",
                    borderTopRightRadius: "100%",
                    border: "2px solid #fff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "50%",
                    height: "50%",
                    background: "var(--accent)",
                    borderBottomRightRadius: "100%",
                    border: "2px solid #fff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "50%",
                    height: "50%",
                    background: "var(--accent)",
                    borderBottomLeftRadius: "100%",
                    border: "2px solid #fff",
                  }}
                />

                {maintenanceCycle.map((item) => (
                  <span
                    key={item.key}
                    style={{
                      position: "absolute",
                      top:
                        item.corner === "topLeft" || item.corner === "topRight"
                          ? "30%"
                          : "70%",
                      left:
                        item.corner === "topLeft" ||
                        item.corner === "bottomLeft"
                          ? "30%"
                          : "70%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      textAlign: "center",
                      width: 100,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </span>
                ))}

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <i
                    className="bi bi-arrow-repeat"
                    style={{ color: "var(--accent)", fontSize: 18 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Results You Can Expect — Project Management layout ── */}
        <section
          className="mit-section"
          style={{ padding: "48px 0", background: "#fff" }}
        >
          <div className="container">
            <div
              className="mit-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1 1 420px" }} data-aos="fade-up">
                <span className="mit-eyebrow">What You Get</span>
                <h2
                  className="mit-h2"
                  style={{
                    color: "var(--heading-color)",
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}
                >
                  The Difference You&apos;ll Actually Notice
                </h2>
                <p
                  className="mit-body-text"
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    maxWidth: 460,
                  }}
                >
                  Not a list of tasks. What those tasks add up to for your
                  business.
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
                  className="mit-results-grid"
                  style={{
                    display: "grid",
                    gap: 16,
                  }}
                >
                  {resultsItems.map((item, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 80}
                    >
                      <div
                        className="mit-results-icon"
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
                        className="mit-results-title"
                        style={{
                          fontWeight: 700,
                          color: "var(--heading-color)",
                          marginBottom: 8,
                        }}
                      >
                        {item.title}
                      </h5>
                      <p
                        className="mit-results-desc"
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
                    className="mit-results-image"
                    src="/images/managed-it/operations.jpg"
                    alt="InfoManage technician managing IT operations"
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
                      Less Firefighting.
                      <br />
                      <span style={{ borderBottom: "2px solid var(--accent)" }}>
                        More Progress.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Is This You? — dark section, Why It's Different format ── */}
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
                <span className="mit-eyebrow">Is This You?</span>
                <h2
                  className="mit-h2 mit-h2-sm"
                  style={{
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 14,
                  }}
                >
                  Built for Businesses Like Yours
                </h2>
                <p
                  className="mit-body-text"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  If your team spends more time firefighting IT problems than
                  growing the business, it might be time for a partner who
                  handles the technology so you don&apos;t have to.
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
                    className="bi bi-building"
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
                    No in-house IT department? We become the technology team
                    your business doesn&apos;t have to hire.
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
                  {idealForItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "10px 0",
                        borderBottom:
                          i < idealForItems.length - 1
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

        {/* ── Final CTA — blue banner ────────────────────────────── */}
        <section className="mit-cta-section">
          <div className="container">
            <div
              className="mit-cta-banner"
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
                  className="mit-cta-heading"
                  style={{
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  Ready to stop reacting and start preventing?
                </h2>
                <p
                  className="mit-cta-text"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: 20,
                  }}
                >
                  Let&apos;s build a smarter, more secure, and more reliable IT
                  environment, together.
                </p>
                <Link
                  to="/contact"
                  className="mit-cta-btn"
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
                className="mit-cta-image"
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
