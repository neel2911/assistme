"use server";

import { prisma, signup } from "@/lib/auth";
import { AuthResultType, UserType } from "@/types/user";
import { z, ZodError } from "zod";

export async function signupAction(
  _prevState: AuthResultType | undefined,
  formData: FormData
): Promise<AuthResultType & { data?: UserType; error?: any }> {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const password = (formData.get("password") as string) || "";
  const confirm_password = (formData.get("confirm_password") as string) || "";

  const validation = z
    .object({
      name: z.string().min(1),
      email: z.string().email().min(1),
      password: z.string().min(1),
      confirm_password: z.string().min(1),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords don't match",
      path: ["confirm_password"], // path of error
    })
    .safeParse({
      name,
      email,
      password,
      confirm_password,
    });

  if (validation.success) {
    const res = await signup({ name, password, email });

    return res;
  } else {
    return {
      type: "error",
      resultCode: "VALIDATION_ERROR",
      error: validation.error.format(),
    };
  }
}
