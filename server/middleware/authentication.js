const models = require('../models');

// end goal is to populate req.session
const createSession = (req, res, next) => {
  new Promise((resolve) => resolve(req.cookies.boid)) // boid = blue ocean id
    .then(hash => {
      console.log('entry hash:', hash);
      if (!hash) {
        throw new Error('No session found in cookie');
      } else {
        return models.Session.findSessionByHash(hash);
      }
    })
    .then(session => {
      console.log('find session result:', session.rows);
      if (session.rows.length === 0) {
        throw new Error('No session found in DB');
      }
      return session;
    })
    .catch(err => { // create session
      return models.Session.createSessionWithNewHash()
        .then(result => {
          console.log('created new hash in db:', result);
          res.cookie('boid', result.rows[0].hash);
          console.log('test:', result.rows[0].hash);
          return models.Session.findSessionByHash(result.rows[0].hash);
        })
    })
    .then(session => { //populate req.session
      console.log('find session from db:', session);
      req.session = session.rows[0];
      if (session.rows[0].user_id) {
        req.session.userId = session.rows[0].user_id; // req.session will have user property if user exists
      }
      console.log('req.session =',req.session);
      next();
    });

}

const verifySession = (req, res, next) => {
}

module.exports = {
  createSession,
  verifySession
}
