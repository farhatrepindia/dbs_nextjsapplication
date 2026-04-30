"use client";

import { useState } from "react";

const navItems = ["Solutions", "Location", "Membership", "Align by DBS"];
const logoImage = "/logo.svg";

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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="bg-[#9db6f6] py-2 text-center text-xs font-semibold text-[#1c2e62] leading-[1.5]">
        🎉 We&apos;re set to open the new Donear Twelve office.
      </div>
      <div className="border-b border-white/30">
        <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8 flex h-[64px] md:h-20 items-center justify-between">
          <img src={logoImage} alt="DBS Workspace logo" className="h-10 md:h-12 w-auto object-contain" />
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" onClick={() => setOpen(false)} className="hover:text-[#9db6f6]">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="#" className="text-sm font-semibold">
              Let&apos;s Get Talking
            </a>
          </div>
          <button type="button" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-b border-white/20 bg-[#1c2e62] lg:hidden">
          <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
