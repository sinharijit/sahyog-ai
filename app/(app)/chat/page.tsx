"use client";

import { useState } from "react";

import ChatEmptyState from "@/components/app/chat/ChatEmptyState";
import ChatHeader from "@/components/app/chat/ChatHeader";
import ChatInput from "@/components/app/chat/ChatInput";
import ChatMessages from "@/components/app/chat/ChatMessages";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSendMessage(content: string) {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "This is a simulated Sahyog AI response. Soon, this message will be generated using your personal knowledge base and our RAG pipeline.",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);

      setIsLoading(false);
    }, 1500);
  }

  function handleNewChat() {
    if (isLoading) return;

    setMessages([]);
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <ChatHeader onNewChat={handleNewChat} />

      {messages.length === 0 ? (
        <ChatEmptyState
          onSelectSuggestion={handleSendMessage}
        />
      ) : (
        <ChatMessages
          messages={messages}
          isLoading={isLoading}
        />
      )}

      <ChatInput
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
}