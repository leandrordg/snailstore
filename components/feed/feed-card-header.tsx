"use client";

interface FeedCardHeaderProps {
  label: string;
  description: string;
  children?: React.ReactNode;
}

export function FeedCardHeader({
  label,
  description,
  children,
}: FeedCardHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-y-6 text-center w-full max-w-[600px] py-20">
      <h1 className="text-4xl md:text-6xl font-bold">{label}</h1>
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{description}</p>
      <div className="flex items-center gap-x-4">{children}</div>
    </div>
  );
}
