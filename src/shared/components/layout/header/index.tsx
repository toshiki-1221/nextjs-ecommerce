import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderActions } from "./HeaderActions";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto md:px-4">
        {/* デスクトップレイアウト */}
        <div className="hidden md:flex items-center justify-between h-16 gap-4">
          <HeaderLogo width={160} height={22} />
          <HeaderNavigation />
          <HeaderSearch />
          <HeaderActions />
        </div>

        {/* モバイルレイアウト */}
        <div className="flex md:hidden items-center justify-between h-16 gap-2">
          <div className="flex items-center gap-2">
            <HeaderNavigation />
            <HeaderLogo width={126} height={18} />
          </div>
          <div className="flex items-center">
            <HeaderSearch />
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
}
