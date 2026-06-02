"use client";

import { loginUser } from "@/features/login/actions";
import { loginFormSchema, type LoginFormValues } from "@/features/login/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function useLoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const response = await loginUser({
      email: data.email,
      password: data.password,
    });

    if (response.error) {
      form.setError("root", {
        message: response.message,
      });
      return;
    }

    router.push("/my-account");
  };

  return { form, onSubmit };
}
