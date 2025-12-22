"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/ui/sheet";
import { Button } from "@/shared/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";

interface MobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

export function MobileFilterSheet({ isOpen, onClose }: MobileFilterSheetProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [openSections, setOpenSections] = useState<{
    category: boolean;
    price: boolean;
    colors: boolean;
    size: boolean;
    dressStyle: boolean;
  }>({
    category: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[85%] sm:w-[375px] overflow-y-auto p-0"
      >
        <SheetHeader className="px-4 pt-6 pb-4 border-b border-gray-200">
          <SheetTitle className="text-xl font-semibold text-black">
            Filters
          </SheetTitle>
        </SheetHeader>

        <div className="px-4 mt-6 space-y-4">
          {/* カテゴリー */}
          <Collapsible
            open={openSections.category}
            onOpenChange={() => toggleSection("category")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
              <span className="text-base font-semibold text-black">
                Category
              </span>
              {openSections.category ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`w-full flex items-center justify-between text-left py-2 px-2 rounded-lg text-sm transition-colors ${
                    selectedCategories.includes(category)
                      ? "bg-black text-white"
                      : "bg-transparent text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{category}</span>
                  {selectedCategories.includes(category) && (
                    <ChevronDown className="w-4 h-4 rotate-180" />
                  )}
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <div className="border-t border-gray-200" />

          {/* 価格 */}
          <Collapsible
            open={openSections.price}
            onOpenChange={() => toggleSection("price")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
              <span className="text-base font-semibold text-black">Price</span>
              {openSections.price ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-black">
                  ${priceRange[0]}
                </span>
                <span className="text-sm font-semibold text-black">
                  ${priceRange[1]}
                </span>
              </div>
              <div className="space-y-2">
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="border-t border-gray-200" />

          {/* 色 */}
          <Collapsible
            open={openSections.colors}
            onOpenChange={() => toggleSection("colors")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
              <span className="text-base font-semibold text-black">Colors</span>
              {openSections.colors ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="flex flex-wrap gap-3">
                {[
                  "#000000",
                  "#FFFFFF",
                  "#FF0000",
                  "#0000FF",
                  "#00FF00",
                  "#FFFF00",
                  "#FF00FF",
                  "#00FFFF",
                ].map((color) => (
                  <button
                    key={color}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-black transition-colors"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="border-t border-gray-200" />

          {/* サイズ */}
          <Collapsible
            open={openSections.size}
            onOpenChange={() => toggleSection("size")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
              <span className="text-base font-semibold text-black">Size</span>
              {openSections.size ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`py-2 px-3 rounded-[62px] text-sm font-medium transition-colors ${
                      selectedSizes.includes(size)
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="border-t border-gray-200" />

          {/* スタイル */}
          <Collapsible
            open={openSections.dressStyle}
            onOpenChange={() => toggleSection("dressStyle")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
              <span className="text-base font-semibold text-black">
                Dress Style
              </span>
              {openSections.dressStyle ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 space-y-2">
              {dressStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => toggleStyle(style)}
                  className={`w-full flex items-center justify-between text-left py-2 px-2 rounded-lg text-sm transition-colors ${
                    selectedStyles.includes(style)
                      ? "bg-black text-white"
                      : "bg-transparent text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{style}</span>
                  {selectedStyles.includes(style) && (
                    <ChevronDown className="w-4 h-4 rotate-180" />
                  )}
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Apply Filter ボタン */}
        <div className="mt-8 pt-4 px-4 pb-6 border-t border-gray-200">
          <Button
            className="w-full bg-black text-white rounded-[62px] py-3 font-semibold hover:bg-gray-800"
            onClick={onClose}
          >
            Apply Filter
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
