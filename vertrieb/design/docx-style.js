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
      font: opts.font || FONT_BODY,
      size: opts.size,
      bold,
      italics: !!opts.italics,
    });
  });
}

function title(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_TITLE, size: 40, bold: true })], // 20pt
    spacing: { before: 0, after: 0 },
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
function heading(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_BODY, size: 25, bold: true })], // 12.5pt
    spacing: { before: 0, after: 0 },
  });
}

// Zweite, kleinere Überschriftenebene für verschachtelte Dokumente (z. B. benannte
// Abschnitte innerhalb eines Calls). Gleiche Schriftfamilie und Schnitt wie heading(),
// nur kleiner.
function subHeading(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_BODY, size: 23, bold: true })], // 11.5pt
    spacing: { before: 0, after: 0 },
  });
}

function bullet(text) {
  return new Paragraph({
    children: [new TextRun({ text: "• ", font: FONT_BODY, size: 22 }), ...runs(text, { size: 22 })], // 11pt
    indent: { left: 106 }, // ~5pt Einzug ab der Überschrift
    spacing: { before: 0, after: 0 },
  });
}

function note(text) {
  return new Paragraph({
    children: runs(text, { font: FONT_BODY, size: 19, italics: true }), // 9.5pt
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
function spoken(text) {
  return new Paragraph({
    children: runs(text, { size: 22 }), // 11pt
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

function buildDoc(children) {
  const withBlankLines = [];
  children.forEach((child, i) => {
    withBlankLines.push(child);
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
