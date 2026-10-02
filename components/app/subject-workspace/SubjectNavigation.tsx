import {
  BarChart3,
  FileText,
  LayoutDashboard,
  MessageSquare,
  NotebookPen,
  ClipboardCheck,
} from "lucide-react";

const navigationItems = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "AI Chat",
    icon: MessageSquare,
    active: false,
  },
  {
    name: "Documents",
    icon: FileText,
    active: false,
  },
  {
    name: "Study Notes",
    icon: NotebookPen,
    active: false,
  },
  {
    name: "Mock Tests",
    icon: ClipboardCheck,
    active: false,
  },
  {
    name: "Performance",
    icon: BarChart3,
    active: false,
  },
];

export default function SubjectNavigation() {
  return (
    <div className="border-b border-zinc-800">
      <div className="flex gap-1 overflow-x-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm transition-colors ${
                item.active
                  ? "border-indigo-400 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon size={16} />

              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}