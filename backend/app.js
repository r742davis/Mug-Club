//  Dependencies  //
//----------------//
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');

//  Middleware  //
//--------------//
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(methodOverride('_method'));

//  Customers Controller  //
//------------------------//
const customersController = require('./controllers/customers.js');
app.use('/customers', customersController);

//  Customers Controller  //
//------------------------//
const beersController = require('./controllers/beers.js');
app.use('/beers', beersController)

module.exports = app;
