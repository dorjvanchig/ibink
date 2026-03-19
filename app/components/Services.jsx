"use client";

import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
const services = [
  {
    num: "01",
    name: "Зөвлөх үйлчилгээ",
    mn: "ERP-ийн үр өгөөж",
    desc: "Таны бизнесийн онцлогт тохирсон ERP-ийн хөрөнгө оруулалтын буцаалтыг тооцоолж өгнө",
    href: "/services",
  },
  {
    num: "02",
    name: "Борлуулалтын үйлчилгээ",
    mn: "Худалдан авахаас өмнө",
    desc: "Танилцуулга, туршилт, асуулт хариулт — шийдвэр гаргахад бүрэн дэмжлэг",
    href: "/services",
  },
  {
    num: "03",
    name: "Нэвтрүүлэлт",
    mn: "Худалдан авсны дараа",
    desc: "Системийн тохиргоо, ажилтнуудын сургалт, шилжилтийн дэмжлэг — амжилттай нэвтрүүлэх хүртэл",
    href: "/services",
  },
  {
    num: "04",
    name: "IT үйлчилгээ",
    mn: "Техник, тоног төхөөрөмж",
    desc: "Серверийн тохиргоо, сүлжээний тохиргоо, тоног төхөөрөмжийн үйлчилгээ",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-content mx-auto reveal">
      <p className="font-mono text-[16px] tracking-[2.5px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
        Үйлчилгээ
      </p>
      <h2 className="font-syne font-bold text-[clamp(32px,4.5vw,54px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657]">
        Худалдан авалтаас
        <br />
        хэрэгжүүлэлт хүртэл{" "}
        <em style={{ fontStyle: "italic", color: "#2d7dd2" }}>бүгдийг</em>
      </h2>

      <div className="mt-14 border-t border-[rgba(26,79,160,0.1)]">
        {services.map((s) => (
          <Link
            key={s.num}
            href={s.href}
            className="group flex items-center gap-10 py-7 border-b border-[rgba(26,79,160,0.1)] hover:pl-2 hover:bg-[#f0f5ff] transition-all duration-200 rounded-sm"
          >
            <span className="font-mono text-[16px] text-[rgba(13,38,87,0.3)] tracking-[1px] min-w-14 hidden md:block">
              {s.num}
            </span>

            <div className="min-w-65">
              <span className="font-syne font-semibold text-[23px] tracking-[-0.02em] text-[#0d2657] leading-tight">
                {s.name}
              </span>
              <span className="block font-medium text-[16px] text-[rgba(13,38,87,0.4)] mt-0.5">
                {s.mn}
              </span>
            </div>

            <p className="flex-1 text-[14px] text-[rgba(13,38,87,0.55)] leading-[1.6] font-medium hidden sm:block">
              {s.desc}
            </p>

            <RightOutlined className="text-[rgba(11,1,1,0.25)] text-xl group-hover:translate-x-1 group-hover:text-[#1a4fa0] transition-all duration-200 flex shrink-0 pr-4" />
          </Link>
        ))}
      </div>
    </section>
  );
}
