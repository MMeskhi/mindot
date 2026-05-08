"use client";

import Link from "next/link";
import { useState } from "react";
import { projects, workSection } from "@/server/data";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="rounded-sm overflow-hidden group cursor-pointer border border-[#0057B8]/20 hover:border-[#0057B8]/50 transition-colors">
      <div className={`bg-linear-to-br ${project.bg} h-56 flex items-center justify-center`}>
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-80">
          <rect x="4" y="4" width="112" height="72" rx="4" stroke="#0057B8" strokeWidth="1" />
          <rect x="12" y="12" width="30" height="56" rx="2" fill="#023661" />
          <rect x="50" y="12" width="60" height="26" rx="2" fill="#023661" />
          <rect x="50" y="42" width="28" height="26" rx="2" fill="#023661" />
          <rect x="82" y="42" width="28" height="26" rx="2" fill="#023661" />
          <path d="M56 30l8-8 6 6 8-10 8 6" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="30" r="10" stroke="#0057B8" strokeWidth="1" />
          <path d="M24 20v10l6 4" stroke="#0057B8" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
      <div className="bg-[#023661] px-5 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-[#F5F7FA] font-bold text-sm">{project.name}</h3>
          <p className="text-[#FF5A1F] text-xs mt-0.5">{project.category}</p>
        </div>
        <span className="text-[#FF5A1F] text-lg">→</span>
      </div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="py-24 bg-[#011729]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#FF5A1F] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              {workSection.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-[#F5F7FA]">
              {workSection.heading}
            </h2>
          </div>
          <Link
            href={workSection.viewAllHref}
            className="hidden sm:flex items-center gap-2 text-[#F5F7FA] text-xs font-bold tracking-widest hover:text-[#FF5A1F] transition-colors"
          >
            {workSection.viewAllLabel}
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${
                i === active
                  ? "w-3 h-3 bg-[#FF5A1F]"
                  : "w-2 h-2 bg-[#76828E] hover:bg-[#0057B8]"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
