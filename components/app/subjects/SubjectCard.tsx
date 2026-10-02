import { FileText, MessageSquare, MoreHorizontal } from "lucide-react";
import Link from "next/link";

type SubjectCardProps = {
  name: string;
  slug: string;
  description: string;
  documents: number;
  conversations: number;
  lastActive: string;
};

export default function SubjectCard({
  name,
  slug,
  description,
  documents,
  conversations,
  lastActive,
}: SubjectCardProps) {
  return (
    <Link
        href={`/subjects/${slug}`}
        className="group block rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-lg font-semibold text-indigo-400">
          {name.charAt(0)}
        </div>

        <button
          className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white"
          aria-label={`More options for ${name}`}
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-semibold text-white">
          {name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-5 border-t border-zinc-800 pt-4 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <FileText size={15} />
          <span>{documents} docs</span>
        </div>

        <div className="flex items-center gap-2">
          <MessageSquare size={15} />
          <span>{conversations} chats</span>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-600">
        Last active {lastActive}
      </p>
    </Link>
  );
}