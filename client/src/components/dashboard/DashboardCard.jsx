import StatusBadge from "./StatusBadge";

function DashboardCard({
  title,
  complaintId,
  authority,
  eta,
  status,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-cyan-400/40">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <StatusBadge status={status} />
      </div>

      <div className="space-y-3 text-slate-300">

        <div className="flex justify-between">
          <span>Complaint ID</span>
          <span className="font-medium text-white">
            {complaintId}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Authority</span>
          <span className="font-medium text-white">
            {authority}
          </span>
        </div>

        <div className="flex justify-between">
          <span>ETA</span>
          <span className="font-medium text-cyan-300">
            {eta}
          </span>
        </div>

      </div>
    </div>
  );
}

export default DashboardCard;