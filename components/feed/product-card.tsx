"use client";

import Image from "next/image";
import Link from "next/link";

import { HeartIcon, ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { applyDiscount, convertUSDToBRL } from "@/hooks/price";
import { ProductProps } from "@/typings";

interface ProductCardProps {
  product: ProductProps;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link href={`/produto/${product.id}`}>
      <Card className="w-full overflow-hidden group transition-transform">
        <CardHeader className="relative h-52">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="object-cover group-hover:scale-105 transition-transform duration-50 ease-out"
            sizes="100vw"
            fill
          />

          <span className="absolute bottom-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs">
            {Math.round(product.discountPercentage)}% OFF
          </span>

          <div className="group-hover:scale-100 scale-0 absolute flex items-center gap-x-2 top-2 right-2 px-2 py-1 transition-transform origin-right rounded-full duration-50 ease-out">
            <Button onClick={handleClick} variant="secondary">
              <ShoppingCartIcon className="size-4" />
            </Button>
            <Button onClick={handleClick} variant="destructive">
              <HeartIcon className="size-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="min-h-14">{product.title}</CardTitle>
          <CardDescription className="text-xs">
            <s>{convertUSDToBRL(product.price)}</s>
          </CardDescription>
          <CardDescription className="text-lg text-emerald-500">
            {applyDiscount(product.price, product.discountPercentage)}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
