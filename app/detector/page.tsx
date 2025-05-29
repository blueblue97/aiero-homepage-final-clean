'use client'

export default function DetectorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Conflict Detector</h1>
      <iframe
        src="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        width="100%"
        height="800"
        className="border-2 border-gray-300 rounded-lg shadow-lg"
      ></iframe>
    </div>
  )
}
