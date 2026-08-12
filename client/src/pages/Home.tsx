/**
 * THE SIGNAL MONOLITH — The page uses an asymmetric editorial rhythm, porcelain and graphite contrast,
 * plus carefully rationed Signal Citron to make strategic visibility feel precise, substantial, and active.
 */
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
const logoImage = "/images/logo.svg";

const services = [
  {
    number: "01",
    title: "Sichtbarkeitsstrategie",
    description:
      "Wir schärfen Kategorie, Zielgruppe und Position – damit Ihr Unternehmen nicht nur auftaucht, sondern einordnet wird.",
  },
  {
    number: "02",
    title: "Markenidentität",
    description:
      "Wir übersetzen Ihren Wert in ein System, das nach Ihnen aussieht, klingt und im Kopf bleibt.",
  },
  {
    number: "03",
    title: "Digitale Präsenz",
    description:
      "Wir gestalten digitale Kontaktpunkte, die schneller verständlich machen, warum Sie relevant sind.",
  },
  {
    number: "04",
    title: "Wachstumsaktivierung",
    description:
      "Wir verbinden Aufmerksamkeit mit dem nächsten sinnvollen Schritt: Nachfrage, Gespräch und Entscheidung.",
  },
];

const processSteps = [
  ["01", "Erkennen", "Wir legen frei, was Ihr Unternehmen unverwechselbar macht – und was es heute noch verdeckt."],
  ["02", "Fokussieren", "Wir verdichten Position, Geschichte und Auftreten zu einem klaren Signal für die richtigen Menschen."],
  ["03", "Aktivieren", "Wir bringen dieses Signal dorthin, wo Aufmerksamkeit zu qualifizierter Nachfrage werden kann."],
  ["04", "Wachsen", "Wir betrachten Wirkung als System: beobachten, lernen, verstärken und wiedererkennbar weitergehen."],
];

function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`brand-mark ${dark ? "brand-mark--dark" : ""}`} aria-hidden="true">
      <img src={logoImage} alt="" />
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
          <BrandMark />
          <span>recognize<br />you</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Hauptnavigation">
          <a href="#ansatz" onClick={closeMenu}>Ansatz</a>
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#prozess" onClick={closeMenu}>Prozess</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>

        <a href="#kontakt" className="nav-cta" onClick={closeMenu}>
          Gespräch beginnen <ArrowUpRight size={15} strokeWidth={1.8} />
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
            <h1 id="hero-heading">Die Marken,<br />die wachsen,<br /><em>werden erkannt.</em></h1>
            <p className="hero-intro">Wir machen Unternehmen sichtbar – und übersetzen diese Sichtbarkeit in Aufmerksamkeit, Anfragen und nachhaltiges Wachstum.</p>
            <div className="hero-actions">
              <a href="#kontakt" className="button button--citron">Sichtbarkeit besprechen <ArrowUpRight size={18} /></a>
              <a href="#ansatz" className="text-link text-link--light">Wie Sichtbarkeit wirkt <ArrowDownRight size={18} /></a>
            </div>
          </div>
          <div className="hero-meta">
            <span>Strategic visibility</span>
            <span>for ambitious business</span>
          </div>
        </div>
        <a href="#ansatz" className="scroll-cue" aria-label="Zum nächsten Abschnitt scrollen">
          <span>Scroll to focus</span><ChevronDown size={16} />
        </a>
      </section>

      <section className="statement-section section-shell" id="ansatz" aria-labelledby="approach-heading">
        <aside className="section-index">
          <span>01</span>
          <span>Der Ansatz</span>
        </aside>
        <div className="statement-content">
          <p className="eyebrow"><span /> Aufmerksamkeit hat Folgen</p>
          <h2 id="approach-heading">Sichtbarkeit ist kein Ziel.<br /><em>Sie ist Ihr Hebel.</em></h2>
          <div className="statement-columns">
            <p>Erkannt zu werden verändert, was über Ihr Unternehmen gedacht, gesucht und entschieden wird. Genau deshalb ist Sichtbarkeit kein kosmetisches Marketingthema.</p>
            <p>Sie ist die Voraussetzung dafür, dass Ihre Relevanz dort ankommt, wo Geschäft entsteht: im Markt, im Kopf und im richtigen Moment.</p>
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
            <p className="eyebrow eyebrow--light"><span /> Das System dahinter</p>
            <h2 id="services-heading">Nicht mehr Output.<br /><em>Mehr Wirkung.</em></h2>
            <p>Jede Leistung ist ein Teil derselben Aufgabe: Ihr Unternehmen zu einem klareren, relevanteren und stärker nachgefragten Signal zu machen.</p>
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
            <div className="evidence-intro"><span>Evidence / not ornament</span><strong>Wirkung<br />ist lesbar.</strong></div>
            <div className="evidence-item"><span>01</span><strong>Erkennung</strong><p>Ihre Marke wird bewusst gesucht.</p></div>
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
          <p className="eyebrow"><span /> Was sich verändern kann</p>
          <h2 id="outcome-heading">Wenn die Richtigen<br />Sie erkennen, <em>bewegt<br />sich etwas.</em></h2>
          <div className="outcome-grid">
            <div className="outcome-copy">
              <p>Mehr Sichtbarkeit erzeugt nicht automatisch Wachstum. Aber eine klare Sichtbarkeit macht Ihre Relevanz lesbar – und lässt gute Entscheidungen schneller entstehen.</p>
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
          <div className="case-image-wrap"><img src={caseImage} alt="Abstrakte Papierarchitektur mit einer citronfarbenen Weglinie" /></div>
          <div className="case-content">
            <span className="case-kicker">Case Study Framework / 01</span>
            <h3>Aus einem Angebot wird eine erkennbare Kategorie.</h3>
            <p>Wir bauen jedes Projekt so auf, dass Veränderung nicht nur spürbar, sondern anhand der richtigen Signale nachvollziehbar wird.</p>
            <div className="case-proof"><span>1</span><p>Wachstumsarchitektur, die an der richtigen Stelle messbar wird.</p></div>
            <div className="case-metrics" aria-label="Messfelder einer Case Study">
              <span>REICHWEITE</span>
              <span>RESONANZ</span>
              <span>DEMAND</span>
            </div>
            <a href="#kontakt" className="text-link text-link--inverse">Ihr Projekt einordnen <ArrowUpRight size={18} /></a>
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
              <p className="eyebrow"><span /> Vom Hintergrund in den Fokus</p>
              <h2 id="process-heading">Ihr Weg zur<br /><em>starken Marke.</em></h2>
            </div>
            <p>Wir starten nicht bei einer Kampagne. Wir starten dort, wo Ihr Geschäft heute noch zu wenig erkannt wird.</p>
          </div>
          <div className="process-layout">
            <div className="process-visual"><img src={processImage} alt="Drei sich öffnende grafische Monolithe mit citronfarbenen Ebenen" /></div>
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
            <p>Wir arbeiten nicht für möglichst viel Marketing. Wir arbeiten für den Moment, in dem ein Mensch versteht: <strong>Das ist relevant für mich.</strong></p>
            <p>Darum verbinden wir Positionierung, Ausdruck und Aktivierung. Nicht als Leistungsliste – sondern als gemeinsames System für Wiedererkennung und Wachstum.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt" aria-labelledby="contact-heading">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content">
          <p className="eyebrow eyebrow--light"><span /> Ready to be recognized?</p>
          <h2 id="contact-heading">Ihr Wachstum<br />verdient <em>Aufmerksamkeit.</em></h2>
          <p>Beginnen Sie mit einem Gespräch darüber, was Ihr Unternehmen unverwechselbar – und unwiderstehlich relevant – machen kann.</p>
          <a href="mailto:business@recognize-media.com" className="button button--citron">Gespräch beginnen <ArrowUpRight size={19} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><BrandMark dark /><span>recognize<br />you</span></div>
        <p>Strategic visibility for ambitious business.</p>
        <div className="footer-links">
          <a href="mailto:business@recognize-media.com">business@recognize-media.com</a>
        </div>
        <div className="footer-legal"><span>© 2026 Recognize You</span><a href="/impressum.html">Impressum</a><a href="/datenschutz.html">Datenschutz</a></div>
      </footer>
    </main>
  );
}
