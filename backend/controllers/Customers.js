const express = require('express');
const router = express.Router();
const Customer = require('../models/CustomerSchema.js');
const mongoose = require('mongoose');
const db = require('../db.js');



//GET route
router.get('/', (req, res) => {
    Customer.find((error, data) => {
        res.send(data)
    })


    // mongoose.connection.db.collection('customers', {}, (error, results) => {
    //     collection.find({}).toArray((error, data) => {
    //       res.send(data)
    //     })
    // })


    // Customer.find()
    //   .then(customers => res.send(customers))
    //   .catch(error => res.status(404).json({
    //     success: false
    //   }))
})
//CREATE route


//DELETE route

//SHOW route

//UPDATE route

module.exports = router;

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
