'use client'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import ReadyToRide from '@/components/sections/ReadyToRide'
import Footer from '@/components/layout/Footer'
import { courses } from '@/lib/courses'

export default function CourseDetailPage() {
  const params = useParams()
  const course = courses.find(c => c.slug === params.slug)
  const [isHoliday, setIsHoliday] = useState(false)
  const [selectedStay, setSelectedStay] = useState(course?.pricingOptions?.[0] || { label: 'Standard', price: '0', advance: '0', remaining: '0' })
  const [quantity, setQuantity] = useState(1)
  const [bookingStep, setBookingStep] = useState(1)

  if (!course) {
    return (
      <main className="bg-[#050F18] min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-[#7ECDC8] hover:underline">Back to all courses</Link>
        </div>
      </main>
    )
  }

  const currentPricing = isHoliday ? (course.holidayPricing || []) : (course.pricingOptions || [])
  
  // Update selected stay if season changes and the label doesn't exist in the new list
  const handleSeasonChange = (holiday: boolean) => {
    setIsHoliday(holiday)
    const newPricing = holiday ? (course.holidayPricing || []) : (course.pricingOptions || [])
    // Try to find same label in new pricing
    const sameOption = newPricing.find(p => p.label.includes(selectedStay.label.split('(')[0].trim()))
    if (sameOption) {
      setSelectedStay(sameOption)
    } else {
      setSelectedStay(newPricing[0])
    }
  }

  const advanceValue = parseInt(selectedStay.advance.replace(/[^0-9]/g, ''))
  const totalAdvance = advanceValue * quantity
  const bookingFees = Math.round(totalAdvance * 0.07)
  const finalTotal = totalAdvance + bookingFees

  return (
    <main className="bg-[#050F18] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="course-hero" className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image 
          src={course.image}
          alt={course.title}
          fill
          unoptimized
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050F18] via-[#050F18]/40 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 w-full text-left">
          <Link href="/courses" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
            ← Back to Courses
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(48px,8vw,110px)] leading-[0.9] text-white tracking-tighter mb-8"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {course.title}
          </motion.h1>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#7ECDC8] text-[#050F18] text-[10px] font-bold px-5 py-2.5 rounded-full uppercase tracking-widest shadow-lg">
              {course.location}
            </div>
            {course.tag && (
              <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-5 py-2.5 rounded-full uppercase tracking-widest border border-white/10">
                {course.tag}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="space-y-20">
                {/* About */}
                <div>
                  <div className="section-label mb-6">About the experience</div>
                  <p className="text-white/60 text-xl font-light leading-relaxed mb-10">
                    {course.fullDesc}
                  </p>
                  {course.timings && (
                    <div className="flex items-center gap-4 text-white/40 text-sm font-medium p-6 bg-white/5 rounded-3xl border border-white/5">
                      <span className="text-2xl">⏰</span>
                      {course.timings}
                    </div>
                  )}
                </div>

                {/* Itinerary */}
                {course.itinerary && (
                  <div>
                    <div className="section-label mb-10">Course Itinerary</div>
                    <div className="space-y-12">
                      {course.itinerary.map((day, i) => (
                        <div key={i} className="relative pl-12 border-l border-white/10">
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#7ECDC8] shadow-[0_0_15px_rgba(126,205,200,0.5)]" />
                          <div className="text-[#7ECDC8] font-bold text-xs uppercase tracking-widest mb-2">{day.day}</div>
                          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{day.title}</h3>
                          <ul className="space-y-3 mb-6">
                            {day.activities.map((act, j) => (
                              <li key={j} className="text-white/70 text-sm font-light flex items-start gap-3">
                                <span className="text-[#7ECDC8] mt-0.5">•</span>
                                {act}
                              </li>
                            ))}
                          </ul>
                          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Key Learning</div>
                            <p className="text-white/50 text-xs italic font-light leading-relaxed">{day.learnings}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-[#0A1F30] p-10 rounded-[40px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Includes</h3>
                    <ul className="space-y-4">
                      {course.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-light">
                          <span className="text-[#7ECDC8] text-lg leading-none mt-[-2px]">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-10 rounded-[40px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Important Notes</h3>
                    <ul className="space-y-4">
                      {course.importantNotes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/40 text-sm font-light leading-relaxed">
                          <span className="text-red-400/50 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                {/* Season Indication / Toggle */}
                {course.holidayPricing && (
                  <div className="mb-6 bg-white/5 rounded-full p-1.5 flex items-center border border-white/10">
                    <button 
                      onClick={() => handleSeasonChange(false)}
                      className={`flex-1 py-3 px-6 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${!isHoliday ? 'bg-white text-[#050F18] shadow-lg' : 'text-white/40 hover:text-white'}`}
                    >
                      Regular Season
                    </button>
                    <button 
                      onClick={() => handleSeasonChange(true)}
                      className={`flex-1 py-3 px-6 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${isHoliday ? 'bg-[#7ECDC8] text-[#050F18] shadow-lg' : 'text-white/40 hover:text-white'}`}
                    >
                      Holiday Season
                    </button>
                  </div>
                )}

                <div className="bg-white rounded-[40px] p-10 shadow-2xl text-[#050F18]">
                  {isHoliday && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mb-6 bg-[#050F18]/5 p-4 rounded-2xl border border-[#050F18]/10 flex items-center gap-3"
                    >
                      <span className="text-xl">🌟</span>
                      <div>
                        <div className="text-[#050F18] font-bold text-[10px] uppercase tracking-wider">Holiday Dates Active</div>
                        <div className="text-[#050F18]/60 text-[9px] font-medium">Dec 19th — Jan 5th</div>
                      </div>
                    </motion.div>
                  )}

                  <AnimatePresence mode="wait">
                    {bookingStep === 1 ? (
                      <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="mb-8">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-[#050F18]/40 mb-1">Total Advance Amount</div>
                          <div className="text-5xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>₹{totalAdvance.toLocaleString()}</div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#050F18]/40 block mb-3 px-1">Select Your Stay</label>
                            <div className="space-y-2">
                              {currentPricing.map((option) => (
                                <button
                                  key={option.label}
                                  type="button"
                                  onClick={() => setSelectedStay(option)}
                                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                                    selectedStay.label === option.label 
                                      ? 'bg-[#050F18] border-[#050F18] text-white shadow-xl' 
                                      : 'bg-[#050F18]/5 border-transparent text-[#050F18]/70 hover:bg-[#050F18]/10'
                                  }`}
                                >
                                  <div className="flex justify-between items-start">
                                    <span className="text-[11px] font-bold uppercase tracking-tight">{option.label}</span>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedStay.label === option.label ? 'text-[#7ECDC8]' : 'text-[#050F18]/30'}`}>₹{option.price}</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-[#050F18]/5 rounded-2xl border border-[#050F18]/5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#050F18]/40">Number of Guests</span>
                            <div className="flex items-center gap-4">
                              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full border border-[#050F18]/10 flex items-center justify-center font-bold hover:bg-[#050F18] hover:text-white transition-all">-</button>
                              <span className="font-bold text-lg">{quantity}</span>
                              <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full border border-[#050F18]/10 flex items-center justify-center font-bold hover:bg-[#050F18] hover:text-white transition-all">+</button>
                            </div>
                          </div>

                          <button onClick={() => setBookingStep(2)} className="w-full bg-[#050F18] text-white font-bold py-6 rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-[#0E4F78] transition-all shadow-xl">
                            Reserve Now
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <button onClick={() => setBookingStep(1)} className="text-[10px] font-bold uppercase tracking-widest text-[#050F18]/40 mb-6 hover:text-[#050F18] transition-colors flex items-center gap-2">
                          ← Back to selection
                        </button>
                        
                        <div className="mb-8 border-b border-[#050F18]/5 pb-6">
                          <h3 className="text-xl font-bold mb-4 uppercase tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Payment Summary</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-[#050F18]/50">{quantity}x {selectedStay.label} (Advance)</span>
                              <span className="font-bold">₹{(advanceValue * quantity).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#050F18]/50">Booking & GST Fees</span>
                              <span className="font-bold">₹{bookingFees.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-lg pt-3 border-t border-[#050F18]/10">
                              <span className="font-bold uppercase tracking-widest text-xs">Total Advance</span>
                              <span className="font-bold text-[#0E4F78]">₹{finalTotal.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        <form className="space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            <input type="text" placeholder="First Name *" required className="w-full bg-[#050F18]/5 border border-[#050F18]/10 rounded-xl px-5 py-4 text-xs focus:outline-none focus:border-[#0E4F78]" />
                            <input type="text" placeholder="Last Name *" required className="w-full bg-[#050F18]/5 border border-[#050F18]/10 rounded-xl px-5 py-4 text-xs focus:outline-none focus:border-[#0E4F78]" />
                            <input type="tel" placeholder="Mobile Number *" required className="w-full bg-[#050F18]/5 border border-[#050F18]/10 rounded-xl px-5 py-4 text-xs focus:outline-none focus:border-[#0E4F78]" />
                            <input type="email" placeholder="Email Address *" required className="w-full bg-[#050F18]/5 border border-[#050F18]/10 rounded-xl px-5 py-4 text-xs focus:outline-none focus:border-[#0E4F78]" />
                          </div>
                          
                          <button type="button" className="w-full bg-[#0E4F78] text-white font-bold py-6 rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-[#050F18] transition-all shadow-xl">
                            Pay ₹{finalTotal.toLocaleString()}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Post-Booking Details */}
                <div className="mt-8 bg-[#0A1F30] border border-white/5 rounded-[32px] p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#7ECDC8]/10 rounded-xl flex items-center justify-center text-lg">⚠️</div>
                    <div>
                      <div className="text-white font-bold text-[10px] uppercase tracking-wider">Remaining Balance</div>
                      <div className="text-white/40 text-[9px] font-medium">₹{selectedStay.remaining} per person</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-white/30 italic leading-relaxed">
                    Balance due during check-in via UPI only. Rescheduling possible up to 5-10 days before start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReadyToRide />
      <Footer />
    </main>
  )
}
