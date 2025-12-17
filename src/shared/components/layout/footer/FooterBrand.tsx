import Link from "next/link";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import { socialMediaLinks } from "@/shared/constants/footer";

const socialIcons = {
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
  GitHub: Github,
};

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold text-black">SHOP.CO</span>
      </Link>
      <p className="text-sm text-gray-600 max-w-xs">
        We have clothes that suit your style and which you&apos;re proud to
        wear. From women to men.
      </p>
      <div className="flex items-center gap-3">
        {socialMediaLinks.map((social) => {
          const Icon = socialIcons[social.name as keyof typeof socialIcons];
          if (!Icon) return null;

          // TwitterとFacebookは黒い円、InstagramとGitHubはグレーの円
          const bgColor =
            social.name === "Twitter" || social.name === "Facebook"
              ? "bg-black hover:bg-black/90"
              : "bg-gray-200 hover:bg-gray-300";

          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full ${bgColor} transition-colors`}
              aria-label={social.name}
            >
              <Icon className="h-5 w-5 text-white" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
