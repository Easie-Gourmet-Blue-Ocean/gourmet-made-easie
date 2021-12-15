const userRouter = require('express').Router();
const { getUserPublicInfoById,
        getUserPublicInfoBySession,
        getUserFavorites,
        getUserRecipes,
        addToUserFavorites,
        removeRecipeFromUserFavorites
 } = require('../controllers/user');

/*
GET /user/:userId
GET /user/session/:sessionId
GET /user/:userId/favorites
GET /user/:userId/recipes
PATCH /user/:userId/favorites/:recipeId
DELETE /user/:userId/favorites/:recipeId
*/

userRouter.get('/:userId', getUserPublicInfoById);
userRouter.get('/session/:sessionId', getUserPublicInfoBySession);
userRouter.get('/:userId/favorites', getUserFavorites);
userRouter.get('/:userId/recipes', getUserRecipes);
userRouter.patch('/:userId/favorites/:recipeId', addToUserFavorites);
userRouter.delete('/:userId/favorites/:recipeId', removeRecipeFromUserFavorites);

module.exports = userRouter;