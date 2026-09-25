import { useMemo, useState, type ChangeEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  CalendarDays,
  Check,
  ChevronRight,
  Home,
  ImagePlus,
  LoaderCircle,
  MapPin,
  PackageOpen,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Service = "Dumpster Rental" | "Junk Removal" | "Moving" | "Cleanout";
type QuoteData = { service: Service | undefined; zip: string; size: string | undefined; date: string; name: string; email: string; phone: string; notes: string };

const initialData: QuoteData = { service: undefined, zip: "", size: undefined, date: "", name: "", email: "", phone: "", notes: "" };
const services = [
  { name: "Dumpster Rental" as const, icon: Box, detail: "Delivered to your driveway" },
  { name: "Junk Removal" as const, icon: Truck, detail: "We load and haul it away" },
  { name: "Moving" as const, icon: PackageOpen, detail: "Careful local moving help" },
  { name: "Cleanout" as const, icon: Sparkles, detail: "Garage, estate or property" },
];
const dumpsterSizes = [
  { name: "6-yard", price: "$329", use: "Small cleanouts", loads: "2 pickup loads" },
  { name: "10-yard", price: "$399", use: "Renovation debris", loads: "4 pickup loads", popular: true },
  { name: "15-yard", price: "$479", use: "Large projects", loads: "6 pickup loads" },
  { name: "20-yard", price: "$559", use: "Whole-home cleanup", loads: "8 pickup loads" },
];

export function QuoteFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteData, string>>>({});
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const steps = ["Service", "Location", "Size", "Date", "Contact", "Done"];
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const update = (key: keyof QuoteData, value: string) => {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  };

  const next = () => {
    const nextErrors: Partial<Record<keyof QuoteData, string>> = {};
    if (step === 1 && !data.service) nextErrors.service = "Choose a service to continue.";
    if (step === 2 && !/^\d{5}$/.test(data.zip)) nextErrors.zip = "Enter a valid 5-digit ZIP code.";
    if (step === 3 && !data.size) nextErrors.size = "Choose the option that fits best.";
    if (step === 4 && !data.date) nextErrors.date = "Choose your preferred date.";
    if (step === 5) {
      if (data.name.trim().length < 2) nextErrors.name = "Enter your name.";
      if (!/^\S+@\S+\.\S+$/.test(data.email)) nextErrors.email = "Enter a valid email.";
      if (data.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a valid phone number.";
    }
    if (Object.keys(nextErrors).length) return setErrors(nextErrors);
    if (step === 5) setSubmitted(true);
    setStep((current) => Math.min(6, current + 1));
  };

  const selectService = (service: Service) => {
    setData((current) => ({ ...current, service, size: undefined }));
    setErrors({});
    setStep(2);
  };

  const onPhotos = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []).slice(0, 3);
    setPhotos(files.map((file) => URL.createObjectURL(file)));
  };

  const restart = () => {
    setData(initialData);
    setPhotos([]);
    setErrors({});
    setSubmitted(false);
    setStep(1);
  };

  return (
    <section id="quote" className="scroll-mt-20 bg-foreground py-16 text-background sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <span className="eyebrow text-primary">FAST ONLINE ESTIMATE</span>
          <h2 className="mt-3 font-display text-4xl font-black leading-[1.02] sm:text-5xl">Let’s clear the way.</h2>
          <p className="mt-4 text-background/70">Answer a few quick questions. No pressure, no hidden fees.</p>
        </div>

        <div className="overflow-hidden rounded-lg bg-background text-foreground shadow-2xl">
          <div className="border-b border-border px-4 py-4 sm:px-8">
            <div className="mb-3 flex items-center justify-between text-xs font-bold text-muted-foreground">
              <span>{submitted ? "QUOTE REQUEST COMPLETE" : `STEP ${step} OF 5`}</span>
              <span>{Math.round((Math.min(step, 5) / 5) * 100)}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${(Math.min(step, 5) / 5) * 100}%` }} />
            </div>
            <ol className="mt-3 hidden grid-cols-6 gap-2 text-center text-[11px] font-bold sm:grid">
              {steps.map((label, index) => <li key={label} className={index + 1 <= step ? "text-foreground" : "text-muted-foreground"}>{label}</li>)}
            </ol>
          </div>

          <div className="min-h-[390px] p-5 sm:p-8 lg:p-10">
            {step === 1 && (
              <FlowStep title="What can we help with?" subtitle="Choose one to get started.">
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map(({ name, icon: Icon, detail }) => (
                    <button key={name} type="button" onClick={() => selectService(name)} className="group grid min-h-24 grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md border border-border p-4 text-left transition hover:border-primary hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <span className="grid size-12 place-items-center rounded-md bg-primary/15 text-primary"><Icon className="size-6" /></span>
                      <span><strong className="block text-base">{name}</strong><span className="text-sm text-muted-foreground">{detail}</span></span>
                      <ChevronRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                    </button>
                  ))}
                </div>
                {errors.service && <ErrorText>{errors.service}</ErrorText>}
              </FlowStep>
            )}

            {step === 2 && (
              <FlowStep title="Where should we meet you?" subtitle="We’ll confirm local availability and pricing.">
                <label className="mx-auto block max-w-md font-bold" htmlFor="quote-zip">Service ZIP code</label>
                <div className="relative mx-auto mt-2 max-w-md">
                  <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                  <input id="quote-zip" inputMode="numeric" maxLength={5} value={data.zip} onChange={(e) => update("zip", e.target.value.replace(/\D/g, ""))} placeholder="e.g. 80903" className="h-14 w-full rounded-md border border-input bg-background pl-12 pr-4 text-lg font-bold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                {errors.zip && <ErrorText>{errors.zip}</ErrorText>}
                <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">Serving local homes and businesses. Exact timing is confirmed before booking.</p>
              </FlowStep>
            )}

            {step === 3 && (
              <FlowStep title={data.service === "Dumpster Rental" ? "Choose your dumpster" : "How much are we handling?"} subtitle="Not sure? Pick your closest match—we’ll confirm it with you.">
                {data.service === "Dumpster Rental" ? (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {dumpsterSizes.map((size) => <OptionCard key={size.name} selected={data.size === size.name} onClick={() => update("size", size.name)} badge={size.popular ? "MOST POPULAR" : undefined}><span className="mb-3 block text-2xl font-black">{size.name}</span><span className="block font-bold">From {size.price}</span><span className="mt-2 block text-sm text-muted-foreground">{size.use}<br />≈ {size.loads}</span></OptionCard>)}
                  </div>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["A few items", "About half a truck", "A full truck or more"].map((size) => <OptionCard key={size} selected={data.size === size} onClick={() => update("size", size)}><span className="block text-lg font-black">{size}</span><span className="mt-2 block text-sm text-muted-foreground">We’ll confirm the final price before work begins.</span></OptionCard>)}
                  </div>
                )}
                {errors.size && <ErrorText>{errors.size}</ErrorText>}
                {data.service === "Junk Removal" && (
                  <div className="mt-5 rounded-md border border-dashed border-border bg-muted/50 p-4">
                    <label className="flex min-h-12 cursor-pointer items-center justify-center gap-2 font-bold text-foreground" htmlFor="junk-photos"><ImagePlus className="size-5 text-primary" /> Add up to 3 photos<input id="junk-photos" type="file" accept="image/*" multiple className="sr-only" onChange={onPhotos} /></label>
                    {photos.length > 0 && <div className="mt-3 flex justify-center gap-2">{photos.map((photo) => <img key={photo} src={photo} alt="Junk quote preview" className="size-20 rounded-md object-cover" />)}</div>}
                  </div>
                )}
              </FlowStep>
            )}

            {step === 4 && (
              <FlowStep title="When works for you?" subtitle="Choose a preferred date. We’ll confirm your arrival window.">
                <label className="mx-auto block max-w-md font-bold" htmlFor="quote-date">Preferred service date</label>
                <div className="relative mx-auto mt-2 max-w-md"><CalendarDays className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" /><input id="quote-date" type="date" min={minDate} value={data.date} onChange={(e) => update("date", e.target.value)} className="h-14 w-full rounded-md border border-input bg-background pl-12 pr-4 text-base font-bold outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></div>
                {errors.date && <ErrorText>{errors.date}</ErrorText>}
                <div className="mx-auto mt-5 flex max-w-md items-start gap-3 rounded-md bg-primary/10 p-4 text-sm"><Check className="mt-0.5 size-5 shrink-0 text-primary" /><span><strong>Flexible scheduling.</strong> Same-day or next-day service may be available.</span></div>
              </FlowStep>
            )}

            {step === 5 && (
              <FlowStep title="Where should we send your quote?" subtitle="Your information stays private. We’ll only use it for this request.">
                <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
                  <Field id="quote-name" label="Full name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} autoComplete="name" />
                  <Field id="quote-phone" label="Phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} autoComplete="tel" />
                  <div className="sm:col-span-2"><Field id="quote-email" label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} autoComplete="email" /></div>
                  <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">Anything else we should know? <span className="font-normal text-muted-foreground">Optional</span></span><textarea maxLength={500} value={data.notes} onChange={(e) => update("notes", e.target.value)} className="min-h-24 w-full rounded-md border border-input bg-background p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Access details, items, or project notes" /></label>
                </div>
              </FlowStep>
            )}

            {step === 6 && (
              <div className="mx-auto flex max-w-xl flex-col items-center py-5 text-center">
                <span className="grid size-20 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-10" strokeWidth={3} /></span>
                <span className="eyebrow mt-6 text-primary">REQUEST RECEIVED</span>
                <h3 className="mt-2 font-display text-3xl font-black">You’re on the way to a clear space.</h3>
                <p className="mt-4 text-muted-foreground">Thanks, {data.name}. We’ll review your {data.service?.toLowerCase()} request and reach out shortly to confirm pricing and availability.</p>
                <div className="mt-6 grid w-full grid-cols-2 gap-3 rounded-md bg-muted p-4 text-left text-sm"><span><small className="block text-muted-foreground">Service</small><strong>{data.service}</strong></span><span><small className="block text-muted-foreground">Preferred date</small><strong>{data.date}</strong></span></div>
                <Button className="mt-6" variant="outline" onClick={restart}>Start another request</Button>
              </div>
            )}
          </div>

          {step > 1 && step < 6 && (
            <div className="grid grid-cols-2 gap-3 border-t border-border p-4 sm:flex sm:justify-between sm:px-8">
              <Button variant="ghost" onClick={() => setStep((current) => current - 1)}><ArrowLeft className="size-4" /> Back</Button>
              <Button onClick={next}>{step === 5 ? "Request my quote" : "Continue"} {step === 5 ? <LoaderCircle className={cn("size-4", submitted && "animate-spin")} /> : <ArrowRight className="size-4" />}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <div className="animate-fade-in"><div className="mb-7 text-center"><h3 className="font-display text-2xl font-black sm:text-3xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground sm:text-base">{subtitle}</p></div>{children}</div>;
}

function OptionCard({ selected, onClick, badge, children }: { selected: boolean; onClick: () => void; badge?: string | undefined; children: React.ReactNode }) {
  return <button type="button" onClick={onClick} className={cn("relative min-h-36 rounded-md border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", selected ? "border-primary bg-primary/10 ring-1 ring-primary" : "border-border hover:border-primary")}>
    {badge && <span className="absolute right-2 top-2 rounded-sm bg-accent px-2 py-1 text-[9px] font-black text-accent-foreground">{badge}</span>}{children}{selected && <Check className="absolute bottom-3 right-3 size-5 text-primary" />}
  </button>;
}

function ErrorText({ children }: { children: React.ReactNode }) { return <p role="alert" className="mx-auto mt-3 flex max-w-md items-center justify-center gap-1 text-sm font-bold text-destructive"><X className="size-4" />{children}</p>; }

function Field({ id, label, value, onChange, error, type = "text", autoComplete }: { id: string; label: string; value: string; onChange: (value: string) => void; error?: string | undefined; type?: string; autoComplete?: string }) {
  return <label htmlFor={id}><span className="mb-2 block text-sm font-bold">{label}</span><input id={id} type={type} autoComplete={autoComplete} value={value} onChange={(e) => onChange(e.target.value)} className={cn("h-12 w-full rounded-md border bg-background px-3 outline-none focus:ring-2 focus:ring-primary/20", error ? "border-destructive" : "border-input focus:border-primary")} />{error && <span className="mt-1 block text-xs font-bold text-destructive">{error}</span>}</label>;
}