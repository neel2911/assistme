"use client";
import { Sidebar } from "@/components/Sidebar";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-[0.15]">
        <Sidebar className="border-r h-full" />
      </div>
      <div className="flex-[0.85] flex flex-col p-4">
        <Messages messages={messages} />
        <MessageInput
          handleSubmit={handleSubmit}
          input={input}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}
