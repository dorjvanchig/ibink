// import Link from "next/link";
import {
  CloudServerOutlined,
  DatabaseOutlined,
  SafetyCertificateOutlined,
  UsbOutlined,
  StopOutlined,
  FireOutlined,
  LockOutlined,
  BugOutlined,
  PhoneOutlined,
  // RightOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const tips = [
  {
    num: "01",
    icon: <CloudServerOutlined />,
    title: "Серверийн байршил",
    desc: "Серверийг тусгай өрөөнд, хэрэглэгчгүй, хамгаалалттай байршуулах",
    accent: "rgba(45,125,210,0.12)",
    iconColor: "#2d7dd2",
  },
  {
    num: "02",
    icon: <DatabaseOutlined />,
    title: "Архивын нөөц",
    desc: "Архивыг долоо хоног бүр тогтмол хийж, нөөц хард дискэнд хадгалах",
    accent: "rgba(26,79,160,0.1)",
    iconColor: "#1a4fa0",
  },
  {
    num: "03",
    icon: <SafetyCertificateOutlined />,
    title: "Лицензтэй програм",
    desc: "Зөвхөн лицензтэй програм (Windows, Office, Antivirus гэх мэт) ашиглах",
    accent: "rgba(45,125,210,0.12)",
    iconColor: "#2d7dd2",
  },
  {
    num: "04",
    icon: <UsbOutlined />,
    title: "USB & Share хаалт",
    desc: "USB порт болон Share тохиргоог хаалттай байлгах",
    accent: "rgba(13,38,87,0.08)",
    iconColor: "#0d2657",
  },
  {
    num: "05",
    icon: <StopOutlined />,
    title: "Татан авалтын хориг",
    desc: "Интернэтээс зөвшөөрөгдөөгүй програм, файл татахыг хориглох",
    accent: "rgba(220,38,38,0.08)",
    iconColor: "#dc2626",
  },
  {
    num: "06",
    icon: <FireOutlined />,
    title: "Firewall тохиргоо",
    desc: "Зөвхөн шаардлагатай портуудыг Firewall-аар нээх",
    accent: "rgba(234,88,12,0.08)",
    iconColor: "#ea580c",
  },
  {
    num: "07",
    icon: <LockOutlined />,
    title: "Нууц үгийн бодлого",
    desc: "Хүчтэй нууц үг ашиглах, нууц үгийн бодлогыг байгууллагадаа мөрдөх",
    accent: "rgba(45,125,210,0.12)",
    iconColor: "#2d7dd2",
  },
  {
    num: "08",
    icon: <BugOutlined />,
    title: "Антивирус хамгаалалт",
    desc: "Антивирус программтай, тогтмол шинэчилсэн байх",
    accent: "rgba(22,163,74,0.08)",
    iconColor: "#16a34a",
  },
];

export default function Safety() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-content mx-auto reveal">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="font-mono text-[16px] tracking-[2.5px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
            Аюулгүй байдал
          </p>
          <h2 className="font-syne font-bold text-[clamp(32px,4.5vw,54px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657] max-w-2xl">
            Аюулгүй байдлын{" "}
            <em className="font-normal italic text-[#2d7dd2]">санамж</em>
          </h2>
          <p className="mt-5 text-[16px] text-[rgba(13,38,87,0.55)] max-w-lg leading-[1.7] font-medium">
            Таны байгууллагын мэдээллийн аюулгүй байдлыг хангах үндсэн 8 зарчим.
            Эдгээрийг мөрдөж, эрсдэлээс урьдчилан сэргийлнэ үү.
          </p>
        </div>

        {/* Shield badge */}
        <div className="shrink-0 flex items-center gap-3 bg-[rgba(45,125,210,0.07)] border border-[rgba(26,79,160,0.15)] rounded-xl px-5 py-3.5">
          {/* Энд ShieldOutlined-ийг SafetyOutlined болгож өөрчиллөө */}
          <SafetyOutlined className="text-[22px] text-[#2d7dd2]" />
          <div>
            <p className="font-syne font-bold text-[13px] text-[#0d2657] leading-tight">
              IBI Аюулгүй байдлын стандарт
            </p>
            <p className="font-mono text-[11px] text-[rgba(13,38,87,0.4)] tracking-[1px] mt-0.5">
              2025 / ИНТЕРАКТИВ БИ АЙ ХХК
            </p>
          </div>
        </div>
      </div>

      {/* Tips grid */}
      <div
        className="border border-[rgba(26,79,160,0.12)] rounded-[10px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ gap: "1px", background: "rgba(26,79,160,0.1)" }}
      >
        {tips.map((tip) => (
          <div
            key={tip.num}
            className="group bg-white hover:bg-[#f0f5ff] transition-colors duration-250 p-7 flex flex-col gap-4"
          >
            {/* Icon + number row */}
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: tip.accent,
                  color: tip.iconColor,
                }}
              >
                {tip.icon}
              </div>
              <span className="font-mono text-[13px] text-[rgba(13,38,87,0.2)] tracking-[1px]">
                {tip.num}
              </span>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-syne font-bold text-[15px] tracking-[-0.01em] text-[#0d2657] mb-1.5 leading-tight">
                {tip.title}
              </h3>
              <p className="text-[13px] text-[rgba(13,38,87,0.5)] leading-[1.6] font-medium">
                {tip.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[10px] border border-[rgba(26,79,160,0.15)] bg-[rgba(45,125,210,0.04)] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PhoneOutlined className="text-[#2d7dd2] text-[18px] shrink-0" />
          <p className="font-medium text-[14px] text-[rgba(13,38,87,0.6)] leading-[1.6]">
            Техникийн аюулгүй байдлын бүх төрлийн зөвлөгөө, зааврыг{" "}
            <a
              href="tel:+97670002626"
              className="font-bold text-[#0d2657] hover:text-[#2d7dd2] transition-colors"
            >
              7000-2626 → 1 → 1
            </a>{" "}
            дугаарт холбогдож авна уу. /Үнэ төлбөргүй/
          </p>
        </div>
        {/* <Link
          href="/services#online"
          className="group shrink-0 flex items-center gap-2 font-syne font-semibold text-[13px] text-[#2d7dd2] hover:text-[#0d2657] transition-colors whitespace-nowrap"
        >
          Үнэ төлбөргүй
          <RightOutlined className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link> */}
      </div>
    </section>
  );
}
