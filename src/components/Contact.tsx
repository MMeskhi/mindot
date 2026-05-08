"use client";

import { FormEvent, useState } from "react";
import { contactSection, contactDetails, formFields } from "@/server/data";
import ContactIcon from "@/assets/ContactIcon";

export default function Contact() {
  const [form, setForm] = useState<Record<string, string>>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  const inputClass =
    "bg-[#023661] border border-[#0057B8]/25 rounded-sm px-4 py-3 text-sm text-[#F5F7FA] placeholder:text-[#76828E] focus:outline-none focus:border-[#FF5A1F] transition-colors w-full";

  return (
    <section id="contact" className="py-24 bg-[#011729]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[#FF5A1F] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              {contactSection.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6 text-[#F5F7FA]">
              {contactSection.headingLine1}
              <br />
              {contactSection.headingLine2}
            </h2>
            <p className="text-[#76828E] text-sm leading-relaxed mb-10 whitespace-pre-line">
              {contactSection.description}
            </p>

            <div className="flex flex-col gap-5">
              {contactDetails.map(({ iconKey, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#0057B8]/30 rounded-sm bg-[#023661]">
                    <ContactIcon id={iconKey} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#76828E] tracking-widest uppercase mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-[#F5F7FA] whitespace-pre-line">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {formFields.slice(0, 2).map((field) => (
                <input
                  key={field.name}
                  className={inputClass}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={form[field.name]}
                  onChange={(e) =>
                    setForm({ ...form, [field.name]: e.target.value })
                  }
                  required={field.required}
                />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {formFields.slice(2, 4).map((field) => (
                <input
                  key={field.name}
                  className={inputClass}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={form[field.name]}
                  onChange={(e) =>
                    setForm({ ...form, [field.name]: e.target.value })
                  }
                  required={field.required}
                />
              ))}
            </div>
            <textarea
              className={`${inputClass} resize-none h-36`}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="self-start flex items-center gap-2 bg-[#FF5A1F] text-white text-xs font-bold tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#FF7A3D] transition-colors"
            >
              {contactSection.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
