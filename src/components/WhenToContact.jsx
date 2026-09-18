import { Link } from "react-router-dom";

const situations = [
  {
    icon: "bi-building",
    text: "Opening, moving, renovating or expanding an office",
  },
  {
    icon: "bi-search",
    text: "Looking for a new or better IT support company",
  },
  {
    icon: "bi-graph-up-arrow",
    text: "Growing and need technology that can grow with the business",
  },
  {
    icon: "bi-shield-exclamation",
    text: "Concerned about cybersecurity, backups or compliance",
  },
  {
    icon: "bi-wifi-off",
    text: "Having recurring network, Wi-Fi, internet or technology problems",
  },
  {
    icon: "bi-cloud-arrow-up",
    text: "Migrating to Microsoft 365, Google Workspace or the cloud",
  },
  {
    icon: "bi-telephone",
    text: "Implementing or replacing a business phone system",
  },
  {
    icon: "bi-kanban",
    text: "Planning a significant technology project or upgrade",
  },
  {
    icon: "bi-briefcase",
    text: "Looking for one company to take responsibility for IT",
  },
];

export default function WhenToContact() {
  return (
    <section id="when-to-contact" className="wtc-section">
      <div className="container">
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}
          data-aos="fade-up"
        >
          <span
            className="wtc-badge"
            style={{
              display: "block",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            WHEN TO CONTACT US
          </span>
          <h2
            className="wtc-heading"
            style={{
              fontWeight: 700,
              color: "var(--heading-color)",
            }}
          >
            When Should You Contact InfoManage?
          </h2>
        </div>

        <div className="wtc-row" style={{ alignItems: "stretch" }}>
          <div
            className="wtc-grid"
            style={{
              display: "grid",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {situations.map((s, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  className="wtc-icon"
                  style={{
                    borderRadius: 8,
                    background: "rgba(26,108,181,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`bi ${s.icon}`} style={{ color: "var(--accent)" }} />
                </div>
                <p
                  className="wtc-item-text"
                  style={{
                    fontWeight: 400,
                    color: "rgb(85, 85, 85)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="wtc-cta"
            style={{
              background: "var(--light-bg)",
              borderRadius: 14,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 12,
              textAlign: "left",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <i
                className="bi bi-chat-dots wtc-cta-icon"
                style={{ color: "var(--accent)", flexShrink: 0 }}
              />
              <p
                className="wtc-cta-title"
                style={{
                  fontWeight: 700,
                  color: "var(--heading-color)",
                  margin: 0,
                }}
              >
                Recognize your situation?
              </p>
            </div>
            <p className="wtc-cta-text" style={{ color: "#777", margin: 0 }}>
              If any of this sounds familiar, it's time to talk.
            </p>
            <Link
              to="/contact"
              className="btn-pricing wtc-cta-btn"
              style={{
                display: "inline-block",
                alignSelf: "flex-start",
              }}
            >
              Contact InfoManage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
