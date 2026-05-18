"use client";

import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>;
}
