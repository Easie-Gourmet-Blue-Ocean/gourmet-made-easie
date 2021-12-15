/*
GET /recipe/:recipeId
GET /recipe/cards
POST /recipe
*/

const e = require('express')
const recipeModel = require('../models/recipe')

const mealType = {
  0: 'breakfast',
  1: 'brunch',
  2: 'lunch',
  3: 'appetizer',
  4: 'dinner',
  5: 'dessert'
} 

const proteinType = {
  0: 'poultry',
  1: 'beef',
  2: 'pork',
  3: 'seafood',
  4: 'vegetarian',
  5: 'vegan'   
}

const getDetailedRecipes = (req, res) => {
  let recipeId = req.params.recipeId
  recipeModel.findRecipe(recipeId)
  .then(getDetailedRecipesResult => {
    let detailedRecipe = {
      recipeId: getDetailedRecipesResult.rows[0].recipeid,
      username: getDetailedRecipesResult.rows[0].username,
      favoritedCount: getDetailedRecipesResult.rows[0].favoritedcount,
      recipeName: getDetailedRecipesResult.rows[0].recipename,
      description: getDetailedRecipesResult.rows[0].description,
      activeTime: getDetailedRecipesResult.rows[0].activetime,
      totalTime: getDetailedRecipesResult.rows[0].totaltime,
      photo: getDetailedRecipesResult.rows[0].photo,
      instructions: getDetailedRecipesResult.rows[0].instructions,
      ingredients: [],
      mealType: getDetailedRecipesResult.rows[0].mealtype,
      protein: getDetailedRecipesResult.rows[0].protein,
      servingSize: getDetailedRecipesResult.rows[0].servingsize,
      createdAt: getDetailedRecipesResult.rows[0].createdat
    };
      
    detailedRecipe.mealType = detailedRecipe.mealType.reduce((meals, meal, index) => {
      if (meal === true) {
        meals.push(mealType[index])
      }
      return meals
    }, []);

    detailedRecipe.protein = detailedRecipe.protein.reduce((proteins, protein, index) => {
      if (protein === true) {
        proteins.push(proteinType[index])
      }
      return proteins
    }, []);

    getDetailedRecipesResult.rows.forEach(recipe => {
      detailedRecipe.ingredients.push({ ingredientName: recipe.ingredientname, amount: recipe.amount, measurementUnit: recipe.measurementunit })
    });
  
    res.status(200).send(detailedRecipe)
  })
  .catch(err => {
    res.status(404).send(err)
  })
}

const getRecipeCards = (req, res) => {
  let mealTypeFilter = [0, 0, 0, 0, 0, 0]
  let protienTypeFilter = [0, 0, 0, 0, 0, 0]
  let sort = req.query.sort || 'relevant'
  let count = req.query.count
  
  if (req.query.mealType ) {
    for(let key in mealType) {
      req.query.mealType.forEach(meal => {
        if (mealType[key] === meal) {
          mealTypeFilter[key] = 1
        }
      })
    }
  }
  if (req.query.protein) {
    for(let key in proteinType) {
      req.query.protein.forEach(protein => {
        if (proteinType[key] === protein) {
          protienTypeFilter[key] = 1
        }
      })
    }
  }
 
  recipeModel.findRecipeCards(mealTypeFilter, protienTypeFilter, sort, count)
  .then(recipeCards => {
  res.status(200).send(recipeCards.rows) // TODO: shape of data need to match
  })
  .catch(err => {
    res.status(404).send(err)
  })
}


// const postRecipe = (req, res) => {
//   let recipeName = req.body.recipeName;
//   let username = req.body.username;
//   let description = req.body.description;
//   let activeTime = req.body.activeTime;
//   let totalTime = req.body.totalTime;
//   let photo = req.body.photo;
//   let instructions = req.body.instructions;
//   let ingredients = req.body.ingredients;
//   let mealType = req.body.mealType;
//   let protein = req.body.protein;
//   let serveringSize = req.body.servingSize
  
// }

const getRandomRecipe = (req, res) => {
  recipeModel.getRecipeCount()
  .then(randomRecipe => {
    let randomRecipeId = Math.floor(Math.random() * ((parseInt(randomRecipe.rows[0].count) + 1) - 1) + 1)
    req.params.recipeId = randomRecipeId
    getDetailedRecipes(req, res)
  })
}

module.exports = {
  getDetailedRecipes,
  getRecipeCards,
  // postRecipe,
  getRandomRecipe
}