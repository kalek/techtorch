import type { ProductSummary } from "@/features/product-recommendation/types";

type ProductCardProps = {
  product: ProductSummary;
  badge?: string;
};

export function ProductCard({ product, badge }: ProductCardProps) {
  return (
    <div className="bg-muted/40 rounded-lg border p-4">
      {badge ? (
        <p className="text-primary mb-2 text-xs font-medium tracking-wide uppercase">
          {badge}
        </p>
      ) : null}
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-muted-foreground text-sm">{product.tagline}</p>
      <p className="mt-2 text-sm">{product.description}</p>
      <ul className="text-muted-foreground mt-3 list-inside list-disc text-sm">
        {product.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
