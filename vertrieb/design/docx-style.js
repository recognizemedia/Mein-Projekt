// Wiederverwendbares Styling für alle Word-Dokumente von Recognize You.
// Design aus design-vorlage.md / design-referenz.pdf extrahiert (PyMuPDF-Analyse).
// Nutzung: const { title, subtitle, sectionHeading, bullet, note, para, buildDoc } = require("./docx-style.js");

const { Document, Paragraph, TextRun } = require("docx");

const FONT_TITLE = "Georgia";
const FONT_BODY = "Calibri";
const MARGIN_TWIPS = 1296; // 0.9 Zoll

function runs(text, opts = {}) {
  // Eckige Klammern [Platzhalter] werden fett dargestellt, unabhängig vom Rest des Textes.
  const parts = text.split(/(\[[^\]]+\])/g).filter((p) => p.length > 0);
  return parts.map((part) => {
    const isPlaceholder = /^\[[^\]]+\]$/.test(part);
    return new TextRun({
      text: part,
      font: opts.font || FONT_BODY,
      size: opts.size,
      bold: isPlaceholder || !!opts.bold,
      italics: !!opts.italics,
    });
  });
}

function title(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_TITLE, size: 40, bold: true })], // 20pt
    spacing: { after: 100 }, // ~5pt
  });
}

function subtitle(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT_BODY, size: 21 })], // 10.5pt
    spacing: { after: 330 }, // ~16-17pt vor der ersten Abschnittsüberschrift
  });
}

function sectionHeading(number, text) {
  return new Paragraph({
    children: [new TextRun({ text: `${number}. ${text}`, font: FONT_BODY, size: 25, bold: true })], // 12.5pt
    spacing: { before: 280, after: 110 }, // ~14pt davor, ~5pt danach
  });
}

function bullet(text) {
  return new Paragraph({
    children: [new TextRun({ text: "• ", font: FONT_BODY, size: 22 }), ...runs(text, { size: 22 })], // 11pt
    indent: { left: 106 }, // ~5pt Einzug ab der Überschrift
    spacing: { after: 40 },
  });
}

function note(text) {
  return new Paragraph({
    children: runs(text, { font: FONT_BODY, size: 19, italics: true }), // 9.5pt
    indent: { left: 300 }, // ~15pt Einzug ab der Überschrift
    spacing: { after: 110 },
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    children: runs(text, { size: 22, ...opts }), // 11pt Standard-Fließtext
    spacing: { after: 200 },
  });
}

function buildDoc(children) {
  return new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: MARGIN_TWIPS, bottom: MARGIN_TWIPS, left: MARGIN_TWIPS, right: MARGIN_TWIPS },
          },
        },
        children,
      },
    ],
  });
}

module.exports = { title, subtitle, sectionHeading, bullet, note, para, buildDoc, FONT_TITLE, FONT_BODY };
