const fs=require("fs")
const pdfParse=require("pdf-parse")
const pdfreader=fs.readFileSync("./sample.pdf")
console.log(pdfreader)
let count=0;
pdfParse(pdfreader).then((data)=>{
    let words=data.text.split(" ")
    words.forEach((word)=>{
        if(word==='And'){
            count++
        }
    }
    )
    console.log(count)

}).catch((err)=>{
    console.log(err)
})
