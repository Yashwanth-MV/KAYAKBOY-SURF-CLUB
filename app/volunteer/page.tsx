'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import ReadyToRide from '@/components/sections/ReadyToRide'
import Footer from '@/components/layout/Footer'

export default function VolunteerPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    age: '',
    contact: '', 
    education: '',
    city: '',
    experience: '', 
    startDate: '',
    visitedBefore: '',
    aboutSelf: '',
    instagram: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ 
      name: '', age: '', contact: '', education: '', city: '', 
      experience: '', startDate: '', visitedBefore: '', aboutSelf: '', instagram: '' 
    })
  }

  const inputClasses = "w-full bg-[#0A1F30] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#7ECDC8]/50 focus:ring-1 focus:ring-[#7ECDC8]/20 transition-all duration-300"
  const labelClasses = "block text-white/50 text-xs font-medium mb-1.5 ml-1"

  return (
    <main className="bg-[#050F18] min-h-screen">
      <Navbar />
      
      {/* Page Hero */}
      <section id="volunteer-hero" className="relative py-20 md:py-40 overflow-hidden border-b border-white/5 min-h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Surfing Background" 
            fill 
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050F18] via-[#050F18]/80 to-[#050F18]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050F18] via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-14 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="section-label mb-6 bg-white/10 backdrop-blur-md inline-block px-4 py-1.5 rounded-full border border-white/10 text-[#7ECDC8]">Opportunities</div>
            <h1 className="text-[clamp(60px,10vw,120px)] leading-[0.85] text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              JOIN THE <em className="text-[#7ECDC8]">TRIBE</em>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-xl leading-relaxed">
              Passionate about the ocean and community? We're looking for enthusiastic volunteers to help us keep the surfing spirit alive in Mulki.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Benefits & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-4xl text-white mb-12" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Why Volunteer with <span className="text-[#7ECDC8]">us?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { title: 'Learn Surfing', desc: 'Get access to equipment and sessions during your free time.' },
                  { title: 'Community', desc: 'Meet surfers and ocean lovers from all around the world.' },
                  { title: 'Sustainability', desc: 'Contribute to beach cleanups and environmental awareness.' },
                  { title: 'Experience', desc: 'Gain unique skills in hospitality, events, and ocean safety.' },
                ].map((item, i) => (
                  <div key={item.title} className="p-8 bg-[#0A1F30]/40 border border-white/5 rounded-3xl hover:border-[#7ECDC8]/30 transition-all duration-300">
                    <div className="text-white font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80" 
                  alt="Community surfing" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050F18]/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-white text-2xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Life at Mulki Surf Club</div>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="bg-[#0A1F30]/60 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7ECDC8]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                
                <h3 className="text-3xl text-white mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Volunteer Application</h3>
                
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 bg-[#7ECDC8]/20 rounded-full flex items-center justify-center text-4xl mb-6">🌊</div>
                    <h4 className="text-white font-bold text-2xl mb-3">Application Received!</h4>
                    <p className="text-white/50 text-base max-w-xs font-light">Thanks for your interest. Our team will review your profile and get in touch with you via Instagram or Phone.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                      </div>
                      <div>
                        <label className={labelClasses}>Age *</label>
                        <input type="number" name="age" required value={formData.age} onChange={handleChange} className={inputClasses} placeholder="24" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Contact Number *</label>
                        <input type="tel" name="contact" required value={formData.contact} onChange={handleChange} className={inputClasses} placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label className={labelClasses}>Current City *</label>
                        <input type="text" name="city" required value={formData.city} onChange={handleChange} className={inputClasses} placeholder="Bangalore, KA" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Education Qualification *</label>
                      <input type="text" name="education" required value={formData.education} onChange={handleChange} className={inputClasses} placeholder="Undergrad / Postgrad" />
                    </div>

                    <div>
                      <label className={labelClasses}>Previous Volunteer Experience *</label>
                      <textarea name="experience" required rows={3} value={formData.experience} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Briefly describe any past volunteering or community work..." />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>When can you start? *</label>
                        <input type="text" name="startDate" required value={formData.startDate} onChange={handleChange} className={inputClasses} placeholder="e.g. Next month" />
                      </div>
                      <div>
                        <label className={labelClasses}>Visited us before? *</label>
                        <input type="text" name="visitedBefore" required value={formData.visitedBefore} onChange={handleChange} className={inputClasses} placeholder="Yes/No" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Tell us about yourself *</label>
                      <textarea name="aboutSelf" required rows={3} value={formData.aboutSelf} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="What drives you to join us?" />
                    </div>

                    <div>
                      <label className={labelClasses}>Instagram Account Link *</label>
                      <input type="url" name="instagram" required value={formData.instagram} onChange={handleChange} className={inputClasses} placeholder="https://instagram.com/yourprofile" />
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.98 }} 
                      type="submit"
                      className="w-full bg-white text-[#050F18] font-bold py-5 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#7ECDC8] shadow-2xl mt-4"
                    >
                      Submit Application
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ReadyToRide />
      <Footer />
    </main>
  )
}
