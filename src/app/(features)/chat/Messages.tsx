import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "./Message";

export default React.memo(function Messages(props: {
  messages: { role: string; content: string }[];
}) {
  const { messages } = props;
  return (
    <ScrollArea className="w-full flex-1">
      {messages.map((message, index) => (
        <Message key={index} role={message.role} content={message.content} />
      ))}
    </ScrollArea>
  );
});
