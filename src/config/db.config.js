const Pool = require('pg').Pool;
const config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
}

const connect = new Pool(config);

module.exports = connect;