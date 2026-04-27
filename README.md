# Gössel Elektrotechnik - Landing Page

Moderne Landing Page für den Elektro-Meisterbetrieb Gössel aus Balve.

## Tech Stack

- React 18 + TypeScript
- Vite (Build Tool)
- Tailwind CSS
- Lucide React (Icons)

## Installation

1. **Node.js installieren** (falls nicht vorhanden)
   - Download von [nodejs.org](https://nodejs.org/) (LTS Version empfohlen)

2. **Abhängigkeiten installieren**
   ```bash
   cd goessel-landing
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   Die Seite ist dann unter `http://localhost:5173` erreichbar.

4. **Für Produktion bauen**
   ```bash
   npm run build
   ```
   Die fertigen Dateien befinden sich dann im `dist/` Ordner.

## Projektstruktur

```
goessel-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── BookingForm.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── LegalModals.tsx
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Anpassungen

### Farben ändern
Die Hauptfarben sind in `tailwind.config.js` definiert:
- `primary`: Dunkles Blau (#0F172A)
- `secondary`: Sattes Blau (#1E3A5F)
- `accent`: Orange (#F59E0B)

### Bilder hinzufügen
- Hero-Hintergrundbild: In `Hero.tsx` im Background-Bereich
- Portrait Falk Gössel: In `About.tsx` den Platzhalter ersetzen

### Kontaktformular Backend
Das Formular in `BookingForm.tsx` simuliert aktuell nur das Senden.
Für echte Funktionalität:
1. Backend-Endpoint erstellen
2. In `handleSubmit` den API-Call implementieren

## Features

- Responsive Design (Mobile First)
- Scroll-Reveal Animationen
- Sticky Navigation mit Scroll-Effekt
- Online-Terminbuchung (Frontend)
- Google Maps Integration
- SEO-optimierte Meta-Tags
- Barrierefreie Komponenten
- Impressum & Datenschutz als Modals
# Goessel-Website
# Goessel-Website
# Goessel-Website
# Goessel-Website