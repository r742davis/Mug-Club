const mongoose = require('mongoose');
const Schema = mongoose.Schema

const customerSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true }
}, {timestamps: true});

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
