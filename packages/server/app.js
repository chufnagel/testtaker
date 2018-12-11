const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");

const app = expess();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;
