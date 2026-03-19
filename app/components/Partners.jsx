"use client";

import Image from "next/image";
import { useRef } from "react";

const partners = [
  { name: "1", logo: "/partners/partner1.png" },
  { name: "2", logo: "/partners/partner1.png" },
  { name: "3", logo: "/partners/partner1.png" },
  { name: "4", logo: "/partners/partner1.png" },
  { name: "5", logo: "/partners/partner1.png" },
  { name: "6", logo: "/partners/partner1.png" },
  { name: "7", logo: "/partners/partner1.png" },
  { name: "8", logo: "/partners/partner1.png" },
  { name: "9", logo: "/partners/partner1.png" },
  { name: "10", logo: "/partners/partner1.png" },
  { name: "11", logo: "/partners/partner1.png" },
  { name: "12", logo: "/partners/partner1.png" },
  { name: "13", logo: "/partners/partner1.png" },
  { name: "14", logo: "/partners/partner1.png" },
  { name: "15", logo: "/partners/partner1.png" },
  { name: "16", logo: "/partners/partner1.png" },
  { name: "17", logo: "/partners/partner1.png" },
  { name: "18", logo: "/partners/partner1.png" },
  { name: "19", logo: "/partners/partner1.png" },
  { name: "20", logo: "/partners/partner1.png" },
  { name: "21", logo: "/partners/partner1.png" },
  { name: "22", logo: "/partners/partner1.png" },
  { name: "23", logo: "/partners/partner1.png" },
  { name: "24", logo: "/partners/partner1.png" },
  { name: "25", logo: "/partners/partner1.png" },
  { name: "26", logo: "/partners/partner1.png" },
];

const all = [...partners, ...partners];

export default function Partners() {
  const track1 = useRef(null);
  const track2 = useRef(null);

  return (
    <section className="py-20 border-t border-[rgba(26,79,160,0.08)] reveal overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-12 mb-12">
        <p className="font-mono text-[16px] tracking-[2.5px] uppercase text-[rgba(26,79,160,0.5)] mb-3">
          Хамтрагч байгууллагууд
        </p>
        <h2 className="font-syne font-bold text-[clamp(32px,4.5vw,54px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657] max-w-2xl">
          Монголын тэргүүлэх{" "}
          <em className="font-normal italic text-[#2d7dd2]">байгууллагуудын</em>{" "}
          итгэл
        </h2>
        <p className="mt-4 text-[16px] text-[rgba(13,38,87,0.5)] font-medium max-w-md leading-[1.7]">
          Монгол улсын 3000 орчим байгууллага манай бүтээгдэхүүнийг өдөр тутмын
          үйл ажиллагаандаа хэрэглэж байна.
        </p>
      </div>

      <div className="relative mb-3">
        <FadeMask />
        <div
          ref={track1}
          className="flex gap-3 w-max"
          style={{
            animation: "scrollLeft 40s linear infinite",
            willChange: "transform",
          }}
        >
          {all.map((p, i) => (
            <LogoCard key={`r1-${i}`} partner={p} />
          ))}
        </div>
      </div>

      <div className="relative">
        <FadeMask />
        <div
          ref={track2}
          className="flex gap-3 w-max"
          style={{
            animation: "scrollRight 48s linear infinite",
            willChange: "transform",
          }}
        >
          {[...all].reverse().map((p, i) => (
            <LogoCard key={`r2-${i}`} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({ partner }) {
  return (
    <div
      className="shrink-0 flex flex-col items-center justify-center gap-2 bg-white hover:bg-[#f0f5ff] border border-[rgba(26,79,160,0.1)] hover:border-[rgba(26,79,160,0.25)] rounded-xl px-5 py-4 transition-all duration-200 group cursor-default"
      style={{ width: 130, height: 110 }}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={48}
          height={48}
          draggable={false}
          className="object-contain w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
        />
      </div>

      <span className="text-[12px] font-medium text-[rgba(13,38,87,0.5)] group-hover:text-[#0d2657] transition-colors duration-200 text-center leading-tight w-full truncate">
        {partner.name}
      </span>
    </div>
  );
}
function FadeMask() {
  return (
    <>
      <div
        className="absolute left-0 top-0 bottom-0 w-26 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-26 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white, transparent)" }}
      />
    </>
  );
}
