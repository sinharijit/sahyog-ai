import {
  ArrowUpRight,
  BrainCircuit,
  Link2,
} from "lucide-react";

const concepts = [
  {
    name: "Operating Systems",
    description: "Core concepts across system architecture documents.",
    connections: 8,
  },
  {
    name: "Machine Learning",
    description: "Connected across multiple AI and data science resources.",
    connections: 6,
  },
  {
    name: "Database Systems",
    description: "Related concepts found across technical documentation.",
    connections: 4,
  },
];

export default function KeyConcepts() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Key Concepts
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Important topics discovered in your knowledge base.
          </p>
        </div>

        <BrainCircuit size={20} className="text-indigo-400" />
      </div>

      <div className="mt-6 divide-y divide-zinc-800">
        {concepts.map((concept) => (
          <div
            key={concept.name}
            className="group flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-white">
                {concept.name}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {concept.description}
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-600">
                <Link2 size={13} />

                {concept.connections} connections
              </div>
            </div>

            <button
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              aria-label={`Explore ${concept.name}`}
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}