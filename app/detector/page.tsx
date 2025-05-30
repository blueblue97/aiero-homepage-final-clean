'use client'

export default function DetectorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-400">Conflict Detector</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Launch our aerospace-grade Conflict Detector tool in a new tab.
      </p>
      <a
        href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
      >
        Open Conflict Detector
      </a>
    </div>
  )
}
