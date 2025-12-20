"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
}

export function ProductCard({
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* 商品画像 */}
      <div className="relative w-full aspect-square rounded-4xl overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {discount && (
          <div className="absolute top-3 right-3 bg-[#EF4444] text-white text-xs font-semibold px-2 py-1 rounded-[62px]">
            -{discount}%
          </div>
        )}
      </div>

      {/* 商品情報 */}
      <div className="flex flex-col gap-2">
        {/* 評価 */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : i < rating
                    ? "fill-yellow-200 text-yellow-200"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-black">
            {rating.toFixed(1)}/5
          </span>
        </div>

        {/* タイトル */}
        <h3 className="text-base font-semibold text-black">{title}</h3>

        {/* 価格 */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-black">${price}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-base font-semibold text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
