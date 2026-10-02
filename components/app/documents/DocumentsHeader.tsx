import { Upload } from "lucide-react";

export default function DocumentsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Documents
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage and organize your knowledge sources.
        </p>
      </div>

      <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400">
        <Upload size={18} />
        Upload Document
      </button>
    </div>
  );
}