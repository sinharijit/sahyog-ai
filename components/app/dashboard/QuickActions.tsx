import Link from "next/link";
import {
  FileUp,
  MessageSquare,
  Network,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Upload Document",
    description: "Add a new knowledge source",
    href: "/documents",
    icon: FileUp,
  },
  {
    title: "Ask Sahyog AI",
    description: "Chat with your knowledge base",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Explore Knowledge",
    description: "Discover connected information",
    href: "/knowledge",
    icon: Network,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 px-6 py-5">
        <h2 className="text-lg font-semibold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Jump back into your workspace
        </p>
      </div>

      <div className="space-y-2 p-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-zinc-800"
            >
              <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-400">
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  {action.title}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {action.description}
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-zinc-300"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}