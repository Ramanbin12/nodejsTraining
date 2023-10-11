// import { PDFDocument,StandardFonts,rgb } from "pdf-lib";
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib")
const fs = require("fs")
const pdfParse = require("pdf-parse")
async function creation() {
    const pdfcreator = await PDFDocument.create()
    const pdfFont = await pdfcreator.embedFont(StandardFonts.TimesRomanBoldItalic)
    const pdfPages = await pdfcreator.addPage()
    const { height } = pdfPages.getSize()
    const fontSize = 30
    pdfPages.drawText("Node js is to awesome by Raman Saini ", {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: pdfFont,
        color: rgb(0, 0.53, 0.71)
    })
    const pdfsaver = await pdfcreator.save()
    await fs.writeFileSync('modified.pdf', pdfsaver);
    // const reader = await fs.readFileSync('modified.pdf', pdfsaver)
    // console.log(reader);
    // fs.writeFileSync('./test.pdf',reader);

};
creation();
