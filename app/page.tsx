import { fetchProducts } from "@/hooks/products";

import { ScrollHorizontal } from "@/components/categories/scroll-horizontal";
import { FeedCardHeader } from "@/components/feed/feed-card-header";
import { FeedProducts } from "@/components/feed/feed-products";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const offerProducts = await fetchProducts({ limit: 4, skip: 15 });
  const excluviseProducts = await fetchProducts({ limit: 10 });

  return (
    <main className="flex flex-col items-center h-full w-full px-2 sm:px-4 md:px-6 py-16 gap-y-16">
      <FeedCardHeader
        label="snailstore"
        description="A loja mais rápida do Brasil! 🚀"
      >
        <Button variant="default" size="sm">
          Comprar agora
        </Button>
        <Button variant="secondary" size="sm">
          Saber mais
        </Button>
      </FeedCardHeader>

      <ScrollHorizontal />

      {offerProducts && <FeedProducts label="Em oferta" products={offerProducts} />}

      {excluviseProducts && <FeedProducts label="Exclusivo para você" products={excluviseProducts} />}
    </main>
  );
}
