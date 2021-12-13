const db = require('../../database/config');

const addRecipe = (ingredents) => {
  let querySting = 'Select * from users WHERE user.id = $1';
  db.query(querySting, ingredents)
}