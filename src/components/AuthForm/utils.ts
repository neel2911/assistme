import { AuthResultType } from "@/types/user";

export const ResultCodeMessages: Record<AuthResultType["resultCode"], string> = {
  INVALID_CREDENTIALS: "Please enter valid credentials",
  NO_USER_FOUND: "No user found",
  UNKNOWN_ERROR: "Server error",
  USER_ALREADY_EXISTS: "User already exist",
  USER_CREATED: "User created successfully",
  VALIDATION_ERROR: "Please enter valid data",
  USER_LOGGED_IN: "User successfully logged in",
};
