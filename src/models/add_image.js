const mongoose = require("mongoose");
const uniqid = require("uniqid");

const AddImageSchema = new mongoose.Schema({
  handle: {
    type: String,
    alias: "user's handle",
    default: uniqid(),
  },
  title: {
    type: String,
    alias: "user's image title",
    default: uniqid(),
  },
  url: {
    type: String,
    alias: "user's image url",
    default: uniqid(),
  }
});

module.exports = mongoose.model("AddImage", AddImageSchema);
