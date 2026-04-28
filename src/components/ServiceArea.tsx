import { MapPin } from 'lucide-react'

const ServiceArea = () => {
  const locations = [
    'Balve',
    'Neuenrade',
    'Menden',
    'Iserlohn',
    'Hemer',
    'Werdohl',
    'Altena',
    'Plettenberg',
    'Lüdenscheid',
  ]

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-3 md:mb-6">
              Ihr Elektriker in{' '}
              <span className="text-accent">Balve und Umgebung</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-text-body mb-6 md:mb-8 leading-relaxed">
              Wir sind schnell bei Ihnen – egal ob in Balve, Neuenrade, Menden oder Iserlohn.
              Als regionaler Meisterbetrieb kennen wir die Gegend und sind zuverlässig vor Ort.
            </p>

            {/* Location Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-gray-200 text-xs md:text-sm font-medium text-primary hover:border-accent hover:bg-accent/5 transition-colors cursor-default"
                >
                  <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-accent" />
                  {location}
                </span>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <div className="reveal" style={{ transitionDelay: typeof window !== 'undefined' && window.innerWidth < 768 ? '0s' : '0.2s' }}>
            <div className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39817.77025583762!2d7.8212!3d51.3497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b94b5d88b8c1e3%3A0x4263df27bd7b5e0!2s58802%20Balve!5e0!3m2!1sde!2sde!4v1701700000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Gössel Elektrotechnik"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea