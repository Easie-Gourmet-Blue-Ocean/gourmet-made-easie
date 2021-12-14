const db = require('../../database');

const getUserById = (userId) => {
  let query = `SELECT * FROM base_schema.users WHERE user_id = $1`;
  return db.query(query, [userId]);
};

const getUserByEmail = (email) => {

};

const createUser = (username, email, password) => {

};

// const getUserFavorites = () => {
// };

// const getUserRecipes = () => {
// };

module.exports = {
  getUserById,
  createUser,
  getUserByEmail
  // getUserFavorites,
  // getUserRecipes
}