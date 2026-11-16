import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, HeartPulse, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { FINDER_OPTIONS, PATIENT_INTERACTIONS, SERVICES } from "@/content/pages";
import { routeTo, type Lang } from "@/content/site";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonStyles } from "./Button";
import { SectionHeading } from "./Blocks";

const ICONS = { general: CalendarCheck, cosmetic: Sparkles, implant: ShieldCheck, surgical: HeartPulse };

export function DentalServiceFinder({ lang }: { lang: Lang }) {
  const [selected, setSelected] = useState("");
  const c = PATIENT_INTERACTIONS[lang].finder;
  return (
    <section aria-labelledby="service-finder-title" className="bg-secondary section-space">
      <div className="container-page">
        <Tabs value={selected} onValueChange={setSelected} activationMode="manual" className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div><div id="service-finder-title"><SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.description} /></div>
          <TabsList aria-label={c.title} className="mt-8 grid h-auto grid-cols-1 items-stretch gap-3 rounded-none bg-transparent p-0">
            {FINDER_OPTIONS.map((key) => {
              const Icon = ICONS[key];
              return (
                <TabsTrigger key={key} value={key} className="group relative flex min-h-16 justify-start gap-4 whitespace-normal rounded-2xl border bg-background px-5 py-4 text-left text-primary shadow-none transition-colors duration-200 hover:border-primary/50 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-on-dark data-[state=active]:shadow-none">
                  <Icon aria-hidden className="size-6 shrink-0 text-current transition-transform duration-200 group-data-[state=active]:scale-110" strokeWidth={1.5} />
                  <span className="text-[17px] font-medium leading-snug">{c.options[key].label}</span>
                  {selected === key && <Check aria-hidden className="absolute right-4 top-5 size-4 text-current" />}
                </TabsTrigger>
              );
            })}
          </TabsList></div>
          <div className="min-h-[480px] rounded-[28px] bg-background p-6 shadow-soft md:p-10">
            {!selected && <div><p className="eyebrow">{c.eyebrow}</p><h3 className="mt-6 font-display text-[38px] leading-tight">{c.title}</h3><p className="mt-5 text-muted-foreground">{c.description}</p><Stethoscope aria-hidden className="mt-12 size-16 text-champagne" strokeWidth={1} /></div>}
          {FINDER_OPTIONS.map((key) => (
            <TabsContent key={key} value={key} className="interaction-reveal m-0 min-h-[330px]">
              <div aria-live="polite" aria-atomic="true">
                <p className="eyebrow">{c.options[key].label}</p>
                <h3 className="mt-4 font-display text-[38px] font-medium leading-tight">{c.options[key].title}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{c.options[key].description}</p>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted-foreground">{SERVICES[key][lang].sections.map(t => <li key={t.id} className="flex items-start gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-champagne" />{t.title}</li>)}</ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to={routeTo(key, lang)} className={buttonStyles()}>{c.explore}<ArrowRight aria-hidden className="size-4" /></Link>
                <Link to={routeTo("contact", lang)} className={buttonStyles({ variant: "outline" })}>{c.contact}</Link>
              </div>
            </TabsContent>
          ))}
          <p className="mt-6 border-t pt-5 text-sm leading-relaxed text-muted-foreground">{c.disclaimer}</p>
          </div>
        </Tabs>
      </div>
    </section>
  );
}