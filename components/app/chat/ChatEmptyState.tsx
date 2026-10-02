import {
  BrainCircuit,
  FileQuestion,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const suggestions = [
  {
    icon: FileQuestion,
    title: "Summarize my documents",
    description: "Get a quick overview of your uploaded knowledge.",
    prompt: "Summarize the most important information from my documents.",
  },
  {
    icon: Lightbulb,
    title: "Explain a concept",
    description: "Understand complex topics in simple language.",
    prompt: "Explain a concept from my knowledge base in simple terms.",
  },
  {
    icon: Sparkles,
    title: "Find connections",
    description: "Discover relationships across your documents.",
    prompt:
      "Find interesting connections between the concepts in my documents.",
  },
];

type ChatEmptyStateProps = {
  onSelectSuggestion: (prompt: string) => void;
};

export default function ChatEmptyState({
  onSelectSuggestion,
}: ChatEmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
        <BrainCircuit size={32} />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-white">
        How can I help you today?
      </h2>

      <p className="mt-3 max-w-md text-center text-sm leading-6 text-zinc-400">
        Ask questions about your uploaded documents and let Sahyog AI help
        you understand, connect, and explore your knowledge.
      </p>

      <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;

          return (
            <button
              key={suggestion.title}
              onClick={() =>
                onSelectSuggestion(suggestion.prompt)
              }
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-left transition-colors hover:border-zinc-700 hover:bg-zinc-900"
            >
              <Icon size={20} className="text-indigo-400" />

              <h3 className="mt-4 text-sm font-medium text-white">
                {suggestion.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {suggestion.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}