import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CreditCard, MapPin, ShieldCheck, Stethoscope, Sparkles, HeartPulse, CircleDot } from "lucide-react";
import { FAQS, META, SERVICES } from "@/content/pages";
import { HOURS, DOCTORS, routeTo, SERVICE_KEYS, UI, type Lang } from "@/content/site";
import { buttonStyles } from "@/components/site/Button";
import { ContactSection, FaqList, SectionHeading, Testimonials } from "@/components/site/Blocks";
import { cn } from "@/lib/utils";
import { DentalServiceFinder } from "@/components/site/DentalServiceFinder";
import { FirstVisitJourney } from "@/components/site/FirstVisitJourney";

const C = {
  en: {
    heroEyebrow: "Dentist · Kerrisdale, Vancouver",
    welcomeEyebrow: "Welcome",
    welcomeTitle: "Welcome to Dr. Joyce Wu Dental Kerrisdale",
    welcome: [
      "Your health and safety are our top priorities. We are committed to providing a safe and comfortable dental experience every time you visit our Balsam Street office.",
      "Our team of four dentists offers general, cosmetic, surgical and implant dentistry under one roof, taking time to explain treatment options so you can make informed decisions about your care.",
    ],
    safetyTitle: "Infection control, every visit",
    safety:
      "Our staff train regularly on current sterilization and hygiene practices. Each treatment room is thoroughly sanitized between patients, instruments are sterilized, and disposable materials are used wherever possible.",
    aboutLink: "About our clinic",
    servicesEyebrow: "Our Dental Services",
    servicesTitle: "Care for every stage of your smile",
    whyEyebrow: "Why Patients Choose Us",
    whyTitle: "A neighbourhood practice, with the range of a larger clinic",
    why: [
      { icon: MapPin, t: "Convenient Kerrisdale location", d: "Find us at 5763 Balsam St, in the heart of Kerrisdale, Vancouver." },
      { icon: Stethoscope, t: "Four areas of dentistry", d: "General, cosmetic, surgical and implant care provided by our team of four dentists." },
      { icon: ShieldCheck, t: "Careful infection control", d: "Rooms sanitized between patients and instruments sterilized for every visit." },
      { icon: CreditCard, t: "Insurance & CDCP support", d: "We accept most dental insurance plans and the Canada Dental Care Plan, and can submit predeterminations." },
    ],
    teamEyebrow: "Meet Our Dental Team",
    teamTitle: "The dentists behind your care",
    teamLink: "Meet the team",
    npEyebrow: "New Patients & Insurance",
    npTitle: "Getting started with us",
    np: [
      { t: "New patient inquiries", d: "Call us or send an inquiry. Our team will follow up to find a suitable appointment time." },
      { t: "Dental insurance", d: "We accept most plans and are happy to help check coverage or submit a predetermination. Please bring your current coverage details." },
      { t: "Canada Dental Care Plan", d: "Our office gladly accepts the CDCP. Eligibility is determined by the Government of Canada." },
      { t: "Before your visit", d: "We ask for at least 24 hours' notice if you need to change or cancel an appointment." },
    ],
    cdcpLink: "Canada Dental Care Plan",
    policyLink: "Office policies",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked",
    faqLink: "View all FAQs",
  },
  zh: {
    heroEyebrow: "牙科診所 · 溫哥華 Kerrisdale",
    welcomeEyebrow: "歡迎",
    welcomeTitle: "歡迎蒞臨 Dr. Joyce Wu Dental Kerrisdale",
    welcome: [
      "您的健康與安全是我們的首要考慮。每次您到訪我們位於 Balsam Street 的診所，我們都致力為您提供安全、舒適的牙科體驗。",
      "我們由四位牙醫組成的團隊，在同一診所提供一般牙科、美容牙科、牙科手術及植牙服務，並會詳細說明治療選擇，讓您在了解後作出決定。",
    ],
    safetyTitle: "每次看診，嚴格感染控制",
    safety: "我們的員工定期接受最新消毒及衛生規範培訓。每間治療室在患者之間均徹底消毒，器械經嚴格消毒處理，並盡可能使用一次性物料。",
    aboutLink: "關於我們的診所",
    servicesEyebrow: "我們的牙科服務",
    servicesTitle: "照顧笑容的每一個階段",
    whyEyebrow: "患者選擇我們的原因",
    whyTitle: "社區診所的親切，大型診所的服務範圍",
    why: [
      { icon: MapPin, t: "Kerrisdale 便利位置", d: "診所位於溫哥華 Kerrisdale 核心地段 5763 Balsam St。" },
      { icon: Stethoscope, t: "四大牙科範疇", d: "由四位牙醫組成的團隊提供一般、美容、手術及植牙治療。" },
      { icon: ShieldCheck, t: "嚴謹感染控制", d: "治療室於患者之間徹底消毒，每次看診的器械均經消毒處理。" },
      { icon: CreditCard, t: "保險及 CDCP 協助", d: "接受大多數牙科保險及加拿大牙科護理計劃，並可代為提交預估申請。" },
    ],
    teamEyebrow: "認識我們的牙醫團隊",
    teamTitle: "為您護理的醫師",
    teamLink: "認識團隊",
    npEyebrow: "新患者及保險",
    npTitle: "首次看診須知",
    np: [
      { t: "新患者查詢", d: "歡迎致電或提交查詢，我們的團隊會與您聯絡，安排合適的看診時間。" },
      { t: "牙科保險", d: "我們接受大多數保險計劃，樂意協助確認保障或提交預估申請。請攜帶最新的保險資料。" },
      { t: "加拿大牙科護理計劃", d: "本診所欣然接受 CDCP。申請資格由加拿大政府決定。" },
      { t: "看診前", d: "如需更改或取消預約，請至少提前 24 小時通知我們。" },
    ],
    cdcpLink: "加拿大牙科護理計劃",
    policyLink: "診所政策",
    faqEyebrow: "常見問題",
    faqTitle: "患者常問",
    faqLink: "查看全部問題",
  },
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const c = C[lang];
  const ui = UI[lang];
  const m = META.home[lang];

  return (
    <>
      <section className="bg-background py-14 md:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div className="fade-up">
            <p className="eyebrow">{c.heroEyebrow}</p>
            <h1 className="page-heading mt-6 text-primary">{m.h1.split("Kerrisdale").map((part, i) => <span key={i}>{i > 0 && <em className="font-medium text-champagne-ink">Kerrisdale</em>}{part}</span>)}</h1>
            <p className="mt-6 max-w-xl text-muted-foreground">{m.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to={routeTo("contact", lang)} hash="inquiry" className={buttonStyles({ size: "lg" })}>{ui.request}<ArrowUpRight aria-hidden className="size-4" /></Link>
              <Link to={routeTo("home", lang)} hash="services" className={buttonStyles({ variant: "outline", size: "lg" })}>{ui.explore}</Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-b border-border pb-6">
              <div><dt className="font-display text-[30px] leading-tight text-primary">4</dt><dd className="mt-1 text-[13px] text-muted-foreground">{lang === "en" ? "dentists, one clinic" : "位牙醫，同一診所"}</dd></div>
              <div><dt className="font-display text-[30px] leading-tight text-primary">{lang === "en" ? "Sat" : "週六"}</dt><dd className="mt-1 text-[13px] text-muted-foreground">{lang === "en" ? "appointments available" : "提供看診預約"}</dd></div>
              <div><dt className="font-display text-[30px] leading-tight text-primary">CDCP</dt><dd className="mt-1 text-[13px] text-muted-foreground">{lang === "en" ? "& most insurance plans" : "及大多數保險計劃"}</dd></div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-[470px] pb-8 pr-[22px] lg:pb-0">
            <div aria-hidden className="hero-arch absolute inset-y-0 left-[22px] right-0 border border-champagne" />
            <img src="/images/clinic-reception-kerrisdale.webp" alt={lang === "en" ? "Reception desk at Dr. Joyce Wu Dental Kerrisdale" : "Dr. Joyce Wu Dental Kerrisdale 診所接待處"} width={1200} height={630} fetchPriority="high" className="hero-arch relative w-full object-cover" />
            <div className="absolute bottom-0 left-0 flex max-w-[95%] items-center gap-3 rounded-2xl border bg-background p-4 shadow-soft lg:-left-8 lg:bottom-7">
              <img src="/images/jwd-logo-mark.svg" alt="" width={48} height={48} className="size-12 shrink-0" />
              <div><p className="font-display text-2xl font-semibold text-primary">{lang === "en" ? "Open Saturdays" : "星期六營業"}</p><p className="text-xs text-muted-foreground">{HOURS.find(h => h.schema === "Saturday")?.label[lang]} · {lang === "en" ? "Closed Wed & Sun" : "星期三、日休息"}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-space bg-primary text-on-dark">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img src="/images/clinic-waiting-area.webp" alt={lang === "en" ? "Bright patient waiting area with large windows" : "光線充足的候診區"} width={585} height={444} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <img src="/images/clinic-treatment-room.webp" alt={lang === "en" ? "Treatment room with dental chair" : "設有牙科椅的治療室"} width={585} height={444} loading="lazy" className="absolute -bottom-10 -right-4 hidden w-[46%] rounded-xl border-[6px] border-primary object-cover shadow-lift sm:block md:-right-8" />
          </div>
          <div>
            <p className="eyebrow eyebrow-dark">{c.welcomeEyebrow}</p>
            <h2 className="editorial-title mt-4 text-on-dark">{c.whyTitle}</h2>
            <p className="mt-5 font-display text-2xl text-gold-light">{c.welcomeTitle}</p>
            {c.welcome.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-on-dark-muted">
                {p}
              </p>
            ))}
            <div className="mt-8 rounded-2xl border border-on-dark/15 bg-on-dark/5 p-5">
              <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-on-dark">
                <ShieldCheck className="size-5 text-gold-light" aria-hidden /> {c.safetyTitle}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-on-dark-muted">{c.safety}</p>
            </div>
            <Link to={routeTo("about", lang)} className={cn(buttonStyles({ variant: "ghostDark" }), "mt-8")}>
              {c.aboutLink} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <DentalServiceFinder key={`finder-${lang}`} lang={lang} />

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-background section-space">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={c.servicesEyebrow} title={c.servicesTitle} />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_KEYS.map((k, idx) => {
              const s = SERVICES[k][lang];
              return (
                <Link
                  key={k}
                  to={routeTo(k, lang)}
                  className="group flex min-h-[420px] flex-col rounded-[24px] border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">{idx === 0 ? <Stethoscope strokeWidth={1.3} /> : idx === 1 ? <Sparkles strokeWidth={1.3} /> : idx === 2 ? <HeartPulse strokeWidth={1.3} /> : <CircleDot strokeWidth={1.3} />}</span>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-6 font-display text-[30px] font-medium leading-[1.1]">{ui.pageName[k]}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.card}</p>
                    <ul className="mt-5 flex-1 space-y-2 border-t pt-5 text-[14px] text-muted-foreground">{s.sections.map(t => <li key={t.id}>{t.title}</li>)}</ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-champagne-ink">{ui.viewServices}<ArrowRight className="size-4" aria-hidden /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-space bg-secondary">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={c.whyEyebrow} title={c.whyTitle} />
            <img src="/images/clinic-treatment-room-map.webp" alt={lang === "en" ? "Treatment room with world-map wall feature" : "設有世界地圖牆飾的治療室"} width={585} height={444} loading="lazy" className="mt-10 aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
          <ul className="grid gap-px self-center overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
            {c.why.map((w) => (
              <li key={w.t} className="bg-secondary p-8">
                <w.icon className="size-6 text-champagne" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 font-display text-[27px] font-medium text-primary">{w.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{w.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-primary-deep">
        <div className="container-page">
          <SectionHeading eyebrow={c.teamEyebrow} title={c.teamTitle} center dark />
          <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map(d => <li key={d.name}>
              <Link to={routeTo("team", lang)} className="group block">
                <img src={d.image} alt={`${d.name}, ${d.designation}`} width={800} height={800} loading="lazy" className="portrait-arch w-full object-cover transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-6 font-display text-[27px] font-medium text-on-dark">{d.name}</h3>
                <p className="mt-1 text-[13px] tracking-[0.18em] text-gold-light">{d.designation}</p>
                {d.name === "Dr. Miles Chu" && <p className="mt-3 text-sm text-on-dark-muted">{lang === "en" ? "Nobel Biocare implants" : "Nobel Biocare 植體"}</p>}
              </Link>
            </li>)}
          </ul>
          <div className="mt-10 text-center"><Link to={routeTo("team", lang)} className={buttonStyles({ variant: "ghostDark" })}>{c.teamLink}<ArrowRight className="size-4" aria-hidden /></Link></div>
        </div>
      </section>

      {/* New patients */}
      <FirstVisitJourney key={`journey-${lang}`} lang={lang}>
        <div className="mt-12 border-t pt-8">
          <div>
            <SectionHeading eyebrow={c.npEyebrow} title={c.npTitle} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={routeTo("cdcp", lang)} className={buttonStyles()}>
                {c.cdcpLink}
              </Link>
              <Link to={routeTo("about", lang)} className={buttonStyles({ variant: "outline" })}>
                {c.policyLink}
              </Link>
            </div>
          </div>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {c.np.map((n, i) => (
              <li key={n.t} className={cn("rounded-2xl bg-secondary p-6", i === 0 && "md:col-span-3")}>
                <span className="font-display text-3xl font-light text-champagne-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-[27px] font-medium">{n.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{n.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </FirstVisitJourney>

      <Testimonials lang={lang} />

      {/* FAQ */}
      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeading eyebrow={c.faqEyebrow} title={c.faqTitle} />
            <Link to={routeTo("faq", lang)} className={cn(buttonStyles({ variant: "outline" }), "mt-8")}>
              {c.faqLink} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <FaqList items={FAQS[lang].slice(0, 4)} lang={lang} />
        </div>
      </section>

      <div className="border-t">
        <ContactSection lang={lang} compact />
      </div>
    </>
  );
}
