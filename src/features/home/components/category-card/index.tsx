"use client";

import Image from "next/image";

export interface CategoryCardProps {
  id: string;
  image: string;
  title: string;
}

export function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <div className="relative w-full aspect-4/5 rounded-4xl overflow-hidden bg-gray-100 group cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}
