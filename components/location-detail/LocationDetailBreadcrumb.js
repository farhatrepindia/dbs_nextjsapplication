import Link from "next/link";

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M5.25 3.5 8.75 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LocationDetailBreadcrumb({ cityLabel, areaLabel }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 text-xs font-semibold leading-[1.5] text-[#1c2e62]">
      <Link href="/" className="hover:opacity-75">
        Home
      </Link>
      <ChevronRight className="size-[14px] shrink-0" />
      <Link href="/location" className="hover:opacity-75">
        {cityLabel}
      </Link>
      <ChevronRight className="size-[14px] shrink-0" />
      <span>{areaLabel}</span>
    </nav>
  );
}
