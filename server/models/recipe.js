const db = require("../../database");

const findRecipe = (recipeId) => {
  const queryString = `
    SELECT 
      recipe_id AS recipeId, 
      username, 
      favorited_amt AS favoritedCount, 
      recipe_name AS recipeName, 
      description, 
      active_time AS activeTime, 
      total_time AS totalTime,
      photo, 
      instructions,
      ingredient_name AS ingredientName,
      measurement_unit AS measurementUnit,
      amount_int AS amount,
      meal_type AS mealType, 
      protein,
      serving_size AS servingSize, 
      created_at AS createdAt
    FROM (
            SELECT *
            FROM (
                SELECT *
                FROM (
                    SELECT
                        recipe_id,
                        amount_int,
                        measurement_unit,
                        ingredient_name 
                    FROM base_schema.ingredients, base_schema.ingredient_list 
                    WHERE ingredients.macro_ingredient_id = ingredient_list.macro_ingredient_id
                ) AS recipe_ingredients, base_schema.recipes
                WHERE recipe_ingredients.recipe_id = recipes.id) AS ingredient_recipe
            WHERE ingredient_recipe.id = $1) AS detailed_recipe, (
                SELECT id, username FROM base_schema.users
            ) AS user_name
    WHERE detailed_recipe.user_id = user_name.id`;
  return db.query(queryString, [recipeId]);
};

const findRecipeCards = (mealType, protien, orderBy, count) => {
  let orderStr = '';
  let limitStr = count ? 'LIMIT $3' : '';

  switch (orderBy) {
    case "newest":
      orderStr = "ORDER BY created_at DESC";
      break;
    case "favorite":
      orderStr = "ORDER BY favorited_amt DESC";
      break;
    case "relavent":
      orderStr = "ORDER BY RANDOM()";
  }

  let queryString = `
    SELECT id as recipe_id, recipe_name, username, description, photo FROM (SELECT *
        FROM base_schema.recipes, (
            SELECT 
            id as uid,
            username 
            FROM base_schema.users) AS user_name
            WHERE base_schema.recipes.user_id = user_name.uid) AS full_recipe
        WHERE full_recipe.meal_type = $1::boolean[]
        AND full_recipe.protein = $2::boolean[]
        ${orderStr} 
        ${limitStr}
    `;

  if (count) {
    return db.query(queryString, [mealType, protien, count]);
  } else {
    return db.query(queryString, [mealType, protien]);
  }
};

const getRecipeCount = () => {
  const queryString = `SELECT count(*) FROM base_schema.recipes`;
  return db.query(queryString);
};

const addMacroIngredient = (ingredientName) => {
  const queryString = `
  INSERT INTO 
  base_schema.ingredient_list (ingredient_name)
  VALUES ( $1 )`;

  return db.query(queryString, [ingredientName])
}

const addRecipe = (userId, recipeName, description, activeTime, totalTime, photo, instructions, mealType, protein, servingSize) => {
  const queryString = `
  INSERT INTO base_schema.recipes(
  user_id, 
  favorited_amt, 
  recipe_name, 
  description, 
  active_time, 
  total_time, 
  photo, 
  instructions, 
  meal_type, 
  protein, 
  serving_size
  )
    VALUES ( $1, 0, $2, $3, $4, $5, $6, $7,  $8::boolean[],  $9::boolean[],  $10)
    RETURNING id`;
    return db.query(queryString, [userId, recipeName, description, activeTime, totalTime, photo, instructions, mealType, protein, servingSize])
};

const searchIngredients = (ingredientName) => {
  const queryString = `
  SELECT 
  macro_ingredient_id 
  FROM base_schema.ingredient_list
  WHERE ingredient_name = $1`;
  return db.query(queryString, [ingredientName])
};

const addIngredients = (recipeId, amount, measurementUnit, macroIngredientId) => {
  const queryString = `
  INSERT INTO base_schema.ingredients(
     recipe_id, 
     amount_int, 
     measurement_unit, 
     macro_ingredient_id
     )
    VALUES ( $1, $2, $3, $4)`;
    return db.query(queryString, [recipeId, amount, measurementUnit, macroIngredientId])
}

const recipeSearch = (searchString) => {
  const queryString = `
  SELECT id as recipe_id, 
  recipe_name, 
  username, 
  description, 
  photo 
  FROM (
    SELECT *
    FROM base_schema.recipes, (
        SELECT 
        id as uid,
        username 
        FROM base_schema.users
        ) AS user_name
        WHERE base_schema.recipes.user_id = user_name.uid) AS full_recipe
    WHERE UPPER(full_recipe.recipe_name) LIKE UPPER($1)`;
    return db.query(queryString, [searchString])
}

module.exports = {
  findRecipe,
  findRecipeCards,
  getRecipeCount,
  addMacroIngredient, //internal 
  searchIngredients,
  recipeSearch,
  addIngredients,
  addRecipe
};
