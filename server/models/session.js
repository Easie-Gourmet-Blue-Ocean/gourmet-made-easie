const db = require('../../database');
/*
find session by hash
=> success => next
=> fail => create new session 
*/
const findSessionByHash = (hash) => {
  let query = `SELECT * FROM base_schema.sessions WHERE hash = $1`;
  return db.query(query, [hash]);
}

const createSessionWithNewHash = (hash) => {
  let query = 'INSERT INTO base_schema.sessions(hash) VALUES ($1)';
  return db.query(query, [hash]);
}

const updateSessionWithNewUserId = (hash, userId) => {
  let query = `UPDATE base_schema.sessions SET user_id = $1 WHERE hash = $2`;
  return db.query(query, [userId, hash]);
}

const deleteSessionByHash = (hash) => {
  let query = `DELETE FROM base_schema.sessions WHERE hash = $1`;
  return db.query(query, [hash]);
}

module.exports = {
  findSessionByHash,
  createSessionWithNewHash,
  updateSessionWithNewUserId,
  deleteSessionByHash
}

