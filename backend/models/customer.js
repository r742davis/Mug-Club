const mongoose = require('mongoose');
const Schema = mongoose.Schema

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
}, {timestamps: true});

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
