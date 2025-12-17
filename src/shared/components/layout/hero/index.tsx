"use client";

import Image from "next/image";
import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full">
      {/* ヒーロー画像 - PC版とモバイル版をレスポンシブに表示 */}
      <div className="relative w-full">
        <Image
          src="/heroArea/hero_pc.jpg"
          alt="Find clothes that matches your style"
          width={1920}
          height={1080}
          className="hidden w-full h-auto object-cover md:block"
          priority
        />
        <Image
          src="/heroArea/hero_mobile.jpg"
          alt="Find clothes that matches your style"
          width={768}
          height={1024}
          className="block w-full h-auto  object-cover md:hidden"
          priority
        />

        {/* Shop Nowボタン - 画像の上に絶対配置 */}
        {/* PC版: 左側のテキストエリアの下、モバイル版: 中央 */}
        <div className="absolute inset-0 flex items-start justify-center pt-[55%] md:justify-start md:items-start md:pl-[7%] md:pt-[25%]">
          <Button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 w-89.5 md:w-52.5 h-13 rounded-[50px] font-semibold text-sm md:text-base lg:text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
