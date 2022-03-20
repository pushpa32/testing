const express = require("express");
const app = express();
var mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectId;
const router = express.Router();
const { register, del } = require("../controls/control");
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
//router.post("/:id", del);
router.post("/:id", (req, res, next) => {
  var delete_id = req.params.id; //your id
  Student.deleteOne({ _id: delete_id })
    .then((result) => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/studentlist", (req, res) => {
  //res.sendFile("studenlist.html", { root: path });
  Student.find()
    .then((result) => {
      res.status(200).json({ Student_Info: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

/* DELETE */
router.get("/:id", (req, res, next) => {
  res.sendFile("delete.html", { root: path });
});

/*router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path });
}); */

module.exports = router;
