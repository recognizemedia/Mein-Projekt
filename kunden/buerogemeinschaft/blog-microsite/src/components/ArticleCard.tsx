import type { Article } from "@/data/articles";
import { rundgangLinks } from "@/data/articles";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { ref, isOpen, toggle } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      id={article.slug}
      className="scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-lg"
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`${article.slug}-content`}
        className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:gap-6 sm:p-8"
      >
        <img
          src={`/images/${article.image}`}
          alt=""
          className="h-40 w-full flex-shrink-0 rounded-2xl object-cover sm:h-28 sm:w-40"
        />
        <div className="flex-1">
          <h3 className="font-headline text-xl font-bold text-brand-dark sm:text-2xl">
            {article.headline}
          </h3>
          <p className="mt-2 font-body text-ink/70">{article.teaser}</p>
        </div>
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        id={`${article.slug}-content`}
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 border-t border-ink/10 px-6 pb-8 pt-6 font-body text-ink/85 sm:px-8">
            {article.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h4 className="mb-2 font-headline text-lg font-semibold text-brand-dark">
                    {section.heading}
                  </h4>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-relaxed">
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
      </div>
    </article>
  );
}
