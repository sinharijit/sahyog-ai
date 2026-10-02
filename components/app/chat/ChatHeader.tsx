import { Plus } from "lucide-react";

type ChatHeaderProps = {
  onNewChat: () => void;
};

export default function ChatHeader({
  onNewChat,
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-5">
      <div>
        <h1 className="text-xl font-semibold text-white">
          AI Chat
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Chat with your personal knowledge base.
        </p>
      </div>

      <button
        onClick={onNewChat}
        className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
      >
        <Plus size={18} />

        New Chat
      </button>
    </div>
  );
}