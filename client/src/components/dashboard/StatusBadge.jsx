function StatusBadge({ status }) {
  const colors = {
    Submitted: "bg-cyan-500/20 text-cyan-300",
    Assigned: "bg-yellow-500/20 text-yellow-300",
    Progress: "bg-orange-500/20 text-orange-300",
    Resolved: "bg-green-500/20 text-green-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[status] || "bg-slate-700 text-slate-300"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;