const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Transaction = new Schema({
  date: {
    type: Date,
  },
  name: {
    type: String,
  },
  notes: {
    type: String,
  },
  categories: {
    type: [String],
  },
  amount: {
    type: Number,
  },
});

module.exports = mongoose.model("Transaction", Transaction);
