import Image from "next/image";
import Link from "next/link";
import type { HeaderLogoProps } from "@/shared/types/header";

export function HeaderLogo({ width, height }: HeaderLogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.svg"
        alt="SHOP.CO"
        width={width}
        height={height}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
}
