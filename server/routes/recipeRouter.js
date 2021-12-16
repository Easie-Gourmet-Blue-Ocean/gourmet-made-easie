const recipeRouter = require('express').Router();
const { getDetailedRecipes, getRecipeCards, postRecipe, getRandomRecipe, getRecipe } = require('../controllers/recipe');

recipeRouter.post('/', postRecipe);
recipeRouter.get('/cards', getRecipeCards);
recipeRouter.get('/random', getRandomRecipe);
recipeRouter.get('/', getRecipe)
recipeRouter.get('/:recipeId', getDetailedRecipes);


module.exports = recipeRouter;

