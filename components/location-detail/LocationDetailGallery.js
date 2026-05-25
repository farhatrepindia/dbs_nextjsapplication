"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import LocationDetailBreadcrumb from "./LocationDetailBreadcrumb";

const FANCYBOX_GROUP = "location-detail-gallery";

export default function LocationDetailGallery({ location }) {
  useEffect(() => {
    Fancybox.bind(`[data-fancybox="${FANCYBOX_GROUP}"]`, {
      groupAll: true,
      animated: true,
    });

    return () => {
      Fancybox.unbind(`[data-fancybox="${FANCYBOX_GROUP}"]`);
      Fancybox.close();
    };
  }, []);

  return (
    <section className="bg-[#f5f5f7] pb-2.5 pt-6 lg:pb-4 lg:pt-8">
      <div className="custom-container">

        <div className="mb-6">
          <LocationDetailBreadcrumb
            cityLabel={location.cityLabel}
            areaLabel={location.areaLabel}
          />
        </div>

        <div className="grid gap-2.5 lg:grid-cols-2">

          <figure className="aspect-[679/433] overflow-hidden bg-[#1c2e62] lg:min-h-[433px]">
            <a
              href={location.gallery[0]}
              data-fancybox={FANCYBOX_GROUP}
              className="group relative block size-full cursor-pointer"
            >
              <img
                src={location.gallery[0]}
                alt=""
                className="size-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[40px] font-light leading-none text-white">+</span>
              </span>
            </a>
          </figure>

          <div className="grid grid-cols-2 gap-2.5">

            <figure className="aspect-[335/211] overflow-hidden bg-[#1c2e62]">
              <a
                href={location.gallery[1]}
                data-fancybox={FANCYBOX_GROUP}
                className="group relative block size-full cursor-pointer"
              >
                <img
                  src={location.gallery[1]}
                  alt=""
                  className="size-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[32px] font-light leading-none text-white">+</span>
                </span>
              </a>
            </figure>

            <figure className="aspect-[335/211] overflow-hidden bg-[#1c2e62]">
              <a
                href={location.gallery[2]}
                data-fancybox={FANCYBOX_GROUP}
                className="group relative block size-full cursor-pointer"
              >
                <img
                  src={location.gallery[2]}
                  alt=""
                  className="size-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[32px] font-light leading-none text-white">+</span>
                </span>
              </a>
            </figure>

            <figure className="aspect-[335/211] overflow-hidden bg-[#1c2e62]">
              <a
                href={location.gallery[3]}
                data-fancybox={FANCYBOX_GROUP}
                className="group relative block size-full cursor-pointer"
              >
                <img
                  src={location.gallery[3]}
                  alt=""
                  className="size-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[32px] font-light leading-none text-white">+</span>
                </span>
              </a>
            </figure>

            <figure className="relative aspect-[335/212] overflow-hidden bg-[#1c2e62]">
              <a
                href={location.gallery[4]}
                data-fancybox={FANCYBOX_GROUP}
                className="group relative block size-full cursor-pointer"
              >
                <img
                  src={location.gallery[4]}
                  alt=""
                  className="size-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[32px] font-light leading-none text-white">+</span>
                </span>
              </a>

              <a
                href={location.galleryAll[0]}
                data-fancybox={FANCYBOX_GROUP}
                className="absolute bottom-5 right-5 z-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1c2e62] px-3 py-2 text-xs font-normal leading-[1.5] text-white"
              >
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="size-[14px]">
                  <rect x="1.75" y="1.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
                  <rect x="7.75" y="1.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
                  <rect x="1.75" y="7.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
                  <rect x="7.75" y="7.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
                </svg>
                Show All Photos ({location.photoCount})
              </a>
            </figure>

          </div>
        </div>

        <div className="hidden" aria-hidden="true">
          <a href={location.galleryAll[5]} data-fancybox={FANCYBOX_GROUP}>Photo 6</a>
          <a href={location.galleryAll[6]} data-fancybox={FANCYBOX_GROUP}>Photo 7</a>
          <a href={location.galleryAll[7]} data-fancybox={FANCYBOX_GROUP}>Photo 8</a>
          <a href={location.galleryAll[8]} data-fancybox={FANCYBOX_GROUP}>Photo 9</a>
          <a href={location.galleryAll[9]} data-fancybox={FANCYBOX_GROUP}>Photo 10</a>
          <a href={location.galleryAll[10]} data-fancybox={FANCYBOX_GROUP}>Photo 11</a>
        </div>

      </div>
    </section>
  );
}
