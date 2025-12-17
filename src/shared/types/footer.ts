export interface FooterNavigationItem {
  href: string;
  label: string;
}

export interface FooterNavigationSection {
  title: string;
  items: FooterNavigationItem[];
}

export interface SocialMediaItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}
