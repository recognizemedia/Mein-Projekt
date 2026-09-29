export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <img
        src="/images/meetingraum-skyline.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/92 via-brand-dark/85 to-brand/75" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-white">
        <h2 className="sr-only">Kontakt und rechtliche Informationen</h2>

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <img src="/logo.webp" alt="Bürogemeinschaft" className="h-10 w-auto" />
            <p className="max-w-xs font-body text-sm text-white/75">
              Personalisierte und möblierte Büros in Monheim am Rhein und
              Leverkusen.
            </p>
          </div>

          <div className="font-body text-sm text-white/85">
            <p className="mb-2 font-semibold tracking-wide text-white uppercase">
              Kontakt
            </p>
            <p>
              Telefon:{" "}
              <a href="tel:+4921732029621" className="hover:text-brand-accent">
                +49 2173 2029621
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:einsabuerogemeinschaftgmbh@t-online.de"
                className="hover:text-brand-accent"
              >
                einsabuerogemeinschaftgmbh@t-online.de
              </a>
            </p>
          </div>

          <nav aria-label="Rechtliches" className="font-body text-sm text-white/85">
            <p className="mb-2 font-semibold tracking-wide text-white uppercase">
              Rechtliches
            </p>
            <ul className="space-y-2">
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

        <p className="mt-12 border-t border-white/15 pt-6 font-body text-xs text-white/60">
          © {year} Bürogemeinschaft. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
