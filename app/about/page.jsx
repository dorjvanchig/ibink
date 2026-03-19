import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import ScrollReveal from "@/app/components/ScrollReveal";

import {
  LineChartOutlined,
  BranchesOutlined,
  LaptopOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const stats = [
  { num: "1996", label: "Үүсгэн байгуулагдсан" },
  { num: "75+", label: "Ажилтан" },
  { num: "200+", label: "Харилцагч байгууллага" },
  { num: "7", label: "Бүтээгдэхүүний хувилбар" },
];

const activities = [
  "Байгууллагын онцлогт тохирсон нэмэлт систем хөгжүүлэх",
  "Програм ашиглалтын зөвлөгөө, заавар өгөх",
  "Техник хангамжийн үйлчилгээ үзүүлэх",
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="min-h-screen bg-white">
        <section
          className="pt-36 pb-20 px-6 md:px-12 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at bottom, #1d4ed8 0%, #020617 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "",
              backgroundSize: "128px 128px",
            }}
          />
          <div className="max-w-content mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="font-syne font-black text-[clamp(38px,6vw,72px)] leading-none tracking-[-0.04em] text-[#d2dbeb] max-w-2xl">
                Интерактив{" "}
                <em className="font-normal italic text-[#2d7dd9]">Би Ай</em>
                <br />
                ХХК
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/70 backdrop-blur-sm border border-[rgba(26,79,160,0.1)] rounded-2xl px-6 py-5 text-center"
                >
                  <div className="font-syne font-black text-[36px] tracking-[-0.04em] text-[#2d7dd2] leading-none">
                    {s.num}
                  </div>
                  <div className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(13,38,87,0.45)] mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
                Танилцуулга
              </p>
              <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-6">
                Бидний бүтээсэн{" "}
                <em className="font-normal italic text-[#2d7dd2]">түүх</em>
              </h2>
              <div className="space-y-4 text-[15px] text-[rgba(13,38,87,0.65)] leading-[1.8] font-medium">
                <p>
                  Манай байгууллага анх{" "}
                  <strong className="text-[#0d2657] font-semibold">
                    1996 онд
                  </strong>{" "}
                  Интерактив ХХК нэртэй үүсгэн байгуулагдсан бөгөөд{" "}
                  <strong className="text-[#0d2657] font-semibold">
                    2008 оноос
                  </strong>{" "}
                  одоогийн Интерактив Би Ай ХХК нэрээр үйл ажиллагаагаа явуулж
                  байна.
                </p>
                <p>
                  Мэдээлэл харилцаа холбоо, технологийн салбарын томоохон
                  төлөөлөгч ба Санхүү НББ-ийн систем, Байгууллагын нөөц
                  удирдлагын ERP системүүдийг хөгжүүлэн олон төрлийн бизнесийн
                  байгууллагуудад автоматжуулалтын цогц шийдэл, програм
                  нийлүүлэх чиглэлээр ажиллаж байна.
                </p>
                <p>
                  Одоо манай байгууллага бүтээгдэхүүний{" "}
                  <strong className="text-[#2d7dd2] font-semibold">
                    7 дахь хувилбар
                  </strong>{" "}
                  болох ОЧ 7.7 ERP системийг бизнесийн байгууллагад нийлүүлэхээр{" "}
                  <strong className="text-[#0d2657] font-semibold">
                    75 ажилтантайгаар
                  </strong>{" "}
                  үйл ажиллагаагаа явуулж байна.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
                Үйл ажиллагаа
              </p>
              {activities.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#f4f8ff] border border-[rgba(26,79,160,0.1)] rounded-xl p-4"
                >
                  <span className="font-mono text-[11px] text-[#2d7dd2] shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] text-[rgba(13,38,87,0.7)] leading-[1.65] font-medium">
                    {a}
                  </p>
                </div>
              ))}

              <div
                className="rounded-2xl p-6 mt-6"
                style={{
                  background:
                    "linear-gradient(135deg, #0d2657 0%, #1a4fa0 60%, #2d7dd2 100%)",
                }}
              >
                <p className="font-mono text-[12px] tracking-[2px] uppercase text-[rgba(255,255,255,0.5)] mb-2">
                  Одоогийн хувилбар
                </p>
                <h3 className="font-syne font-black text-[28px] text-white leading-none tracking-[-0.03em] mb-1">
                  ОЧ 7.7 ERP
                </h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.6)] font-medium mb-4">
                  Санхүүгийн удирдлагын хамгийн шинэ хувилбар
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg text-[13px] font-medium transition-colors"
                >
                  Бүтээгдэхүүн үзэх →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8faff] py-20 px-6 md:px-12">
          <div className="max-w-content mx-auto">
            <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
              Бүтээгдэхүүн
            </p>
            <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-3">
              Бүтээгдэхүүний он цагийн{" "}
              <em className="font-normal italic text-[#2d7dd2]">хэлхээс</em>
            </h2>
            <p className="text-[14px] text-[rgba(13,38,87,0.5)] font-medium mb-10">
              1996 оноос хойших хөгжлийн замнал
            </p>

            <div className="rounded-2xl border border-[rgba(26,79,160,0.1)] overflow-hidden bg-white p-4 md:p-8">
              <Image
                src="/time.png"
                alt="Бүтээгдэхүүний он цагийн хэлхээс"
                width={1400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 max-w-content mx-auto">
          <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
            Ажиллах арга барил
          </p>
          <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-12">
            Яагаад биднийг{" "}
            <em className="font-normal italic text-[#2d7dd2]">сонгох вэ?</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Туршлага",
                desc: "1996 оноос хойш 28 жилийн туршлагатай, Монголын зах зээлийн онцлогийг сайн мэддэг.",
              },
              {
                num: "02",
                title: "Уян хатан байдал",
                desc: "Өмнө нь хөгжүүлсэн процессууд, дүрмүүд, тайлангууд болон бусад загваруудыг дахин ашиглах замаар шинэ процессуудыг хялбархан үүсгэж, ашиглах боломжтой болсон.",
              },
              {
                num: "03",
                title: "Дэмжлэг",
                desc: "Програм ашиглалтын зөвлөгөө, заавар болон техник хангамжийн дэмжлэгийг байнга үзүүлдэг.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white border border-[rgba(26,79,160,0.1)] rounded-2xl p-6 hover:border-[rgba(26,79,160,0.25)] hover:bg-[#f6f9ff] hover:shadow-sm transition-all duration-200"
              >
                <span className="font-mono text-[11px] text-[#2d7dd2] block mb-4">
                  {item.num}
                </span>
                <h3 className="font-syne font-bold text-[18px] text-[#0d2657] mb-3">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[rgba(13,38,87,0.6)] leading-[1.7] font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f8faff] py-20 px-6 md:px-12">
          <div className="max-w-content mx-auto">
            <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
              Стратеги
            </p>
            <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-12">
              Бизнесийн{" "}
              <em className="font-normal italic text-[#2d7dd2]">үзэл санаа</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <LaptopOutlined />,
                  title: "Уян хатан байдал",
                  desc: "Өмнө нь хөгжүүлсэн процессууд, дүрмүүд, тайлангууд болон бусад загваруудыг дахин ашиглах замаар шинэ процессуудыг хялбархан үүсгэж, ашиглах боломжтой болсон.",
                },
                {
                  icon: <UsergroupAddOutlined />,
                  title: "Зорилго",
                  desc: "Монголын бизнес байгууллагуудад дэлхийн жишигт нийцсэн автоматжуулалтын цогц шийдэл хүргэх.",
                },
                {
                  icon: <BranchesOutlined />,
                  title: "Интеграц",
                  desc: "Бүх системүүд нэг нэгтэйгээ холбогдон ажилладаг бөгөөд мэдээлэл нэг дороос удирдагдана.",
                },
                {
                  icon: <LineChartOutlined />,
                  title: "Хөгжил",
                  desc: "1996 оноос хойш тасралтгүй хөгжиж, 7 дахь хувилбарт хүрсэн бөгөөд цаашид ч үргэлжлэх болно.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[rgba(26,79,160,0.1)] rounded-2xl p-6 flex items-start gap-5 hover:border-[rgba(26,79,160,0.25)] transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(26,79,160,0.06)] border border-[rgba(26,79,160,0.1)] flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-[16px] text-[#0d2657] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[rgba(13,38,87,0.6)] leading-[1.7] font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
