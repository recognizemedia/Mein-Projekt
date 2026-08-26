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

**Grundregel (verbindlich, ab dem Feedback vom 26.08.2026): Zwischen jedem Absatz und vor/nach jeder Überschrift steht immer eine Leerzeile.** Das gilt durchgängig, auch zwischen Aufzählungspunkten. Diese Leerzeile ersetzt die ursprünglich aus der Referenz-PDF entnommenen kleinteiligen Abstandswerte (5 pt, 16 pt, ...), die einzelnen Textbausteine selbst tragen keinen eigenen `before`/`after`-Abstand mehr, die komplette Abstandslogik liegt zentral in einer Stelle im Code.

**Ausnahme „Tight Group":** Manche Textblöcke gehören inhaltlich eng zusammen und sollen ohne Leerzeile untereinanderstehen, zum Beispiel mehrere kurze Hinweiszeilen direkt hintereinander, oder eine Signatur (Name/Position, dann Firma/Slogan, dann Telefon/E-Mail, dann Straße/Ort, jeweils als eigener eng gruppierter Block). Um die Welt und andere Kontexte klar zu halten:

- Vor und nach der gesamten Gruppe steht weiterhin die normale Leerzeile.
- Innerhalb der Gruppe stehen die Zeilen ohne Leerzeile direkt untereinander.

Beispiel Signatur (Standard-Fuß für alle Vertriebs-E-Mails):

```
Lieben Dank und beste Grüße

Kevin Kowsky
Geschäftsführer

Recognize You
Everything You Need

+49 176 34653744
business@recognize-media.com

Rittersbacher Straße 10
91166 Georgensgmünd
```

Allgemeiner Aufbau bleibt sonst wie zuvor:

1. Haupttitel ganz oben.
2. Untertitel/Anmerkung direkt darunter (jetzt ebenfalls mit Leerzeile getrennt).
3. Abschnittsüberschrift, nummeriert oder unnummeriert, fett.
4. Fließtext, Aufzählungspunkte, Anmerkungen darunter, jeweils durch Leerzeile getrennt.
5. Vor jeder neuen Abschnittsüberschrift ebenfalls eine Leerzeile.

## Umsetzung

Wiederverwendbares Skript unter [docx-style.js](./docx-style.js), das genau diese Formatierung produziert (Node.js, verwendet das `docx`-Paket). Bereitstellt: `title()`, `subtitle()`, `heading()` (unnummeriert), `sectionHeading(nummer, text)` (nummeriert), `subHeading()` (zweite Ebene), `bullet(text)`, `note(text)`, `para(text)`, `spoken(text)` (eingerückte wörtliche Rede), `buildDoc(children)`.

`buildDoc(children)` fügt automatisch zwischen allen aufeinanderfolgenden Elementen eine Leerzeile ein. Für eine Tight Group ein Array aus mehreren Elementen als ein Element der `children`-Liste übergeben, zum Beispiel `[para("Kevin Kowsky"), para("Geschäftsführer")]` — innerhalb dieses Arrays wird keine Leerzeile eingefügt, davor und danach schon.

Dieses Design gilt als permanenter Standard für alle künftigen Dokumente, auch projektübergreifend, nicht nur für die Vertriebsunterlagen. Bei jedem neuen Word-Dokument dieses Skript als Grundlage verwenden, nicht die bisherige Ad-hoc-Formatierung (Arial, blaue Überschriften) aus früheren Dokumenten in diesem Projekt.
