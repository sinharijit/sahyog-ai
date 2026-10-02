"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BookOpen,
  BrainCircuit,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Subjects",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    name: "AI Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Knowledge",
    href: "/knowledge",
    icon: BrainCircuit,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950">
      {/* Logo */}

      <div className="flex h-16 items-center gap-2 border-b border-zinc-800 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-bold text-white">
          S
        </div>

        <span className="font-semibold tracking-tight text-white">
          Sahyog AI
        </span>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-medium tracking-wider text-zinc-500">
          MAIN
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-indigo-500/10 font-medium text-indigo-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon size={18} />

                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom Navigation */}

      <div className="border-t border-zinc-800 p-4">
        <Link
          href="/settings"
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
            pathname === "/settings"
              ? "bg-indigo-500/10 font-medium text-indigo-400"
              : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
          }`}
        >
          <Settings size={18} />
          Settings
        </Link>
      </div>
    </aside>
  );
}