'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ReadyToRide from './ReadyToRide'

const faqs = [
  {
    q: 'Do I need any surfing experience to join?',
    a: 'Not at all! Our Beginner Course is designed for complete novices. We start with ocean safety, board familiarization, and land-based practice before hitting the water.',
  },
  {
    q: 'What should I bring to my surf lesson?',
    a: 'Bring sunscreen, a towel, and a swimsuit or rash guard. We provide all surfing equipment including boards, leashes, and wetsuits if needed.',
  },
  {
    q: 'Are lessons safe for kids?',
    a: 'Absolutely! Our Kids & Teens program is led by certified lifeguards and experienced youth instructors. Safety is our top priority, with small group ratios and protected beach zones.',
  },
  {
    q: 'Can I book private lessons?',
    a: 'Yes! Private 1-on-1 coaching is available for all skill levels. Private sessions allow us to tailor the curriculum entirely to your goals and learning pace.',
  },
  {
    q: 'How long is a typical lesson?',
    a: 'Standard lessons run for 2 hours, including a 30-minute onshore briefing and 90 minutes in the water. Intensive courses span multiple days for deeper skill development.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="faq-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-base pr-4 group-hover:text-[#7ECDC8] transition-colors duration-200">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#7ECDC8]/40 transition-colors duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/60"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-white/55 text-sm font-light leading-relaxed pb-5">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-[#050F18] py-20 md:py-32 overflow-hidden">
      <ReadyToRide />

      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4"
            >
              FAQs
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(40px,5vw,64px)] leading-none text-white mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Got <em className="italic">Questions?</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm font-light leading-relaxed"
            >
              Everything you need to know before you grab your board and hit the waves.
            </motion.p>
          </div>

          {/* Right: accordions */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} item={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
