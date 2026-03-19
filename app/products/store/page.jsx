"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckOutlined } from "@ant-design/icons";

const tabs = [
  { id: "about", label: "Бүтээгдэхүүний тухай" },
  { id: "modules", label: "Системийн үндсэн модулиуд" },
  { id: "pricing", label: "Үнийн санал" },
  { id: "requirements", label: "Техникийн шаардлага" },
];

const C = {
  main: "#7c3aed",
  medium: "#a855f7",
  surface: "#faf5ff",
  border: "rgba(124,58,237,0.2)",
  borderStr: "rgba(124,58,237,0.35)",
};

const modules = [
  {
    name: "Тасгийн тохиргоо",
    desc: "Тухайн тасагт ямар бараа зарагдах, бөөний болон жижиглэнгийн үнэ нь хэд байхыг тохируулна.",
    features: [
      "Тасгийн үнийн тохиргоо",
      "Бөөн ба жижиглэн үнэ",
      "Барааны харьяалал",
    ],
  },
  {
    name: "Барааны тохиргоо",
    desc: "Нэг болон олон барааны хувьд зэрэг тохируулга хийж болно. Ерөнхий мэдээлэл, баар код, үнэ, хямдрал зэрэг бүх тохируулгыг нэг дороос.",
    features: [
      "Ерөнхий мэдээлэл — бүлэг, сери цувралын дугаар, баталгаат хугацаа",
      "Баар кодын мэдээлэл",
      "Үнийн мэдээлэл, хямдралын бодлого",
      "Барааны хямдралын загвар, урамшуулал",
    ],
  },
  {
    name: "Хямдрал",
    desc: "Дэлгүүрийн барааны болон картын урамшуулал хэдэн хувьтай, ямар дараалалтай байхыг энэ модулаар бүртгэнэ.",
    features: [
      "Бодлогын мэдээлэл",
      "Бодлогыг бараанд тохируулах",
      "Загварын мэдээлэл",
    ],
  },
  {
    name: "Урамшуулал",
    desc: "Барааны урамшууллыг ямар хэлбэрээр, хэдий хугацаатай явагдахыг тохируулна.",
    features: [
      "Дүнгээс хамаарсан урамшуулал",
      "Бараанаас хамаарсан урамшуулал",
    ],
  },
  {
    name: "Фронт оффис (ПОС)",
    desc: "Кассирын борлуулалтын програм. Борлуулсан бүтээгдэхүүний мэдээллийг бүртгэх, төлбөрийн хэмжээг бодож гаргах, тооцоо хийх гар ажиллагааг хөнгөвчилнө.",
    features: [
      "Баар код болон дотоод кодоор борлуулалт",
      "Энгийн болон мэдрэгчтэй дэлгэцийн горим",
      "Оффлайн горимд ажиллах боломж",
      "Өдрийн борлуулалтын жагсаалт",
    ],
  },
  {
    name: "Бак оффис",
    desc: "Дэлгүүрийн бүх үйл явцыг удирдах хэрэгсэл. Гарсан гүйлгээ, төлбөр тооцоог хянаж санхүүгийн систем рүү шилжүүлэх.",
    features: [
      "Гүйлгээний дахин хяналт",
      "Барааны үлдэгдлийн мэдээ",
      "Хямдралын уян хатан загвар",
      "Борлуулалтын шинжилгээ",
    ],
  },
  {
    name: "Гүйлгээ ба тайлан",
    desc: "Талоны жагсаалт, буцаалт, татагдаагүй гүйлгээ, үнийн өөрчлөлтийн түүх зэрэг бүх гүйлгээний бүртгэл.",
    features: [
      "Талоны жагсаалт",
      "Буцаалтын жагсаалт",
      "Татагдаагүй гүйлгээний жагсаалт",
      "Үнийн өөрчлөлтийн түүх",
    ],
  },
  {
    name: "Кассирийн тооцоо",
    desc: "Кассирийн төв кассанд тушааж байгаа орлогыг дэвсгэрт бүрээр, тоо ширхэгээр нь бүртгэж авна.",
    features: [
      "Дэвсгэртийн бүртгэл",
      "Кассын товчоо тайлан",
      "Кассирын борлуулалтын мэдээ",
    ],
  },
  {
    name: "Электрон жин",
    desc: "Дэлгүүр бүрт байгаа электрон жингүүдийг бүртгэж барааны мэдээлэл оруулах бөгөөд ПОС-ийн програмтай холбогдон ажиллана.",
    features: ["Жингийн бүртгэл", "Баар код хэвлэх", "ПОС-тэй холболт"],
  },
  {
    name: "Удирдлагын хяналтын модуль",
    desc: "Удирдлагуудад бизнесээ удирдахад туслах шинжилгээг ойлгомжтой тоон мэдээ, графикаар харуулдаг модуль.",
    features: [
      "Талоны дундаж борлуулалт",
      "Нийт борлуулалтын Drill Down тайлан",
      "Хямдрал, урамшуулал, бонусын тайлан",
      "Борлуулагчийн болон кассирын тайлан",
    ],
  },
];

function ReqTable({ title, rows }) {
  return (
    <div className="mb-10">
      <h3 className="font-syne font-bold text-[16px] italic text-[#0d2657] mb-4 text-center">
        {title}
      </h3>
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: C.border }}
      >
        <table className="w-full text-[16px]">
          <thead>
            <tr
              className="border-b"
              style={{
                background: `rgba(124,58,237,0.05)`,
                borderColor: C.border,
              }}
            >
              <th className="text-left px-4 py-3 font-mono text-[14px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)] w-8">
                /
              </th>
              <th className="text-left px-4 py-3 font-mono text-[14px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Техник хангамжийн жагсаалт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[14px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Клиент компьютерийн үзүүлэлт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[14px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Сервер компьютерийн үзүүлэлт
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="bg-white transition-colors border-b last:border-b-0 hover:bg-[#faf5ff]"
                style={{ borderColor: C.border }}
              >
                <td className="px-4 py-3 font-mono text-[11px] text-[rgba(13,38,87,0.35)] text-center">
                  {i + 1}
                </td>
                <td className="px-4 py-3 text-[rgba(13,38,87,0.7)] font-medium">
                  {row.label}
                </td>
                <td className="px-4 py-3 text-[rgba(13,38,87,0.65)] text-center leading-normal">
                  {row.client}
                </td>
                <td className="px-4 py-3 text-[rgba(13,38,87,0.65)] text-center leading-normal">
                  {row.server}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TabBar({ active, setActive }) {
  return (
    <div
      className="sticky top-16 z-40 bg-white border-b"
      style={{ borderColor: C.border }}
    >
      <div className="max-w-content mx-auto">
        <ul className="grid grid-cols-2 md:hidden">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="border-b border-r last:border-r-0 nth-2:border-r-0 nth-3:border-b-0 nth-4:border-b-0"
              style={{ borderColor: C.border }}
            >
              <button
                onClick={() => setActive(tab.id)}
                className="relative w-full px-3 py-3 text-[11px] font-medium transition-colors text-center leading-tight"
                style={{
                  color: active === tab.id ? C.main : "rgba(13,38,87,0.5)",
                  background:
                    active === tab.id ? "rgba(124,58,237,0.04)" : "transparent",
                }}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline-mobile"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: C.main }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex px-12">
          {tabs.map((tab) => (
            <li key={tab.id} className="shrink-0">
              <button
                onClick={() => setActive(tab.id)}
                className="relative px-5 py-4 text-[13.5px] font-medium transition-colors whitespace-nowrap"
                style={{
                  color: active === tab.id ? C.main : "rgba(13,38,87,0.5)",
                }}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: C.main }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AboutPanel() {
  const capabilities = [
    "Төрөл бүрийн хямдрал урамшууллын бодлого явуулах боломжтой.",
    "Борлуулалттай холбоотой олон төрлийн график шинжилгээ хийнэ.",
    "Барааны үнийн түүх хөтлөгдөнө.",
    "Олон валютаар тооцоо хийх боломжтой.",
    "Бэлэн болон бэлэн бус борлуулалт хийнэ.",
    "Талоны загварыг хүссэнээрээ өөрчлөх боломжтой.",
    "Жижиг дэлгүүрүүдээс эхлэн дунд, том, сүлжээ дэлгүүрүүдэд бүгдэд нь тохиромжтой.",
    "Электрон жин ашиглах боломжтой.",
    "Сериал болон цувралын дугаараар ялган борлуулалт хийнэ.",
    "НӨАТ тооцох эсэхийг тохируулах боломжтой.",
  ];

  const advantages = [
    "Шуурхай үйлчилж, хэрэглэгчдийг татна.",
    "Удирдлагын хяналт хэсгийг ашигласнаар борлуулалт, төлбөрийн мэдээнд бүрэн хяналт тавьж оновчтой шийдвэр гаргахад дөхөмтэй болно.",
    "Сүлжээ дэлгүүрүүдийн хувьд нөөцийг оновчтой хуваарилна.",
    "Нийлүүлэгчтэй тооцоо хурдан нийлж бүртгэх, тооцоход гардаг хүндрэлүүд багасна.",
    "Үргүй зардлыг бууруулна.",
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14 space-y-14">
      <div>
        <h2
          className="font-syne font-bold text-[clamp(20px,3vw,28px)] mb-5"
          style={{ color: C.main }}
        >
          Системийн танилцуулга
        </h2>
        <p className="text-[16px] text-[rgba(13,38,87,0.7)] leading-[1.85] font-medium max-w-3xl">
          Энэхүү систем нь дэлгүүр, супермаркет, бусад бөөний болон жижиглэн
          худалдааны байгууллагын барааны дэлгэрэнгүй бүртгэл, үнийн мэдээлэл,
          борлуулалтын үйл ажиллагааны бүртгэл тооцоог хөтлөн, холбогдох тайлан
          мэдээг боловсруулж, үйлчлүүлэгчдэд түргэн шуурхай үйлчлэх боломжийг
          олгох дэлгүүрийн цогц систем юм.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "10", label: "Үндсэн модуль" },
          { num: "2", label: "Офисын горим" },
          { num: "∞", label: "Барааны тоо" },
          { num: "1996", label: "Үүсгэн байгуулсан" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl px-5 py-5 text-center border"
            style={{ background: C.surface, borderColor: C.border }}
          >
            <div
              className="font-syne font-black text-[32px] tracking-[-0.04em] leading-none"
              style={{ color: C.main }}
            >
              {s.num}
            </div>
            <div className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-syne font-bold text-[20px] text-[#0d2657] mb-5">
          Системийн боломжууд
        </h3>
        <ul className="space-y-3">
          {capabilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[14px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.75]"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 "
                style={{ background: C.medium }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-6">
          Системийг ашигласнаар гарах үр дүн
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl p-4 border"
              style={{ background: C.surface, borderColor: C.border }}
            >
              <span
                className="font-mono text-[11px] shrink-0 mt-0.5"
                style={{ color: C.main }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[13.5px] text-[rgba(13,38,87,0.65)] leading-[1.7] font-medium">
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "🖥️ Фронт оффис (ПОС)",
            desc: "Кассирын борлуулалтын програм. Борлуулсан бүтээгдэхүүний мэдээллийг бүртгэх, төлбөрийн хэмжээг бодож гаргах, тооцоо хийх бүхий л гар ажиллагааг хөнгөвчилж үйлчлүүлэгчдээ түргэн шуурхай үйлчлэх боломж олгоно.",
          },
          {
            title: "📊 Бак оффис",
            desc: "Дэлгүүрийн бүх үйл явцыг удирдах хэрэгсэл. Гарсан гүйлгээ, төлбөр тооцоог хянаж санхүүгийн систем рүү гүйлгээ хийснээр өдөр тутмын үйл ажиллагаандаа тавих хяналт сайжирна.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl p-6 border"
            style={{ background: C.surface, borderColor: C.border }}
          >
            <h4 className="font-syne font-bold text-[15px] text-[#0d2657] mb-3">
              {item.title}
            </h4>
            <p className="text-[16px] text-[rgba(13,38,87,0.6)] leading-[1.7] font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModulesPanel() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Системийн үндсэн{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          модулиуд
        </em>
      </h2>
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Дэлгүүрийн удирдлагын систем — нийт {modules.length} үндсэн модуль
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <div
            key={m.name}
            className="bg-white rounded-2xl p-6 hover:shadow-sm transition-all duration-200 flex flex-col border"
            style={{ borderColor: C.border }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.surface;
              e.currentTarget.style.borderColor = C.borderStr;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.borderColor = C.border;
            }}
          >
            <h3 className="font-syne font-bold text-[16px] tracking-[-0.02em] text-[#0d2657] mb-3">
              {m.name}
            </h3>
            <p className="text-[16px] text-[rgba(13,38,87,0.55)] leading-[1.6] font-medium mb-4 flex-1">
              {m.desc}
            </p>
            <ul className="space-y-1.5">
              {m.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[11.5px] text-[rgba(13,38,87,0.5)] font-medium leading-normal"
                >
                  <span
                    className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                    style={{ background: C.medium }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingPanel() {
  const items = [
    "Дэлгүүрийн удирдлагын систем (бак оффис)",
    "Тасгийн тохиргоо",
    "Барааны тохиргоо",
    "Хямдрал ба урамшуулал",
    "Фронт оффис (ПОС)",
    "Электрон жин",
    "Удирдлагын хяналтын модуль",
    "Гүйлгээний бүртгэл ба тайлан",
    "Кассирийн тооцоо",
    "Үнийн өөрчлөлтийн түүх",
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Дэлгүүрийн удирдлагын систем{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          үнийн санал
        </em>
      </h2>
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-medium mb-2">
        Diamond ERP цогц програм хангамжийн үнийн санал.
      </p>
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Лиценз ашиглалтын төлбөр 15% байна. Системд нэмэлтээр авах бааз бүр
        <em style={{ color: C.main }}> 1,100,000₮</em> байна. Одоор тэмдэглэсэн
        програмын суурь үнэд байгууллагын онцлогт таарсан хөгжүүлэлт хийгдэхдээ
        нэмэлт төлбөртэй байна.
      </p>

      <div
        className="rounded-2xl overflow-hidden mb-8 border"
        style={{ borderColor: C.border }}
      >
        <div
          className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3 border-b"
          style={{ background: `rgba(124,58,237,0.06)`, borderColor: C.border }}
        >
          <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)]">
            №
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)]">
            Системийн жагсаалт
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] text-right">
            Модулийн үнэ
          </span>
        </div>

        <div className="border-b" style={{ borderColor: C.border }}>
          <div
            className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-4 items-start"
            style={{ background: `rgba(124,58,237,0.03)` }}
          >
            <span
              className="font-mono text-[11px]"
              style={{ color: `rgba(124,58,237,0.6)` }}
            >
              01
            </span>
            <div>
              <span className="font-syne font-bold text-[16px] text-[#0d2657]">
                ДЭЛГҮҮРИЙН УДИРДЛАГЫН СИСТЕМ
              </span>
              <div className=" t mt-3 space-y-1.5">
                {items.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 text-[14px] text-[rgba(13,38,87,0.6)] font-medium"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0
                      "
                      style={{ background: C.medium }}
                    />
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <span
              className="font-syne font-bold text-[16px] text-right shrink-0"
              style={{ color: C.main }}
            >
              5,060,000₮
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-[1fr_auto] px-6 py-4"
          style={{ background: `rgba(124,58,237,0.04)` }}
        >
          <span className="font-syne font-bold text-[15px] text-[#0d2657]">
            Нийт дүн
          </span>
          <span
            className="font-syne font-black text-[20px]"
            style={{ color: C.main }}
          >
            5,060,000₮
          </span>
        </div>
      </div>

     
    </div>
  );
}

function RequirementsPanel() {
  const fastRows = [
    { label: "Процессор", client: "Core i5 4-7ye, i7", server: "Xeon Quad" },
    { label: "CPU", client: "3.0GHz", server: "3.1GHz, түүнээс дээш" },
    { label: "RAM", client: "16GB", server: "32GB түүнээс дээш" },
    { label: "HDD", client: "500GB", server: "1000GB түүнээс дээш" },
    { label: "Дотоод сүлжээний хурд", client: "100/1000", server: "100/1000" },
    {
      label: "Онлайн сүлжээтэй байх",
      client:
        "Гадаад хаяг авах (Интернэт ашиглагч байгууллагаасаа авах шаардлагатай)",
      server: "",
    },
  ];
  const okRows = [
    { label: "Процессор", client: "i3 4-7Ye", server: "Core i5 4-6ye" },
    { label: "CPU", client: "2.0GHz", server: "3.0GHz, түүнээс дээш" },
    { label: "RAM", client: "4GB", server: "16GB" },
    { label: "HDD", client: "250GB", server: "1000GB" },
    { label: "Дотоод сүлжээний хурд", client: "100/1000", server: "100/1000" },
    {
      label: "Онлайн сүлжээтэй байх",
      client:
        "Гадаад хаяг авах (Интернэт ашиглагч байгууллагаасаа авах шаардлагатай)",
      server: "",
    },
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Програм хангамжийн{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          техникийн шаардлага
        </em>
      </h2>
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Дараах үзүүлэлтийн дагуу техник, хэрэгслээ бэлдсэн байхыг зөвлөж байна.
      </p>

      <ReqTable title="Програм хурдан ажиллах" rows={fastRows} />
      <ReqTable title="Програм боломжит хурдтай ажиллах" rows={okRows} />

      <div
        className="rounded-2xl p-6 space-y-4 border"
        style={{ background: C.surface, borderColor: C.border }}
      >
        <h3 className="font-syne font-bold text-[16px] text-[#0d2657] mb-3">
          Нэмэлт шаардлага
        </h3>
        {[
          "Процессоруудад үйлдлийн системүүдийг бүрэн суулгасан байна.",
          "Процессоруудад вирусын эсрэг программыг заавал суулгасан байна.",
          "Сүлжээний горимд ажиллахаар програм хангамж авч байгаа бол бүх компьютерийг онлайн сүлжээнд холбосон байна.",
          "Програм ашиглах хэрэглэгчийн компьютер дээр Windows 7, 8, 10 (version) суусан байх ба сервер компьютер дээр 64bit-н үйлдлийн систем суулгасан байх шаардлагатай.",
          "Дээрх үзүүлэлтүүд нь 10-с доош хэрэглэгч болон системийн баазууд 2оос хэтрэхгүй нөхцөлд гаргасан үзүүлэлт юм.",
        ].map((note, i) => (
          <div
            key={i}
            className="flex items-start gap-3 text-[13.5px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.7]"
          >
            <CheckOutlined
              className="mt-0.5 shrink-0"
              style={{ color: C.main }}
            />
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StorePage() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const valid = tabs.map((t) => t.id);
    if (valid.includes(hash)) setTimeout(() => setActiveTab(hash), 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section
          className="pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #2e1065 0%, #7c3aed 50%, #a855f7 100%)",
          }}
        >
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/products"
                className="font-mono text-[11px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
              >
                ← Бүтээгдэхүүн
              </Link>
              <span className="text-[rgba(255,255,255,0.2)]">/</span>
              <span className="font-mono text-[11px] text-[rgba(255,255,255,0.5)]">
                Дэлгүүрийн удирдлагын систем
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-3xl">
                  🏪
                </div>
                <div>
                  <span className="font-mono text-[14px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    Нэмэлт систем
                  </span>
                  <h1 className="font-syne font-black text-[clamp(22px,3.5vw,44px)] leading-tight tracking-[-0.04em] text-white">
                    Дэлгүүрийн удирдлагын систем
                  </h1>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <TabBar active={activeTab} setActive={setActiveTab} />

        <div className="bg-white min-h-[60vh]">
          {activeTab === "about" && <AboutPanel />}
          {activeTab === "modules" && <ModulesPanel />}
          {activeTab === "pricing" && <PricingPanel />}
          {activeTab === "requirements" && <RequirementsPanel />}
        </div>
      </main>
      <Footer />
    </>
  );
}
