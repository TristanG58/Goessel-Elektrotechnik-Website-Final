import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-body hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="prose prose-sm max-w-none text-text-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Impressum = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#impressum') {
        setIsOpen(true)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    history.pushState('', document.title, window.location.pathname)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Impressum">
      <h3 className="font-bold text-primary mb-2">Angaben gemäß § 5 TMG</h3>
      <p className="mb-4">
        Gössel Elektrotechnik<br />
        Falk Gössel<br />
        Ringstraße 2b<br />
        58802 Balve
      </p>

      <h3 className="font-bold text-primary mb-2">Kontakt</h3>
      <p className="mb-4">
        Telefon: +49 2375 205268<br />
        E-Mail: info@goessel-elektrotechnik.de
      </p>

      <h3 className="font-bold text-primary mb-2">Berufsbezeichnung</h3>
      <p className="mb-4">
        Elektromeister<br />
        Verliehen in: Deutschland
      </p>

      <h3 className="font-bold text-primary mb-2">Zuständige Kammer</h3>
      <p className="mb-4">
        Handwerkskammer Südwestfalen<br />
        Brüderweg 51<br />
        58239 Schwerte
      </p>

      <h3 className="font-bold text-primary mb-2">Berufsrechtliche Regelungen</h3>
      <p className="mb-4">
        Handwerksordnung (HwO)<br />
        Die berufsrechtlichen Regelungen sind einsehbar unter:{' '}
        <a
          href="https://www.gesetze-im-internet.de/hwo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          www.gesetze-im-internet.de/hwo/
        </a>
      </p>

      <h3 className="font-bold text-primary mb-2">
        Verbraucherstreitbeilegung / Universalschlichtungsstelle
      </h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </Modal>
  )
}

export const Datenschutz = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#datenschutz') {
        setIsOpen(true)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    history.pushState('', document.title, window.location.pathname)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Datenschutzerklärung">
      <h3 className="font-bold text-primary mb-2">1. Datenschutz auf einen Blick</h3>
      <p className="mb-4">
        <strong>Allgemeine Hinweise</strong><br />
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können.
      </p>

      <h3 className="font-bold text-primary mb-2">2. Verantwortlicher</h3>
      <p className="mb-4">
        Gössel Elektrotechnik<br />
        Falk Gössel<br />
        Ringstraße 2b<br />
        58802 Balve<br />
        Telefon: +49 2375 205268<br />
        E-Mail: info@goessel-elektrotechnik.de
      </p>

      <h3 className="font-bold text-primary mb-2">3. Datenerfassung auf dieser Website</h3>
      <p className="mb-4">
        <strong>Kontaktformular</strong><br />
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>

      <p className="mb-4">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist.
      </p>

      <h3 className="font-bold text-primary mb-2">4. Ihre Rechte</h3>
      <p className="mb-4">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen.
      </p>

      <h3 className="font-bold text-primary mb-2">5. Google Maps</h3>
      <p>
        Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google
        Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4,
        Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig,
        Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an
        einen Server von Google in den USA übertragen und dort gespeichert.
      </p>
    </Modal>
  )
}