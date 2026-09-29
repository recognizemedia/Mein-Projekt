export default function PricingCta() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <img
        src="/images/konferenzraum-dachgeschoss.png"
        alt="Konferenzraum der Bürogemeinschaft mit Blick ins Grüne"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand/60" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-start gap-5 text-white">
        <span className="font-body text-sm font-semibold text-brand-accent">
          Ihr nächster Schritt
        </span>
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Bereit für Ihr eigenes Büro?
        </h2>
        <p className="max-w-xl text-body font-body text-white/90">
          Vergleichen Sie die Pakete für Ihr personalisiertes oder
          möbliertes Büro in Monheim am Rhein und Leverkusen und finden Sie
          die passende Lösung für Ihr Unternehmen.
        </p>
        <a
          href="https://einsabuerogemeinschaft.de/preise"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 font-body font-semibold text-brand-dark transition hover:brightness-105"
        >
          Jetzt Preise ansehen
        </a>
      </div>
    </section>
  );
}
