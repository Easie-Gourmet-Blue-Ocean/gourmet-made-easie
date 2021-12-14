const express = require('express');
const app = express();
const port = 3000
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authentication = require('./middleware/authentication');
const authRouter = require('./routes/authRouter');

app.use(morgan('dev'));
app.use(express.json())
app.use(express.static(__dirname + '/../dist'))
app.use(cookieParser());
app.use(authentication.createSession); // create session for incoming request


app.use('/auth', authRouter); // signup, login, logout


app.get('/test', (req, res) => {
  console.log(req.cookies);
  res.send('Hello, World!')
});

/************************************************************/
// catch all route
/************************************************************/
app.get('/*', function(req, res) {
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})