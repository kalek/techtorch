import { passwordMatchSchema } from "@/validation/passwordMatchSchema";
import { z } from "zod";

export const registerFormSchema = z
  .object({
    email: z.string().email(),
  })
  .and(passwordMatchSchema);

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
