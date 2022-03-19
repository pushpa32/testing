const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Wrong");
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Listening to %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

/* app.listen(PORT, () => {
  console.log("Listenig to 3000");
}); */
