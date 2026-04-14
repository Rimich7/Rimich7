const contacts = [
  {
    icon: "📧",
    label: "Email",
    value: "fustroman23@mail.ru",
    href: "mailto:fustroman23@mail.ru",
    color: "#f87171",
    bg: "rgba(248,113,113,0.08)",
    border: "rgba(248,113,113,0.2)",
    desc: "Write me anytime",
  },
  {
    icon: "✈️",
    label: "Telegram",
    value: "@Rimich23",
    href: "https://t.me/Rimich23",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    desc: "Fastest response",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+7 (918) 009-46-49",
    href: "tel:+79180094649",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    desc: "Call or WhatsApp",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "#0f172a",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 99,
              padding: "6px 18px",
              color: "#818cf8",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Contact
          </div>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: "0 0 16px",
              letterSpacing: -1,
            }}
          >
            Get In Touch 👋
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to discuss an opportunity? I'm open to freelance
            work, collaboration and full-time positions. Let's talk!
          </p>
        </div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            marginBottom: 60,
          }}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${c.border}`,
                borderRadius: 20,
                padding: "32px 24px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 10,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = c.bg;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${c.border}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                }}
              >
                {c.icon}
              </div>
              <span
                style={{
                  color: "#94a3b8",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {c.label}
              </span>
              <span style={{ color: c.color, fontWeight: 700, fontSize: 16 }}>
                {c.value}
              </span>
              <span style={{ color: "#475569", fontSize: 13 }}>{c.desc}</span>
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 24,
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🤝</div>
          <h3
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 800,
              margin: "0 0 12px",
            }}
          >
            Ready to work together?
          </h3>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 15,
              lineHeight: 1.7,
              margin: "0 auto 28px",
              maxWidth: 440,
            }}
          >
            I'm currently available for freelance projects and open to full-time positions.
            Let's build something amazing together!
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:fustroman23@mail.ru"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 99,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 8px 25px rgba(99,102,241,0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(99,102,241,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(99,102,241,0.35)";
              }}
            >
              📧 Send Email
            </a>
            <a
              href="https://t.me/Rimich23"
              style={{
                background: "rgba(56,189,248,0.1)",
                color: "#38bdf8",
                padding: "14px 32px",
                borderRadius: 99,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                border: "2px solid rgba(56,189,248,0.3)",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              ✈️ Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
