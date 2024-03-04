"use client";

import { ProductProps } from "@/typings";

import { ProductCard } from "@/components/feed/product-card";

interface FeedProductsProps {
  label: string;
  products: ProductProps[];
}

export function FeedProducts({ label, products }: FeedProductsProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl font-bold">{label}</h1>

      <section className="py-10 -z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </div>
  );
}
