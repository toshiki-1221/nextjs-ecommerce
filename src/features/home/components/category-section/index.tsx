"use client";

import { CategoryCard, CategoryCardProps } from "../category-card";

export interface CategorySectionProps {
  styles: CategoryCardProps[];
}

export function CategorySection({ styles }: CategorySectionProps) {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="bg-[#F0F0F0] rounded-[40px] p-8 md:p-12">
        <div className="flex flex-col gap-8">
          {/* タイトル */}
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase text-center">
            BROWSE BY dress STYLE
          </h2>

          {/* スタイルグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style) => (
              <CategoryCard key={style.id} {...style} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
