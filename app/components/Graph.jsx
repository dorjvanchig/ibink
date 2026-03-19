import React from "react";

export default function Graph() {
  return (
    <>
      <div className="max-w-content mx-auto px-6 md:px-12 mt-14">
        <div className="grid grid-cols-3 gap-px bg-[rgba(26,79,160,0.1)] border border-[rgba(26,79,160,0.12)] rounded-[10px] overflow-hidden">
          {[
            {
              num: "150+",
              label: "Манай бүтээгдэхүүнийг ашигласан байгууллагуудын тоо",
              sub: "",
            },
            { num: "7", label: "Бүтээгдэхүүний тоо", sub: "" },
            {
              num: "14",
              label: "Таны бүтээгдэхүүн бэлэн болох дундаж хоногийн тоо",
              sub: "",
            },
          ].map((s, i) => (
            <div key={i} className="bg-white px-8 py-8">
              <div className="font-syne font-black text-[clamp(28px,3.5vw,44px)] tracking-[-0.04em] text-[#0d2657] leading-none">
                {s.num.replace(/[^0-9]/g, "")}
                <span className="text-[#2d7dd2]">
                  {s.num.replace(/[0-9]/g, "")}
                </span>
              </div>
              <div className="mt-2">
                <span className="block text-[16px] font-medium text-[#0d2657]">
                  {s.label}
                </span>
                <span className="text-[12.5px] text-[rgba(13,38,87,0.45)] font-light">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
