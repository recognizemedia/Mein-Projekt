import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  return (
    <section id="beitraege" className="bg-[#F7F9FB] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="font-body text-sm font-semibold tracking-[0.15em] text-brand uppercase">
            Wissenswertes
          </span>
          <h2 className="mt-3 font-headline text-3xl font-bold text-ink sm:text-4xl">
            Beiträge aus unserer Bürogemeinschaft
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-ink/70">
            Klicken Sie auf einen Beitrag oder scrollen Sie langsam durch die
            Liste, jeder Beitrag öffnet sich an seiner Stelle und schließt
            sich wieder, sobald Sie weiterscrollen.
          </p>
        </div>

        <div className="space-y-6">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
