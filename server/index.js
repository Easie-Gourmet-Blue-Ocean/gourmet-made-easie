const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const authentication = require('./middleware/authentication');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const recipeRouter = require('./routes/recipeRouter');
const path = require('path');

const app = express();
const port = 3000

app.use(morgan('dev'));
app.use(express.json())
app.use(express.static(__dirname + '/../dist'))
app.use(cookieParser());
app.use(authentication.createSession); // create session for incoming request

app.use('/auth', authRouter); // signup, login, logout
app.use('/user', userRouter);
app.use('/recipe', recipeRouter);

// app.get('/login', (req, res) => {
//   res.redirect('/login');
// });

// app.get('/signup', (req, res) => {
//   res.redirect('/signup');
// });


/************************************************************/
// catch all route
/************************************************************/
// app.get('/*', function(req, res) {
//   res.redirect('/');
//   // ideally it should redirect to "page not found" page
// })

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})