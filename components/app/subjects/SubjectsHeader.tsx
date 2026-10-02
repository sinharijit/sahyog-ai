import { BookOpen, Plus } from "lucide-react";

export default function SubjectsHeader() {
  return (
    <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 pb-6 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
          <BookOpen size={22} />
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-white">
            Subjects
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Organize your learning into dedicated AI-powered workspaces.
          </p>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400">
        <Plus size={18} />
        New Subject
      </button>
    </div>
  );
}