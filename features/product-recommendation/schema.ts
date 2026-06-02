import { z } from "zod";

export const recommendationFormSchema = z.object({
  goal: z.enum(["save", "grow", "protect", "retire"]),
  riskTolerance: z.enum(["low", "medium", "high"]),
  timeline: z.enum(["short", "medium", "long"]),
  monthlyBudget: z.enum(["low", "medium", "high"]),
  simulateError: z.boolean().optional(),
});

export type RecommendationFormValues = z.infer<typeof recommendationFormSchema>;
