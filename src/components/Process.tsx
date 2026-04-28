import { Phone, ClipboardList, Wrench } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Sie melden sich',
      description: 'Rufen Sie an oder buchen Sie online einen Termin – unverbindlich und unkompliziert.',
    },
    {
      number: '02',
      icon: ClipboardList,
      title: 'Wir besprechen Ihr Anliegen',
      description: 'Vor Ort oder telefonisch – kostenlose Beratung für Ihr Projekt.',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Schnelle, saubere Arbeit',
      description: 'Professionelle Umsetzung, termingerecht und zum fairen Preis.',
    },
  ]

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-3 md:mb-6 reveal">
            In 3 Schritten zu Ihrer <span className="text-accent">Lösung</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-text-body reveal" style={{ transitionDelay: isMobile ? '0s' : '0.1s' }}>
            Unkompliziert und transparent – so arbeiten wir zusammen.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Vertical Connection Line (Mobile) */}
          <div className="md:hidden absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent/20 via-accent/30 to-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex md:flex-col items-start md:items-center text-left md:text-center reveal"
                style={{ transitionDelay: isMobile ? '0s' : `${(index + 2) * 0.15}s` }}
              >
                {/* Mobile: Icon on left */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-lg relative z-10 mr-4 md:mr-0 md:mb-6">
                  <step.icon className="w-5 h-5 md:w-7 md:h-7 text-accent" />
                </div>

                {/* Desktop: Number behind */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <span className="text-7xl lg:text-8xl font-extrabold text-accent/10">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 md:mt-0">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-text-body leading-relaxed max-w-xs md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
