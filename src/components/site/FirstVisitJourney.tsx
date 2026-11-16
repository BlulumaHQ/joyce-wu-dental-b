import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, ClipboardList, MapPin, MessageCircle, Phone } from "lucide-react";
import { FIRST_VISIT_STEPS, PATIENT_INTERACTIONS } from "@/content/pages";
import { CLINIC, routeTo, UI, type Lang } from "@/content/site";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonStyles } from "./Button";
import { SectionHeading } from "./Blocks";

const ICONS = { contact: MessageCircle, confirm: CalendarCheck, prepare: ClipboardList, visit: MapPin };

export function FirstVisitJourney({ lang, children }: { lang: Lang; children?: ReactNode }) {
  const c = PATIENT_INTERACTIONS[lang].journey;
  return (
    <section aria-labelledby="first-visit-title" className="bg-background section-space">
      <div className="container-page">
        <div id="first-visit-title"><SectionHeading eyebrow={c.eyebrow} title={c.title} body={c.description} /></div>
        <Tabs defaultValue="contact" activationMode="automatic" className="mt-10">
          <TabsList aria-label={c.title} className="relative grid h-auto grid-cols-1 items-stretch gap-x-4 gap-y-5 rounded-none bg-transparent p-0 md:grid-cols-4 md:gap-x-6">
            <span aria-hidden className="absolute inset-x-8 top-3 hidden h-px bg-champagne md:block" />
            {FIRST_VISIT_STEPS.map((key, i) => {
              const Icon = ICONS[key];
              return (
                <TabsTrigger key={key} value={key} className="group relative flex min-h-36 flex-col items-start justify-start gap-3 whitespace-normal rounded-none border border-transparent px-2 py-0 text-primary-deep shadow-none transition-colors duration-200 hover:text-champagne-ink data-[state=active]:bg-transparent data-[state=active]:text-primary-deep data-[state=active]:shadow-none">
                  <span aria-hidden className="relative mt-1 size-4 rounded-full border border-champagne bg-background transition-colors group-data-[state=active]:bg-champagne" />
                  <span className="font-display text-[27px] italic text-champagne-ink">{lang === "en" ? ["One", "Two", "Three", "Four"][i] : ["一", "二", "三", "四"][i]}</span>
                  <span className="font-display text-[27px] font-medium leading-tight">{c.steps[key].title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {FIRST_VISIT_STEPS.map((key) => (
            <TabsContent key={key} value={key} className="interaction-reveal mt-6 min-h-72 border-y py-6 sm:min-h-52 md:min-h-44">
              <h3 className="font-display text-[30px] font-medium">{c.steps[key].title}</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-foreground">{c.steps[key].description}</p>
              {key === "contact" && <a href={CLINIC.phoneHref} className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline underline-offset-4"><Phone aria-hidden className="size-4" />{CLINIC.phoneDisplay}</a>}
              {key === "visit" && <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline underline-offset-4"><MapPin aria-hidden className="size-4" />{UI[lang].directions}</a>}
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-primary/20 pt-6 sm:flex-row sm:items-center">
          <p className="font-display text-lg font-semibold text-primary-deep">{c.question}</p>
          <Link to={routeTo("contact", lang)} className={buttonStyles()}>{c.contact}<ArrowRight aria-hidden className="size-4" /></Link>
        </div>
        {children}
      </div>
    </section>
  );
}