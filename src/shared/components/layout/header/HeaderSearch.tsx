"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Button } from "@/shared/components/ui/button";
import { SearchBar } from "./SearchBar";

export function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sheetが開いたときに自動的にフォーカス（モバイルのみ）
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  const handleSearch = (query: string) => {
    // 検索処理（実際の実装では検索ページに遷移など）
    console.log("Search:", query);
    setOpen(false);
  };

  return (
    <>
      {/* デスクトップ用の検索バー */}
      <div className="relative flex-1 max-w-lg mx-4 hidden md:block">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* モバイル用の検索（Sheetで開く） */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-6 w-6" />
            <span className="sr-only">検索</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-auto">
          <SheetHeader className="pb-0">
            <SheetTitle>商品を検索</SheetTitle>
          </SheetHeader>
          <div className="pt-0 px-4 pb-4">
            <SearchBar
              ref={inputRef}
              onSearch={handleSearch}
              inputClassName="h-12 text-base"
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
