import type { Metadata } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import Application from "./components/Application";
import "./globals.css";
import SmoothScroll from "./components/SmoothScoll";
import Script from "next/script"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interactive",
  description:
    "1996 оноос хойш Монголын бизнес байгууллагуудад санхүү, нягтлан бодох бүртгэл, ERP шийдлүүдийг нийлүүлж байна.",
  keywords: ["ERP", "Mongolia", "НББ", "Санхүү", "Интерактив"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="mn"
      className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}

        <Application />

        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-config" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'mn',
                includedLanguages: 'mn,en', // Only Mongolian and English
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
      </body>
      
    </html>
  );
}
