import type { Article } from "@/data/articles";
import { rundgangLinks } from "@/data/articles";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { ref, isOpen, toggle } = useScrollReveal<HTMLElement>();

  return (
    <>
      <article ref={ref} id={article.slug} className="scroll-mt-24">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={`${article.slug}-content`}
          className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={`/images/${article.image}`}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <span
            aria-hidden="true"
            className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-dark transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
          <h3 className="absolute inset-x-0 bottom-0 p-5 text-left font-headline text-lg font-bold text-white sm:text-xl">
            {article.headline}
          </h3>
        </button>
      </article>

      {isOpen && (
        <div
          id={`${article.slug}-content`}
          className="col-span-full animate-[fade-in-up_0.4s_ease-out]"
        >
          <div className="space-y-5 rounded-3xl bg-white p-6 text-ink/85 shadow-xl sm:p-10">
            <p className="text-body font-body text-ink/70">{article.teaser}</p>

            {article.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h4 className="mb-2 font-headline text-lg font-semibold text-brand-dark">
                    {section.heading}
                  </h4>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-body font-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {article.rundgang && (
              <div className="flex flex-wrap gap-3 pt-2">
                {(article.rundgang === "both"
                  ? (["monheim", "leverkusen"] as const)
                  : [article.rundgang]
                ).map(key => (
                  <a
                    key={key}
                    href={rundgangLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
                  >
                    Virtueller Rundgang {key === "monheim" ? "Monheim am Rhein" : "Leverkusen"}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
