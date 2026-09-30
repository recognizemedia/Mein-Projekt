import { useState } from "react";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";

export default function ArticlesSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const openArticle = articles.find(article => article.id === openId) ?? null;

  return (
    <>
      <section id="beitraege" className="relative overflow-hidden px-6 py-24">
        <img
          src="/images/team-begruessung-buero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/96 via-brand-dark/93 to-brand/90" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="font-body text-base font-semibold text-brand-accent">
              Wissenswertes
            </span>
            <h2 className="mt-3 font-headline text-3xl font-bold text-white sm:text-4xl">
              Beiträge aus Ihrer Bürogemeinschaft
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body font-body text-white/80">
              Klicken Sie auf einen Beitrag, er öffnet sich direkt auf der
              Seite.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onOpen={() => setOpenId(article.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {openArticle && (
        <ArticleModal article={openArticle} onClose={() => setOpenId(null)} />
      )}
    </>
  );
}
