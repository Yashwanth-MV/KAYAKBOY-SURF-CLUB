'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HostedBy() {
  return (
    <section className="bg-[#050F18] py-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-xl font-bold mb-8">Hosted By</h3>
          
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#7ECDC8]/30 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                  alt="Sushant Mehta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="text-white font-bold text-lg mb-1">Sushant Mehta</div>
            <a 
              href="https://ticketshifu.com/tickets/udupi-surfing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 text-sm hover:text-[#7ECDC8] transition-colors flex items-center gap-1.5"
            >
              Mulki Sports & Adventure School Pvt Ltd
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
