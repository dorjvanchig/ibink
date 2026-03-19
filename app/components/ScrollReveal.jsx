"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observe = (el) => {
      if (el.classList.contains("reveal")) {
        intersectionObserver.observe(el);
      }
    };
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach(observe);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.classList?.contains("reveal")) observe(node);
            node.querySelectorAll?.(".reveal").forEach(observe);
          }
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
  return null;
}
