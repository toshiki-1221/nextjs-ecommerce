"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { Button } from "@/shared/components/ui/button";
import { ProductCard } from "@/shared/components/cards/product-card";
import { MobileFilterSheet } from "@/src/features/category/components/mobile-filter-sheet";
import { casualProducts } from "@/src/features/category/data/mock-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 pt-4 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-gray-500">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-black">
                {categoryName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* カテゴリータイトルとフィルターボタン */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-black">
          {categoryName}
        </h1>
        <Button
          variant="outline"
          className="bg-gray-100 border-none rounded-[62px] px-3 py-2 h-auto hover:bg-gray-200"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          <span className="text-xs md:text-sm font-medium">Filters</span>
        </Button>
      </div>

      {/* 商品表示件数 */}
      <div className="container mx-auto px-4 pb-3">
        <p className="text-xs md:text-sm text-gray-500">
          Showing 1-10 of {casualProducts.length} Products
        </p>
      </div>

      {/* 商品グリッド（モバイル: 2列、PC: 3列） */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {casualProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* フィルターモーダル */}
      <MobileFilterSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </main>
  );
}
