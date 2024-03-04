"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderLinkProps {
  href: string;
  label: string;
}

const links: HeaderLinkProps[] = [
  { href: "/produtos", label: "Produtos" },
  { href: "/categorias", label: "Categorias" },
  { href: "/ofertas", label: "Ofertas" },
];

export function HeaderLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-4 text-sm">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-muted-foreground font-medium hover:text-foreground/80 transition",
              pathname === link.href && "text-foreground"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
