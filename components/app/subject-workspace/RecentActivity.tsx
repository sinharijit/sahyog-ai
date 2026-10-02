import {
  FileText,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";

const activities = [
  {
    title: "Uploaded Process Scheduling Notes",
    description: "Document added to Operating Systems",
    time: "2 hours ago",
    icon: FileText,
  },
  {
    title: "Asked about Round Robin Scheduling",
    description: "AI conversation",
    time: "Yesterday",
    icon: MessageSquare,
  },
  {
    title: "Completed CPU Scheduling Mock Test",
    description: "Score: 82%",
    time: "2 days ago",
    icon: ClipboardCheck,
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div>
        <h2 className="text-lg font-semibold text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Your latest learning activity in this subject.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-indigo-400">
                <Icon size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  {activity.title}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-xs text-zinc-600">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}