"use client";

import { Fragment, useState } from "react";

const logoImage = "/logo.svg";

const solutionsLinks = [
  { label: "Complete Office", href: "#" },
  { label: "Shared Office", href: "#" },
  { label: "Customize Office", href: "#" },
  { label: "Virtual Office", href: "#" },
  { label: "Meeting & Conference", href: "#" },
];

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Locations", href: "#" },
  { label: "Align By DBS", href: "#" },
  { label: "Membership", href: "#" },
  { label: "Our Blog", href: "#" },
];

const popularSearches = [
  "Complete Office Solutions India",
  "Shared Office Space for Startups",
  "Customized Managed Offices",
  "Virtual Office for Startups",
  "Conference and Meeting Room Hire",
  "Serviced Office in Mumbai Fort",
  "Business Centre New Delhi WTT",
  "Shared Workspace in Hyderabad",
  "Office Space in Kolkata",
  "Managed Office Solutions Chennai",
  "Premium Office Space Mumbai Lower Parel",
  "Virtual Office Space in Chennai",
];

function IconPlus({ className, open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${className} transition-transform duration-200 ${open ? "rotate-45" : ""}`}
    >
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M6.58398 9.948V13.948H9.58398V20.948H13.584V13.948H16.584L17.584 9.948H13.584V7.948C13.584 7.68278 13.6893 7.42843 13.8769 7.24089C14.0644 7.05336 14.3188 6.948 14.584 6.948H17.584V2.948H14.584C13.2579 2.948 11.9861 3.47478 11.0485 4.41246C10.1108 5.35015 9.58398 6.62192 9.58398 7.948V9.948H6.58398Z"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3242 3.38574C18.844 3.38574 20.8867 5.42844 20.8867 7.94824V15.9482C20.8866 18.4679 18.8439 20.5107 16.3242 20.5107H8.32422C5.80455 20.5107 3.76188 18.4679 3.76172 15.9482V7.94824C3.76172 5.42846 5.80445 3.38578 8.32422 3.38574H16.3242ZM8.32422 4.51074C6.42577 4.51078 4.88672 6.04978 4.88672 7.94824V15.9482C4.88688 17.8466 6.42587 19.3857 8.32422 19.3857H16.3242C18.2226 19.3857 19.7616 17.8466 19.7617 15.9482V7.94824C19.7617 6.04976 18.2227 4.51074 16.3242 4.51074H8.32422ZM12.3242 8.38574C14.2917 8.38574 15.8867 9.98073 15.8867 11.9482C15.8866 13.9156 14.2916 15.5107 12.3242 15.5107C10.3568 15.5107 8.76188 13.9156 8.76172 11.9482C8.76172 9.98075 10.3567 8.38578 12.3242 8.38574ZM12.3242 9.51074C10.9781 9.51078 9.88672 10.6021 9.88672 11.9482C9.88688 13.2943 10.9782 14.3857 12.3242 14.3857C13.6703 14.3857 14.7616 13.2943 14.7617 11.9482C14.7617 10.602 13.6704 9.51074 12.3242 9.51074ZM16.8242 6.88574C17.1349 6.88574 17.3867 7.13758 17.3867 7.44824V7.44922C17.3866 7.75974 17.1348 8.01172 16.8242 8.01172C16.5137 8.01169 16.2619 7.75972 16.2617 7.44922V7.44824C16.2617 7.1376 16.5136 6.88578 16.8242 6.88574Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M13.0117 10.776L18.9688 4H17.5552L12.3825 9.88L8.25587 4H3.5L9.7431 12.896L3.5 20H4.91369L10.3723 13.784L14.736 20H19.5L13.0281 10.776H13.0117ZM11.0832 12.976L10.454 12.088L5.41216 5.04H7.57763L11.6389 10.728L12.2681 11.616L17.547 19.008H15.3815L11.0751 12.976H11.0832Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M14.5625 0C15.9777 1.28851e-07 17.125 1.14727 17.125 2.5625V14.5625C17.125 15.9777 15.9777 17.125 14.5625 17.125H2.5625C1.14727 17.125 1.28853e-07 15.9777 0 14.5625V2.5625C0 1.14727 1.14727 0 2.5625 0H14.5625ZM2.5625 1.125C1.76859 1.125 1.125 1.76859 1.125 2.5625V14.5625C1.125 15.3564 1.76859 16 2.5625 16H14.5625C15.3564 16 16 15.3564 16 14.5625V2.5625C16 1.76859 15.3564 1.125 14.5625 1.125H2.5625ZM4.5625 7C4.87316 7 5.125 7.25184 5.125 7.5625V12.5625C5.125 12.8732 4.87316 13.125 4.5625 13.125C4.25184 13.125 4 12.8732 4 12.5625V7.5625C4 7.25184 4.25184 7 4.5625 7ZM10.5625 7C11.2421 7 11.8935 7.27041 12.374 7.75098C12.8546 8.23154 13.125 8.88288 13.125 9.5625V12.5625C13.125 12.8732 12.8732 13.125 12.5625 13.125C12.2518 13.125 12 12.8732 12 12.5625V9.5625C12 9.18125 11.8487 8.81548 11.5791 8.5459C11.3095 8.27631 10.9437 8.125 10.5625 8.125C10.1813 8.125 9.81548 8.27631 9.5459 8.5459C9.27631 8.81548 9.125 9.18125 9.125 9.5625V12.5625C9.125 12.8732 8.87316 13.125 8.5625 13.125C8.25184 13.125 8 12.8732 8 12.5625V7.5625C8 7.25184 8.25184 7 8.5625 7C8.835 7 9.06156 7.1939 9.11328 7.45117C9.53703 7.16009 10.0411 7 10.5625 7ZM4.5625 4C4.87316 4 5.125 4.25184 5.125 4.5625V4.57227C5.125 4.88293 4.87316 5.13477 4.5625 5.13477C4.25184 5.13477 4 4.88293 4 4.57227V4.5625C4 4.25184 4.25184 4 4.5625 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "#", Icon: IconFacebook },
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "X", href: "#", Icon: IconTwitter },
  { label: "LinkedIn", href: "#", Icon: IconLinkedIn },
];

const captionGold = "text-xs font-normal uppercase tracking-[0.72px] leading-[1.5] text-[#ab8b51]";
const sectionTitle = "text-xl font-semibold leading-normal tracking-[-0.2px] text-[#ab8b51]";

export default function Footer() {
  const [popularOpen, setPopularOpen] = useState(false);

  return (
    <footer className="w-full text-white">
      <div className="bg-[#eee]">
        <div className="custom-container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between lg:h-[224px] lg:py-0">
          <div className="max-w-[569px] text-[#1c2e62]">
            <p className="font-normal leading-[1.2] text-[clamp(36px,8vw,60px)]">Business,</p>
            <p className="font-semibold leading-[1.2] text-[clamp(36px,8vw,60px)]">Uninterrupted.</p>
          </div>
          <img
            src={logoImage}
            alt="DBS Workspace logo"
            className="h-[75px] w-auto max-w-[165px] shrink-0 object-contain md:self-end lg:self-center"
          />
        </div>
      </div>

      <div className="bg-[#1c2e62] pb-6 lg:pb-[33px]">
        <div className="custom-container flex flex-col gap-10 lg:gap-10">
          <div className="h-px w-full bg-[#9db6f6]/25" aria-hidden />

          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[443px_1fr] lg:gap-x-[39px] lg:gap-y-0">
            <div className="flex flex-col gap-6 lg:w-[443px]">
              <h3 className={sectionTitle}>Contact</h3>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className={captionGold}>Landline</p>
                  <p className="text-base font-normal leading-[1.5] text-white">+91 22 41549200</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className={captionGold}>Email</p>
                  <a href="mailto:sales@alignws.com" className="text-base leading-[1.5] text-white hover:text-[#9db6f6]">
                    sales@alignws.com
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className={captionGold}>Address</p>
                  <p className="text-base font-normal leading-[1.5] text-white">
                    One world Center, Tower One, 9th floor, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-[19px] lg:w-[443px] lg:justify-self-end">
              <div className="flex min-w-0 flex-col gap-6">
                <h3 className={sectionTitle}>Solutions</h3>
                <ul className="flex flex-col gap-5">
                  {solutionsLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-base leading-[1.5] text-[#9db6f6] transition-colors hover:text-[#c4d4fc]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex min-w-0 flex-col gap-6">
                <h3 className={sectionTitle}>Quick Links</h3>
                <ul className="flex flex-col gap-5">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-base leading-[1.5] text-[#9db6f6] transition-colors hover:text-[#c4d4fc]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <p className={`${captionGold} whitespace-normal sm:whitespace-nowrap`}>Popular searches</p>
              <button
                type="button"
                className="shrink-0 cursor-pointer text-[#ab8b51] transition-opacity hover:opacity-80"
                onClick={() => setPopularOpen((v) => !v)}
                aria-expanded={popularOpen}
                aria-controls="popular-searches-list"
              >
                <IconPlus className="size-6" open={popularOpen} />
              </button>
            </div>

            <div
              id="popular-searches-list"
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                popularOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-1 text-sm leading-[1.5] text-[#9db6f6]">
                {popularSearches.map((text, i) => (
                  <Fragment key={text}>
                    {i > 0 ? (
                      <span className="hidden h-6 w-px shrink-0 bg-[#9db6f6]/35 sm:block" aria-hidden />
                    ) : null}
                    <a href="#" className="whitespace-nowrap hover:text-[#c4d4fc]">
                      {text}
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#9db6f6]/25" aria-hidden />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="flex flex-col gap-8 lg:grid lg:w-full lg:grid-cols-[382px_auto_370px] lg:items-center lg:gap-6">
              <div className="flex flex-wrap items-center gap-[13px] text-xs leading-[1.5] text-[#9db6f6] lg:w-[382px] lg:justify-start">
                <span>Copyright © 2026. DBS Workspace</span>
                <span className="hidden h-3 w-px bg-[#9db6f6]/45 sm:block" aria-hidden />
                <span>Designed by Repindia</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-self-center lg:min-w-[204px]">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded-full border border-[#9db6f6] p-2 text-[#9db6f6] transition-colors hover:bg-[#9db6f6]/10"
                  >
                    <Icon className="size-6" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-[13px] text-xs leading-[1.5] text-[#9db6f6] lg:w-[370px] lg:justify-end">
                <a href="#" className="hover:text-[#c4d4fc]">
                  Privacy Policy
                </a>
                <span className="h-3 w-px bg-[#9db6f6]/45" aria-hidden />
                <a href="#" className="hover:text-[#c4d4fc]">
                  Terms of Service
                </a>
                <span className="h-3 w-px bg-[#9db6f6]/45" aria-hidden />
                <a href="#" className="hover:text-[#c4d4fc]">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
