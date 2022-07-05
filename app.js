const { request, response } = require('express');
const express = require('express');

const app = express();

app.set('view engine', 'pug');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: "Who is burried in grunt's tomb?",
    hint: 'Think about who is tomb it is?',
  });
});

app.listen(3000, () => {
  console.log('The application is running on PORT: 3000!');
});
