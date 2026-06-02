import { AlertCircle } from "lucide-react";

type SubmissionErrorAlertProps = {
  message: string;
};

export function SubmissionErrorAlert({ message }: SubmissionErrorAlertProps) {
  return (
    <div
      role="alert"
      className="border-destructive/50 bg-destructive/10 text-destructive flex gap-3 rounded-lg border p-4 text-sm"
    >
      <AlertCircle className="mt-0.5 size-4 shrink-0" />
      <div>
        <p className="font-medium">Submission failed</p>
        <p className="mt-1">{message}</p>
      </div>
    </div>
  );
}
