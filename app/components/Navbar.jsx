"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PhoneOutlined } from "@ant-design/icons";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { label: "Бүтээгдэхүүн", href: "/products" },
  { label: "Бидний тухай", href: "/about" },
  { label: "Үйлчилгээ", href: "/services" },
];

const TARGET_TEXT = "Холбоо барих";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptLink = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (pos / CYCLES_PER_LETTER > index) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  return (
    <Link href="/contact">
      <motion.span
        whileTap={{ scale: 0.97 }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        className="group relative overflow-hidden inline-flex items-center bg-[#0d2657] text-white px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer border border-[rgba(45,125,210,0.3)] hover:border-[#0d75f8] transition-colors duration-300"
      >
        <span className="relative z-10 font-mono tracking-wide">{text}</span>
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 scale-125 bg-liner-to-t from-[#0d75f8]/0 from-40% via-[#0d75f8]/40 to-[#0d75f8]/0 to-60% opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </motion.span>
    </Link>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[rgba(13,38,87,0.5)] shadow-[0_1px_20px_rgba(13,38,87,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/ibilogo.png"
              alt="Interactive"
              width={36}
              height={36}
              priority
              loading="eager"
              style={{ width: "auto" }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-[13.5px] font-medium transition-all duration-300 rounded-lg group flex items-center gap-1.5 ${
                    isActive(link.href)
                      ? scrolled
                        ? "text-[#1a4fa0]"
                        : "text-white"
                      : scrolled
                        ? "text-[rgba(13,38,87,0.65)] hover:text-[#0d2657] hover:bg-[rgba(13,38,87,0.04)]"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="w-1 h-1 rounded-full bg-[#2d7dd2] shrink-0"
                    />
                  )}
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className={`absolute inset-0 rounded-lg -z-10 ${scrolled ? "bg-[rgba(26,79,160,0.06)]" : "bg-white/10"}`}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li className="px-4 border-l border-[rgba(13,38,87,0.1)] ml-2">
              <LanguageSwitcher />
            </li>
            <li className="pl-2">
              <EncryptLink />
            </li>
          </ul>

          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-1.25">
              {[
                menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 },
                menuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 },
                menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 },
              ].map((anim, i) => (
                <motion.span
                  key={i}
                  animate={anim}
                  transition={{ duration: 0.2 }}
                  className={`block w-full h-[1.5px] origin-center transition-colors duration-300 ${scrolled ? "bg-[#0d2657]" : "bg-white"}`}
                />
              ))}
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-18 left-4 right-4 z-50 md:hidden bg-white rounded-2xl shadow-2xl shadow-[rgba(13,38,87,0.15)] border border-[rgba(13,38,87,0.08)] overflow-hidden"
            >
              <div className="p-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${
                        isActive(link.href)
                          ? "bg-[rgba(26,79,160,0.06)] text-[#1a4fa0]"
                          : "text-[rgba(13,38,87,0.7)] hover:bg-[rgba(13,38,87,0.04)] hover:text-[#0d2657]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive(link.href) ? "bg-[#0d75f8]" : "bg-[rgba(13,38,87,0.15)]"}`}
                      />
                      {link.label}
                      {isActive(link.href) && (
                        <span className="ml-auto font-mono text-[10px] text-[#0d75f8] bg-[rgba(45,125,210,0.1)] px-2 py-0.5 rounded-full">
                          Here
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-[rgba(13,38,87,0.06)] flex justify-between items-center">
                <span className="text-[13px] font-medium text-[rgba(13,38,87,0.6)]">
                  Хэл сонгох:
                </span>
                <LanguageSwitcher />
              </div>
              <div className="h-px bg-[rgba(13,38,87,0.06)] mx-4" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-3"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-[#0d2657] text-white px-5 py-3 rounded-xl text-[14px] font-medium hover:bg-[#1a4fa0] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Холбоо барих</span>
                  <span className="text-[#5bb8f5]">
                    <PhoneOutlined />{" "}
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
