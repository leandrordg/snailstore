"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface NotFoundPageProps {}

export default function NotFoundPage({}: NotFoundPageProps) {
  const router = useRouter();

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center justify-center py-20 gap-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Ocorreu algum erro!</h1>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Você pode ter entrado em alguma página que não existe.
        </p>

        <Button onClick={() => router.back()} size="sm">
          Voltar a página
        </Button>
      </div>
    </main>
  );
}
