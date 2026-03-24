"use client";

import Image from "next/image";
import { useRef } from "react";

const partners = [
  { name: "Таван Богд Фүүд", logo: "/partners/5 bogd foods.svg" },
  { name: "Таван Богд интэрнэйшил", logo: "/partners/5 bogd.svg" },
  { name: "Abico", logo: "/partners/ABICO.svg" },
  { name: "Алтан Заан ХХК", logo: "/partners/altan zaan.svg" },
  { name: "Алтан Жолоо Импэкс", logo: "/partners/altanJoloo.svg" },
  { name: "Арвайн Үндэс", logo: "/partners/arvain.png" },
  { name: "Au Trade", logo: "/partners/au trade.svg" },
  { name: "АЗ Хур", logo: "/partners/azHur.svg" },
  { name: "Байгал", logo: "/partners/baigal.svg" },
  { name: "Басса", logo: "/partners/bassa.svg" },
  { name: "Баясах Хульж ХХК", logo: "/partners/baysahHulij.svg" },
  { name: "Боса Импекс ХХК", logo: "/partners/bosaImpeks.svg" },
  { name: "Дархан Ус", logo: "/partners/darhanUs.svg" },
  { name: "Royal Foods", logo: "/partners/FOOD.svg" },
  { name: "Gem International", logo: "/partners/gem.svg" },
  { name: "GN Beverages", logo: "/partners/GNB.svg" },
  { name: "МУЗН", logo: "/partners/MUZN.svg" },
  { name: "Seeds Bakery", logo: "/partners/seeds garden.svg" },
  { name: "Шувуутайн Гол ХХК", logo: "/partners/shuwutain gol.svg" },
  { name: "Витафит Милк", logo: "/partners/vitafit.svg" },
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
      className="shrink-0 flex flex-col items-center justify-between bg-white hover:bg-[#f0f5ff] border border-[rgba(26,79,160,0.1)] hover:border-[rgba(26,79,160,0.25)] rounded-xl transition-all duration-200 group cursor-default p-3"
      style={{ width: 140, height: 140 }}
    >
      {/* Logo — fills available space above the name */}
      <div className="relative w-full flex-1 min-h-0">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          draggable={false}
          className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
        />
      </div>

      {/* Name */}
      <span className="mt-2 text-[11px] font-medium text-[rgba(13,38,87,0.45)] group-hover:text-[#0d2657] transition-colors duration-200 text-center leading-tight w-full truncate shrink-0">
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
