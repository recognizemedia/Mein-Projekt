export default function Header() {
  return (
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="/images/team-umzug-buerokartons.jpg"
        alt="Team bezieht sein neues Büro bei der Bürogemeinschaft"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/96 via-brand-dark/78 to-brand/85" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-32 text-center text-white">
        <img src="/logo-weiss.webp" alt="Bürogemeinschaft" className="h-16 w-auto drop-shadow-lg" />
        <span className="font-body text-sm text-brand-accent">
          Bürogemeinschaft Monheim am Rhein &amp; Leverkusen
        </span>
        <h1 className="max-w-xl font-headline text-4xl leading-tight font-bold text-balance sm:text-5xl">
          Mieten Sie Ihr personalisiertes oder möbliertes Büro und sparen Sie Geld
        </h1>
        <a
          href="#beitraege"
          className="mt-4 inline-flex items-center gap-2 rounded-button bg-brand-accent px-6 py-3 font-body font-semibold text-brand-dark transition hover:brightness-105"
        >
          Beiträge entdecken
        </a>
      </div>

      <a
        href="#slide-2"
        aria-label="Weiter scrollen"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </header>
  );
}
