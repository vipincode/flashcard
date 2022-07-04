const { request, response } = require('express');
const express = require('express');

// This app is central part of our application.
// We exted it by adding routes, middleware and other settings
const app = express();

// Lets use pug.
// App.ser define different setting in express.
// This line tells express which template engine to use.
// by default look in the views folder for template.
app.set('view engine', 'pug');

// Routes

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/hello', (req, res) => {
  res.send('<h1>Hello javascript developer</h1>');
});

// Lets detup development server
app.listen(3000, () => {
  console.log('The application is running on PORT: 3000!');
});
