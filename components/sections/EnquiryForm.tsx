'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { courses } from '@/lib/courses'

export default function EnquiryForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  const inputClasses = "w-full bg-[#0A1F30] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#7ECDC8]/50 focus:ring-1 focus:ring-[#7ECDC8]/20 transition-all duration-300"

  return (
    <section id="enquiry" className="bg-[#050F18] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="section-label mb-4">Get in Touch</div>
            <h2 className="text-[clamp(40px,6vw,72px)] leading-none text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Start Your <br /><em className="italic">Surf Journey</em>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light mb-10 max-w-md">
              Ready to ride the waves? Fill out the form and our team will get back to you within 24 hours with everything you need to begin your surfing adventure.
            </p>
            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Visit Us', desc: 'Mulki, India — Main Campus' },
                { icon: '📧', title: 'Email Us', desc: 'hello@kayakboysurfclub.com' },
                { icon: '📞', title: 'Call Us', desc: '+91 8722846295' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0A1F30] border border-white/10 rounded-xl flex items-center justify-center text-lg shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-white/50 text-sm font-light">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}>
            <div className="bg-[#0A1F30]/60 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-white font-semibold text-xl mb-2">Enquiry Form</h3>
              <p className="text-white/40 text-sm font-light mb-8">We'd love to hear from you</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-[#7ECDC8]/20 rounded-full flex items-center justify-center text-3xl mb-4">🎉</div>
                  <h4 className="text-white font-semibold text-lg mb-2">Thank You!</h4>
                  <p className="text-white/50 text-sm font-light">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} className={inputClasses} />
                    <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className={inputClasses} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClasses} />
                    <select name="course" value={formData.course} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                      <option value="" className="bg-[#0A1F30]">Select Course</option>
                      {courses.map((course) => (
                        <option key={course.slug} value={course.slug} className="bg-[#0A1F30]">
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea name="message" placeholder="Your Message..." rows={4} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} />
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                    className="w-full bg-white text-[#050F18] font-semibold py-4 rounded-xl text-sm hover:bg-white/90 transition-all duration-300 mt-2">
                    Send Enquiry →
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
