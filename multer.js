// const express = require("express")
// const bodyParser = require("body-parser")
// const multer = require('multer')
// const fs = require("fs")
// const app = express()
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
const imageValidation = (extension) => {
    if (extension === "png" || extension === "jpg" || extension === "jpeg") {
        return true
    }
    return false;
}
const pdfValidation = (extension) => {
    if (extension === "pdf") {
        return true
    }
    return false;
}
const sizeValidation = (size) => {
    if (size <= 30) {
        return true
    }
    return false
}
const validate = (file) => {
    const originalName = file.originalname
    let firstname = originalName.split(".")
    const date = new Date()
    const updatedname = firstname[0] + date.getTime().toString() + "." + firstname[1]
    file.originalname = updatedname;
    const size = file.size / 1000;
    const extension = originalName.split(".")[1]
    return { size, extension, updatedname }
}
app.post('/', multer().single('dress'), (req, res) => {
    const { size, extension, updatedname } = validate(req.file)
    if (imageValidation(extension)) {
        if (sizeValidation(size)) {
            fs.writeFileSync(`./public/images/${updatedname}`, req.file.buffer)
            res.send("success")
        }
        else {
            res.send("large")
        }
    }
    else if (pdfValidation(extension) && sizeValidation(size)) {
        if (sizeValidation(size)) {
            fs.writeFileSync(`./public/pdf/${updatedname}`, req.file.buffer)
            res.send("success")
        }
        else {
            res.send("large")
        }
    }
    else {
        res.send("please upload only png or pdf files")
    }
});
app.listen(4000)