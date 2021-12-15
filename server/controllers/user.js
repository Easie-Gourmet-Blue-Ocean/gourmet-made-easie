const models = require('../models/index');

/*
GET /user/:userId
GET /user/session/:sessionId
GET /user/:userId/favorites
GET /user/:userId/recipes
PATCH /user/:userId/favorites/:recipeId
DELETE /user/:userId/favorites/:recipeId (not supported)
*/

const getUserPublicInfoById = (req, res) => {
  models.User.getUserPublicInfoById(req.params.userId)
    .then(userInfo => {
      res.status(200).send(userInfo.rows);
    })
    .catch(err => {
      res.status(404).send(err);
    })
}

const getUserPublicInfoBySession = (req, res) => {
  models.User.getUserPublicInfoBySession(req.params.sessionId)
    .then(userInfo => {
      res.status(200).send(userInfo.rows);
    })
    .catch(err => {
      res.status(404).send(err);
    })
}

const getUserFavorites = (req, res) => {
  models.User.getUserFavorites(req.params.userId)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      if (err.routine === 'accumArrayResultArr') {
        res.status(200).send([]);
      } else {
        res.status(404).send(err);
      }
    })
}

const getUserRecipes = (req, res) => {
  models.User.getUserRecipes(req.params.userId)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      res.status(404).send(err);
    })
}

const addToUserFavorites = (req, res) => {
  models.User.addToUserFavorites(req.params.userId, req.params.recipeId)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

const removeRecipeFromUserFavorites = (req, res) => {
  models.User.removeRecipeFromUserFavorites(req.params.userId, req.params.recipeId)
  .then(result => {
    res.status(200).send();
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

module.exports = {
  getUserPublicInfoById,
  getUserPublicInfoBySession,
  getUserFavorites,
  getUserRecipes,
  addToUserFavorites,
  removeRecipeFromUserFavorites
}

