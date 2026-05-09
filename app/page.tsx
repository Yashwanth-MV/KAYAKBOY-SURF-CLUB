import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Courses from '@/components/sections/Courses'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import Instructors from '@/components/sections/Instructors'
import VolunteerCTA from '@/components/sections/VolunteerCTA'
import EnquiryForm from '@/components/sections/EnquiryForm'

import Footer from '@/components/layout/Footer'
import TickerTape from '@/components/ui/TickerTape'

export default function Home() {
  return (
    <main className="bg-[#050F18] overflow-hidden">
      <Navbar />
      <Hero />
      <TickerTape />
      <About />
      <Courses />
      <Process />
      <Instructors />
      <VolunteerCTA />
      <FAQ />
      <EnquiryForm />

      <Footer />
    </main>
  )
}
