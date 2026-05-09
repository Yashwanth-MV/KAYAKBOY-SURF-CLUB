'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import ReadyToRide from '@/components/sections/ReadyToRide'
import Footer from '@/components/layout/Footer'

const photos1 = [
  'https://framerusercontent.com/images/7G2b8blZNaXaYHNc8wHmtH6rVk.png',
  'https://framerusercontent.com/images/NO1lECwAGlXmUZrmNDHm7a4Qyc.png',
  'https://framerusercontent.com/images/ZxWrWGjuQqINf9UImpDu8b2XeA.png',
  'https://framerusercontent.com/images/4hghtnzD2eBWL0NCQykxYlrM2WI.png',
  'https://framerusercontent.com/images/KQGNjyNt0T5PXD5FgzAP3CyKmY.png',
]

const photos2 = [
  'https://framerusercontent.com/images/fB8OnDmH0e1zPZbjRy0xtaf1Mo.png',
  'https://framerusercontent.com/images/QJUEkd4WFjglinui4HYmzTrfR0.png',
  'https://framerusercontent.com/images/ceKxDMBpW7RlpofaPV5D3i0ozU.png',
  'https://framerusercontent.com/images/AyIwHyiauVpsyuCTDv8RuNGA.png',
  'https://framerusercontent.com/images/24oyHluKjefl1cl8o6FWB7jfofI.png',
]

const extraPhotos = [
  'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
  'https://images.unsplash.com/photo-1459749411177-042180ce6742?w=800&q=80',
  'https://images.unsplash.com/photo-1537519646099-ee30c5d20be5?w=800&q=80',
  'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  'https://images.unsplash.com/photo-1502933032398-ee7af63bb7b4?w=800&q=80',
]

function PhotoStrip({ photos, direction = 'left' }: { photos: string[]; direction?: 'left' | 'right' }) {
  const doubled = [...photos, ...photos, ...photos, ...photos]
  return (
    <div className="overflow-hidden">
      <div
        className={direction === 'left' ? 'photo-strip-left' : 'photo-strip-right'}
        style={{ display: 'flex', gap: '12px', width: 'max-content' }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shrink-0 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
            style={{ width: '320px', height: '420px' }}
          >
            <Image src={src} alt="Surfing photo" fill className="object-cover" sizes="320px" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'surf-camp', label: 'Surf Camp' },
  { id: 'ice-bath', label: 'Ice Bath' },
  { id: 'our-home', label: 'Our Home' },
  { id: 'birds', label: 'Mulki Birds' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'friends', label: 'Friends' },
  { id: 'sunsets', label: 'Sunsets' },
  { id: 'sunrise', label: 'Sunrise' },
]

const categoryImages: Record<string, string[]> = {
  'surf-camp': [
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1010373/pexels-photo-1010373.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'ice-bath': [
    'https://images.pexels.com/photos/1209612/pexels-photo-1209612.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3760258/pexels-photo-3760258.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'our-home': [
    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'birds': [
    'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&q=80',
    'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'birthday': [
    'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'friends': [
    'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1010373/pexels-photo-1010373.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'sunsets': [
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80',
    'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  'sunrise': [
    'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const displayedImages = activeTab === 'all' 
    ? Object.values(categoryImages).flat() 
    : categoryImages[activeTab] || []

  return (
    <main className="bg-[#050F18] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="gallery-hero" className="relative py-20 md:py-40 overflow-hidden border-b border-white/5 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Gallery Background" 
            fill 
            className="object-cover opacity-60"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050F18]/80 via-[#050F18]/40 to-[#050F18]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-14 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-6 mx-auto bg-white/10 backdrop-blur-md inline-block px-4 py-1.5 rounded-full border border-white/10 text-[#7ECDC8]">Visual Stories</div>
            <h1 className="text-[clamp(60px,10vw,140px)] leading-[0.85] text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              CAPTURED <em className="text-[#7ECDC8]">MOMENTS</em>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Explore the spirit of Mulki through our lens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Menu */}
      <section className="sticky top-[72px] z-30 bg-[#050F18]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  activeTab === cat.id 
                    ? 'bg-[#7ECDC8] text-[#050F18] shadow-lg shadow-[#7ECDC8]/20' 
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 min-h-[60vh]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {displayedImages.map((src, i) => (
              <motion.div
                layout
                key={`${activeTab}-${i}-${src}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-[4/5] rounded-[30px] overflow-hidden group shadow-2xl border border-white/5"
              >
                <Image 
                  src={src} 
                  alt="Gallery image" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ReadyToRide />
      <Footer />
    </main>
  )
}

