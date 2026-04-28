import { useEffect } from 'react'
import { Award, Calendar, MapPin, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TrustBar = () => {
  const trustItems = [
    {
      icon: Award,
      title: 'Meisterbetrieb',
      subtitle: 'Qualifizierter Meisterbetrieb',
    },
    {
      icon: Calendar,
      title: '15+ Jahre',
      subtitle: 'Erfahrung in der Region',
    },
    {
      icon: MapPin,
      title: 'Regional',
      subtitle: 'Aus der Region, für die Region',
    },
    {
      icon: Star,
      title: '5 Sterne',
      subtitle: 'Top-Bewertungen',
    },
  ]

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const triggers = ScrollTrigger.batch('.trust-item', {
      onEnter: (elements) => {
        gsap.from(elements, {
          scale: 0.85,
          opacity: 0,
          duration: isMobile ? 0.3 : 0.5,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          overwrite: true,
        })
      },
      start: isMobile ? 'top 99%' : 'top 90%',
      once: true,
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="trust" className="trust-bar py-8 md:py-12 lg:py-16 bg-bg-light border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="trust-item flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center mb-2 md:mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon className="w-5 h-5 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-sm md:text-lg mb-0.5 md:mb-1">{item.title}</h3>
              <p className="text-text-body text-xs md:text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
