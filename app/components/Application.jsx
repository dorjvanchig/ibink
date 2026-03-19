"use client";

import Image from "next/image";

export default function ApplicationDownload() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2">
      <a
        href="/installs/TeamViewerQS.exe"
        download
        className="flex items-center gap-3 bg-[#0e8ee9] text-white pl-1 pr-1 py-1 rounded-l-full shadow-lg hover:pr-4 transition-all duration-300 group overflow-hidden"
      >
        <div className="w-9 h-9 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
          <Image
            src="/teamviewer.png"
            alt="TeamViewer"
            width={28}
            height={28}
            className="object-contain w-6 h-6"
          />
        </div>
        <span className="font-medium text-[13px] whitespace-nowrap max-w-0 group-hover:max-w-30 overflow-hidden transition-all duration-300">
          TeamViewer татах
        </span>
      </a>

      <a
        href="/installs/AnyDesk.exe"
        download
        className="flex items-center gap-3 bg-[#e03b2e] text-white pl-1 pr-1 py-1 rounded-l-full shadow-lg hover:pr-4 transition-all duration-300 group overflow-hidden"
      >
        <div className="w-9 h-9 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
          <Image
            src="/anydesk_icon.png"
            alt="AnyDesk"
            width={28}
            height={28}
            className="object-contain w-6 h-6"
          />
        </div>
        <span className="font-medium text-[13px] whitespace-nowrap max-w-0 group-hover:max-w-30 overflow-hidden transition-all duration-300">
          AnyDesk татах
        </span>
      </a>
    </div>
  );
}
