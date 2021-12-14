const db = require('../../database');

const getUserById = (userId) => {
  let query = `SELECT * FROM base_schema.users WHERE user_id = $1`;
  return db.query(query, [userId]);
};

// const getUserFavorites = () => {
// };

// const getUserRecipes = () => {
// };

module.exports = {
  findUserById,
  // getUserFavorites,
  // getUserRecipes
}