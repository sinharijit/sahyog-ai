"use client";

import {
  FormEvent,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import { ArrowUp } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
};

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function sendMessage() {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) return;

    onSendMessage(trimmedMessage);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    sendMessage();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setMessage(event.target.value);

    const textarea = event.target;

    textarea.style.height = "auto";

    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      128
    )}px`;
  }

  return (
    <div className="border-t border-zinc-800 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-end gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 focus-within:border-zinc-700"
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your knowledge..."
          rows={1}
          disabled={isLoading}
          className="max-h-32 flex-1 resize-none overflow-y-auto bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white transition-colors hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send message"
        >
          <ArrowUp size={18} />
        </button>
      </form>

      <p className="mt-2 text-center text-xs text-zinc-600">
        Press Enter to send • Shift + Enter for a new line
      </p>
    </div>
  );
}