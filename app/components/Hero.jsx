"use client";

import Link from "next/link";
import Image from "next/image";
import StarField from "./StarField";
import BorderGlow from "./BorderGlow";

export default function Hero() {
  return (
    <section
      className="relative pt-20 pb-0 flex flex-col items-center text-center px-6 overflow-hidden min-h-screen "
      style={{
        background:
          // "radial-gradient(ellipse at bottom, #1d4ed8 0%, #020617 100%)",
          // "linear-gradient(160deg, #0c2a3d 0%, #0369a1 50%, #0ea5e9 100%)",
          "radial-gradient(ellipse at bottom, #2563eb 0%, #0c2a3d 50%,#0a0f1f 100%)",
      }}
    >
      <StarField />

      <div className="relative z-10 flex flex-col items-center">
        <Link
          href="/products"
          className="animate-fade-up-0 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 mb-10"
        >
          <span className="bg-[#e07b3a] text-white font-mono text-[10px] font-medium tracking-[1px] px-2 py-0.5 rounded-full uppercase">
            ШИНЭ
          </span>
          <span className="text-white/60 text-[13px] font-light">
            ОЧ 7.7 — Манай ERP-ийн 7 дахь хувилбар гарлаа
          </span>
          <span className="text-white/30 text-xs">→</span>
        </Link>
        <h1 className="animate-fade-up-2 font-syne font-bold text-[clamp(38px,6vw,72px)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mb-6">
          Бизнесийг{" "}
          <em className="font-normal italic text-[#5bb8f5]">өргөжүүлэх</em>
          <br />
          систем
        </h1>

        <p className="animate-fade-up-3 text-[18px] text-[rgba(255,255,255,0.55)] max-w-lg leading-[1.7] font-normal mb-10">
          Интерактив нь 1996 оноос хойш Монголын бизнес байгууллагуудад санхүү,
          нягтлан бодох бүртгэл, ERP шийдлүүдийг нийлүүлж байна.
        </p>

        <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-3 mb-16">
          <Link
            href="/contact"
            className="rounded-2xl border-2 border-dashed border-white/50 px-6 py-3 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_rgba(255,255,255,0.5)] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
          >
            Холбоо барих
          </Link>
          <Link
            href="/products"
            className="rounded-2xl border-2 border-dashed border-white/50 px-6 py-3 text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_rgba(255,255,255,0.5)] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
          >
            Бүтээгдэхүүн үзэх →
          </Link>
        </div>

        <div className="w-full max-w-5xl mx-auto rounded-t-2xl overflow-hidden shadow-2xl border border-white/10 border-b-0">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#060010"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            {" "}
            <Image
              src="/test2.jpg"
              alt="Dashboard preview"
              width={1200}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="block"
              priority
            />
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}
