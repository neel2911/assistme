"use server";

import { login, prisma } from "@/lib/auth";
import { AuthResultType, UserType } from "@/types/user";
import { z, ZodError } from "zod";

export async function loginAction(
  _prevState: AuthResultType | undefined,
  formData: FormData
): Promise<AuthResultType & { data?: UserType; error?: any }> {
  const email = (formData.get("email") as string) || "";
  const password = (formData.get("password") as string) || "";

  const validation = z
    .object({
      email: z.string().email().min(1),
      password: z.string().min(1),
    })
    .safeParse({
      email,
      password,
    });

  if (validation.success) {
    const res = await login({ email, password });
    return res;
  }
  return {
    type: "error",
    resultCode: "VALIDATION_ERROR",
    error: validation.error.format(),
  };
}
