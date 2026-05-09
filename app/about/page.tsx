'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TickerTape from '@/components/ui/TickerTape'
import ReadyToRide from '@/components/sections/ReadyToRide'

const featureCards = [
  { 
    id: '01', 
    title: 'Professional', 
    desc: 'Learn from ISA-certified instructors with years of real surf experience.',
    image: 'https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🎓'
  },
  { 
    id: '02', 
    title: 'Locations', 
    desc: 'Train at some of the world\'s most breathtaking and consistent surf spots.',
    image: 'https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '📍'
  },
  { 
    id: '03', 
    title: 'All Levels', 
    desc: 'From first-timers to seasoned surfers, we tailor lessons to your skill.',
    image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🏄'
  }
]

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

export default function AboutPage() {
  return (
    <main className="bg-[#050F18] overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about-hero" className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image 
          src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Surfing Hero"
          fill
          unoptimized
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050F18] via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-4 mx-auto"
          >
            About Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(48px,10vw,140px)] leading-none text-white tracking-tighter"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Riding Waves,<br />
            <em className="italic text-[#7ECDC8]">Shaping Surfers®</em>
          </motion.h1>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[40px] overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image 
                src="https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Why Choose Us"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050F18]/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="section-label mb-4">The Excellence</div>
              <h2 className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Why <em className="italic text-[#7ECDC8]">Choose Us?</em>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
                Because you deserve more than just a lesson—you deserve an unforgettable surfing journey. With our proven methods, modern equipment, and love for the sport, we'll help you catch waves and feel at home in the water.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  { icon: '🌊', label: 'Certified Instructors' },
                  { icon: '🛡️', label: 'Safety First' },
                  { icon: '🏄', label: 'Personalized Coaching' }
                ].map(item => (
                  <li key={item.label} className="flex items-center gap-4 text-white font-semibold">
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <button className="bg-white text-[#050F18] font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform text-xs uppercase tracking-widest shadow-xl">
                View Courses
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="mb-20 text-center">
            <div className="section-label mx-auto mb-4">Our Core</div>
            <h2 className="text-[clamp(40px,7vw,90px)] leading-none text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              WHAT WE <em className="italic text-[#7ECDC8]">OFFER</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, i) => (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] border border-white/5 overflow-hidden group hover:border-[#7ECDC8]/30 transition-all duration-500 h-full flex flex-col shadow-2xl"
              >
                <div className="relative h-72 w-full overflow-hidden shrink-0">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <span className="absolute top-6 right-8 text-[#7ECDC8]/40 font-bold text-7xl z-10" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{card.id}</span>
                </div>
                <div className="p-10 pt-0 relative z-10 flex-grow">
                  <h3 className="text-4xl font-bold text-[#050F18] mb-4 uppercase tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{card.title}</h3>
                  <p className="text-[#050F18]/60 leading-relaxed font-light text-base">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Surf Experience */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-4">The Feeling</div>
              <h2 className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                The <em className="italic text-[#7ECDC8]">Surf Experience</em>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
                Surfing is not just about catching waves—it's about embracing a lifestyle shaped by the ocean. It's the thrill of your first ride and the freedom of living in sync with nature's rhythm.
              </p>
              
              <div className="space-y-6 mb-12">
                {['Connect with Nature', 'Make Lifelong Friends', 'Learn with Confidence'].map(label => (
                  <div key={label} className="flex items-center gap-4 text-white font-medium">
                    <div className="w-2 h-2 bg-[#7ECDC8] rounded-full" />
                    {label}
                  </div>
                ))}
              </div>

              <Link href="/gallery" className="inline-block bg-white text-[#050F18] font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform text-xs uppercase tracking-widest shadow-xl">
                View Gallery
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image 
                src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Surfer Experience"
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy & Stats */}
      <section className="py-20 md:py-32 bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="section-label mb-8">Our Philosophy</div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[40px] overflow-hidden border border-white/5 shadow-2xl hidden lg:block"
              >
                <Image 
                  src="https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Philosophy"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-20 italic">
                "At Kayakboy Surf Club, we're more than just a surf school—we're a community built on passion, skill, and the love of the ocean."
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: '120', suffix: '+', label: 'Happy Students' },
                  { value: '95', suffix: '%', label: 'Satisfaction' },
                  { value: '30', suffix: '+', label: 'Certified Coaches' }
                ].map((stat, i) => (
                  <div key={stat.label} className="py-8">
                    <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TickerTape />

      {/* Dream Team (Instructors) */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 text-center">
          <div className="section-label mx-auto mb-4">Dream Team</div>
          <h2 className="text-[clamp(40px,7vw,90px)] leading-none text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Meet Our <em className="italic text-[#7ECDC8]">Instructors</em>
          </h2>
          <p className="text-white/40 text-lg font-light mb-20">World-class mentors ready to guide you from shore to surf.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {instructors.map((instructor, i) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 flex flex-col h-full shadow-xl text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[#7ECDC8] text-[10px] font-bold tracking-widest uppercase mb-1 drop-shadow-md">{instructor.role}</div>
                    <div className="text-white font-bold text-2xl drop-shadow-lg" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{instructor.name}</div>
                  </div>
                </div>
                <div className="p-8 bg-white flex flex-col flex-grow">
                  <p className="text-[#050F18]/70 text-sm leading-relaxed font-light italic flex-grow">
                    "{instructor.bio}"
                  </p>
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
