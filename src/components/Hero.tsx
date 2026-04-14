import { useEffect, useState } from "react";

const roles = [
  "Fullstack Developer 🚀",
  "React Developer ⚛️",
  "C++ Engineer ⚙️",
  "Python Developer 🐍",
  "Backend Developer 🛠️",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [typing, charIndex, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 99,
              padding: "6px 16px",
              marginBottom: 20,
              color: "#a5b4fc",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            👋 Available for hire
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 16px",
              letterSpacing: -1,
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Roman
            </span>
            <br />
            Kolchugin
          </h1>

          <div
            style={{
              color: "#94a3b8",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              minHeight: 36,
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "#818cf8", fontWeight: 600 }}>{displayed}</span>
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1.2em",
                background: "#818cf8",
                animation: "blink 1s step-end infinite",
                verticalAlign: "middle",
                marginLeft: 2,
              }}
            />
          </div>

          <p
            style={{
              color: "#94a3b8",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 520,
            }}
          >
            Passionate Fullstack Developer, 20 years old, building modern web apps with{" "}
            <span style={{ color: "#a5b4fc" }}>React</span>,{" "}
            <span style={{ color: "#a5b4fc" }}>Python</span> and{" "}
            <span style={{ color: "#a5b4fc" }}>C++</span>. Turning ideas into clean,
            efficient and scalable solutions. 🚀
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
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
              Contact Me 📬
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "transparent",
                color: "#a5b4fc",
                padding: "14px 32px",
                borderRadius: 99,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                border: "2px solid rgba(99,102,241,0.4)",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              See Projects 💼
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
            {[
              { icon: "📧", label: "Email", href: "mailto:fustroman23@mail.ru" },
              { icon: "✈️", label: "Telegram", href: "https://t.me/Rimich23" },
              { icon: "📞", label: "Phone", href: "tel:+79180094649" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.2)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 280,
              height: 280,
            }}
          >
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                animation: "spin 6s linear infinite",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background: "#0f172a",
                zIndex: 1,
              }}
            />
            <img
              src="/images/avatar.png"
              alt="Roman Kolchugin"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                position: "relative",
                zIndex: 2,
                border: "4px solid #0f172a",
              }}
            />

            {/* Badges */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: -10,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                borderRadius: 12,
                padding: "8px 14px",
                fontSize: 12,
                fontWeight: 700,
                zIndex: 3,
                boxShadow: "0 8px 20px rgba(99,102,241,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              20 y.o. 🎂
            </div>
            <div
              style={{
                position: "absolute",
                top: 10,
                left: -15,
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(99,102,241,0.4)",
                color: "#a5b4fc",
                borderRadius: 12,
                padding: "8px 14px",
                fontSize: 12,
                fontWeight: 700,
                zIndex: 3,
                whiteSpace: "nowrap",
              }}
            >
              ⚡ Fullstack Dev
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#475569",
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #475569, transparent)",
            animation: "scrollPulse 1.5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
