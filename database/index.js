const { Pool } = require('pg');
const loginInfo = require('./config');

const db = new Pool(loginInfo);

db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
    db.end()
  } else {
    console.log(res.rows[0]);
  }
});


module.exports = db;