import { passwordSchema } from "@/validation/passwordSchema";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
