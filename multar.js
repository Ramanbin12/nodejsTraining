const express = require("express")
const bodyParser = require("body-parser")
const multer = require('multer')
const fs = require("fs")
const app = express()


app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const upload = multer({ dest: "" });

app.post("/", upload.single("file"), (req, res) => {
    // Stuff to be added later
    console.log(req.file);
  });

app.listen(4000)