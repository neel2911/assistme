"use client";
import { loginAction } from "@/app/(auth)/login/api/action";
import { signupAction } from "@/app/(auth)/signup/api/action";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { ResultCodeMessages } from "./utils";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "login" | "signup";
}

export default function AuthForm({ className, ...props }: AuthFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { type } = props;
  const formAction = type === "signup" ? signupAction : loginAction;
  const [result, dispatch] = useFormState(formAction, undefined);

  useEffect(() => {
    if (type === "signup") {
      if (result?.type === "success") {
        router.push("/login");
      } else {
        if (result?.resultCode) {
          toast({
            variant: "destructive",
            title: "Error",
            description: ResultCodeMessages[result?.resultCode],
          });
        }
      }
    } else {
      if (result?.type === "success") {
        router.push("/");
      } else {
        if (result?.resultCode) {
          toast({
            variant: "destructive",
            title: "Error",
            description: ResultCodeMessages[result?.resultCode],
          });
        }
      }
    }
  }, [result, router, toast, type]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={dispatch}>
        <div className="grid gap-2">
          {type === "signup" && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter name"
                name="name"
                type="text"
                className={
                  result?.error?.name?._errors[0] ? "border-destructive" : ""
                }
              />
              {result?.error?.name?._errors[0] && (
                <Label className="text-[0.8rem] font-medium text-destructive">
                  {result?.error?.name?._errors[0]}
                </Label>
              )}
            </div>
          )}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              name="email"
              type="email"
              className={
                result?.error?.email?._errors[0] ? "border-destructive" : ""
              }
            />
            {result?.error?.email?._errors[0] && (
              <Label className="text-[0.8rem] font-medium text-destructive">
                {result?.error?.email?._errors[0]}
              </Label>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="******"
              type="password"
              className={
                result?.error?.password?._errors[0] ? "border-destructive" : ""
              }
            />
            {result?.error?.password?._errors[0] && (
              <Label className="text-[0.8rem] font-medium text-destructive">
                {result?.error?.password?._errors[0]}
              </Label>
            )}
          </div>
          {type === "signup" && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="confirm_password">
                Confirm password
              </Label>
              <Input
                id="confirm_password"
                name="confirm_password"
                placeholder="******"
                type="password"
                className={
                  result?.error?.confirm_password?._errors[0]
                    ? "border-destructive"
                    : ""
                }
              />
              {result?.error?.confirm_password?._errors[0] && (
                <Label className="text-[0.8rem] font-medium text-destructive">
                  {result?.error?.confirm_password?._errors[0]}
                </Label>
              )}
            </div>
          )}

          <LoginButton type={type} />
        </div>
      </form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div> */}
      {/* <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button> */}
    </div>
  );
}
