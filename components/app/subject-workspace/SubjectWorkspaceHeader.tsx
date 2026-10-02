import { ArrowLeft, BookOpen, MoreHorizontal } from "lucide-react";
import Link from "next/link";

type SubjectWorkspaceHeaderProps = {
  subjectName: string;
};

export default function SubjectWorkspaceHeader({
  subjectName,
}: SubjectWorkspaceHeaderProps) {
  return (
    <div>
      <Link
        href="/subjects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Subjects
      </Link>

      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            <BookOpen size={26} />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-white sm:text-3xl">
                {subjectName}
              </h1>

              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                Active
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Your dedicated AI-powered learning workspace. Organize knowledge,
              study materials, conversations and learning progress in one place.
            </p>
          </div>
        </div>

        <button
          className="self-start rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white"
          aria-label="Subject options"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}