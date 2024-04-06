import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Message(props: { role: string; content: string }) {
  const { role, content } = props;
  return (
    <div className="flex my-4 flex-1">
      {role !== "user" && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex flex-col gap-2 rounded-lg px-3 py-2 text-sm mx-4",
          role === "user"
            ? "ml-auto bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        {content}
      </div>
      {role === "user" && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
