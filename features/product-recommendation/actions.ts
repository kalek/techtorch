"use server";

import {
  getProductById,
  getRecommendedProduct,
} from "@/features/product-recommendation/data";
import { recommendationFormSchema } from "@/features/product-recommendation/schema";
import type {
  RecommendationAnswers,
  SubmitRecommendationResult,
} from "@/features/product-recommendation/types";

export async function submitRecommendationRequest(
  input: RecommendationAnswers & { simulateError?: boolean }
): Promise<SubmitRecommendationResult> {
  const parsed = recommendationFormSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please answer all questions before submitting.",
    };
  }

  const { simulateError, ...answers } = parsed.data;

  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (simulateError) {
    return {
      success: false,
      message:
        "We could not process your request right now. Please try again in a moment.",
    };
  }

  const product = getRecommendedProduct(answers);

  if (!getProductById(product.id)) {
    return {
      success: false,
      message: "Something went wrong while generating your recommendation.",
    };
  }

  return {
    success: true,
    product: {
      id: product.id,
      name: product.name,
      tagline: product.tagline,
      description: product.description,
      highlights: product.highlights,
    },
    requestId: `REQ-${Date.now().toString(36).toUpperCase()}`,
  };
}
