// app/page.tsx

import React from "react";

export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0a192f",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "16px" }}>
        Alero
      </h1>
      <p style={{
        fontSize: "20px",
        marginBottom: "32px",
        textAlign: "center",
        maxWidth: "700px"
      }}>
        Aerospace &nbsp;
        <span style={{ color: "#ff8c00" }}>Defense Intelligence</span>
        &nbsp;—&nbsp;
        <span style={{ color: "#ffd700" }}>Conflict Detection</span> powered by&nbsp;
        <span style={{ color: "#00ffff" }}>AI</span>.
      </p>

      {/* EMBED STREAMLIT TOOL */}
      <iframe
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        title="Aiero Conflict Detector"
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "700px",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 0 24px rgba(0,0,0,0.4)"
        }}
        allow="clipboard-write"
      ></iframe>
    </main>
  );
}
