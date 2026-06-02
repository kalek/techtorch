import type { RecommendationFormValues } from "@/features/product-recommendation/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { Control } from "react-hook-form";

type QuestionOption = {
  value: string;
  label: string;
};

type RecommendationQuestionFieldProps = {
  control: Control<RecommendationFormValues>;
  name: keyof RecommendationFormValues;
  label: string;
  options: readonly QuestionOption[];
};

export function RecommendationQuestionField({
  control,
  name,
  label,
  options,
}: RecommendationQuestionFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors",
                    field.value === option.value
                      ? "border-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  )}
                >
                  <input
                    type="radio"
                    className="mt-1"
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={() => field.onChange(option.value)}
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
