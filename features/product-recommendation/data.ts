import type {
  Goal,
  MonthlyBudget,
  Product,
  RecommendationAnswers,
  RiskTolerance,
  Timeline,
} from "@/features/product-recommendation/types";

export const QUESTIONS = [
  {
    id: "goal" as const,
    label: "What is your primary financial goal?",
    options: [
      { value: "save" as const, label: "Build an emergency fund / save cash" },
      { value: "grow" as const, label: "Grow my investments over time" },
      { value: "protect" as const, label: "Protect my family financially" },
      { value: "retire" as const, label: "Plan for retirement" },
    ],
  },
  {
    id: "riskTolerance" as const,
    label: "How comfortable are you with investment risk?",
    options: [
      { value: "low" as const, label: "Low — I prefer stability" },
      {
        value: "medium" as const,
        label: "Medium — balanced growth and safety",
      },
      {
        value: "high" as const,
        label: "High — I accept volatility for returns",
      },
    ],
  },
  {
    id: "timeline" as const,
    label: "When do you expect to need this money?",
    options: [
      { value: "short" as const, label: "Within 3 years" },
      { value: "medium" as const, label: "3–10 years" },
      { value: "long" as const, label: "More than 10 years" },
    ],
  },
  {
    id: "monthlyBudget" as const,
    label: "How much can you contribute each month?",
    options: [
      { value: "low" as const, label: "Under $500" },
      { value: "medium" as const, label: "$500 – $2,000" },
      { value: "high" as const, label: "Over $2,000" },
    ],
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "essential-savings",
    name: "Essential Savings Account",
    tagline: "Safe, liquid cash for short-term goals",
    description:
      "A high-yield savings product designed for emergency funds and near-term needs with no market exposure.",
    highlights: ["FDIC-insured", "No minimum lock-in", "Instant transfers"],
    goals: ["save"],
    riskTolerance: ["low"],
    timelines: ["short", "medium"],
    budgets: ["low", "medium", "high"],
  },
  {
    id: "growth-etf",
    name: "Growth ETF Portfolio",
    tagline: "Diversified equities for long-term growth",
    description:
      "A globally diversified ETF basket aimed at investors with a long horizon and higher risk appetite.",
    highlights: ["Low fees", "Auto-rebalancing", "Tax-efficient"],
    goals: ["grow"],
    riskTolerance: ["medium", "high"],
    timelines: ["long"],
    budgets: ["medium", "high"],
  },
  {
    id: "family-protection",
    name: "Family Protection Plan",
    tagline: "Term life coverage for peace of mind",
    description:
      "Affordable term life insurance to protect dependents if something unexpected happens.",
    highlights: [
      "Flexible term lengths",
      "No medical exam option",
      "Fast approval",
    ],
    goals: ["protect"],
    riskTolerance: ["low", "medium", "high"],
    timelines: ["short", "medium", "long"],
    budgets: ["low", "medium", "high"],
  },
  {
    id: "retirement-ira",
    name: "Retirement IRA Plus",
    tagline: "Tax-advantaged retirement savings",
    description:
      "Traditional or Roth IRA with target-date funds tailored to your expected retirement year.",
    highlights: ["Tax benefits", "Target-date funds", "Rollover support"],
    goals: ["retire"],
    riskTolerance: ["low", "medium", "high"],
    timelines: ["long"],
    budgets: ["low", "medium", "high"],
  },
  {
    id: "balanced-income",
    name: "Balanced Income Fund",
    tagline: "Steady returns with moderate risk",
    description:
      "A mix of bonds and dividend stocks for investors who want growth without extreme swings.",
    highlights: [
      "Monthly distributions",
      "60/40 allocation",
      "Lower volatility",
    ],
    goals: ["save", "grow", "retire"],
    riskTolerance: ["low", "medium"],
    timelines: ["medium", "long"],
    budgets: ["medium", "high"],
  },
  {
    id: "premium-wealth",
    name: "Premium Wealth Management",
    tagline: "Dedicated advisor for high contributors",
    description:
      "Personalized portfolio management with quarterly reviews for clients investing significant monthly amounts.",
    highlights: ["Dedicated advisor", "Custom allocation", "Priority support"],
    goals: ["grow", "retire"],
    riskTolerance: ["medium", "high"],
    timelines: ["medium", "long"],
    budgets: ["high"],
  },
];

function scoreProduct(
  product: Product,
  answers: RecommendationAnswers
): number {
  let score = 0;
  if (product.goals.includes(answers.goal)) score += 3;
  if (product.riskTolerance.includes(answers.riskTolerance)) score += 2;
  if (product.timelines.includes(answers.timeline)) score += 2;
  if (product.budgets.includes(answers.monthlyBudget)) score += 1;
  return score;
}

export function getRecommendedProduct(answers: RecommendationAnswers): Product {
  const ranked = [...PRODUCTS].sort(
    (a, b) => scoreProduct(b, answers) - scoreProduct(a, answers)
  );
  return ranked[0] ?? PRODUCTS[0];
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export type { Goal, MonthlyBudget, RiskTolerance, Timeline };
