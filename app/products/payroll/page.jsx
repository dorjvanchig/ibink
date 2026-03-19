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
  main: "#0369a1",
  medium: "#0ea5e9",
  surface: "#f0f9ff",
  border: "rgba(3,105,161,0.2)",
  borderStr: "rgba(3,105,161,0.35)",
};

const modules = [
  {
    name: "Цалингийн бодолт",
    desc: "Цалингийн системийн бүх мэдээллийг нэгтгэн цалингийн бодолтыг хийдэг нягтлангийн ажиллах үндсэн модуль. Загварыг хүссэн хэлбэрээрээ үүсгэн хэзээ ч цалингаа бодно.",
    features: [
      "Эксел рүү мэдээллээ экспортлоно",
      "Байгууллагадаа тохирсон шинэ загварууд үүсгэнэ",
      "Тухайн бодолтонд ашиглах үзүүлэлтүүдээ нэмж хасна",
      "Авлага татна",
    ],
  },
  {
    name: "Цалингийн жагсаалт",
    desc: "Өнгөрсөн саруудын цалингийн бодолтын түүхийг нэгдсэн байдлаар харуулах бөгөөд хэлтэс, огноо, ажилтнаар шүүлт, хайлт хийх боломжтой.",
    features: ["Түүхийн нэгдсэн харагдац", "Хэлтэс, огноо, ажилтнаар шүүлт", "Дэлгэрэнгүй мэдээлэл"],
  },
  {
    name: "Цалингийн гүйлгээ",
    desc: "Бодогдсон цалингийн дүнгээр санхүүгийн систем рүү хийх гүйлгээг нэг удаа тохируулж өгснөөр нэмэлт ажлуудаас зайлсхийна.",
    features: ["Автомат гүйлгээ", "Санхүүгийн системтэй холболт", "Нэг удаагийн тохиргоо"],
  },
  {
    name: "Актны мөнгө бодох",
    desc: "Ажилтан өвдсөн үед байгууллагаас болон нийгмийн даатгалаас олгох тэтгэмжийг автоматаар бодно. Өмнөх 3 сарын нийт цалин болон ажилласан хоног автоматаар бөглөгдөнө.",
    features: ["Актны мөнгө бодох", "Актны мөнгөний жагсаалт", "Актны мөнгөний хувь"],
  },
  {
    name: "Амралтын мөнгө бодох",
    desc: "Хүний нөөцийн програмд бүртгэгдсэн амралтын тушаалыг үндэслэн сүүлийн 12 сарын цалингийн дунджийг ашиглан Монгол улсын хөдөлмөрийн хуулийн дагуу бодно.",
    features: ["Амралтын мөнгө бодох", "Амралтын мөнгөний жагсаалт", "12 сарын дундаж цалин"],
  },
  {
    name: "Жирэмсний мөнгө бодох",
    desc: "Монгол улсын хөдөлмөрийн хуулийн дагуу жирэмсэн болон амаржсан эхчүүдэд жирэмсний болон амаржсаны 120 хоногийн цалинтай амралт олгоно.",
    features: ["Жирэмсний мөнгө бодох", "Жирэмсний мөнгөний жагсаалт", "120 хоногийн тооцоо"],
  },
  {
    name: "Цалингийн мэдэгдэл",
    desc: "Цалингийн бодолтын үр дүнг ажилтан бүрт и-мэйл болон мессежээр автоматаар илгээх боломжтой.",
    features: ["И-мэйлээр илгээх", "Мессежээр илгээх", "Автомат илгээлт"],
  },
  {
    name: "Ажлын наряд",
    desc: "Үйлдвэрийн газрууд болон хийснээр цалинждаг байгууллагад ашиглагдах. Гүйцэтгэлийн норм бүхий тарифтай ажил гүйцэтгэдэг ажилтны хийсэн ажлыг хэлтэс тус бүрээр бүртгэнэ.",
    features: [
      "Урьдчилгаа цалин",
      "Сарын сүүл цалин",
      "Урьдчилгаа цалин олгох хүснэгт",
      "Цалингийн карт",
    ],
  },
];

const connectedSystems = [
  "Санхүү, НББ-ийн Даймонд систем",
  "Цаг бүртгэлийн систем",
  "Хүний нөөцийн удирдлага, төлөвлөлтийн систем",
];

function ReqTable({ title, rows }) {
  return (
    <div className="mb-10">
      <h3 className="font-syne font-bold text-[16px] italic text-[#0d2657] mb-4 text-center">{title}</h3>
      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.border }}>
        <table className="w-full text-[16px]">
          <thead>
            <tr className="border-b" style={{ background: `rgba(3,105,161,0.05)`, borderColor: C.border }}>
              <th className="text-left px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)] w-8">/</th>
              <th className="text-left px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">Техник хангамжийн жагсаалт</th>
              <th className="text-center px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">Клиент компьютерийн үзүүлэлт</th>
              <th className="text-center px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">Сервер компьютерийн үзүүлэлт</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="bg-white transition-colors border-b last:border-b-0 hover:bg-[#f0f9ff]" style={{ borderColor: C.border }}>
                <td className="px-4 py-3 font-mono text-[11px] text-[rgba(13,38,87,0.35)] text-center">{i + 1}</td>
                <td className="px-4 py-3 text-[rgba(13,38,87,0.7)] font-medium">{row.label}</td>
                <td className="px-4 py-3 text-[rgba(13,38,87,0.65)] text-center leading-normal">{row.client}</td>
                <td className="px-4 py-3 text-[rgba(13,38,87,0.65)] text-center leading-normal">{row.server}</td>
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
    <div className="sticky top-16 z-40 bg-white border-b" style={{ borderColor: C.border }}>
      <div className="max-w-content mx-auto">
        <ul className="grid grid-cols-2 md:hidden">
          {tabs.map((tab) => (
            <li key={tab.id} className="border-b border-r last:border-r-0 nth-2:border-r-0 nth-3:border-b-0 nth-child4:border-b-0" style={{ borderColor: C.border }}>
              <button
                onClick={() => setActive(tab.id)}
                className="relative w-full px-3 py-3 text-[11px] font-medium transition-colors text-center leading-tight"
                style={{ color: active === tab.id ? C.main : "rgba(13,38,87,0.5)", background: active === tab.id ? "rgba(3,105,161,0.04)" : "transparent" }}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span layoutId="tab-underline-mobile" transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: C.main }} />
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
                style={{ color: active === tab.id ? C.main : "rgba(13,38,87,0.5)" }}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span layoutId="tab-underline" transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: C.main }} />
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
    "Акт, амралт, жирэмсний амралтын мөнгө, цалингийн татварын менежментийн дагуу ажиллахаас гадна татварын хууль өөрчлөгдөхөд уян хатнаар ажиллах боломжтой.",
    "Байгууллагын онцлогоос хамаарсан ямар ч тооцоололтой цалингийн томъёог хялбархан угсарч цалингаа хүссэн үедээ бодно.",
    "Цалингийн бодолтонд дурын үзүүлэлтийг хялбархан нэмж хасна.",
    "Цалингийн бодолтонд валютын үзүүлэлт оруулан валютаар цалин бодох боломжтой.",
    "Байгууллагын дотоод шилжилт хөдөлгөөний дагуу нэг ажилтны хувьд хэдэн ч хэлтэс дээр цалин бодох боломжтой.",
    "Амралтын хуваарь, төлөвлөгөө, баярын өдрүүдийг тохируулах боломжтой.",
    "НДШ, ХАОАТатварын тооцоог өссөн дүнгээс бодож зөрүүг тооцно.",
    "Санхүүгийн системрүү хэлтэс тасгуудын цалингийн мэдээг автоматаар гүйлгээ хийх боломжтой.",
    "Excel, Word, XML, HTML, PDF форматаар өгөгдлийг экспортлоно.",
    "Цалингийн мэдээг ажилтнуудад и-мэйлээр болон мессежээр илгээх боломжтой.",
    "Нийгмийн даатгалын вэбээр авдаг экселийн файлыг програмаас гаргах боломжтой.",
    "Хэрэглэгч хүссэн тайлангаа хүссэн үзүүлэлтүүдээр угсран авах боломжтой.",
  ];

  const advantages = [
    "Акт, амралт болон татвар суутгалын хувь зэрэг үзүүлэлтүүдийг урьдчилан тохируулснаар санамсаргүй алдаа, ажлын хариуцлага алдахаас сэргийлж чадна.",
    "Өмнөх сарын аль нэг үзүүлэлтийг дараа сард шилжүүлэх хэрэгслийг ашигласнаар мэдээллээ олон давтан оруулах болон зөрүү буруу шивэхгүй болно.",
    "Амралтын өдрийн төлөвлөгөөг оруулснаар илүү цаг болон баяр ёслолын цагийн нэмэгдэл нь автомат бодогдоно.",
    "Таны хийсэн гүйлгээг бусад хэрэглэгчид засах, устгах боломжгүй учраас бусдын хариуцлагагүй үйлдлээс өөрийгөө хамгаалж чадна.",
    "Цалингаа цагт нь тавих, ажилтнуудын сэтгэл ханамжийг өндөрт байлгах, үргүй зардлыг бууруулахад тань туслана.",
    "Таны цаг хугацааг хэмнэж, санамсаргүй алдаа гаргах, ажлын хариуцлага алдахаас урьдчилан сэргийлэхэд туслана.",
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14 space-y-14">
      <div>
        <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] mb-5" style={{ color: C.main }}>
          Системийн танилцуулга
        </h2>
        <p className="text-[16px] text-[rgba(13,38,87,0.7)] leading-[1.85] font-medium max-w-3xl">
          Цалин тооцооны энэхүү систем нь тогтмолоор, цагаар, ажлын нарядаар гэх мэт бүх төрлийн цалингийн тооцооллыг хийх бөгөөд өдрөөр, 7 хоногоор, 14 хоногоор гэхчилэн сард хэдэн ч удаа цалингийн бодолтыг хийх боломжтой.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "8", label: "Үндсэн модуль" },
          { num: "∞", label: "Цалин бодолт" },
          { num: "3", label: "Холбогдох систем" },
          { num: "1996", label: "Үүсгэн байгуулсан" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl px-5 py-5 text-center border" style={{ background: C.surface, borderColor: C.border }}>
            <div className="font-syne font-black text-[32px] tracking-[-0.04em] leading-none" style={{ color: C.main }}>{s.num}</div>
            <div className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-5">Цалингийн тооцооны системийн боломжууд</h3>
        <ul className="space-y-3">
          {capabilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.75]">
              <span className="w-1.5 h-1.5 rounded-full mt-1.75 shrink-0" style={{ background: C.medium }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-6">Системийг ашигласнаар гарах үр дүн</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {advantages.map((a, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl p-4 border" style={{ background: C.surface, borderColor: C.border }}>
              <span className="font-mono text-[11px] shrink-0 mt-0.5" style={{ color: C.main }}>{String(i + 1).padStart(2, "0")}</span>
              <p className="text-[13.5px] text-[rgba(13,38,87,0.65)] leading-[1.7] font-medium">{a}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-5">Холбогдон ажиллах системүүд</h3>
        <div className="flex flex-wrap gap-2">
          {connectedSystems.map((s) => (
            <span key={s} className="font-mono text-[16px] px-4 py-2 rounded-full border transition-all cursor-default"
              style={{ borderColor: C.border, background: `rgba(3,105,161,0.03)`, color: "rgba(13,38,87,0.55)" }}>
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
        Системийн үндсэн <em className="font-normal italic" style={{ color: C.main }}>модулиуд</em>
      </h2>
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Цалингийн систем — нийт {modules.length} үндсэн модуль
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <div key={m.name}
            className="bg-white rounded-2xl p-6 hover:shadow-sm transition-all duration-200 flex flex-col border"
            style={{ borderColor: C.border }}
            onMouseEnter={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = C.borderStr; }}
            onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = C.border; }}
          >
            <h3 className="font-syne font-bold text-[15px] tracking-[-0.02em] text-[#0d2657] mb-3">{m.name}</h3>
            <p className="text-[16px] text-[rgba(13,38,87,0.55)] leading-[1.6] font-medium mb-4 flex-1">{m.desc}</p>
            <ul className="space-y-1.5">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[11.5px] text-[rgba(13,38,87,0.5)] font-medium leading-normal">
                  <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: C.medium }} />
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
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-10">
        Цалингийн систем <em className="font-normal italic" style={{ color: C.main }}>үнийн санал</em>
      </h2>
      <div className="rounded-2xl border p-12 flex flex-col items-center text-center" style={{ borderColor: C.border, background: C.surface }}>
        <div className="text-5xl mb-6">💰</div>
        <h3 className="font-syne font-bold text-[20px] text-[#0d2657] mb-3">
          Үнийн мэдээлэл боломжгүй байна
        </h3>
        <p className="text-[14px] text-[rgba(13,38,87,0.55)] font-medium leading-[1.7] max-w-md mb-8">
          Энэхүү системийн үнийн санал байгууллагын хэмжээ болон шаардлагаас хамаарч өөрчлөгдөх тул манай мэргэжилтэнтэй холбогдон үнийн санал авна уу.
        </p>
        <Link href="/contact"
          className="inline-flex items-center justify-center text-white px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:opacity-90 transition-opacity"
          style={{ background: C.main }}>
          Үнийн санал авах →
        </Link>
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
    { label: "Онлайн сүлжээтэй байх", client: "Гадаад хаяг авах (Интернэт ашиглагч байгууллагаасаа авах шаардлагатай)", server: "" },
  ];
  const okRows = [
    { label: "Процессор", client: "i3 4-7Ye", server: "Core i5 4-6ye" },
    { label: "CPU", client: "2.0GHz", server: "3.0GHz, түүнээс дээш" },
    { label: "RAM", client: "4GB", server: "16GB" },
    { label: "HDD", client: "250GB", server: "1000GB" },
    { label: "Дотоод сүлжээний хурд", client: "100/1000", server: "100/1000" },
    { label: "Онлайн сүлжээтэй байх", client: "Гадаад хаяг авах (Интернэт ашиглагч байгууллагаасаа авах шаардлагатай)", server: "" },
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-2">
        Програм хангамжийн <em className="font-normal italic" style={{ color: C.main }}>техникийн шаардлага</em>
      </h2>
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Дараах үзүүлэлтийн дагуу техник, хэрэгслээ бэлдсэн байхыг зөвлөж байна.
      </p>
      <ReqTable title="Програм хурдан ажиллах" rows={fastRows} />
      <ReqTable title="Програм боломжит хурдтай ажиллах" rows={okRows} />
      <div className="rounded-2xl p-6 space-y-4 border" style={{ background: C.surface, borderColor: C.border }}>
        <h3 className="font-syne font-bold text-[16px] text-[#0d2657] mb-3">Нэмэлт шаардлага</h3>
        {[
          "Процессоруудад үйлдлийн системүүдийг бүрэн суулгасан байна.",
          "Процессоруудад вирусын эсрэг программыг заавал суулгасан байна.",
          "Сүлжээний горимд ажиллахаар програм хангамж авч байгаа бол бүх компьютерийг онлайн сүлжээнд холбосон байна.",
          "Програм ашиглах хэрэглэгчийн компьютер дээр Windows 7, 8, 10 (version) суусан байх ба сервер компьютер дээр 64bit-н үйлдлийн систем суулгасан байх шаардлагатай.",
          "Дээрх үзүүлэлтүүд нь 10-с доош хэрэглэгч болон системийн баазууд 2оос хэтрэхгүй нөхцөлд гаргасан үзүүлэлт юм.",
        ].map((note, i) => (
          <div key={i} className="flex items-start gap-3 text-[13.5px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.7]">
            <CheckOutlined className="mt-0.5 shrink-0" style={{ color: C.main }} />
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PayrollPage() {
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
          style={{ background: "linear-gradient(160deg, #0c2a3d 0%, #0369a1 50%, #0ea5e9 100%)" }}
        >
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Link href="/products" className="font-mono text-[11px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
                ← Бүтээгдэхүүн
              </Link>
              <span className="text-[rgba(255,255,255,0.2)]">/</span>
              <span className="font-mono text-[11px] text-[rgba(255,255,255,0.5)]">Цалингийн систем</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-3xl">
                  💰
                </div>
                <div>
                  <span className="font-mono text-[13px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">Нэмэлт систем</span>
                  <h1 className="font-syne font-black text-[clamp(24px,4vw,48px)] leading-tight tracking-[-0.04em] text-white">
                    Цалингийн систем
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