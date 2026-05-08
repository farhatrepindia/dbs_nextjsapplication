"use client";

import { useMemo, useState } from "react";
import { LOCATION_ITEMS } from "./locationData";

const mapImage = "/images/location/mumbai-map.svg";

const FILTERS = [{ id: "all", label: "All", predicate: () => true }];

function ArrowUpRight({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M9.33301 22.6667L22.6663 9.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33301 9.33334H22.6663V22.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapPin({ className }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07539 14 6.66669Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Phone({ className }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.6669 11.28V13.28C14.6677 13.4657 14.6297 13.6495 14.5553 13.8196C14.4809 13.9897 14.3718 14.1424 14.235 14.2679C14.0982 14.3934 13.9367 14.489 13.7608 14.5485C13.5849 14.608 13.3985 14.6301 13.2136 14.6133C11.1622 14.3904 9.19161 13.6894 7.46028 12.5667C5.8495 11.5431 4.48384 10.1775 3.46028 8.56668C2.3336 6.82748 1.63244 4.84734 1.41361 2.78668C1.39695 2.60233 1.41886 2.41652 1.47795 2.2411C1.53703 2.06567 1.63199 1.90447 1.75679 1.76776C1.88159 1.63105 2.03348 1.52182 2.20281 1.44703C2.37213 1.37224 2.55517 1.33352 2.74028 1.33335H4.74028C5.06382 1.33016 5.37748 1.44473 5.62279 1.6557C5.8681 1.86667 6.02833 2.15964 6.07361 2.48001C6.15803 3.12006 6.31458 3.7485 6.54028 4.35335C6.62998 4.59196 6.64939 4.85129 6.59622 5.1006C6.54305 5.34991 6.41952 5.57875 6.24028 5.76001L5.39361 6.60668C6.34265 8.27571 7.72458 9.65764 9.39361 10.6067L10.2403 9.76001C10.4215 9.58077 10.6504 9.45725 10.8997 9.40408C11.149 9.35091 11.4083 9.37032 11.6469 9.46001C12.2518 9.68571 12.8802 9.84227 13.5203 9.92668C13.8441 9.97237 14.1399 10.1355 14.3513 10.385C14.5627 10.6345 14.6751 10.9531 14.6669 11.28Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Marker({ active, xPct, yPct, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] transition-transform duration-200 focus-visible:ring-2 ${
        active ? "scale-110" : "scale-100"
      }`}
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
      aria-label={label}
    >
      <span
        className={`block size-3 rounded-full border ${
          active ? "border-[#ab8b51] bg-[#ab8b51]" : "border-[#1c2e62] bg-[#eee]"
        }`}
        aria-hidden
      />
    </button>
  );
}

function LocationRow({ item, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left transition-colors ${
        active ? "bg-[#1c2e62]/[0.04]" : "bg-transparent hover:bg-[#1c2e62]/[0.03]"
      }`}
    >
      <div className="flex flex-wrap gap-3 sm:gap-3 relative">
        <div className="aspect-[442.667/295.255] w-full shrink-0 overflow-hidden bg-[#e0e0e0] sm:w-[390px]">
          <img src={item.image} alt="" className="size-full max-w-none object-cover" />
        </div>

        <div className="flex flex-1 flex-col gap-[14px] border-y border-[#bdbdbd] px-5 py-2">
          <div className="flex items-center gap-4 py-2">
            <h3 className="flex-1 text-[20px] font-semibold leading-normal text-[#1c2e62] uppercase">
              {item.title}
            </h3>
            <span className="flex size-8 items-center justify-center text-[#1c2e62]" aria-hidden="true">
              <ArrowUpRight className="size-6" />
            </span>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="mt-[2px] size-4 shrink-0 text-[#616161]" />
            <p className="text-sm font-normal leading-[1.5] text-[#616161]">{item.address}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-[#616161]" />
              <span className="text-sm font-normal leading-[1.5] text-[#616161]">{item.phone}</span>
            </div>
            <div className="opacity-0">
              <span className="text-sm leading-[1.5]">Date: 15 june</span>
            </div>
          </div>

          <ul className="list-disc text-xs font-normal leading-[1.5] text-[#616161]">
            <li className="ms-[18px]">6 mins from Churchgate Station</li>
            <li className="ms-[18px]">4 mins from CST Station</li>
          </ul>
        </div>
      </div>
    </button>
  );
}

export default function LocationMapListSection({ city = "mumbai" }) {
  const [activeId, setActiveId] = useState(LOCATION_ITEMS[0]?.id ?? null);

  const filtered = useMemo(() => {
    return LOCATION_ITEMS.filter((x) => x.city === city);
  }, [city]);

  const active = useMemo(() => filtered.find((x) => x.id === activeId) ?? filtered[0] ?? null, [filtered, activeId]);

  return (
    <section className="bg-[#eeeeee]">
      <div className="custom-container pb-16 pt-6 lg:pb-20 lg:pt-10">
        <div className="grid grid-cols-1 gap-4  lg:grid-cols-[790px_1fr]">
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden">
              <div className="flex flex-col gap-5">
                {filtered.map((item) => (
                  <LocationRow
                    key={item.id}
                    item={item}
                    active={item.id === active?.id}
                    onSelect={() => setActiveId(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24">
            <div className="relative h-[520px] w-full overflow-hidden bg-[#eee] lg:h-[838px] lg:w-[558px]">
              <div className="absolute left-[-41px] top-0 h-full w-[calc(100%+208px)]">
                <img src={mapImage} alt="" className="absolute left-0 top-0 h-[725px] w-[766px] max-w-none object-cover" aria-hidden />
              </div>

              <div className="absolute inset-0 transition-opacity duration-200">
                {filtered.map((item) => (
                  <Marker
                    key={item.id}
                    xPct={item.marker.xPct}
                    yPct={item.marker.yPct}
                    active={item.id === active?.id}
                    onClick={() => setActiveId(item.id)}
                    label={item.title}
                  />
                ))}
              </div>

              <div className="absolute right-5 top-7 hidden items-center gap-4 lg:flex">
                <div className="flex flex-col items-center gap-2 text-[#1c2e62]">
                  <div className="rounded-full border border-[#bdbdbd] bg-[#eee] p-[14px]">
                    <span className="block size-4 text-[#1c2e62]">+</span>
                  </div>
                  <span className="text-xs leading-[1.5]">Zoom in</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-[#1c2e62]">
                  <div className="rounded-full border border-[#bdbdbd] bg-[#eee] p-[14px]">
                    <span className="block size-4 text-[#1c2e62]">−</span>
                  </div>
                  <span className="text-xs leading-[1.5]">Zoom out</span>
                </div>
              </div>
            </div>
            {active ? (
              <div className="mt-3 text-sm leading-[1.5] text-[#1c2e62] lg:hidden">
                Selected: <span className="font-semibold">{active.title}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

