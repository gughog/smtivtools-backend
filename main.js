"use strict";
// dotenv
require('dotenv').config()

// Libs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clr = require('clr-js');
const app = express();
const connection = require('./src/config/db.config');
const { logger } = require('./src/middlewares/index');

// Other configs
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

// Routes instanciations
const init_routes = require('./src/routes/index.routes')(app, connection)

// Server init
const server = app.listen(PORT, () => {
  console.log(clr.bold(`>>> Server listen port: ${PORT} !`).blue().it())
})