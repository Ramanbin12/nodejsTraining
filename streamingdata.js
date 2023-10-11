const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const app = express();
const port = 8000;
app.use(status());
let previousData = "";
app.get("/", (req, res) => {
  const data = fs.readFileSync("./public/input.txt", "utf-8");
  previousData = data;
  let finalData = previousData;
  fs.watchFile("./public/input.txt", (curr, prev) => {
    if (curr.mtime > prev.mtime) {
      const newData = fs.readFileSync("./public/input.txt", "utf-8");
      previousData = newData;
      finalData = newData;
    }
  });
  fs.writeFileSync("./public/output.txt", finalData);
});
app.listen(port, () => {
    console.log("Listening on port", port);
  });