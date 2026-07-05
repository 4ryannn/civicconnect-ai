import {
  Camera,
  Bot,
  MapPinned,
  Activity,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Upload Photo",
    description: "Capture any civic issue instantly using your phone.",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "AI Detection",
    description: "AI automatically identifies and categorizes the issue.",
    color: "text-violet-400",
  },
  {
    icon: MapPinned,
    title: "GPS Tracking",
    description: "Location is captured automatically for faster response.",
    color: "text-green-400",
  },
  {
    icon: Activity,
    title: "Live Status",
    description: "Track complaint progress in real-time until resolved.",
    color: "text-orange-400",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security.",
    color: "text-sky-400",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
  <h2 className="text-4xl font-bold text-white md:text-5xl">
    Everything you need to make
    <span className="text-cyan-400"> your city better</span>
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
    AI-powered reporting, smart tracking, and secure complaint
    management—all in one powerful platform.
  </p>
</div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
  {features.map((feature, index) => {
    const Icon = feature.icon;

    return (
      <div
        key={index}
        className="group rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-800"
      >
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl hover:shadow-cyan-500/10 hover:shadow-2xl ${feature.color}`}
        >
          <Icon size={34} />
        </div>

        <h3 className="mb-3 text-xl font-bold text-white">
          {feature.title}
        </h3>

        <p className="leading-7 text-slate-400">
          {feature.description}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}

export default Features;