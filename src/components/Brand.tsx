import { ArrowDownToLine } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="ClearPath home">
      <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
        <ArrowDownToLine className="size-6" strokeWidth={3} />
      </span>
      <span className={compact ? "sr-only" : "leading-none"}>
        <span className="block font-display text-lg font-black uppercase">ClearPath</span>
        <span className="block text-[10px] font-bold uppercase text-muted-foreground">Haul &amp; Home</span>
      </span>
    </a>
  );
}