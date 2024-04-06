"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ChangeEvent, FormEvent } from "react";
import { ChatRequestOptions } from "ai";

export default function MessageInput(props: {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
}) {
  const { input, handleInputChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex pt-4 justify-end">
        <Input
          type="text"
          placeholder="Enter a message"
          value={input}
          onChange={handleInputChange}
        />
        <Button size="icon" className="ml-4" type="submit">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
