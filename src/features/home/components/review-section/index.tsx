"use client";

import {
  ReviewCard,
  ReviewCardProps,
} from "@/shared/components/cards/review-card";

export interface ReviewSectionProps {
  reviews: ReviewCardProps[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col gap-8">
        {/* タイトル */}
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase text-left">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* レビューグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
