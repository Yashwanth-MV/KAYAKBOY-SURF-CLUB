'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { courses } from '@/lib/courses'

export default function Courses() {
  return (
    <section id="courses" className="bg-[#050F18] py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4"
            >
              Our Packages
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Choose Your <em className="italic">Adventure</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm max-w-md font-light"
            >
              From beginner lessons to intensive wellness retreats, we have the perfect program for every skill level.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {courses.slice(0, 8).map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-3xl overflow-hidden flex flex-col h-full border border-white/5 transition-all duration-500 hover:scale-[1.02] shadow-2xl"
            >
              <Link href={`/courses/${course.slug}`} className="relative aspect-[2/1] overflow-hidden shrink-0 block">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {course.tag && (
                  <div className="absolute top-4 right-4 bg-[#7ECDC8] text-[#050F18] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg">
                    {course.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="text-[#050F18]/40 text-[10px] font-bold uppercase tracking-widest mb-2">
                  {course.location}
                </div>
                <Link href={`/courses/${course.slug}`}>
                  <h3 className="text-[#050F18] font-bold text-lg leading-tight mb-4 flex-grow group-hover:text-[#0E4F78] transition-colors">
                    {course.title}
                  </h3>
                </Link>
                <div className="pt-4 border-t border-[#050F18]/5 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[#050F18]/40 text-[10px] font-medium uppercase mb-0.5">Starting from</div>
                    <div className="text-[#050F18] font-bold text-xl">{course.price}</div>
                  </div>
                  <Link href={`/courses/${course.slug}#course-hero`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#050F18] text-white text-[10px] font-bold px-4 py-2.5 rounded-xl uppercase tracking-wider hover:bg-[#0E4F78] transition-all"
                    >
                      Enquire Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/courses#courses-hero" className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#050F18] transition-all duration-300 shadow-2xl">
            View All Courses
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

