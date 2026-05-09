'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TickerTape from '@/components/ui/TickerTape'
import ReadyToRide from '@/components/sections/ReadyToRide'
import { courses } from '@/lib/courses'

export default function CoursesPage() {
  return (
    <main className="bg-[#050F18] overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="courses-hero" className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image 
          src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Courses Hero"
          fill
          unoptimized
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050F18] via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-4 mx-auto"
          >
            Programs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(48px,10vw,140px)] leading-none text-white tracking-tighter"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Choose Your <br />
            <em className="italic text-[#7ECDC8]">Adventure®</em>
          </motion.h1>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[40px] overflow-hidden flex flex-col h-full border border-white/5 transition-all duration-500 hover:translate-y-[-10px] shadow-2xl"
              >
                <div className="relative aspect-[2/1] overflow-hidden shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {course.tag && (
                    <div className="absolute top-6 right-6 bg-[#7ECDC8] text-[#050F18] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-xl">
                      {course.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <div className="text-[#050F18]/40 text-[10px] font-bold uppercase tracking-widest mb-2">
                    {course.location}
                  </div>
                  <h3 className="text-[#050F18] font-bold text-2xl leading-tight mb-3 flex-grow group-hover:text-[#0E4F78] transition-colors" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {course.title}
                  </h3>
                  <p className="text-[#050F18]/60 text-xs font-light leading-relaxed mb-6">
                    {course.shortDesc}
                  </p>
                  <div className="pt-6 border-t border-[#050F18]/10 flex items-center justify-between">
                    <div>
                      <div className="text-[#050F18]/40 text-[10px] font-medium uppercase mb-0.5">Investment</div>
                      <div className="text-[#050F18] font-bold text-2xl">{course.price}</div>
                    </div>
                    <Link href={`/courses/${course.slug}#course-hero`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#050F18] text-white text-[10px] font-bold px-6 py-3 rounded-full uppercase tracking-widest hover:bg-[#0E4F78] transition-all shadow-lg"
                      >
                        Enquire Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReadyToRide />
      <Footer />
    </main>
  )
}
