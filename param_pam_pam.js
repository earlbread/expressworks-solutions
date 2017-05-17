const express = require('express');
const crypto = require('crypto');

const port = process.argv[2];
const app = express();

app.put('/message/:id', (req, res) => {
  let id = req.params.id;
  let str = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
  res.send(str);
});

app.listen(port);
