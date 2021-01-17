// Requires
const express = require("express");
const bodyParser = require("body-parser");

// Our routes
const routes = require("./routes/routes");

/* APP CONFIG */
const app = express();


// support parsing of application/json type post data and from-data
app.use(bodyParser.json());

app.use("", routes);

module.exports = app;
