const express = require("express");
const helmet = require('helmet')
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const chalk = require("chalk"); // require chalk module to give colors to console text
require("dotenv").config();

const routes = require("./src/routes");
const db = require("./src/models").db;

const app = express();
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

app.use(helmet())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// All Api routes
app.use(
  "/api",
  routes.add_image
);

// Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));

// Handles any requests that don't match the ones above
app.get('*', (request, response) =>{
    response.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Connect to MongoDB then open port on defined port in .env
mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection is open")
  //console.log(connected("Mongoose default connection is open to", /(?=hack)(.*?)(?=\s*\?)/.exec(DB_URI)[0]));
});

db().then(async () => {
  mongoose.connection.on("error", function(err) {
    console.log(
      error("Mongoose default connection has occurred " + err + " error")
    );
  });

  mongoose.connection.on("disconnected", function() {
    console.log(disconnected("Mongoose default connection is disconnected"));
  });

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log(
        termination(
          "Mongoose default connection is disconnected due to application termination"
        )
      );
      process.exit(0);
    });
  });

  app.listen(process.env.PORT, () =>
    console.log(chalk.bold.white(`Example app listening on port ${process.env.PORT}!`))
  );
});
