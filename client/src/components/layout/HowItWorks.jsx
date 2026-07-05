import {
  Camera,
  Bot,
  MapPinned,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Photo",
    desc: "Capture a pothole, garbage, or any civic issue.",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "AI Analysis",
    desc: "AI detects and classifies the issue automatically.",
    color: "text-violet-400",
  },
  {
    icon: MapPinned,
    title: "Location Added",
    desc: "GPS automatically attaches the exact location.",
    color: "text-green-400",
  },
  {
    icon: Send,
    title: "Complaint Sent",
    desc: "Complaint is forwarded to the concerned authority.",
    color: "text-orange-400",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20 text-center">
  <h2 className="text-4xl font-bold text-white md:text-5xl">
    How It
    <span className="text-cyan-400"> Works</span>
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
    Report any civic issue in under 30 seconds using our AI-powered complaint system.
  </p>
</div>

        {/* Timeline */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {steps.map((step, index) => {
    const Icon = step.icon;

    return (
      <div
        key={index}
        className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-800 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">
          <Icon size={38} className={step.color} />
        </div>

        <div className="absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
          {index + 1}
        </div>

        <h3 className="mb-3 text-xl font-bold text-white">
          {step.title}
        </h3>

        <p className="leading-7 text-slate-400">
          {step.desc}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}

export default HowItWorks;