import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Graph from "@/app/components/Graph";
import { EyeOutlined } from "@ant-design/icons";

const products = [
  {
    slug: "diamond",
    name: "Diamond 5.0",
    tag: "Том корпораци",
    image: "/products/dimond55_cropped.png",
    color: "#2d7dd2",
    surface: "rgba(45,125,210,0.06)",
    border: "rgba(45,125,210,0.15)",
    desc: "Санхүү, НББ, үйлдвэрлэл — бүгдийг нэг дороос. Том корпорациудад зориулсан дэлгэрэнгүй ERP систем.",
    modules: [
      "Ерөнхий журнал",
      "Мөнгөн хөрөнгө",
      "Өглөг авлага",
      "Бараа материал",
      "Үндсэн хөрөнгө",
      "Зардал",
      "Төсөв",
    ],
  },
  {
    slug: "impact",
    name: "Impact",
    tag: "Жижиг бизнес",
    image: "/products/impact_cropped.png",
    color: "#1a4fa0",
    surface: "rgba(26,79,160,0.06)",
    border: "rgba(26,79,160,0.15)",
    desc: "Жижиг аж ахуйн нэгжүүдэд зориулсан хэрэглэхэд хялбар, үнэ хямд, цоо шинэ санхүү НББ-ийн систем.",
    modules: [
      "Ерөнхий журнал",
      "Мөнгөн хөрөнгө",
      "Өглөг авлага",
      "Үндсэн хөрөнгө",
      "Бараа материал",
      "Удирдлагын хяналт",
    ],
  },
  {
    slug: "emerald",
    name: "Emerald",
    tag: "Төсөвт байгууллага",
    image: "/products/emerald_cropped.png",
    color: "#0d2657",
    surface: "rgba(13,38,87,0.04)",
    border: "rgba(13,38,87,0.12)",
    desc: "Төсөвт байгууллагын санхүү бүртгэлийн бүх гүйлгээ, мөнгөн урсгалын хяналт, жилийн төсвийн удирдлага.",
    modules: [
      "Ерөнхий журнал",
      "Мөнгөн хөрөнгө",
      "Өглөг авлага",
      "Үндсэн хөрөнгө",
      "Хангамж",
      "Төсөв",
    ],
  },
  {
    slug: "spinel",
    name: "Spinel",
    tag: "Банк · ББСБ · ХЗХ",
    image: "/products/spinel_cropped.png",
    color: "#5bb8f5",
    surface: "rgba(91,184,245,0.06)",
    border: "rgba(91,184,245,0.2)",
    desc: "Банк, ББСБ, хадгаламж зээлийн хоршооны үйл ажиллагаанд зориулсан зээл, хадгаламж, хүүний бүртгэлийн систем.",
    modules: [
      "Зээл",
      "Хадгаламж",
      "Харилцах",
      "Ерөнхий журнал",
      "Авизо",
      "Тайлангууд",
    ],
  },
];

const otherSystems = [
  {
    slug: "time",
    name: "Цаг бүртгэлийн систем",
    icon: "🕐",
    desc: "Аж ахуйн нэгж, бизнесийн байгууллагын цагийн бүртгэлийг хялбаршуулах, хүссэн үедээ хяналт тавих боломжоор хангах, хэрэгцээт тайлан судалгааг богино хугацаанд гаргаж авах систем.",
  },
  {
    slug: "store",
    name: "Дэлгүүрийн удирдлагын систем",
    icon: "🏪",
    desc: "Дэлгүүр, супермаркет, бусад бөөний болон жижиглэн худалдааны байгууллагын барааны дэлгэрэнгүй бүртгэл, үнийн мэдээлэл, борлуулалтын үйл ажиллагааны бүртгэл тооцоог хөтлөх систем.",
  },
  {
    slug: "restaurant",
    name: "Рестораны удирдлага",
    icon: "🍽️",
    desc: "Рестораны үйлчилгээ эрхэлдэг байгууллагуудын үйлчлүүлэгчийн захиалгаас эхлээд хоолны орц норм, зарагдах үнэ, рестораны заалны зохион байгуулалт, зөөгч, хоол, ширээтэй холбоотой бүртгэл.",
  },
  {
    slug: "payroll",
    name: "Цалингийн систем",
    icon: "💰",
    desc: "Тогтмолоор, цагаар, ажлын нарядаар гэх мэт бүх төрлийн цалингийн тооцооллыг хийх бөгөөд өдрөөр, 7 хоногоор, 14 хоногоор гэхчилэн сард хэдэн ч удаа цалингийн бодолтыг хийх систем.",
  },
  {
    slug: "loyalty",
    name: "Хөнгөлөлтийн картны систем",
    icon: "💳",
    desc: "Хэрэглэгчдэд хөнгөлөлтийн карт олгож, худалдан авалтын оноо хуримтлуулах, урамшуулал ашиглах боломжийг олгодог харилцагчийн үнэнч байдлыг дэмжих систем.",
  },
];

export default function page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white ">
        <section
          className=" pt-36 pb-20 px-6 md:px-12 relative overflow-hidden "
          style={{
            background:
              "radial-gradient(ellipse at bottom, #1e3a8a 0%, #020617 100%)",
          }}
        >
          <div className="max-w-content mx-auto">
            <h1 className="font-syne font-black text-[clamp(38px,6vw,72px)] leading-none tracking-[-0.04em] text-[#d2dbeb] max-w-3xl">
              Таны бизнест
              <br />
              <em className="font-normal italic text-[#2d7dd2]">
                тохирсон
              </em>{" "}
              цогц шийдэл
            </h1>
            <div className="flex flex-wrap gap-3 mt-12">
              {products.map((p) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border text-[15px] font-medium transition-all duration-200 hover:bg-[#2d7dd2] hover:shadow-md"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color:"#fcfcfc" }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6"
                  />
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 max-w-content mx-auto space-y-6">
          <div>
            <h2 className="font-syne font-bold text-[clamp(32px,4.5vw,54px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657]">
              <em style={{ fontStyle: "italic", color: "#2d7dd2" }}>ҮНДСЭН</em>
              <br />
              БҮТЭЭГДЭХҮҮН
            </h2>
            <p className="mt-5 text-[16px] text-[rgba(13,38,87,0.55)] leading-[1.7] font-medium">
              ERP нь Enterprise Resource Planning гэсэн үгийн товчлол бөгөөд
              байгууллагын нөөцийн удирдлага гэсэн утгыг илэрхийдэг.
              Байгууллагын бүх хэсэгтэй холбоотой үйл ажиллагааг нэг дороос
              удирдах, холбох, үйл ажиллагааг хариуцдаг бөгөөд салбар, нэгж,
              хэлтэс бүрийг зэрэгцүүлэх, хөрөнгө санхүүгийн удирдлагыг дэмжих,
              ажилтнуудын үйл ажиллагааг холбох, мэдээлэл авах, өгөх боломжийг
              олгодог нэг төрлийн хэрэгсэл юм. Байгууллага доторх алба хэлтэс
              болгоны ажил өөр өөрийн онцлогтой боловч НЭГ БАЙГУУЛЛАГА доторх
              мэдээллийн урсгал нэг байх ёстой.
            </p>
          </div>{" "}
          <Graph />
          <section className="px-6 md:px-12 py-20 max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((p, i) => (
                <div
                  id={p.slug}
                  key={p.slug}
                  className="rounded-2xl border overflow-hidden transition-shadow duration-300 hover:shadow-md flex flex-col"
                  style={{ borderColor: p.border, background: p.surface }}
                >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border bg-white"
                          style={{ borderColor: p.border }}
                        >
                          <Image
                            src={p.image}
                            alt={p.name}
                            width={32}
                            height={32}
                            className="object-contain w-7 h-7"
                          />
                        </div>
                        <div>
                          <h2 className="font-syne font-bold text-[20px] tracking-[-0.03em] text-[#0d2657] leading-tight">
                            {p.name}
                          </h2>
                          <span
                            className="font-mono text-[10px] tracking-[1px] uppercase"
                            style={{ color: p.color }}
                          >
                            {p.tag}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-[rgba(13,38,87,0.2)]">
                        {String(i + 1).padStart(2, "0")} / 04
                      </span>
                    </div>

                    <p className="text-[14px] text-[rgba(13,38,87,0.6)] leading-[1.7] font-light mb-5 flex-1">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.modules.map((m) => (
                        <span
                          key={m}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-lg border bg-white text-[rgba(13,38,87,0.5)]"
                          style={{ borderColor: p.border }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex flex-col gap-2 pt-5 border-t"
                      style={{ borderColor: p.border }}
                    >
                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center justify-center text-[13px] font-medium px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                        style={{ background: p.color }}
                      >
                        Дэлгэрэнгүй үзэх →
                      </Link>
                      <div className="flex gap-2">
                        <Link
                          href={`/products/${p.slug}#pricing`}
                          className="flex-1 inline-flex items-center justify-center text-[13px] font-medium px-4 py-2 rounded-lg border bg-white hover:shadow-sm transition-all"
                          style={{ borderColor: p.border, color: p.color }}
                        >
                          Үнийн санал
                        </Link>

                        <Link
                          href="/contact"
                          className="flex-1 inline-flex items-center justify-center text-[13px] font-light px-4 py-2 rounded-lg text-[rgba(13,38,87,0.9)] hover:text-[#0d268f] transition-colors border-2 border-[rgba(114,114,144,0.1)] hover:border-[rgba(10,10,250,0.2)]
                          "
                        >
                          Зөвлөгөө авах
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="px-6 md:px-12 pb-24 max-w-content mx-auto">
          <div className="border-t border-[rgba(26,79,160,0.1)] pt-16 mb-12">
            <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
              Бусад системүүд
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-syne font-bold text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657]">
                Нэмэлт{" "}
                <em className="font-normal italic text-[#2d7dd2]">шийдлүүд</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherSystems.map((s) => (
              <Link
                key={s.slug}
                href={`/products/${s.slug}`}
                className="group flex flex-col bg-white border border-[rgba(26,79,160,0.1)] rounded-2xl p-6 hover:border-[rgba(26,79,160,0.25)] hover:bg-[#f6f9ff] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(26,79,160,0.06)] border border-[rgba(26,79,160,0.1)] flex items-center justify-center text-xl">
                    {s.icon}
                  </div>
                  <span className="text-[rgba(13,38,87,0.2)] text-lg group-hover:text-[#1a4fa0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                    <EyeOutlined />
                  </span>
                </div>
                <h3 className="font-syne font-bold text-[16px] tracking-[-0.02em] text-[#0d2657] mb-2 leading-tight">
                  {s.name}
                </h3>
                <p className="text-[13px] text-[rgba(13,38,87,0.5)] leading-[1.65] font-medium flex-1">
                  {s.desc}
                </p>
                <div className="mt-5 pt-4 border-t border-[rgba(26,79,160,0.08)]">
                  <span className="font-mono text-[11px] text-[#1a4fa0] tracking-[0.5px]">
                    Дэлгэрэнгүй →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="mx-6 md:mx-12 mb-24 rounded-2xl px-10 py-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0d2657 0%, #1a4fa0 60%, #2d7dd2 100%)",
          }}
        >
          <h2 className="font-syne font-bold text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-white mb-4">
            Аль систем тохирохыг мэдэхгүй байна уу?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] max-w-md mx-auto font-medium leading-[1.75] mb-8">
            Манай мэргэжилтэнтэй холбогдож таны бизнест тохирох шийдлийг олж
            авна уу.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0d2657] px-7 py-3.5 rounded-lg text-[14.5px] font-semibold hover:opacity-90 transition-opacity"
          >
            Зөвлөгөө авах →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
