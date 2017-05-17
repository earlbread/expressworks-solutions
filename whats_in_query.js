const express = require('express');
const url = require('url');

const port = process.argv[2];
const app = express();

app.get('/search', (req, res) => {
  const query = req.query; 
  res.send(query);
});

app.listen(port);
