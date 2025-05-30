'use client'

import React from 'react'

export default function DetectorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">AIero Conflict Detector</h1>
      <p className="mb-6 text-center max-w-xl text-gray-300">
        Launch our aerospace-grade AI tool to analyze potential airspace conflicts. Designed for performance and clarity.
      </p>
      <a
        href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Launch Conflict Detector
      </a>
    </div>
  )
}
