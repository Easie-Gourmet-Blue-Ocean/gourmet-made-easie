const authRouter = require('express').Router()
const {handleSignup} = require('../controllers/auth')

authRouter.post('/signup', handleSignup);

authRouter.post('/login', (req, res, next) => {

});
authRouter.post('/logout', (req, res, next) => {

});

module.exports = authRouter;