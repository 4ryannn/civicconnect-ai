import pothole from "../../assets/pothole.jpg";

import {
  Zap,
  MapPin,
  Activity,
  ShieldCheck,
  Camera,
  Bot,
  CheckCircle,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 pt-8">

       <div className="w-1/2 space-y-8">

    {/* AI Badge */}
    <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
        <span className="text-sm font-semibold text-cyan-400">
            ✨ AI Powered
        </span>
    </div>

    {/* Heading */}
    <div>
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-cyan-400">
                AI-Powered
            </span>

            <br />

           <span className="text-white">
    Civic Complaint
    <br />
    Platform
</span>
        </h1>
    </div>

    {/* Description */}
    <p className="max-w-xl text-lg text-slate-300">
        Report potholes, garbage, waterlogging,
        broken street lights and other civic
        issues in less than 30 seconds using
        AI-powered detection.
    </p>

    <div className="flex gap-4">

    <button className="rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
        📷 Report Complaint
    </button>

    <button className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
        ▶ Watch Demo
    </button>

</div>

<div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-300">

  <span className="flex items-center gap-2">
    <Zap size={18} className="text-cyan-400" />
    AI Detection
  </span>

  <span className="flex items-center gap-2">
    <MapPin size={18} className="text-cyan-400" />
    GPS Tracking
  </span>

  <span className="flex items-center gap-2">
    <Activity size={18} className="text-cyan-400" />
    Live Status
  </span>

  <span className="flex items-center gap-2">
    <ShieldCheck size={18} className="text-cyan-400" />
    Secure
  </span>

</div>

</div>

       {/* Right Side */}
<div className="hidden lg:flex w-1/2 justify-center items-center relative">

  <div className="relative animate-float rotate-[6deg]">

    {/* Blue Glow */}
    <div className="absolute inset-0 scale-125 rounded-full bg-cyan-400/25 blur-[90px]"></div>

    {/* Phone */}
    <div className="relative w-[335px] h-[670px] rounded-[45px] border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">

      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 rounded-full bg-black"></div>

      {/* Screen */}
      <div className="pt-16 px-5 space-y-4">

       <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

  <div>
    <h3 className="font-semibold text-white">
      Upload Photo
    </h3>

    <p className="text-sm text-slate-400">
      Photo detected
    </p>
  </div>

  <div className="h-14 w-20 overflow-hidden rounded-xl">
  <img
    src={pothole}
    alt="Pothole"
    className="h-full w-full object-cover"
  />
</div>
    

</div>

       <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

  <div>
    <h3 className="font-semibold text-white">
      AI Analysis
    </h3>

    <p className="text-sm text-slate-400">
      Road Damage • 98%
    </p>
  </div>

  <div className="rounded-xl bg-violet-500/25 p-3">
    <Bot className="h-6 w-6 text-violet-300" />
  </div>

</div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

  <div>
    <h3 className="font-semibold text-white">
      Location
    </h3>

    <p className="text-sm text-slate-400">
      Jaipur, Rajasthan
    </p>
  </div>

  <div className="rounded-xl bg-green-500/25 p-3">
    <MapPin className="h-6 w-6 text-green-300" />
  </div>

</div>

       <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

  <div>
    <h3 className="font-semibold text-white">
      Submitted
    </h3>

    <p className="text-sm text-slate-400">
      Complaint #CC1421
    </p>
  </div>

  <div className="rounded-xl bg-emerald-500/25 p-3">
    <CheckCircle className="h-6 w-6 text-emerald-300" />
  </div>

</div>

      </div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}

export default Hero;