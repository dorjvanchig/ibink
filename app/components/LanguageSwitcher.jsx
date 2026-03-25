"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  // Always "mn" on first render — matches the server
  const [activeLang, setActiveLang] = useState("mn");

  // Runs only on the client after hydration — no SSR mismatch
  useEffect(() => {
    if (document.cookie.includes("googtrans=/mn/en")) {
      setActiveLang("en"); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, []);

  const switchLanguage = (lang) => {
    setActiveLang(lang);

    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else {
      const domain = window.location.hostname;
      document.cookie = `googtrans=/mn/${lang}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/mn/${lang}; path=/; domain=.${domain}`;
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center gap-1 bg-[rgba(13,38,87,0.05)] p-1 rounded-lg border border-[rgba(13,38,87,0.1)]">
      <button
        onClick={() => switchLanguage("mn")}
        className={`relative px-3 py-1 text-[12px] font-medium rounded-md transition-colors z-10 ${
          activeLang === "mn"
            ? "text-white"
            : "text-[#0d2657] hover:bg-[rgba(13,38,87,0.05)]"
        }`}
      >
        {activeLang === "mn" && (
          <motion.div
            layoutId="lang-bg"
            className="absolute inset-0 bg-[#0d2657] rounded-md -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        MN
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`relative px-3 py-1 text-[12px] font-medium rounded-md transition-colors z-10 ${
          activeLang === "en"
            ? "text-white"
            : "text-[#0d2657] hover:bg-[rgba(13,38,87,0.05)]"
        }`}
      >
        {activeLang === "en" && (
          <motion.div
            layoutId="lang-bg"
            className="absolute inset-0 bg-[#0d2657] rounded-md -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        EN
      </button>
    </div>
  );
}
