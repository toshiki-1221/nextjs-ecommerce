export interface HeaderLogoProps {
  width: number;
  height: number;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface NavigationLinksProps {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export interface ShopMenuProps {
  variant?: "dropdown" | "collapsible";
  onItemClick?: () => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
