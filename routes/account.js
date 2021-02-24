var Account = require("../models/Account");
var express = require("express");
var router = express.Router();

router.route("/").get(function (req, res) {
  Account.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Account.findById(id, function (err, todo) {
    res.json(todo);
  });
});

router.route("/:id").delete(function (req, res) {
  let id = req.params.id;
  Account.findByIdAndRemove(id);
});

router.route("/add").post(function (req, res) {
  let todo = new Account(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ transaction: "account added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new account failed");
    });
});

module.exports = router;
