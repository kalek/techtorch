"use client";

import { submitRecommendationRequest } from "@/features/product-recommendation/actions";
import {
  recommendationFormSchema,
  type RecommendationFormValues,
} from "@/features/product-recommendation/schema";
import type { RecommendationSubmitState } from "@/features/product-recommendation/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useProductRecommendationForm() {
  const [submitState, setSubmitState] = useState<RecommendationSubmitState>({
    status: "idle",
  });

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationFormSchema),
    defaultValues: {
      goal: undefined,
      riskTolerance: undefined,
      timeline: undefined,
      monthlyBudget: undefined,
      simulateError: false,
    },
  });

  const onSubmit = async (data: RecommendationFormValues) => {
    setSubmitState({ status: "loading" });

    const result = await submitRecommendationRequest(data);

    if (result.success) {
      setSubmitState({
        status: "success",
        product: result.product,
        requestId: result.requestId,
      });
      return;
    }

    setSubmitState({
      status: "error",
      message: result.message,
    });
  };

  const reset = () => {
    form.reset();
    setSubmitState({ status: "idle" });
  };

  const isLoading = submitState.status === "loading";
  const isError = submitState.status === "error";
  const errorMessage = isError ? submitState.message : undefined;

  return {
    form,
    submitState,
    onSubmit,
    reset,
    isLoading,
    isError,
    errorMessage,
  };
}
