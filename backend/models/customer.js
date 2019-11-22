const mongoose = require('mongoose');
const Beer = require('./beer.js');
const BeerSchema = mongoose.model('Beer').schema;
const Schema = mongoose.Schema;

// const BeerSchema = new Schema({
//   id: Number,
//   name: String,
//   type: String,
//   brewery: String,
//   breweryLocation: String,
//   finished: Boolean
// }, { _id: false });

const CustomerSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true}
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  mugClub: {
    completed: { type: Boolean, default: false },
    clubId: { type: Number, default: null },
    beers: [BeerSchema]
  }

}, {timestamps: false, strict: false});

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer;
