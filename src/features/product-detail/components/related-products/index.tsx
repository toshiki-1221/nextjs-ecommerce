"use client";

import { ProductCard } from "@/shared/components/cards/product-card";
import { ProductCardProps } from "@/shared/components/cards/product-card";

export interface RelatedProductsProps {
  products: ProductCardProps[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col gap-8">
        {/* タイトル */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center uppercase">
          You might also like
        </h2>

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
