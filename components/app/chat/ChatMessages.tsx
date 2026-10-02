import TypingIndicator from "./TypingIndicator";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
            className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                ? "bg-indigo-500 text-white"
                : "bg-zinc-900 text-zinc-200"
            }`}
            >
            {message.content}
            </div>
          </div>
        ))}

        {isLoading && <TypingIndicator />}
      </div>
    </div>
  );
}