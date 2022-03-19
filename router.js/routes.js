const express = require("express");
const app = express();
const router = express.Router();
const register = require("../controls/control");
const Student = require("../model/student");

const path = "./public";
/* 
    ROUTER:
      Register
      Login
 */
router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: path });
});
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: path });
});

router.post("/register", register);
router.get("/studentlist", (req, res) => {
  Student.find()
    .then((result) => {
      res.status(200).json({ Student_Info: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path });
}); */

module.exports = router;
