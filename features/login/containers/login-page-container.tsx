"use client";

import { LoginFormView } from "@/features/login/components/login-form-view";
import { useLoginForm } from "@/features/login/hooks/use-login-form";

export function LoginPageContainer() {
  const { form, onSubmit } = useLoginForm();

  return <LoginFormView form={form} onSubmit={onSubmit} />;
}
