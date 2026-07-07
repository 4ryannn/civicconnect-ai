// import { GitHub, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">

  <div className="mb-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-800 py-12 px-10 text-center">

  <h2 className="text-3xl font-bold text-white">
    Ready to make your city smarter?
  </h2>

  <p className="mt-4 text-slate-400">
    Join CivicConnect AI and help create cleaner, safer and smarter communities.
  </p>

  <button className="mt-6 rounded-xl bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
    Report a Complaint
  </button>

</div>

  <div className="grid gap-12 md:grid-cols-3">

  {/* Brand */}

  <div>

    <h2 className="text-3xl font-bold text-white">
      CivicConnect
      <span className="text-cyan-400"> AI</span>
    </h2>

    <p className="mt-4 leading-7 text-slate-400">
      Making civic issue reporting smarter, faster and AI-powered.
      Empowering citizens and authorities with modern technology.
    </p>

  </div>

  {/* Quick Links */}

  <div>

    <h3 className="mb-5 text-lg font-semibold text-white">
      Quick Links
    </h3>

    <ul className="space-y-3 text-slate-400">

      <li className="transition hover:text-cyan-400">Home</li>

      <li className="transition hover:text-cyan-400">Features</li>

      <li className="transition hover:text-cyan-400">Dashboard</li>

      <li className="transition hover:text-cyan-400">FAQ</li>

    </ul>

  </div>

  {/* Resources */}

  <div>

    <h3 className="mb-5 text-lg font-semibold text-white">
      Resources
    </h3>

    <ul className="space-y-3 text-slate-400">

      <li className="transition hover:text-cyan-400">Privacy Policy</li>

      <li className="transition hover:text-cyan-400">Terms & Conditions</li>

      <li className="transition hover:text-cyan-400">Contact</li>

    </ul>

  </div>

</div>

  <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

  <p>© 2026 CivicConnect AI</p>

  <p className="mt-2">
    Built with ❤️ using React & Tailwind CSS
  </p>

</div>

</div>
    </footer>
  );
}

export default Footer;