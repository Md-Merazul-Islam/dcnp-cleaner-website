import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";

const nav = [
  ["Services", "#services"],
  ["Pricing", "#pricing"],
  ["How it works", "#how-it-works"],
  ["Reviews", "#reviews"],
  ["Areas", "#areas"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <Brand />
        <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} className="text-sm font-bold text-muted-foreground transition hover:text-foreground">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild variant="ghost" size="sm"><a href="tel:+17195550148"><Phone className="size-4" />(719) 555-0148</a></Button>
          <Button asChild size="sm"><a href="#quote">Book now</a></Button>
        </div>
        <Button variant="ghost" size="icon" className="sm:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-4 py-3 sm:hidden" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block min-h-12 py-3 font-bold">{label}</a>)}</nav>}
    </header>
  );
}