'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ReadyToRide() {
  return (
    <section className="bg-[#050F18] py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-6 md:mx-14 rounded-[40px] overflow-hidden relative h-[450px] md:h-[650px]"
      >
        <Image
          src="https://framerusercontent.com/images/rkxBzTPZdrwzklrQ8WxcM6qJDA4.jpg"
          alt="Ready to Ride"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(48px,8vw,96px)] text-white leading-none mb-8 uppercase tracking-tighter"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Ready to <em className="italic">Ride?</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/courses" className="bg-white text-[#050F18] font-bold px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-[#7ECDC8] transition-all duration-300 hover:scale-105 shadow-2xl">
              View Courses
            </Link>
            <Link href="/volunteer#volunteer-hero" className="border border-white/30 backdrop-blur-md text-white font-bold px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Volunteer
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
