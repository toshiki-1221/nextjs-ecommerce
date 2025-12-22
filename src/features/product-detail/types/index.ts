export interface ProductDetail {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: ColorOption[];
  details?: string;
  faqs?: FAQ[];
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
}

export type ProductSize = "Small" | "Medium" | "Large" | "X-Large";
