// Modules
const express = require('express');
const bodyParser = require('body-parser');

// Config
const app = express();
const router = express.Router();

// Routes
const routes = require('./routes/routes');

// Server
routes(router);
app.use(bodyParser.json());
app.use('/api/v1', router);

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Mariano API v1 on port: ${port}`);
});

module.exports = app;
