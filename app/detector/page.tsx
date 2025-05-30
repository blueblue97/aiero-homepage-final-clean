export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://www.lockheedmartin.com/content/dam/lockheed-martin/video/MFC/aircraft.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Navbar */}
      <nav className="z-10 relative flex justify-between items-center px-8 py-6 text-white text-lg font-medium">
        <div className="text-2xl font-extrabold tracking-wide">AIERO</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="/detector" className="hover:text-blue-400">Conflict Detector</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="z-10 relative flex flex-col items-center justify-center text-center h-full text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Aerospace-Grade AI Tooling
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl mb-8 drop-shadow-lg">
          Precision tools for tomorrow's aerospace and defense challenges.
        </p>
        <a
          href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold text-lg transition shadow-md"
        >
          Launch Conflict Detector
        </a>
      </div>
    </div>
  );
}
