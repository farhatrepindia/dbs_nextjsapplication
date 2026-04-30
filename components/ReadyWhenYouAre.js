"use client";

import { useState } from "react";

function Field({ children }) {
  return <div className="block border-b border-[#1c2e62]/40 pb-3 text-sm leading-[1.5] text-[#1c2e62]">{children}</div>;
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

  const onFieldChange = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="bg-[#e0e0e0] py-16 md:py-20 lg:py-[72px]">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-[40px] md:text-5xl lg:text-[48px] leading-[1.2] font-semibold text-[#1c2e62]">Ready When You Are</h2>
        <p className="mt-2 text-center text-base text-[#1c2e62]">Every team needs the right environment. Let&apos;s design yours.</p>
        <form className="mx-auto mt-14 max-w-[1022px] space-y-11" onSubmit={handleSubmit}>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <Field>
              <select value={form.location} onChange={onFieldChange("location")} className="w-full bg-transparent outline-none">
                <option value="">Select Location *</option>
                <option>Mumbai</option>
                <option>New Delhi</option>
                <option>Kolkata</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Bengaluru</option>
              </select>
            </Field>
            <Field>
              <select value={form.officeType} onChange={onFieldChange("officeType")} className="w-full bg-transparent outline-none">
                <option value="">Select Type of Office *</option>
                <option>Complete Office</option>
                <option>Customise Office</option>
                <option>Shared Office</option>
                <option>Virtual Office</option>
              </select>
            </Field>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            <Field>
              <select value={form.teamSize} onChange={onFieldChange("teamSize")} className="w-full bg-transparent outline-none">
                <option value="">Team Size *</option>
                <option>1-10</option>
                <option>11-25</option>
                <option>26-50</option>
                <option>51-100</option>
                <option>100+</option>
              </select>
            </Field>
            <Field>
              <input
                type="date"
                value={form.moveInDate}
                onChange={onFieldChange("moveInDate")}
                className="w-full bg-transparent outline-none"
                placeholder="Move-In Date *"
              />
            </Field>
            <Field>
              <select value={form.businessSector} onChange={onFieldChange("businessSector")} className="w-full bg-transparent outline-none">
                <option value="">Business Sector *</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Consulting</option>
                <option>Design</option>
                <option>Other</option>
              </select>
            </Field>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            <Field>
              <input
                type="text"
                value={form.yourName}
                onChange={onFieldChange("yourName")}
                className="w-full bg-transparent outline-none"
                placeholder="Your Name *"
              />
            </Field>
            <Field>
              <input
                type="text"
                value={form.companyName}
                onChange={onFieldChange("companyName")}
                className="w-full bg-transparent outline-none"
                placeholder="Company Name *"
              />
            </Field>
            <Field>
              <input
                type="email"
                value={form.email}
                onChange={onFieldChange("email")}
                className="w-full bg-transparent outline-none"
                placeholder="Email *"
              />
            </Field>
          </div>
          <Field>
            <input
              type="text"
              value={form.notes}
              onChange={onFieldChange("notes")}
              className="w-full bg-transparent outline-none"
              placeholder="Anything Else We Should Know?"
            />
          </Field>
          <div className="pt-9 text-center">
            <button type="submit" className="text-2xl md:text-[32px] font-semibold uppercase text-[#ab8b51]">
              Let&apos;s Get Talking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
