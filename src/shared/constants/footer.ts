import type { FooterNavigationSection } from "@/shared/types/footer";

export const footerNavigationSections: FooterNavigationSection[] = [
  {
    title: "COMPANY",
    items: [
      { href: "/about", label: "About" },
      { href: "/features", label: "Features" },
      { href: "/works", label: "Works" },
      { href: "/career", label: "Career" },
    ],
  },
  {
    title: "HELP",
    items: [
      { href: "/customer-support", label: "Customer Support" },
      { href: "/delivery-details", label: "Delivery Details" },
      { href: "/terms-conditions", label: "Terms & Conditions" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
  {
    title: "FAQ",
    items: [
      { href: "/account", label: "Account" },
      { href: "/manage-deliveries", label: "Manage Deliveries" },
      { href: "/orders", label: "Orders" },
      { href: "/payments", label: "Payments" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { href: "/free-ebooks", label: "Free eBooks" },
      { href: "/development-tutorial", label: "Development Tutorial" },
      { href: "/how-to-blog", label: "How to - Blog" },
      { href: "/youtube-playlist", label: "Youtube Playlist" },
    ],
  },
];

export const socialMediaLinks = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "GitHub", href: "https://github.com" },
];

export const paymentMethods = [
  { name: "Visa", icon: "Visa.svg" },
  { name: "Mastercard", icon: "MasterCard.svg" },
  { name: "PayPal", icon: "PayPal.svg" },
  { name: "Apple Pay", icon: "ApplePay.svg" },
  { name: "Google Pay", icon: "GooglePay.svg" },
];
