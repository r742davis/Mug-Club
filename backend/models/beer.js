const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  name: String,
  type: String,
  brewery: String,
  breweryLocation: String,
  finished: Boolean
});

const Beer = mongoose.model('Beer', BeerSchema)

module.exports = Beer;
