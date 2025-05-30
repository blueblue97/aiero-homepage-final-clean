'use client'

import React from 'react'

export default function DetectorPage() {
  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white flex flex-col items-center justify-center px-6">
      <header className="w-full py-6 text-center">
        <h1 className="text-5xl font-bold tracking-wide">AIERO</h1>
        <p className="mt-2 text-lg text-gray-300">Aerospace-Grade AI Tooling</p>
      </header>

      <main className="flex flex-col items-center justify-center">
        <p className="text-center text-gray-400 max-w-lg mb-8">
          Precision tools for tomorrow's aerospace and defense challenges.
        </p>
        <a
          href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Launch Conflict Detector
        </a>
      </main>

      <footer className="mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AIero Defense Systems
      </footer>
    </div>
  )
}
