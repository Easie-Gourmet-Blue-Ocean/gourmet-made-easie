const authRouter = require('express').Router()


authRouter.post('/signup', (req, res, next) => {
  // check if user exists
  // if exists => redirect to signup (status code 403)
  // if not => create the user using salt
});
authRouter.post('/login', (req, res, next) => {

});
authRouter.post('/logout', (req, res, next) => {

});

module.exports = authRouter;