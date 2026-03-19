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
  main: "#be185d",
  lmedium: "#ec4899",
  surface: "#fdf2f8",
  border: "rgba(190,24,93,0.2)",
  borderStr: "rgba(190,24,93,0.35)",
};

const modules = [
  {
    name: "Карт эзэмшигчийн бүртгэл",
    desc: "Хөнгөлөлтийн карт эзэмшигчдийн хувийн мэдээлэл, картын төрөл, бүртгэлийн огноо зэрэг бүх мэдээллийг нэгдсэн системд хадгалж удирдана.",
    features: [
      "Хувийн мэдээллийн бүртгэл",
      "Картын төрлийн тохиргоо",
      "Бүртгэлийн түүх",
    ],
  },
  {
    name: "Худалдан авалтын бүртгэл",
    desc: "Карт эзэмшигч бүрийн худалдан авалтын дэлгэрэнгүй түүхийг хөтөлж, оноо хуримтлуулах болон ашиглалтыг хянана.",
    features: [
      "Худалдан авалтын түүх",
      "Оноо хуримтлуулах",
      "Дүнгээс хамаарсан хувь өөрчлөлт",
    ],
  },
  {
    name: "Картын гүйлгээний бүртгэл",
    desc: "Картаар хийгдсэн бүх гүйлгээг огноо, салбар, дүнгээр нарийвчлан бүртгэж хянах боломжтой.",
    features: [
      "Гүйлгээний дэлгэрэнгүй",
      "Салбараар шүүлт",
      "Буцаалт, засварын бүртгэл",
    ],
  },
  {
    name: "Хамтран эзэмших хүсэлт",
    desc: "Нэг карт дансыг гэр бүлийн гишүүд болон бусад хүмүүстэй хамтран эзэмших хүсэлт гаргах, зөвшөөрөл олгох боломжтой.",
    features: ["Хамтран эзэмшигч нэмэх", "Эрхийн тохиргоо", "Хүсэлтийн хяналт"],
  },
  {
    name: "Зөвшөөрөл олголт",
    desc: "Карт эзэмшигчид картын үйлчилгээ, хямдрал, урамшуулал ашиглах эрхийг удирдлагын зөвшөөрлийн дагуу олгоно.",
    features: [
      "Эрхийн түвшингийн тохиргоо",
      "Зөвшөөрлийн дараалал",
      "Идэвхтэй/идэвхгүй горим",
    ],
  },
  {
    name: "Картын жагсаалт",
    desc: "Бүх картын жагсаалтыг карт эзэмшигч, картын төрөл, идэвхтэй эсэх зэрэг нөхцөлөөр шүүж харах боломжтой.",
    features: ["Нэгдсэн жагсаалт", "Олон нөхцөлт шүүлт", "Экспортлох боломж"],
  },
  {
    name: "Зөрчлийн шалгуур",
    desc: "Картын хэт их ашиглалт, буруу гүйлгээ болон бусад зөрчлүүдийг автоматаар илрүүлж удирдлагад мэдэгдэх.",
    features: ["Автомат илрүүлэлт", "Анхааруулгын систем", "Зөрчлийн тайлан"],
  },
  {
    name: "Хямдрал ба урамшуулал",
    desc: "Хямдрал, бонус, бэлэг, VIP, урамшуулал зэрэг картын олон төрлийн хөнгөлөлтийн бодлогыг тохируулж удирдана.",
    features: [
      "Хямдрал, бонус, бэлэг, VIP картын төрлүүд",
      "Худалдан авалтын дүнгээс хамаарсан хувь",
      "Байнгын хэрэглэгчийн урамшуулал",
      "Олон салбарт нэгдсэн хэрэглээ",
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
                background: `rgba(190,24,93,0.05)`,
                borderColor: C.border,
              }}
            >
              <th className="text-left px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)] w-8">
                /
              </th>
              <th className="text-left px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Техник хангамжийн жагсаалт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Клиент компьютерийн үзүүлэлт
              </th>
              <th className="text-center px-4 py-3 font-mono text-[13px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)]">
                Сервер компьютерийн үзүүлэлт
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="bg-white transition-colors border-b last:border-b-0"
                style={{ borderColor: C.border }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = C.surface)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "white")
                }
              >
                <td className="px-4 py-3 font-mono text-[14px] text-[rgba(13,38,87,0.35)] text-center">
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
                className="relative w-full px-3 py-3 text-[14px] font-medium transition-colors text-center leading-tmedium"
                style={{
                  color: active === tab.id ? C.main : "rgba(13,38,87,0.5)",
                  background:
                    active === tab.id ? "rgba(190,24,93,0.04)" : "transparent",
                }}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline-mobile"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 rmedium-0 h-0.5"
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
                    className="absolute bottom-0 left-0 rmedium-0 h-0.5 rounded-full"
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
    "Хямдрал, бонус, бэлэг, VIP, урамшууллын картын төрлүүд ашиглах боломжтой.",
    "Худалдан авалтын дүнгээс хамааран картын хувь автоматаар өөрчлөгдөнө.",
    "Карт эзэмшигчийн худалдан авалт болон бонусын түүх хөтлөгдөнө.",
    "Карт эзэмшигчдийн талаар тайлан, мэдээллүүд авах боломжтой.",
    "Карт эзэмшигчийн түүх мэдээлэл дээр үндэслэн менежмент хийх боломжтой.",
    "Картын үйлчилгээг нэвтрүүлэн худалдан авагчдын тоог нэмэгдүүлэх боломжтой.",
    "Картын үйлчилгээг олон төрлийн салбар дээр хэрэглэн бизнесээ өргөжүүлэх боломжтой.",
    "Байнгын хэрэглэгчиддээ зориулж хөнгөлөлт урамшуулал зарлан борлуулалтаа өсгөх боломжтой.",
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
          Хөнгөлөлтийн картын систем нь худалдааны, ресторан, зочид буудлын
          үйлчилгээ эрхэлдэг байгууллагуудад зориулагдсан систем бөгөөд
          хөнгөлөлтийн картын хямдрал урамшууллын олон хувилбарыг ашиглан
          харилцагч үйлчлүүлэгчдийнхээ худалдан авалтын шийдвэр гаргалтыг
          идэвхжүүлж, илүү олон бүтээгдэхүүн үйлчилгээг хүргэхэд туслах систем
          юм.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "5", label: "Картын төрөл" },
          { num: "8", label: "Үндсэн модуль" },
          { num: "∞", label: "Карт эзэмшигч" },
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
                style={{ background: C.lmedium }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-6">
          Картын төрлүүд
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: "💳", label: "Хямдралын карт" },
            { icon: "⭐", label: "Бонус карт" },
            { icon: "🎁", label: "Бэлгийн карт" },
            { icon: "👑", label: "VIP карт" },
            { icon: "🎯", label: "Урамшуулал карт" },
          ].map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-2 rounded-xl p-4 border text-center"
              style={{ background: C.surface, borderColor: C.border }}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="font-mono text-[13px] text-[rgba(13,38,87,0.55)] leading-tmedium">
                {c.label}
              </span>
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
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-lmedium mb-10">
        Хөнгөлөлтийн картны систем — нийт {modules.length} үндсэн модуль
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
            <p className="text-[16px] text-[rgba(13,38,87,0.55)] leading-[1.6] font-lmedium mb-4 flex-1">
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
                    style={{ background: C.lmedium }}
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
        Хөнгөлөлтийн картны систем{" "}
        <em className="font-normal italic" style={{ color: C.main }}>
          үнийн санал
        </em>
      </h2>
      <div
        className="rounded-2xl border p-12 flex flex-col items-center text-center"
        style={{ borderColor: C.border, background: C.surface }}
      >
        <div className="text-5xl mb-6">💳</div>
        <h3 className="font-syne font-bold text-[20px] text-[#0d2657] mb-3">
          Үнийн мэдээлэл боломжгүй байна
        </h3>
        <p className="text-[14px] text-[rgba(13,38,87,0.55)] font-lmedium leading-[1.7] max-w-md mb-8">
          Энэхүү системийн үнийн санал байгууллагын хэмжээ болон шаардлагаас
          хамаарч өөрчлөгдөх тул манай мэргэжилтэнтэй холбогдон үнийн санал авна
          уу.
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
      <p className="text-[16px] text-[rgba(13,38,87,0.45)] font-lmedium mb-10">
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

export default function LoyaltyPage() {
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
              "linear-gradient(160deg, #500724 0%, #be185d 50%, #ec4899 100%)",
          }}
        >
          <div className="max-w-content mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/products"
                className="font-mono text-[14px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
              >
                ← Бүтээгдэхүүн
              </Link>
              <span className="text-[rgba(255,255,255,0.2)]">/</span>
              <span className="font-mono text-[14px] text-[rgba(255,255,255,0.5)]">
                Хөнгөлөлтийн картны систем
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-3xl">
                  💳
                </div>
                <div>
                  <span className="font-mono text-[13px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    Нэмэлт систем
                  </span>
                  <h1 className="font-syne font-black text-[clamp(22px,3.5vw,44px)] leading-tmedium tracking-[-0.04em] text-white">
                    Хөнгөлөлтийн картны систем
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
