import { RecommendationQuestionField } from "@/features/product-recommendation/components/recommendation-question-field";
import { RecommendationSubmitButton } from "@/features/product-recommendation/components/recommendation-submit-button";
import { SimulateErrorField } from "@/features/product-recommendation/components/simulate-error-field";
import { SubmissionErrorAlert } from "@/features/product-recommendation/components/submission-error-alert";
import { SubmissionLoadingIndicator } from "@/features/product-recommendation/components/submission-loading-indicator";
import { QUESTIONS } from "@/features/product-recommendation/data";
import type { RecommendationFormValues } from "@/features/product-recommendation/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { UseFormReturn } from "react-hook-form";

type RecommendationFormViewProps = {
  form: UseFormReturn<RecommendationFormValues>;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  onSubmit: (data: RecommendationFormValues) => void;
};

export function RecommendationFormView({
  form,
  isLoading,
  isError,
  errorMessage,
  onSubmit,
}: RecommendationFormViewProps) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Product recommendation</CardTitle>
        <CardDescription>
          Answer a few questions about your goals and preferences. We&apos;ll
          suggest a product and you can submit a demo request.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {isError && errorMessage ? (
          <SubmissionErrorAlert message={errorMessage} />
        ) : null}

        {isLoading ? <SubmissionLoadingIndicator /> : null}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn(isLoading && "pointer-events-none opacity-60")}
          >
            <fieldset className="space-y-6" disabled={isLoading}>
              {QUESTIONS.map((question) => (
                <RecommendationQuestionField
                  key={question.id}
                  control={form.control}
                  name={question.id}
                  label={question.label}
                  options={question.options}
                />
              ))}

              <SimulateErrorField control={form.control} />

              <RecommendationSubmitButton isLoading={isLoading} />
            </fieldset>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
