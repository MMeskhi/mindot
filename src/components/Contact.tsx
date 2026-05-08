"use client";

import { FormEvent, useState } from "react";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="3" width="16" height="12" rx="2" stroke="#FF5A1F" strokeWidth="1.5" />
      <path d="M1 6l8 5 8-5" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 2h4l1.5 4-2 1.5a10 10 0 004 4L12 9.5l4 1.5v4a1 1 0 01-1 1C6 16 2 10 2 3a1 1 0 011-1z"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 1a6 6 0 016 6c0 4-6 10-6 10S3 11 3 7a6 6 0 016-6z"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="7" r="2" stroke="#FF5A1F" strokeWidth="1.5" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
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
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6 text-[#F5F7FA]">
              Let&apos;s Start
              <br />
              A Project Together
            </h2>
            <p className="text-[#76828E] text-sm leading-relaxed mb-10">
              Have a question or want to work together?
              <br />
              We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { Icon: MailIcon,  label: "Email Us",  value: "hello@mindot.studio" },
                { Icon: PhoneIcon, label: "Call Us",   value: "+1 (234) 567-8901" },
                { Icon: PinIcon,   label: "Visit Us",  value: "123 Design Street\nSan Francisco, CA" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#0057B8]/30 rounded-sm bg-[#023661]">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#76828E] tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="text-sm text-[#F5F7FA] whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className={inputClass}
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className={inputClass}
                placeholder="Your Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className={inputClass}
                placeholder="Company (Optional)"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <input
                className={inputClass}
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
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
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
