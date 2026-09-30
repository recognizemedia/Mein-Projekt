const steps = [
  {
    title: "Ihre Anfrage stellen",
    image: "frau-cafe-notizbuch.jpg",
    text: "Stellen Sie Ihre Anfrage auf unserer Website. Wir nehmen so schnell wie möglich Kontakt mit Ihnen auf.",
  },
  {
    title: "Wunschbüro aussuchen",
    image: "team-begruessung-buero.jpg",
    text: "Sobald wir uns in Verbindung gesetzt haben, erstellen wir Ihren Mietvertrag und senden Ihnen alles zu.",
  },
  {
    title: "Langfristig profitieren",
    image: "mann-homeoffice-kaffee.jpg",
    text: "Profitieren Sie durch Ihre neue repräsentative Geschäftsadresse und Ihren attraktiven neuen Firmensitz.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-brand-dark sm:text-4xl">
            Bereit für Ihren repräsentativen Firmensitz?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body font-body leading-[1.3em] text-ink/70">
            Vergleichen Sie die Pakete für Ihr personalisiertes oder
            möbliertes Büro in Monheim am Rhein und Leverkusen und finden Sie
            die passende Lösung für Ihr Unternehmen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(step => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-process bg-gradient-to-br from-brand to-brand-dark p-5 text-white shadow-lg"
            >
              <h3 className="text-center font-headline text-xl font-bold">
                {step.title}
              </h3>
              <img
                src={`/images/${step.image}`}
                alt=""
                className="aspect-[4/3] w-full rounded-process object-cover"
              />
              <p className="text-body text-center font-body text-white/90">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://einsabuerogemeinschaft.de/preise"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-button bg-brand-dark px-8 py-3 font-body font-semibold text-white transition hover:brightness-110"
          >
            Anfrage Stellen
          </a>
        </div>
      </div>
    </section>
  );
}
