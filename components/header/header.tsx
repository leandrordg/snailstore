import Link from "next/link";

import { SnailIcon } from "lucide-react";

import { HeaderLinks } from "@/components/header/header-links";
import { SearchBox } from "@/components/search-box";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className="sticky top-0 border-b px-2 sm:px-4 md:px-6 py-2 backdrop-blur-lg z-10">
      <div className="flex items-center gap-x-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-x-1 font-bold">
          <SnailIcon />
          snailstore
        </Link>

        <div className="hidden md:block">
          <HeaderLinks />
        </div>

        <div className="flex flex-1 gap-x-4 justify-end">
          <SearchBox />
          <ThemeToggle variant="ghost" />
        </div>
      </div>
    </header>
  );
}
