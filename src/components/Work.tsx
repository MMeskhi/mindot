"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { projects, workSection } from "@/server/data";

function getPerPage() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="rounded-sm overflow-hidden group cursor-pointer border border-[#0057B8]/20 hover:border-[#0057B8]/50 transition-colors">
      <div
        className={`bg-linear-to-br ${project.bg} h-56 flex items-center justify-center relative`}
      >
        <Image
          src={project.image}
          fill
          alt={project.name}
          className="w-auto absolute inset-0 -z-10"
        />
      </div>
      <div className="bg-[#023661]/40 px-5 py-4 flex items-center justify-between">
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
  const [perPage, setPerPage] = useState(3);
  const [active, setActive] = useState(0);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const pp = getPerPage();
      setPerPage(pp);
      setActive((a) => Math.min(a, Math.max(0, projects.length - pp)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, projects.length - perPage);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(maxIndex, a + 1));

  const onPointerStart = (x: number) => {
    dragStartX.current = x;
  };

  const onPointerEnd = (x: number) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - x;
    if (delta > 50) next();
    else if (delta < -50) prev();
    dragStartX.current = null;
  };

  return (
    <section id="work" className="py-24">
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
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Track */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => onPointerStart(e.clientX)}
            onMouseUp={(e) => onPointerEnd(e.clientX)}
            onMouseLeave={() => {
              dragStartX.current = null;
            }}
            onTouchStart={(e) => onPointerStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onPointerEnd(e.changedTouches[0].clientX)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${active * (100 / perPage)}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / perPage}%` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === active
                  ? "w-3 h-3 bg-[#FF5A1F]"
                  : "w-3 h-3 bg-[#76828E] hover:bg-[#0057B8]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
