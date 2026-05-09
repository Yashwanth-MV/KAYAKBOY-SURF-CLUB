'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const stats = [
    { value: 500, suffix: '+', label: 'Happy Students Taught' },
    { value: 98, suffix: '%', label: 'Student Satisfaction Rate' },
    { value: 24, suffix: '+', label: 'Certified Instructors' },
  ]

  // Verified professional surfing images from Unsplash
  const aboutImages = [
    'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1459749411177-042180ce6742?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&w=800&q=80',
  ]

  return (
    <section ref={containerRef} id="about" className="bg-[#050F18] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Collage */}
          <div className="relative grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
            <motion.div
              style={{ y: y1 }}
              className="relative rounded-3xl overflow-hidden h-full border border-white/5"
            >
              <Image
                src="https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Surfing"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="flex flex-col gap-4 h-full">
              <motion.div
                style={{ y: y2 }}
                className="relative rounded-3xl overflow-hidden h-1/2 border border-white/5"
              >
                <Image
                  src="https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Surfing Technique"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
              <motion.div
                style={{ y: y1 }}
                className="relative rounded-3xl overflow-hidden h-1/2 border border-white/5"
              >
                <Image
                  src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Surfer on Wave"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0E4F78] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-sm z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7ECDC8]/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🌊</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Est. 2018</div>
                  <div className="text-white/50 text-xs">World Renowned</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <div className="section-label mb-4">About Us</div>
            <h2
              className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-8"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Welcome to{' '}
              <br />
              <em className="italic">Kayakboy Surf Club®</em>
            </h2>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-white font-semibold mb-3 text-base">Our Philosophy</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  We are India's premier surf school committed to teaching the skill, spirit, and lifestyle of surfing. With expert instructors, iconic surf spots, and a deep love for the ocean, we offer transformative experiences for surfers at every stage of their journey.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-base">Expert Instruction</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  Our team consists of certified professionals who have spent their lives mastering the waves. We don't just teach you how to stand; we teach you how to read the ocean and respect its power.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="counter-number">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/50 text-xs mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
