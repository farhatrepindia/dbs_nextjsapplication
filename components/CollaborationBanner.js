"use client";

import { useRef, useState } from "react";
import { Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

/** Figma 1379:3405 — updated asset from design file */
const bannerImage ="/testimonial_banner.webp";

const slides = [
  {
    id: "1",
    quote:
      "I have been with DBS Hyderabad since 18th June 2025. The services, amenities and location of the DBS business centre Hyderabad, ar second to none while their staff provides the highest level of professionalism.",
    author: "Sunil Pandey (Director)",
    company: "KWS Research and Development Private Limited",
  },
  {
    id: "2",
    quote:
      "Aligning our team at DBS Workspace gave us flexibility we could not get in a traditional lease. Meeting rooms, front-desk support, and a premium address together have elevated how clients see our business.",
    author: "Priya Nair (Founder)",
    company: "Northwind Analytics LLP",
  },
  {
    id: "3",
    quote:
      "The Mumbai centre is thoughtfully designed — quiet zones for focus, collaborative areas for workshops, and consistent IT. It is the right environment for our hybrid team week to week.",
    author: "Rahul Menon (COO)",
    company: "Lattice Design Studio",
  },
];

function IconArrowLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Testimonials (Figma 1379:3405 background, 1379:3407 heading, 1379:3412 glass slider).
 */
export default function CollaborationBanner() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();

  const goTo = (i) => {
    const s = swiperRef.current;
    if (!s) return;
    if (s.params.loop) {
      s.slideToLoop(i);
    } else {
      s.slideTo(i);
    }
  };

  return (
    <section className="relative w-full overflow-hidden  text-white">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute">
          <img src={bannerImage} alt="" className="pointer-events-none size-full max-w-none object-cover min-h-[620px]" />
        </div>
      </div>

      <div className="relative">
        <div className="custom-container">
          <div className="flex min-h-[620px] flex-col gap-10 py-14 lg:flex-row  lg:justify-between lg:gap-[72px] lg:py-[90px]">
            <div className="flex w-full max-w-[558px] flex-col gap-9 lg:justify-self-start">
              <div className="flex w-full flex-col gap-4">
                <div className="inline-flex w-fit items-center justify-center rounded-[1000px] border border-white px-3 py-2">
                  <p className="text-xs font-normal leading-[1.5] text-white">Testimonials</p>
                </div>
                <div className="leading-[0] text-[0px] text-white">
                  <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-[1.2]">
                    <span className="block">Notes Worth</span>
                    <span className="block">Circling Back To</span>
                  </h2>
                </div>
              </div>

              <p className="text-base font-normal leading-[1.5] text-white">
                Few words from people who’ve worked here, stayed late here, launched things here.
              </p>
            </div>

            <div className="relative w-full lg:max-w-[674px] flex items-end">
              <div className="relative overflow-hidden rounded-[14px] bg-black/[0.05] p-8 backdrop-blur-[24px]">
                <Swiper
                  modules={[Keyboard]}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  loop={slides.length > 1}
                  slidesPerView={1}
                  speed={550}
                  spaceBetween={48}
                  watchSlidesProgress
                  className="testimonial-swiper w-full overflow-hidden"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="!h-auto">
                      <article className="w-full">
                        <blockquote className="h-[120px] text-base font-normal leading-[1.5] text-white">
                          {slide.quote}
                        </blockquote>
                        <footer className="mt-3 w-full text-sm font-normal leading-[1.5]">
                          <p className="text-white">{slide.author}</p>
                          <p className="text-[#bdbdbd]">{slide.company}</p>
                        </footer>
                      </article>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="pointer-events-auto absolute bottom-8 right-8 z-20 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="grid size-6 place-items-center text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Previous testimonial"
                    onClick={slidePrev}
                  >
                    <IconArrowLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    className="grid size-6 place-items-center text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Next testimonial"
                    onClick={slideNext}
                  >
                    <IconArrowRight className="size-6" />
                  </button>
                </div>
              </div>

              <div className="sr-only" aria-live="polite">
                Testimonial {activeIndex + 1} of {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
