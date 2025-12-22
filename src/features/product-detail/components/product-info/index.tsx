"use client";

import { Star } from "lucide-react";

export interface ProductInfoProps {
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  description: string;
}

export function ProductInfo({
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  description,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* タイトル */}
      <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
        {title}
      </h1>

      {/* 評価とレビュー数 */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(rating)
                    ? "fill-[#FFC633] text-[#FFC633]"
                    : i < rating
                    ? "fill-yellow-200 text-yellow-200"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-base font-normal text-black">{rating}/5</span>
        </div>
      </div>

      {/* 価格 */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-black">${price}</span>
        {originalPrice && originalPrice > price && (
          <>
            <span className="text-3xl font-bold text-black/30 line-through">
              ${originalPrice}
            </span>
            {discount && (
              <span className="bg-[rgba(255,51,51,0.1)] text-[#FF3333] text-base font-medium px-3.5 py-1.5 rounded-full">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>

      {/* 説明 */}
      <p className="text-base text-black/60 leading-relaxed max-w-147.5">
        {description}
      </p>
    </div>
  );
}
