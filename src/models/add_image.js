const mongoose = require("mongoose");

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
    default: 0,
  },
  viewerCount: {
    type: Number,
    alias: "user viewer value",
    default: 0,
  },
  postID: {
    type: String,
    alias: "user's post ID",
    default: "",
  },
  comments: {
    type: Array,
    alias: "user's post comments",
    default: [],
  },
  demographic:{
    type: Array,
    alias: "user's viewer demographic",
    default: [],
  },
  add:{
    type: Boolean,
    alias: "updoot",
    default: false,
  }
});

module.exports = mongoose.model("AddImage", AddImageSchema);
