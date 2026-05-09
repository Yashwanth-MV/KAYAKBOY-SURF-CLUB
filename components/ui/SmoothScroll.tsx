'use client'
import { useEffect, useRef, useCallback } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)

  const handleAnchorClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
    if (!anchor) return

    const href = anchor.getAttribute('href')
    if (!href || href === '#') return

    const el = document.querySelector(href)
    if (el && lenisRef.current) {
      e.preventDefault()
      lenisRef.current.scrollTo(el, {
        offset: -80,
        duration: 1.8,
        easing: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      })
    }
  }, [])

  useEffect(() => {
    let lenis: any
    let rafId: number

    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default
      lenis = new Lenis({
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        infinite: false,
      })
      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    initLenis()
    document.addEventListener('click', handleAnchorClick, { capture: true })

    return () => {
      lenis?.destroy()
      if (rafId) cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick, { capture: true })
    }
  }, [handleAnchorClick])

  return <>{children}</>
}
