const skills = [
  {
    icon: "⚛️",
    name: "React",
    desc: "Building fast, interactive UIs with React, hooks, context, and modern state management.",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.08)",
    border: "rgba(97,218,251,0.2)",
  },
  {
    icon: "⚙️",
    name: "C++",
    desc: "Systems programming, algorithms, data structures, OOP patterns and performance-critical code.",
    color: "#00599C",
    bg: "rgba(0,89,156,0.08)",
    border: "rgba(0,89,156,0.25)",
  },
  {
    icon: "🐍",
    name: "Python",
    desc: "Backend APIs with FastAPI/Flask, automation scripts, data processing and ML experiments.",
    color: "#FFE76A",
    bg: "rgba(255,231,106,0.08)",
    border: "rgba(255,231,106,0.2)",
  },
  {
    icon: "🌐",
    name: "HTML / CSS",
    desc: "Semantic markup, responsive layouts, Flexbox, Grid, animations and accessibility.",
    color: "#E44D26",
    bg: "rgba(228,77,38,0.08)",
    border: "rgba(228,77,38,0.2)",
  },
  {
    icon: "📦",
    name: "TypeScript",
    desc: "Type-safe JavaScript development for robust and maintainable frontend/backend applications.",
    color: "#3178C6",
    bg: "rgba(49,120,198,0.08)",
    border: "rgba(49,120,198,0.2)",
  },
  {
    icon: "🗄️",
    name: "SQL / PostgreSQL",
    desc: "Relational databases design, queries, indexing, migrations and optimization.",
    color: "#336791",
    bg: "rgba(51,103,145,0.08)",
    border: "rgba(51,103,145,0.2)",
  },
  {
    icon: "🐋",
    name: "Docker",
    desc: "Containerized development environments, multi-service docker-compose setups.",
    color: "#2496ED",
    bg: "rgba(36,150,237,0.08)",
    border: "rgba(36,150,237,0.2)",
  },
  {
    icon: "🔧",
    name: "Git / GitHub",
    desc: "Version control, branching strategies, code review workflows and CI/CD pipelines.",
    color: "#F05032",
    bg: "rgba(240,80,50,0.08)",
    border: "rgba(240,80,50,0.2)",
  },
  {
    icon: "🚀",
    name: "Node.js",
    desc: "Server-side JavaScript, RESTful APIs, Express.js framework and real-time applications.",
    color: "#68A063",
    bg: "rgba(104,160,99,0.08)",
    border: "rgba(104,160,99,0.2)",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        background: "#0f172a",
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
            What I Do
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
            Skills & Technologies
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            Passionate Fullstack Developer exploring every layer of the tech stack 🔥
          </p>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${skill.border}`,
        borderRadius: 16,
        padding: "24px",
        transition: "all 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = skill.bg;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${skill.border}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: skill.bg,
            border: `1px solid ${skill.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            flexShrink: 0,
          }}
        >
          {skill.icon}
        </div>
        <span style={{ color: skill.color, fontWeight: 700, fontSize: 18 }}>
          {skill.name}
        </span>
      </div>
      <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
        {skill.desc}
      </p>
    </div>
  );
}
