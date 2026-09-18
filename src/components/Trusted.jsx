const credibility = [
  { icon: "bi-diagram-3", label: "One Partner Across Your Technology" },
  { icon: "bi-gear-wide-connected", label: "End-to-End Operational & Project Expertise" },
  { icon: "bi-clock-history", label: "24×7 Monitoring Available" },
];

export default function Trusted() {
  return (
    <section id="trusted" className="trusted-section">
      <div className="container">
        <div
          className="trusted-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div
            className="trusted-image-col"
            style={{ position: "relative" }}
            data-aos="fade-right"
          >
            <i
              className="bi bi-flower1"
              style={{
                position: "absolute",
                bottom: -14,
                left: -14,
                fontSize: 34,
                color: "rgba(26, 108, 181, 0.35)",
                zIndex: 0,
              }}
            />
            <i
              className="bi bi-flower2"
              style={{
                position: "absolute",
                bottom: 6,
                left: -26,
                fontSize: 20,
                color: "rgba(46, 168, 120, 0.4)",
                zIndex: 0,
              }}
            />
            <img
              src="/images/home/partnership.jpg"
              alt="InfoManage team celebrating with a client"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                display: "block",
              }}
            />
            <div
              className="trusted-badge-box"
              style={{
                position: "absolute",
                bottom: 16,
                right: -16,
                zIndex: 2,
                minWidth: 100,
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 12,
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(26, 108, 181, 0.4)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="trusted-badge-num" style={{ fontWeight: 900, lineHeight: 1 }}>
                30+
              </div>
              <div className="trusted-badge-label" style={{ marginTop: 4, lineHeight: 1.3 }}>
                Years of
                <br />
                Expertise
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className="trusted-text-col"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="trusted-badge">Established & Trusted</span>
            <h2 className="trusted-heading">
              Technology Experience That Goes Beyond the Help Desk
            </h2>
            <p className="trusted-desc">
              Founded in 1995, InfoManage brings decades of experience across IT
              operations, infrastructure, cybersecurity, cloud, communications,
              projects and technology strategy.
            </p>
          </div>

          {/* Stats */}
          <div className="trusted-stats-grid">
            {credibility.map((c, i) => (
              <div
                key={i}
                className="trusted-stat-item"
                style={{ textAlign: "center" }}
                data-aos="zoom-in"
                data-aos-delay={230 + i * 80}
              >
                <div
                  className="trusted-stat-icon"
                  style={{
                    margin: "0 auto 12px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(26, 108, 181, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className={`bi ${c.icon}`} style={{ color: "var(--accent)" }} />
                </div>
                <span
                  className="trusted-stat-label"
                  style={{
                    display: "block",
                    fontWeight: 700,
                    color: "var(--heading-color)",
                    lineHeight: 1.4,
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
