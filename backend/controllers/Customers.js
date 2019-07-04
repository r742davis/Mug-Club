const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.js');
const mongoose = require('mongoose');
// const db = require('../db.js');


// MongoClient.connect('mongodb://localhost:27017/mug_club', function (err, client) {
//   if (err) throw err
//
//   const db = client.db('mug_club')
//
//   db.collection('customers').find().toArray(function (err, result) {
//     if (err) throw err
//
//     console.log(result)
//   })
// })


//GET route
router.get('/', (req, res) => {
    Customer.find((error, data) => {
        res.json(data)
        if(error) return res.status(404).json({
          message: 'Customers not found'
        })
    })
});

//CREATE route
router.post('/', (req, res) => {
    const newCustomer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName
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

//UPDATE route

module.exports = router;

//Code for Entering Data into Mongo Database
// var customers = [
//   {
//     'firstName': 'Jessica',
//     'lastName': 'Jones'
//   },
//   {
//     'firstName': 'Bobby',
//     'lastName': 'Newport'
//   }
// ];
// db.customers.insert(customers);
