// Imports
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');


// Initial Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CRUD
app.use('/api/jokes', require('./crud')(models.Jokes));

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));
