import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  onOpen: () => void;
}

export default function ArticleCard({ article, onOpen }: ArticleCardProps) {
  return (
    <button
      type="button"
      id={article.slug}
      onClick={onOpen}
      className="group relative block aspect-[4/3] w-full scroll-mt-24 overflow-hidden rounded-article shadow-lg"
    >
      <img
        src={`/images/${article.image}`}
        alt=""
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <span
        aria-hidden="true"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-dark transition group-hover:bg-brand-accent"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </span>
      <h3 className="absolute inset-x-0 bottom-0 p-5 text-left font-headline text-lg font-bold text-white sm:text-xl">
        {article.headline}
      </h3>
    </button>
  );
}
