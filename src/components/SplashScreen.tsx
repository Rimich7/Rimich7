import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(0), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 9999,
        transition: "opacity 0.5s ease",
        opacity,
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Animated Logo */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 20,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 0 40px rgba(99,102,241,0.5)",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        >
          <span style={{ fontSize: 40 }}>💻</span>
        </div>
        <h1
          style={{
            color: "#fff",
            fontSize: 32,
            fontWeight: 800,
            margin: 0,
            letterSpacing: -1,
          }}
        >
          R.Kolchugin
        </h1>
        <p style={{ color: "#a5b4fc", marginTop: 8, fontSize: 16 }}>
          Fullstack Developer
        </p>
        {/* Loading bar */}
        <div
          style={{
            marginTop: 32,
            width: 200,
            height: 4,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 99,
            overflow: "hidden",
            margin: "32px auto 0",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              borderRadius: 99,
              animation: "loadBar 2s ease-in-out forwards",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
