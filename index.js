"use strict";
// dotenv
require('dotenv').config()

// Libs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clr = require('clr-js');
const app = express();

// Other configs
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

// Routes instanciations

// Server init
const server = app.listen(PORT, () => {
  console.log(clr.bold(`>>> Server listen port: ${PORT} !`).blue().it())
})