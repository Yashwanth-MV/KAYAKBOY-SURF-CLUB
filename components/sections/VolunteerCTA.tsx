'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function VolunteerCTA() {
  return (
    <section className="bg-[#050F18] py-20 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="bg-[#0A1F30]/60 border border-white/5 rounded-[40px] p-8 md:p-20 relative overflow-hidden group">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7ECDC8]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#7ECDC8]/10 transition-colors duration-700" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="section-label mb-6 text-[#7ECDC8]">Join the Movement</div>
              <h2 className="text-[clamp(40px,5vw,80px)] leading-[0.9] text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                WANT TO <br /><em className="italic">VOLUNTEER?</em>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-md mb-10 leading-relaxed">
                Be a part of something bigger. Share your passion for surfing and community while learning new skills in the heart of Mulki.
              </p>
              <Link 
                href="/volunteer#volunteer-hero"
                className="inline-flex items-center gap-4 bg-white text-[#050F18] font-bold px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-[#7ECDC8] transition-all duration-300 hover:scale-[1.05] shadow-2xl"
              >
                Apply Now <span>→</span>
              </Link>
            </div>
            
            <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-[#7ECDC8]/30 transition-colors duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80" 
                alt="Volunteer Community" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050F18]/80 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="text-white font-bold mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Open for Season 2024</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">Apply before the slots fill up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
