const projects = [
  {
    emoji: "🤖",
    name: "Telegram Bot Platform",
    desc: "A feature-rich Telegram bot built with Python and aiogram framework. Supports commands, inline keyboards, webhooks and PostgreSQL for storing user data.",
    tech: ["Python", "aiogram", "PostgreSQL", "Docker"],
    color: "#3776AB",
    bg: "rgba(55,118,171,0.08)",
    border: "rgba(55,118,171,0.2)",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    emoji: "🌐",
    name: "React Dashboard App",
    desc: "Modern admin dashboard SPA with React, TypeScript and Tailwind CSS. Features charts, data tables, authentication and REST API integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.08)",
    border: "rgba(97,218,251,0.2)",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    emoji: "⚡",
    name: "FastAPI Backend Service",
    desc: "High-performance REST API service built with Python FastAPI. Includes JWT authentication, PostgreSQL ORM, Alembic migrations and Docker deployment.",
    tech: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
    color: "#009688",
    bg: "rgba(0,150,136,0.08)",
    border: "rgba(0,150,136,0.2)",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    emoji: "⚙️",
    name: "C++ Data Structures Library",
    desc: "Custom implementation of core data structures in C++: linked lists, binary trees, hash tables, graphs and sorting algorithms with benchmarks.",
    tech: ["C++", "STL", "CMake", "Google Test"],
    color: "#00599C",
    bg: "rgba(0,89,156,0.08)",
    border: "rgba(0,89,156,0.25)",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    emoji: "🕹️",
    name: "Web Game with React",
    desc: "Browser-based logic game built with React and TypeScript. Features game state management, animations, leaderboard and local storage persistence.",
    tech: ["React", "TypeScript", "CSS Animations"],
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    emoji: "📊",
    name: "Python Data Scraper",
    desc: "Web scraping tool that collects and parses data from multiple sources, saves to CSV/JSON, and generates visual reports with matplotlib.",
    tech: ["Python", "BeautifulSoup", "pandas", "matplotlib"],
    color: "#FFE76A",
    bg: "rgba(255,231,106,0.08)",
    border: "rgba(255,231,106,0.2)",
    links: [{ label: "GitHub", href: "#" }],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #0d1117 0%, #0f172a 100%)",
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
            Portfolio
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
            My Projects
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            Projects I've built with React, C++ and Python — from apps to tools and libraries
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: typeof projects[0] }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${p.border}`,
        borderRadius: 20,
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = p.bg;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 48px ${p.border}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          background: p.bg,
          border: `1px solid ${p.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        {p.emoji}
      </div>

      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: "0 0 10px" }}>
        {p.name}
      </h3>
      <p
        style={{
          color: "#94a3b8",
          fontSize: 14,
          lineHeight: 1.65,
          margin: "0 0 20px",
          flex: 1,
        }}
      >
        {p.desc}
      </p>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {p.tech.map((t) => (
          <span
            key={t}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: p.color,
              borderRadius: 6,
              padding: "3px 10px",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 10 }}>
        {p.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              color: p.color,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "6px 14px",
              border: `1px solid ${p.border}`,
              borderRadius: 8,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = p.bg;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            📂 {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
