"use client";

import { useState } from "react";
import { ProductReview } from "../../types";
import { ReviewCard } from "@/shared/components/cards/review-card";
import { Button } from "@/shared/components/ui/button";
import { ChevronDown } from "lucide-react";

export interface ProductReviewsProps {
  reviews: ProductReview[];
  averageRating: number;
  reviewCount: number;
}

export function ProductReviews({
  reviews,
  averageRating,
  reviewCount,
}: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState<"latest" | "rating">("latest");
  const [showAll, setShowAll] = useState(false);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  const displayedReviews = showAll ? sortedReviews : sortedReviews.slice(0, 4);

  return (
    <div className="flex flex-col gap-8">
      {/* ヘッダー */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-black">All Reviews</h3>
          <span className="text-base text-black/60">({reviewCount})</span>
        </div>

        {/* ソートとレビュー作成ボタン */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSortBy("latest")}
            className={`px-5 py-4 rounded-full text-base font-medium flex items-center gap-2 transition-all ${
              sortBy === "latest"
                ? "bg-black text-white"
                : "bg-[#F0F0F0] text-black/60 hover:bg-gray-200"
            }`}
          >
            Latest
            {sortBy === "latest" && <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setSortBy("rating")}
            className={`px-5 py-4 rounded-full text-base font-medium transition-all ${
              sortBy === "rating"
                ? "bg-black text-white"
                : "bg-[#F0F0F0] text-black/60 hover:bg-gray-200"
            }`}
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* レビューリスト */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            id={review.id}
            userName={review.userName}
            rating={review.rating}
            review={review.review}
            date={review.date}
            verified={review.verified}
            variant="detailed"
          />
        ))}
      </div>

      {/* Load Moreボタン */}
      {!showAll && reviews.length > 4 && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="border border-black/10 rounded-full px-14 py-4 text-base font-medium text-black hover:bg-black hover:text-white transition-colors"
          >
            Load More Reviews
          </Button>
        </div>
      )}
    </div>
  );
}
