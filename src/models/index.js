const mongoose = require("mongoose");
const AddImage = require("./add_image");

if (process.env.NODE_ENV === "development") {
  DB_URI = process.env.MONGO_URI_ARTE;
} else {
  DB_URI = process.env.MONGO_URI_HACKMERCED;
}

const db = () => {
  return mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

var models = {AddImage};
module.exports = { db, models };
