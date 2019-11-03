const mongoose = require('mongoose');
const Schema = mongoose.Schema

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Yo, give me your first name']
  },
  lastName: {
    type: String,
    required: [true, 'Dude, you don\'t have a last name?']
  },
  id: Schema.Types.ObjectId,
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
    cludId: Number,
    beers: {
      coors: { type: Boolean, default: false },
      coorsLight: { type: Boolean, default: false },
      budweiser: { type: Boolean, default: false },
      budLight: { type: Boolean, default: false },
      sierraNevadaPaleAle: { type: Boolean, default: false },
      sierraNevadaTorpedo: { type: Boolean, default: false }
    }
  }

}, {timestamps: true});

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
