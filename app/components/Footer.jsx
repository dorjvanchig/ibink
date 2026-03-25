import Link from "next/link";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined
} from "@ant-design/icons";

const footerLinks = [
  {
    heading: "Компани",
    links: [
      { label: "Танилцуулга", href: "/about" },
      { label: "Бүтэц зохион байгуулалт", href: "/about#org" },
      { label: "Нээлттэй ажлын байр", href: "/" },
      { label: "Анкет бөглөх", href: "/" },
    ],
  },
  {
    heading: "Бүтээгдэхүүн",
    links: [
      { label: "Даймонд ERP", href: "/products/diamond" },
      { label: "Импакт", href: "/products/impact" },
      { label: "Эмералд", href: "/products/emerald" },
      { label: "Спинел", href: "/products/spinal" },
    ],
  },
  {
    heading: "Үйлчилгээ",
    links: [
      { label: "Десктоп програм хөгжүүлэх", href: "/services#desktop" },
      { label: "Веб програм хөгжүүлэх", href: "/services#web" },
      { label: "Мобайл програм хөгжүүлэх", href: "/services#mobile" },
      { label: "Програм нэвтрүүлэх", href: "/services#implementation" },
      { label: "Техник хангамжийн үйлчилгээ", href: "/services#hardware" },
      { label: "Онлайн үйлчилгээ", href: "/services#online" },
    ],
  },
];

const socials = [
  {
    icon: <FacebookOutlined />,
    href: "https://www.facebook.com/InteractiveBI",
    label: "Facebook",
  },
  {
    icon: <MessageOutlined />,
    href: "https://m.me/InteractiveBI",
    label: "Messenger",
  },
  {
    icon: <InstagramOutlined />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  { icon: <YoutubeOutlined />, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(26,79,160,0.12)] px-6 md:px-12 pt-12 pb-8 bg-white">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          <div className="min-w-55">
            <div className="flex items-center gap-2 font-syne font-black text-[16px] tracking-[-0.02em] text-[#0d2657] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d7dd2] inline-block" />
              Interactive BI
            </div>
            <p className="font-medium text-[16px] text-[rgba(13,38,87,0.4)] leading-[1.8] mb-5">
             Хаяг: Улаанбаатар хот, Сүхбаатар дүүрэг,
              <br />
              1-р хороо, Чингисийн өргөн чөлөө-17,
              <br />
              Виста оффис төв
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              <li>
                <a
                  href="tel:+97670002626"
                  className="flex items-center gap-2 text-[16px] text-[rgba(13,38,87,0.55)] hover:text-[#0d2657] transition-colors font-medium"
                >
                  <PhoneOutlined className="text-[#2d7dd2]" />
                  976-7000-2626
                </a>
              </li>
              <li>
                <a
                  href="tel:+97670130120"
                  className="flex items-center gap-2 text-[16px] text-[rgba(13,38,87,0.55)] hover:text-[#0d2657] transition-colors font-medium"
                >
                  <PhoneOutlined className="text-[rgba(13,38,87,0.3)]" />
                  Факс: 976-7013-0120
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@ibi.mn"
                  className="flex items-center gap-2 text-[16px] text-[rgba(13,38,87,0.55)] hover:text-[#0d2657] transition-colors font-medium"
                >
                  <MailOutlined className="text-[#2d7dd2]" />
                  support@ibi.mn
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-[rgba(26,79,160,0.15)] flex items-center justify-center text-[rgba(13,38,87,0.45)] hover:text-[#1a4fa0] hover:border-[rgba(26,79,160,0.35)] hover:bg-[#f0f5ff] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="font-medium text-[10px] tracking-[2px] uppercase text-[rgba(13,38,87,0.35)] mb-3.5">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-[rgba(13,38,87,0.5)] hover:text-[#0d2657] transition-colors duration-200 font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[rgba(26,79,160,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium text-[12px] text-[rgba(13,38,87,0.35)]">
            © 2026 Интерактив Би Ай ХХК
          </p>
          <p className="font-medium text-[12px] text-[rgba(13,38,87,0.25)]">
            Бүх эрх хуулиар хамгаалагдсан
          </p>
        </div>
      </div>
    </footer>
  );
}
