const res = require("express/lib/response");
const mongoose = require("mongoose");
const student = require("../model/student");
const Student = require("../model/student");

/* REGISTRATION */
const register = (req, res) => {
  console.log(req.body);

  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });

  student
    .save()
    .then((result) => {
      console.log("result");
      res.send("saved");
    })
    .catch((err) => {
      console.log(err);
      res.send("Error");
    });
};

module.exports = register;
