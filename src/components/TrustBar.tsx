import { Award, Calendar, MapPin, Star } from 'lucide-react'

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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section id="trust" className="py-8 md:py-12 lg:py-16 bg-bg-light border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group reveal"
              style={{ transitionDelay: isMobile ? '0s' : `${index * 0.1}s` }}
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
