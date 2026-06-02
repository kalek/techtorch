import { Loader2 } from "lucide-react";

export function SubmissionLoadingIndicator() {
  return (
    <div className="bg-muted/40 text-muted-foreground flex items-center justify-center gap-2 rounded-lg border py-8 text-sm">
      <Loader2 className="size-4 animate-spin" />
      Submitting your request…
    </div>
  );
}
