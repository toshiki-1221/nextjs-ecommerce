import { Hero } from "@/src/features/home/components/hero";
import { ProductSection } from "@/shared/components/sections/product-section";
import { CategorySection } from "@/src/features/home/components/category-section";
import { ReviewSection } from "@/src/features/home/components/review-section";
import {
  newArrivalsProducts,
  topSellingProducts,
  styleCategories,
  customerReviews,
} from "@/src/features/home/data/mock-data";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection title="NEW ARRIVALS" products={newArrivalsProducts} />
      <ProductSection title="top selling" products={topSellingProducts} />
      <CategorySection styles={styleCategories} />
      <ReviewSection reviews={customerReviews} />
    </main>
  );
}
