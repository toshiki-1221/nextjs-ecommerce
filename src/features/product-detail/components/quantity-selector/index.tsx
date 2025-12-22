"use client";

import { Minus, Plus } from "lucide-react";

export interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="bg-[#F0F0F0] rounded-full px-5 py-4 flex items-center justify-between gap-3 w-42.5 h-[52px]">
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <Minus className="w-6 h-6 text-black" />
      </button>
      <span className="text-base font-medium text-black">{quantity}</span>
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <Plus className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
