"use client";

import { RegisterFormView } from "@/features/register/components/register-form-view";
import { RegisterSuccessView } from "@/features/register/components/register-success-view";
import { useRegisterForm } from "@/features/register/hooks/use-register-form";

export function RegisterPageContainer() {
  const { form, onSubmit } = useRegisterForm();

  if (form.formState.isSubmitSuccessful) {
    return <RegisterSuccessView />;
  }

  return <RegisterFormView form={form} onSubmit={onSubmit} />;
}
