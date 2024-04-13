import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useFormStatus } from "react-dom";

export default function LoginButton(props: { type: "login" | "signup" }) {
  const { pending } = useFormStatus();
  const { type } = props;
  return (
    <Button disabled={pending}>
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      {type === "login" ? "Sign In with Email" : "Sign Up with Email"}
    </Button>
  );
}
