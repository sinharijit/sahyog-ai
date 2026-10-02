import { CloudUpload } from "lucide-react";

export default function UploadArea() {
  return (
    <div className="mt-8 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 p-10">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
          <CloudUpload size={28} />
        </div>

        <h2 className="mt-5 text-lg font-semibold text-white">
          Upload your knowledge
        </h2>

        <p className="mt-2 max-w-md text-sm text-zinc-400">
          Drag and drop your files here, or browse your device to upload
          documents and learning materials.
        </p>

        <p className="mt-2 text-xs text-zinc-500">
          Supported formats: PDF, DOCX, TXT, PNG, JPG
        </p>

        <button className="mt-6 rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
          Browse Files
        </button>
      </div>
    </div>
  );
}