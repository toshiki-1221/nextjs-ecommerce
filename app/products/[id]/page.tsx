"use client";

import { useState } from "react";
import { use } from "react";
import { ProductSize } from "@/src/features/product-detail/types";
import { ProductImageGallery } from "@/src/features/product-detail/components/product-image-gallery";
import { ProductInfo } from "@/src/features/product-detail/components/product-info";
import { SizeSelector } from "@/src/features/product-detail/components/size-selector";
import { ColorSelector } from "@/src/features/product-detail/components/color-selector";
import { QuantitySelector } from "@/src/features/product-detail/components/quantity-selector";
import { ProductTabs } from "@/src/features/product-detail/components/product-tabs";
import { ProductReviews } from "@/src/features/product-detail/components/product-reviews";
import { RelatedProducts } from "@/src/features/product-detail/components/related-products";
import { Button } from "@/shared/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/shared/components/ui/breadcrumb";
import {
  mockProductDetail,
  mockProductReviews,
  mockRelatedProducts,
} from "@/src/features/product-detail/data/mock-data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // TODO: 実際のAPIから商品データを取得
  // const product = await getProductById(id);
  // const reviews = await getProductReviews(id);
  // const relatedProducts = await getRelatedProducts(id);

  const product = mockProductDetail;
  const reviews = mockProductReviews;
  const relatedProducts = mockRelatedProducts;

  const handleAddToCart = () => {
    // TODO: カート追加ロジックを実装
    console.log("Add to cart", {
      productId: product.id,
      size: selectedSize,
      color: selectedColorId,
      quantity,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 md:px-8 pt-8 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-black/60">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop" className="text-black/60">
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop/men" className="text-black/60">
                Men
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-black">T-shirts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* 左側: 商品画像 */}
          <div className="flex-1 lg:max-w-[530px] xl:max-w-none">
            <ProductImageGallery
              images={product.images}
              title={product.title}
            />
          </div>

          {/* 右側: 商品情報 */}
          <div className="flex-1 flex flex-col gap-8 lg:max-w-[500px] xl:max-w-none">
            <ProductInfo
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              reviewCount={product.reviewCount}
              description={product.description}
            />

            {/* 区切り線 */}
            <div className="w-full h-px bg-black/10" />

            {/* 色選択 */}
            <ColorSelector
              colors={product.colors}
              selectedColorId={selectedColorId}
              onColorSelect={setSelectedColorId}
            />

            {/* 区切り線 */}
            <div className="w-full h-px bg-black/10" />

            {/* サイズ選択 */}
            <SizeSelector
              sizes={product.sizes as ProductSize[]}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />
            {/* 区切り線 */}
            <div className="w-full h-px bg-black/10" />

            {/* 数量選択とカート追加ボタン */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
              <Button
                onClick={handleAddToCart}
                className="bg-black text-white rounded-full px-14 py-4 text-base font-medium hover:bg-black/90 transition-colors w-full sm:w-[400px] h-[52px]"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* タブセクション */}
        <div className="mt-16 md:mt-24">
          <ProductTabs product={product}>
            <ProductReviews
              reviews={reviews}
              averageRating={product.rating}
              reviewCount={product.reviewCount}
            />
          </ProductTabs>
        </div>
      </main>

      {/* 関連商品セクション */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
