"use client";

import Contact from "@/components/Contact";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function ContactView() {
  const ref = useSectionInView("contact", 0.4);
  return (
    <div ref={ref}>
      <Contact />
    </div>
  );
}
