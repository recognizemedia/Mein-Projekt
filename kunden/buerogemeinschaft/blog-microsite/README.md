# Bürogemeinschaft Blog (Microsite)

Eigenständiger Onepager für die Domain `1a-buerogemeinschaft.info`. Ausschließlich Blog-Inhalte der Bürogemeinschaft, technisch und redaktionell komplett getrennt vom Recognize-Media-Projekt in diesem Repository.

## Aufbau der Seite

1. Header/Hero mit Slogan
2. Zweite Sektion mit vertiefendem Text zum Slogan
3. Artikel-Bereich: 10 Beiträge, die sich beim Scrollen (oder per Klick) an ihrer Position aufklappen und beim Weiterscrollen wieder schließen (siehe `src/hooks/useScrollReveal.ts` und `src/components/ArticleCard.tsx`)
4. Bereich vor dem Footer mit Call-to-Action zur Preisseite
5. Footer mit Kontakt und rechtlichen Links

## Technik

- Vite + React + TypeScript, Tailwind CSS v4 (eigenständiges Projekt, eigenes `package.json`, nicht Teil des Root-Projekts)
- Artikel-Inhalte liegen strukturiert in `src/data/articles.ts`
- Bilder liegen in `public/images/`, Zuordnung in `bilder-zuordnung.md`
- SEO/AEO: Meta-Tags, Open-Graph-Daten und JSON-LD (Organisation je Standort plus Blog-Übersicht) sind statisch in `index.html` hinterlegt, dazu `public/robots.txt` und `public/sitemap.xml`

## Lokal starten

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Das Ergebnis liegt in `dist/`.

## Deployment (Netlify)

Dieses Verzeichnis ist bewusst eigenständig, damit es als eigene Netlify-Site deploybar ist, unabhängig vom Root-Projekt:

1. Neue Netlify-Site anlegen, verbunden mit diesem Repository
2. Base directory: `kunden/buerogemeinschaft/blog-microsite`
3. Build command und Publish directory werden aus der lokalen `netlify.toml` übernommen (`npm run build` / `dist`)
4. Nach dem ersten Deploy die Domain `1a-buerogemeinschaft.info` bei STRATO auf die Netlify-Site zeigen lassen

## Wichtige Redaktionsregeln

- Immer "Bürogemeinschaft" schreiben, nie "1A Bürogemeinschaft"
- Immer "personalisiertes Büro" schreiben, nie "virtuelles Büro" (Begriff wurde aus Sicherheitsgründen geändert, die Leistung bleibt dieselbe)
- Alle Textregeln aus der [Wissensdatenbank](../README.md) und der [CLAUDE.md](../../../CLAUDE.md) gelten auch hier
