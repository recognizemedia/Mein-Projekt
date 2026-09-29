export default function IntroSlide() {
  return (
    <section id="slide-2" className="grid bg-white sm:grid-cols-2">
      <div className="flex flex-col justify-center gap-5 px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <h2 className="font-headline text-3xl font-bold text-ink sm:text-4xl">
          Ihre Herausforderung
        </h2>
        <div className="space-y-5 text-body text-ink/80">
          <p>
            Viele Unternehmen zahlen jeden Monat für ein Büro, das sie kaum
            nutzen.
          </p>
          <p>
            Möbel, Kaution und ein langer Vertrag binden Kapital, das Sie
            besser in Ihr Geschäft stecken. Gleichzeitig soll Ihre Adresse
            professionell wirken, ohne dass Sie dafür Ihr Budget sprengen.
          </p>
          <p>
            Ein personalisiertes oder möbliertes Büro der Bürogemeinschaft
            löst genau dieses Problem.
          </p>
        </div>
        <a
          href="https://einsabuerogemeinschaft.de/preise"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-fit flex-col items-center rounded-2xl bg-brand-dark px-8 py-3 text-center font-body font-semibold text-white transition hover:brightness-110"
        >
          <span>Ihre Anfrage</span>
          <span className="text-xs font-normal text-white/80">kostenlos &amp; unverbindlich</span>
        </a>
      </div>
      <div className="min-h-[320px] sm:min-h-full">
        <img
          src="/images/mann-sofa-laptop-homeoffice.jpg"
          alt="Entspannt arbeiten mit einem personalisierten Büro im Hintergrund"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
