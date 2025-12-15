"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export function HeaderActions() {
  return (
    <div className="flex items-center md:gap-2">
      <Button variant="ghost" size="icon" className="relative" asChild>
        <Link href="/cart">
          <ShoppingCart className="h-6 w-6 text-black" />
          <span className="sr-only">ショッピングカート</span>
        </Link>
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link href="/account">
          <User className="h-6 w-6 text-black" />
          <span className="sr-only">アカウント</span>
        </Link>
      </Button>
    </div>
  );
}
