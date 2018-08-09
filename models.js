const mongoose = require('mongoose');

// ===============
// Database Config
// ===============
const Schema = mongoose.Schema;
mongoose.connect('mongodb://justfortuts:a1b2c3d4@ds155461.mlab.com:55461/justfortuts', {useNewUrlParser: true});

// =======
// Schemas
// =======

const jokesSchema = new Schema({
    content: String,
    created: { type: Date, default: Date.now }
  },
  { strict: false }
);

const models = {};
models.Jokes = mongoose.model('jokes', jokesSchema);

module.exports = models;