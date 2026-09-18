import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    q: "What does InfoManage manage?",
    a: "InfoManage manages the full technology stack an organization depends on servers, networks, and endpoints; security and backups; cloud and productivity platforms like Microsoft 365 and Google Workspace; and business phone systems. We also plan and execute one-time projects such as office buildouts, so you have a single partner for both day-to-day operations and larger initiatives.",
  },
  {
    q: "Can InfoManage work with our existing IT team?",
    a: "Yes. Many clients keep an internal IT staff and bring us in to supplement it covering after-hours and 24/7 monitoring, specialized security work, or extra capacity during projects. We work alongside your team rather than replacing it, filling the gaps wherever they exist.",
  },
  {
    q: "Do you handle one-time IT projects and office buildouts?",
    a: "Absolutely. Beyond ongoing managed services, InfoManage plans and coordinates office buildouts and infrastructure projects end-to-end cabling, installation, configuration, and testing with clear communication throughout so every stakeholder knows the status and timeline.",
  },
  {
    q: "What makes InfoManage different from a traditional IT support company?",
    a: "Traditional IT support is reactive and billed by the hour when something breaks. InfoManage operates as a proactive partner on a structured, fixed-price-per-unit model monitoring, maintaining, and improving your environment continuously, so problems are prevented rather than billed for after the fact.",
  },
  {
    q: "Can you support both Microsoft 365 and Google Workspace?",
    a: "Yes, we're platform-agnostic when it comes to productivity and collaboration tools. We manage licensing, security configuration, and day-to-day support for both Microsoft 365 and Google Workspace, and can assist with migrating between the two if your organization needs it.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <span className="faq-question">{question}</span>
        <i className={`bi bi-plus-lg faq-toggle-icon${open ? " open" : ""}`} />
      </div>
      {open && <div className="faq-body">{answer}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}
          data-aos="fade-up"
        >
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-row" style={{ alignItems: "flex-start" }}>
          <div
            className="faq-list-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {faqData.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          <div
            className="faq-cta-card"
            style={{
              background: "var(--light-bg)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i
              className="bi bi-headset faq-cta-icon"
              style={{ color: "var(--accent)", flexShrink: 0 }}
            />
            <div>
              <p className="faq-cta-title" style={{ color: "var(--heading-color)" }}>
                Have more questions?
              </p>
              <p className="faq-cta-text" style={{ color: "#777" }}>
                Our team is here to help.
              </p>
              <Link to="/contact" className="btn-pricing faq-cta-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
