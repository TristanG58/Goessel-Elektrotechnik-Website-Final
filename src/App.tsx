import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import BookingForm from './components/BookingForm'
import ServiceArea from './components/ServiceArea'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { Impressum, Datenschutz } from './components/LegalModals'
import { useGSAPReveal } from './hooks/useGSAPReveal'

function App() {
  useGSAPReveal()

  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh()
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <BookingForm />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />

      {/* Legal Modals */}
      <Impressum />
      <Datenschutz />
    </div>
  )
}

export default App
