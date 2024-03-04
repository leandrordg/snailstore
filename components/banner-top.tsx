"use client";

import { useState } from "react";

import { XIcon } from "lucide-react";

import { Button } from "./ui/button";

interface BannerTopProps {}

export function BannerTop({}: BannerTopProps) {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return null;
  }

  return (
    <div className="bg-emerald-700 text-white py-0.5 px-2">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <p className="text-xs md:text-sm">
          Atenção! Compras acima de R$199,99 reais receberão{" "}
          <span className="font-bold">FRETE GRÁTIS!</span>
        </p>
        <Button onClick={() => setIsClosed(true)} variant="banner" size="icon">
          <XIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
