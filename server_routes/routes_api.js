const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getSecret } = require('../controllers/comunication-controller');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/topsecret', function (req, res) {
  let body = req.body;

  getSecret(body)
    .then(response => res.json(response))
    .catch(err => {
      console.log(err);
      res.status(404).json();
    });
});

module.exports = app;
