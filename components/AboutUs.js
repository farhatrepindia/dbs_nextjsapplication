"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function IconArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
    <path d="M9.3335 22.6666L22.6668 9.33325" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.3335 9.33325H22.6668V22.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
}

const stats = [
  { target: 9, suffix: "", label: "Centres", useGrouping: false },
  { target: 6, suffix: "", label: "Cities", useGrouping: false },
  { target: 38, suffix: "", label: "Years In Business", useGrouping: false },
  { target: 20000, suffix: "+", label: "Businesses", useGrouping: true },
];

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function formatCount(n, useGrouping, suffix) {
  const core = useGrouping ? n.toLocaleString("en-US") : String(n);
  return `${core}${suffix}`;
}

function StatCounter({ target, suffix, label, useGrouping, run }) {
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [value, setValue] = useState(() => (reducedMotion ? target : 0));
  const rafRef = useRef(0);

  useEffect(() => {
    if (!run) return;
    if (reducedMotion) return;

    const durationMs = 2000;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const next = Math.round(easeOutCubic(t) * target);
      setValue(next);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [run, target, reducedMotion]);

  return (
    <div>
      <p className="text-6xl font-light leading-none tracking-[-0.06em] tabular-nums md:text-7xl xl:text-[142px]" aria-live="polite">
        {formatCount(value, useGrouping, suffix)}
      </p>
      <p className="mt-3 text-xl md:text-2xl">{label}</p>
    </div>
  );
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [inViewOnce, setInViewOnce] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || inViewOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInViewOnce(true);
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inViewOnce]);

  return (
    <section ref={sectionRef} className="bg-[#f5f5f7] pt-16 md:pt-20 lg:pt-[72px] pb-12 text-[#1c2e62]">
      <div className="custom-container">
        <div className="grid gap-10 md:grid-cols-2 flex justify-between">
          <div>
            <span className="rounded-full border border-[#1c2e62] px-3 py-2 text-xs inline-block">About Us</span>
            <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
              The Freedom
              <br />
              <span className="font-semibold leading-[var(--type-heading-snug)]">To Move Fast</span>
            </h2>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-base md:text-lg leading-[1.5] max-w-[557px]">
              DBS crafts premium, bespoke workspaces designed for visionaries. Whether you are an independent consultant or a global enterprise, we provide agile, fully managed environments tailored to your exact specifications.
            </p>
            <a href="/" className="mt-9 inline-flex items-center gap-4  py-2 text-xl md:text-2xl font-semibold uppercase">
              Know More <IconArrowUpRight className="h-6 w-6 -mt-2" />
            </a>
          </div>
        </div>
        <div className="mt-22 border-b border-[#cfd8ec] pb-6 text-2xl md:text-4xl">
          Built for flow. <span className="font-semibold">The numbers followed.</span>
        </div>
        <div className="mt-10 flex flex-wrap justify-between items-start gap-x-10 gap-y-8 lg:gap-x-14 lg:gap-y-10 [&>*]:w-max [&>*]:max-w-full">
          {stats.map((item) => (
            <StatCounter
              key={item.label}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
              useGrouping={item.useGrouping}
              run={inViewOnce}
            />
          ))}
        </div>
        <div className="mx-auto mt-30 max-w-[532px] text-center">
          <span className="inline-flex rounded-full border border-[#1c2e62] px-3 py-2 text-xs text-[#1c2e62]">Why Choose Us</span>
          <h2 className="mt-4 text-[40px] leading-[1.2] text-[#1c2e62] md:text-[48px]">
            We Thought Of It
            <br />
            <span className="font-semibold leading-[1.3]">So You Don&apos;t Have To</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
