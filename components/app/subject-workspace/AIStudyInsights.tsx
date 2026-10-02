import {
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";

const insights = [
  {
    title: "Strong Area",
    description:
      "Your recent conversations and mock test results indicate a good understanding of CPU Scheduling.",
    icon: CheckCircle2,
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Needs Attention",
    description:
      "Memory Management appears to need more revision based on your recent questions and learning activity.",
    icon: AlertTriangle,
    iconClass: "text-amber-400",
    bgClass: "bg-amber-500/10",
  },
  {
    title: "Recommended Next Step",
    description:
      "Focus on Deadlocks and Synchronization to strengthen your overall understanding of Operating Systems.",
    icon: Lightbulb,
    iconClass: "text-indigo-400",
    bgClass: "bg-indigo-500/10",
  },
];

export default function AIStudyInsights() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
          <BrainCircuit size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            AI Study Insights
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Personalized insights generated from your learning activity.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon;

          return (
            <div
              key={insight.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
            >
              <div className="flex gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${insight.bgClass} ${insight.iconClass}`}
                >
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">
                    {insight.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}