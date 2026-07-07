import DashboardCard from "../dashboard/DashboardCard";
import ProgressTimeline from "../dashboard/ProgressTimeline";

function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Dashboard Preview
          </p>

          <h2 className="text-4xl font-bold text-white">
            Track every complaint in real time
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Stay updated from submission to resolution with complete
            transparency.
          </p>
        </div>

        {/* Cards + Timeline */}
        <div className="grid gap-8 lg:grid-cols-2">

          <DashboardCard
            title="Pothole on Tonk Road"
            complaintId="CC-1042"
            authority="Jaipur Municipal Corporation"
            eta="2 Days"
            status="Progress"
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Progress Timeline
            </h3>

            <ProgressTimeline />
          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;