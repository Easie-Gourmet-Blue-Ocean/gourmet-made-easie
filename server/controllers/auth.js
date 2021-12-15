const models = require('../models/index');

/*
POST /auth/signup -> create user
POST /auth/login
POST /auth/logout
*/

const handleSignup = (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  // check if email exist
  models.User.getUserPrivateInfoByEmail(email)
    .then(user => {
      if (user.rows.length !== 0) { // email already exist
        throw new Error('Email already used');
      } else {
        return models.User.createUser(username, email, password);
      }
    })
    .then(result => {
      console.log('user inserted:', result);
      // update session
      let { password, id} = result.rows[0];
      return models.Session.updateSessionByHashWithNewUserId(password, id);
    })
    .then(result => {
      console.log('updated session signup:', result);
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      // res.redirect('/login?error=' + encodeURIComponent('Email has already exisited'));
      res.redirect('/signup');
    })
}

const handleLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;


}

const handleLogout = (req, res) => {
}

module.exports = {
  handleSignup,
  handleLogin,
  handleLogout
}


