"use client";

import { Button } from "@/shared/components/ui/button";
import {
  ProductCard,
  ProductCardProps,
} from "@/shared/components/cards/product-card";

export interface ProductSectionProps {
  title: string;
  products: ProductCardProps[];
}

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col gap-8">
        {/* タイトル */}
        <div className="flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
            {title}
          </h2>
        </div>

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View Allボタン（カード下中央に配置） */}
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            className="border-black rounded-[62px] px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
