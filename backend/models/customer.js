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
    completed: Boolean,
    cludId: Number,
    beers: {
      coors: Boolean,
      coorsLight: Boolean,
      budweiser: Boolean,
      budLight: Boolean,
      sierraNevadaPaleAle: Boolean,
      sierraNevadaTorpedo: Boolean
    }
  }

}, {timestamps: true});

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
