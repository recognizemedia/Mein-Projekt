import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  return (
    <section id="beitraege" className="bg-brand-dark px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="font-body text-sm font-semibold tracking-[0.15em] text-brand-accent uppercase">
            Wissenswertes
          </span>
          <h2 className="mt-3 font-headline text-3xl font-bold text-white sm:text-4xl">
            Beiträge aus unserer Bürogemeinschaft
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body font-body text-white/80">
            Klicken Sie auf einen Beitrag, er öffnet sich direkt an seiner
            Stelle auf der Seite.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
