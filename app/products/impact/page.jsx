"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckOutlined, CloseCircleFilled  } from "@ant-design/icons";

const tabs = [
  { id: "about", label: "Бүтээгдэхүүний тухай" },
  { id: "modules", label: "Системийн үндсэн модулиуд" },
  { id: "pricing", label: "Үнийн санал" },
  { id: "requirements", label: "Техникийн шаардлага" },
];

const C = {
  main: "#b87420",
  medium: "#e8a030",
  surface: "#fdf8f0",
  border: "rgba(184,116,32,0.2)",
  borderStr: "rgba(184,116,32,0.35)",
};

const modules = [
  {
    name: "Ерөнхий журнал",
    reports: 18,
    desc: "Байгууллагын санхүү, НББ-ийн бүх төрлийн ажил гүйлгээг төвлөрүүлэн бүртгэж, бусад програм, модулиас хийгдсэн гүйлгээг өөртөө нэгтгэн санхүүгийн тайлан балансыг бэлтгэх үндсэн хэрэгсэл юм.",
    features: [
      "Данс үүсгэх, дансны нэгдсэн төлөвлөгөө зохиох",
      "Ханш бүртгэх, тэгшитгэх",
      "Гүйлгээний жагсаалт багцаар, дансаар",
      "18 санхүүгийн болон татварын тайлангууд",
    ],
  },
  {
    name: "Мөнгөн хөрөнгө",
    reports: 3,
    desc: "Байгууллагын бэлэн болон бэлэн бус мөнгөний үлдэгдлийг хөтлөх, өдөр тутмын орлого зарлагын гүйлгээг түргэн шуурхай бүртгэх, анхан шатны баримт боловсруулах зорилготой.",
    features: [
      "Мөнгөн хөрөнгийн жагсаалт",
      "Баримтын жагсаалт",
      "Тайлангууд – 3",
    ],
  },
  {
    name: "Өглөг, авлага",
    reports: 5,
    desc: "Бэлтгэн нийлүүлэгч болон харилцагчтай үүссэн тооцоо нэг бүрийг нарийвчлан бүртгэх бөгөөд хянах, төлөвлөх, шийдвэр гаргах боломжоор хангагдана.",
    features: [
      "Авлага, өглөгийн эхний үлдэгдэл",
      "Валютаарх өглөг, авлага",
      "Өглөг, авлагын насжилт",
      "Мөнгөний одоогийн болон ирээдүйн үнэ цэнэ тооцох",
    ],
  },
  {
    name: "Үндсэн хөрөнгө",
    reports: 5,
    desc: "Байгууллага дахь хөрөнгийн орлого авах, зарлагдах, капиталжуулалт хийх, хөрөнгийнхөө талаар иж бүрэн мэдээлэлтэй байх боломжийг бий болгоно.",
    features: [
      "Үндсэн хөрөнгийн бүлгийн болон кодын мэдээлэл",
      "Элэгдэл тооцох шулуун шугамын арга",
      "Капиталжуулах — өртөг нэмэх болон элэгдэл бууруулах арга",
      "Орлого, зарлага, эхний үлдэгдэл",
    ],
  },
  {
    name: "Удирдлагын хяналт",
    reports: 0,
    desc: "Тухайн өдрийн байдлаарх авлага, өглөг, мөнгөн хөрөнгө, ашгийн хэмжээг ойлгомжтой график, тоон мэдээллээр харуулах удирдлагын мэдээллийн модуль.",
    features: [
      "Дансны үлдэгдэл, харилцагчдын авлага өглөг",
      "Авлага, өглөгийн насжилт",
      "Орлого, үр дүн, өгөөж тооцох",
    ],
  },
  {
    name: "Бараа материал",
    reports: 6,
    desc: "Бараа материалын үндсэн мэдээллийн бааз бүрдүүлж, анхан шатны орлого, зарлагын баримт оруулах, нярав хооронд хөдөлгөөн хийх, тооллого хийх боломжтой.",
    features: [
      "Барааны бүлэг, FIFO болон дундаж өртгийн арга, баар код",
      "Худалдан авалт, борлуулалт, буцаалт",
      "Няравын хөдөлгөөн, тооллого",
      "Өртөг бодолт, баар код хэвлэх",
    ],
  },
];

const pricing = [
  {
    section: true,
    name: "НЯГТЛАН БОДОХ БҮРТГЭЛИЙН ПРОГРАМ",
    price: "600,000₮",
  },
  { section: true, name: "ЦАЛИНГИЙН ТООЦООНЫ ПРОГРАМ", price: "600,000₮" },
  { section: true, name: "ХӨНГӨЛӨЛТИЙН КАРТЫН ПРОГРАМ", price: "600,000₮" },
  {
    section: true,
    name: "РЕСТОРАНЫ УДИРДЛАГЫН ПРОГРАМ",
    price: "600,000₮",
    children: [{ name: "Рестораны ПОС", price: "500,000₮" }],
  },
  {
    section: true,
    name: "ДЭЛГҮҮРИЙН УДИРДЛАГЫН СИСТЕМ",
    price: "600,000₮",
    children: [{ name: "Дэлгүүрийн ПОС програм", price: "500,000₮" }],
  },
];

const connectedSystems = [
  "1. Цалингийн тооцооны програм",
  "2. Дэлгүүрийн бүртгэлийн програм",
  "3. Рестораны бүртгэлийн програм",
  "4. Microsoft Office програмууд",
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
        <table className="w-full text-[15px]">
          <thead>
            <tr
              className="border-b"
              style={{
                background: `rgba(184,116,32,0.05)`,
                borderColor: C.border,
              }}
            >
              <th className="text-left px-4 py-3 font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)] w-8">
                /
              </th>
              <th className="text-left px-4 py-3 font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Техник хангамжийн жагсаалт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Клиент компьютерийн үзүүлэлт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Сервер компьютерийн үзүүлэлт
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="bg-white hover:bg-[#fdf8f0] transition-colors border-b last:border-b-0"
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
              className="border-b border-r last:border-r-0 nth-2:border-r-0 nth-3:border-b-0 [&:nth-4:border-b-0"
              style={{ borderColor: C.border }}
            >
              <button
                onClick={() => setActive(tab.id)}
                className="relative w-full px-3 py-3 text-[11px] font-medium transition-colors text-center leading-tight"
                style={{
                  color: active === tab.id ? C.main : "rgba(13,38,87,0.5)",
                  background:
                    active === tab.id ? "rgba(184,116,32,0.04)" : "transparent",
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
    "Сангийн яамны болон татварын албаны заавар журам, тайлан маягтуудын дагуу бүртгэлээ хөтөлж тайлангуудаа авна.",
    "Бараа материалын FIFO болон Дундаж өртгийн аргуудтай.",
    "Тайлангийн бүх үзүүлэлтийг хаанаас ямар үндэслэлээр гарч ирснийг задалж үзэх боломжтой Drill Down тайланг оруулж өгсөн.",
    "Удирдлагын хяналтын модультай.",
    "Системийн горимд 1-5 хэрэглэгч нэгэн зэрэг ажиллах боломжтой.",
    "Балансын эхний үлдэгдэл, бараа материалын код, баар код, үлдэгдлийн мэдээлэл, үндсэн хөрөнгийн кодын болон эхний үлдэгдлийн мэдээллийг Excel програмаас татан оруулах боломжтой.",
    "Microsoft-ийн програмуудтай холбогдон ажиллана.",
    "Програмыг Монгол хэлээс гадна дурын 2 хэл дээр ашиглах боломжтой.",
    "Мөнгөний одоогийн болон ирээдүйн үнэ цэнийг тооцно.",
  ];

  const advantages = [
    "Санхүүгийн тайлан гаргах, бүртгэл хөтлөх гар ажиллагаанууд бүгд хөнгөвчлөгдөж цаг хугацаа хэмнэнэ.",
    "Өдөр тутмын санхүүгийн үйл ажиллагаа цэгцэрч, таны хяналтад бүрэн орно.",
    "Удирдлагын хяналт хэсгээр байгууллагынхаа мэдээллийг харснаар мөнгөн урсгалаа хянаж, төлөвлөнө.",
    "Авлага, өглөгийн насжилтыг харж хянаснаар цугларалтыг нь хурдасган шийдвэр гаргана.",
  ];

  const notSupported = [
    "Барааны татан авалтын тооцоолол.",
    "Үйлдвэрлэсэн барааны өртгийн тооцоолол.",
    "Үндсэн хөрөнгийн дахин үнэлгээ.",
    "Барааны өртөг няравын хувьд бус дансны хувьд харагдана.",
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
          Интерактив Би Ай ХХК нь жижиг аж ахуйн нэгжүүдэд зориулсан хэрэглэхэд
          хялбар, үнэ хямд, цоо шинэ шийдэл бүхий санхүү НББ-ийн Импакт
          системийг танилцуулж байна.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "6", label: "Үндсэн модуль" },
          { num: "18+", label: "Тайлангийн төрөл" },
          { num: "1–5", label: "Хэрэглэгчийн тоо" },
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
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-5">
          Системийн боломжууд
        </h3>
        <ul className="space-y-3">
          {capabilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[14px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.75]"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.75 shrink-0"
                style={{ background: C.medium }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-6">
          Системийг ашигласнаар үүсэх давуу талууд
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

      <div
        className="rounded-2xl p-6 border"
        style={{ background: "rgba(184,116,32,0.03)", borderColor: C.border }}
      >
        <h3 className="font-syne font-bold text-[15px] text-[#0d2657] mb-4">
          <CloseCircleFilled /> Жижиг аж ахуйн нэгжүүдэд зориулагдсан тул дараах
          бүртгэлүүдийг хийхгүйг анхаарна уу
        </h3>
        <ul className="space-y-2">
          {notSupported.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] text-[rgba(13,38,87,0.55)] font-medium leading-[1.7]"
            >
              <span className="w-1 h-1 rounded-full bg-[rgba(13,38,87,0.3)] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-5">
          Холбогдон ажиллах системүүд
        </h3>
        <div className="flex flex-wrap gap-2">
          {connectedSystems.map((s) => (
            <span
              key={s}
              className="font-mono text-[15px] px-4 py-2 rounded-full border transition-all cursor-default"
              style={{
                borderColor: C.border,
                background: "rgba(184,116,32,0.03)",
                color: "rgba(13,38,87,0.55)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
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
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Impact — нийт {modules.length} үндсэн модуль
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
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-syne font-bold text-[15px] tracking-[-0.02em] text-[#0d2657]">
                {m.name}
              </h3>
              {m.reports > 0 && (
                <span
                  className="font-mono text-[12px] px-2 py-0.5 rounded-full shrink-0"
                  style={{ color: C.main, background: "rgba(184,116,32,0.08)" }}
                >
                  {m.reports} тайлан
                </span>
              )}
            </div>
            <p className="text-[15px] text-[rgba(13,38,87,0.55)] leading-[1.6] font-medium mb-4 flex-1">
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
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Impact{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          үнийн санал
        </em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-2">
        Лиценз ашиглалтын төлбөр 15% байна. Системд нэмэлтээр авах бааз бүр{" "}
        <em style={{ color: C.main }}> 1,100,000₮</em> байна. Жич: Програм
        хангамжийн үнэд НӨАТ нэмж тооцох бөгөөд 2026.12.31-г дуустал хүчинтэй.
      </p>
      <div
        className="rounded-2xl overflow-hidden mb-8 border"
        style={{ borderColor: C.border }}
      >
        <div
          className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3 border-b"
          style={{ background: "rgba(184,116,32,0.06)", borderColor: C.border }}
        >
          <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)]">
            №
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)]">
            Системийн жагсаалт
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] text-right">
            Нэг хэрэглэгчийн үнэ
          </span>
        </div>

        <div>
          {pricing.map((item, i) => (
            <div key={i}>
              <div
                className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3.5 items-center border-b"
                style={{
                  background: "rgba(184,116,32,0.03)",
                  borderColor: C.border,
                }}
              >
                <span
                  className="font-mono text-[11px]"
                  style={{ color: `rgba(184,116,32,0.6)` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-syne font-bold text-[15px] text-[#0d2657]">
                  {item.name}
                </span>
                <span
                  className="font-syne font-bold text-[14px] text-right"
                  style={{ color: C.main }}
                >
                  {item.price}
                </span>
              </div>
              {item.children?.map((c, j) => (
                <div
                  key={j}
                  className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3 pl-10 items-center border-b hover:bg-[#fdf8f0] transition-colors"
                  style={{ borderColor: C.border }}
                >
                  <span />
                  <span className="text-[15px] text-[rgba(13,38,87,0.65)] font-medium">
                    → {c.name}
                  </span>
                  <span className="font-mono text-[15px] text-[rgba(13,38,87,0.6)] text-right">
                    {c.price}
                  </span>
                </div>
              ))}
            </div>
          ))}
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
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
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

export default function ImpactPage() {
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
              "linear-gradient(160deg, #3d1f00 0%, #7a4010 40%, #b87420 80%, #e8a030 100%)",
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
                Impact
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center">
                  <Image
                    src="/products/impact_cropped.png"
                    alt="Impact"
                    width={44}
                    height={44}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div>
                  <span className="font-mono text-[12px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    Жижиг бизнес
                  </span>
                  <h1 className="font-syne font-black text-[clamp(32px,5vw,56px)] leading-none tracking-[-0.04em] text-white">
                    Impact
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
