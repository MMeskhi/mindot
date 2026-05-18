"use client";

import Hero from "@/components/Hero";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function HeroView() {
  const ref = useSectionInView("home", 0.5);
  return (
    <div ref={ref}>
      <Hero />
    </div>
  );
}
