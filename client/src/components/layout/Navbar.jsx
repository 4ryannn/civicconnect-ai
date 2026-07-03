import { MapPinned } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <MapPinned className="h-8 w-8 text-cyan-400" />

          <h1 className="text-2xl font-bold text-white">
            CivicConnect
            <span className="text-cyan-400"> AI</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">

          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            How It Works
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Dashboard
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            FAQ
          </a>

        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <button className="rounded-lg border border-slate-700 px-5 py-2 text-white transition hover:border-cyan-400">
            Login
          </button>

          <button className="rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;