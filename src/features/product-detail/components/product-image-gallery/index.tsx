"use client";

import { useState } from "react";
import Image from "next/image";

export interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

export function ProductImageGallery({
  images,
  title,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* サムネイル画像（モバイルでは横スクロール、デスクトップでは縦） */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`relative w-38 h-41.75 md:w-38 md:h-41.75 shrink-0 rounded-4xl overflow-hidden border-2 transition-all ${
              selectedImageIndex === index
                ? "border-black"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 152px, 152px"
            />
          </button>
        ))}
      </div>

      {/* メイン画像 */}
      <div className="relative w-full md:flex-1 rounded-2xl overflow-hidden bg-[#F0EEED]">
        <Image
          src={images[selectedImageIndex]}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1107px) 50vw, 530px"
          priority
        />
      </div>
    </div>
  );
}
