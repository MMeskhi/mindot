"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks, siteInfo } from "@/server/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import MindotLogo from "@/assets/mindot-logo.svg";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick(section: string) {
    setActiveSection(section);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#011729]/20 backdrop-blur-sm border-b border-[#0057B8]/15">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => handleNavClick("home")}
          className="flex items-center flex-1"
        >
          <MindotLogo className="w-32" aria-label={siteInfo.name} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 mr-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => handleNavClick(link.section)}
                  className={`text-xs font-semibold tracking-widest transition-colors hover:text-[#FF5A1F] ${
                    isActive
                      ? "text-[#F5F7FA] border-b-2 border-[#FF5A1F] pb-0.5"
                      : "text-[#76828E]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          onClick={() => handleNavClick("contact")}
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
        <div className="md:hidden bg-[#010a13] border-t border-[#0057B8]/20 px-6 py-8 flex flex-col gap-6 h-screen">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.section)}
                className={`font-semibold tracking-widest transition-colors hover:text-[#FF5A1F] ${
                  isActive ? "text-[#FF5A1F]" : "text-[#76828E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="self-start flex items-center gap-2 bg-[#FF5A1F] text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded-sm"
          >
            LET&apos;S TALK →
          </Link>
        </div>
      )}
    </nav>
  );
}
