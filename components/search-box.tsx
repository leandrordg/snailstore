"use client";

import { Search, SearchIcon, XIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface SearchBoxProps {}

export function SearchBox({}: SearchBoxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center sm:justify-between sm:px-4 gap-2 w-8 h-8 sm:w-32 md:w-64 rounded-md cursor-pointer hover:bg-muted-foreground/15 sm:border transition">
          <span className="hidden sm:block text-sm">Buscar...</span>
          <SearchIcon className="size-4 text-foreground" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buscar</DialogTitle>
          <DialogDescription>Realize uma busca por produtos</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 border rounded-md w-full py-0.5 px-2">
          <SearchIcon className="size-4" />
          <Input
            type="text"
            placeholder="Buscar..."
            className="focus-visible:ring-transparent border-0 h-8"
          />
        </div>
      </DialogContent>
    </Dialog>
    // <div className="flex items-center">

    // </div>
  );
}
