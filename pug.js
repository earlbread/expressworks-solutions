const express = require('express');
const path = require('path');
const app = express();
const port = process.argv[2];
const templatePath = process.argv[3];

app.set('views', templatePath);
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
  res.render('index', {'date': new Date().toDateString()});
});

app.listen(port);
