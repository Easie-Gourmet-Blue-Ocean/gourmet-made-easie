const { Pool } = require('pg');
const loginInfo = require('./config');

const db = new Pool(loginInfo);

module.exports = db;