/*
GET /recipe/:recipeId
GET /recipe/cards
POST /recipe
*/
const recipeModel = require('../models/recipe');
const { snakeToCamelCase } = require('../lib/formatUtils');

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

const getRecipeBySearchString = (req, res) => {
  // let searchStirng = `%${req.body.search}%`;
  recipeModel.recipeSearch(req.body.search)
  .then(response => {
    for (var i = 0; i < response.rows.length; i++) {
      response.rows[i] = snakeToCamelCase(response.rows[i]);
    }
    res.status(200).send(response.rows)
  })
  .catch(error => {
    res.status(404).send(error)
  })
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
  let sort = req.body.sort || 'relevant'
  let count = req.body.count
  
  if (req.body.mealType ) {
    for(let key in mealType) {
      req.body.mealType.forEach(meal => {
        if (mealType[key] === meal) {
          mealTypeFilter[key] = 1
        }
      })
    }
  }
  if (req.body.protein) {
    for(let key in proteinType) {
      req.body.protein.forEach(protein => {
        if (proteinType[key] === protein) {
          protienTypeFilter[key] = 1
        }
      })
    }
  }

  recipeModel.findRecipeCards(mealTypeFilter, protienTypeFilter, sort, count)
  .then(recipeCards => {
    for (var i = 0; i < recipeCards.rows.length; i++) {
      recipeCards.rows[i] = snakeToCamelCase(recipeCards.rows[i]);
    }
    res.status(200).send(recipeCards.rows) // TODO: shape of data need to match
  })
  .catch(err => {
    res.status(404).send(err)
  })
}


const postRecipe = (req, res) => {
  const {recipeName, userId, description, activeTime, totalTime, photo, instructions, ingredients, mealType, protein, servingSize} = req.body;
  let promises = []
  ingredients.forEach(ingredient => {
    promises.push(recipeModel.addMacroIngredient(ingredient["ingredientName"])
    .catch(() => {
      return
    })
    .then(()=> {
      return recipeModel.searchIngredients(ingredient["ingredientName"])
    })
    )
  })
  recipeModel.addRecipe(userId, recipeName, description, activeTime, totalTime, photo, instructions, mealType, protein, servingSize)
  .then(recipeId => {
    Promise.all(promises)
    .then(result => {
      result.forEach((item, index) => {
        recipeModel.addIngredients(recipeId.rows[0].id, ingredients[index].amount, ingredients[index].measurementUnit, item.rows[0].macro_ingredient_id)
        .then(() => {
          res.status(201).send()
        })
        .catch(error => {
          res.status(400).send(error)
        })
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

const getRandomRecipe = (req, res) => {
  recipeModel.getRecipeCount()
  .then(randomRecipe => {
    // TODO: need better way to do this => could hit empty row
    // id start at 1 for recipeId
    let randomRecipeId = Math.floor(Math.random() * ((parseInt(randomRecipe.rows[0].count)) - 1) + 1)
    req.params['recipeId'] = randomRecipeId
    getDetailedRecipes(req, res)
  })
  .catch(error => {
    res.status(400).send(error)
  })
}

module.exports = {
  getDetailedRecipes,
  getRecipeCards,
  postRecipe,
  getRecipeBySearchString,
  getRandomRecipe
}