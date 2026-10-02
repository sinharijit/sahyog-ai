import {
  FileText,
  GitBranch,
  Lightbulb,
} from "lucide-react";

const stats = [
  {
    title: "Concepts",
    value: "24",
    description: "Knowledge concepts identified",
    icon: Lightbulb,
  },
  {
    title: "Connections",
    value: "18",
    description: "Relationships discovered",
    icon: GitBranch,
  },
  {
    title: "Documents",
    value: "6",
    description: "Sources contributing knowledge",
    icon: FileText,
  },
];

export default function KnowledgeStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  {stat.title}
                </p>

                <p className="mt-2 text-3xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>

              <div className="rounded-lg bg-zinc-900 p-2 text-indigo-400">
                <Icon size={20} />
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-600">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}