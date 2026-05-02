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
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen
        oder unser Kontaktformular nutzen. Personenbezogene Daten sind alle
        Daten, mit denen Sie persönlich identifiziert werden können.
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

      <h3 className="font-bold text-primary mb-2">3. Hosting der Website</h3>
      <p className="mb-4">
        Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut,
        CA 91789, USA gehostet. Beim Aufruf der Seite werden technisch
        notwendige Server-Logfiles (IP-Adresse, Datum/Uhrzeit, abgerufene
        Ressource, Referrer, User-Agent) für maximal 30 Tage gespeichert. Die
        Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an einer technisch fehlerfreien Darstellung).
        Mit Vercel besteht ein Auftragsverarbeitungsvertrag (Data Processing
        Addendum). Datenübermittlungen in die USA sind durch die
        EU-Standardvertragsklauseln und das EU-US Data Privacy Framework
        abgesichert.
      </p>

      <h3 className="font-bold text-primary mb-2">4. Kontaktformular &amp; Anfrage-Pipeline</h3>
      <p className="mb-4">
        <strong>Erhobene Daten:</strong> Bei einer Anfrage über unser
        Kontaktformular erheben wir Name, Telefonnummer, E-Mail-Adresse,
        Anschrift, Anfragetyp und Ihre Nachricht. Zusätzlich werden technische
        Metadaten (Zeitstempel, anonymisierte Submission-Kennung) zur
        Missbrauchs­prävention verarbeitet.
      </p>
      <p className="mb-4">
        <strong>Verarbeitungsweg:</strong> Ihre Eingaben werden über eine
        verschlüsselte Verbindung an unser Workflow-System übermittelt, das auf
        einem dedizierten Server bei der Hetzner Online GmbH, Industriestraße
        25, 91710 Gunzenhausen (Standort Falkenstein, Deutschland) betrieben
        wird. Von dort werden die Daten in unsere Anfrage-Verwaltung (Google
        Workspace, siehe Ziffer 5) übernommen.
      </p>
      <p className="mb-4">
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (vorvertragliche Maßnahmen / Vertragsanbahnung) sowie Art. 6 Abs. 1
        lit. f DSGVO (berechtigtes Interesse an Bearbeitung und
        Missbrauchs­prävention).
      </p>
      <p className="mb-4">
        <strong>Mit Hetzner</strong> besteht ein Auftragsverarbeitungsvertrag.
        Die Daten verlassen den europäischen Wirtschaftsraum auf diesem
        Pipeline-Schritt nicht.
      </p>

      <h3 className="font-bold text-primary mb-2">5. Anfrage-Verwaltung über Google Workspace</h3>
      <p className="mb-4">
        Eingehende Anfragen sowie der weitere Schriftverkehr per E-Mail werden
        in Google Workspace verarbeitet (Google Sheets als Anfrage-Liste,
        Gmail für E-Mail-Korrespondenz). Anbieter ist die Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland.
      </p>
      <p className="mb-4">
        <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Terminvereinbarung,
        Dokumentation der Geschäftsbeziehung.<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (Vertragsanbahnung / Vertragserfüllung). Soweit Daten nach
        Vertragsabschluss zu Buchungs- und Steuerzwecken weiter aufbewahrt
        werden, beruht dies auf Art. 6 Abs. 1 lit. c DSGVO i.V.m. § 147 AO,
        § 257 HGB.
      </p>
      <p className="mb-4">
        Mit Google besteht ein Auftragsverarbeitungsvertrag. Übertragungen in
        Drittländer sind durch EU-Standardvertragsklauseln und das EU-US Data
        Privacy Framework abgesichert.
      </p>

      <h3 className="font-bold text-primary mb-2">6. SMS-Terminbestätigung über seven.io</h3>
      <p className="mb-4">
        Sobald ein Termin verbindlich vereinbart wurde, senden wir Ihnen eine
        SMS-Bestätigung mit Datum und Uhrzeit. Für den SMS-Versand nutzen wir
        die seven.io GmbH, Ernst-Augustin-Straße 2, 12489 Berlin, Deutschland.
        Übertragen werden ausschließlich Ihre Mobilfunknummer sowie der für
        die Bestätigung notwendige Text (Termin, Auftragsbezug).
      </p>
      <p className="mb-4">
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung — Terminvereinbarung). Mit seven.io besteht ein
        Auftragsverarbeitungsvertrag.
      </p>

      <h3 className="font-bold text-primary mb-2">7. Google Maps</h3>
      <p className="mb-4">
        Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur
        Darstellung der Karte wird Ihre IP-Adresse an Google übertragen und
        kann dort gespeichert werden. Die Verarbeitung erfolgt auf Grundlage
        Ihrer Einwilligung, soweit diese abgefragt wird, andernfalls auf
        Grundlage unseres berechtigten Interesses an einer komfortablen
        Standort-Anzeige (Art. 6 Abs. 1 lit. a bzw. lit. f DSGVO).
      </p>

      <h3 className="font-bold text-primary mb-2">8. Speicherdauer &amp; Löschung</h3>
      <p className="mb-4">
        Anfragedaten ohne Folgeauftrag werden spätestens 6 Monate nach dem
        letzten Kontakt gelöscht. Daten aus zustandegekommenen
        Geschäftsbeziehungen werden für die Dauer der gesetzlichen
        Aufbewahrungs­fristen (in der Regel 6 bzw. 10 Jahre nach § 147 AO /
        § 257 HGB) aufbewahrt und anschließend gelöscht. Server-Logfiles
        werden nach maximal 30 Tagen gelöscht.
      </p>

      <h3 className="font-bold text-primary mb-2">9. Ihre Rechte</h3>
      <p className="mb-4">
        Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO),
        Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
        Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie auf
        Widerspruch gegen Verarbeitungen, die auf einem berechtigten Interesse
        beruhen (Art. 21 DSGVO). Erteilte Einwilligungen können Sie jederzeit
        mit Wirkung für die Zukunft widerrufen.
      </p>
      <p className="mb-4">
        Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die unter
        Ziffer 2 genannten Kontaktdaten.
      </p>
      <p>
        <strong>Beschwerderecht:</strong> Unbeschadet anderweitiger
        Rechtsbehelfe steht Ihnen ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu, insbesondere bei der für uns
        zuständigen Landesbeauftragten für Datenschutz und
        Informationsfreiheit Nordrhein-Westfalen, Kavalleriestr. 2–4, 40213
        Düsseldorf.
      </p>
    </Modal>
  )
}