"use strict";

var express = require("express");

var morgan = require("morgan");

var app = express(); // Middlewares

app.use(morgan("dev"));
app.use(express.json());
module.exports = app;