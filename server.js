'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('<h1>Simple node app by dinar\n</h1>');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
