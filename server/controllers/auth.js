const models = require('../models/index');
const { compareHash } = require('../lib/hashUtils')
/*
POST /auth/signup 
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
      let { id} = result.rows[0];
      return models.Session.updateSessionByHashWithNewUserId(req.session.hash, id);
    })
    .then(result => {
      // console.log('updated session signup:', result);
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      // TODO: redirect with error message
      // res.redirect('/login?error=' + encodeURIComponent('Email has already exisited'));
      res.redirect('/signup'); 
    })
}

const handleLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  models.User.getUserPrivateInfoByEmail(email)
    .then(user => {
      if (user.rows.length === 0 || !compareHash(password, user.rows[0].password, user.rows[0].salt)) {
        throw new Error ('Email or password does not match')
      } else {
        let {id} = user.rows[0];
        console.log('login update session:', [req.session.hash, id]);
        return models.Session.updateSessionByHashWithNewUserId(req.session.hash, id);
      }
    })
    .then(() => {
      console.log('login success');
      res.redirect('/');
    })
    .catch(err => {
      if (err.message === 'Email or password does not match') {
        res.redirect('/login'); // TODO: add error message
      } else {
        res.status(500).send(err);
      }
    });

}

const handleLogout = (req, res) => {
  models.Session.deleteSessionByHash(req.cookies.boid)
    .then(() => {
      res.clearCookie('boid');
      console.log('logout success');
      res.redirect('/login');
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

module.exports = {
  handleSignup,
  handleLogin,
  handleLogout
}


