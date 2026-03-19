import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTA from "../components/CTA";
import {
  ClusterOutlined,
  CloudServerOutlined,
  LineChartOutlined,
  CodeOutlined,
  LaptopOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";

const services = [
  {
    num: "01",
    icon: <CodeOutlined />,
    title: "Програм хангамж нийлүүлэх",
    desc: "Санхүү НББ, ERP болон бусад бизнесийн удирдлагын систем нийлүүлж, байгууллагын үйл ажиллагааг бүрэн автоматжуулна.",
    features: [
      "Санхүү НББ-ийн систем",
      "ERP цогц систем",
      "Нэмэлт модуль системүүд",
      "Лиценз болон дэмжлэгийн үйлчилгээ",
    ],
    color: "#2d7dd2",
    surface: "rgba(45,125,210,0.06)",
    border: "rgba(45,125,210,0.15)",
  },
  {
    num: "02",
    icon: <LineChartOutlined />,
    title: "Нэмэлт систем хөгжүүлэх",
    desc: "Байгууллагын онцлогт тохируулсан нэмэлт систем, модуль хөгжүүлэх үйлчилгээ. Таны бизнесийн хэрэгцээнд яг тохирсон шийдэл бүтээнэ.",
    features: [
      "Тусгай модуль хөгжүүлэлт",
      "Одоо байгаа системтэй интеграц",
      "API холболт, өгөгдөл солилцоо",
      "Тайлан, маягт тохируулга",
    ],
    color: "#1a4fa0",
    surface: "rgba(26,79,160,0.06)",
    border: "rgba(26,79,160,0.15)",
  },
  {
    num: "03",
    icon: <FundProjectionScreenOutlined />,
    title: "Сургалт, зөвлөгөө",
    desc: "Програм ашиглалтын дэлгэрэнгүй сургалт, заавар болон мэргэжилтний зөвлөгөөгөөр байгууллагынхаа ажилтнуудыг чадваржуулна.",
    features: [
      "Ашиглалтын сургалт",
      "Нягтлан, санхүүчдэд зориулсан хичээл",
      "Онлайн болон биечлэн сургалт",
    ],
    color: "#0d2657",
    surface: "rgba(13,38,87,0.04)",
    border: "rgba(13,38,87,0.12)",
  },
  {
    num: "04",
    icon: <LaptopOutlined />,
    title: "Техник хангамжийн үйлчилгээ",
    desc: "Сервер, компьютер болон бусад техник хангамжийн суурилуулалт, засвар үйлчилгээ, техникийн дэмжлэг үзүүлнэ.",
    features: [
      "Серверийн суурилуулалт, тохиргоо",
      "Сүлжээний тохиргоо",
      "Техникийн онлайн дэмжлэг",
    ],
    color: "#2d7dd2",
    surface: "rgba(45,125,210,0.06)",
    border: "rgba(45,125,210,0.15)",
  },
  {
    num: "05",
    icon: <CloudServerOutlined />,
    title: "Cloud ERP үйлчилгээ",
    desc: "Үүлэн технологид суурилсан ERP системийг байгууллагадаа нэвтрүүлж, хаанаас ч хандах боломжтой орчин үеийн шийдлийг ашиглана.",
    features: [
      "Онлайн серверт байршуулалт",
      "Хаанаас ч хандах боломж",
      "Автомат нөөцлөлт",
      "Аюулгүй байдлын баталгаа",
    ],
    color: "#1a4fa0",
    surface: "rgba(26,79,160,0.06)",
    border: "rgba(26,79,160,0.15)",
  },
  {
    num: "06",
    icon: <ClusterOutlined />,
    title: "Техникийн дэмжлэг",
    desc: "Системийн алдаа, асуудал гарсан тохиолдолд цаг алдалгүй шийдвэрлэх мэргэжилтний техникийн дэмжлэгийг байнга авах боломжтой.",
    features: [
      "Ажлын цагийн дэмжлэг",
      "Алсаас хандан засвар хийх",
      "Системийн шинэчлэл, patch",
      "Гарсан асуудлын шуурхай шийдэл",
    ],
    color: "#0d2657",
    surface: "rgba(13,38,87,0.04)",
    border: "rgba(13,38,87,0.12)",
  },
];

const process = [
  {
    step: "01",
    title: "Хэрэгцээ тодорхойлох",
    desc: "Байгууллагынхаа үйл ажиллагааны онцлог, хэрэгцээ шаардлагыг нарийн судалж тодорхойлно.",
  },
  {
    step: "02",
    title: "Шийдэл санал болгох",
    desc: "Судалгааны үр дүнд үндэслэн таны бизнест яг тохирсон шийдлийг санал болгоно.",
  },
  {
    step: "03",
    title: "Гэрээ байгуулах",
    desc: "Хийгдэх ажлын хүрээ, хугацаа, үнийг тодорхойлсон гэрээ байгуулна.",
  },
  {
    step: "04",
    title: "Суурилуулалт",
    desc: "Системийг таны байгууллагын орчинд суурилуулж тохируулана.",
  },
  {
    step: "05",
    title: "Сургалт",
    desc: "Ажилтнуудад системийн ашиглалтын дэлгэрэнгүй сургалт явуулна.",
  },
  {
    step: "06",
    title: "Дэмжлэг",
    desc: "Ашиглалтад оруулсны дараа байнгын техникийн дэмжлэг үзүүлнэ.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section
          className="pt-36 pb-20 px-6 md:px-12 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at bottom, #2563eb 0%, #0a0f1f 100%)",
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
            {/* <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
              Үйлчилгээ
            </p> */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="font-syne font-black text-[clamp(38px,6vw,72px)] leading-none tracking-[-0.04em] text-[#d2dbeb] max-w-2xl">
                Таны бизнест{" "}
                <em className="font-normal italic text-[#2d7dd2]">хэрэгтэй </em>
                үйлчилгээ
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { num: "28+", label: "жилийн туршлага" },
                { num: "200+", label: "харилцагч байгууллага" },
                { num: "75+", label: "мэргэжилтэн" },
                { num: "?", label: "үйлчилгээний төрөл" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-syne font-black text-[28px] tracking-[-0.04em] text-[#d2dbeb]">
                    {s.num}
                  </span>
                  <span className="font-mono text-[16px] uppercase tracking-[1px] text-[rgba(255,255,255,1)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 max-w-content mx-auto">
          <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
            Үйлчилгээнүүд
          </p>
          <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-12">
            Бид юу хийдэг{" "}
            <em className="font-normal italic text-[#2d7dd2]">вэ?</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border p-6 hover:shadow-md transition-all duration-200 flex flex-col group"
                style={{ borderColor: s.border, background: s.surface }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white border shrink-0"
                    style={{ borderColor: s.border }}
                  >
                    {s.icon}
                  </div>
                  <span className="font-mono text-[11px] text-[rgba(13,38,87,0.25)]">
                    {s.num}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-[17px] tracking-[-0.02em] text-[#0d2657] mb-3">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[rgba(13,38,87,0.6)] leading-[1.7] font-medium mb-5 flex-1">
                  {s.desc}
                </p>

                <ul
                  className="space-y-2 pt-4 border-t"
                  style={{ borderColor: s.border }}
                >
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[12px] text-[rgba(13,38,87,0.55)] font-medium"
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                        style={{ background: s.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f8faff] py-20 px-6 md:px-12">
          <div className="max-w-content mx-auto">
            <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
              Ажлын процесс
            </p>
            <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-12">
              Хэрхэн{" "}
              <em className="font-normal italic text-[#2d7dd2]">
                ажилладаг вэ?
              </em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((p, i) => (
                <div
                  key={p.step}
                  className="bg-white border border-[rgba(26,79,160,0.1)] rounded-2xl p-6 hover:border-[rgba(26,79,160,0.25)] hover:shadow-sm transition-all duration-200 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 font-syne font-black text-[56px] leading-none text-[rgba(26,79,160,0.04)] tracking-[-0.04em] select-none">
                    {p.step}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[rgba(26,79,160,0.06)] border border-[rgba(26,79,160,0.15)] flex items-center justify-center mb-4">
                    <span className="font-mono text-[16px] text-[#1a4fa0]">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="font-syne font-bold text-[15px] text-[#0d2657] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[rgba(13,38,87,0.6)] leading-[1.65] font-medium">
                    {p.desc}
                  </p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[rgba(26,79,160,0.2)] text-lg z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 max-w-content mx-auto">
          <p className="font-mono text-[16px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-4">
            Яагаад бидэн рүү хандах вэ?
          </p>
          <h2 className="font-syne font-bold text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.03em] text-[#0d2657] mb-12">
            Бидний{" "}
            <em className="font-normal italic text-[#2d7dd2]">давуу тал</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "28 жилийн туршлага",
                desc: "1996 оноос хойш Монголын зах зээлд тасралтгүй ажиллаж, орон нутгийн бизнесийн онцлогийг бүрэн мэдэрсэн.",
              },
              /* {
                title: "reason",
                desc: "Систем бүр Монгол хэл дээр бүрэн ажилладаг бөгөөд дотоодын татвар, хуулийн шаардлагад нийцсэн.",
              }, */
              {
                title: "Байнгын дэмжлэг",
                desc: "Ашиглалтад оруулсны дараа ч тасралтгүй техникийн дэмжлэг, зөвлөгөөг үзүүлж байна.",
              },
              {
                title: "Уян хатан тохируулга",
                desc: "Байгууллагын онцлогт тохируулан системийг өөрчилж, нэмэлт хөгжүүлэлт хийх боломжтой.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-[#f4f8ff] border border-[rgba(26,79,160,0.08)] rounded-xl p-5"
              >
                <span className="font-mono text-[11px] text-[#2d7dd2] shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-syne font-bold text-[15px] text-[#0d2657] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[rgba(13,38,87,0.6)] leading-[1.65] font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
