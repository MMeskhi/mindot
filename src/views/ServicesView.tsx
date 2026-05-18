"use client";

import Services from "@/components/Services";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function ServicesView() {
  // lower threshold — services section is very tall
  const ref = useSectionInView("services", 0.1);
  return (
    <div ref={ref}>
      <Services />
    </div>
  );
}
