import { Search } from "lucide-react";

export default function DocumentSearch() {
  return (
    <div className="relative mt-8">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search your documents..."
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-12 pr-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-indigo-500"
      />
    </div>
  );
}