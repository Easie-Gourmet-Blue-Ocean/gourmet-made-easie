const db = require('../../database');
const { createRandom256BitInHex } = require('../lib/hashUtils')
/*
find session by hash
=> success => next
=> fail => create new session 
*/
const findSessionByHash = (hash) => {
  let query = `SELECT * FROM base_schema.sessions WHERE hash = $1`;
  return db.query(query, [hash]);
}

const createSessionWithNewHash = () => {
  let query = 'INSERT INTO base_schema.sessions(hash) VALUES ($1) RETURNING hash';
  let hash = createRandom256BitInHex();
  return db.query(query, [hash]);
}

const updateSessionByHashWithNewUserId = (hash, userId) => {
  let query = `UPDATE base_schema.sessions SET user_id = $1 WHERE hash = $2 RETURNING hash`;
  return db.query(query, [userId, hash]);
}

const deleteSessionByHash = (hash) => {
  let query = `DELETE FROM base_schema.sessions WHERE hash = $1`;
  return db.query(query, [hash]);
}

module.exports = {
  findSessionByHash,
  createSessionWithNewHash,
  updateSessionByHashWithNewUserId,
  deleteSessionByHash
}

