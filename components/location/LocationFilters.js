"use client";

import { useMemo, useState } from "react";

function ChevronDown({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HoverArrowIcon() {
  return (
    <span className="relative size-6 shrink-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-0 top-0 size-6 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full group-hover:-translate-y-full"
      >
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-0 top-0 size-6 -translate-x-full translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Toggle({ on, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative h-[24px] w-[42px] rounded-full border outline-none ring-[#1c2e62] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee] ${
        on ? "border-[#1C2E62] bg-[#1C2E62]" : "border-[#BDBDBD] bg-[#E0E0E0]"
      }`}
      aria-pressed={on}
      aria-label="Toggle map view"
    >
      <span
        className={`absolute top-1/2 size-[18px] -translate-y-1/2 rounded-full transition-[transform,background-color] duration-200 ${
          on ? "translate-x-[0px] bg-[#9DB6F6]" : "translate-x-[-15px] bg-[#212121]"
        }`}
        aria-hidden
      />
    </button>
  );
}

export default function LocationFilters({
  mapView,
  onMapViewChange,
}) {
  const [localMapView, setLocalMapView] = useState(false);
  const [locationValue, setLocationValue] = useState("Mumbai");
  const [officeValue, setOfficeValue] = useState("");

  const currentMapView = mapView ?? localMapView;

  const setMap = onMapViewChange ?? setLocalMapView;

  const phone = useMemo(() => "022-4880-9900", []);

  return (
    <section className="bg-[#eee]">
      <div className="custom-container pb-10">
        <div className="mx-auto flex w-full max-w-[1149px] flex-col gap-2 relative">
          <div className="bg-[#eee] p-2">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-2">
              <div className="flex flex-1 flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <select
                    value={locationValue}
                    onChange={(e) => setLocationValue(e.target.value)}
                    className="h-14 w-full cursor-pointer appearance-none bg-[#e0e0e0] px-4 pr-10 text-left text-sm leading-[1.5] text-[#1c2e62] outline-none md:h-16"
                    aria-label="Select Location"
                  >
                    <option value="Mumbai">Mumbai</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bengaluru">Bengaluru</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-6 -translate-y-1/2 text-[#1c2e62]" />
                </div>

                <div className="relative flex-1">
                  <select
                    value={officeValue}
                    onChange={(e) => setOfficeValue(e.target.value)}
                    className={`h-14 w-full cursor-pointer appearance-none bg-[#e0e0e0] px-4 pr-10 text-left text-sm leading-[1.5] outline-none md:h-16 ${
                      officeValue ? "text-[#1c2e62]" : "text-[#616161]"
                    }`}
                    aria-label="Select Type of Office"
                  >
                    <option value="" disabled>
                      Select Type of Office
                    </option>
                    <option value="Complete Office">Complete Office</option>
                    <option value="Customise Office">Customise Office</option>
                    <option value="Shared Office">Shared Office</option>
                    <option value="Virtual Office">Virtual Office</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-6 -translate-y-1/2 text-[#1c2e62]" />
                </div>
              </div>

              <button
                type="button"
                className="group inline-flex h-[64px] w-full items-center justify-center gap-4 bg-[#1c2e62] px-6 py-5 text-base font-normal leading-[1.5] text-white transition-opacity hover:opacity-95 lg:h-auto lg:w-[250px]"
              >
                Find Space
                <HoverArrowIcon />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-normal leading-[1.5] text-[#1c2e62]">
              Need Help? Feel free to contact us{" "}
              <a href={`tel:${phone.replace(/-/g, "")}`} className="underline">
                {phone}
              </a>
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm font-normal leading-[1.5] text-[#1c2e62]">Map View</span>
              <Toggle on={currentMapView} onToggle={() => setMap((v) => !v)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

