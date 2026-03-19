"use client";

import { useState, useEffect, useRef } from "react";
import TextType from "./TextType";

export default function Text() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-6 md:px-12 relative overflow-hidden bg-white"
    >
      <div className="max-w-content mx-auto flex flex-col items-center text-center">
        <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-6">
          Манай эрхэм зорилго
        </p>
        <h2 className="font-syne font-black text-[clamp(24px,3.5vw,52px)] leading-[1.05] tracking-[-0.04em] text-[#0d2657] max-w-4xl">
          Хэн бүхэнд{" "}
          <em className="font-normal italic text-[#2d7dd2]">
            {isVisible ? (
              <TextType
                as="span"
                text={["хязгааргүй боломж олгож, баяр баяслыг мэдэрнэ."]}
                typingSpeed={60}
                deletingSpeed={35}
                pauseDuration={2000}
                loop
                showCursor
                cursorCharacter="|"
                cursorClassName="text-[#2d7dd2] opacity-70"
                cursorBlinkDuration={0.5}
                className="font-normal italic text-[#2d7dd2]"
              />
            ) : (
              <span className="opacity-0">|</span>
            )}
          </em>
        </h2>
        <div
          className="mt-10 w-16 h-0.5 rounded-full"
          style={{ background: "linear-gradient(90deg, #1a4fa0, #5bb8f5)" }}
        />
      </div>
    </section>
  );
}
