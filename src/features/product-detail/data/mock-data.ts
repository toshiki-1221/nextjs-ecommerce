import { ProductDetail, ProductReview } from "../types";

export const mockProductDetail: ProductDetail = {
  id: "1",
  title: "One Life Graphic T-shirt",
  price: 260,
  originalPrice: 300,
  discount: 40,
  rating: 4.5,
  reviewCount: 451,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  images: [
    "/products/product-detail-1.jpg",
    "/products/product-detail-2.jpg",
    "/products/product-detail-3.jpg",
  ],
  sizes: ["Small", "Medium", "Large", "X-Large"],
  colors: [
    { id: "1", name: "Brown", hex: "#4F4631" },
    { id: "2", name: "Green", hex: "#314F4A" },
    { id: "3", name: "Blue", hex: "#31344F" },
  ],
  details:
    "This graphic t-shirt is made from 100% organic cotton, ensuring both comfort and sustainability. The design features a unique graphic print that's been carefully crafted to last through multiple washes. Perfect for casual wear, this t-shirt pairs well with jeans, shorts, or even layered under a jacket.",
  faqs: [
    {
      id: "1",
      question: "What is the material composition?",
      answer:
        "This t-shirt is made from 100% organic cotton, ensuring both comfort and sustainability.",
    },
    {
      id: "2",
      question: "How should I care for this product?",
      answer:
        "Machine wash cold with like colors, tumble dry low. Do not bleach.",
    },
    {
      id: "3",
      question: "What sizes are available?",
      answer: "Available sizes include Small, Medium, Large, and X-Large.",
    },
  ],
};

export const mockProductReviews: ProductReview[] = [
  {
    id: "1",
    userName: "Samantha D.",
    rating: 5.0,
    review:
      '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: "August 14, 2023",
    verified: true,
  },
  {
    id: "2",
    userName: "Alex M.",
    rating: 4.5,
    review:
      '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
    date: "August 15, 2023",
    verified: true,
  },
  {
    id: "3",
    userName: "Ethan R.",
    rating: 4.0,
    review:
      '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
    date: "August 16, 2023",
    verified: true,
  },
  {
    id: "4",
    userName: "Olivia P.",
    rating: 4.5,
    review:
      '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
    date: "August 17, 2023",
    verified: true,
  },
  {
    id: "5",
    userName: "Liam K.",
    rating: 3.5,
    review:
      "\"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.\"",
    date: "August 18, 2023",
    verified: true,
  },
  {
    id: "6",
    userName: "Ava H.",
    rating: 5.0,
    review:
      "\"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"",
    date: "August 19, 2023",
    verified: true,
  },
];

export const mockRelatedProducts = [
  {
    id: "2",
    image: "/products/related-1.jpg",
    title: "Polo with Contrast Trims",
    price: 212,
    rating: 4.0,
  },
  {
    id: "3",
    image: "/products/related-2.jpg",
    title: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: 242,
    discount: 20,
    rating: 3.5,
  },
  {
    id: "4",
    image: "/products/related-3.jpg",
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
  },
  {
    id: "5",
    image: "/products/related-4.jpg",
    title: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
  },
];
