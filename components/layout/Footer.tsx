'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Gallery', href: '/gallery' },
]

const tickerItems = ['BEGINNER FRIENDLY', 'CERTIFIED INSTRUCTORS', '5000+ STUDENTS', 'EST. 2021', 'BEGINNER FRIENDLY', 'CERTIFIED INSTRUCTORS', '5000+ STUDENTS', 'EST. 2021']

export default function Footer() {
  return (
    <footer className="bg-[#050F18] border-t border-white/5">
      {/* Footer ticker */}
      <div className="w-full bg-[#F5E6C8] py-3 overflow-hidden border-b border-[#E8D5A8]">
        <div className="ticker-wrap">
          <div className="ticker">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center gap-6 mx-6">
                <span
                  className="text-[#050F18] font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '15px', letterSpacing: '0.25em' }}
                >
                  {item}
                </span>
                <span className="text-[#050F18]/30 text-lg">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 md:py-24">
        {/* Big logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-[clamp(60px,12vw,160px)] leading-none text-white/90"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Kayakboy <em className="italic">Surf Club</em>
          </h2>
        </motion.div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          {/* Column 1: Navigation */}
          <div>
            <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Navigation</div>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Get In Touch</div>
            <div className="space-y-6">
              <div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Location</div>
                <p className="text-white/60 text-sm font-light">Mulki, India</p>
              </div>
              <div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Inquiries</div>
                <p className="text-white/60 text-sm font-light">hello@kayakboysurfclub.com<br />+91 8722846295</p>
              </div>
            </div>
          </div>

          {/* Column 3: Social & Mission */}
          <div>
            <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Connect</div>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/mulki.in/' }
              ].map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  target={social.name === 'Instagram' ? "_blank" : undefined}
                  className="text-white/40 hover:text-[#7ECDC8] transition-colors text-xs font-medium border border-white/10 px-4 py-2 rounded-full hover:border-[#7ECDC8]/30"
                >
                  {social.name}
                </Link>
              ))}
            </div>
            <p className="text-white/20 text-[11px] leading-relaxed font-light italic">
              "We believe that everyone deserves to experience the magic of the ocean. Join our community and ride the waves of life."
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Kayakboy Surf Club. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
