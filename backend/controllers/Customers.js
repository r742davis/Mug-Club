const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.js');
const mongoose = require('mongoose');
// const db = require('../db.js');

//GET route
router.get('/', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

//CREATE route
router.post('/', async (req, res) => {
  // Extracted beers list: for easier modification, cleaner CREATE route
  const beersList = {
    coors: req.body.mugClub.beers.coors,
    coorsLight: req.body.mugClub.beers.coorsLight,
    budweiser: req.body.mugClub.beers.budweiser,
    budLight: req.body.mugClub.beers.budLight,
    sierraNevadaPaleAle: req.body.mugClub.beers.sierraNevadaPaleAle,
    sierraNevadaTorpedo: req.body.mugClub.beers.sierraNevadaTorpedo
  }

  try {
    //Customer Schema for adding to database: includes mugClub and beers nesting
    const newCustomer = await new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      mugClub: {
        completed: req.body.mugClub.completed,
        clubId: req.body.mugClub.clubId,
        beers: beersList
      }
    })
    const savedNewCustomer = await newCustomer.save();
    return res.json(savedNewCustomer);
  } catch (error) {
      res.status(400).json({error: error.message})
  }
})

//DELETE route
router.delete('/:id', async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    const foundCustomer = await findCustomer.remove();
    return res.json({ Success: "Customer was successfully deleted from database" })
  } catch (error) {
      res.status(400).json({ Error: "Uh oh! Could not delete customer." })
  }
    // Customer.findById(req.params.id)
    //     .then(customer => customer.remove().then(() => {
    //         res.json({ success: true })
    //     }))
    //     .catch(error => res.status(404).json({ success: false }))
})

//SHOW route

//UPDATE/EDIT route
router.put('/:id', async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updateCustomer);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
})


module.exports = router;
