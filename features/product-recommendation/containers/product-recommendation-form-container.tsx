"use client";

import { RecommendationFormView } from "@/features/product-recommendation/components/recommendation-form-view";
import { RecommendationSuccessView } from "@/features/product-recommendation/components/recommendation-success-view";
import { useProductRecommendationForm } from "@/features/product-recommendation/hooks/use-product-recommendation-form";

export function ProductRecommendationFormContainer() {
  const {
    form,
    submitState,
    onSubmit,
    reset,
    isLoading,
    isError,
    errorMessage,
  } = useProductRecommendationForm();

  if (submitState.status === "success") {
    return (
      <RecommendationSuccessView
        product={submitState.product}
        requestId={submitState.requestId}
        onStartOver={reset}
      />
    );
  }

  return (
    <RecommendationFormView
      form={form}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
    />
  );
}
