// import { PDFDocument,StandardFonts,rgb } from "pdf-lib";
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib")
const axios=require("axios")
const fs = require("fs")
const pdfParse = require("pdf-parse")

const data=async()=>{
   const response= await axios.get("https://jsonplaceholder.typicode.com/albums/1")
   console.log(response.data)
   return response.data
}
async function creation() {
    const pdfcreator = await PDFDocument.create()
    const pdfFont = await pdfcreator.embedFont(StandardFonts.TimesRomanBoldItalic)
    const pdfPages = await pdfcreator.addPage()
    const { height } = pdfPages.getSize()
    const margin=50
    const width=500
    const fontSize = 10
    const postdata=await data()
    console.log("d",JSON.stringify(postdata))
    pdfPages.drawText(JSON.stringify(postdata), {
        x: 100,
        y: height - 4 * fontSize,
        size: fontSize,
        // font: pdfFont,
        color: rgb(0, 0.53, 0.71)
    })
    const pdfsaver = await pdfcreator.save()
    await fs.writeFileSync('api.pdf', pdfsaver);
};
creation();
