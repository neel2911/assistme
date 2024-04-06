import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Chats
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <MessagesSquare height={16} width={16} className="mr-2" />
              Chat 1
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessagesSquare height={16} width={16} className="mr-2" />
              Chat 2
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
