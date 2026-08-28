// Wiederverwendbares Styling für alle Word-Dokumente von Recognize You.
// Design aus design-vorlage.md / design-referenz.pdf extrahiert (PyMuPDF-Analyse).
// Nutzung: const { title, subtitle, heading, sectionHeading, subHeading, bullet, note, para, spoken, buildDoc } = require("./docx-style.js");
//
// Regel (auf Kevins Wunsch): zwischen jedem Absatz und jeder Überschrift steht
// immer eine echte Leerzeile. buildDoc() fügt sie automatisch zwischen allen
// Elementen ein, die einzelnen Hilfsfunktionen tragen selbst keinen zusätzlichen
// Abstand mehr (spacing before/after auf 0), damit sich die Abstände nicht addieren.

const { Document, Paragraph, TextRun } = require("docx");

const FONT_TITLE = "Georgia";
const FONT_BODY = "Calibri";
const MARGIN_TWIPS = 1296; // 0.9 Zoll

function runs(text, opts = {}) {
  // Unterstützt zwei Auszeichnungen im Text: **fett** (Markdown-Stil, Sternchen werden entfernt)
  // und [Platzhalter] (bleibt inklusive Klammern sichtbar, immer fett).
  // opts.boldFont: optionale abweichende Schriftart nur für die fett gesetzten
  // Wörter, z. B. "Calibri Light", die mit bold:true optisch weniger dick wirkt
  // als die reguläre Schriftart in Fett.
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\])/g;
  const parts = text.split(pattern).filter((p) => p.length > 0);
  return parts.map((part) => {
    let content = part;
    let bold = !!opts.bold;
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      content = part.slice(2, -2);
      bold = true;
    } else if (/^\[[^\]]+\]$/.test(part)) {
      bold = true;
    }
    return new TextRun({
      text: content,
      font: (bold && opts.boldFont) || opts.font || FONT_BODY,
      size: opts.size,
      bold,
      italics: !!opts.italics,
    });
  });
}

// opts.spacingAfter erlaubt eine dokumentspezifische Abweichung, Standardwert
// (0) gilt unverändert für alle anderen Dokumente.
function title(text, opts = {}) {
  const { spacingAfter = 0 } = opts;
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_TITLE, size: 40, bold: true })], // 20pt
    spacing: { before: 0, after: spacingAfter },
  });
}

function subtitle(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_BODY, size: 21 })], // 10.5pt
    spacing: { before: 0, after: 0 },
  });
}

function sectionHeading(number, text) {
  return new Paragraph({
    children: [new TextRun({ text: `${number}. ${text}`, font: FONT_BODY, size: 25, bold: true })], // 12.5pt
    spacing: { before: 0, after: 0 },
  });
}

// Wie sectionHeading, aber ohne Nummerierung. Für Dokumente, deren Abschnitte
// keine Schrittfolge sind (z. B. Themenblöcke statt Checkliste).
// opts erlaubt eine dokumentspezifische Abweichung (size/bold/font), Standardwerte
// gelten unverändert für alle anderen Dokumente.
function heading(text, opts = {}) {
  const { size = 25, bold = true, font = FONT_BODY } = opts; // Standard: 12.5pt fett, Calibri
  return new Paragraph({
    children: [new TextRun({ text, font, size, bold })],
    spacing: { before: 0, after: 0 },
  });
}

// Zweite, kleinere Überschriftenebene für verschachtelte Dokumente (z. B. benannte
// Abschnitte innerhalb eines Calls). Gleiche Schriftfamilie und Schnitt wie heading(),
// nur kleiner. opts wie bei heading().
function subHeading(text, opts = {}) {
  const { size = 23, bold = true } = opts; // Standard: 11.5pt fett
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_BODY, size, bold })],
    spacing: { before: 0, after: 0 },
  });
}

// opts.spacingAfter erlaubt eine dokumentspezifische Abweichung (z. B. ein
// kleiner Abstand statt der vollen Leerzeile zwischen Stichpunkten),
// Standardwert (0) gilt unverändert für alle anderen Dokumente.
function bullet(text, opts = {}) {
  const { spacingAfter = 0 } = opts;
  return new Paragraph({
    children: [new TextRun({ text: "• ", font: FONT_BODY, size: 22 }), ...runs(text, { size: 22 })], // 11pt
    indent: { left: 106 }, // ~5pt Einzug ab der Überschrift
    spacing: { before: 0, after: spacingAfter },
  });
}

// opts erlaubt eine dokumentspezifische Abweichung (size, boldFont), Standardwert
// gilt unverändert für alle anderen Dokumente.
function note(text, opts = {}) {
  const { size = 19, boldFont } = opts; // Standard: 9.5pt
  return new Paragraph({
    children: runs(text, { font: FONT_BODY, size, italics: true, boldFont }),
    indent: { left: 300 }, // ~15pt Einzug ab der Überschrift
    spacing: { before: 0, after: 0 },
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    children: runs(text, { size: 22, ...opts }), // 11pt Standard-Fließtext
    spacing: { before: 0, after: 0 },
  });
}

// Gesprochene Zeilen (Telefonskripte): eingerückt wie bullet(), aber ohne Aufzählungspunkt.
// opts erlaubt eine dokumentspezifische Abweichung (size, boldFont), Standardwert
// gilt unverändert für alle anderen Dokumente.
function spoken(text, opts = {}) {
  const { size = 22, boldFont } = opts; // Standard: 11pt
  return new Paragraph({
    children: runs(text, { size, boldFont }),
    indent: { left: 106 },
    spacing: { before: 0, after: 0 },
  });
}

// Echte leere Zeile, wird von buildDoc() automatisch zwischen alle Elemente gesetzt.
function blankLine() {
  return new Paragraph({
    children: [new TextRun({ text: "", font: FONT_BODY, size: 22 })],
    spacing: { before: 0, after: 0 },
  });
}

// buildDoc(children): children ist normalerweise eine flache Liste von Absätzen,
// zwischen die automatisch eine Leerzeile gesetzt wird. Ein Element darf aber auch
// selbst ein Array sein ("enge Gruppe"), z. B. [note("A"), note("B"), note("C")].
// Innerhalb dieser Gruppe wird keine Leerzeile eingefügt, davor und danach schon.
function buildDoc(children) {
  const withBlankLines = [];
  children.forEach((child, i) => {
    const items = Array.isArray(child) ? child : [child];
    items.forEach((item) => withBlankLines.push(item));
    if (i < children.length - 1) {
      withBlankLines.push(blankLine());
    }
  });

  return new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: MARGIN_TWIPS, bottom: MARGIN_TWIPS, left: MARGIN_TWIPS, right: MARGIN_TWIPS },
          },
        },
        children: withBlankLines,
      },
    ],
  });
}

module.exports = {
  title, subtitle, heading, sectionHeading, subHeading, bullet, note, para, spoken, buildDoc,
  FONT_TITLE, FONT_BODY,
};
