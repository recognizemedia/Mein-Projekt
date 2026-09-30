function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
      <path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <img
        src="/images/meetingraum-skyline.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/97 via-brand-dark/93 to-brand/88" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
        <h2 className="sr-only">Standorte, Kontakt und rechtliche Informationen</h2>

        <div className="flex flex-col items-center gap-3 text-center">
          <img src="/logo-weiss.webp" alt="Bürogemeinschaft" className="h-11 w-auto" />
          <p className="max-w-md text-body font-body text-white/70">
            Personalisierte und möblierte Büros in Monheim am Rhein und
            Leverkusen.
          </p>
        </div>

        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <h3 className="font-headline text-lg font-bold text-brand-accent">
              Standort Monheim
            </h3>
            <ul className="mt-5 space-y-3 text-body font-body text-white/85">
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>Sandstraße 104, 40789 Monheim am Rhein</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+4921732029621" className="hover:text-brand-accent">
                  +49 2173 2029621
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a
                  href="mailto:einsabuerogemeinschaftgmbh@t-online.de"
                  className="hover:text-brand-accent"
                >
                  einsabuerogemeinschaftgmbh@t-online.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold text-brand-accent">
              Standort Leverkusen
            </h3>
            <ul className="mt-5 space-y-3 text-body font-body text-white/85">
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>Moosweg 3, 51377 Leverkusen</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+4921433010240" className="hover:text-brand-accent">
                  +49 214 33010240
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a
                  href="mailto:einsabuerogemeinschaftgmbh@t-online.de"
                  className="hover:text-brand-accent"
                >
                  einsabuerogemeinschaftgmbh@t-online.de
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Informationen">
            <h3 className="font-headline text-lg font-bold text-brand-accent">
              Informationen
            </h3>
            <ul className="mt-5 space-y-3 text-body font-body text-white/85">
              <li>
                <a
                  href="https://einsabuerogemeinschaft.de/impressum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="https://einsabuerogemeinschaft.de/datenschutzerklaerung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent"
                >
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-16 border-t border-white/15 pt-6 text-center text-body font-body text-xs text-white/60">
          *Die angegebenen Preise gelten zum Zeitpunkt Ihrer Anfrage und
          basieren auf einer Laufzeit von 24 Monaten. Je nach ausgewählten
          Services können sie variieren. Die Büropreise verstehen sich pro
          Raum und Monat, abhängig davon, ob der Raum für ein bis zwei, zwei
          bis drei oder mehrere Personen geeignet ist. Beim Co-Working gilt
          der Preis pro Person und Monat. © Bürogemeinschaft &amp;
          Dienstleistungs GmbH. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
