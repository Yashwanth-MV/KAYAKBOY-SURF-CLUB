'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "I never thought surfing could be this fun until these amazing instructors guided me patiently.",
    name: 'Diego',
    country: 'Brazil 🇧🇷',
    image: 'https://framerusercontent.com/images/imhojxQn7ygkdFIyLSvXVmE2VA.jpg',
  },
  {
    quote: "From my first paddle to my first wave, the team made every moment truly unforgettable.",
    name: 'Sofia',
    country: 'Spain 🇪🇸',
    image: 'https://framerusercontent.com/images/87UnUkLH4HYNIwP3UibsgzA1pJs.jpg',
  },
  {
    quote: "I felt safe, supported, and inspired throughout my entire learning journey with this passionate crew.",
    name: 'Jack',
    country: 'Australia 🇦🇺',
    image: 'https://framerusercontent.com/images/bcU2oYm8Fsun9a51qg1IuMZZQ.jpg',
  },
  {
    quote: "The instructors' energy and patience turned my nervousness into pure joy riding beautiful waves.",
    name: 'Liam',
    country: 'USA 🇺🇸',
    image: 'https://framerusercontent.com/images/9nOvvK8KhDYJxv4czySkRiQBGWk.jpg',
  },
  {
    quote: "This surf school changed my life, giving me confidence and unforgettable memories.",
    name: 'Emma',
    country: 'UK 🇬🇧',
    image: 'https://framerusercontent.com/images/DuIydvKQeoa9Gar3BcYNIrxv8.jpg',
  },
  {
    quote: "These coaches made learning easy, fun, and exciting while boosting my confidence in the ocean.",
    name: 'Priya',
    country: 'India 🇮🇳',
    image: 'https://framerusercontent.com/images/EhuX8Dja4KTif3mQtOj8WiqNgc.jpg',
  },
]

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.07 }}
      className="relative bg-white border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-500 flex flex-col h-full shadow-lg"
    >
      <div className="relative w-full overflow-hidden h-48 shrink-0">
        <Image src={t.image} alt={t.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FACC15"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ))}
        </div>
        <p className="text-[#050F18]/80 text-[15px] leading-relaxed mb-6 font-light italic flex-grow">"{t.quote}"</p>
        <div className="flex items-center gap-3 mt-auto pt-5 border-t border-[#050F18]/5">
          <div className="w-10 h-10 rounded-full bg-[#0E4F78]/10 flex items-center justify-center text-sm font-bold text-[#0E4F78] shrink-0 border border-[#0E4F78]/5">{t.name[0]}</div>
          <div>
            <div className="text-[#050F18] font-bold text-sm leading-tight">{t.name}</div>
            <div className="text-[#050F18]/40 text-xs mt-0.5">{t.country}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function TestimonialModal({ open, setOpen }: { open: boolean, setOpen: (o: boolean) => void }) {
  const [form, setForm] = useState({ name: '', country: '', message: '', rating: 5 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setOpen(false); setForm({ name: '', country: '', message: '', rating: 5 }) }, 3000)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()}
            className="bg-[#0A1F30] border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="w-14 h-14 bg-[#7ECDC8]/20 rounded-full flex items-center justify-center text-2xl mb-4">🎉</div>
                <h4 className="text-white font-semibold text-lg mb-2">Thank You!</h4>
                <p className="text-white/50 text-sm">Your testimonial has been submitted for review.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Write a Testimonial</h3>
                  <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">✕</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <button key={star} type="button" onClick={() => setForm({...form, rating: star})} className={`text-lg transition-colors ${star <= form.rating ? 'text-yellow-400' : 'text-white/20'}`}>★</button>
                    ))}
                  </div>
                  <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full bg-[#050F18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#7ECDC8]/50 transition-all" />
                  <input type="text" placeholder="Country" value={form.country} onChange={(e) => setForm({...form, country: e.target.value})}
                    className="w-full bg-[#050F18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#7ECDC8]/50 transition-all" />
                  <textarea placeholder="Your experience... *" required rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full bg-[#050F18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#7ECDC8]/50 transition-all resize-none" />
                  <button type="submit" className="w-full bg-white text-[#050F18] font-semibold py-3.5 rounded-xl text-sm hover:bg-white/90 transition-all">Submit Testimonial</button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Testimonials() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="testimonials" className="bg-[#050F18] py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-4">Testimonials</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Riders' <em className="italic">Words</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-sm max-w-md font-light">
              Real stories from students who've paddled out, stood up, and fallen in love with the waves.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 bg-white text-[#050F18] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-300 hover:scale-[1.03]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              Write a Testimonial
            </button>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
      <TestimonialModal open={modalOpen} setOpen={setModalOpen} />
    </section>
  )
}
