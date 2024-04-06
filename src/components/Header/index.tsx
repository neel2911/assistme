import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/Theme";

export default function Header() {
  return (
    <div className="h-16 flex-col flex">
      <div className="flex flex-col items-start justify-between space-y-2 py-4 px-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">AssistMe</h2>
        <div className="ml-auto flex w-full space-x-2 justify-end">
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </div>
  );
}
