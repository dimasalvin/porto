"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function ClientChrome() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
    </>
  );
}
