import { useEffect } from 'react'
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
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  // Re-run scroll reveal on route changes or dynamic content
  useEffect(() => {
    const handleLoad = () => {
      const revealElements = document.querySelectorAll('.reveal')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      revealElements.forEach((el) => observer.observe(el))
    }

    // Small delay to ensure DOM is ready
    setTimeout(handleLoad, 100)
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