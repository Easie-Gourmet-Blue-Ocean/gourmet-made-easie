const db = require('../../database');

const findRecipe = (recipeId) => {
    const queryString = `SELECT recipe_id, user_id, favorited_amt, recipe_name, description, active_time, total_time, photo, instructions, meal_type, protein, serving_size, created_at
	FROM base_schema.recipes`;
    db.query(queryString, recipeId)
}