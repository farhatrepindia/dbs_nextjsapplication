"use client";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroSlides = [
  {
    src: "/images/homebanner.webp",
    alt: "Modern workspace lounge",
  },
  {
    src: "/images/testimonial_banner.webp",
    alt: "Focused office environment",
  },
  {
    src: "/images/homebanner.webp",
    alt: "Premium workspace amenities",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative bg-[#1c2e62] h-[calc(100vh-131px)]">
      <div className="grid  grid-cols-1 lg:grid-cols-[56.6%_43.4%] h-full">
        <div className="relative h-full">
          <Swiper
            // modules={[Autoplay, EffectFade, Pagination]}
            // effect="fade"
            // fadeEffect={{ crossFade: true }}
            // loop
            // speed={2000}
            // autoplay={{
            //   delay: 5500,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            // pagination={{
            //   clickable: true,
            //   dynamicBullets: true,
            // }}
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={2000}
            autoplay={false}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            className="hero-banner-swiper absolute inset-0 h-full w-full [--swiper-pagination-bottom:18px] [--swiper-pagination-bullet-horizontal-gap:4px] [--swiper-pagination-bullet-size:10px] [--swiper-pagination-color:#9DB6F6] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:1]"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={`${slide.src}-${index}`} className="!flex">
                <div className="relative flex flex-1">
                  <img src={slide.src} alt={slide.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center py-12 md:py-16 lg:py-0">
          <div className="mx-auto w-full 2xl:max-w-[522px] px-8 2xl:px-0">
            <h1 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#9db6f6] md:text-5xl lg:text-[60px]">
              Where Work
              <br />
              <span className="leading-[var(--type-heading-snug)]">Finds Its Flow</span>
            </h1>
            <p className="mt-4 text-sm leading-[1.5] text-[#9db6f6]/85 md:text-base lg:pr-10 2xl:pr-28">
              Workspaces that support the shift from pressure to progress and everything in between.
            </p>
            <div className="mt-7 max-w-[519px] border-4 border-[#e5e5e5] bg-[#eee] p-2">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <select
                  defaultValue=""
                  className="h-14 md:h-16 bg-[#e0e0e0] px-4 text-left text-sm text-[#616161] outline-none"
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option>Mumbai</option>
                  <option>Delhi NCR</option>
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                </select>
                <select
                  defaultValue=""
                  className="h-14 md:h-16 bg-[#e0e0e0] px-4 text-left text-sm text-[#616161] outline-none"
                >
                  <option value="" disabled>
                    Select Type of Office
                  </option>
                  <option>Complete Office</option>
                  <option>Customise Office</option>
                  <option>Shared Office</option>
                  <option>Virtual Office</option>
                </select>
              </div>
              <button
                type="button"
                className="group mt-2 flex h-14 w-full items-center justify-center gap-4 bg-[#1c2e62] text-base font-semibold tracking-wide text-white md:h-16 md:text-lg"
              >
                Find Space
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
