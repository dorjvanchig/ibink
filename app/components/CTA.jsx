import React from 'react'
import Link from 'next/link'

export default function CTA() {
  return (
    <div>
       <section
          className="mx-6 md:mx-12 my-24 rounded-2xl px-10 py-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0d2657 0%, #1a4fa0 60%, #2d7dd2 100%)",
          }}
        >
          <h2 className="font-syne font-bold text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-white mb-4">
            Бидэнтэй хамтран ажиллах уу?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] max-w-md mx-auto font-medium leading-[1.75] mb-8">
            Таны бизнест тохирсон шийдлийг олж авахын тулд манай мэргэжилтэнтэй
            холбогдоорой.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0d2657] px-7 py-3.5 rounded-lg text-[14.5px] font-semibold hover:opacity-90 transition-opacity"
          >
            Холбоо барих →
          </Link>
        </section>
    </div>
  )
}
