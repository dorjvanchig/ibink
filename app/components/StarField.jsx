"use client";
import { useEffect, useRef } from "react";

function makeShadows(n, max = 2000) {
  const parts = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * max);
    const y = Math.floor(Math.random() * max);
    parts.push(`${x}px ${y}px #FFF`);
  }
  return parts.join(", ");
}

export default function StarField() {
  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);

  useEffect(() => {
    if (s1.current) s1.current.style.boxShadow = makeShadows(700);
    if (s2.current) s2.current.style.boxShadow = makeShadows(200);
    if (s3.current) s3.current.style.boxShadow = makeShadows(100);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div id="stars" ref={s1} />
      <div id="stars2" ref={s2} />
      <div id="stars3" ref={s3} />
    </div>
  );
}
