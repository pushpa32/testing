const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Faculty GET");
});

router.post("/", (req, res, next) => {
  res.send("Faculty POST");
});

module.exports = router;
