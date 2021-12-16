const recipeRouter = require('express').Router();
const { getDetailedRecipes, getRecipeCards, postRecipe, getRandomRecipe, getRecipeBySearchString } = require('../controllers/recipe');
const {verifySession} = require('../middleware/authentication');

recipeRouter.post('/', verifySession, postRecipe); // protected route
recipeRouter.get('/cards', getRecipeCards);
recipeRouter.get('/random', getRandomRecipe);
recipeRouter.get('/search', getRecipeBySearchString)
recipeRouter.get('/:recipeId', getDetailedRecipes);


module.exports = recipeRouter;

