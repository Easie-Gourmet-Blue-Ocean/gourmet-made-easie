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
      console.log('find session result:', session.rows[0]);
      if (session.rows.length === 0) {
        throw new Error('No session found in DB');
      }
      return session;
    })
    .catch(err => { // create session
      return models.Session.createSessionWithNewHash()
        .then(result => {
          console.log('created session:', result.rows[0].hash);
          res.cookie('boid', result.rows[0].hash);
          return models.Session.findSessionByHash(result.rows[0].hash);
        })
    })
    .then(session => { //populate req.session
      req.session = session.rows[0];
      // if (session.rows[0].user_id) {
      //   req.session.userId = session.rows[0].user_id;
      // }
      console.log('req.session =',req.session);
      next();
    });
}

const verifySession = (req, res, next) => {
  // verily req.session.userId
  console.log('verifying...');
  console.log(req.session);
  if (!req.session.user_id) {
    console.log('bye');
    res.redirect('/login');
  } else {
    console.log('clear');
    next();
  }
}

module.exports = {
  createSession,
  verifySession
}
/* NOTE
- no cookie:
  - [case 1] previosly signout => session destroyed => create session => no req.session.userId
  - [case 2] manually deleted cookie on client side => create session => no req.session.userId
  - when hit protected route will redirect to login page
    - during login session's userId will be updated
    - subsequent request will have req.session.userId => verified
- have cookie
  - [case 1] correct sessoin found in db with userId => req.session.userId populated
    - [case 1-1] if cookie is guessed, probability is extremely low (EDGE CASE NOT HANDLED)
  - [case 2] session without userId in db
    - possible reasons
      - failed login, signup
      - browsing sessions
    - [case 2-1] req.session.userId will not be populated, redirect to login when hit protected route
    - [case 2-2] user without an account browsing, redirect to login when hit protected route
    - may consider as browsing session => these sessions should be destroyed from db periodically (NOT HANDLED)
      => will repeat [case 2]
  - [case 3] wrong cookie => create session => no req.session.userId => redirect to login when hit protected route
    - could be hackers but probability is low
*/