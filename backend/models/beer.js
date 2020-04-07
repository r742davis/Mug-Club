const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: String,
  brewery: {
    type: String,
    required: true
  },
  breweryLocation: String,
  url: String,
  finished: Boolean
});

const Beer = mongoose.model('Beer', BeerSchema)

module.exports = Beer;
