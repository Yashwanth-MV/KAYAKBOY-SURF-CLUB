'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const steps = [
  { num: '01', title: 'Awareness', desc: 'Learn tides, currents, and surf rules for safe, confident surfing.' },
  { num: '02', title: 'Familiarization', desc: 'Understand your board, handling, and positioning before hitting waves.' },
  { num: '03', title: 'Paddling', desc: 'Master paddling strength and body placement for easier wave catching.' },
  { num: '04', title: 'Pop-Up', desc: 'Practice quick, smooth transitions from paddling to standing on waves.' },
  { num: '05', title: 'Wave Reading', desc: 'Identify, time, and choose the right waves for your skills.' },
  { num: '06', title: 'Catch & Ride', desc: 'Catch waves, refine techniques, and build confidence.' },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={containerRef} id="why-us" className="relative bg-[#050F18] py-20 md:py-32 overflow-hidden">
      {/* BG image parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-15">
        <Image
          src="https://framerusercontent.com/images/FRGxuGf8L6qhufEDpGKqlGwLEQc.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050F18] via-transparent to-[#050F18]" />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Beach to <em className="italic">Board</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm max-w-md font-light"
          >
            We make learning to surf easy, safe, and fun — no experience needed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Steps list */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex gap-6 py-6 border-b border-white/8 group cursor-default"
              >
                <div
                  className="text-[#7ECDC8]/40 text-sm font-mono pt-0.5 w-8 shrink-0 group-hover:text-[#7ECDC8] transition-colors duration-300"
                  style={{ fontFamily: 'monospace' }}
                >
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#7ECDC8] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#7ECDC8]/40 transition-colors duration-300">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-[#7ECDC8]/60"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:sticky lg:top-24"
          >
            <Image
              src="https://framerusercontent.com/images/Yx8icdamVONiaUVZguK8IyzG0.jpg"
              alt="A man surfing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050F18]/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
