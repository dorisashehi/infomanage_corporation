const steps = [
  {
    icon: "bi-wrench-adjustable",
    title: "Fix",
    desc: "Fix what isn't working.",
    color: "var(--accent)",
  },
  {
    icon: "bi-gear",
    title: "Maintain",
    desc: "Maintain the technology your business depends on.",
    color: "var(--heading-color)",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Enhance",
    desc: "Enhance your technology as your business evolves and new technologies emerge.",
    color: "var(--accent-dark)",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="hww-section">
      <div className="container">
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}
          data-aos="fade-up"
        >
          <span
            className="hww-badge"
            style={{
              display: "block",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "var(--accent)",
              marginBottom: 10,
            }}
          >
            HOW WE HELP
          </span>
          <h2
            className="hww-heading"
            style={{
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 10,
            }}
          >
            Fix. Maintain. Enhance.
          </h2>
          <p className="hww-intro" style={{ color: "#666" }}>
            From understanding your needs to continuously improving your
            technology, we make IT simple, secure, and predictable.
          </p>
        </div>

        <div
          className="hww-steps-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            border: "1px solid #e5eaf1",
            borderRadius: 16,
            boxShadow: "0 8px 28px rgba(13, 30, 46, 0.06)",
            marginBottom: 48,
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="hww-step"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                className="hww-step-content"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flex: "1 1 auto",
                }}
                data-aos="fade-up"
                data-aos-delay={150 + i * 100}
              >
                <div
                  className="hww-icon"
                  style={{
                    borderRadius: "50%",
                    border: `2px solid ${s.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`bi ${s.icon}`} style={{ color: s.color }} />
                </div>
                <div>
                  <h6
                    className="hww-step-title"
                    style={{
                      color: s.color,
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      margin: "0 0 4px",
                    }}
                  >
                    {s.title}.
                  </h6>
                  <p
                    className="hww-step-desc"
                    style={{
                      color: "rgb(85, 85, 85)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div
                  className="hww-connector"
                  style={{
                    alignItems: "center",
                    flex: "0 1 60px",
                    minWidth: 30,
                  }}
                >
                  <div style={{ flex: 1, borderTop: "2px dotted #d0d7e2" }} />
                  <i
                    className="bi bi-chevron-right"
                    style={{ color: "#c3ccd9", fontSize: 14, margin: "0 4px" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
