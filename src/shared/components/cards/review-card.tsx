"use client";

import { Star } from "lucide-react";
import { Card } from "@/shared/components/ui/card";

export interface ReviewCardProps {
  id: string;
  userName: string;
  rating: number;
  review: string;
}

export function ReviewCard({ userName, rating, review }: ReviewCardProps) {
  return (
    <Card className="border border-black rounded-4xl p-6 flex flex-col gap-4 bg-white">
      {/* レビュー内容 */}
      <div className="flex flex-col gap-3">
        {/* 星評価とユーザー名 */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-2 flex-1">
            {/* 星評価 */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : i < rating
                      ? "fill-yellow-200 text-yellow-200"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
            {/* ユーザー名 */}
            <h4 className="text-base font-semibold text-black">{userName}</h4>
          </div>
          {/* 確認アイコン */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black shrink-0"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* レビューテキスト */}
        <p className="text-sm text-gray-600 leading-relaxed">{review}</p>
      </div>
    </Card>
  );
}
