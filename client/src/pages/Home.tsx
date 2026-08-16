import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Plus,
  X,
} from "lucide-react";

const heroImage = "/images/hero.svg";
const caseImage = "/images/case-study.svg";
const processImage = "/images/process.svg";
const logoBlack = "/images/logo-black.svg";
const logoWhite = "/images/logo-white.svg";

const services = [
  {
    number: "01",
    title: "Webseiten",
    description: "Eine Website, die in Sekunden zeigt, wer Du bist und was Du kannst.",
  },
  {
    number: "02",
    title: "Google Performance",
    description: "Mehr Sichtbarkeit dort, wo Deine Kunden gerade nach Dir suchen.",
  },
  {
    number: "03",
    title: "Social Media",
    description: "Content, der zu Deiner Marke passt und im Feed auffällt.",
  },
  {
    number: "04",
    title: "Social Media Auftritt",
    description: "Ein Auftritt, der Dich auf jeder Plattform sofort erkennbar macht.",
  },
];

const processSteps = [
  ["01", "Qualifizieren", "Du beantwortest ein paar gezielte Fragen zu Deinem Unternehmen und Deinen Zielen."],
  ["02", "Konzept", "Du bekommst ein klares Konzept, abgestimmt auf Deine Marke und Deine Zielgruppe."],
  ["03", "Umsetzung", "Deine neue Website und Dein Social Media Auftritt gehen live, und Du wirst sichtbar."],
];

function BrandMark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src={onDark ? logoWhite : logoBlack} alt="" />
    </span>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
        <a href="#oben" className="brand-lockup" aria-label="Recognize You — zur Startseite" onClick={closeMenu}>
          <BrandMark onDark={!isScrolled} />
          <span>recognize<br />you</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Hauptnavigation">
          <a href="#ansatz" onClick={closeMenu}>Ansatz</a>
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#prozess" onClick={closeMenu}>Prozess</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>

        <a href="#kontakt" className="nav-cta" onClick={closeMenu}>
          Qualifizieren <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="oben" aria-labelledby="hero-heading">
        <div className="hero-image-wrap" aria-hidden="true">
          <img src={heroImage} alt="" className="hero-image" />
          <div className="hero-veil" />
        </div>
        <div className="hero-grid">
          <aside className="hero-index" aria-label="Einordnung">
            <span className="index-line" />
            <span>01 / Visibility<br />as leverage</span>
          </aside>
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light"><span /> Recognize You</p>
            <h1 id="hero-heading">Deine Marke,<br />die wächst,<br /><em>wird erkannt.</em></h1>
            <p className="hero-intro">Deine Website ist oft der erste Kontakt, den ein Kunde mit Deinem Unternehmen hat. Wirkt sie veraltet oder unklar, verlierst Du Vertrauen, bevor Du es gewinnen konntest.</p>
            <div className="hero-actions">
              <a href="#kontakt" className="button button--inverse">Qualifizieren <ArrowUpRight size={18} /></a>
              <a href="#ansatz" className="text-link text-link--light">Deine Ausgangslage ansehen <ArrowDownRight size={18} /></a>
            </div>
          </div>
          <div className="hero-meta">
            <span>Strategic visibility</span>
            <span>for ambitious business</span>
          </div>
        </div>
        <a href="#ansatz" className="scroll-cue" aria-label="Scroll to focus – zum nächsten Abschnitt scrollen">
          <span>Scroll to focus</span><ChevronDown size={16} />
        </a>
      </section>

      <section className="statement-section section-shell" id="ansatz" aria-labelledby="approach-heading">
        <aside className="section-index">
          <span>01</span>
          <span>Der Ansatz</span>
        </aside>
        <div className="statement-content">
          <p className="eyebrow"><span /> Die Ausgangslage</p>
          <h2 id="approach-heading">Warum Deine Website<br /><em>Dir Kunden kostet.</em></h2>
          <div className="statement-columns">
            <p>Die meisten Websites verschwinden im Hintergrund, noch bevor der erste Eindruck zählt. Das kostet Dich Anfragen, die nie bei Dir landen.</p>
            <p>Wirkt Deine Website veraltet oder unklar, verlässt ein Besucher die Seite, bevor er Dein Angebot versteht. Genau dieser Moment entscheidet über Deine nächste Anfrage.</p>
          </div>
          <div className="signal-orbit" aria-hidden="true">
            <span className="orbit orbit--one" />
            <span className="orbit orbit--two" />
            <span className="orbit-core" />
            <span className="orbit-label">RELEVANZ<br />IM FOKUS</span>
          </div>
        </div>
      </section>

      <section className="proof-line" aria-label="Wirkungskette">
        <span>Sichtbarkeit</span><i />
        <span>Aufmerksamkeit</span><i />
        <span>Relevanz</span><i />
        <span>Wachstum</span>
      </section>

      <section className="services-section section-shell section-shell--dark" id="leistungen" aria-labelledby="services-heading">
        <aside className="section-index section-index--light">
          <span>02</span>
          <span>Die Arbeit</span>
        </aside>
        <div className="services-content">
          <div className="services-intro">
            <p className="eyebrow eyebrow--light"><span /> Leistungen</p>
            <h2 id="services-heading">Alles, was<br /><em>Deine Marke sichtbar macht.</em></h2>
            <p>Jede Leistung macht Deine Marke klarer, relevanter und leichter wiederzuerkennen.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow"><ArrowDownRight size={21} /></span>
              </article>
            ))}
          </div>
          <div className="evidence-strip" aria-label="Messbare Wirkung">
            <div className="evidence-intro"><span>Fakten, keine Behauptungen</span><strong>6 Jahre<br />Erfahrung.</strong></div>
            <div className="evidence-item"><span>01</span><strong>Erkennung</strong><p>Deine Marke wird bewusst gesucht.</p></div>
            <div className="evidence-item"><span>02</span><strong>Nachfrage</strong><p>Interesse wird zum Gespräch.</p></div>
            <div className="evidence-item"><span>03</span><strong>Momentum</strong><p>Gute Entscheidungen werden wahrscheinlicher.</p></div>
          </div>
        </div>
      </section>

      <section className="outcome-section section-shell" aria-labelledby="outcome-heading">
        <aside className="section-index">
          <span>03</span>
          <span>Die Wirkung</span>
        </aside>
        <div className="outcome-content">
          <p className="eyebrow"><span /> Was sich für Dich ändert</p>
          <h2 id="outcome-heading">Wenn die Richtigen<br />Dich erkennen, <em>bewegt<br />sich etwas.</em></h2>
          <div className="outcome-grid">
            <div className="outcome-copy">
              <p>Mehr Sichtbarkeit erzeugt nicht automatisch Wachstum. Aber eine klare Sichtbarkeit macht Deine Relevanz lesbar und lässt gute Entscheidungen schneller entstehen.</p>
              <a href="#prozess" className="text-link">Den Weg ansehen <ArrowDownRight size={18} /></a>
            </div>
            <div className="measure-list" aria-label="Messbare Wachstumsfelder">
              <div><span>01</span><strong>Markensuche</strong><p>Wird aus unbekannt: wird gezielt gesucht.</p></div>
              <div><span>02</span><strong>Qualifizierter Traffic</strong><p>Wird aus Reichweite: wird relevante Aufmerksamkeit.</p></div>
              <div><span>03</span><strong>Inbound-Quote</strong><p>Wird aus Interesse: wird ein echtes Gespräch.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="case-heading">
        <div className="case-heading-wrap section-shell">
          <aside className="section-index section-index--light">
            <span>04</span>
            <span>In Bewegung</span>
          </aside>
          <div>
            <p className="eyebrow eyebrow--light"><span /> Wirkung wird sichtbar</p>
            <h2 id="case-heading">Klarheit macht<br /><em>Fortschritt sichtbar.</em></h2>
          </div>
        </div>
        <div className="case-card">
          <div className="case-image-wrap"><img src={caseImage} alt="Platzhalterbild, wird durch ein Referenzbild von Wendlandmarkt ersetzt" loading="lazy" decoding="async" /></div>
          <div className="case-content">
            <span className="case-kicker">Referenz / Wendlandmarkt</span>
            <h3>Ein neuer Auftritt, der online genauso stark wirkt wie vor Ort.</h3>
            <p>Der neue Auftritt von Wendlandmarkt zeigt, wie aus einer bekannten Marke vor Ort auch online ein klares, wiedererkennbares Bild wird.</p>
            <div className="case-proof"><span>1</span><p>Ein Auftritt, der online und vor Ort gleich stark wirkt.</p></div>
            <div className="case-metrics" aria-label="Messfelder einer Referenz">
              <span>REICHWEITE</span>
              <span>RESONANZ</span>
              <span>NACHFRAGE</span>
            </div>
            <a href="#kontakt" className="text-link text-link--inverse">Dein Projekt einordnen <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="prozess" aria-labelledby="process-heading">
        <aside className="section-index">
          <span>05</span>
          <span>Der Prozess</span>
        </aside>
        <div className="process-content">
          <div className="process-header">
            <div>
              <p className="eyebrow"><span /> In drei Schritten</p>
              <h2 id="process-heading">So wird aus Deiner Website<br /><em>ein Auftritt, der wirkt.</em></h2>
            </div>
            <p>Jeder Schritt baut auf dem vorherigen auf, bis Deine neue Sichtbarkeit live ist.</p>
          </div>
          <div className="process-layout">
            <div className="process-visual"><img src={processImage} alt="Platzhalterbild, wird durch ein Prozessbild ersetzt" loading="lazy" decoding="async" /></div>
            <ol className="process-list">
              {processSteps.map(([number, title, description]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <Plus size={19} strokeWidth={1.4} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="difference-section" aria-labelledby="difference-heading">
        <div className="difference-rail">RECOGNIZE YOU / DIFFERENT BY DESIGN / RECOGNIZE YOU / DIFFERENT BY DESIGN /</div>
        <div className="difference-inner">
          <p className="eyebrow eyebrow--light"><span /> Anders, weil klarer</p>
          <h2 id="difference-heading">Keine Beschäftigung<br />mit <em>Beschäftigung.</em></h2>
          <div className="difference-grid">
            <p>Es geht nicht um möglichst viel Marketing, sondern um den Moment, in dem ein Mensch versteht: <strong>Das ist relevant für mich.</strong></p>
            <p>Deshalb greifen Positionierung, Ausdruck und Aktivierung ineinander. Nicht als einzelne Leistungen, sondern als ein System für Deine Wiedererkennung und Dein Wachstum.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt" aria-labelledby="contact-heading">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content">
          <p className="eyebrow eyebrow--light"><span /> Ready to be recognized?</p>
          <h2 id="contact-heading">Dein Wachstum<br />verdient <em>Aufmerksamkeit.</em></h2>
          <p>Beginne mit einem Gespräch darüber, was Dein Unternehmen unverwechselbar und unwiderstehlich relevant machen kann.</p>
          <a href="mailto:business@recognize-media.com" className="button button--inverse">Qualifizieren <ArrowUpRight size={19} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><BrandMark onDark /><span>recognize<br />you</span></div>
        <p>Strategic visibility for ambitious business.</p>
        <div className="footer-links">
          <a href="mailto:business@recognize-media.com">business@recognize-media.com</a>
        </div>
        <div className="footer-legal"><span>© 2026 Recognize You</span><a href="/impressum.html">Impressum</a><a href="/datenschutz.html">Datenschutz</a></div>
      </footer>
    </main>
  );
}
