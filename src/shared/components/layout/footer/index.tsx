import { NewsletterSection } from "./NewsletterSection";
import { FooterBrand } from "./FooterBrand";
import { FooterNavigation } from "./FooterNavigation";
import { FooterCopyright } from "./FooterCopyright";

export function Footer() {
  return (
    <footer className="w-full">
      {/* ニュースレター購読セクション */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <NewsletterSection />
      </div>

      {/* メインフッターコンテンツ */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <FooterBrand />
            <div className="flex-1">
              <FooterNavigation />
            </div>
          </div>
        </div>
      </div>

      {/* 著作権と支払い方法セクション */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 pb-8">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
