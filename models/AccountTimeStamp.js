const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AccountTimeStamp = new Schema({
  name: {
    type: String,
  },
  month: {
    type: Number,
  },
  year: {
    type: Number,
  },
  startingBalance: {
    type: Number,
  },
  endingBalance: {
    type: Number,
  },
});

module.exports = mongoose.model("AccountTimeStamp", AccountTimeStamp);
