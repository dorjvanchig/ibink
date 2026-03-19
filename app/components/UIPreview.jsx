"use client";

import { CheckCircleOutlined } from "@ant-design/icons";

const transactions = [
  {
    id: "TXN-8821",
    desc: "Бараа худалдан авалт #443",
    amount: "₮4,200,000",
    status: "Баталгаажсан",
    color: "#2d7dd2",
    bg: "rgba(45,125,210,0.1)",
  },
  {
    id: "TXN-8820",
    desc: "Цалингийн олголт — 2025/02",
    amount: "₮38,500,000",
    status: "Боловсруулж байна",
    color: "#1a4fa0",
    bg: "rgba(26,79,160,0.1)",
  },
  {
    id: "TXN-8819",
    desc: "Нийлүүлэгчийн нэхэмжлэл",
    amount: "₮1,750,000",
    status: "Хүлээгдэж байна",
    color: "#e07b3a",
    bg: "rgba(224,123,58,0.1)",
  },
  {
    id: "TXN-8818",
    desc: "Борлуулалтын орлого",
    amount: "₮92,400,000",
    status: "Баталгаажсан",
    color: "#2d7dd2",
    bg: "rgba(45,125,210,0.1)",
  },
];

const checkItems = [
  "Бодит цагийн санхүүгийн дашборд",
  "Автомат тайлан үүсгэх",
  "Монгол хэл дээрх бүрэн интерфэйс",
  "Татварын хуулийн дагуу тооцоолол",
];

export default function UIPreview() {
  return (
    <section className="px-6 md:px-12 py-24">
      <div className="max-w-content mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[16px] tracking-[2.5px] uppercase text-[rgba(26,79,160,0.5)] mb-5">
              Ашиглахад хялбар
            </p>
            <h2 className="font-syne font-bold text-[clamp(32px,4.5vw,54px)] leading-[1.05] tracking-[-0.03em] text-[#0d2657]">
              Ашиглахад{" "}
              <em className="font-normal italic text-[#2d7dd2]">хялбар,</em>
              <br />
              маш хурдан
            </h2>
            <p className="mt-5 text-[16px] text-[rgba(13,38,87,0.55)] leading-[1.7] font-medium max-w-sm">
              Ажилтнуудаа сургахад цаг зарцуулах шаардлагагүй. Цэвэр интерфэйс
              нь ажлыг эхний өдрөөс хялбарчилдаг.
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-[rgba(13,38,87,0.65)] font-medium"
                >
                  <CheckCircleOutlined
                    style={{ color: "#2d7dd2", fontSize: 15, flexShrink: 0 }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[rgba(255,255,255,0.1)] rounded-[14px] overflow-hidden bg-[#0a0e1a]">
            <div className="bg-[#0d1120] px-4 py-3 flex items-center gap-2 border-b border-[rgba(255,255,255,0.07)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[11px] text-[rgba(240,236,228,0.3)] ml-2">
                ОЧ 7.7 — Санхүүгийн модуль
              </span>
            </div>

            <div className="flex border-b border-[rgba(255,255,255,0.07)] bg-[#0a0e1a] px-4">
              {["Гүйлгээ", "Тайлан", "Төсөв", "Тохиргоо"].map((t, i) => (
                <div
                  key={t}
                  className={`font-mono text-[11px] px-3.5 py-2.5 ${
                    i === 0
                      ? "text-[#2d7dd2] border-b-2 border-[#2d7dd2]"
                      : "text-[rgba(240,236,228,0.3)]"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  {
                    val: "₮482.3M",
                    lbl: "Нийт орлого",
                    delta: "↑ 12.4%",
                    color: "#2d7dd2",
                  },
                  {
                    val: "₮61.2M",
                    lbl: "Авлага",
                    delta: "↑ 3.1%",
                    color: "#e07b3a",
                  },
                  {
                    val: "96.4%",
                    lbl: "Төлбөрийн хугацаа",
                    delta: "✓ Хэвийн",
                    color: "#5bb8f5",
                  },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="bg-[#0d1120] border border-[rgba(45,125,210,0.15)] rounded-lg p-3.5"
                  >
                    <div className="font-syne font-bold text-lg tracking-tight text-[#f0ece4]">
                      {s.val}
                    </div>
                    <div className="font-mono text-[9px] text-[rgba(240,236,228,0.3)] mt-0.5 tracking-[0.5px]">
                      {s.lbl}
                    </div>
                    <div
                      className="text-[11px] mt-1"
                      style={{ color: s.color }}
                    >
                      {s.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Transactions table */}
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[rgba(255,255,255,0.07)]">
                    {["Дугаар", "Тайлбар", "Дүн", "Төлөв"].map((h) => (
                      <th
                        key={h}
                        className="font-mono text-[9px] tracking-[1.5px] uppercase text-[rgba(240,236,228,0.25)] text-left pb-2.5 px-3 first:pl-0"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b border-[rgba(255,255,255,0.05)] last:border-b-0"
                    >
                      <td className="font-mono text-[11px] text-[rgba(240,236,228,0.4)] py-2.5 pr-3">
                        {tx.id}
                      </td>
                      <td className="text-[12px] text-[rgba(240,236,228,0.55)] py-2.5 pr-3 font-medium">
                        {tx.desc}
                      </td>
                      <td className="text-[12px] text-[rgba(240,236,228,0.55)] py-2.5 pr-3 font-medium whitespace-nowrap">
                        {tx.amount}
                      </td>
                      <td className="py-2.5">
                        <span
                          className="font-mono text-[9px] px-2 py-1 rounded"
                          style={{ background: tx.bg, color: tx.color }}
                        >
                          ● {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
