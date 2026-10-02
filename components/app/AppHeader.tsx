"use client";

import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/documents": "Documents",
  "/chat": "AI Chat",
  "/knowledge": "Knowledge",
  "/settings": "Settings",
};

export default function AppHeader() {
  const pathname = usePathname();

  const title = pageTitles[pathname] ?? "Sahyog AI";

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-[#09090b] px-8">
      <h1 className="text-lg font-semibold text-white">
        {title}
      </h1>

      <div className="flex items-center gap-4">
        <button
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
          aria-label="Search"
        >
          <Search size={20} />
        </button>

        <button
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-sm font-medium text-white">
          A
        </div>
      </div>
    </header>
  );
}