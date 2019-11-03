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
router.post('/', (req, res) => {
    const newCustomer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      mugClub: {
        completed: req.body.mugClub.completed,
        clubId: req.body.mugClub.clubId,
        beers: {
          coors: req.body.mugClub.beers.coors,
          coorsLight: req.body.mugClub.beers.coorsLight,
          budweiser: req.body.mugClub.beers.budweiser,
          budLight: req.body.mugClub.beers.budLight,
          sierraNevadaPaleAle: req.body.mugClub.beers.sierraNevadaPaleAle,
          sierraNevadaTorpedo: req.body.mugClub.beers.sierraNevadaTorpedo
        }
      }
    })

    newCustomer.save().then(customer => res.json(customer))
})

//DELETE route
router.delete('/:id', (req, res) => {
    Customer.findById(req.params.id)
        .then(customer => customer.remove().then(() => {
            res.json({ success: true })
        }))
        .catch(error => res.status(404).json({ success: false }))
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
