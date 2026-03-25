"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenisInstance = null;

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenisInstance.destroy();
  }, []);

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
