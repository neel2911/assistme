import { AuthResultType, LoginType, UserType } from "@/types/user";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const prisma = new PrismaClient();

export async function login(
  loginData: LoginType
): Promise<AuthResultType & { data?: UserType }> {
  const res = await prisma.user.findUnique({
    where: { email: loginData.email },
  });
  if (!res) {
    return { type: "error", resultCode: "NO_USER_FOUND" };
  }

  const isPassMatched = await bcrypt.compare(loginData.password, res.password);

  if (isPassMatched) {
    return { type: "success", resultCode: "USER_LOGGED_IN", data: res };
  }

  return { type: "error", resultCode: "INVALID_CREDENTIALS" };
}

export async function signup(
  userData: UserType
): Promise<AuthResultType & { data?: UserType }> {
  const passwordHash = await bcrypt.hash(
    userData.password,
    Number(process.env.SALT_ROUNDS)
  );
  const res = await prisma.user.create({
    data: {
      ...userData,
      password: passwordHash,
    },
  });
  if (!res) {
    return { type: "error", resultCode: "UNKNOWN_ERROR" };
  }
  return { type: "success", resultCode: "USER_CREATED", data: res };
}
