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
  main: "#0f766e",
  medium: "#14b8a6",
  surface: "#f0fdfa",
  border: "rgba(15,118,110,0.2)",
  borderStr: "rgba(15,118,110,0.35)",
};

const modules = [
  {
    name: "Хэлтэс тасгийн бүртгэл",
    desc: "Байгууллагын бүтэц зохион байгуулалтыг оруулж, хэлтэс тасаг бүрийн ажилтнуудыг системд бүртгэн удирдах.",
    features: ["Хэлтэс тасгийн мэдээлэл", "Ажилтны харьяалал", "Хяналтын эрх"],
  },
  {
    name: "Ажилтны бүртгэл",
    desc: "Байгууллагын бүх ажилтнуудын хувийн мэдээлэл, ажлын байрны мэдээлэл, гэрчилгээ баримт бичгийг нэгдсэн системд хадгалах.",
    features: [
      "Хувийн мэдээлэл",
      "Ажлын байрны мэдээлэл",
      "Баримт бичгийн хадгалалт",
    ],
  },
  {
    name: "Ажлын цагийн хуваарь",
    desc: "Байгууллага, хэлтэс тасаг, ажилтан нэг бүрийн цагийн хуваарийг гариг, сараар уян хатнаар тохируулах.",
    features: [
      "Хувь хүний цагийн хуваарь",
      "Гариг, сараар тохируулах",
      "Ээлжийн горим",
    ],
  },
  {
    name: "Ажилтны шилжилт хөдөлгөөн",
    desc: "Ажилтны байгууллага доторх шилжилт, томилгоо, дэвшилт зэрэг бүх өөрчлөлтийг бүртгэж хянах.",
    features: ["Дотоод шилжилт", "Томилгооны бүртгэл", "Түүхийн хадгалалт"],
  },
  {
    name: "Цаг төлөвлөлтийн хуваарь",
    desc: "Ажилтнуудын ирц, чөлөө, өвчтэй, томилолт зэрэг цагийн төлөвлөлтийг урьдчилан тохируулах.",
    features: [
      "Ирцийн төлөвлөлт",
      "Чөлөө, өвчний бүртгэл",
      "Томилолтын хуваарь",
    ],
  },
  {
    name: "Цаг бүртгэлийн зөрчлийн хяналт",
    desc: "Хоцролт, эрт явсан, тасалсан зэрэг цагийн зөрчлүүдийг автоматаар илрүүлж удирдлагад мэдэгдэх.",
    features: ["Хоцролтын бүртгэл", "Автомат анхааруулга", "Зөрчлийн тайлан"],
  },
  {
    name: "Гүйцэтгэлийн сарын баланс",
    desc: "Ажилтан тус бүрийн сарын ажилласан цаг, илүү цаг, таслалт зэрэг үзүүлэлтүүдийг нэгтгэж баланс гаргах.",
    features: ["Сарын нэгтгэл", "Илүү цагийн тооцоо", "Цагийн баланс"],
  },
  {
    name: "Ажилтны шалтгааны бүртгэл",
    desc: "Ажилтны чөлөө, өвчтэй, тасалсан, томилолт зэрэг шалтгаануудыг ангилан бүртгэж тайлагнах.",
    features: ["Шалтгааны ангилал", "Дэлгэрэнгүй бүртгэл", "Тайлагнал"],
  },
  {
    name: "Илүү цагийн модуль",
    desc: "Тогтоосон цагаас хэтэрч ажилласан илүү цагийг автоматаар тооцоолж цалингийн системд шилжүүлэх.",
    features: ["Автомат тооцоо", "Цалингийн системтэй холболт", "Батлах горим"],
  },
  {
    name: "Цаг бүртгэлийн автомат төхөөрөмж",
    desc: "Бүх төрлийн цаг бүртгэлийн автомат төхөөрөмжүүдтэй сүлжээгээр болон портоор холбогдож мэдээллийг чөлөөтэй солилцох.",
    features: ["Сүлжээний холболт", "Порт холболт", "Автомат синк"],
  },
  {
    name: "Эдийн засгийн хуанли",
    desc: "Улсын болон байгууллагын баярын өдрүүд, ажлын бус өдрүүдийг системд тохируулж цагийн тооцооллыг зөв гаргах.",
    features: [
      "Улсын баярын өдрүүд",
      "Байгууллагын хуанли",
      "Автомат тооцоолол",
    ],
  },
  {
    name: "Байгууллагын ирц модуль",
    desc: "Тухайн цаг мөчид хэн ажилдаа ирсэн, хэн хоцорсон, хэлтсүүдийн ирц ямар байгааг удирдлага бодит цагаар хянах.",
    features: ["Бодит цагийн хяналт", "Хэлтсийн ирц", "Онлайн мэдээлэл"],
  },
  {
    name: "Цагийн хяналтын модуль",
    desc: "Олон салбар, охин компаниудтай байгууллагын ажилтнуудын цагийн бүртгэлийг нэгдсэн системд хянах.",
    features: ["Салбар дамжсан хяналт", "Нэгдсэн тайлан", "Менежрийн эрх"],
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
        <table className="w-full text-[15px]">
          <thead>
            <tr
              className="border-b"
              style={{
                background: `rgba(15,118,110,0.05)`,
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
                className="bg-white transition-colors border-b last:border-b-0 hover:bg-[#f0fdfa]"
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
                    active === tab.id ? "rgba(15,118,110,0.04)" : "transparent",
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
    "Байгууллага аж ахуй нэгж компанийн үйл ажиллагааны онцлог, цагийн хуваарьт тохируулан системийг ашиглах боломжтой.",
    "Ажилтнуудын цагийн хуваарийг байгууллага, хэлтэс тасаг, ажилтан нэг бүрээр тохируулахаас гадна гариг, сараар оруулах боломжтой.",
    "Бүх төрлийн цаг бүртгэлийн автомат төхөөрөмжүүдтэй сүлжээгээр болон портоор холбогдож мэдээллийг чөлөөтэй солилцдог.",
    "Олон салбар, охин компаниудтай байгууллагын хувьд салбар дамжиж ажилладаг менежрүүдийн тухайн цаг мөчид хаана ажиллаж байгааг хянах бололцоотой.",
    "Хүний нөөцийн систем, цалингийн системтэй хамтран ажиллах боломжтой.",
    "Цагийн балансын бүх төрлийн тайланг эрх бүхий хэрэглэгч өөрөө нэмж тайланг хүссэн загвараараа хэвлэх боломжтой.",
    "Удирдлага тухайн цаг мөчид хэн ажилдаа ирсэн, хэдэн минут хоцорсон, хэлтсүүдийн ирц ямар байгааг хянах боломжтой.",
  ];

  const advantages = [
    "Удирдлагыг нийт ажилтнуудын ирцийн талаарх дэлгэрэнгүй мэдээллээр хангана.",
    "Хөдөлмөрийн хөлс бодох, шагнал урамшуулал, үнэлгээний асуудлаар шийдвэр гаргахад бодитой үндэслэл болно.",
    "Байгууллагын цаг ашиглалтыг сайжруулахад тодорхой ахиц дэвшил авчирна.",
    "Ажилтнууд өөрсдийн цагийн бүртгэлтэй танилцсанаар хоцролт, таслалтыг багасгахад бодитой хөшүүрэг болно.",
    "Нягтлан бодогчид ажилчдын цалин хөлсийг хялбархан бодох бодитой мэдээлэл болж өгнө.",
    "Хүний нөөцийн менежерт ажилтнуудын өвчтэй, чөлөөтэй, тасалсан, томилолттой үзүүлэлтээр тайлан судалгаа авах боломж олгоно.",
    "Хөдөлмөрийн хөлсний үнэлэмжийг ажлын цагтай холбож өгснөөр цалингийн зардлын алдагдлыг бууруулах бодит боломжийг бий болгоно.",
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
          Энэхүү цаг бүртгэлийн систем нь аж ахуйн нэгж, бизнесийн байгууллагын
          цагийн бүртгэлийг хялбаршуулах, хүссэн үедээ хяналт тавих боломжоор
          хангах, хэрэгцээт тайлан судалгааг богино хугацаанд гаргаж авах,
          цагийн нягтралыг сайжруулах, хөдөлмөрийн бүтээмжийг дээшлүүлэх
          зорилготой юм.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "13", label: "Үндсэн модуль" },
          { num: "∞", label: "Ажилтны тоо" },
          { num: "24/7", label: "Хяналт" },
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
        Цаг бүртгэлийн систем — нийт {modules.length} үндсэн модуль
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
        Цаг бүртгэлийн систем{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          үнийн санал
        </em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-2">
        Diamond ERP цогц програм хангамжийн үнийн санал.
      </p>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Лиценз ашиглалтын төлбөр 15% байна. Системд нэмэлтээр авах бааз бүр
        <em style={{ color: C.main }}> 1,100,000₮</em> байна. Жич: Одоор
        тэмдэглэсэн програмын үнийн санал дээрх төлбөр нь програмын суурь үнэ
        бөгөөд байгууллагын онцлогт таарсан хөгжүүлэлт хийгдэхдээ нэмэлт
        төлбөртэй байна.
      </p>

      <div
        className="rounded-2xl overflow-hidden mb-8 border"
        style={{ borderColor: C.border }}
      >
        <div
          className="grid grid-cols-[2rem_1fr_auto] gap-4 px-6 py-3 border-b"
          style={{ background: `rgba(15,118,110,0.06)`, borderColor: C.border }}
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
            style={{ background: `rgba(15,118,110,0.03)` }}
          >
            <span
              className="font-mono text-[11px]"
              style={{ color: `rgba(15,118,110,0.6)` }}
            >
              01
            </span>
            <div>
              <span className="font-syne font-bold text-[15px] text-[#0d2657]">
                ЦАГ БҮРТГЭЛИЙН СИСТЕМ 6.0
              </span>
              <div className="mt-3 space-y-1.5">
                {[
                  "Хэлтэс тасгийн бүртгэл",
                  "Ажилтны бүртгэл",
                  "Ажлын цагийн хуваарь",
                  "Ажилтны шилжилт хөдөлгөөн",
                  "Цаг төлөвлөлтийн хуваарь",
                  "Цаг бүртгэлийн зөрчлийн хяналт",
                  "Гүйцэтгэлийн сарын баланс",
                  "Ажилтны шалтгааны бүртгэл",
                  "Илүү цагийн модуль",
                  "Цаг бүртгэлийн автомат төхөөрөмжтэй холбоотой мэдээлэл",
                  "Эдийн засгийн хуанли",
                  "Байгууллагын ирц модуль",
                  "Цагийн хяналтын модуль",
                ].map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 text-[14px] text-[rgba(13,38,87,0.6)] font-medium"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
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
          style={{ background: `rgba(15,118,110,0.04)` }}
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

export default function TimePage() {
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
              "linear-gradient(160deg, #042f2e 0%, #0f766e 50%, #14b8a6 100%)",
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
                Цаг бүртгэлийн систем
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-3xl">
                  🕐
                </div>
                <div>
                  <span className="font-mono text-[12px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    Нэмэлт систем
                  </span>
                  <h1 className="font-syne font-black text-[clamp(24px,4vw,48px)] leading-tight tracking-[-0.04em] text-white">
                    Цаг бүртгэлийн систем
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
