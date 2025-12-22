"use client";

import { ColorOption } from "../../types";

export interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColorId: string | null;
  onColorSelect: (colorId: string) => void;
}

export function ColorSelector({
  colors,
  selectedColorId,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-base font-normal text-black/60">
        Select Colors
      </label>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorSelect(color.id)}
            className={`w-9 h-9 rounded-full border-2 transition-all ${
              selectedColorId === color.id
                ? "border-black scale-110"
                : "border-transparent hover:border-gray-300"
            }`}
            style={{ backgroundColor: color.hex }}
            aria-label={`Select color ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
}
