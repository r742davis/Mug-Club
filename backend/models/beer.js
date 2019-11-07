const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  breweryName: String,
  breweryLocation: String,
  beerName: String,
  imageURL: String,
}, {timestamps: true});

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;
