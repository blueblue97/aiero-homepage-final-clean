export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6">AIero</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Aerospace & Defense Intelligence — Conflict Detection powered by AI.
      </p>

      <iframe
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        title="AIero Conflict Detector"
        className="w-full max-w-5xl h-[750px] border rounded-xl shadow-xl"
        allow="clipboard-write"
      ></iframe>
    </main>
  );
}
