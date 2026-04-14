const experiences = [
  {
    role: "Fullstack Developer",
    company: "Freelance / Pet Projects",
    period: "2023 — Present",
    icon: "🚀",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
    desc: "Developing full-stack web applications using React, Node.js, and Python. Building REST APIs, integrating third-party services, and deploying to cloud platforms.",
    bullets: [
      "Built and deployed multiple React SPA applications with TypeScript",
      "Created backend services with FastAPI and Express.js",
      "Developed automation scripts and data processing tools in Python",
      "Designed and optimized PostgreSQL database schemas",
    ],
  },
  {
    role: "C++ Developer",
    company: "University & Competitive Programming",
    period: "2022 — Present",
    icon: "⚙️",
    color: "#00599C",
    bg: "rgba(0,89,156,0.08)",
    border: "rgba(0,89,156,0.25)",
    desc: "Deep diving into algorithms, data structures and systems programming with C++. Participating in competitive programming contests and building performance-critical software.",
    bullets: [
      "Implemented complex data structures: trees, graphs, hash maps",
      "Solved 200+ algorithmic problems on competitive platforms",
      "Built console applications with OOP design patterns",
      "Studied memory management and low-level optimization",
    ],
  },
  {
    role: "Python Developer",
    company: "Personal Projects",
    period: "2022 — Present",
    icon: "🐍",
    color: "#3776AB",
    bg: "rgba(55,118,171,0.08)",
    border: "rgba(55,118,171,0.2)",
    desc: "Using Python for web scraping, automation, backend APIs and exploring machine learning fundamentals.",
    bullets: [
      "Built Telegram bots with aiogram framework",
      "Created web scrapers and data parsers",
      "Developed REST APIs with FastAPI and Flask",
      "Experimented with basic ML models using scikit-learn",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
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
            Work & Projects Experience
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>
            My journey through various domains of software development
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))",
            }}
          />

          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        marginBottom: 40,
        position: "relative",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          flexShrink: 0,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: exp.bg,
          border: `2px solid ${exp.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          zIndex: 1,
          position: "relative",
        }}
      >
        {exp.icon}
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${exp.border}`,
          borderRadius: 16,
          padding: "24px 28px",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = exp.bg;
          (e.currentTarget as HTMLElement).style.transform = "translateX(8px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
          (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>
              {exp.role}
            </h3>
            <p style={{ color: exp.color, fontWeight: 600, fontSize: 14, margin: "4px 0 0" }}>
              {exp.company}
            </p>
          </div>
          <span
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
              borderRadius: 99,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            📅 {exp.period}
          </span>
        </div>

        <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, margin: "12px 0" }}>
          {exp.desc}
        </p>

        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {exp.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                color: "#cbd5e1",
                fontSize: 13,
                lineHeight: 1.6,
                padding: "3px 0",
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <span style={{ color: exp.color, flexShrink: 0, marginTop: 1 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
