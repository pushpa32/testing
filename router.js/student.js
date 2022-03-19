const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "this is student GET",
  });
});

router.post("/", (req, res, next) => {
  /* res.send("This is student POST"); */
  console.log(req.body);
});

module.exports = router;
