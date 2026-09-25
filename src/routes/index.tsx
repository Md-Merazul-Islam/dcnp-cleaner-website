import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  CalendarDays,
  Check,
  Clock3,
  HeartHandshake,
  MapPin,
  PackageOpen,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

import { Brand } from "@/components/Brand";
import { Faq } from "@/components/Faq";
import { MobileBar } from "@/components/MobileBar";
import { QuoteFlow } from "@/components/QuoteFlow";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dumpster.jpg";
import beforeImage from "@/assets/garage-before.jpg";
import afterImage from "@/assets/garage-after.jpg";
import crewImage from "@/assets/crew-moving.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClearPath Haul & Home | Dumpster Rental & Junk Removal" },
      { name: "description", content: "Simple, upfront dumpster rental, junk removal, moving, and cleanout services. Get a fast local quote and book your preferred date." },
      { property: "og:title", content: "ClearPath Haul & Home | Clear Space, Zero Stress" },
      { property: "og:description", content: "Fast local dumpster rental and full-service junk removal with upfront pricing and friendly crews." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Box, title: "Dumpster Rental", text: "Driveway-friendly bins delivered when and where you need them.", price: "From $329" },
  { icon: Truck, title: "Junk Removal", text: "Point to what goes. Our friendly crew handles every lift and load.", price: "Free onsite quote" },
  { icon: PackageOpen, title: "Moving", text: "Careful local moving help for apartments, homes, and small offices.", price: "From $149/hr" },
  { icon: Sparkles, title: "Cleanouts", text: "Fast, respectful cleanouts for garages, estates, rentals, and more.", price: "Get a custom quote" },
];

function HomePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden pb-18 sm:pb-0">
      <SiteHeader />
      <main>
        <section className="relative min-h-[680px] bg-foreground sm:min-h-[700px]">
          <img src={heroImage} alt="ClearPath crew delivering a green dumpster to a home" width={1600} height={1104} className="absolute inset-0 size-full object-cover object-[63%_center] opacity-55 sm:opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--foreground)_0%,color-mix(in_oklab,var(--foreground)_88%,transparent)_43%,color-mix(in_oklab,var(--foreground)_15%,transparent)_100%)]" />
          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-16 sm:min-h-[700px] sm:px-6">
            <div className="max-w-2xl text-background">
              <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-background/25 bg-foreground/40 px-3 py-2 text-xs font-extrabold backdrop-blur-sm"><span className="flex text-primary" aria-label="5 stars">★★★★★</span> 4.9 from 600+ local jobs</div>
              <p className="eyebrow text-primary">LOCAL. RELIABLE. REFRESHINGLY SIMPLE.</p>
              <h1 className="mt-4 font-display text-5xl font-black leading-[0.94] sm:text-7xl lg:text-8xl">Clear space.<br /><span className="text-primary">Zero stress.</span></h1>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-background/85 sm:text-xl">Dumpster rental, junk removal, moving, and cleanouts—with upfront answers and a crew that shows up.</p>
              <div className="mt-8 grid gap-3 sm:flex">
                <Button asChild size="lg"><a href="#quote">Get my free quote <ArrowRight className="size-5" /></a></Button>
                <Button asChild size="lg" variant="outline" className="border-background/40 bg-background/10 text-background hover:bg-background hover:text-foreground"><a href="tel:+17195550148"><Phone className="size-5" /> (719) 555-0148</a></Button>
              </div>
              <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-t border-background/20 pt-5 text-xs font-bold text-background/80 sm:text-sm">
                <span className="flex gap-2"><Check className="size-4 shrink-0 text-primary" />Upfront pricing</span>
                <span className="flex gap-2"><Check className="size-4 shrink-0 text-primary" />Fast scheduling</span>
                <span className="flex gap-2"><Check className="size-4 shrink-0 text-primary" />Fully insured</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-primary-foreground/15 sm:grid-cols-4">
            {["Locally owned", "Driveway safe", "Same-day options", "No hidden fees"].map((item, index) => <div key={item} className="flex min-h-20 items-center justify-center gap-2 bg-primary px-3 text-center text-sm font-black"><Check className="size-4" />{item}{index < 3 && <span className="sr-only">verified</span>}</div>)}
          </div>
        </section>

        <section id="services" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-end gap-5 sm:grid-cols-[1fr_auto]">
              <div><span className="eyebrow text-accent">ONE TEAM, FOUR WAYS TO HELP</span><h2 className="mt-3 max-w-2xl font-display text-4xl font-black leading-none sm:text-5xl">Whatever needs to go, we’ve got it.</h2></div>
              <p className="max-w-md text-muted-foreground">Start with the service that fits. We’ll help with the details before anything is booked.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text, price }, index) => <article key={title} className="group flex min-h-72 flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                <span className="mb-8 flex items-center justify-between"><span className="grid size-12 place-items-center rounded-md bg-primary/15 text-primary"><Icon className="size-6" /></span><span className="font-display text-4xl font-black text-muted">0{index + 1}</span></span>
                <h3 className="font-display text-xl font-black">{title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><strong className="text-sm">{price}</strong><a href="#quote" className="grid size-10 place-items-center rounded-full bg-foreground text-background" aria-label={`Get a ${title} quote`}><ArrowRight className="size-4" /></a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="eyebrow text-accent">STRAIGHT ANSWERS, FAIR PRICES</span>
              <h2 className="mt-3 font-display text-4xl font-black leading-none sm:text-5xl">The right size.<br />No guesswork.</h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Our compact bins fit where big roll-offs won’t. Every rental includes delivery, pickup, a standard rental window, and driveway protection when needed.</p>
              <ul className="mt-7 space-y-3 text-sm font-bold">{["Walk-in doors for easy loading", "Clear weight allowance before booking", "Friendly local support from start to pickup"].map((item) => <li key={item} className="flex gap-3"><Check className="size-5 text-primary" />{item}</li>)}</ul>
              <Button asChild className="mt-8"><a href="#quote">Find my size <ArrowRight className="size-4" /></a></Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[{ size: "6 yard", price: "$329", loads: "≈ 2 pickup loads" }, { size: "10 yard", price: "$399", loads: "≈ 4 pickup loads", popular: true }, { size: "15 yard", price: "$479", loads: "≈ 6 pickup loads" }, { size: "20 yard", price: "$559", loads: "≈ 8 pickup loads" }].map((bin) => <article key={bin.size} className="relative overflow-hidden rounded-lg border border-border bg-background p-5 shadow-sm">{bin.popular && <span className="absolute right-0 top-0 bg-accent px-3 py-1 text-[10px] font-black text-accent-foreground">POPULAR</span>}<div className="relative mb-5 h-20"><div className="absolute bottom-0 left-0 h-14 w-28 skew-x-[-5deg] rounded-sm border-4 border-foreground bg-primary" /><div className="absolute bottom-3 left-3 h-8 w-22 border-x-2 border-foreground/50" /></div><h3 className="font-display text-2xl font-black">{bin.size}</h3><p className="text-sm text-muted-foreground">{bin.loads}</p><p className="mt-4 text-sm">Starting at <strong className="text-xl">{bin.price}</strong></p></article>)}
            </div>
          </div>
        </section>

        <QuoteFlow />

        <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center"><span className="eyebrow text-accent">SIMPLE FROM START TO FINISH</span><h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Three steps. Then it’s gone.</h2></div>
            <div className="relative mt-12 grid gap-8 sm:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-border sm:block" />
              {[{ icon: MapPin, n: "01", title: "Tell us where", text: "Choose a service and enter your ZIP so we can confirm availability." }, { icon: CalendarDays, n: "02", title: "Pick your date", text: "Select a preferred day and get clear pricing before you commit." }, { icon: Check, n: "03", title: "Consider it handled", text: "Our local crew arrives on time and leaves your space clear." }].map(({ icon: Icon, n, title, text }) => <article key={title} className="relative text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-foreground text-background ring-8 ring-background"><Icon className="size-6" /></span><span className="eyebrow mt-5 block text-primary">STEP {n}</span><h3 className="mt-2 font-display text-xl font-black">{title}</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-foreground py-16 text-background sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg"><img src={crewImage} alt="ClearPath moving crew carrying a sofa" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" /><span className="absolute bottom-4 left-4 rounded-md bg-primary px-4 py-3 text-sm font-black text-primary-foreground">PROS WHO CARE</span></div>
            <div className="lg:pl-8"><span className="eyebrow text-primary">WHY CLEARPATH</span><h2 className="mt-3 font-display text-4xl font-black leading-none sm:text-5xl">Good people.<br />Seriously good service.</h2><p className="mt-5 max-w-lg leading-relaxed text-background/70">We built ClearPath around the things customers told us matter most: honest estimates, quick communication, careful work, and no surprises.</p><div className="mt-8 grid gap-5 sm:grid-cols-2">{[{ icon: ShieldCheck, t: "Fully insured", p: "Your home and project are protected." }, { icon: Clock3, t: "On-time windows", p: "Real updates, not all-day guessing." }, { icon: HeartHandshake, t: "Respectful crews", p: "Friendly professionals in your space." }, { icon: BadgeCheck, t: "Price confirmed", p: "Know the total before work starts." }].map(({ icon: Icon, t, p }) => <div key={t} className="flex gap-3"><Icon className="size-6 shrink-0 text-primary" /><span><strong className="block">{t}</strong><span className="text-sm text-background/60">{p}</span></span></div>)}</div></div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-end gap-4 sm:grid-cols-2"><div><span className="eyebrow text-accent">REAL RESULTS</span><h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">From overwhelmed to wide open.</h2></div><p className="text-muted-foreground sm:text-right">Garage cleanout completed in one afternoon.</p></div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2"><figure className="relative overflow-hidden rounded-lg"><img src={beforeImage} alt="Cluttered garage before cleanout" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" /><figcaption className="absolute left-4 top-4 rounded-sm bg-foreground px-3 py-2 text-xs font-black text-background">BEFORE</figcaption></figure><figure className="relative overflow-hidden rounded-lg"><img src={afterImage} alt="Empty clean garage after cleanout" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" /><figcaption className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-2 text-xs font-black text-primary-foreground">AFTER</figcaption></figure></div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="text-center"><span className="eyebrow text-accent">NEIGHBORS HELPING NEIGHBORS</span><h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Clear space. Happy people.</h2><div className="mt-4 flex justify-center gap-1 text-accent" aria-label="4.9 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-current" />)}</div><p className="mt-2 font-bold">4.9 average from 600+ local jobs</p></div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">{[
              ["The easiest part of our renovation", "They placed the bin exactly where we needed it, protected the driveway, and picked it up right on time.", "Maya R.", "Dumpster rental"],
              ["Worth every penny", "I sent photos, got a clear quote, and the crew cleared our garage in under two hours. Friendly and careful.", "Daniel K.", "Garage cleanout"],
              ["Fast, kind, professional", "They helped my mom move and took away the items she no longer needed. It could not have gone more smoothly.", "Leah T.", "Moving & removal"],
            ].map(([title, text, name, service]) => <blockquote key={name} className="rounded-lg border border-border bg-background p-6 shadow-sm"><div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div><p className="mt-5 font-display text-xl font-black">“{title}”</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p><footer className="mt-6 border-t border-border pt-4 text-sm"><strong>{name}</strong><span className="ml-2 text-muted-foreground">{service}</span></footer></blockquote>)}</div>
          </div>
        </section>

        <section id="areas" className="scroll-mt-20 py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr]"><div><span className="eyebrow text-accent">PROUDLY LOCAL</span><h2 className="mt-3 font-display text-4xl font-black leading-none sm:text-5xl">Right around the corner.</h2><p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Local crews serving Colorado Springs and nearby communities. Enter your ZIP for exact availability.</p><Button asChild className="mt-7"><a href="#quote"><MapPin className="size-4" />Check my address</a></Button></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{["Colorado Springs", "Manitou Springs", "Fountain", "Monument", "Security-Widefield", "Falcon", "Black Forest", "Woodland Park", "Peyton"].map((area) => <div key={area} className="flex min-h-14 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-bold"><MapPin className="size-4 shrink-0 text-primary" />{area}</div>)}</div></div></section>

        <section className="border-y border-border bg-secondary py-16 sm:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="text-center"><span className="eyebrow text-accent">QUESTIONS, ANSWERED</span><h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Good to know.</h2><p className="mt-4 text-muted-foreground">Everything you need before booking.</p></div><div className="mt-10"><Faq /></div></div></section>

        <section className="bg-primary py-14 text-primary-foreground"><div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:grid-cols-[1fr_auto] sm:px-6"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">Let’s make room for what matters.</h2></div><div className="grid gap-3 sm:flex"><Button asChild size="lg" variant="dark"><a href="#quote">Get a free quote <ArrowRight className="size-5" /></a></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent"><a href="tel:+17195550148"><Phone className="size-5" />Call us</a></Button></div></div></section>
      </main>

      <footer className="bg-foreground pb-24 pt-12 text-background sm:pb-12"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-[1.4fr_1fr_1fr] sm:px-6"><div><Brand /><p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">Straightforward local help for the heavy, messy, and just-need-it-gone moments.</p></div><div><h3 className="font-bold">Services</h3><ul className="mt-3 space-y-2 text-sm text-background/60"><li>Dumpster rental</li><li>Junk removal</li><li>Moving</li><li>Cleanouts</li></ul></div><div><h3 className="font-bold">Talk to a human</h3><a href="tel:+17195550148" className="mt-3 flex min-h-11 items-center gap-2 font-black text-primary"><Phone className="size-4" />(719) 555-0148</a><p className="text-sm text-background/60">Mon–Sat · 7am–7pm</p></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-background/15 px-4 pt-6 text-xs text-background/45 sm:px-6">© 2026 ClearPath Haul &amp; Home. All rights reserved.</div></footer>
      <MobileBar />
    </div>
  );
}