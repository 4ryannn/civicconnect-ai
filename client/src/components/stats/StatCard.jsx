function StatCard({ number, title, color }) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-800 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10">

      <h3 className={`mb-3 text-5xl font-extrabold ${color}`}>
        {number}
      </h3>

      <p className="text-lg font-medium text-slate-300">
        {title}
      </p>

    </div>
  );
}

export default StatCard;