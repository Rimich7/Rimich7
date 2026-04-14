const socials = [
  { icon: "📧", label: "Email", href: "mailto:fustroman23@mail.ru" },
  { icon: "✈️", label: "Telegram", href: "https://t.me/Rimich23" },
  { icon: "📞", label: "Phone", href: "tel:+79180094649" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#070d19",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "60px 24px 30px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                💻
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 20, letterSpacing: -0.5 }}>
                RK<span style={{ color: "#818cf8" }}>.</span>dev
              </span>
            </div>
            <p
              style={{
                color: "#475569",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 260,
                margin: 0,
              }}
            >
              Roman Kolchugin — Fullstack Developer building modern web applications with React,
              Python & C++. 🚀
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 16,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: 8 }}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#a5b4fc";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "#64748b";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 16,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Contacts
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "📧", value: "fustroman23@mail.ru", href: "mailto:fustroman23@mail.ru" },
                { icon: "✈️", value: "@Rimich23 (TG)", href: "https://t.me/Rimich23" },
                { icon: "📞", value: "+7 (918) 009-46-49", href: "tel:+79180094649" },
              ].map((c) => (
                <a
                  key={c.value}
                  href={c.href}
                  style={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#a5b4fc";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#64748b";
                  }}
                >
                  <span>{c.icon}</span>
                  {c.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>
            © 2025 Kol'chugin Roman. All rights reserved.
          </p>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>
            Built with <span style={{ color: "#6366f1" }}>⚛️ React</span> +{" "}
            <span style={{ color: "#818cf8" }}>TypeScript</span> +{" "}
            <span style={{ color: "#a78bfa" }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
