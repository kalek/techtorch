import { ProductCard } from "@/features/product-recommendation/components/product-card";
import type { RecommendedProduct } from "@/features/product-recommendation/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

type RecommendationSuccessViewProps = {
  product: RecommendedProduct;
  requestId: string;
  onStartOver: () => void;
};

export function RecommendationSuccessView({
  product,
  requestId,
  onStartOver,
}: RecommendationSuccessViewProps) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle2 className="size-5" />
          <CardTitle>Request submitted</CardTitle>
        </div>
        <CardDescription>
          Reference: {requestId}. We&apos;ve saved your recommendation and will
          follow up shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductCard product={product} badge="Your recommended product" />
      </CardContent>
      <CardFooter>
        <Button type="button" variant="outline" onClick={onStartOver}>
          Start over
        </Button>
      </CardFooter>
    </Card>
  );
}
