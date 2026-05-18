"use client";

import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export function useSectionInView(sectionName: string, threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      },
      // fires when the section enters the middle band of the viewport
      { rootMargin: "0px 0px -50% 0px", threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName, setActiveSection, timeOfLastClick, threshold]);

  return ref;
}
