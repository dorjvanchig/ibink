"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const subjects = [
  "Үнийн санал авах",
  "Демо үзэх",
  "Техникийн дэмжлэг",
  "Сургалт, зөвлөгөө",
  "Нэмэлт систем хөгжүүлэх",
  "Бусад",
];

const contactInfo = [
  { icon: <PhoneOutlined />, label: "Утас", value: "976-7000-2626" },
  { icon: <PhoneOutlined />, label: "Факс", value: "976-7013-0120" },
  { icon: <MailOutlined />, label: "И-мэйл", value: "support@ibi.mn" },
  {
    icon: <EnvironmentOutlined />,
    label: "Хаяг",
    value:
      "Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Чингисийн өргөн чөлөө-17, Виста оффис төв",
  },
  {
    icon: <ClockCircleOutlined />,
    label: "Ажлын цаг",
    value: "Да–Ба: 09:00–18:00",
  },
];

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[rgba(26,79,160,0.15)] text-[14px] text-[#0d2657] placeholder:text-[rgba(13,38,87,0.3)] focus:outline-none focus:border-[#2d7dd2] focus:ring-2 focus:ring-[rgba(45,125,210,0.1)] transition-all bg-white";

const labelClass =
  "font-mono text-[10px] uppercase tracking-[1px] text-[rgba(13,38,87,0.5)] block mb-1.5";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Алдаа гарлаа");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section
          className="pt-36 pb-20 px-6 md:px-12 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at bottom, #2563eb 0%, #0c2a3d 50%, #0a0f1f 100%)",
          }}
        >
          <div className="max-w-content mx-auto">
            <p className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(255,255,255,0.4)] mb-5">
              Холбоо барих
            </p>
            <h1 className="font-syne font-black text-[clamp(38px,6vw,72px)] leading-none tracking-[-0.04em] text-white max-w-2xl">
              Бидэнтэй{" "}
              <em className="font-normal italic text-[#5bb8f5]">
                холбогдоорой
              </em>
            </h1>
            <p className="mt-5 text-[16px] text-[rgba(255,255,255,0.5)] max-w-md leading-[1.7] font-light">
              Асуулт, санал, хүсэлтээ бидэнд илгээгээрэй. Ажлын цагаар 1 цагийн
              дотор хариу өгнө.
            </p>
          </div>
        </section>
        <section className="px-6 md:px-12 py-20 max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-4">
              <div className="mb-6">
                <p className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(26,79,160,0.5)] mb-3">
                  Холбоо барих мэдээлэл
                </p>
                <h2 className="font-syne font-bold text-[24px] text-[#0d2657]">
                  Шууд холбогдох
                </h2>
              </div>

              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-[#f4f8ff] border border-[rgba(26,79,160,0.1)] rounded-xl p-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(26,79,160,0.08)] flex items-center justify-center text-[#2d7dd2] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(13,38,87,0.4)] mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[13.5px] text-[#0d2657] font-medium leading-[1.55]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[rgba(26,79,160,0.1)] rounded-2xl p-8 shadow-sm">
                {status === "success" ? (
                  <div className="flex flex-col items-center text-center py-16 gap-4">
                    <div className="w-16 h-16 rounded-full bg-[rgba(45,125,210,0.1)] flex items-center justify-center">
                      <CheckCircleOutlined
                        style={{ fontSize: 32, color: "#2d7dd2" }}
                      />
                    </div>
                    <h4 className="font-syne font-bold text-[22px] text-[#0d2657]">
                      Амжилттай илгээлээ!
                    </h4>
                    <p className="text-[14px] text-[rgba(13,38,87,0.55)] max-w-sm leading-[1.7]">
                      Таны мессеж хүлээн авлаа. Ажлын цагаар 1 цагийн дотор
                      хариу өгнө.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 font-mono text-[12px] text-[#2d7dd2] hover:underline"
                    >
                      Дахин илгээх →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-syne font-bold text-[20px] text-[#0d2657] mb-2">
                      Мессеж илгээх
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Нэр *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Таны нэр"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>И-мэйл *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="email@company.mn"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Утасны дугаар</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="9900-0000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Сэдэв</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Сонгох...</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Мессеж *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Таны асуулт, санал, хүсэлтийг бичнэ үү..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-[13px] text-red-600">
                        ⚠️ {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#0d2657] text-white py-3 rounded-lg text-[14px] font-medium hover:bg-[#1a4fa0] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <LoadingOutlined spin />
                          Илгээж байна...
                        </>
                      ) : (
                        "Илгээх →"
                      )}
                    </button>

                    <p className="text-[11px] text-[rgba(13,38,87,0.35)] text-center">
                      * тэмдэглэсэн талбарыг заавал бөглөнө үү
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
