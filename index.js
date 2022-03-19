const express = require("express");
const app = express();
//import router from "./router.js/student";
const stdRouter = require("./router.js/student");
const facultyRouter = require("./router.js/faculty");
const mongoose = require("./connection");

/* Mongoose connection eroor */
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection eroor", +err);
});
/* Mongoose connection successful */
mongoose.connection.on("connected", () => {
  console.log("Mongoose connection successful");
});

/* Middleware for routes */
app.use("/student", stdRouter);
app.use("/faculty", facultyRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "app is running",
  });
});

/* checks for wrong end points */
app.use((req, res, next) => {
  res.status(404).send("Error, No such directory");
});

//PORTS
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
