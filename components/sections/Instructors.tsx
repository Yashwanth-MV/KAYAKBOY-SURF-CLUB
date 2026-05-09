'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
const instructors = [
  {
    name: 'Kai Lenny',
    role: 'Head Instructor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    bio: 'Big wave surfing legend with over 15 years of ocean experience.',
  },
  {
    name: 'Maya Gabeira',
    role: 'Senior Coach',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    bio: 'Guinness World Record holder specialized in teaching ocean safety.',
  },
  {
    name: 'John Florence',
    role: 'Technique Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    bio: 'Refining technical skills for advanced surfers chasing speed and control.',
  },
  {
    name: 'Alana Blanchard',
    role: 'Surf Mentor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    bio: 'Focuses on the lifestyle and joy of surfing for beginners and intermediate riders.',
  },
  {
    name: 'Kelly Slater',
    role: 'Master Coach',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
    bio: '11-time world champion sharing elite wave selection and competition insights.',
  },
  {
    name: 'Bethany Hamilton',
    role: 'Inspiration Coach',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    bio: 'Teaching resilience and the spiritual connection between surfer and ocean.',
  },
]

export default function Instructors() {
  return (
    <section id="instructors" className="bg-[#050F18] py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Our Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Meet Our <em className="italic">Instructors</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm max-w-md font-light"
          >
            Learn from the best. Our world-class instructors are here to guide you every step of the way.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {instructors.slice(0, 3).map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 flex flex-col h-full shadow-xl"
            >
              <div className="relative aspect-[2/1] overflow-hidden shrink-0">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-[#7ECDC8] text-[10px] font-bold tracking-widest uppercase mb-0.5 drop-shadow-md">{instructor.role}</div>
                  <div className="text-white font-bold text-xl drop-shadow-lg">{instructor.name}</div>
                </div>
              </div>
              <div className="p-6 bg-white flex flex-col flex-grow">
                <p className="text-[#050F18]/70 text-xs leading-relaxed font-light italic flex-grow">
                  "{instructor.bio}"
                </p>
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
          <Link href="/about" className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#050F18] transition-all duration-300 shadow-2xl">
            View All Instructors
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
