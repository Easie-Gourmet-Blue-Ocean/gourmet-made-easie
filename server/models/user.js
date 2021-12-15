const db = require('../../database');
const { createRandom256BitInHex, createSHA256Hash } = require('../lib/hashUtils');

const getUserPrivateInfoById = (userId) => {
  /* Sensitive query: Internal*/
  let query = `
  SELECT username, email, id as user_id, password, salt, favorites
  FROM base_schema.users WHERE id = $1
  `;
  return db.query(query, [userId]);
};

const getUserPublicInfoById = (userId) => {
  let query = `SELECT username, email, id as user_id FROM base_schema.users WHERE id = $1`;
  return db.query(query, [userId]);
};

const getUserPublicInfoBySession = (hash) => {
  let query = `
  SELECT
  user_id, username, email
  FROM base_schema.sessions, base_schema.users WHERE sessions.user_id = users.id AND hash = $1
  `;

  return db.query(query, [hash]);
};

const getUserPrivateInfoByEmail = (email) => {
  /* Sensitive query: Internal*/
  let query = `SELECT * FROM base_schema.users WHERE email = $1`;
  return db.query(query, [email]);
};

const createUser = (username, email, password) => {
  let query = `INSERT INTO base_schema.users(username, email, password, salt)
               VALUES ($1, $2, $3, $4)`;
  let salt = createRandom256BitInHex();
  let hashedPassword = createSHA256Hash(password, salt);

  return db.query(query, [username, email, hashedPassword, salt]);
};

const getUserFavorites = (userId) => {
  /* need to catch error if favorites is empty*/
  let query = `
SELECT recipe_name, username, description, photo, fav_recipe_id as recipe_id
  FROM (
    SELECT * 
      FROM(SELECT DISTINCT unnest AS fav_recipe_id 
        FROM UNNEST(ARRAY(SELECT users.favorites FROM base_schema.users WHERE id = $1))) AS t1, (
          SELECT * FROM base_schema.recipes) AS t2
          WHERE t1.fav_recipe_id = t2.id
        ) AS t3, 
        (SELECT id, username FROM base_schema.users) as t4
      WHERE t3.user_id = t4.id
  `;

  return db.query(query, [userId]);

};

const getUserRecipes = (userId) => {
  let query = `
  select
  recipe_name, username, description, photo, t2.id as recipe_id
  from (SELECT * FROM base_schema.users WHERE id = $1) as t1, base_schema.recipes as t2
  WHERE t1.id = t2.user_id
  `;
  return db.query(query, [userId])
};

const addToUserFavorites = (userId, recipeId) => {
  let query = `
  UPDATE base_schema.users
	  SET favorites=array_append(favorites, $1)
	  WHERE id = $2
  `;
  return db.query(query, [recipeId, userId])
};

const removeRecipeFromUserFavorites = (userId, recipeId) => {
  let query = `
  UPDATE base_schema.users
  SET favorites = array_remove(favorites, $1)
  WHERE id = $2
  `;

  return db.query(query, [recipeId, userId]);
}

module.exports = {
  getUserPrivateInfoById,
  getUserPublicInfoById,
  getUserPrivateInfoByEmail,
  createUser,
  getUserFavorites,
  getUserRecipes,
  addToUserFavorites,
  getUserPublicInfoBySession,
  removeRecipeFromUserFavorites
}