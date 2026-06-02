import type { RegisterFormValues } from "@/features/register/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control } from "react-hook-form";

type RegisterPasswordFieldProps = {
  control: Control<RegisterFormValues>;
};

export function RegisterPasswordField({ control }: RegisterPasswordFieldProps) {
  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input {...field} type="password" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
