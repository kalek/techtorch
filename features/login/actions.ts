"use server";

import { loginFormSchema } from "@/features/login/schema";
import { signIn } from "@/auth";

export type LoginUserResult = { error: boolean; message: string };

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<LoginUserResult> {
  const loginValidation = loginFormSchema.safeParse(input);

  if (!loginValidation.success) {
    return {
      error: true,
      message: loginValidation.error.issues[0]?.message ?? "Unknown error",
    };
  }

  const { email, password } = loginValidation.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch {
    return {
      error: true,
      message: "Incorrect email or password",
    };
  }

  return { error: false, message: "Login successful" };
}
