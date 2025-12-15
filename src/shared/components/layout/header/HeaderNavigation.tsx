"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Button } from "@/shared/components/ui/button";
import { ShopMenu } from "./ShopMenu";
import { NavigationLinks } from "./NavigationLinks";

export function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* デスクトップ用のナビゲーション */}
      <nav className="hidden md:flex items-center gap-3">
        <ShopMenu variant="dropdown" />
        <NavigationLinks variant="desktop" />
      </nav>

      {/* モバイル用のハンバーガーメニュー */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-7 w-7" />
            <span className="sr-only">メニューを開く</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-75 sm:w-100">
          <SheetHeader>
            <SheetTitle>メニュー</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 px-4">
            <ShopMenu
              variant="collapsible"
              isOpen={shopOpen}
              onOpenChange={setShopOpen}
              onItemClick={handleLinkClick}
            />
            <NavigationLinks variant="mobile" onLinkClick={handleLinkClick} />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
