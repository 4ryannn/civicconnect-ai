function ProgressTimeline() {
  const steps = [
    {
      title: "Complaint Submitted",
      time: "Today • 09:45 AM",
      completed: true,
    },
    {
      title: "Assigned to Authority",
      time: "Today • 10:20 AM",
      completed: true,
    },
    {
      title: "Inspection Scheduled",
      time: "Tomorrow • 11:00 AM",
      completed: false,
    },
    {
      title: "Issue Resolved",
      time: "Pending",
      completed: false,
    },
  ];

  return (
    <div className="space-y-5">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">

          <div
            className={`mt-1 h-4 w-4 rounded-full ${
              step.completed
                ? "bg-cyan-400"
                : "border-2 border-slate-600"
            }`}
          ></div>

          <div>
            <h4 className="font-semibold text-white">
              {step.title}
            </h4>

            <p className="text-sm text-slate-400">
              {step.time}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProgressTimeline;