const express = require("express");
const app = express();

var PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Listenig to 3000");
});
