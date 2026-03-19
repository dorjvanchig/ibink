"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckOutlined } from "@ant-design/icons";

const tabs = [
  { id: "about", label: "Бүтээгдэхүүний тухай" },
  { id: "modules", label: "Системийн үндсэн модулиуд" },
  { id: "pricing", label: "Үнийн санал" },
  { id: "requirements", label: "Техникийн шаардлага" },
];

const modules = [
  {
    name: "Ерөнхий журнал",
    reports: 18,
    desc: "Байгууллагын санхүү, НББ-ийн бүх төрлийн ажил гүйлгээг төвлөрүүлэн бүртгэж, бусад програм, модулиас хийгдсэн гүйлгээг өөртөө нэгтгэн санхүүгийн тайлан балансыг бэлтгэх үндсэн хэрэгсэл.",
    features: [
      "Данс үүсгэх, дансны нэгдсэн төлөвлөгөө зохиох",
      "Ханш бүртгэх, тэгшитгэх",
      "Гүйлгээний жагсаалт багцаар, дансаар",
      "18 санхүүгийн болон татварын тайлан",
    ],
  },
  {
    name: "Мөнгөн хөрөнгө",
    reports: 3,
    desc: "Байгууллагын бэлэн болон бэлэн бус мөнгөний үлдэгдлийг хөтлөх, өдөр тутмын орлого зарлагын гүйлгээг түргэн шуурхай бүртгэх, төлбөрийн даалгавар болон анхан шатны баримт боловсруулах зорилготой.",
    features: [
      "Мөнгөн хөрөнгийн жагсаалт",
      "Баримтын жагсаалт",
      "Тайлангууд – 3",
    ],
  },
  {
    name: "Өглөг, авлага",
    reports: 5,
    desc: "Бэлтгэн нийлүүлэгч, салбар нэгж хооронд, ажилтан болон бусад харилцагчтай үүссэн тооцоо нэг бүрийг нарийвчлан бүртгэх бөгөөд хянах, төлөвлөх, шийдвэр гаргах боломжоор хангагдана.",
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
    name: "Бараа материал",
    reports: 6,
    desc: "Бараа материалын үндсэн мэдээллийн бааз бүрдүүлж, анхан шатны орлого, зарлагын баримт оруулах, нярав хооронд хөдөлгөөн хийх, тооллого хийх зэрэг бүртгэл тооцоог хийх боломжтой.",
    features: [
      "Барааны бүлэг, өртөг тооцох арга, баар код",
      "Худалдан авалт, борлуулалт, буцаалт",
      "Няравын хөдөлгөөн, тооллого",
      "Өртөг бодолт, баар код хэвлэх",
    ],
  },
  {
    name: "Хангамжийн материал",
    reports: 0,
    desc: "Байгууллагын хангамжийн материалын дэлгэрэнгүй бүртгэл хөтөлж, борлуулалтын тооцоог хөтөлж, хянах боломжтой.",
    features: [
      "Хангамжийн материалын бүртгэл",
      "Орлого, зарлага, шилжилт хөдөлгөөн",
    ],
  },
  {
    name: "Төсөв",
    reports: 0,
    desc: "Байгууллагын жилийн санхүүжилтийн төлөвлөгөө зохиож, биелэлт хэмнэлт хэтрэлтийг хянах боломжийг олгоно.",
    features: [
      "Төсөв оруулах, гүйцэтгэлийн харьцуулалт",
      "Мөнгөн урсгалын хяналт",
    ],
  },
  {
    name: "Зээл",
    reports: 0,
    desc: "Банк, ББСБ, ХЗХ-ны зээлийн бүтээгдэхүүн, хүү, хугацаа, графикийн дагуу төлөлт болон хугацаа хэтэрсэн зээлдэгчийн мэдээллийг цаг алдалгүй бүртгэж хянах.",
    features: [
      "Зээлийн графикийн дагуу төлөлт",
      "Алдангийн дүн автоматаар тооцоолох",
      "Хугацаа хэтэрсэн зээлдэгчийн анхааруулга",
      "Зээл төлөлтийн харьцуулсан мэдээлэл",
    ],
  },
  {
    name: "Зээлийн мэдээллийн сан",
    reports: 0,
    desc: "Зээлдэгчийн бүрэн мэдээллийн санг хөтлөж, зээлийн түүх болон холбогдох баримт бичгийг нэгдсэн системд хадгалах.",
    features: ["Зээлдэгчийн мэдээллийн сан", "Зээлийн түүх, баримт бичиг"],
  },
  {
    name: "Харилцах",
    reports: 0,
    desc: "Харилцагчийн дансны үлдэгдэл, гүйлгээг бүртгэж хянах, харилцагчийн мэдээллийн санг хөтлөх.",
    features: ["Харилцагчийн дансны бүртгэл", "Гүйлгээний хяналт"],
  },
  {
    name: "Хадгаламж / Итгэлцэл",
    reports: 0,
    desc: "Хадгаламж, итгэлцлийн бүтээгдэхүүнтэй холбоотой хүү, хугацаа, гэрээний бүртгэлийг хөтлөх.",
    features: [
      "Хадгаламжийн бүтээгдэхүүний бүртгэл",
      "Хүүний тооцоолол",
      "Гэрээний хугацааны хяналт",
    ],
  },
  {
    name: "Хувь нийлүүлэгч",
    reports: 0,
    desc: "Хувь нийлүүлэгчдийн мэдээлэл, хувь хөрөнгийн бүртгэл, ногдол ашгийн тооцоог хөтлөх.",
    features: ["Хувь нийлүүлэгчийн бүртгэл", "Ногдол ашгийн тооцоо"],
  },
  {
    name: "Авизо",
    reports: 0,
    desc: "Банк хоорондын болон салбар нэгжийн хооронд хийгдэх авизо гүйлгээний бүртгэл.",
    features: ["Авизо гүйлгээний бүртгэл", "Салбар хоорондын тооцоо"],
  },
  {
    name: "Тэнцэлийн гадуурх",
    reports: 0,
    desc: "Тэнцэлийн гадуурх данс, барьцаа хөрөнгө болон бусад нөхцөлт эрх үүргийн бүртгэл.",
    features: ["Барьцаа хөрөнгийн бүртгэл", "Нөхцөлт эрх үүргийн хяналт"],
  },
  {
    name: "Тайлангууд",
    reports: 0,
    desc: "Сангийн яам, Санхүүгийн зохицуулах хорооноос баталсан маягтын дагуу бүх төрлийн тайлан мэдээг гаргах.",
    features: [
      "СЗХ-ны тайлан маягт",
      "Drill Down задаргаатай тайлан",
      "Валютын тайлан",
    ],
  },
];

const pricingRows = [
  { name: "Гүйцэтгэх захирал", price: "850,000₮" },
  { name: "Салбарын захирал", price: "1,530,000₮" },
  { name: "Ерөнхий нягтлан", price: "1,530,000₮" },
  { name: "Зээлийн мэргэжилтэн", price: "1,360,000₮" },
  { name: "Үндсэн хөрөнгө, бараа материалын нярав", price: "1,190,000₮" },
  { name: "Мөнгөн хөрөнгийн нярав / кассир", price: "680,000₮" },
  { name: "Итгэлцлийн мэргэжилтэн", price: "850,000₮" },
];

const totals = { subtotal: "7,990,000₮", vat: "799,000₮", total: "8,789,000₮" };

// ── ReqTable ──────────────────────────────────────────────
function ReqTable({ title, rows }) {
  return (
    <div className="mb-10">
      <h3 className="font-syne font-bold text-[16px] italic text-[#0d2657] mb-4 text-center">
        {title}
      </h3>
      <div className="rounded-2xl border border-[rgba(181,18,110,0.25)] overflow-hidden">
        <table className="w-full text-[15px]">
          <thead>
            <tr className="bg-[rgba(181,18,110,0.06)] border-b border-[rgba(181,18,110,0.2)]">
              <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)] w-8">
                /
              </th>
              <th className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Техник хангамжийн жагсаалт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[10px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Клиент компьютерийн үзүүлэлт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[10px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Сервер компьютерийн үзүүлэлт
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(181,18,110,0.08)]">
            {rows.map((row, i) => (
              <tr
                key={i}
                className="bg-white hover:bg-[#fdf0f7] transition-colors"
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

// ── TabBar ────────────────────────────────────────────────
function TabBar({ active, setActive }) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-[rgba(181,18,110,0.2)]">
      <div className="max-w-content mx-auto">
        <ul className="grid grid-cols-2 md:hidden">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="border-b border-r border-[rgba(181,18,110,0.12)] last:border-r-0 nth-2:border-r-0 nth-3:border-b-0 nth-4:border-b-0"
            >
              <button
                onClick={() => setActive(tab.id)}
                className={`relative w-full px-3 py-3 text-[11px] font-medium transition-colors text-center leading-tight ${
                  active === tab.id
                    ? "text-[#b5126e] bg-[rgba(181,18,110,0.06)]"
                    : "text-[rgba(13,38,87,0.5)]"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline-mobile"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b5126e]"
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
                className={`relative px-5 py-4 text-[13.5px] font-medium transition-colors whitespace-nowrap ${
                  active === tab.id
                    ? "text-[#b5126e]"
                    : "text-[rgba(13,38,87,0.5)] hover:text-[#b5126e]"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b5126e] rounded-full"
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

// ── AboutPanel ────────────────────────────────────────────
function AboutPanel() {
  const capabilities = [
    "Өдөр тутмын санхүүгийн үйл ажиллагаагаа хянана.",
    "Салбарын онцлогт тохирсон зээл, хадгаламж тэдгээртэй холбоотой хүү, валют арилжаа зэрэг мэдээллүүдийг бүртгэнэ.",
    "Сангийн яам, Санхүүгийн зохицуулах хорооноос баталсан болон бусад заавар журмуудын дагуу бүртгэлээ хөтөлж тайлангууд авна.",
    "Тайлангийн үзүүлэлтийг хаанаас ямар үндэслэлээр гарч ирснийг задалж үзэх боломжтой Drill Down тайланг оруулж өгсөн.",
  ];

  const advantages = [
    "Хадгаламж болон зээлтэй холбоотой хүүний тооцооллийг үнэ зөв тооцоолох. Excel програм дээр тооцоолсноор хоногийн зөрүү үүсэх, томъёо зөрөх, хоног буруу тооцоолох эрсдэлээс сэргийлнэ.",
    "Зээл төлөлтийг графикийн дүнтэй харьцуулсан мэдээлэл гаргана.",
    "Графикийн дагуу төлөлт хийгдээгүй тохиолдолд алдангийн дүн автоматаар тооцоологдсоноор гараар хийх ажиллагаа үгүй болно.",
    "Зээлийн графикаас хамааран төлөлт хийгдэх огноо нь хэтэрсэн тохиолдолд анхааруулгын цонх дээр мэдээллийг харуулснаар хугацаа хэтэрсэн зээлдэгчийн мэдээллийг цаг алдалгүй харна.",
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14 space-y-14">
      <div>
        <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#b5126e] mb-5">
          Системийн танилцуулга
        </h2>
        <p className="text-[16px] text-[rgba(13,38,87,0.7)] leading-[1.85] font-medium max-w-3xl">
          Spinel ERP систем нь санхүүгийн үйлчилгээ үзүүлдэг банк, ББСБ,
          хадгаламж, зээлийн хоршооны үйл ажиллагаанд зориулагдсан хадгаламж,
          зээлийн бүтээгдэхүүнүүд, хүү, хугацаа, зэрэг бүх төрлийн бүртгэлийг
          хөтөлж энэ салбарын онцлогт тохирсон бүх төрлийн тайлан мэдээнүүдийг
          гаргадаг програм юм.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "13", label: "Үндсэн модуль" },
          { num: "18+", label: "Тайлангийн төрөл" },
          { num: "7", label: "Үүрэг / Роль" },
          { num: "1996", label: "Үүсгэн байгуулсан" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-[#fdf0f7] border border-[rgba(181,18,110,0.2)] rounded-xl px-5 py-5 text-center"
          >
            <div className="font-syne font-black text-[32px] tracking-[-0.04em] text-[#b5126e] leading-none">
              {s.num}
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] mt-2">
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#e040a0] mt-1.75 shrink-0" />
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
              className="flex items-start gap-4 bg-[#fdf0f7] border border-[rgba(181,18,110,0.15)] rounded-xl p-4"
            >
              <span className="font-mono text-[11px] text-[#b5126e] shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[13.5px] text-[rgba(13,38,87,0.65)] leading-[1.7] font-medium">
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── ModulesPanel ──────────────────────────────────────────
function ModulesPanel() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Системийн үндсэн{" "}
        <em className="font-normal italic text-[#b5126e]">модулиуд</em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Spinel — нийт {modules.length} үндсэн модуль
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <div
            key={m.name}
            className="bg-white border border-[rgba(181,18,110,0.2)] rounded-2xl p-6 hover:border-[rgba(181,18,110,0.4)] hover:bg-[#fdf0f7] hover:shadow-sm transition-all duration-200 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-syne font-bold text-[15px] tracking-[-0.02em] text-[#0d2657]">
                {m.name}
              </h3>
              {m.reports > 0 && (
                <span className="font-mono text-[10px] text-[#b5126e] bg-[rgba(181,18,110,0.1)] px-2 py-0.5 rounded-full shrink-0">
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
                  <span className="w-1 h-1 rounded-full bg-[#e040a0] mt-1.5 shrink-0" />
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

// ── PricingPanel ──────────────────────────────────────────
function PricingPanel() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Spinel{" "}
        <em className="font-normal italic text-[#b5126e]">үнийн санал</em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-2">
        Банк, ББСБ, ХЗХ-ны автоматжуулалтын цогц шийдэл Спинел ERP системийн
        үнийн санал.
      </p>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Лиценз ашиглалтын төлбөр 15% байна. Системд нэмэлтээр авах бааз бүр
        <em className="text-[#b5126e]"> 1,100,000₮</em> байна.
      </p>

      <div className="rounded-2xl border border-[rgba(181,18,110,0.25)] overflow-hidden mb-8">
        {/* Header */}
        <div className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3 bg-[rgba(181,18,110,0.06)] border-b border-[rgba(181,18,110,0.2)]">
          <span className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)]">
            №
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)]">
            Системийн жагсаалт
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] text-right">
            Ролийн нэгжийн үнэ / 1 хэрэглэгч
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[rgba(181,18,110,0.08)]">
          {pricingRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3.5 items-center hover:bg-[rgba(181,18,110,0.03)] transition-colors"
            >
              <span className="font-mono text-[11px] text-[rgba(181,18,110,0.6)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] text-[rgba(13,38,87,0.7)] font-medium">
                → {row.name}
              </span>
              <span className="font-mono text-[15px] text-[rgba(13,38,87,0.65)] text-right shrink-0">
                {row.price}
              </span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="border-t border-[rgba(181,18,110,0.2)] divide-y divide-[rgba(181,18,110,0.08)]">
          <div className="grid grid-cols-[1fr_auto] px-6 py-3">
            <span className="text-[15px] text-[rgba(13,38,87,0.5)] font-medium">
              НИЙТ
            </span>
            <span className="font-mono text-[15px] text-[rgba(13,38,87,0.6)]">
              {totals.subtotal}
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto] px-6 py-3">
            <span className="text-[15px] text-[rgba(13,38,87,0.5)] font-medium">
              НӨАТ (10%)
            </span>
            <span className="font-mono text-[15px] text-[rgba(13,38,87,0.6)]">
              {totals.vat}
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto] px-6 py-4 bg-[rgba(181,18,110,0.05)]">
            <span className="font-syne font-bold text-[15px] text-[#0d2657]">
              НӨАТ-тэй дүн
            </span>
            <span className="font-syne font-black text-[20px] text-[#b5126e]">
              {totals.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── RequirementsPanel ─────────────────────────────────────
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
        <em className="font-normal italic text-[#b5126e]">
          техникийн шаардлага
        </em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Дараах үзүүлэлтийн дагуу техник, хэрэгслээ бэлдсэн байхыг зөвлөж байна.
      </p>

      <ReqTable title="Програм хурдан ажиллах" rows={fastRows} />
      <ReqTable title="Програм боломжит хурдтай ажиллах" rows={okRows} />

      <div className="bg-[#fdf0f7] border border-[rgba(181,18,110,0.2)] rounded-2xl p-6 space-y-4">
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
            <CheckOutlined className="text-[#b5126e] mt-0.5 shrink-0" />
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpinelPage() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const valid = tabs.map((t) => t.id);
    if (valid.includes(hash)) {
      setTimeout(() => setActiveTab(hash), 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section
          className="pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #3d0026 0%, #7b0f4e 40%, #b5126e 80%, #e040a0 100%)",
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
                Spinel
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center">
                  <Image
                    src="/products/spinel_cropped.png"
                    alt="Spinel"
                    width={44}
                    height={44}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    Банк · ББСБ · ХЗХ
                  </span>
                  <h1 className="font-syne font-black text-[clamp(32px,5vw,56px)] leading-none tracking-[-0.04em] text-white">
                    Spinel
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
