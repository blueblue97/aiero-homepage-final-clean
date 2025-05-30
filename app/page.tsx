'use client';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-center">Welcome to <span className="text-blue-500">Alero</span></h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Your gateway to <span className="text-blue-400 font-semibold">aerospace-grade AI tooling</span>.
      </p>

      <a
        href="/detector"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-medium shadow-md"
      >
        Launch Conflict Detector
      </a>
    </main>
  );
}
