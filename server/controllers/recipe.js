/*
GET /recipe/:recipeId
GET /recipe/cards
POST /recipe
*/
const recipeModel = require('../models/recipe')

const getDetailedRecipes = (req, res) => {
  let recipeId = req.params.recipeId
  recipeModel.findRecipe(recipeId)
}

const getRecipeCards = (req, res) => {
  if (req.body.count === null) {
    return everything
  }
  
}

const postRecipe = (req, res) => {
  
}

module.exports = {
    getDetailedRecipes,
    getRecipeCards,
    postRecipe
}