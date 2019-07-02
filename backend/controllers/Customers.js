const express = require('express');
const router = express.Router();
const Customer = require('../models/CustomerSchema.js');
const mongoose = require('mongoose');
const db = require('../db.js');



//GET route
router.get('/', (req, res) => {
    Customer.find((error, data) => {
        res.send(data)
        if(error) return res.status(404).json({
          message: 'Customers not found'
        })
    })


    // mongoose.connection.db.collection('customers', {}, (error, results) => {
    //     collection.find({}).toArray((error, data) => {
    //       res.send(data)
    //     })
    // })

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
