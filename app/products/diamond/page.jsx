"use client";

import { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
    reports: 41,
    desc: "Байгууллагын санхүү, НББ-ийн бүх төрлийн ажил гүйлгээг төвлөрүүлэн бүртгэж, бусад програм, модулиас хийгдсэн гүйлгээг өөртөө нэгтгэн, тухайн үеийн бизнесийн төлөв байдал, санхүүгийн тайлан балансыг бэлтгэх, боловсруулах үндсэн хэрэгсэл юм.",
    features: [
      "Дансны нэгдсэн төлөвлөгөө зохиож, данс үүсгэж, эхний үлдэгдэл оруулна",
      "Энгийн, нийлмэл болон хаалтын гүйлгээг хийнэ",
      "НӨАТ-ын авлага болон өглөгийн дансны үлдэгдлийн өөрчлөлт хийнэ",
      "Ханш бүртгэж, тэгшитгэнэ",
    ],
  },
  {
    name: "Мөнгөн хөрөнгө",
    reports: 10,
    desc: "Байгууллагын бэлэн болон бэлэн бус мөнгөний үлдэгдлийг хөтлөх, өдөр тутмын орлого зарлагын гүйлгээг түргэн шуурхай бүртгэх, кассын ордер, төлбөрийн даалгавар зэрэг анхан шатны баримт болон мөнгөн хөрөнгийн тайлан мэдээг богино хугацаанд боловсруулах зорилготой.",
    features: [
      "Касс болон харилцахын бүртгэлийг тусад нь өөр өөр хэрэглэгч хариуцах боломжтой",
      "Эксел файлаас касс харилцахын олон тооны баримт импортлох боломжтой",
      "Бүх төрлийн валютаар мөнгөн хөрөнгөө бүртгэж ханш тэгшитгэх боломжтой",
      "Мөнгөн хөрөнгийн үлдэгдлийг данс, валют, графикан мэдээллээр харуулж хянана",
    ],
  },
  {
    name: "Өглөг, авлага",
    reports: 15,
    desc: "Бэлтгэн нийлүүлэгч, салбар нэгж хооронд, ажилтан болон бусад харилцагчтай үүссэн тооцоо нэг бүрийг нарийвчлан бүртгэх бөгөөд хянах, төлөвлөх, шийдвэр гаргах боломжоор хангагдана.",
    features: [
      "Тооцоо үүсэх огноо, дуусах огноо, гэрээ, төлөлтийн график гаргана",
      "Бүх төрлийн валютаар тооцоо үүсгэх, хаах, нэгтгэх, шилжүүлэх боломжтой",
      "Насжилтын тайлангууд бэлтгэгдэж гарна",
      "НӨАТ-ын боломжит бүх гүйлгээг хийнэ",
    ],
  },
  {
    name: "Бараа материал",
    reports: 26,
    desc: "Бараа материалын үндсэн мэдээллийн бааз бүрдүүлж, анхан шатны орлого, зарлагын баримт оруулах, агуулах буюу нярав хооронд хөдөлгөөн хийх, дахин үнэлэх, тооллого хийх зэрэг бүртгэл тооцоог удирдах боломжтой.",
    features: [
      "Баар код, цуврал, сери, хадгалах хугацаагаар ялгаж бүртгэл хөтлөнө",
      "FIFO, дундаж өртгийн аргуудаар өртөг тооцоолно",
      "Тооллогын төхөөрөмж ашиглан бараа материалын тооллого хийх боломжтой",
      "Худалдан авалт, борлуулалтын буцаалтыг бараагаар болон падаанаар хийнэ",
    ],
  },
  {
    name: "Үндсэн хөрөнгө",
    reports: 17,
    desc: "Байгууллага дахь хөрөнгийн орлого авах, зарлагдах, элэгдлийн зардлыг салбар хэлтсүүдийн зардалд хуваарилах, шилжилт хөдөлгөөн хийх, актлах, дахин үнэлэх, хөрөнгийнхөө талаар иж бүрэн мэдээлэлтэй байх боломжийг бий болгоно.",
    features: [
      "Хөрөнгө тус бүрийг ялгаатай бүртгэлийн дугааржуулж карт хөтөлнө",
      "Элэгдлийн зардлыг шулуун шугамын ба хоногоор тооцоолно",
      "Дахин үнэлгээг анхны өртгөөр, үлдэгдэл өртгөөр, одоогийн өртгөөр хийнэ",
      "Үндсэн хөрөнгүүдийн зургийг хадгална",
    ],
  },
  {
    name: "Хангамжийн материал",
    reports: 8,
    desc: "Хангамжийн материал нь орлого зарлага хийх, шилжилт хөдөлгөөн хийх, актлах, агуулах руу буцаах зэрэг хангамжийн материалтай холбоотой бүхий л гүйлгээг хийнэ.",
    features: [
      "Тайлант хугацаанд зардал тооцож үйл ажиллагааны зардал шингээх боломжтой",
      "Эд хариуцагч хэлтэс тасгийн мэдээллийг солих боломжтой",
      "Зардал тооцож дууссан материалуудыг бөөнөөр нь зарлагадах боломжтой",
      "Тооллого хийж шилжилт хөдөлгөөний зөрчлийг хянах боломжтой",
    ],
  },
  {
    name: "Зардал",
    reports: 2,
    desc: "Үйлдвэрлэл эрхэлдэг байгууллагуудад хэрэглэгдэх бөгөөд НББ-ийн хэмжээнд дуусаагүй үйлдвэрлэлийн зардлуудыг данс бүрээр бүртгэн хуваарилж, бүтээгдэхүүний өртөг тооцохдоо бүх зардлуудаа ДҮ-ийн нэгтгэл зардал руу хааж хувиар тооцоолно.",
    features: [
      "Зардлын дансуудын дүнг ДҮ-ийн дансууд руу хуваарилна",
      "ДҮ-ийн шууд материал, шууд хөдөлмөр, ҮНЗ-ийг ДҮ нэгтгэл зардалд нэгтгэнэ",
      "Цехүүдийн зардлын хуваарилалт хийнэ",
      "Зардлын төсөв зохионо",
    ],
  },
  {
    name: "Төсөв",
    reports: 3,
    desc: "Байгууллага жил, улирал, сараар үйл ажиллагаагаа төлөвлөж төсөв зохион түүнийхээ биелэлт, хэмнэлт, хэтрэлтийг хянах боломжийг энэ модуль олгоно.",
    features: [
      "Дансны түвшинд болон тайлангийн үзүүлэлтүүдэд төсөв оруулах боломжтой",
      "Төсөв гүйцэтгэлийн харьцуулсан тайлан мэдээгээр хангана",
      "Өмнөх үеийн гүйцэтгэлд үндэслэн регрессийн хамаарлын аргаар төсөв зохионо",
    ],
  },
  {
    name: "Төсөл",
    reports: 4,
    desc: "Төслийн санхүүжилтийн зарцуулалтыг нарийн бүртгэж тайлан мэдээгээр хангана.",
    features: [
      "Төслийн санхүүжилтийн зарцуулалтыг нарийн бүртгэнэ",
      "Төслийн төсөв оруулж, төсөв гүйцэтгэлийн харьцуулсан мэдээллээр гаргана",
    ],
  },
];

const pricing = [
  {
    name: "НЯГТЛАН БОДОХ БҮРТГЭЛИЙН СИСТЕМ",
    price: "5,060,000₮",
    children: [
      { name: "Ерөнхий журнал, гүйлгээний модуль", price: "450,000₮" },
      { name: "Мөнгөн хөрөнгийн модуль", price: "500,000₮" },
      { name: "Авлага, өглөгийн модуль", price: "820,000₮" },
      { name: "Бараа материалын модуль", price: "810,000₮" },
      { name: "Үндсэн хөрөнгийн модуль", price: "810,000₮" },
      { name: "Хангамжийн материалын модуль", price: "450,000₮" },
      { name: "Зардлын модуль", price: "410,000₮" },
      { name: "Тайлангийн модуль", price: "810,000₮" },
    ],
  },
  {
    name: "ДЭЛГҮҮРИЙН УДИРДЛАГЫН СИСТЕМ",
    price: "3,270,000₮",
    children: [
      { name: "Дэлгүүрийн удирдлага", price: "1,630,000₮" },
      { name: "Дэлгүүрийн ПОС програм", price: "810,000₮" },
      { name: "Хөнгөлөлтийн картын програм", price: "830,000₮" },
    ],
  },
  {
    name: "РЕСТОРАНЫ УДИРДЛАГЫН СИСТЕМ",
    price: "3,330,000₮",
    children: [
      { name: "Рестораны удирдлага", price: "1,940,000₮" },
      { name: "Рестораны ПОС", price: "560,000₮" },
      { name: "Хөнгөлөлтийн картын програм", price: "830,000₮" },
    ],
  },
  {
    name: "БОРЛУУЛАЛТ ТҮГЭЭЛТИЙН СИСТЕМ",
    price: "4,770,000₮",
    children: [
      { name: "Борлуулалт түгээлтийн удирдлага", price: "3,540,000₮" },
      { name: "Борлуулалтын бүртгэл (Android)", price: "650,000₮" },
      { name: "Бөөний төвийн борлуулалт", price: "580,000₮" },
    ],
  },
  { name: "ЦАГ БҮРТГЭЛИЙН СИСТЕМ 6.0", price: "1,940,000₮", children: [] },
  { name: "ЦАЛИНГИЙН ТООЦООНЫ СИСТЕМ", price: "2,060,000₮", children: [] },
];

const connectedSystems = [
  "1. Үндсэн хөрөнгийн ахисан түвшний програм",
  "2. Цалингийн тооцооны систем",
  "3. Цаг бүртгэлийн систем",
  "4. Хүний нөөцийн удирдлага, төлөвлөлтийн систем",
  "5. Харилцагчийн удирдлагын систем",
  "6. Дэлгүүрийн удирдлагын систем",
  "7. Дэлгүүрийн кассирын програм",
  "8. Харилцагчийн тооцооны систем",
  "9. Хөнгөлөлтийн картын систем",
  "10. Захиалга нийлүүлэлтийн програм",
  "11. Үйлдвэрлэлийн удирдлагын систем",
  "12. Рестораны удирдлагын систем",
  "13. Рестораны зөөгчийн програм",
  "14. Борлуулалт түгээлтийн систем",
  "15. Борлуулагчдын захиалга, түгээлтийн бүртгэлийн Pocket PC програм",
  "16. Зочид буудлын удирдлагын систем",
  "17. Лабораторийн бүртгэл мэдээллийн систем",
  "18. Цахилгааны бүртгэл тооцооны систем",
  "19. Дулааны бүртгэл тооцооны систем",
  "20. Усны бүртгэл тооцооны систем",
  "21. Шатахууны тооцооны систем",
];

function TabBar({ active, setActive }) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-[rgba(26,79,160,0.1)]">
      <div className="max-w-content mx-auto">
        <ul className="grid grid-cols-2 md:hidden border-b-0">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`border-b border-r border-[rgba(26,79,160,0.08)] last:border-r-0 nth-2:border-r-0 nth-3:border-b-0 nth-4:border-b-0`}
            >
              <button
                onClick={() => setActive(tab.id)}
                className={`relative w-full px-3 py-3 text-[11px] font-medium transition-colors text-center leading-tight ${
                  active === tab.id
                    ? "text-[#1a4fa0] bg-[rgba(26,79,160,0.04)]"
                    : "text-[rgba(13,38,87,0.5)]"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline-mobile"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a4fa0]"
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
                    ? "text-[#1a4fa0]"
                    : "text-[rgba(13,38,87,0.5)] hover:text-[#1a4fa0]"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-underline"
                    transition={{ type: "spring", duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a4fa0] rounded-full"
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
    "Ямар ч үйл ажиллагаатай байгууллагад тохирч ажиллана.",
    "Өөрийн байгууллагад гардаг онцлог ажил гүйлгээ, бүртгэлийг нэмж хийлгэх боломжтой.",
    "НББОУС, Татварын хуулиудын дагуу бүртгэлээ хөтөлж тайлангуудаа авна.",
    "Тайлангууд дээр Drill Down тайлан буюу тайлангийн бүх үзүүлэлтийг хаанаас ямар үндэслэлээр гарч ирснийг задалж үзэх боломжийг оруулж өгсөн.",
    "Барааны өртгийг компанийн хэмжээнд нэг болон агуулах бүрээр тооцно.",
    "Бараа болон үндсэн хөрөнгийн тооллогыг гараар хийхээс гадна баар кодоор хийнэ.",
    "Удирдлагад санхүүгийн үйл ажиллагааг удирдан хянах боломжийг олгосон Санхүүгийн шинжилгээний системтэй уялдан ажиллаж, оновчтой шийдвэр гаргахад тусалдаг.",
    "Нярав, нягтлан бодогч нар ажил гүйлгээгээ өөрсдийн ажил үүргийн хуваарийн дагуу тус тусдаа бүртгэж, ажил гүйлгээгээ дор бүр нь хянан алдаагаа олох боломжтой.",
    "Одоогийн болон өнгөрсөн үеийн мэдээнүүдийг үндэслэж ирээдүйн бизнесийн ашиг орлогоо нэмэгдүүлэх, зардлаа хэмнэх төсөв төлөвлөгөө зохиох боломжтой.",
  ];

  const advantages = [
    "Өдөр тутмын санхүүгийн үйл ажиллагааг автоматжуулж цаг хугацаа хэмнэнэ.",
    "Удирдлагын хяналтын системтэй уялдан ажиллаж, оновчтой шийдвэр гаргахад тусалдаг.",
    "Ажил үүргийн хуваарийн дагуу ажлаа хийхэд хялбар, бие биенийхээ хийсэн гүйлгээнд нөлөөлөхгүй өөр хүнээс хамаарч хүлээлт үүсэхгүй.",
    "Шүүлтийн уян хатан нөхцлүүдийг ашиглан хүссэн баримт, гүйлгээгээ хянана.",
    "Өртгийн төв тус бүрээр орлого зарлагыг нарийн бүртгэснээр ашиг алдагдлаа тооцоолно.",
  ];

  return (
    <div className="max-w-content mx-auto px-6 md:px-12 py-14 space-y-14">
      <div>
        <h2 className="font-syne font-bold text-[clamp(20px,3vw,28px)] text-[#1a4fa0] mb-5">
          Системийн танилцуулга
        </h2>
        <p className="text-[16px] text-[rgba(13,38,87,0.7)] leading-[1.85] font-medium max-w-3xl">
          Интерактив Би Ай ХХК-ийн бүтээгдэхүүний тав дахь хувилбар болох санхүү
          НББ-ийн Даймонд систем нь мөнгөн хөрөнгө, бараа материал, хангамжийн
          материал, үндсэн хөрөнгө, авлага өглөг, төсөв, төсөл, зардал болон
          байгууллагын санхүүтэй холбоотой бүх бүртгэлээ хөтлөх, тайлан
          мэдээллүүдээ цаг алдалгүй, үнэн зөвөөр авахад зориулагдсан систем юм.
          Уг систем нь Даймонд ERP цогц системийн бусад бүх системтэйгээ
          холбогдон ажилладгаараа онцлогтой юм.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "9", label: "Үндсэн модуль" },
          { num: "41+", label: "Тайлангийн төрөл" },
          { num: "21", label: "Холбогдох систем" },
          { num: "1996", label: "Үүсгэн байгуулсан" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-[#f4f8ff] border border-[rgba(45,125,210,0.12)] rounded-xl px-5 py-5 text-center"
          >
            <div className="font-syne font-black text-[32px] tracking-[-0.04em] text-[#2d7dd2] leading-none">
              {s.num}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-5">
          Санхүүгийн Даймонд системийн боломжууд
        </h3>
        <ul className="space-y-3">
          {capabilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[14px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.75]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d7dd2] mt-1.75 shrink-0" />
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
              className="flex items-start gap-4 bg-[#f8faff] border border-[rgba(26,79,160,0.08)] rounded-xl p-4"
            >
              <span className="font-mono text-[11px] text-[#2d7dd2] shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[13.5px] text-[rgba(13,38,87,0.65)] leading-[1.7] font-medium">
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-5">
          Холбогдон ажиллах системүүд
        </h3>
        <div className="flex flex-wrap gap-2">
          {connectedSystems.map((s) => (
            <span
              key={s}
              className="font-mono text-[14px] px-4 py-2 rounded-full border border-[rgba(26,79,160,0.12)] bg-[rgba(26,79,160,0.03)] text-[rgba(13,38,87,0.55)] hover:border-[rgba(26,79,160,0.25)] hover:text-[#0d2657] transition-all cursor-default"
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
        <em className="font-normal italic text-[#2d7dd2]">модулиуд</em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Diamond 5.0 — нийт {modules.length} үндсэн модуль
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <div
            key={m.name}
            className="bg-white border border-[rgba(26,79,160,0.3)] rounded-2xl p-6 hover:border-[rgba(26,79,160,0.25)] hover:bg-[#f6f9ff] hover:shadow-sm transition-all duration-200 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-syne font-bold text-[16px] tracking-[-0.02em] text-[#0d2657]">
                {m.name}
              </h3>
              <span className="font-mono text-[12px] text-[#2d7dd2] bg-[rgba(45,125,210,0.08)] px-2 py-0.5 rounded-full shrink-0">
                {m.reports} тайлан
              </span>
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
                  <span className="w-1 h-1 rounded-full bg-[#2d7dd2] mt-1.5 shrink-0" />
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
        Diamond 5.0{" "}
        <em className="font-normal italic text-[#2d7dd2]">үнийн санал</em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Лиценз ашиглалтын төлбөр 15% байна. Системд нэмэлтээр авах бааз бүр
        <em className=" text-[#2d7dd2]"> 1,100,000₮</em> байна.
      </p>
      <div className="space-y-3 mb-10">
        {pricing.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[rgba(26,79,160,0.3)] rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] text-[rgba(26,79,160,0.4)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-syne font-semibold text-[14px] text-[#0d2657]">
                  {item.name}
                </span>
              </div>
              <span className="font-syne font-bold text-[16px] text-[#2d7dd2] shrink-0">
                {item.price}
              </span>
            </div>
            {item.children.length > 0 && (
              <div className="border-t border-[rgba(26,79,160,0.08)] divide-y divide-[rgba(26,79,160,0.06)]">
                {item.children.map((c, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between px-6 py-3 pl-12"
                  >
                    <span className="text-[16px] text-[rgba(13,38,87,0.8)] font-medium">
                      → {c.name}
                    </span>
                    <span className="font-mono text-[16px] text-[rgba(13,38,87,0.9)] shrink-0">
                      {c.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReqTable({ title, rows }) {
  return (
    <div className="mb-10">
      <h3 className="font-syne font-bold text-[16px] italic text-[#0d2657] mb-4 text-center">
        {title}
      </h3>
      <div className="rounded-2xl border border-[rgba(26,79,160,0.3)] overflow-hidden">
        <table className="w-full text-[15px]">
          <thead>
            <tr className="bg-[rgba(26,79,160,0.05)] border-b border-[rgba(26,79,160,0.3)]">
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
          <tbody className="divide-y divide-[rgba(26,79,160,0.06)]">
            {rows.map((row, i) => (
              <tr
                key={i}
                className="bg-white hover:bg-[#f8faff] transition-colors"
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
        <em className="font-normal italic text-[#2d7dd2]">
          техникийн шаардлага
        </em>
      </h2>
      <p className="text-[15px] text-[rgba(13,38,87,0.45)] font-medium mb-10">
        Дараах үзүүлэлтийн дагуу техник, хэрэгслээ бэлдсэн байхыг зөвлөж байна.
      </p>

      <ReqTable title="Програм хурдан ажиллах" rows={fastRows} />
      <ReqTable title="Програм боломжит хурдтай ажиллах" rows={okRows} />

      <div className="bg-[#f8faff] border border-[rgba(26,79,160,0.3)] rounded-2xl p-6 space-y-4">
        <h3 className="font-syne font-bold text-[16px] text-[#0d2657] mb-3">
          Нэмэлт шаардлага
        </h3>
        {[
          "Процессоруудад үйлдлийн системүүдийг бүрэн суулгасан байна.",
          "Процессоруудад вирусын эсрэг программыг заавал суулгасан байна.",
          "Сүлжээний горимд ажиллахаар програм хангамж авч байгаа бол бүх компьютерийг онлайн сүлжээнд холбосон байна.",
          "Програм ашиглах хэрэглэгчийн компьютер дээр Windows 7, 8, 10 (version) суусан байх ба сервер компьютер дээр 64bit-н үйлдлийн систем суулгасан байх шаардлагатай.",
          "Дээрх үзүүлэлтүүд нь 10-с доош хэрэглэгч болон системийн баазууд 2оос хэтрэхгүй нөхцөлд гаргасан үзүүлэлт юм. Хэрэглэгч 10-с дээш болон олон баазтай тохиолдолд шаардлагын манайхаас дахин гаргаж өгнө.",
        ].map((note, i) => (
          <div
            key={i}
            className="flex items-start gap-3 text-[13.5px] text-[rgba(13,38,87,0.65)] font-medium leading-[1.7]"
          >
            <CheckOutlined className="text-[#2d7dd2] mt-0.5 shrink-0" />
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DiamondPage() {
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
     <ScrollReveal />
      <Navbar />
      <main className="min-h-screen bg-white">
        <section
          className="pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #0d2657 0%, #1a4fa0 50%, #2d7dd2 100%)",
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
                Diamond 5.0
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/80 border border-white/20 flex items-center justify-center">
                  <Image
                    src="/products/dimond55_cropped.png"
                    alt="Diamond"
                    width={44}
                    height={44}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div>
                  <span className="font-mono text-[12px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
                    ERP систем
                  </span>
                  <h1 className="font-syne font-black text-[clamp(32px,5vw,56px)] leading-none tracking-[-0.04em] text-white">
                    Diamond 5.0
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
