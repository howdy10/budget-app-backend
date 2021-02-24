var Transaction = require("../models/Transaction");
var express = require("express");
var router = express.Router();

router.route("/").get(function (req, res) {
  Transaction.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Transaction.findById(id, function (err, todo) {
    res.json(todo);
  });
});

router.route("/update/:id").post(function (req, res) {
  Transaction.findById(req.params.id, function (err, todo) {
    if (!todo) res.status(404).send("data is not found");
    else todo.date = req.body.date;
    todo.name = req.body.name;
    todo.notes = req.body.notes;
    todo.categories = req.body.categories;
    todo.amount = req.body.amount;

    todo
      .save()
      .then((todo) => {
        res.json("Transaction updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

router.route("/add").post(function (req, res) {
  let todo = new Transaction(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ transaction: "transaction added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new transaction failed");
    });
});

module.exports = router;
