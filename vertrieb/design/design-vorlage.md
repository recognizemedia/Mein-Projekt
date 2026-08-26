# Recognize You – Dokumenten-Design

Referenz: [design-referenz.pdf](./design-referenz.pdf) (von Kevin bereitgestellt). Gilt ab sofort für alle Word-Dokumente und PDFs, die für Kevin erstellt werden, damit alle Dokumente einen einheitlichen Look haben.

Aus der Referenzdatei per PDF-Analyse (PyMuPDF, exakte Font-, Größen- und Positionsangaben) extrahiert.

## Seite

- Format: A4 (596 x 842 pt).
- Ränder: 0,9 Zoll (1296 Twips) auf allen Seiten.
- Rein schwarz-weiß, keine Akzentfarbe. Hierarchie entsteht ausschließlich über Schriftart, Schnitt und Größe, nicht über Farbe.

## Schriftrollen

| Element | Schriftart | Größe | Schnitt | Beispiel |
|---|---|---|---|---|
| Haupttitel | Georgia | 20 pt | fett | „Smush Konfiguration" |
| Untertitel (direkt unter dem Titel) | Calibri | 10,5 pt | regulär | „Checkliste für Ladezeit & Scroll-Performance ..." |
| Abschnittsüberschrift (nummeriert) | Calibri | 12,5 pt | fett | „1. Dashboard – Media Library" |
| Fließtext / Aufzählungspunkte | Calibri | 11 pt | regulär | „• Kompression: Super (2x) auswählen." |
| Anmerkung / Zusatzhinweis | Calibri | 9,5 pt | kursiv | „Gilt nur für neue Uploads. ..." |

Alle Textfarben Schwarz (RGB 0,0,0).

## Aufbau und Abstände

1. Haupttitel ganz oben.
2. Untertitel direkt darunter, kleiner Abstand (ca. 5 pt).
3. Etwas größerer Abstand vor der ersten Abschnittsüberschrift (ca. 16 bis 17 pt).
4. Abschnittsüberschrift, nummeriert („1.", „2." ...), fett.
5. Direkt darunter die Aufzählungspunkte mit „•", leicht eingerückt (ca. 5 pt von der Überschrift).
6. Anmerkungen/Zusatzhinweise noch etwas weiter eingerückt (ca. 15 pt von der Überschrift), kursiv, kleiner.
7. Vor jeder neuen Abschnittsüberschrift wieder der größere Abstand (ca. 13 bis 14 pt zusätzlich zur normalen Zeilenhöhe).

## Umsetzung

Wiederverwendbares Skript unter [docx-style.js](./docx-style.js), das genau diese Formatierung produziert (Node.js, verwendet das `docx`-Paket). Bereitstellt: `title()`, `subtitle()`, `sectionHeading(nummer, text)`, `bullet(text)`, `note(text)`, `buildDoc(children)`. Bei jedem neuen Word-Dokument dieses Skript als Grundlage verwenden, nicht die bisherige Ad-hoc-Formatierung (Arial, blaue Überschriften) aus früheren Dokumenten in diesem Projekt.
