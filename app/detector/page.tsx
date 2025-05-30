'use client'

export default function DetectorPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Alero Conflict Detector
      </h1>
      <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
        Launch our aerospace-grade AI tool to analyze potential airspace conflicts. Designed for performance and clarity.
      </p>
      <a
        href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Launch Conflict Detector
      </a>
    </div>
  )
}
