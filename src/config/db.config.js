const { Pool } = require('pg');

const { ENVIRONMENT } = process.env;

// local development
const config = {
  user: ENVIRONMENT === 'REMOTE_DEV' ? process.env.REMOTE_USER : process.env.USER,
  host: ENVIRONMENT === 'REMOTE_DEV' ? process.env.REMOTE_HOST : process.env.HOST,
  database: ENVIRONMENT === 'REMOTE_DEV' ? process.env.REMOTE_DATABASE : process.env.DATABASE,
  password: ENVIRONMENT === 'REMOTE_DEV' ? process.env.REMOTE_PASSWORD : process.env.PASSWORD,
  port: ENVIRONMENT === 'REMOTE_DEV' ? process.env.REMOTE_DB_PORT : process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
};

const connection = new Pool(config);

module.exports = connection;
