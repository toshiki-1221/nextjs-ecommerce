"use client";

import { Star } from "lucide-react";
import { Card } from "@/shared/components/ui/card";
import { cn } from "@/lib/utils";

export interface ReviewCardProps {
  id: string;
  userName: string;
  rating: number;
  review: string;
  date?: string;
  verified?: boolean;
  variant?: "default" | "detailed";
}

const VerifiedIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
      fill="currentColor"
    />
  </svg>
);

export function ReviewCard({
  userName,
  rating,
  review,
  date,
  verified,
  variant = "default",
}: ReviewCardProps) {
  const isDetailed = variant === "detailed";

  return (
    <Card
      className={cn(
        "border flex flex-col gap-4 bg-white",
        isDetailed
          ? "border-black/10 rounded-2xl p-7"
          : "border-black rounded-4xl p-6"
      )}
    >
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
                  className={cn(
                    "w-5 h-5",
                    i < Math.floor(rating)
                      ? isDetailed
                        ? "fill-[#FFC633] text-[#FFC633]"
                        : "fill-yellow-400 text-yellow-400"
                      : i < rating
                      ? "fill-yellow-200 text-yellow-200"
                      : "fill-gray-300 text-gray-300"
                  )}
                />
              ))}
            </div>
            {/* ユーザー名 */}
            <div className="flex items-center gap-2">
              <h4
                className={cn(
                  "text-black",
                  isDetailed ? "text-xl font-bold" : "text-base font-semibold"
                )}
              >
                {userName}
              </h4>
              {verified && isDetailed && (
                <VerifiedIcon className="text-[#01AB31] shrink-0" />
              )}
            </div>
          </div>
          {/* 確認アイコン */}
          {(!isDetailed || verified) && (
            <VerifiedIcon
              className={cn(
                "shrink-0",
                isDetailed && verified
                  ? "text-black"
                  : isDetailed
                  ? "hidden"
                  : "text-black"
              )}
            />
          )}
        </div>

        {/* レビューテキスト */}
        <p
          className={cn(
            "leading-relaxed",
            isDetailed ? "text-base text-black/60" : "text-sm text-gray-600"
          )}
        >
          {review}
        </p>
      </div>

      {/* 投稿日（詳細バリアントのみ） */}
      {date && isDetailed && (
        <p className="text-base font-medium text-black/60">Posted on {date}</p>
      )}
    </Card>
  );
}
