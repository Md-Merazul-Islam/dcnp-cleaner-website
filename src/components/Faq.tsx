import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["What is included in dumpster pricing?", "The starting price includes delivery, pickup, the standard rental period, and an included weight allowance. We confirm disposal fees and any restricted materials before you book."],
  ["How soon can you deliver or pick up?", "Same-day or next-day service may be available. Choose your preferred date in the quote form and our team will confirm the arrival window."],
  ["Will the dumpster damage my driveway?", "We use driveway protection boards when needed and place every container carefully. Tell us about delicate surfaces or access concerns when booking."],
  ["How does junk removal pricing work?", "Pricing is based on how much space your items take in our truck plus any special disposal needs. We provide the full price before loading begins."],
  ["What items can’t you take?", "We cannot accept hazardous chemicals, asbestos, wet paint, or certain batteries. Ask us about a specific item and we’ll point you to the right local disposal option."],
];

export function Faq() {
  return <Accordion.Root type="single" collapsible className="divide-y divide-border border-y border-border">{faqs.map(([question, answer], index) => <Accordion.Item key={question} value={`item-${index}`}><Accordion.Header><Accordion.Trigger className="group grid min-h-16 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 text-left font-display text-lg font-bold"><span>{question}</span><ChevronDown className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="max-w-3xl pb-5 leading-relaxed">{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root>;
}