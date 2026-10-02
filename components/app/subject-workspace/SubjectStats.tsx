import {
  BookOpenCheck,
  FileText,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    name: "Documents",
    value: "12",
    description: "Study materials added",
    icon: FileText,
  },
  {
    name: "AI Conversations",
    value: "24",
    description: "Learning discussions",
    icon: MessageSquare,
  },
  {
    name: "Study Notes",
    value: "8",
    description: "AI-organized notes",
    icon: BookOpenCheck,
  },
  {
    name: "Learning Progress",
    value: "72%",
    description: "Based on your activity",
    icon: TrendingUp,
  },
];

export default function SubjectStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.name}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-500">
                {stat.name}
              </p>

              <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
                <Icon size={18} />
              </div>
            </div>

            <p className="mt-4 text-2xl font-semibold text-white">
              {stat.value}
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}