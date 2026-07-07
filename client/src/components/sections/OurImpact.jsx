import StatCard from "../stats/StatCard";

const stats = [
  {
    number: "12,500+",
    title: "Complaints Submitted",
    color: "text-cyan-400",
  },
  {
    number: "98%",
    title: "AI Detection Accuracy",
    color: "text-violet-400",
  },
  {
    number: "8,900+",
    title: "Resolved Issues",
    color: "text-green-400",
  },
  {
    number: "24 hrs",
    title: "Average Response Time",
    color: "text-orange-400",
  },
];

function OurImpact() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
  <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
    Our Impact
  </p>

  <h2 className="text-4xl font-bold text-white md:text-5xl">
    Building smarter cities with AI
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
    CivicConnect AI helps citizens report issues faster while giving authorities
    the tools to resolve them efficiently.
  </p>
</div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {stats.map((stat, index) => (
    <StatCard
      key={index}
      number={stat.number}
      title={stat.title}
      color={stat.color}
    />
  ))}
</div>

      </div>
    </section>
  );
}

export default OurImpact;