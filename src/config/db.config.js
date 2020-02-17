const Pool = require('pg').Pool;

// local development
const config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
}

// remote
const remote_config = {
  user: process.env.REMOTE_USER,
  host: process.env.REMOTE_HOST,
  database: process.env.REMOTE_DATABASE,
  password: process.env.REMOTE_PASSWORD,
  port: process.env.REMOTE_DB_PORT
}

let connection = undefined;

if (process.env.ENVIRONMENT === 'REMOTE_DEV') {
  connection = new Pool(remote_config);
} else {
  connection = new Pool(config);
}

module.exports = connection;