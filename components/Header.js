"use client";

import Link from "next/link";
import { useState } from "react";

const crownIcon =
  "/ic-crown.svg";

const logoDbsMark = "/dbslogo.svg";
const logoAlignMark = "/align-logo.png";

const solutionsSubmenu = [
  { label: "Complete Office", href: "#" },
  { label: "Customise Office", href: "#" },
  { label: "Shared Office", href: "#" },
  { label: "Conference Room", href: "#" },
  { label: "Virtual Office", href: "#" },
];

const navItems = [
  { label: "Solutions", href: "#", submenu: solutionsSubmenu },
  { label: "Location", href: "/location", submenu: null },
  { label: "Membership", href: "#", submenu: null },
  { label: "Align by DBS", href: "#", crown: true, submenu: null },
];

function IconArrowTopRightSmall(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M12.4248 1.57512V11.4343H11.3003V3.49431L2.5389 12.2557L1.74365 11.4605L10.5045 2.69963H2.56567V1.57512H12.4248Z"
        fill="#AB8B51"
      />
    </svg>
  );
}

function IconArrowUpRightNavCta(props) {
  return (
    <span className={`relative overflow-hidden ${props.className || ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-0 top-0 size-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full group-hover:-translate-y-full"
      >
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-0 top-0 size-full -translate-x-full translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={props.className}>
      <path d="M3.5 5.25 7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.65" />
      <path d="M16.25 16.25 21 21" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function NavLabel({ item }) {
  return (
    <>
      {item.crown ? (
        <span className="flex items-center gap-1">
          <img src={crownIcon} alt="" className="size-[23px] shrink-0 object-contain" width={23} height={23} aria-hidden />
          <span>{item.label}</span>
        </span>
      ) : (
        <span>{item.label}</span>
      )}
      <IconArrowTopRightSmall className="size-[14px] shrink-0 text-[#1c2e62]" />
    </>
  );
}

function NavMenuLink({ item, onNavigate }) {
  return (
    <a href={item.href} onClick={onNavigate} className="flex shrink-0 items-center gap-2.5 text-sm font-normal leading-[1.5] text-[#1c2e62]">
      <NavLabel item={item} />
    </a>
  );
}

function DesktopNavItem({ item }) {
  const submenu = item.submenu;
  const hasSubmenu = submenu && submenu.length > 0;

  if (!hasSubmenu) {
    return <NavMenuLink item={item} onNavigate={() => {}} />;
  }

  return (
    <div className="group relative">
      <span
        className="flex cursor-default items-center gap-2.5 text-sm font-normal leading-[1.5] text-[#1c2e62]"
        tabIndex={0}
        aria-haspopup="true"
      >
        <NavLabel item={item} />
      </span>
      <div
        className="pointer-events-none invisible absolute left-0 top-full z-[100] pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100"
        role="menu"
        aria-label={`${item.label} submenu`}
      >
        <div className="min-w-[max-content] bg-[#f6f6f6] p-2  shadow-[0_10px_40px_rgba(28,46,98,0.14)] ring-1 ring-black/[0.04]">
          <ul className="flex flex-col gap-0">
            {submenu.map((row) => (
              <li key={row.label} role="none">
                <a
                  href={row.href}
                  role="menuitem"
                  className="flex items-center justify-between gap-2 p-2 text-sm font-normal leading-[1.5] text-[#1c2e62] outline-none transition-colors hover:text-[#1c2e62]/75 focus-visible:text-[#1c2e62]/75"
                >
                  <span>{row.label}</span>
                  <IconArrowTopRightSmall className="size-[14px] shrink-0 text-[#1c2e62]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileNavBlock({ item, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const submenu = item.submenu;
  const hasSubmenu = submenu && submenu.length > 0;

  if (!hasSubmenu) {
    return <NavMenuLink item={item} onNavigate={onNavigate} />;
  }

  return (
    <div className="border-b border-[#e0e0e0] pb-3 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-sm font-normal leading-[1.5] text-[#1c2e62]"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span className="flex items-center gap-2.5">
          <NavLabel item={item} />
        </span>
        <IconChevronDown className={`size-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded ? (
        <ul className="mt-3 flex flex-col gap-0 border-l border-[#d5d5d5] pl-4">
          {submenu.map((row) => (
            <li key={row.label}>
              <a
                href={row.href}
                onClick={onNavigate}
                className="flex items-center justify-between gap-4 py-2 text-sm text-[#1c2e62]"
              >
                <span>{row.label}</span>
                <IconArrowTopRightSmall className="size-[14px] shrink-0 text-[#1c2e62]" />
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="relative z-50 w-full">
      <div className="overflow-visible border-b border-[#e0e0e0] bg-[#eee]">
        <div className="custom-container py-4">
          <div className="relative flex h-16 items-center overflow-visible">
          <Link
            href="/"
            className="relative z-[1] flex shrink-0 items-center focus-visible:outline-none"
            onClick={close}
            aria-label="DBS Workspace — Align by DBS home"
          >
            <span className="site-header-logo-flip shrink-0" aria-hidden="true">
              <span className="site-header-logo-flip__inner">
                <img
                  className="site-header-logo-flip__face site-header-logo-flip__face--front"
                  src={logoDbsMark}
                  alt=""
                  width={146}
                  height={48}
                  decoding="async"
                />
                <img
                  className="site-header-logo-flip__face site-header-logo-flip__face--back"
                  src={logoAlignMark}
                  alt=""
                  width={146}
                  height={48}
                  decoding="async"
                  loading="lazy"
                />
              </span>
            </span>
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 overflow-visible lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="relative z-[1] ml-auto hidden items-center gap-6 lg:flex">
            <button
              type="button"
              className="text-[#1c2e62] transition-opacity hover:opacity-70"
              aria-label="Search"
            >
              <IconSearch className="size-6" />
            </button>
            <a
              href="#"
              className="group inline-flex items-center gap-4 bg-[#1c2e62] px-6 py-5 text-base font-normal leading-[1.5] text-white transition-opacity hover:opacity-95"
            >
              Let&apos;s Get Talking
              <IconArrowUpRightNavCta className="size-6 shrink-0 text-white" />
            </a>
          </div>

          <button
            type="button"
            className="relative z-[1] ml-auto text-[#1c2e62] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <IconClose className="size-7" /> : <IconMenu className="size-7" />}
          </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#9db6f6]">
        <div className="custom-container flex justify-center py-2">
          <p className="text-center text-xs font-semibold leading-[1.5] text-[#1c2e62]">
            🎉 We&apos;re set to open the new Donear Twelve office.
          </p>
        </div>
      </div>

      {open ? (
        <div className="border-b border-[#e0e0e0] bg-[#eee] lg:hidden">
          <div className="custom-container flex flex-col gap-1 py-5">
            {navItems.map((item) => (
              <MobileNavBlock key={item.label} item={item} onNavigate={close} />
            ))}
            <button type="button" className="mt-2 flex items-center gap-3 text-sm text-[#1c2e62]" aria-label="Search">
              <IconSearch className="size-6 shrink-0" />
              Search
            </button>
            <a
              href="#"
              className="group mt-3 inline-flex w-fit items-center gap-4 bg-[#1c2e62] px-6 py-5 text-base font-normal text-white"
              onClick={close}
            >
              Let&apos;s Get Talking
              <IconArrowUpRightNavCta className="size-6 shrink-0 text-white" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
