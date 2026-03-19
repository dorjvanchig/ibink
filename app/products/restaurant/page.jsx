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
  main: "#c2410c",
  medium: "#ea580c",
  surface: "#fff7ed",
  border: "rgba(194,65,12,0.2)",
  borderStr: "rgba(194,65,12,0.35)",
};

const modules = [
  {
    name: "Заалны тохиргоо",
    desc: "Ресторан салбар бүр дээрээ болон нэг заалан дотроо тамхи татдаг хэсэг, VIP өрөө гэх зэргээр заалны загварыг системд тохируулж өгөх бөгөөд ПОС-ийн дэлгэц дээр харагдана.",
    features: [
      "Заалны зохион байгуулалт",
      "VIP өрөөний тохиргоо",
      "Тамхи татдаг болон татдаггүй хэсэг",
    ],
  },
  {
    name: "Бараа материал",
    desc: "Бэлэн болон хагас боловсруулсан бүтээгдэхүүнийг ангилан орц найрлага, бэлтгэх арга, үнийн мэдээлэл, хямдрал урамшуулал зэрэг бүртгэлийн дагуу дэлгэрэнгүй бүртгэнэ.",
    features: [
      "Бүтээгдэхүүний ерөнхий мэдээлэл, орц найрлага",
      "Түүхий эд материалын бүртгэл",
      "Кодын хөрвөх нэгжийн тохиргоо",
      "Барааны үнийн бүртгэл — салбар тус бүрээр",
    ],
  },
  {
    name: "ТЭМ-ын хорогдлын тохиргоо",
    desc: "Хийгдсэн тохиргооны рестораны гүйлгээ гаргахад бэлэн бүтээгдэхүүнд зарцуулагдах түүхий эд материалын хорогдлын хэмжээг тооцоолж хорогдлын дансанд бичилт хийнэ.",
    features: [
      "Автомат хорогдлын тооцоолол",
      "Дансны бичилт",
      "Орц нормын хяналт",
    ],
  },
  {
    name: "Хоол гаргалтын хяналт",
    desc: "Хоолыг ямар хугацаанд бэлтгэн гаргаж байгааг хянах тохиргоог хийх бөгөөд минутын тодорхой интервалыг өнгүүдээр ялган тохируулж өгнө.",
    features: [
      "Хугацааны интервалын тохиргоо",
      "Өнгийн дохио",
      "Хоол бэлтгэх хугацааны шинжилгээ",
    ],
  },
  {
    name: "Фронт оффис (ПОС)",
    desc: "Зөөгчийн захиалга бүртгэлийн ПОС програм. Ширээний болон хоолны захиалга авах, төлбөр тооцоог бодож гаргах бүхий л гар ажиллагааг хөнгөвчилнө.",
    features: [
      "Шууд борлуулалт болон хүргэлтийн захиалга",
      "VIP өрөөний TAX тооцоолол",
      "Урьдчилсан болон утсаар захиалга",
      "Ээлж солигдоход захиалга шилжүүлэх",
    ],
  },
  {
    name: "Бак оффис",
    desc: "Рестораны бүх төрлийн төлбөр тооцоог хянах, тохиргоонуудыг хийх, рестораны ерөнхий үйл явцыг удирдах систем.",
    features: [
      "Гүйлгээний санхүүгийн системд дамжуулалт",
      "Хямдралын загварын тохиргоо",
      "Хөнгөлөлтийн бодлогын дараалал",
      "Цаг, байршлаас хамаарсан хямдрал",
    ],
  },
  {
    name: "Талоны жагсаалт",
    desc: "ПОС-ийн програм дээр бичигдсэн талонуудыг огноо, ресторан, заал, зөөгч, хоол гэх мэт олон нөхцөлөөр шүүж харах боломжтой.",
    features: [
      "Олон нөхцөлт шүүлт",
      "Талоны дэлгэрэнгүй мэдээлэл",
      "Устгагдсан талоны жагсаалт",
    ],
  },
  {
    name: "Тогоочийн борлуулалт",
    desc: "ПОС-ийн програмаар бичилт хийгдэхгүй тогоочоос цех руу гаргаж буй бэлэн бүтээгдэхүүний хөдөлгөөний баримтыг системд оруулна.",
    features: [
      "Цехийн хөдөлгөөний баримт",
      "Тогоочийн борлуулалтын жагсаалт",
      "Загварын дагуу оруулга",
    ],
  },
  {
    name: "Гүйлгээ",
    desc: "Дуусаагүй үйлдвэрлэлийн зардал, түүхий эд, бараа материал, борлуулалтын орлого, өртөг, кассын дансны тохиргоог хийж санхүүгийн системд гүйлгээ хийнэ.",
    features: [
      "Борлуулалт, тогоочийн борлуулалт",
      "Бүтээгдэхүүний орлого, борлуулалт",
      "VIP өрөөний гүйлгээ",
    ],
  },
  {
    name: "Удирдлагын хяналт",
    desc: "Рестораны үйл ажиллагаатай холбоотой төрөл бүрийн шинжилгээг хийж бизнесийн нөхцөл байдлыг тодорхойлох, оновчтой шийдвэр гаргахад туслана.",
    features: [
      "Хоолны борлуулалт — бүлгээр, бүтээгдэхүүнээр",
      "Ширээ ашиглалт, зөөгчийн гүйцэтгэл",
      "Ашгийн хяналт, үнэ өртгийн харьцуулалт",
      "Идэвхтэй цагийн шинжилгээ",
    ],
  },
  {
    name: "Хайлтын систем ба тайлан",
    desc: "Шаардлагатай мэдээллээ хүссэн хэлбэрээр хормын дотор шүүж харах системтэй. Drill Down тайлан оруулж өгсөн бөгөөд нэмэлт тайлан үүсгэх боломжтой.",
    features: [
      "ПОС гүйлгээний болон борлуулалтын тайлан",
      "Зөөгч, тогоочийн тайлан",
      "Хөнгөлөлт, хүргэлтийн тайлан",
      "Drill Down задаргаатай тайлан",
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
                background: `rgba(194,65,12,0.05)`,
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
                className="bg-white transition-colors border-b last:border-b-0 hover:bg-[#fff7ed]"
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
                    active === tab.id ? "rgba(194,65,12,0.04)" : "transparent",
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
    "Өртгийн нарийн тооцоолол хийнэ.",
    "Түүхий эд материалын зарцуулалтын бодит тооцоог гаргана.",
    "Рестораны заалны зохион байгуулалтыг хүссэнээрээ зурна.",
    "Зөөгчийн бичсэн захиалга тогоочийн компьютер дээр дэлгэрэнгүй хэлбэрээр цаг хугацаа алдалгүйгээр мэдээлэгдэнэ.",
    "Салбар тус бүрээр ялгаатай үнээр борлуулах боломжтой.",
    "Хямдралын бодлого, загвараа хүссэнээрээ хийнэ.",
    "Нэг ширээн дээрх тооцоог тус бүрд нь салгаж хийнэ.",
    "Үйлчлүүлэгчийн хүссэнээр хоолны орц, хэмжээ, бэлтгэх аргыг өөрчилнө.",
    "Хөнгөлөлтийн картын системтэй холбогдон картын хөнгөлөлт үзүүлэх боломжтой.",
    "Түүхий эдийн зарлага, дуусаагүй үйлдвэрлэлийн зардал, орлогын гүйлгээ автоматаар хийгдэнэ.",
    "Удирдлагын хяналт цонхоор рестораны хамгийн ачаалалтай цаг, ширээ, зөөгч, хоолны шинжилгээнүүдийг хийнэ.",
    "Зөөгч бүр өөрийн гэсэн кодтой байх бөгөөд зөөгч бүрийн захиалга ялгаран харагдана.",
  ];

  const advantages = [
    "Хурдан шуурхай үйлчилгээ бий болно.",
    "Борлуулалтын мэдээллийг цаг тухайд нь хянана.",
    "Тогооч зөөгч касс хоорондын захиалгын үйл явцыг хурдасгаснаар хэрэглэгчдийн таашаалыг хүртэн орлого өсөх бүрэн боломжтой.",
    "Үйлчлүүлэгчийн хэрэглээнд бүрэн нийцсэн уян хатан үйлчилгээний хэлбэрүүд бий болно.",
    "Рестораны замбараагүй бүртгэлүүд үгүй болж цаг хугацаа бүрээр автоматжуулагдана.",
    "Санхүүгийн системтэй уялдаж ажилласнаар дуусаагүй үйлдвэрлэлийн зардлын бүртгэлийг автоматаар хөтөлснөөр цаг хугацаа хэмнэнэ.",
    "Төсөвт өртөг, худалдсан үнийн зөрүүгээр ашгийн шинжилгээ хийх боломжтой.",
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
          Уг систем рестораны үйлчилгээ эрхэлдэг байгууллагуудын үйлчлүүлэгчийн
          захиалгаас эхлээд хоолны орц норм, зарагдах үнэ, рестораны заалны
          зохион байгуулалт, хоол гаргалттай холбоотой дэлгэрэнгүй мэдээллийг
          бүртгэж, зөөгч, хоол, ширээтэй холбоотой төрөл бүрийн шинжилгээ,
          тайлан мэдээллийг боловсруулан гаргадаг систем юм.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "11", label: "Үндсэн модуль" },
          { num: "14+", label: "Тайлангийн төрөл" },
          { num: "2", label: "Офисын горим" },
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
          Програм ашигласнаар гарах үр дүн
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

      {/* Front / Back office */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "🧾 Фронт оффис (ПОС)",
            desc: "Зөөгчийн захиалга бүртгэлийн ПОС програм. Ширээний болон хоолны захиалга авах, төлбөр тооцоог бодож гаргах бүхий л гар ажиллагааг хөнгөвчилсөн. Технологийн картын дагуу хоол хийхээс гадна орцыг тохируулах, нэмэгдэл олгох боломжтой.",
          },
          {
            title: "📊 Бак оффис",
            desc: "Рестораны бүх төрлийн төлбөр тооцоог хянах, тохиргоонуудыг хийх систем. Гарсан гүйлгээг санхүүгийн систем рүү дамжуулж, хямдралын загварыг байршил, цаг хугацаа, худалдан авалтын тоо хэмжээнээс хамааруулан уян хатнаар тохируулна.",
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
        Рестораны удирдлага — нийт {modules.length} үндсэн модуль
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
            <h3 className="font-syne font-bold text-[15px] tracking-[-0.02em] text-[#0d2657] mb-3">
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
  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14">
      <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#0d2657] mb-10">
        Рестораны удирдлага{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          үнийн санал
        </em>
      </h2>

      <div
        className="rounded-2xl border p-12 flex flex-col items-center text-center"
        style={{ borderColor: C.border, background: C.surface }}
      >
        <div className="text-5xl mb-6">🍽️</div>
        <h3 className="font-syne font-bold text-[20px] text-[#0d2657] mb-3">
          Үнийн мэдээлэл боломжгүй байна
        </h3>
        <p className="text-[14px] text-[rgba(13,38,87,0.55)] font-medium leading-[1.7] max-w-md mb-8">
          Энэхүү системийн үнийн санал байгууллагын хэмжээ, шаардлагаас хамаарч
          өөрчлөгдөх тул манай мэргэжилтэнтэй холбогдон үнийн санал авна уу.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center text-white px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:opacity-90 transition-opacity"
          style={{ background: C.main }}
        >
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

export default function RestaurantPage() {
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
              "linear-gradient(160deg, #431407 0%, #c2410c 50%, #ea580c 100%)",
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
                Рестораны удирдлага
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-3xl">
                  🍽️
                </div>
                <div>
                  <span className="font-mono text-[14px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    Нэмэлт систем
                  </span>
                  <h1 className="font-syne font-black text-[clamp(22px,3.5vw,44px)] leading-tight tracking-[-0.04em] text-white">
                    Рестораны удирдлага
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
