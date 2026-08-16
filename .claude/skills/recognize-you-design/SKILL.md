---
name: recognize-you-design
description: Design system rules for the Recognize You website (colors, typography, spacing, component patterns). Use whenever building, styling, or editing any part of the Recognize You site (client/src, client/public) to keep every change consistent with the established Brand Kit instead of generic defaults.
---

# Recognize You — Design System

Diese Regeln gelten für alles im `client/`-Verzeichnis. Sie stammen aus dem offiziellen Brand Kit (Stand 08/2026) und aus den bereits umgesetzten Konventionen in `client/src/index.css`.

## Farben

Nur diese fünf Töne verwenden, keine neuen Hex-Werte erfinden:

| Token | Hex | Verwendung |
|---|---|---|
| `--ink` | `#111111` | Grundton, dunkle Flächen, Fließtext |
| `--papier` | `#ffffff` | Gegenfläche, helle Karten |
| `--nebel` | `#f2f2f2` | Ruhige Seiten-Hintergründe |
| `--rauch` | `#e0e0e0` | Linien, Trenner, Ränder |
| `--grau` | `#7a7a7a` | Sekundärer/gedämpfter Text |

Es gibt aktuell **keine Akzentfarbe** ("Akzent offen" laut Brand Kit). Wirkung entsteht ausschließlich über Kontrast (Ink auf Papier/Nebel oder umgekehrt), nicht über Farbe. Erst wenn der Nutzer explizit eine Akzentfarbe freigibt, darf eine hinzukommen, und dann nur für Handlungselemente (Buttons, Fokuspunkte).

## Typografie

Einzige Schrift: **Roboto** (lokal gehostet unter `/fonts/roboto-variable.woff2`, Gewichte 400–700). Kein Mischen mit anderen Schriften.

Größensystem (an den Brand-Kit-Vorgaben orientiert, gilt sinngemäß, nicht wortwörtlich als Fixmaß, da die Seite mit fluiden `clamp()`-Größen arbeitet):

| Rolle | Richtwert | Einsatz |
|---|---|---|
| Display | ~64–136px, fluid | Hero-Headline |
| H1/H2 | ~48–109px, fluid | Abschnittsüberschriften |
| H3 | ~20–32px | Karten, Unterüberschriften |
| Fließtext | 13–18px | Absätze |
| Klein/Label | 8–11px, Versalien | Eyebrows, Section-Index, Tags |

Überschriften: `font-weight: 700`, meist mit leicht negativem `letter-spacing` (ca. `-0.01em` bis `-0.03em`). Kein `font-weight` über 700 verwenden, die Roboto-Variable-Datei deckt nur 400–700 ab.

## Komponenten-Muster

- **Buttons**: Basisklasse `.button` plus genau eine Kontext-Variante:
  - `.button--primary` = Ink-Hintergrund/Papier-Text, **nur auf hellen Flächen**
  - `.button--inverse` = Papier-Hintergrund/Ink-Text, **nur auf dunklen Flächen**
  Nie einen Button auf einem Hintergrund der gleichen Tonalität platzieren (Kontrastfehler).
- **Text-Links**: Unterstrichen (`border-bottom: 1px solid currentColor`), mit Pfeil-Icon (`ArrowUpRight`/`ArrowDownRight` aus `lucide-react`), Farbe über `currentColor` vererbt, nicht hart gesetzt.
- **Eyebrows**: Kleiner Punkt (`<span>`, `border-radius: 50%`) plus Versal-Label in Klein-Schriftgröße vor jeder Abschnittsüberschrift.
- **Abschnitts-Rhythmus**: Helle und dunkle Sections wechseln sich ab (`.section-shell` hell, `.section-shell--dark` dunkel), um Struktur ohne Farbe zu erzeugen.
- **Logo**: Immer als Datei einbinden (`logo-black.svg` auf hellem, `logo-white.svg` auf dunklem Grund), nie neu nachzeichnen oder einfärben.

## Sprache

Für alle sichtbaren Texte gelten zusätzlich die Regeln aus der `CLAUDE.md` im Projekt-Root (Du-Anrede, kein „wir", keine Bindestriche, keine Ausrufezeichen). Impressum und Datenschutz sind davon ausgenommen und bleiben in der Sie-Form.

## Grundsatz

Kein generisches KI-Standarddesign (Standard-Tailwind-Blau, willkürliche Schatten/Verläufe, Emoji als Deko, überall abgerundete Ecken). Jede neue Sektion soll aussehen, als wäre sie vom selben Designer wie der Rest der Seite gebaut worden, nicht wie ein austauschbarer Baukasten-Block.
