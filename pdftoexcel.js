const fs = require("fs");
const pdftoexcel=require('pdf-to-excel')
try{
    pdftoexcel.genXlsx('sample.pdf','pdftoexcel.xlsx')
}
catch(err){
    console.log(error)
}


