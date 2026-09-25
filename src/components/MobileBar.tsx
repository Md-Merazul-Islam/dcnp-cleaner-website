import { CalendarCheck, FileText, Phone } from "lucide-react";

export function MobileBar() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 px-2 pb-[max(.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_color-mix(in_oklab,var(--foreground)_12%,transparent)] backdrop-blur-md sm:hidden">
    <a href="tel:+17195550148" className="flex min-h-12 flex-col items-center justify-center text-xs font-extrabold"><Phone className="mb-1 size-5" />Call</a>
    <a href="#quote" className="flex min-h-12 flex-col items-center justify-center text-xs font-extrabold"><FileText className="mb-1 size-5" />Quote</a>
    <a href="#quote" className="flex min-h-12 flex-col items-center justify-center rounded-md bg-primary text-xs font-extrabold text-primary-foreground"><CalendarCheck className="mb-1 size-5" />Book</a>
  </div>;
}