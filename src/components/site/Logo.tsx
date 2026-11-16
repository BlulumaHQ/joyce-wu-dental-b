import { cn } from "@/lib/utils";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", dark && "footer-logo", className)}>
      <img src="/images/jwd-logo-mark.svg" alt="" className="logo-mark shrink-0" width={dark ? 56 : 52} height={dark ? 56 : 52} />
      <span className="flex flex-col gap-1.5">
        <span className={cn("logo-name font-display", dark ? "text-on-dark" : "text-primary")}>Joyce Wu Dental</span>
        <span className={cn("logo-location uppercase", dark ? "text-gold-light" : "text-champagne-ink")}>Kerrisdale · Vancouver</span>
      </span>
    </span>
  );
}
