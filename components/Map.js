"use client";

import { useMemo, useState } from "react";

const mapImage = "/images/location/india-map.svg";

export default function Map() {
  // Single source of truth: dropdown + nav + map hotspots
  const [selected, setSelected] = useState("india");
  const [pendingState, setPendingState] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const showIndiaTabs = selected === "india";

  const activeLabel = useMemo(() => {
    if (selected === "mumbai") return "Mumbai";
    if (selected === "delhi") return "New Delhi";
    if (selected === "kolkata") return "Kolkata";
    if (selected === "hyderabad") return "Hyderabad";
    if (selected === "chennai") return "Chennai";
    if (selected === "bengaluru") return "Bengaluru";
    return "All India";
  }, [selected]);

  const activeMapImage = useMemo(() => {
    // Dummy/static images for now (replace later).
    if (selected === "mumbai") return "/images/location/states/mumbai.svg";
    if (selected === "delhi") return "/images/location/states/delhi.svg";
    if (selected === "kolkata") return "/images/location/states/kolkata.svg";
    if (selected === "hyderabad") return "/images/location/states/hyderabad.svg";
    if (selected === "chennai") return "/images/location/states/chennai.svg";
    if (selected === "bengaluru") return "/images/location/states/bengaluru.svg";
    return "/images/location/india-map.svg";
  }, [selected]);

  const markerStyle = useMemo(() => {
    // Approx positions (percent) — UI-only highlight indicator
    if (selected === "mumbai") return { left: "38%", top: "62%" };
    if (selected === "delhi") return { left: "47%", top: "28%" };
    if (selected === "kolkata") return { left: "66%", top: "42%" };
    if (selected === "hyderabad") return { left: "52%", top: "68%" };
    if (selected === "chennai") return { left: "56%", top: "78%" };
    if (selected === "bengaluru") return { left: "48%", top: "76%" };
    return { left: "46%", top: "52%" };
  }, [selected]);

  const switchTo = (next) => {
    setIsFading(true);
    window.setTimeout(() => {
      setSelected(next);
      setIsFading(false);
    }, 220);
  };

  const handleIndiaMarkerClick = (next) => {
    setPendingState(next);
    window.setTimeout(() => {
      setPendingState(null);
      switchTo(next);
    }, 180);
  };

  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-[72px] text-[#1c2e62]">
      <div className="custom-container grid gap-10 lg:gap-16 lg:grid-cols-[1.4fr_0.9fr] items-center">
        <div className="w-full">
          {/* Map (hover + click) */}
          <div className="relative">
            <img
              src={activeMapImage}
              alt="DBS locations in India"
              className={`w-full object-contain lg:scale-[1.04] lg:origin-left transition-[opacity,filter,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isFading ? "opacity-0 blur-[1px]" : "opacity-100 blur-0"
              } ${selected === "india" ? "saturate-100" : "saturate-[1.05]"}`}
            />

            {/* Active highlight marker (UI-only) */}
            <div
              className="pointer-events-none absolute z-[2] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={markerStyle}
              aria-hidden
            >
              <span className="block size-4 rounded-full bg-[#9DB6F6] ring-2 ring-white shadow-[0_10px_25px_rgba(28,46,98,0.25)]" />
              <span className="mt-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.12)]">
                {activeLabel}
              </span>
            </div>

            {/* Interactive state markers — only on All India view */}
            {showIndiaTabs ? (
              <>
                <button
                  type="button"
                  onClick={() => handleIndiaMarkerClick("mumbai")}
                  className={`group absolute left-[30%] top-[58%] z-[3] -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] focus-visible:ring-2 ${
                    pendingState === "mumbai" ? "scale-[1.02]" : ""
                  } transition-transform duration-200`}
                  aria-label="Mumbai"
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.16)] ring-1 ring-black/[0.06] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] ${
                      pendingState === "mumbai" ? "bg-[#1c2e62] text-white ring-0" : ""
                    }`}
                  >
                    <span className={`block size-2.5 rounded-full ${pendingState === "mumbai" ? "bg-[#9DB6F6]" : "bg-[#ab8b51]"}`} aria-hidden />
                    Mumbai
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIndiaMarkerClick("delhi")}
                  className={`group absolute left-[49%] top-[24%] z-[3] -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] focus-visible:ring-2 ${
                    pendingState === "delhi" ? "scale-[1.02]" : ""
                  } transition-transform duration-200`}
                  aria-label="New Delhi"
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.16)] ring-1 ring-black/[0.06] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] ${
                      pendingState === "delhi" ? "bg-[#1c2e62] text-white ring-0" : ""
                    }`}
                  >
                    <span className={`block size-2.5 rounded-full ${pendingState === "delhi" ? "bg-[#9DB6F6]" : "bg-[#ab8b51]"}`} aria-hidden />
                    New Delhi
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIndiaMarkerClick("kolkata")}
                  className={`group absolute left-[66%] top-[43%] z-[3] -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] focus-visible:ring-2 ${
                    pendingState === "kolkata" ? "scale-[1.02]" : ""
                  } transition-transform duration-200`}
                  aria-label="Kolkata"
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.16)] ring-1 ring-black/[0.06] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] ${
                      pendingState === "kolkata" ? "bg-[#1c2e62] text-white ring-0" : ""
                    }`}
                  >
                    <span className={`block size-2.5 rounded-full ${pendingState === "kolkata" ? "bg-[#9DB6F6]" : "bg-[#ab8b51]"}`} aria-hidden />
                    Kolkata
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIndiaMarkerClick("hyderabad")}
                  className={`group absolute left-[51%] top-[66%] z-[3] -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] focus-visible:ring-2 ${
                    pendingState === "hyderabad" ? "scale-[1.02]" : ""
                  } transition-transform duration-200`}
                  aria-label="Hyderabad"
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.16)] ring-1 ring-black/[0.06] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] ${
                      pendingState === "hyderabad" ? "bg-[#1c2e62] text-white ring-0" : ""
                    }`}
                  >
                    <span className={`block size-2.5 rounded-full ${pendingState === "hyderabad" ? "bg-[#9DB6F6]" : "bg-[#ab8b51]"}`} aria-hidden />
                    Hyderabad
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIndiaMarkerClick("chennai")}
                  className={`group absolute left-[55%] top-[78%] z-[3] -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] focus-visible:ring-2 ${
                    pendingState === "chennai" ? "scale-[1.02]" : ""
                  } transition-transform duration-200`}
                  aria-label="Chennai"
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.16)] ring-1 ring-black/[0.06] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] ${
                      pendingState === "chennai" ? "bg-[#1c2e62] text-white ring-0" : ""
                    }`}
                  >
                    <span className={`block size-2.5 rounded-full ${pendingState === "chennai" ? "bg-[#9DB6F6]" : "bg-[#ab8b51]"}`} aria-hidden />
                    Chennai
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIndiaMarkerClick("bengaluru")}
                  className={`group absolute left-[47%] top-[76%] z-[3] -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-[#1c2e62] focus-visible:ring-2 ${
                    pendingState === "bengaluru" ? "scale-[1.02]" : ""
                  } transition-transform duration-200`}
                  aria-label="Bengaluru"
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#1c2e62] shadow-[0_10px_25px_rgba(28,46,98,0.16)] ring-1 ring-black/[0.06] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] ${
                      pendingState === "bengaluru" ? "bg-[#1c2e62] text-white ring-0" : ""
                    }`}
                  >
                    <span className={`block size-2.5 rounded-full ${pendingState === "bengaluru" ? "bg-[#9DB6F6]" : "bg-[#ab8b51]"}`} aria-hidden />
                    Bengaluru
                  </span>
                </button>
              </>
            ) : null}
          </div>
        </div>

        <div>
          <span className="rounded-full border border-[#1c2e62] px-3 py-2 text-xs">Location</span>
          <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
            The Right Pincode
            <br />
            <span className="font-semibold leading-[var(--type-heading-snug)]">Makes A Difference</span>
          </h2>
          <p className="mt-6 text-base max-w-[360px] leading-[1.5]">Tap the map to see where we&apos;ve already made room for better days.</p>
          <select
            value={selected}
            onChange={(e) => switchTo(e.target.value)}
            className={`mt-8 w-full max-w-[485px] border-b border-[#1c2e62]/40 bg-transparent pb-3 text-left text-sm outline-none ${
              selected === "india" ? "text-[#616161]" : "text-[#1c2e62]"
            }`}
            aria-label="Select Location"
          >
            <option value="india">All India</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">New Delhi</option>
            <option value="kolkata">Kolkata</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
            <option value="bengaluru">Bengaluru</option>
          </select>
        </div>
      </div>
    </section>
  );
}
