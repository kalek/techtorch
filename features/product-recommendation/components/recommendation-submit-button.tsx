import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type RecommendationSubmitButtonProps = {
  isLoading: boolean;
};

export function RecommendationSubmitButton({
  isLoading,
}: RecommendationSubmitButtonProps) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Submitting…
        </>
      ) : (
        "Submit request"
      )}
    </Button>
  );
}
