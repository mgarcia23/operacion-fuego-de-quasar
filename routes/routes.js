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

app.post('/topsecret_split/:satellite_name', function (req, res) {
  let body = req.body;
  let satellite_name = req.params.satellite_name;

  getSecret(body, satellite_name)
    .then(response => res.json(response))
    .catch(err => {
      console.log(err);
      res.status(404).json();
    });
});

app.get('/topsecret_split/:satellite_name', function (req, res) {
  let satellite_name = req.params.satellite_name;

  getSecret(body, satellite_name)
    .then(response => res.json(response))
    .catch(err => {
      console.log(err);
      res.status(200).json('No hay información suficiente para indicar posición y mensaje de auxilio');
    });
});

module.exports = app;
