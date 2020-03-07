const mongoose = require("mongoose");
const uniqid = require("uniqid");
var rn = require('random-number');

const AddImageSchema = new mongoose.Schema({
  handle: {
    type: String,
    alias: "user's handle",
    default: "",
    required: true,
  },
  title: {
    type: String,
    alias: "user's image title",
    default: "",
    required: true,
  },
  url: {
    type: String,
    alias: "user's image url",
    default: "",
    required: true,
  },
  votes: {
    type: Number,
    alias: "user's post value",
    default: rn({min:  0, max:  1000, integer: true}),
  },
  viewerCount: {
    type: Number,
    alias: "user viewer value",
    default: rn({min:  0, max:  50000, integer: true}),
  },
  postID: {
    type: String,
    alias: "user's post ID",
    default: uniqid(),
  },
  comments: {
    type: Array,
    alias: "user's post comments",
    default: [],
  }
});

module.exports = mongoose.model("AddImage", AddImageSchema);
