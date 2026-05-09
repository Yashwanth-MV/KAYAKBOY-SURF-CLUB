'use client'

const items = ['WARNING', 'NO SWIMMING', 'SHARK SIGHTED', 'WARNING', 'NO SWIMMING', 'SHARK SIGHTED', 'WARNING', 'NO SWIMMING', 'SHARK SIGHTED', 'WARNING', 'NO SWIMMING', 'SHARK SIGHTED']

export default function TickerTape() {
  return (
    <div className="w-full bg-[#F5E6C8] py-3 overflow-hidden border-y border-[#E8D5A8]">
      <div className="ticker-wrap">
        <div className="ticker">
          {[...items, ...items].map((item, i) => (
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
  )
}
