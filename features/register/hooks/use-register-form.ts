"use client";

import { registerUser } from "@/features/register/actions";
import {
  registerFormSchema,
  type RegisterFormValues,
} from "@/features/register/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useRegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const response = await registerUser({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    if (response.error) {
      form.setError("email", {
        message: response.message,
      });
    }
  };

  return { form, onSubmit };
}
