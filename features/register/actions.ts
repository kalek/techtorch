"use server";

import { registerFormSchema } from "@/features/register/schema";
import { db } from "@/db/drizzle";
import { users } from "@/db/usersSchema";
import { hash } from "bcryptjs";

export type RegisterUserResult = { error: boolean; message: string };

export async function registerUser(input: {
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<RegisterUserResult> {
  try {
    const newUserValidation = registerFormSchema.safeParse(input);

    if (!newUserValidation.success) {
      return {
        error: true,
        message: newUserValidation.error.issues[0]?.message ?? "Unknown error",
      };
    }

    const { email, password } = newUserValidation.data;
    const hashedPassword = await hash(password, 10);

    await db.insert(users).values({
      email,
      password: hashedPassword,
    });

    return {
      error: false,
      message: "User registered successfully",
    };
  } catch (e: unknown) {
    const error = e as { cause?: { code?: string } };
    if (error.cause?.code === "23505") {
      return { error: true, message: "Email already in use" };
    }

    return { error: true, message: "Unknown error" };
  }
}
