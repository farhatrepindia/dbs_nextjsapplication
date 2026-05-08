"use client";

import { useRef, useState } from "react";

const LOCATION_LABELS = {
  mumbai: "Mumbai",
  delhi: "New Delhi",
  kolkata: "Kolkata",
  hyderabad: "Hyderabad",
  chennai: "Chennai",
  bengaluru: "Bengaluru",
};

const OFFICE_LABELS = {
  complete: "Complete Office",
  customise: "Customise Office",
  shared: "Shared Office",
  virtual: "Virtual Office",
};

function ChevronDown({ className, open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${className} transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowUpRightGold(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UnderlineSelect({ placeholderText, value, onChange, getLabel, required: isRequired, name, children }) {
  const display = value ? getLabel?.(value) ?? "" : "";

  return (
    <div className="relative flex flex-col">
      <div className="relative flex items-start justify-between gap-4 border-b border-[#1c2e62] pb-3">
        <span className="pointer-events-none block min-h-[1.25rem] text-sm leading-[1.5] text-[#1c2e62]">
          {display || placeholderText}
        </span>
        <span className="pointer-events-none shrink-0">
          <ChevronDown className="size-6 text-[#1c2e62]" open={false} />
        </span>

        <select
          name={name}
          value={value}
          required={isRequired}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 z-[1] cursor-pointer opacity-0"
          aria-label={placeholderText.replace(/\s*\*$/, "").trim()}
        >
          <option value="" disabled>
            {placeholderText}
          </option>
          {children}
        </select>
      </div>
    </div>
  );
}

/** Native date picker with Figma-aligned chrome (chevron row + underline only). */
function UnderlineDateField({ placeholderText, value, onChange, required: isRequired, name }) {
  const inputRef = useRef(null);
  const formatted =
    value &&
    new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(value + "T12:00:00"));

  return (
    <div className="relative flex flex-col">
      <div className="relative flex items-start justify-between gap-4 border-b border-[#1c2e62] pb-3">
        <span className={`pointer-events-none block min-h-[1.25rem] text-sm leading-[1.5] ${formatted ? "text-[#1c2e62]" : "text-[#1c2e62]"}`}>
          {formatted || placeholderText}
        </span>
        <button
          type="button"
          className="relative z-[2] shrink-0 rounded-sm outline-none ring-[#1c2e62] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e0e0e0]"
          aria-label="Open calendar"
          onClick={() => {
            const el = inputRef.current;
            if (!el) return;
            el.showPicker?.();
            el.focus();
            el.click();
          }}
        >
          <ChevronDown className="size-6 text-[#1c2e62]" open={false} />
        </button>
        <input
          ref={inputRef}
          type="date"
          name={name}
          value={value}
          required={isRequired}
          onChange={onChange}
          className="absolute inset-0 z-[1] cursor-pointer opacity-0"
          aria-label={placeholderText.replace(/\s*\*$/, "").trim()}
        />
      </div>
    </div>
  );
}

export default function ReadyWhenYouAre() {
  const [form, setForm] = useState({
    location: "",
    officeType: "",
    teamSize: "",
    moveInDate: "",
    businessSector: "",
    yourName: "",
    companyName: "",
    email: "",
    notes: "",
  });

  const setField = (key) => (value) => setForm((prev) => ({ ...prev, [key]: value }));

  const onInputChange = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const ruleCls = "border-b border-[#1c2e62] bg-transparent pb-3";

  const inputCls =
    `w-full ${ruleCls} text-sm font-normal text-[#1c2e62] outline-none placeholder:text-[#1c2e62]`;

  return (
    <section className="bg-[#e0e0e0]">
      <div className="custom-container pb-16 pt-[72px] lg:pb-[100px] lg:pt-[91px]">
        <div className="mx-auto w-full max-w-[1022px]">
          <div className="mx-auto flex max-w-[673px] flex-col items-center gap-1 text-center text-[#1c2e62]">
            <h2 className="w-full text-[36px] font-semibold leading-[1.2] sm:text-[42px] lg:text-[48px]">Ready When You Are</h2>
            <p className="text-base font-normal leading-[1.5]">Every team needs the right environment. Let&apos;s design yours.</p>
          </div>

          <form className="mx-auto mt-[72px] flex w-full flex-col gap-[66px]" onSubmit={handleSubmit} noValidate={false}>
          <div className="grid grid-cols-1 gap-y-10 gap-x-12 lg:grid-cols-2 lg:gap-y-0">
            <UnderlineSelect
              placeholderText="Select Location *"
              name="location"
              value={form.location}
              onChange={setField("location")}
              getLabel={(v) => LOCATION_LABELS[v] || ""}
              required
            >
              <option value="mumbai">Mumbai</option>
              <option value="delhi">New Delhi</option>
              <option value="kolkata">Kolkata</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="chennai">Chennai</option>
              <option value="bengaluru">Bengaluru</option>
            </UnderlineSelect>
            <UnderlineSelect
              placeholderText="Select Type of Office *"
              name="officeType"
              value={form.officeType}
              onChange={setField("officeType")}
              getLabel={(v) => OFFICE_LABELS[v] || ""}
              required
            >
              <option value="complete">Complete Office</option>
              <option value="customise">Customise Office</option>
              <option value="shared">Shared Office</option>
              <option value="virtual">Virtual Office</option>
            </UnderlineSelect>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-[60px] lg:grid-cols-3 lg:gap-y-0">
            <input
              type="text"
              inputMode="numeric"
              name="teamSize"
              value={form.teamSize}
              onChange={onInputChange("teamSize")}
              required
              className={inputCls}
              placeholder="Team Size *"
              aria-label="Team Size"
            />

            <UnderlineDateField
              placeholderText="Move-In Date *"
              name="moveInDate"
              value={form.moveInDate}
              onChange={onInputChange("moveInDate")}
              required
            />

            <input
              type="text"
              name="businessSector"
              value={form.businessSector}
              onChange={onInputChange("businessSector")}
              required
              className={inputCls}
              placeholder="Business Sector *"
              aria-label="Business Sector"
            />
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-[60px] lg:grid-cols-3 lg:gap-y-0">
            <input type="text" name="yourName" value={form.yourName} onChange={onInputChange("yourName")} required className={inputCls} placeholder="Your Name *" aria-label="Your Name" />
            <input type="text" name="companyName" value={form.companyName} onChange={onInputChange("companyName")} required className={inputCls} placeholder="Company Name *" aria-label="Company Name" />
            <input type="email" name="email" value={form.email} onChange={onInputChange("email")} required className={inputCls} placeholder="Email *" aria-label="Email" />
          </div>

          <div className="grid grid-cols-1">
            <input
              type="text"
              name="notes"
              value={form.notes}
              onChange={onInputChange("notes")}
              className={inputCls}
              placeholder="Anything Else We Should Know?"
              aria-label="Additional notes"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-[18px] text-xl font-semibold leading-normal text-[#ab8b51] transition-opacity hover:opacity-85 text-transform-capitalize"
            >
              LET'S GET TALKING
              <IconArrowUpRightGold className="size-6 shrink-0 text-[#ab8b51]" />
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
