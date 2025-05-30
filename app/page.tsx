import React from "react";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0a192f",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        Alero
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "24px",
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        Aerospace{" "}
        <span style={{ color: "#ff8c00" }}>Defense Intelligence</span> —{" "}
        <span style={{ color: "#ffd700" }}>Conflict Detection</span> powered by{" "}
        <span style={{ color: "#00ffff" }}>AI</span>.
      </p>

      <a
        href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          marginTop: "10px",
        }}
      >
        Launch Conflict Detector
      </a>
    </main>
  );
}
