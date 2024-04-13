export type UserType = {
  name: string;
  email: string;
  password: string;
};

export type LoginType = Omit<UserType, "name">;

export type AuthResultType =
  | { type: "success"; resultCode: "USER_CREATED" | "USER_LOGGED_IN" }
  | {
      type: "error";
      resultCode:
        | "NO_USER_FOUND"
        | "INVALID_CREDENTIALS"
        | "USER_ALREADY_EXISTS"
        | "UNKNOWN_ERROR"
        | "VALIDATION_ERROR";
    };
