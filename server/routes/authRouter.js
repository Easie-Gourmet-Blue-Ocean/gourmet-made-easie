const authRouter = require('express').Router()
const { handleSignup, handleLogin, handleLogout } = require('../controllers/auth')

authRouter.post('/signup', handleSignup);

authRouter.post('/login', handleLogin);

authRouter.post('/logout', handleLogout);

module.exports = authRouter;