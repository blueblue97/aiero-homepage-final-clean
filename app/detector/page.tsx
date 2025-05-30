'use client'

import { Button } from "@/components/ui/button"

export default function DetectorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Conflict Detector</h1>
      <p className="mb-4 text-gray-700 text-center">
        Launch the AIero Conflict Detector tool in a new tab.
      </p>
      <a
        href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Open Detector</Button>
      </a>
    </div>
  )
}
