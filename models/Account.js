const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Account = new Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

module.exports = mongoose.model("Account", Account);
