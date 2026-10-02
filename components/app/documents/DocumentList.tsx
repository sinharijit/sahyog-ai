import {
  FileImage,
  FileText,
  MoreHorizontal,
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Operating Systems Complete Notes.pdf",
    type: "PDF",
    date: "Today",
    size: "4.2 MB",
  },
  {
    id: 2,
    name: "DBMS Study Material.pdf",
    type: "PDF",
    date: "Yesterday",
    size: "3.8 MB",
  },
  {
    id: 3,
    name: "Machine Learning Architecture.png",
    type: "Image",
    date: "2 days ago",
    size: "1.6 MB",
  },
  {
    id: 4,
    name: "Computer Networks Revision.docx",
    type: "Document",
    date: "4 days ago",
    size: "2.1 MB",
  },
];

export default function DocumentList() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Documents
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Your recently added knowledge sources.
          </p>
        </div>

        <span className="text-sm text-zinc-500">
          {documents.length} documents
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40">
        {documents.map((document, index) => {
          const Icon =
            document.type === "Image"
              ? FileImage
              : FileText;

          return (
            <div
              key={document.id}
              className={`flex items-center justify-between gap-4 p-4 transition-colors hover:bg-zinc-900 ${
                index !== documents.length - 1
                  ? "border-b border-zinc-800"
                  : ""
              }`}
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Icon size={20} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {document.name}
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                    <span>{document.type}</span>

                    <span>•</span>

                    <span>{document.size}</span>

                    <span>•</span>

                    <span>{document.date}</span>
                  </div>
                </div>
              </div>

              <button
                className="shrink-0 rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white"
                aria-label={`More options for ${document.name}`}
              >
                <MoreHorizontal size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}