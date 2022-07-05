const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// LET USE BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// USE PUF TEMPLATE
app.set('view engine', 'pug');

// ROUTES
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: "Who is burried in grunt's tomb?",
    hint: 'Think about who is tomb it is?',
  });
});
app.get('/hello', (req, res) => {
  res.render('hello');
});

app.post('/hello', (req, res) => {
  // console.dir(req.body);
  res.render('hello', { name: req.body.username });
  // res.json(req.body);
});

// SERVER LISTENING
app.listen(3000, () => {
  console.log('The application is running on PORT: 3000!');
});
