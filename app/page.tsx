// Updated Aiero homepage with embedded Streamlit Conflict Detector and fallback message

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a192f',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Alero</h1>

      <p style={{ fontSize: '1.25rem', maxWidth: '42rem', textAlign: 'center', marginBottom: '2rem' }}>
        Aerospace &nbsp;
        <span style={{ color: 'orange' }}>Defense Intelligence</span> &mdash;
        <span style={{ color: 'gold' }}> Conflict Detection</span> powered by <span style={{ color: 'skyblue' }}>AI</span>.
      </p>

      <iframe
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        title="Aiero Conflict Detector"
        style={{
          width: '100%',
          maxWidth: '1080px',
          height: '750px',
          border: '1px solid #ccc',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          backgroundColor: 'white'
        }}
      >
        Your browser does not support iframes.
      </iframe>
    </main>
  );
}
