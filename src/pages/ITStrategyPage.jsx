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
  { icon: "bi-clipboard2-check", label: "Vendor evaluation and selection" },
  { icon: "bi-people", label: "Service coordination" },
  { icon: "bi-bar-chart", label: "Technology platform assessments" },
  { icon: "bi-file-earmark-text", label: "Contract and service planning" },
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

        {/* ── Strategic Technology Guidance — features-section layout ─ */}
        <section className="features-section">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 40,
                alignItems: "flex-start",
              }}
            >
              {/* Left */}
              <div
                style={{ flex: "1 1 340px" }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="features-content">
                  <h2>Strategic Technology Guidance</h2>
                  <p>
                    Technology decisions affect nearly every aspect of modern
                    business operations. InfoManage works with organizations to
                    ensure that infrastructure, systems, and technology
                    investments support long-term business needs.
                  </p>

                  <div className="main-feature">
                    <div className="feat-icon">
                      <i className="bi bi-diagram-3-fill" />
                    </div>
                    <div>
                      <h4>Advisory-Led Technology Management</h4>
                      <p>
                        Through ongoing planning and strategic guidance, we help
                        organizations maintain stable environments while
                        preparing for future growth and evolving requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: pillars grid */}
              <div
                style={{ flex: "1 1 500px" }}
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="features-grid">
                  {pillars.map((p, i) => (
                    <div
                      key={i}
                      className="feature-card"
                      data-aos="zoom-in"
                      data-aos-delay={400 + i * 50}
                    >
                      <div className="icon-wrapper">
                        <i className={`bi ${p.icon}`} />
                      </div>
                      <h5>{p.title}</h5>
                      <p>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── vCTO Advisory — HowWeWork-style cards ─────────────── */}
        <section id="vcto" className="howwework-section">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Virtual Chief Technology Officer (vCTO)</h2>
              <p>
                Many organizations benefit from technology leadership but may
                not require a full-time internal executive responsible for IT
                strategy. InfoManage provides vCTO advisory services that offer
                experienced technology guidance without the overhead of a
                dedicated internal role.
              </p>
            </div>

            <div className="hww-grid">
              {vCTOCards.map((card, i) => (
                <div
                  key={i}
                  className="hww-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 100}
                >
                  <div className="hww-num">{card.num}</div>
                  <div className="hww-icon-wrap">
                    <i className={`bi ${card.icon}`} />
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
          </div>
        </section>

        {/* ── Technology Roadmaps — dark split ─────────────────── */}
        <section className="mit-dark-section">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <img
                  src="/images/it-strategy/roadmap-planning.jpg"
                  alt="Technology roadmap planning board"
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    display: "block",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                  }}
                />
              </div>
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <span className="mit-split-label">Roadmap Planning</span>
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 18,
                  }}
                >
                  Technology Roadmaps
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.8,
                    marginBottom: 16,
                    fontSize: 15,
                  }}
                >
                  Long-term planning helps organizations avoid reactive
                  technology decisions and unexpected infrastructure challenges.
                  InfoManage works with organizations to develop technology
                  roadmaps that provide visibility into future infrastructure
                  needs.
                </p>
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
                <ul className="mit-split-list">
                  {roadmapAreas.map((item, i) => (
                    <li key={i}>
                      <i className={`bi ${item.icon}`} />
                      {item.label}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 14,
                    lineHeight: 1.8,
                    marginTop: 20,
                    fontStyle: "italic",
                  }}
                >
                  These roadmaps allow organizations to plan investments more
                  effectively while reducing operational risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Infrastructure Architecture — feature-card grid ───── */}
        <section
          id="infrastructure-architecture"
          className="mit-section"
          style={{ background: "#fff" }}
        >
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Infrastructure Architecture</h2>
              <p>
                As organizations grow, their technology environments often
                become more complex. Infrastructure architecture planning
                ensures that systems remain scalable, secure, and manageable.
              </p>
            </div>

            <div className="mit-gov-grid">
              {archItems.map((item, i) => (
                <div
                  key={i}
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={150 + i * 60}
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

        {/* ── Lifecycle Planning — vertical step list + image ───── */}
        <section
          className="mit-section"
          style={{ background: "var(--light-bg)" }}
        >
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Lifecycle Planning</h2>
              <p>
                Technology infrastructure requires regular evaluation and
                replacement. Proper lifecycle planning helps organizations avoid
                unexpected failures and maintain reliable environments.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: "1 1 400px" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {lifecycleSteps.map((step, i) => (
                  <div
                    key={i}
                    className="its-lifecycle-row"
                    data-aos="fade-up"
                    data-aos-delay={150 + i * 70}
                  >
                    <div className="its-lifecycle-dot">
                      <i className={`bi ${step.icon}`} />
                    </div>
                    <div className="its-lifecycle-content">
                      <div className="its-lifecycle-label">
                        Phase {step.num}
                      </div>
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{ flex: "1 1 380px" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="/images/it-strategy/technology-analysis.jpg"
                  alt="Technology planning and analysis"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    display: "block",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Vendor Strategy — dark section with 2×2 glass cards ─ */}
        <section className="mit-dark-section">
          <div className="container">
            <div className="section-title mit-dark-title" data-aos="fade-up">
              <h2>Vendor Strategy and Coordination</h2>
              <p>
                Organizations often depend on multiple technology vendors,
                software providers, and service platforms. InfoManage assists
                organizations by helping evaluate vendors, coordinate services,
                and ensure that vendor relationships support operational needs.
              </p>
            </div>

            <div className="its-vendor-grid">
              {vendorItems.map((item, i) => (
                <div
                  key={i}
                  className="its-vendor-card"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
                >
                  <div className="its-vendor-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Strategic Reviews ─────────────────────────────────── */}
        <section className="mit-section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Strategic Reviews</h2>
              <p>
                Regular technology reviews allow organizations to evaluate their
                current infrastructure and plan for improvements.
              </p>
            </div>

            <div
              style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8 }}>
                InfoManage works with organizations to periodically review their
                technology environment, discuss operational performance, and
                identify areas for improvement.
              </p>
              <p style={{ color: "#666", fontSize: 15, lineHeight: 1.8 }}>
                These discussions help ensure that technology continues to
                support evolving business goals.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who This Is For — numbered criteria ──────────────── */}
        <section
          className="mit-section"
          style={{ background: "var(--light-bg)" }}
        >
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Strategic Technology Partnership</h2>
              <p>
                IT strategy and advisory services are designed for organizations
                that:
              </p>
            </div>

            <div className="mit-criteria-list">
              {forOrgsItems.map((item, i) => (
                <div
                  key={i}
                  className="mit-criteria-item"
                  data-aos="fade-up"
                  data-aos-delay={80 + i * 70}
                >
                  <div className="mit-criteria-num">0{i + 1}</div>
                  <div className="mit-criteria-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
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
                  Ready to plan your technology with confidence?
                </h2>
                <p
                  className="mit-cta-text"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: 20,
                  }}
                >
                  Let&apos;s build a roadmap that keeps your infrastructure
                  ahead of the business, not behind it.
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
