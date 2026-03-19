const modules = [
  { label: "Санхүүгийн удирдлага", color: "#5b9cf6" },
  { label: "Нягтлан бодох бүртгэл", color: "#4caf7d" },
  { label: "Агуулахын удирдлага", color: "#e07b3a" },
  { label: "Хүний нөөц", color: "#a78bfa" },
  { label: "Борлуулалтын систем", color: "#5b9cf6" },
  { label: "Худалдан авалт", color: "#4caf7d" },
  { label: "Үйлдвэрлэлийн удирдлага", color: "#e07b3a" },
  { label: "Тайлан шинжилгээ", color: "#a78bfa" },
  { label: "Дотоод хяналт", color: "#5b9cf6" },
  { label: "Төслийн удирдлага", color: "#4caf7d" },
  { label: "Татвар тооцоолол", color: "#e07b3a" },
  { label: "Гэрээний удирдлага", color: "#a78bfa" },
];

export default function VerticalScroll() {
  const items = [...modules, ...modules];

  return (
    <div className="my-8 border-t border-b border-[rgba(0,0,0,0.08)] py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-liner-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max marquee-track">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-7 font-mono text-xs text-[rgba(10,11,13,0.4)] whitespace-nowrap border-r border-[rgba(0,0,0,0.08)]"
          >
            <span
              className="w-1.25 h-1.25 rounded-full shrink-0"
              style={{ background: item.color }}
            />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
