'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const locations = [
  {
    image: 'https://framerusercontent.com/images/IN8Yrus6KR6wqRQ7Y0KzdBCqg.jpg',
    title: 'Mulki, India 🇮🇳',
    description: 'Tropical waves, warm waters, and year-round surf bliss.',
    aspect: 'tall',
  },
  {
    image: 'https://framerusercontent.com/images/Vl2bZnKpOf6Dax2BvaoVvOXV4Yk.jpg',
    title: 'Byron Bay, Australia 🇦🇺',
    description: "Relaxed vibes and iconic consistent point breaks.",
    aspect: 'wide',
  },
  {
    image: 'https://framerusercontent.com/images/FKGnqM3PLDpVFUjAEWqmb2ISzs.jpg',
    title: 'Goa, India 🇮🇳',
    description: 'Golden beaches and gentle waves for all skill levels.',
    aspect: 'tall',
  },
  {
    image: 'https://framerusercontent.com/images/bcU2oYm8Fsun9a51qg1IuMZZQ.jpg',
    title: 'Hossegor, France 🇫🇷',
    description: "Europe's surf mecca with powerful Atlantic swells.",
    aspect: 'wide',
  },
  {
    image: 'https://framerusercontent.com/images/PEw5kFHjwM5aLyLC3jYC2weg.jpg',
    title: 'Santa Cruz, California 🇺🇸',
    description: 'Surf culture capital with consistent waves.',
    aspect: 'tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    title: 'Maldives 🇲🇻',
    description: 'Crystal-clear turquoise waters and pristine reef breaks.',
    aspect: 'wide',
  },
  {
    image: 'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=800&q=80',
    title: 'Tamarindo, Costa Rica 🇨🇷',
    description: 'Warm Pacific swells and lush jungle backdrops.',
    aspect: 'tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    title: 'Nazaré, Portugal 🇵🇹',
    description: 'Home to the biggest waves on Earth.',
    aspect: 'wide',
  },

]

function LocationCard({ loc, index }: { loc: typeof locations[0]; index: number }) {
  const isTall = loc.aspect === 'tall'
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 cursor-pointer ${isTall ? 'row-span-2' : 'row-span-1'}`}
      style={{ minHeight: isTall ? '400px' : '180px' }}
    >
      <Image src={loc.image} alt={loc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-semibold text-base md:text-lg mb-1">{loc.title}</h3>
        <p className="text-white/60 text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">{loc.description}</p>
      </div>
    </motion.div>
  )
}

export default function Locations() {
  return (
    <section id="locations" className="bg-[#050F18] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-4">Beaches</motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[clamp(40px,6vw,72px)] leading-none text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Our <em className="italic">Locations</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/50 text-sm max-w-sm font-light">
              We run sessions in some of the world's most iconic surf spots across 8 countries
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {locations.map((loc, i) => (
            <LocationCard key={loc.title} loc={loc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
