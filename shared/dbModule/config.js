const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'bakhtiyar',
  host: 'localhost',
  database: 'computer_machine',
  password: 'password',
  port: 5432,
});

module.exports = pool;