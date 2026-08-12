import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="notfound">
      <span className="eyebrow"><span /> 404</span>
      <h1>Diese Seite<br />gibt es nicht.</h1>
      <p>Der Link ist entweder veraltet oder falsch geschrieben.</p>
      <a href="/" className="button button--citron">
        Zur Startseite <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
