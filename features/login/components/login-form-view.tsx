import { LoginEmailField } from "@/features/login/components/login-email-field";
import { LoginPasswordField } from "@/features/login/components/login-password-field";
import { LoginRegisterLink } from "@/features/login/components/login-register-link";
import { LoginRootError } from "@/features/login/components/login-root-error";
import { LoginSubmitButton } from "@/features/login/components/login-submit-button";
import type { LoginFormValues } from "@/features/login/schema";
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

type LoginFormViewProps = {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: (data: LoginFormValues) => void;
};

export function LoginFormView({ form, onSubmit }: LoginFormViewProps) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset
                className="space-y-5"
                disabled={form.formState.isSubmitting}
              >
                <LoginEmailField control={form.control} />
                <LoginPasswordField control={form.control} />
                <LoginRootError message={form.formState.errors.root?.message} />
                <LoginSubmitButton />
              </fieldset>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <LoginRegisterLink />
        </CardFooter>
      </Card>
    </main>
  );
}
