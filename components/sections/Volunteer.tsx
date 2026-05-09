'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Volunteer() {
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
    <section id="volunteer" className="bg-[#050F18] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="section-label mb-4">Join the Tribe</div>
            <h2 className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Become a <br /><em className="italic">Volunteer</em>
            </h2>
            
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 border border-white/5 group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80" 
                alt="Community surfing" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050F18]/60 to-transparent" />
            </div>

            <p className="text-white/60 text-sm leading-relaxed font-light mb-10 max-w-md">
              Passionate about the ocean and community? We're looking for enthusiastic volunteers to help us keep the surfing spirit alive.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Community Support', desc: 'Help us organize events and beach cleanups.' },
                { title: 'Beach Marshall', desc: 'Assist instructors with student safety and equipment.' },
                { title: 'Social Media', desc: 'Help capture memories and share our story online.' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-[#7ECDC8] rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-white/40 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <div className="bg-[#0A1F30]/60 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-[#7ECDC8]/20 rounded-full flex items-center justify-center text-3xl mb-4">🏄‍♂️</div>
                  <h4 className="text-white font-semibold text-lg mb-2">Application Received!</h4>
                  <p className="text-white/50 text-sm font-light">We'll review your application and get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Your Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className={labelClasses}>Age *</label>
                      <input type="number" name="age" required value={formData.age} onChange={handleChange} className={inputClasses} placeholder="24" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Contact Number *</label>
                      <input type="tel" name="contact" required value={formData.contact} onChange={handleChange} className={inputClasses} placeholder="+1 234 567 890" />
                    </div>
                    <div>
                      <label className={labelClasses}>Current City *</label>
                      <input type="text" name="city" required value={formData.city} onChange={handleChange} className={inputClasses} placeholder="San Diego, CA" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Education Qualification *</label>
                    <input type="text" name="education" required value={formData.education} onChange={handleChange} className={inputClasses} placeholder="Bachelor's in Environmental Science" />
                  </div>

                  <div>
                    <label className={labelClasses}>Any previous experience in volunteering? *</label>
                    <textarea name="experience" required rows={2} value={formData.experience} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Yes, I helped with local beach cleanups for 2 years..." />
                  </div>

                  <div>
                    <label className={labelClasses}>When you can start? *</label>
                    <input type="text" name="startDate" required value={formData.startDate} onChange={handleChange} className={inputClasses} placeholder="Next Monday (Available for 7 days)" />
                  </div>

                  <div>
                    <label className={labelClasses}>Have you visited our surf club before? *</label>
                    <input type="text" name="visitedBefore" required value={formData.visitedBefore} onChange={handleChange} className={inputClasses} placeholder="Yes, during the Summer Surf Fest last year" />
                  </div>

                  <div>
                    <label className={labelClasses}>Tell us something about yourself *</label>
                    <textarea name="aboutSelf" required rows={2} value={formData.aboutSelf} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="I'm a passionate surfer and nature lover..." />
                  </div>

                  <div>
                    <label className={labelClasses}>Instagram Account Link *</label>
                    <input type="url" name="instagram" required value={formData.instagram} onChange={handleChange} className={inputClasses} placeholder="https://instagram.com/johndoe" />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    type="submit"
                    className="w-full bg-white text-[#050F18] font-bold py-4 rounded-xl text-sm hover:bg-white/90 transition-all duration-300 mt-2 shadow-lg shadow-white/5"
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
  )
}
