import type { RecommendationFormValues } from "@/features/product-recommendation/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import type { Control } from "react-hook-form";

type SimulateErrorFieldProps = {
  control: Control<RecommendationFormValues>;
};

export function SimulateErrorField({ control }: SimulateErrorFieldProps) {
  return (
    <FormField
      control={control}
      name="simulateError"
      render={({ field }) => (
        <FormItem className="flex items-center gap-2 space-y-0">
          <FormControl>
            <input
              type="checkbox"
              id="simulateError"
              checked={field.value ?? false}
              onChange={(e) => field.onChange(e.target.checked)}
              className="size-4 rounded border"
            />
          </FormControl>
          <FormLabel
            htmlFor="simulateError"
            className="text-muted-foreground cursor-pointer font-normal"
          >
            Simulate error (demo only)
          </FormLabel>
        </FormItem>
      )}
    />
  );
}
