const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const app = express();

// LET USE BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// USER COOKIE PARSER
app.use(cookieParser());

// USE PUF TEMPLATE
app.set('view engine', 'pug');

// MIDDLEWARE
// This middleware run every time a request comes into the app.
// ex: refresh browser you see `one` is log in console[see terminal]
app.use(
  (req, res, next) => {
    console.log('One');
    next();
  },
  // This middleware run betwen first and secont bcs middleware order to run in which they are written
  (req, res, next) => {
    console.log('One and Half');
    next();
  }
);

app.use((req, res, next) => {
  console.log('Two');
  next();
});

// ROUTES
app.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: "Who is burried in grunt's tomb?",
    hint: 'Think about who is tomb it is?',
  });
});

app.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

app.post('/hello', (req, res) => {
  // COOKIE REMEMBER USER NAME
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

// SERVER LISTENING
app.listen(3000, () => {
  console.log('The application is running on PORT: 3000!');
});
