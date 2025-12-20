import { ProductCardProps } from "@/shared/components/cards/product-card";
import { CategoryCardProps } from "../components/category-card";
import { ReviewCardProps } from "@/shared/components/cards/review-card";

// 新着商品のモックデータ
export const newArrivalsProducts: ProductCardProps[] = [
  {
    id: "1",
    image: "/products/new-arrival-1.jpg",
    title: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
    rating: 4.5,
  },
  {
    id: "2",
    image: "/products/new-arrival-2.jpg",
    title: "SKINNY FIT JEANS",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 3.5,
  },
  {
    id: "3",
    image: "/products/new-arrival-3.jpg",
    title: "CHECKERED SHIRT",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 4.5,
  },
  {
    id: "4",
    image: "/products/new-arrival-4.jpg",
    title: "SLEEVE STRIPED T-SHIRT",
    price: 180,
    discount: 20,
    rating: 4.5,
  },
];

// トップセリング商品のモックデータ
export const topSellingProducts: ProductCardProps[] = [
  {
    id: "5",
    image: "/products/top-selling-1.jpg",
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    rating: 5.0,
  },
  {
    id: "6",
    image: "/products/top-selling-2.jpg",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 232,
    originalPrice: 232,
    rating: 4.0,
  },
  {
    id: "7",
    image: "/products/top-selling-3.jpg",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 210,
    rating: 3.0,
  },
  {
    id: "8",
    image: "/products/top-selling-4.jpg",
    title: "FADED SKINNY JEANS",
    price: 145,
    originalPrice: 80,
    rating: 4.5,
  },
];

// スタイルカテゴリーのモックデータ
export const styleCategories: CategoryCardProps[] = [
  {
    id: "casual",
    image: "/styles/casual.jpg",
    title: "Casual",
  },
  {
    id: "formal",
    image: "/styles/formal.jpg",
    title: "Formal",
  },
  {
    id: "party",
    image: "/styles/party.jpg",
    title: "Party",
  },
  {
    id: "gym",
    image: "/styles/gym.jpg",
    title: "Gym",
  },
];

// レビューのモックデータ
export const customerReviews: ReviewCardProps[] = [
  {
    id: "review-1",
    userName: "Sarah M.",
    rating: 5.0,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: "review-2",
    userName: "Alex K.",
    rating: 5.0,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: "review-3",
    userName: "James L.",
    rating: 5.0,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];
