import Link from "next/link";
import { footerNavigationSections } from "@/shared/constants/footer";

export function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {footerNavigationSections.map((section) => (
        <div key={section.title} className="flex flex-col">
          <h3 className="text-base font-bold text-black mb-4 uppercase">
            {section.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
