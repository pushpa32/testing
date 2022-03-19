const express = require("express");
const app = express();
//import router from "./router.js/student";
const stdRouter = require("./router.js/student");

app.use("/student", stdRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "app is running",
  });
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
