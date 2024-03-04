"use client";

import Link from "next/link";

import { Gamepad2Icon, HardDriveIcon, Monitor } from "lucide-react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Category {
  label: string;
  href: string;
  Icon: any;
}

export const categories: Category[] = [
  {
    label: "Periféricos",
    Icon: Gamepad2Icon,
    href: "/categorias/perifericos",
  },
  {
    label: "Hardware",
    Icon: HardDriveIcon,
    href: "/categorias/hardware",
  },
  {
    label: "Monitores",
    Icon: Monitor,
    href: "/categorias/monitores",
  },
];

interface ScrollHorizontalProps {}

export function ScrollHorizontal({}: ScrollHorizontalProps) {
  return (
    <section className="flex flex-col text-center gap-y-10 w-full h-fit">
      <p className="text-sm text-muted-foreground">Buscar por categorias:</p>

      <ScrollArea className="pb-4 w-full whitespace-nowrap max-w-7xl mx-auto">
        <div className="flex items-center justify-center w-full space-x-4">
          {categories.map((category) => {
            const { label, href, Icon } = category;

            return (
              <Link href={href} key={label}>
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center border text-muted-foreground hover:text-foreground hover:border-foreground hover:bg-muted/50 transition">
                  <Icon className="size-4 sm:size-6" />
                  <span className="text-xs sm:text-base font-semibold">
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
