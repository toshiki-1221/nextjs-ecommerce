"use client";

import { forwardRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      placeholder = "Search for products...",
      className,
      inputClassName,
      onSearch,
    },
    ref
  ) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const query = formData.get("search") as string;
      if (query.trim() && onSearch) {
        onSearch(query.trim());
      }
    };

    return (
      <form onSubmit={handleSubmit} className={cn("relative", className)}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          ref={ref}
          name="search"
          type="search"
          placeholder={placeholder}
          className={cn(
            "w-full pl-10 pr-4 rounded-full bg-muted/50 border-0",
            "focus-visible:ring-2 focus-visible:ring-ring",
            inputClassName
          )}
        />
      </form>
    );
  }
);

SearchBar.displayName = "SearchBar";
