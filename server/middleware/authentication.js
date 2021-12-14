const models = require('../models');

const createSession = (req, res, next) => {
  new Promise((resolve) => resolve(req.cookies.boid))
    .then(hash => {
      if (!hash) {
        throw new Error('No session found in cookie');
      } else {
        return models.Session.findSessionByHash(hash);
      }
    })
    .then(session => {
    })
    .catch(err => {
    })
}

const verifySession = (req, res, next) => {
}

module.exports = {
  createSession,
  verifySession
}
