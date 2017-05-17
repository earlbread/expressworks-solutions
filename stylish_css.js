const express = require('express');
const stylus = require('stylus');

const app = express();
const port = process.argv[2];
const staticPath = process.argv[3];

app.use(stylus.middleware(staticPath));
app.use(express.static(staticPath));

app.listen(port);
