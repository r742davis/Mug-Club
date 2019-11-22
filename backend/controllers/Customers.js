const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.js');
const Beer = require('../models/beer.js');
const mongoose = require('mongoose');
// const db = require('../db.js');

//GET route
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

//CREATE route
router.post('/', async (req, res) => {
  try {
    //Customer Schema for adding to database: includes mugClub and beers nesting
    const beersList = await Beer.find();
    const newCustomer = await new Customer({
      name: {
        first: req.body.name.first,
        last: req.body.name.last
      },
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      mugClub: {
        completed: req.body.mugClub.completed,
        clubId: req.body.mugClub.clubId,
        beers: beersList
      }
    });
    const savedNewCustomer = await newCustomer.save();
    return res.json(savedNewCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
})

//DELETE route
router.delete('/:id', async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    const foundCustomer = await findCustomer.remove();
    return res.json({
      Success: "Customer was successfully deleted from database"
    })
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not delete customer."
    })
  }
})

//SHOW route
router.get('/:id', async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    return res.send('User ' + req.params.id + ' ' + findCustomer.firstName)
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not find customer."
    })
  }
})

//UPDATE/EDIT route
router.put('/:id', async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(updateCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
})


module.exports = router;
