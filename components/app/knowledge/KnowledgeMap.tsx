import { Network } from "lucide-react";

const nodes = [
  {
    name: "Operating System",
    className:
      "left-1/2 top-[18%] -translate-x-1/2",
    type: "primary",
  },
  {
    name: "Process",
    className:
      "left-[18%] top-[45%]",
    type: "secondary",
  },
  {
    name: "Memory",
    className:
      "right-[18%] top-[45%]",
    type: "secondary",
  },
  {
    name: "Thread",
    className:
      "bottom-[12%] left-[30%]",
    type: "secondary",
  },
  {
    name: "Scheduling",
    className:
      "bottom-[12%] right-[25%]",
    type: "secondary",
  },
];

export default function KnowledgeMap() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Knowledge Map
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Visualize relationships between concepts in your knowledge base.
          </p>
        </div>

        <Network size={20} className="text-indigo-400" />
      </div>

      <div className="relative mt-8 h-[420px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30">
        
        {/* Connection Lines */}

        <div className="absolute left-1/2 top-[30%] h-[1px] w-[32%] -translate-x-full rotate-[25deg] bg-zinc-700" />

        <div className="absolute left-1/2 top-[30%] h-[1px] w-[32%] rotate-[-25deg] bg-zinc-700" />

        <div className="absolute left-1/2 top-[30%] h-[1px] w-[28%] -translate-x-full rotate-[-45deg] bg-zinc-700" />

        <div className="absolute left-1/2 top-[30%] h-[1px] w-[30%] rotate-[45deg] bg-zinc-700" />

        {/* Central Node */}

        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-400/50 bg-indigo-500/10 text-center text-sm font-medium text-indigo-300 shadow-lg shadow-indigo-500/10">
          Knowledge
        </div>

        {/* Concept Nodes */}

        {nodes.map((node) => (
          <div
            key={node.name}
            className={`absolute flex items-center justify-center rounded-full border text-center text-xs font-medium ${
              node.type === "primary"
                ? "h-20 w-20 border-indigo-400/50 bg-indigo-500/10 text-indigo-300"
                : "h-16 w-16 border-zinc-700 bg-zinc-900 text-zinc-300"
            } ${node.className}`}
          >
            {node.name}
          </div>
        ))}

        {/* Bottom Label */}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-500">
          Demo visualization — real knowledge graph coming later
        </div>
      </div>
    </div>
  );
}