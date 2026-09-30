export default function Header() {
  return (
    <header id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="/images/team-umzug-buerokartons.jpg"
        alt="Team bezieht sein neues Büro bei der Bürogemeinschaft"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/96 via-brand-dark/78 to-brand/85" />

      <nav className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white sm:px-10">
        <a href="#top" className="font-headline text-sm font-semibold">
          Bürogemeinschaft
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#beitraege" className="font-body text-sm font-semibold transition hover:text-brand-accent">
            Beiträge
          </a>
          <a
            href="https://firstconsultingservice.com/preise/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-button bg-brand-accent px-5 py-2 font-body text-sm font-semibold text-brand-dark transition hover:brightness-105"
          >
            Preise
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-32 text-center text-white">
        <img src="/logo-weiss.webp" alt="Bürogemeinschaft" className="h-16 w-auto drop-shadow-lg" />
        <span className="mt-4 font-body text-base text-brand-accent">
          Bürogemeinschaft Monheim am Rhein
          <br className="sm:hidden" /> &amp; Leverkusen
        </span>
        <h1 className="-mt-[5px] -mb-[5px] max-w-xl font-headline text-4xl leading-tight font-bold text-balance sm:text-5xl">
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
