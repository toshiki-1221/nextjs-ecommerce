"use client";

import Link from "next/link";
import type { NavigationLinksProps } from "@/shared/types/header";
import { navigationItems } from "@/shared/constants/navigation";

export function NavigationLinks({
  variant = "desktop",
  onLinkClick,
}: NavigationLinksProps) {
  const linkClassName =
    variant === "mobile"
      ? "text-base font-normal text-foreground hover:text-foreground/80 transition-colors py-2"
      : "text-base font-normal text-foreground hover:text-foreground/80 transition-colors";

  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
