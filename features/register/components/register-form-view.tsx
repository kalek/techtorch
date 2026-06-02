import { RegisterConfirmPasswordField } from "@/features/register/components/register-confirm-password-field";
import { RegisterEmailField } from "@/features/register/components/register-email-field";
import { RegisterLoginLink } from "@/features/register/components/register-login-link";
import { RegisterPasswordField } from "@/features/register/components/register-password-field";
import { RegisterSubmitButton } from "@/features/register/components/register-submit-button";
import type { RegisterFormValues } from "@/features/register/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";

type RegisterFormViewProps = {
  form: UseFormReturn<RegisterFormValues>;
  onSubmit: (data: RegisterFormValues) => void;
};

export function RegisterFormView({ form, onSubmit }: RegisterFormViewProps) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset
                className="space-y-5"
                disabled={form.formState.isSubmitting}
              >
                <RegisterEmailField control={form.control} />
                <RegisterPasswordField control={form.control} />
                <RegisterConfirmPasswordField control={form.control} />
                <RegisterSubmitButton />
              </fieldset>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <RegisterLoginLink />
        </CardFooter>
      </Card>
    </main>
  );
}
