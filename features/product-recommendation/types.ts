export type Goal = "save" | "grow" | "protect" | "retire";
export type RiskTolerance = "low" | "medium" | "high";
export type Timeline = "short" | "medium" | "long";
export type MonthlyBudget = "low" | "medium" | "high";

export type RecommendationAnswers = {
  goal: Goal;
  riskTolerance: RiskTolerance;
  timeline: Timeline;
  monthlyBudget: MonthlyBudget;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  goals: Goal[];
  riskTolerance: RiskTolerance[];
  timelines: Timeline[];
  budgets: MonthlyBudget[];
};

export type ProductSummary = Pick<
  Product,
  "name" | "tagline" | "description" | "highlights"
>;

export type RecommendedProduct = ProductSummary & {
  id: string;
};

export type RecommendationSubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; product: RecommendedProduct; requestId: string }
  | { status: "error"; message: string };

export type SubmitRecommendationResult =
  | { success: true; product: RecommendedProduct; requestId: string }
  | { success: false; message: string };
