import { useEffect, useRef, useState } from "react";

const stacks = [
  { name: "React / Frontend", pct: 88, color: "#61DAFB", icon: "⚛️" },
  { name: "C++ / Systems", pct: 75, color: "#00599C", icon: "⚙️" },
  { name: "Python / Backend", pct: 80, color: "#FFE76A", icon: "🐍" },
  { name: "Databases (SQL/NoSQL)", pct: 65, color: "#10b981", icon: "🗄️" },
  { name: "DevOps / Tools", pct: 55, color: "#f59e0b", icon: "🔧" },
];

const techIcons = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "C++", icon: "⚙️", color: "#00599C" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "TypeScript", icon: "📘", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#68A063" },
  { name: "PostgreSQL", icon: "🗄️", color: "#336791" },
  { name: "Docker", icon: "🐋", color: "#2496ED" },
  { name: "Git", icon: "🔀", color: "#F05032" },
  { name: "FastAPI", icon: "⚡", color: "#009688" },
  { name: "Vite", icon: "⚡", color: "#646CFF" },
  { name: "Linux", icon: "🐧", color: "#FCC624" },
  { name: "REST API", icon: "🌐", color: "#FF6B6B" },
];

function Bar({ stack, animate }: { stack: typeof stacks[0]; animate: boolean }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>{stack.icon}</span>
          <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 15 }}>
            {stack.name}
          </span>
        </div>
        <span style={{ color: stack.color, fontWeight: 700, fontSize: 15 }}>
          {stack.pct}%
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${stack.pct}%` : "0%",
            background: `linear-gradient(90deg, ${stack.color}88, ${stack.color})`,
            borderRadius: 99,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: `0 0 12px ${stack.color}55`,
          }}
        />
      </div>
    </div>
  );
}

export default function TechStack() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="techstack"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #0f172a 0%, #0d1117 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            Proficiency
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
            Tech Stack & Proficiency
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>
            My current level across different technology domains
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Progress bars */}
          <div ref={ref}>
            {stacks.map((s) => (
              <Bar key={s.name} stack={s} animate={animate} />
            ))}
          </div>

          {/* Tech icons cloud */}
          <div>
            <h3
              style={{
                color: "#94a3b8",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Tools & Technologies
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    padding: "8px 14px",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = tech.color + "55";
                    (e.currentTarget as HTMLElement).style.background = tech.color + "11";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: 18 }}>{tech.icon}</span>
                  <span style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 500 }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
