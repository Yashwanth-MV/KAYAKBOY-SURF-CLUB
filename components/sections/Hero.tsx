'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const heroImages = [
  { src: 'https://framerusercontent.com/images/yuLp2Ht67rTokFGIudDWop95NxE.jpg', alt: 'Surfer riding a wave' },
  { src: 'https://framerusercontent.com/images/iUf7olk5ArVXfGdHgj3M6pO7tD8.jpg', alt: 'Surfing at sunset' },
  { src: 'https://images.unsplash.com/photo-1537519646099-335112f03225?w=800&q=80', alt: 'Surfer catching a wave' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background image with parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImages[activeIndex].src}
            alt={heroImages[activeIndex].alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050F18]/30 via-transparent to-[#050F18]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F18]/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end px-6 md:px-14 pb-16 md:pb-24 max-w-[1400px] mx-auto">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="pill-badge text-white/80">
            <span className="text-yellow-400">★</span>
            <span>4.9/5</span>
          </div>
          <span className="text-white/60 text-sm font-medium">Best Rated Kayakboy Surf Club</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="text-[clamp(80px,16vw,200px)] leading-none tracking-tight text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Surf<em className="italic">IING</em>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/70 text-base md:text-lg max-w-md font-light leading-relaxed mb-8"
        >
          Whether you're a beginner or chasing barrels, we've got the perfect wave for you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="#courses" className="bg-white text-[#050F18] font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]">
            Explore Courses
          </Link>
          <Link href="#about" className="border border-white/30 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* Thumbnail gallery — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-14 hidden sm:flex items-end gap-3 z-20"
      >
        {heroImages.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              activeIndex === i
                ? 'w-28 h-36 md:w-36 md:h-48 border-2 border-[#7ECDC8] shadow-[0_0_20px_rgba(126,205,200,0.3)]'
                : 'w-20 h-28 md:w-28 md:h-36 border border-white/20 opacity-60 hover:opacity-100'
            }`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="200px" />
            {activeIndex === i && (
              <motion.div layoutId="activeIndicator" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#7ECDC8] rounded-full" />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
      </motion.div>
    </section>
  )
}
