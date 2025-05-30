'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Welcome to <span className="text-blue-400">Aiero</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Your gateway to aerospace-grade AI tooling.
        </p>

        <a
          href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Launch Conflict Detector
        </a>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg
          className="absolute opacity-5 top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 16L12 2l10 14-10-4-10 4z" />
        </svg>
      </div>
    </div>
  )
}
