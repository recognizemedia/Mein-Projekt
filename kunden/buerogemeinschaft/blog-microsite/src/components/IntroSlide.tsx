export default function IntroSlide() {
  return (
    <section id="slide-2" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:grid-cols-2">
      <div className="order-2 sm:order-1">
        <span className="font-body text-sm font-semibold tracking-[0.15em] text-brand uppercase">
          Ihr Vorteil
        </span>
        <h2 className="mt-3 font-headline text-3xl font-bold text-ink sm:text-4xl">
          So einfach fühlt sich Sparen an
        </h2>
        <p className="mt-5 font-body text-lg leading-relaxed text-ink/80">
          Sie müssen weder Möbel kaufen noch lange Verträge unterschreiben. Ein
          personalisiertes oder möbliertes Büro bringt Ihnen eine
          professionelle Adresse, ohne Ihr Budget zu belasten. Sie
          entscheiden, wie viel Raum Sie brauchen, und zahlen nur dafür.
        </p>
      </div>
      <div className="order-1 overflow-hidden rounded-3xl shadow-xl sm:order-2">
        <img
          src="/images/mann-sofa-laptop-homeoffice.jpg"
          alt="Entspannt arbeiten mit einem personalisierten Büro im Hintergrund"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
