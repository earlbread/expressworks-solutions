const express = require('express');
const app = express();
const port = process.argv[2];
const staticPath = process.argv[3];

app.use(express.static(staticPath));

app.listen(port);
