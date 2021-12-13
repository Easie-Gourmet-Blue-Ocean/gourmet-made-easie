const recipeRouter = require('express').Router();
const { getDetailedRecipes, getRecipeCards, postRecipe } = require('../controllers/recipe');

recipeRouter.post('/', postRecipe);
recipeRouter.get('/cards', getRecipeCards);
recipeRouter.get('/:recipeId', getDetailedRecipes);

module.exports = recipeRouter;

