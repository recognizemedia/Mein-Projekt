import { useEffect } from "react";
import type { Article } from "@/data/articles";
import { rundgangLinks } from "@/data/articles";

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/70 p-4 py-10 backdrop-blur-sm animate-[fade-in_0.25s_ease-out] sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${article.slug}-modal-title`}
        onClick={event => event.stopPropagation()}
        className="relative w-full max-w-3xl animate-[modal-in_0.3s_ease-out] rounded-3xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Artikel schließen"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-ink/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-10">
          <h3
            id={`${article.slug}-modal-title`}
            className="pr-10 font-headline text-3xl font-bold text-brand-dark sm:text-4xl"
          >
            {article.headline}
          </h3>

          <img
            src={`/images/${article.image}`}
            alt=""
            className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover"
          />

          <div className="mt-6 space-y-5 text-ink/85">
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
      </div>
    </div>
  );
}
