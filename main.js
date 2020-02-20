
// dotenv
require('dotenv').config();

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes instanciations
const initRoutes = require('./src/routes/index.routes');

initRoutes(app, connection);

// Server init
app.listen(PORT, () => {
  console.log(clr.bold(`>>> Server listen port: ${PORT} !`).blue().it());
});
