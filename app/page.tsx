export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      backgroundColor: "#0a192f", 
      color: "white", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "2rem" 
    }}>
      
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Alero
      </h1>
      
      <p style={{ fontSize: "1.25rem", textAlign: "center", marginBottom: "2rem" }}>
        Aerospace &amp; <span style={{ color: "#ffa500" }}>Defense Intelligence</span> — 
        <span style={{ color: "#ffd700" }}> Conflict Detection </span> powered by 
        <span style={{ color: "#00bfff" }}> AI</span>.
      </p>
      
      <iframe 
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/" 
        title="Conflict Detector Embedded"
        width="1000"
        height="700"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          backgroundColor: "white"
        }}
        allow="clipboard-write"
      ></iframe>
      
    </main>
  );
}
