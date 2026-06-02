import { FormMessage } from "@/components/ui/form";

type LoginRootErrorProps = {
  message?: string;
};

export function LoginRootError({ message }: LoginRootErrorProps) {
  if (!message) {
    return null;
  }

  return <FormMessage>{message}</FormMessage>;
}
