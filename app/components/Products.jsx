import Link from "next/link";
import Image from "next/image";
import { EyeOutlined } from "@ant-design/icons";

const products = [
  {
    slug: "diamond",
    name: "Diamond 5.0",
    image: "/products/dimond55_cropped.png",
    surface: "rgba(45,125,210,0.12)",
    desc: "Санхүү, НББ, үйлдвэрлэл — бүгдийг нэг дороос. Том корпорациудад зориулсан дэлгэрэнгүй ERP систем.",
    modules: ["Санхүү", "Үйлдвэрлэл", "HR", "Агуулах", "CRM"],
  },
  {
    slug: "impact",
    name: "Impact",
    image: "/products/impact_cropped.png",
    surface: "rgba(26,79,160,0.1)",
    desc: "Жижиг аж ахуйн нэгжүүдэд зориулсан хэрэглэхэд хялбар, үнэ хямд, цоо шинэ шийдэл бүхий санхүү НББ-ийн Импакт систем",
    modules: ["Борлуулалт", "Нягтлан", "Худалдан авалт", "Тайлан"],
  },
  {
    slug: "emerald",
    name: "Emerald",
    image: "/products/emerald_cropped.png",
    surface: "rgba(91,184,245,0.15)",
    desc: "Төсөвт байгууллагын санхүү бүртгэлийн бүх гүйлгээ, мөнгөн урсгалын хяналт, жилийн төсвийн удирдлага.",
    modules: ["Нөөц удирдлага", "Тарилга", "Лоджистик", "Мэдээлэл"],
  },
  {
    slug: "spinel",
    name: "Spinel",
    image: "/products/spinel_cropped.png",
    surface: "rgba(13,38,87,0.08)",
    desc: "Банк, ББСБ, хадгаламж зээлийн хоршооны үйл ажиллагаанд зориулсан зээл, хадгаламж, хүүний бүртгэлийн систем.",
    modules: ["Тусгай модуль", "API", "Интеграц", "Тайлан"],
  },
];

export default function Products() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-content mx-auto reveal">
      <p className="font-mono text-[16px] tracking-[2.5px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
        Бүтээгдэхүүн
      </p>
      <h2 className="font-syne font-bold text-[clamp(32px,4.5vw,54px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657] max-w-2xl">
        Таны бизнест{" "}
        <em className="font-normal italic text-[#2d7dd2]">тохирсон</em>
        <br />
        цогц шийдэл
      </h2>
      <p className="mt-5 text-[16px] text-[rgba(13,38,87,0.55)] max-w-lg leading-[1.7] font-medium">
        Жижиг бизнесээс том корпораци хүртэл — бүх хэмжээний байгууллагад
        зориулсан ERP бүтээгдэхүүнүүд.
      </p>

      <div
        className="mt-14 border border-[rgba(26,79,160,0.12)] rounded-[10px] overflow-hidden grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "1px", background: "rgba(26,79,160,0.1)" }}
      >
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group bg-white hover:bg-[#f0f5ff] transition-colors duration-250 p-9 flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center overflow-hidden"
                style={{ background: p.surface }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <span className="text-[rgba(13,38,87,0.25)] text-lg group-hover:text-[#1a4fa0] group-hover:translate-x-0.75 group-hover:-translate-y-0.75 transition-all duration-200">
                <EyeOutlined />
              </span>
            </div>

            <h3 className="font-syne font-bold text-[22px] tracking-[-0.02em] text-[#0d2657] mb-2">
              {p.name}
            </h3>

            <p className="text-[14px] text-[rgba(13,38,87,0.55)] leading-[1.6] font-medium mb-5 flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.modules.map((m) => (
                <span
                  key={m}
                  className="font-mono text-[11px] px-2.5 py-1 rounded border border-[rgba(26,79,160,0.15)] text-[rgba(13,38,87,0.45)] bg-[rgba(45,125,210,0.05)]"
                >
                  {m}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
