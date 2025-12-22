"use client";

import { useState } from "react";
import { ProductDetail } from "../../types";

export interface ProductTabsProps {
  product: ProductDetail;
  children?: React.ReactNode; // レビューセクションを子要素として受け取る
}

type TabType = "details" | "reviews" | "faqs";

export function ProductTabs({ product, children }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("reviews");

  const tabs: { id: TabType; label: string }[] = [
    { id: "details", label: "Product Details" },
    { id: "reviews", label: "Rating & Reviews" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="flex flex-col">
      {/* タブヘッダー */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 border-b border-black/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-xl font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? "text-black border-black"
                : "text-black/60 border-transparent hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* タブコンテンツ */}
      <div className="mt-8">
        {activeTab === "details" && (
          <div className="text-base text-black/60 leading-relaxed">
            {product.details || product.description}
          </div>
        )}

        {activeTab === "reviews" && <div>{children}</div>}

        {activeTab === "faqs" && (
          <div className="flex flex-col gap-4">
            {product.faqs?.map((faq) => (
              <div key={faq.id} className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-black">
                  {faq.question}
                </h4>
                <p className="text-base text-black/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
