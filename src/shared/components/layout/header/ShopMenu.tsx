"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { Button } from "@/shared/components/ui/button";
import type { ShopMenuProps } from "@/shared/types/header";
import { shopMenuItems } from "@/shared/constants/navigation";

export function ShopMenu({
  variant = "dropdown",
  onItemClick,
  isOpen,
  onOpenChange,
}: ShopMenuProps) {
  if (variant === "collapsible" && isOpen !== undefined && onOpenChange) {
    return (
      <Collapsible open={isOpen} onOpenChange={onOpenChange}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-base font-normal py-2 hover:text-foreground/80 transition-colors">
          Shop
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2">
          {shopMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-base font-normal text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-base font-normal p-0 h-auto hover:bg-transparent"
        >
          Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {shopMenuItems.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
