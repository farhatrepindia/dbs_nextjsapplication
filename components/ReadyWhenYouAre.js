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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_CHARS = 3;
const MAX_CHARS = 20;

function validateTextLength(value, emptyMessage, fieldLabel, optional = false) {
  const trimmed = value.trim();
  if (!trimmed) return optional ? "" : emptyMessage;

  const length = trimmed.length;
  if (length < MIN_CHARS) {
    return optional
      ? `Please enter at least ${MIN_CHARS} characters.`
      : `Please enter ${fieldLabel} (${MIN_CHARS} to ${MAX_CHARS} characters).`;
  }
  if (length > MAX_CHARS) {
    return optional
      ? `Please enter no more than ${MAX_CHARS} characters.`
      : `Please enter no more than ${MAX_CHARS} characters in ${fieldLabel}.`;
  }

  return "";
}

function validateForm(form) {
  const errors = {};

  if (!form.location) errors.location = "Please select a location.";
  if (!form.officeType) errors.officeType = "Please select a type of office.";

  const teamSize = form.teamSize.trim();
  if (!teamSize) {
    errors.teamSize = "Please enter team size.";
  } else if (!/^\d+$/.test(teamSize) || Number(teamSize) < 1) {
    errors.teamSize = "Please enter a valid team size.";
  }

  if (!form.moveInDate) errors.moveInDate = "Please select a move-in date.";

  const businessSectorError = validateTextLength(
    form.businessSector,
    "Please enter your business sector.",
    "your business sector"
  );
  if (businessSectorError) errors.businessSector = businessSectorError;

  const yourNameError = validateTextLength(
    form.yourName,
    "Please enter your name.",
    "your name"
  );
  if (yourNameError) errors.yourName = yourNameError;

  const companyNameError = validateTextLength(
    form.companyName,
    "Please enter your company name.",
    "your company name"
  );
  if (companyNameError) errors.companyName = companyNameError;

  const email = form.email.trim();
  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const notesError = validateTextLength(form.notes, "", "this field", true);
  if (notesError) errors.notes = notesError;

  return errors;
}

function FieldError({ message }) {
  if (!message) return null;

  return <p className="mt-2 text-xs leading-[1.4] text-[#b42318]">{message}</p>;
}

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

function IconArrowUpRightGold({ className }) {
  return (
    <span className={`relative size-[19px] shrink-0 overflow-hidden ${className || ""}`} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 19"
        fill="none"
        className="absolute left-0 top-0 size-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full group-hover:-translate-y-full"
      >
        <path
          d="M18.3105 0V16.9014H16.3828V3.29004L1.36328 18.3096L0 16.9463L15.0186 1.92773H1.40918V0H18.3105Z"
          fill="currentColor"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 19"
        fill="none"
        className="absolute left-0 top-0 size-full -translate-x-full translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path
          d="M18.3105 0V16.9014H16.3828V3.29004L1.36328 18.3096L0 16.9463L15.0186 1.92773H1.40918V0H18.3105Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function UnderlineSelect({ placeholderText, value, onChange, getLabel, required: isRequired, name, hasError, children }) {
  const display = value ? getLabel?.(value) ?? "" : "";
  const borderCls = hasError ? "border-[#b42318]" : "border-[#1c2e62]";

  return (
    <div className="relative flex flex-col">
      <div className={`relative flex items-start justify-between gap-4 border-b ${borderCls} pb-3`}>
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
function UnderlineDateField({ placeholderText, value, onChange, required: isRequired, name, hasError }) {
  const inputRef = useRef(null);
  const [active, setActive] = useState(false);
  const formatted =
    value &&
    new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(value + "T12:00:00"));
  const borderCls = hasError ? "border-[#b42318]" : "border-[#1c2e62]";

  const openPicker = () => {
    const el = inputRef.current;
    if (!el) return;

    setActive(true);
    try {
      if (typeof el.showPicker === "function") el.showPicker();
      else {
        el.focus();
        el.click();
      }
    } catch {
      el.focus();
      el.click();
    }
  };

  return (
    <div className={`relative flex flex-col ${active ? "z-50" : "z-10"}`}>
      <div
        className={`relative flex cursor-pointer items-start justify-between gap-4 border-b ${borderCls} pb-3`}
        onClick={openPicker}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPicker();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={placeholderText.replace(/\s*\*$/, "").trim()}
      >
        <span className="pointer-events-none block min-h-[1.25rem] text-sm leading-[1.5] text-[#1c2e62]">
          {formatted || placeholderText}
        </span>
        <span className="pointer-events-none shrink-0">
          <ChevronDown className="size-6 text-[#1c2e62]" open={false} />
        </span>
        <input
          ref={inputRef}
          type="date"
          name={name}
          value={value}
          required={isRequired}
          onChange={onChange}
          onBlur={() => setTimeout(() => setActive(false), 300)}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
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
  const [errors, setErrors] = useState({});

  const clearError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const setField = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    clearError(key);
  };

  const onInputChange = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => {
      const nextForm = { ...prev, [key]: value };
      const fieldError = validateForm(nextForm)[key];

      setErrors((prevErrors) => {
        const nextErrors = { ...prevErrors };
        if (fieldError) nextErrors[key] = fieldError;
        else delete nextErrors[key];
        return nextErrors;
      });

      return nextForm;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;
  };

  const ruleCls = "border-b bg-transparent pb-3";
  const inputBorder = (key) => (errors[key] ? "border-[#b42318]" : "border-[#1c2e62]");

  const inputCls = (key) =>
    `w-full ${ruleCls} ${inputBorder(key)} text-sm font-normal text-[#1c2e62] outline-none placeholder:text-[#1c2e62]`;

  return (
    <section className="bg-[#e0e0e0]">
      <div className="custom-container pb-16 pt-[72px] lg:pb-[100px] lg:pt-[91px]">
        <div className="mx-auto w-full max-w-[1022px]">
          <div className="mx-auto flex max-w-[673px] flex-col items-center gap-1 text-center text-[#1c2e62]">
            <h2 className="w-full text-[36px] font-semibold leading-[1.2] sm:text-[42px] lg:text-[48px]">Ready When You Are</h2>
            <p className="text-base font-normal leading-[1.5]">Every team needs the right environment. Let&apos;s design yours.</p>
          </div>

          <form className="relative mx-auto mt-[72px] flex w-full flex-col gap-[66px] overflow-visible" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-y-10 gap-x-12 lg:grid-cols-2 lg:gap-y-0">
            <div>
              <UnderlineSelect
                placeholderText="Select Location *"
                name="location"
                value={form.location}
                onChange={setField("location")}
                getLabel={(v) => LOCATION_LABELS[v] || ""}
                hasError={Boolean(errors.location)}
                required
              >
                <option value="mumbai">Mumbai</option>
                <option value="delhi">New Delhi</option>
                <option value="kolkata">Kolkata</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
                <option value="bengaluru">Bengaluru</option>
              </UnderlineSelect>
              <FieldError message={errors.location} />
            </div>
            <div>
              <UnderlineSelect
                placeholderText="Select Type of Office *"
                name="officeType"
                value={form.officeType}
                onChange={setField("officeType")}
                getLabel={(v) => OFFICE_LABELS[v] || ""}
                hasError={Boolean(errors.officeType)}
                required
              >
                <option value="complete">Complete Office</option>
                <option value="customise">Customise Office</option>
                <option value="shared">Shared Office</option>
                <option value="virtual">Virtual Office</option>
              </UnderlineSelect>
              <FieldError message={errors.officeType} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-[60px] lg:grid-cols-3 lg:gap-y-0">
            <div>
              <input
                type="text"
                inputMode="numeric"
                name="teamSize"
                value={form.teamSize}
                onChange={onInputChange("teamSize")}
                required
                className={inputCls("teamSize")}
                placeholder="Team Size *"
                aria-label="Team Size"
                aria-invalid={Boolean(errors.teamSize)}
              />
              <FieldError message={errors.teamSize} />
            </div>

            <div>
              <UnderlineDateField
                placeholderText="Move-In Date *"
                name="moveInDate"
                value={form.moveInDate}
                onChange={onInputChange("moveInDate")}
                hasError={Boolean(errors.moveInDate)}
                required
              />
              <FieldError message={errors.moveInDate} />
            </div>

            <div>
              <input
                type="text"
                name="businessSector"
                value={form.businessSector}
                onChange={onInputChange("businessSector")}
                required
                className={inputCls("businessSector")}
                placeholder="Business Sector *"
                aria-label="Business Sector"
                aria-invalid={Boolean(errors.businessSector)}
              />
              <FieldError message={errors.businessSector} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-[60px] lg:grid-cols-3 lg:gap-y-0">
            <div>
              <input
                type="text"
                name="yourName"
                value={form.yourName}
                onChange={onInputChange("yourName")}
                required
                className={inputCls("yourName")}
                placeholder="Your Name *"
                aria-label="Your Name"
                aria-invalid={Boolean(errors.yourName)}
              />
              <FieldError message={errors.yourName} />
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={onInputChange("companyName")}
                required
                className={inputCls("companyName")}
                placeholder="Company Name *"
                aria-label="Company Name"
                aria-invalid={Boolean(errors.companyName)}
              />
              <FieldError message={errors.companyName} />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onInputChange("email")}
                required
                className={inputCls("email")}
                placeholder="Email *"
                aria-label="Email"
                aria-invalid={Boolean(errors.email)}
              />
              <FieldError message={errors.email} />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div>
              <input
                type="text"
                name="notes"
                value={form.notes}
                onChange={onInputChange("notes")}
                className={inputCls("notes")}
                placeholder="Anything Else We Should Know?"
                aria-label="Additional notes"
                aria-invalid={Boolean(errors.notes)}
              />
              <FieldError message={errors.notes} />
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-[18px] text-xl font-semibold capitalize leading-normal text-[#ab8b51] transition-opacity hover:opacity-85 uppercase"
            >
              Let's Get Talking
              <IconArrowUpRightGold className="text-[#ab8b51]" />
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
