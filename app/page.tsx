export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem' }}>Welcome to Alero</h1>
      <p>Your gateway to aerospace-grade AI tooling.</p>

      <iframe
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '12px',
          marginTop: '2rem',
        }}
        title="Conflict Detector"
      />
    </main>
  );
}
