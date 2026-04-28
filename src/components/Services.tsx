import { Plug, Home, Lightbulb, Shield, Sun, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Plug,
      title: 'Elektroinstallation',
      description: 'Komplette Hausinstallation, Renovierung, Neubauten – professionell geplant und ausgeführt.',
    },
    {
      icon: Home,
      title: 'Smart Home',
      description: 'Intelligente Steuerung für mehr Komfort und Energieeffizienz in Ihrem Zuhause.',
    },
    {
      icon: Lightbulb,
      title: 'Beleuchtung',
      description: 'LED-Umrüstung, Lichtplanung und moderne Außenbeleuchtung für Ihr Projekt.',
    },
    {
      icon: Shield,
      title: 'Sicherheitstechnik',
      description: 'Alarmanlagen, Videoüberwachung und Zutrittskontrolle für Ihre Sicherheit.',
    },
    {
      icon: Sun,
      title: 'Photovoltaik',
      description: 'Solaranlagen und Speichersysteme – unabhängige Energie für die Zukunft.',
    },
    {
      icon: Zap,
      title: 'Notdienst',
      description: '24/7 für Sie erreichbar bei Stromausfällen und elektrischen Notfällen.',
    },
  ]

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section id="leistungen" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-3 md:mb-6 reveal">
            Was wir für Sie <span className="text-accent">tun</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-text-body reveal" style={{ transitionDelay: isMobile ? '0s' : '0.1s' }}>
            Vom kleinen Reparaturauftrag bis zur kompletten Hausinstallation – wir sind Ihr verlässlicher Partner für alle Elektroarbeiten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm border border-gray-100 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 group reveal"
              style={{ transitionDelay: isMobile ? '0s' : `${(index + 2) * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1.5 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
