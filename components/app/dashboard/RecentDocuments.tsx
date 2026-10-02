import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

const documents = [
  {
    name: "Machine Learning Notes.pdf",
    type: "PDF",
    added: "2 hours ago",
  },
  {
    name: "Database Systems Notes.pdf",
    type: "PDF",
    added: "Yesterday",
  },
  {
    name: "Research Paper.pdf",
    type: "PDF",
    added: "3 days ago",
  },
];

export default function RecentDocuments() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Documents
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Your recently added knowledge sources
          </p>
        </div>

        <Link
          href="/documents"
          className="flex items-center gap-1 text-sm text-indigo-400 transition-colors hover:text-indigo-300"
        >
          View all
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="divide-y divide-zinc-800">
        {documents.map((document) => (
          <div
            key={document.name}
            className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-zinc-800/50"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-500/10 p-2 text-red-400">
                <FileText size={18} />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  {document.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Added {document.added}
                </p>
              </div>
            </div>

            <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
              {document.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}