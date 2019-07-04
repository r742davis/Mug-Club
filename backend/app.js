//----------------//
//  Dependencies  //
//----------------//
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//--------------//
//  Middleware  //
//--------------//
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(methodOverride('_method'));

//------------------------//
//  Customers Controller  //
//------------------------//
const customersController = require('./controllers/customers.js');
app.use('/customers', customersController);

//----------//
//  Routes  //
//----------//
app.get('/', (req, res) => {
  res.status(200).send('Root Route Works!')
});

app.get('/users', (req, res) => {
  res.send('You have reached the users page.')
})

module.exports = app;
