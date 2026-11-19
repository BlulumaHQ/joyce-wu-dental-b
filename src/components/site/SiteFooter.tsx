import { Link } from "@tanstack/react-router";
import { CLINIC, HOURS, routeTo, SERVICE_KEYS, UI, type PageKey } from "@/content/site";
import { LangSwitch } from "./SiteHeader";
import { useCurrentPage } from "./LangContext";
import { Logo } from "./Logo";

export function SiteFooter() {
  const { lang } = useCurrentPage();
  const ui = UI[lang];
  const year = new Date().getFullYear();
  const useful: PageKey[] = ["home", "about", "team", "faq", "cdcp", "contact"];

  return (
    <footer className="bg-primary-deep text-on-dark">
      <div className="container-page py-7 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div className="col-span-2 max-w-sm lg:col-span-1">
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">{ui.footerAbout}</p>
            <div className="mt-3">
              <LangSwitch dark />
            </div>
          </div>

          <nav aria-label={ui.usefulLinks}>
            <h2 className="eyebrow eyebrow-dark">{ui.usefulLinks}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {useful.map((k) => (
                <li key={k}>
                  <Link to={routeTo(k, lang)} className="text-on-dark-muted transition-colors hover:text-on-dark">
                    {ui.pageName[k]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={ui.ourServices}>
            <h2 className="eyebrow eyebrow-dark">{ui.ourServices}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_KEYS.map((k) => (
                <li key={k}>
                  <Link to={routeTo(k, lang)} className="text-on-dark-muted transition-colors hover:text-on-dark">
                    {ui.pageName[k]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="eyebrow eyebrow-dark">{ui.contactInfo}</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-on-dark-muted">
              <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-on-dark">
                {CLINIC.addressLine}
              </a>
              <a href={CLINIC.phoneHref} className="block hover:text-on-dark">
                {CLINIC.phoneDisplay}
              </a>
              <a href={`mailto:${CLINIC.email}`} className="block break-all hover:text-on-dark">
                {CLINIC.email}
              </a>
            </address>
            <details className="mt-4"><summary className="cursor-pointer text-sm text-gold-light">{ui.hours}</summary>
            
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm text-on-dark-muted">
              {HOURS.map((h) => (
                <div key={h.schema} className="contents">
                  <dt>{h.day[lang]}</dt>
                  <dd className="text-on-dark">{h.label[lang]}</dd>
                </div>
              ))}
            </dl>
            </details>
          </div>
        </div>

        <div className="mt-8 border-t border-border-dark pt-5 text-xs text-on-dark-muted md:mt-12">
          <p>© {year} {CLINIC.name}. Website by <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-on-dark">Bluluma Design</a>{" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of Joyce Wu Dental.</span></p>
        </div>
      </div>
    </footer>
  );
}
