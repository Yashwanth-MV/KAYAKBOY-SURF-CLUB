'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const photos1 = [
  'https://framerusercontent.com/images/7G2b8blZNaXaYHNc8wHmtH6rVk.png',
  'https://framerusercontent.com/images/NO1lECwAGlXmUZrmNDHm7a4Qyc.png',
  'https://framerusercontent.com/images/ZxWrWGjuQqINf9UImpDu8b2XeA.png',
  'https://framerusercontent.com/images/4hghtnzD2eBWL0NCQykxYlrM2WI.png',
  'https://framerusercontent.com/images/KQGNjyNt0T5PXD5FgzAP3CyKmY.png',
]

const photos2 = [
  'https://framerusercontent.com/images/fB8OnDmH0e1zPZbjRy0xtaf1Mo.png',
  'https://framerusercontent.com/images/QJUEkd4WFjglinui4HYmzTrfR0.png',
  'https://framerusercontent.com/images/ceKxDMBpW7RlpofaPV5D3i0ozU.png',
  'https://framerusercontent.com/images/AyIwHyiauVpsyuCTDv8RuNGA.png',
  'https://framerusercontent.com/images/24oyHluKjefl1cl8o6FWB7jfofI.png',
]

function PhotoStrip({ photos, direction = 'left' }: { photos: string[]; direction?: 'left' | 'right' }) {
  const doubled = [...photos, ...photos, ...photos, ...photos]
  return (
    <div className="overflow-hidden">
      <div
        className={direction === 'left' ? 'photo-strip-left' : 'photo-strip-right'}
        style={{ display: 'flex', gap: '12px', width: 'max-content' }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shrink-0 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            style={{ width: '220px', height: '280px' }}
          >
            <Image src={`${src}?scale-down-to=512`} alt="Surfing photo" fill className="object-cover" sizes="220px" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="bg-[#050F18] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-4">Photos</motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(40px,6vw,72px)] leading-none text-white"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Meet <em className="italic">Memories</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-sm mt-3 font-light">
              Snapshots of unforgettable rides and perfect waves.
            </motion.p>
          </div>
          {/* Instagram CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link
              href="https://www.instagram.com/mulki.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#050F18] font-bold px-6 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-white/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow on Instagram
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scrolling strips */}
      <div className="space-y-4">
        <PhotoStrip photos={photos1} direction="left" />
        <PhotoStrip photos={photos2} direction="right" />
      </div>
    </section>
  )
}
