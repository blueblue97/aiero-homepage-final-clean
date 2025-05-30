export default function Home() {
  return (
    <main>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #00192f;
          color: white;
          text-align: center;
          padding: 2rem;
        }
        h1 {
          font-size: 48px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 20px;
          margin-bottom: 2rem;
        }
        iframe {
          width: 100%;
          height: 750px;
          border: none;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
        }
      `}</style>

      <h1>AIero</h1>
      <p>
        Aerospace &amp; Defense Intelligence — Conflict Detection powered by AI.
      </p>
      <iframe
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        title="AIero Conflict Detector"
        allow="clipboard-write"
      ></iframe>
    </main>
  );
}
