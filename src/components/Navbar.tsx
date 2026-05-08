"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteInfo } from "@/server/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#011729]/90 backdrop-blur-sm border-b border-[#0057B8]/15">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#FF5A1F]">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#FF5A1F" strokeWidth="1.5" />
              <path
                d="M9 14c0-2.8 2.2-5 5-5s5 2.2 5 5M9 14c0 1.4.6 2.6 1.5 3.5M19 14c0 1.4-.6 2.6-1.5 3.5M12 11.5c0-1.1.9-2 2-2s2 .9 2 2M14 9v-1M11 10l-.7-.7M17 10l.7-.7M9 14h-1M20 14h-1"
                stroke="#FF5A1F"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[#F5F7FA] font-semibold text-lg tracking-wide">
            {siteInfo.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-xs font-semibold tracking-widest transition-colors hover:text-[#FF5A1F] ${
                  i === 0
                    ? "text-[#F5F7FA] border-b-2 border-[#FF5A1F] pb-0.5"
                    : "text-[#76828E]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#FF5A1F] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-sm hover:bg-[#FF7A3D] transition-colors"
        >
          LET&apos;S TALK <span>→</span>
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#F5F7FA] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#F5F7FA] mb-1" />
          <div className="w-5 h-0.5 bg-[#F5F7FA] mb-1" />
          <div className="w-5 h-0.5 bg-[#F5F7FA]" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#023661] border-t border-[#0057B8]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold tracking-widest text-[#76828E] hover:text-[#FF5A1F]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="self-start flex items-center gap-2 bg-[#FF5A1F] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-sm"
          >
            LET&apos;S TALK →
          </Link>
        </div>
      )}
    </nav>
  );
}
