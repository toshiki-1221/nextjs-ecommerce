"use client";

import { ProductSize } from "../../types";

export interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: ProductSize | null;
  onSizeSelect: (size: ProductSize) => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeSelect,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-base font-normal text-black/60">Choose Size</label>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`px-6 py-3 rounded-full text-base font-medium transition-all h-[46px] ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-[#F0F0F0] text-black/60 hover:bg-gray-200"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
