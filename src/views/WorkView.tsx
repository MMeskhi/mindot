"use client";

import Work from "@/components/Work";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function WorkView() {
  const ref = useSectionInView("work", 0.3);
  return (
    <div ref={ref}>
      <Work />
    </div>
  );
}
