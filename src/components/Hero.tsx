import Link from "next/link";
import { hero } from "@/server/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0057B8] opacity-10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          <p className="text-[#FF5A1F] text-xs font-bold tracking-[0.25em] uppercase">
            {hero.eyebrow}
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] uppercase text-[#F5F7FA]">
            {hero.headingLine1}
            <br />
            {hero.headingLine2}
            <span className="text-[#FF5A1F]">.</span>
          </h1>

          <p className="text-[#76828E] text-base leading-relaxed max-w-sm">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={hero.primaryCta.href}
              className="flex items-center gap-2 bg-[#FF5A1F] text-white text-xs font-bold tracking-widest px-6 py-3.5 rounded-sm hover:bg-[#FF7A3D] transition-colors"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="flex items-center gap-2 border border-[#0057B8]/50 text-[#F5F7FA] text-xs font-bold tracking-widest px-6 py-3.5 rounded-sm hover:border-[#0057B8] hover:bg-[#0057B8]/10 transition-colors"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-6 text-[#76828E]">
            <div className="w-px h-8 bg-[#0057B8]/40" />
            <span className="text-[10px] tracking-[0.2em] uppercase">{hero.scrollLabel}</span>
          </div>
        </div>

        {/* Right — decorative circles */}
        <div className="relative flex items-center justify-center h-80 md:h-[520px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#FF5A1F]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[420px] md:h-[420px] rounded-full border border-[#0057B8]/30" />
          <div className="absolute bottom-8 left-1/4 w-5 h-5 rounded-full bg-[#FF5A1F]" />
        </div>
      </div>
    </section>
  );
}
