const tabs = [
  "All",
  "PDFs",
  "Documents",
  "Images",
  "Recent",
];

export default function DocumentTabs() {
  return (
    <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm transition-colors ${
            index === 0
              ? "bg-indigo-500 text-white"
              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}