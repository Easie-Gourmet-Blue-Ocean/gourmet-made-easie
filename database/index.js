const { Pool } = require('pg');
const loginInfo = require('./config');

const db = new Pool(loginInfo);

db.query('SELECT * from base_schema.users', (err, res) => {
  console.log(err, res)
  db.end();
});

module.exports = db;